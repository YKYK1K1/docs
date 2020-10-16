# **Ribbon 负载均衡算法**
## **原理**
---

![原理](/docs/assets/spring-cloud-2/G-module/yky-20200922142849.png)

## **RoundRobinRule 源码**

## **手写**

::: tip 
手写一个本地负载均衡的算法

原理 + JUC( CAS+自旋锁的复习 )

:::

1. `7001/7002` 集群启动
2. `8001/8002` 微服务改造
- `controller`
```java
@GetMapping(value = "/lb")
public String getPaymentLB() {
    return serverPort;
}
```
3. `80`订单微服务改造
- 1. `ApplicationContextBean`去掉`@LoadBalanced`
- 2. `LoadBalancer`接口
```java

/**
 * @version 1.0
 * @ClassName OrderMain80
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/7 15:45
 **/
@SpringBootApplication
@EnableEurekaClient
//@RibbonClient(name = "CLOUD-PAYMENT-SERVICE", configuration = MySelfRule.class)
public class OrderMain80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderMain80.class, args);
    }
}

```
- 3. MyLB
```java
/**
 * @version 1.0
 * @ClassName MyLB
 * @Description TODO
 * @Author YKY
 * @Date 2020/9/25 11:11
 **/
@Component
public class MyLB implements LoadBalancer {

    private AtomicInteger atomicInteger = new AtomicInteger(0);

    public final int getAndIncrement() {
        int current;
        int next;

        do {
            current = this.atomicInteger.get();
            next = current >= 2147483647 ? 0 : current + 1;
        } while (!this.atomicInteger.compareAndSet(current, next));
        System.out.println("**********第几次访问，次数next:" + next);

        return next;
    }


    @Override
    public ServiceInstance instances(List<ServiceInstance> serviceInstances) {
        int index = getAndIncrement() % serviceInstances.size();
        return serviceInstances.get(index);
    }
}
```

- 4. OrderController
```java
/**
 * @version 1.0
 * @ClassName OrderController
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/7 16:29
 **/
@Slf4j
@RequestMapping(value = "/consumer/payment")
@RestController
public class OrderController {

    @Resource
    private LoadBalancer loadBalancer;

    @Resource
    private DiscoveryClient discoveryClient;

    @GetMapping(value = "/lb")
    public String getPaymentLB() {
        List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");
        if (instances == null || instances.size() <= 0) {
            return null;
        }
        ServiceInstance serviceInstance = loadBalancer.instances(instances);
        URI uri = serviceInstance.getUri();
        return restTemplate.getForObject(uri + "/payment/lb", String.class);
    }
}
```

- 5. 测试
    - `http://localhost/consumer/payment/lb`