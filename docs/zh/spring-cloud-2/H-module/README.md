# **OpenFeign 服务接口调用**
## **概述**
---

### **OpenFeign 是什么?**

![OpenFeign](/docs/assets/spring-cloud-2/H-module/yky-20200927142527.png)

### **能干嘛?**

![OpenFeign](/docs/assets/spring-cloud-2/H-module/yky-20200927143000.png)

### **Feign和OpenFeign两者区别**

![OpenFeign](/docs/assets/spring-cloud-2/H-module/yky-20200927143058.png)


## **OpenFeign使用步骤**
---

- **接口+注解**

    微服务调用接口+`@FeignClient`
- **新建`cloud-consumer-feign-order-80`**

Feign在消费端使用

![Feign 在消费端](/docs/assets/spring-cloud-2/H-module/yky-20200927152008.png)

- **POM**

```xml
    <dependencies>
        <!-- openfeign -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>

        <!-- eureka client -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>

        <!-- 引入自己定义的api通用包，可以使用 Payment 支付 Entity -->
        <dependency>
            <groupId>com.yky.spring.cloud</groupId>
            <artifactId>cloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>

        <!-- SpringBoot 整合 Web 组件-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <!-- 日常通用 jar 包配置-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

- **YML**

```xml
server:
  port: 80

eureka:
  client:
    register-with-eureka: false
    service-url:
      defaultZone: http://eureka7001.com:7001/eureka, http://eureka7002.com:7002/eureka
```

- **主启动类**

```java
/**
 * @version 1.0
 * @ClassName OrderFeignMain80
 * @Description TODO
 * @Author YKY
 * @Date 2020/10/9 16:47
 **/
@SpringBootApplication
@EnableFeignClients
public class OrderFeignMain80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderFeignMain80.class, args);
    }
}
```
- **业务类**
    - **业务逻辑接口+`@FeignClient`配置调用`provider`服务**
    - **新建`PaymentFeignService`接口并新增注解`@FeignClient`**
    ```java
    @Component
    @FeignClient(value = "CLOUD-PAYMENT-SERVICE")
    public interface PaymentFeignService {

        @GetMapping(value = "/get/{id}")
        public CommonResult<Payment> getByPrimaryKey(@PathVariable("id") Long id);
    }
    ```
    - **控制层Controller**
    ```java
    /**
    * @version 1.0
    * @ClassName OrderFeignController
    * @Description TODO
    * @Author YKY
    * @Date 2020/10/13 14:40
    **/
    @Slf4j
    @RestController
    @RequestMapping(value = "/consumer/payment")
    public class OrderFeignController {
        @Resource
        private PaymentFeignService service;

        @GetMapping(value = "/get/{id}")
        public CommonResult<Payment> getByPrimaryKey(@PathVariable("id") Long id) {
            return service.getByPrimaryKey(id);
        }
    }
    ```
- **测试**
    - **先启动2个eureka集群`7001`/`7002`**
    - **再启动2个微服务`8001`/`8002`**
    - **启动OpenFeign启动**
    - **`http://localhost/consumer/payment/get/31`**
    - **Feign自带负载均衡配置项**
- **小总结**

![OpenFeign](/docs/assets/spring-cloud-2/H-module/yky-20201013160103.png)