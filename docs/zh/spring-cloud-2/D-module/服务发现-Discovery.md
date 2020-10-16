# **服务发现 Discovery**
::: tip 
对于注册进 eureka 里面的微服务，可以通过服务发现来获得该服务的信息
:::

## **修改 `cloud-provider-payment8001` 的Controller**
---

```java
    @Resource
    private DiscoveryClient discoveryClient;

    @GetMapping(value = "/discovery")
    public Object discovery() {
        List<String> services = discoveryClient.getServices();
        for (String service : services) {
            log.info("**********element:" + service);
        }
        List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");
        for (ServiceInstance instance : instances) {
            log.info(instance.getServiceId() + "\t" + instance.getHost() + "\t" + instance.getPort() + "\t" + instance.getUri());
        }
        return discoveryClient;
    }
```

## **8001主启动类**
---
**添加`@EnableDiscoveryClient`**

```java
@MapperScan(basePackages = "com.yky.spring.cloud.dao")
@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient
public class PaymentMain8001 {
    public static void main(String[] args) {
        SpringApplication.run(PaymentMain8001.class, args);
    }
}
```

## **自测**
---

1. **先要启动EurekaServer，7001/7002服务**
2. **再启动8001主启动类，需要稍等一会**
3. **http://localhost:8001/payment/discovery**
