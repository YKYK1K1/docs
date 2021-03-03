# **Hystrix 案例**

## **构建**

- **新建 `cloud-provider-hystrix-payment-8001`**
- **POM**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>spring-cloud-2020</artifactId>
        <groupId>com.yky.spring.cloud</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>cloud-provider-hystrix-payment-8001</artifactId>

    <dependencies>
        <!-- hystrix-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>

        <!--eureka-client-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <!-- web-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity-->
        <dependency>
            <groupId>com.yky.spring.cloud</groupId>
            <artifactId>cloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>
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
</project>
```
- **YML**
```yml
server:
  port: 8001

spring:
  application:
    name: cloud-provider-hystrix-payment

eureka:
  client:
    # 表示是否将自己注册进 EurekaServer 默认为 true
    register-with-eureka: true
    # 是否从 EurekaServer 抓取已有的注册信息 默认为 true 。单节点无所谓，集群必须设置成 true 才能配合 ribbon 使用负载均衡
    fetchRegistry: true
    service-url:
      defaultZone: http://eureka7001.com:7001/eureka/
#      defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka  #集群版

```

- **主启动**

```java
/**
 * @version 1.0
 * @ClassName PaymentHystrixMain8001
 * @Description TODO
 * @Author YKY
 * @Date 2020/11/24 10:57
 **/
@SpringBootApplication
@EnableEurekaClient
public class PaymentHystrixMain8001 {
    public static void main(String[] args) {
        SpringApplication.run(PaymentHystrixMain8001.class, args);
    }
}
```

- **业务类**
    - **service**
    ```java
    /**
     * @version 1.0
     * @ClassName PaymentService
     * @Description TODO
     * @Author YKY
     * @Date 2020/11/24 11:27
    **/
    @Service
    public class PaymentService {

        /**
        * 正常访问肯定 肯定OK
        *
        * @param id
        * @return
        */
        public String paymentInfo_OK(Integer id) {
            return "线程池：" + Thread.currentThread().getName() + " paymentInfo_OK,id：" + id + "\t" + "O(∩_∩)O";
        }

        /**
        * 超时访问
        *
        * @param id
        * @return
        */
        public String paymentInfo_TimeOut(Integer id) {
            int timeNumber = 3;
            try {
                TimeUnit.SECONDS.sleep(timeNumber);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "线程池：" + Thread.currentThread().getName() + " paymentInfo_TimeOut,id：" + id + "\t" + "耗时(秒)" + timeNumber + "秒钟";
        }
    }
    ```
    - **controller**
    ```java
    /**
    * @version 1.0
    * @ClassName PaymentController
    * @Description TODO
    * @Author YKY
    * @Date 2020/11/24 11:37
    **/
    @RestController
    @Slf4j
    public class PaymentController {

        @Resource
        private PaymentService service;

        @Value("${server.port}")
        private String serverPort;

        @GetMapping("/payment/hystrix/ok/{id}")
        public String paymentInfo_OK(@PathVariable("id") Integer id) {
            String result = service.paymentInfo_OK(id);
            log.info("***************result：" + result);
            return result;
        }

        @GetMapping("/payment/hystrix/timeout/{id}")
        public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
            String result = service.paymentInfo_TimeOut(id);
            log.info("***************result：" + result);
            return result;
        }
    }
    ```
- **正常测试**
    - 启动 `eureka-7001`
    - 启动 `cloud-provider-hystrix-payment-8001`
    - 访问
        - 访问  `http://localhost:8001/payment/hystrix/ok/31`
        - 每次调用耗费5秒钟 `http://localhost:8001/payment/hystrix/timeout/31`
    - 上述 module 均 OK

以上述为根基平台，从正确->错误->降级熔断->恢复

## **高并发测试**
    
::: tip 
上述在非高并发情形下，还能勉强满足   but.....
:::

### **Jmeter压测测试**

> 下载地址：[https://jmeter.apache.org/download_jmeter.cgi](https://jmeter.apache.org/download_jmeter.cgi)  安装及使用：[https://www.cnblogs.com/monjeo/p/9330464.html](https://www.cnblogs.com/monjeo/p/9330464.html)

- **开启Jmeter，来20000个并发压死8001，20000个请求都去访问`paymentInfo_TimeOut`服务**

![Jmeter 线程](/docs/assets/spring-cloud-2/I-module/yky-20201124152738.png)

<br >

- **Jmeter 高并发配置Http请求**

![Jmeter 高并发配置Http请求](/docs/assets/spring-cloud-2/I-module/yky-20201124153355.png)


- **看演示结果**

1. 两个都在自己转圈圈
2. 为什么会被卡死

> tomcat的默认的工作线程数被打满了，没有多余的线程来分解压力和处理。

### **Jmeter压测结论**

<font color=#FF0000>上面还是服务提供者 8001 自己测试，假如此时外部的消费者 80 也来访问，那消费者只能干等，最终导致消费端 80 不满意，服务端 8001 直接被拖死</font>

### **看热闹不嫌弃事大，80 新建加入**

- **新建 `cloud-consumer-feign-hystrix-order-80`**
- **POM**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>spring-cloud-2020</artifactId>
        <groupId>com.yky.spring.cloud</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>cloud-consumer-feign-hystrix-order-80</artifactId>

    <dependencies>
        <!-- hystrix-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>

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
</project>
```
- **YML**
```yml
server:
  port: 80

eureka:
  client:
    register-with-eureka: false
    service-url:
      defaultZone: http://eureka7001.com:7001/eureka/
```

- **主启动**
```java
/**
 * @version 1.0
 * @ClassName OrderHystrixMain80
 * @Description TODO
 * @Author YKY
 * @Date 2020/11/24 16:37
 **/
@SpringBootApplication
@EnableEurekaClient
public class OrderHystrixMain80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderHystrixMain80.class, args);
    }
}
```
- **业务类**
    - `PaymentHystrixService`
    ```java
    /**
    * @version 1.0
    * @ClassName PaymentHystrixService
    * @Description TODO
    * @Author YKY
    * @Date 2020/11/24 16:45
    **/
    @Component
    @FeignClient(value = "CLOUD-PROVIDER-HYSTRIX-PAYMENT")
    public interface PaymentHystrixService {

        @GetMapping("/payment/hystrix/ok/{id}")
        String paymentInfo_OK(@PathVariable("id") Integer id);

        @GetMapping("/payment/hystrix/timeout/{id}")
        String paymentInfo_TimeOut(@PathVariable("id") Integer id);
    }
    ```
    - `OrderHystrixController`
    ```java
    /**
    * @version 1.0
    * @ClassName OrderHystrixController
    * @Description TODO
    * @Author YKY
    * @Date 2020/11/24 16:45
    **/
    @Slf4j
    @RestController
    public class OrderHystrixController {

        @Resource
        private PaymentHystrixService service;

        @GetMapping("/consumer/payment/hystrix/ok/{id}")
        public String paymentInfo_OK(@PathVariable("id") Integer id) {
            String result = service.paymentInfo_OK(id);
            return result;
        }

        @GetMapping("/consumer/payment/hystrix/timeout/{id}")
        public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
            String result = service.paymentInfo_TimeOut(id);
            return result;
        }
    }
    ```
- **正常测试**
    - `http://localhost/consumer/payment/hystrix/ok/31`
- **高并发测试** 
    - 2W个线程压 8001
    - 消费端 80 微服务再去访问正常的 OK 微服务 8001 地址
    - `http://localhost/consumer/payment/hystrix/timeout/31`
    - 消费者80，崩溃
        - 要么转圈圈等待
        - 要么消费端报超时错误
        ![Jmeter 高并发配置Http请求](/docs/assets/spring-cloud-2/I-module/yky-20201126153645.png)

## **故障现象和导致原因**
---

::: tip 原因

8001 同一层次的其他接口服务被困死，因为 tomcat 线程里面的工作线程已经被挤占完毕

80 此时调用 8001，客户端访问响应缓慢，转圈圈
:::

## **上诉结论**
---

> 正因为有上述故障或不佳表现，才有我们的降级/容错/限流等技术诞生

## **如何解决？解决的要求**
---

1. **超时导致服务器变慢（转圈）-> 超时不再等待** 
2. **出错（宕机或程序运行出错）-> 出错要有兜底**

- **解决**
    - **对方服务（8001）超时了，调用者（80）不能一直卡死等待，必须有服务降级**
    - **对方服务（8001）down机了，调用者（80）不能一直卡死等待，必须有服务降级**
    - **对方服务（8001）OK，调用者（80）自己出故障或有自我要求（自己的等待时间小于服务提供者），自己处理降级**

## **服务降级***
---

1. **降低配置 -> `@HystrixCommand`** 
2. **8001 先从自身找问题**
    - 设置自身调用超时时间的峰值，峰值内可以正常运行，超过了需要有兜底的方法处理，作服务降级 fallback
3. **8001 fallback**
    - <font color=#FF0000>**业务类启用**</font>
        - `@HystrixCommand`报异常后如何处理
        ```java
        /**
        * @version 1.0
        * @ClassName PaymentService
        * @Description TODO
        * @Author YKY
        * @Date 2020/11/24 11:27
        **/
        @Service
        public class PaymentService {

            /**
            * 正常访问肯定 肯定OK
            *
            * @param id
            * @return
            */
            public String paymentInfo_OK(Integer id) {
                return "线程池：" + Thread.currentThread().getName() + " paymentInfo_OK,id：" + id + "\t" + "O(∩_∩)O";
            }

            /**
            * 超时访问
            *
            * @param id
            * @return
            */
            @HystrixCommand(fallbackMethod = "paymentInfo_TimeOutHandler", commandProperties = {
                    @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "3000")
            })
            public String paymentInfo_TimeOut(Integer id) {
                int timeNumber = 5;
                //int age = 10/0;
                try {
                    TimeUnit.SECONDS.sleep(timeNumber);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                return "线程池：" + Thread.currentThread().getName() + " paymentInfo_TimeOut,id：" + id + "\t" + "耗时(秒)" + timeNumber + "秒钟";
            }


            public String paymentInfo_TimeOutHandler(Integer id) {
                return "线程池：" + Thread.currentThread().getName() + " paymentInfo_TimeOutHandler,id：" + id + "\t" + "/(ㄒoㄒ)/~~";
            }
        }
        ```
        > 一旦调用服务方法失败并抛出了错误信息后，会自动调用`@HystrixCommand`标注好的 fallbackMethod 调用类中的指定方法

        ![图示](/docs/assets/spring-cloud-2/I-module/yky-20201127091741.png)

        ::: warning 上图故意制造两个异常：
        1. int age = 10/0; 计算异常
        2. 我们能接受 3 秒钟,它运行 5 秒钟,超时异常。

        当前服务不可用了, 做服务降级,<font color=#30BA50>兜底的方案都是</font> `paymentInfo_TimeOutHandler`
        :::
    - <font color=#FF0000>**主启动类激活**</font>
        - **添加新注解`@EnableCircuitBreaker`**
4. **80 fallback**

> 80 订单微服务，也可以更好的保护自己，自己也依样画葫芦进行客户端降级保护

::: warning 题外话，切记
一般的服务降级是放在客户端 `80` 根据业务需求 放在客户端还是消费端都可以

我们自己配置过的热部署方式对java代码的改动明显，但对`@HystrixCommand`内属性的修改建议重启微服务
:::

- **YML**
```yml
feign:
  hystrix:
    enabled: true #如果处理自身的容错就开启。开启方式与生产端不一样。
```
- **主启动 -> `@EnableHystrix`** 
- **业务类**
```java
   @GetMapping("/consumer/payment/hystrix/timeout/{id}")
   @HystrixCommand(fallbackMethod = "paymentInfo_TimeOutFallbackMethod", commandProperties = {
            @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "100")
    })
    public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
        int age = 10 / 0;
        String result = service.paymentInfo_TimeOut(id);
        return result;
    }

    public String paymentInfo_TimeOutFallbackMethod(Integer id) {
        return "我是消费者 80,对方支付系统繁忙请10秒后再试!,/(ㄒoㄒ)/~~";
    }
```
::: warning 目前问题
每个业务方法对应一个兜底的方法，代码膨胀

统一和自定义的分开
:::

5. **解决问题**

> 每个方法配置一个？？？膨胀

- **feign 接口系列**
- **`@DefaultProperties(defaultFallback = "")`**

![DefaultProperties 注解](/docs/assets/spring-cloud-2/I-module/yky-20201127135000.png)

::: tip @DefaultProperties 说明

1对1 每个方法配置一个服务降级方法，技术上可以，实际上傻X

1对N 除了个别重要核心业务有专属,其他普通的可以通过`@DefaultProperties(defaultFallback = "")`统一跳转到统一处理结果页面

<font color=#6495ED>通用的和独享的各自分开，避免了代码膨胀，合理减少了代码量</font>
:::

- **controller 配置**
```java
/**
 * @version 1.0
 * @ClassName OrderHystrixController
 * @Description TODO
 * @Author YKY
 * @Date 2020/11/24 16:45
 **/
@Slf4j
@RestController
@DefaultProperties(defaultFallback = "payment_Global_FallbackMethod")
public class OrderHystrixController {

    @Resource
    private PaymentHystrixService service;

    @GetMapping("/consumer/payment/hystrix/ok/{id}")
    public String paymentInfo_OK(@PathVariable("id") Integer id) {
        String result = service.paymentInfo_OK(id);
        return result;
    }

    @GetMapping("/consumer/payment/hystrix/timeout/{id}")
//    @HystrixCommand(fallbackMethod = "paymentInfo_TimeOutFallbackMethod", commandProperties = {
//            @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "100")
//    })
    @HystrixCommand
    public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
        int age = 10 / 0;
        String result = service.paymentInfo_TimeOut(id);
        return result;
    }

    public String paymentInfo_TimeOutFallbackMethod(Integer id) {
        return "我是消费者 80,对方支付系统繁忙请10秒后再试!,/(ㄒoㄒ)/~~";
    }

    //下面是全局 fallback 方法
    public String payment_Global_FallbackMethod() {
        return "Global 异常处理信息,请稍后再试,/(ㄒoㄒ)/~~";
    }
}
```

::: danger 和业务逻辑混一起？？？混乱

1. **服务降级，客户端去调用服务端，碰上服务端宕机或关闭**
2. **本次案例服务降级处理是在客户端 80 实现完成的，与服务端 8001 没有关系，只需要为 Feign 客户端定义的接口添加一个服务降级处理的实现类即可实现解耦**
3. **未来我们要面对的异常**
    - 运行
    - 超时
    - 宕机
4. **再看我们的业务类 PaymentController**

![PaymentController 业务类](/docs/assets/spring-cloud-2/I-module/yky-20201127140015.png)

5. **修改`cloud-consumer-feign-hystrix-order-80`**
6. **根据`cloud-consumer-feign-hystrix-order80`已经有的`PaymentHystrixService`接口，重新新建一个类（`PaymentFallbackService`）实现该接口，`统一为接口里面的方法进行异常处理`**
7. **`PaymentFallbackService`类实现`PaymentHystrixService`接口**
```java
/**
 * @version 1.0
 * @ClassName PaymentFallbackService
 * @Description TODO
 * @Author YKY
 * @Date 2020/11/27 14:21
 **/
@Component
public class PaymentFallbackService implements PaymentHystrixService {
    @Override
    public String paymentInfo_OK(Integer id) {
        return "---------PaymentFallbackService fallback paymentInfo_OK,/(ㄒoㄒ)/~~";
    }

    @Override
    public String paymentInfo_TimeOut(Integer id) {
        return "---------PaymentFallbackService fallback paymentInfo_TimeOut,/(ㄒoㄒ)/~~";
    }
}
```
8. **YML**
```yml
feign:
  hystrix:
    enabled: true #如果处理自身的容错就开启。开启方式与生产端不一样。
```
9. **`PaymentHystrixService` 接口**
```java
/**
 * @version 1.0
 * @ClassName PaymentHystrixService
 * @Description TODO
 * @Author YKY
 * @Date 2020/11/24 16:45
 **/
@Component
@FeignClient(value = "CLOUD-PROVIDER-HYSTRIX-PAYMENT", fallback = PaymentFallbackService.class)
public interface PaymentHystrixService {

    @GetMapping("/payment/hystrix/ok/{id}")
    String paymentInfo_OK(@PathVariable("id") Integer id);

    @GetMapping("/payment/hystrix/timeout/{id}")
    String paymentInfo_TimeOut(@PathVariable("id") Integer id);
}
```
10. **测试**
- 单个 eureka 先启动 `7001`
- `PaymentHystrixMain8001`启动
- 正常访问测试 -> `http://localhost/consumer/payment/hystrix/ok/31`
- `故意关闭`微服务 `8001`
- `客户端自己调用提升`

此时服务端provider已经down了，但是我们做了服务降级处理，让客户端在服务端不可用时也会获得提示信息而不会挂起耗死服务器
:::

## **服务熔断***
---

> 断路器 -> 一句话就是家里保险丝
### **熔断是什么?** 

#### **熔断机制概述**

熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务出错不可用或者响应时间太长时,会进行服务的降级,进而熔断该节点微服务的调用,快速返回错误的响应信息。

<font color=#0aa3a3>当检测到该节点微服务调用响应正常后,恢复调用链路</font>

在 Spring Cloud 框架里, 熔断机制通过 Hystrix 实现。 Hystrix 会监控微服务间调用的状况,当失败的调用到一定阈值,缺省是5秒内20次调用失败,就会启动熔断机制。熔断机制的注解是`@HystrixCommand`

#### **大神论文**

> `https://martinfowler.com/bliki/CircuitBreaker.html`

### **实操**
---

- **修改 `cloud-provider-hystrix-payment-8001`**
- **`PaymentService`** 
```java
    /**
     * 服务熔断
     */
    @HystrixCommand(fallbackMethod = "paymentCircuitBreaker_fallback", commandProperties = {
            @HystrixProperty(name = "circuitBreaker.enabled", value = "true"),//是否开启断路器
            @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "10"),//请求次数
            @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "10000"),//时间窗口期
            @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "60"),//失败率达到多少后跳闸
    })
    public String paymentCircuitBreaker(@PathVariable("id") Integer id) {
        if (id < 0) {
            throw new RuntimeException("*******id 不能负数");
        }
        String serialNumber = IdUtil.simpleUUID();
        return Thread.currentThread().getName() + "\t" + "调用成功：流水号" + serialNumber;
    }

    public String paymentCircuitBreaker_fallback(@PathVariable("id") Integer id) {
        return "id 不能负数,请稍后再试,/(ㄒoㄒ)/~~ id：" + id;
    }

```
- **why 配置这些参数**

![PaymentController 业务类](/docs/assets/spring-cloud-2/I-module/yky-20201130100325.png)

- **`PaymentController`** 
```java
   /**
     * 服务熔断
     */
    @GetMapping("/payment/circuit/{id}")
    public String paymentCircuitBreak(@PathVariable("id")Integer id){
        String result =service.paymentCircuitBreaker(id);
        log.info("*****result："+result);
        return result;

    }
```
- **测试**
    - **自测`cloud-provider-hystrix-payment-8001`**
    - **正确 `http://localhost:8001/payment/circuit/31`**
    - **错误 `http://localhost:8001/payment/circuit/-31`**
    - **一次正确一次错误trytry**
    - **重点测试**
    多次错误,然后慢慢正确，发现刚开始不满足条件，就算是正确的访问地址也不能进行访问，需要慢慢的恢复链路
### **原理（小总结）**
- **大神结论**

![PaymentController 业务类](/docs/assets/spring-cloud-2/I-module/yky-20201201100537.png)

- **熔断类型**
    - **熔断打开**

        请求不再进行调用当前服务，内部设置时钟一般为MTTR(平均故障处理时间)，当打开时长达到所设时钟则进入熔断状态
    - **熔断关闭**
 
        熔断关闭不会对服务进行熔断
    - **熔断半开**
    
        部分请求根据规则调用当前服务，如果请求成功且符合规则则认为当前服务恢复正常，关闭熔断
- **官网断路器流程图**
    
    ![官网断路器流程图](/docs/assets/spring-cloud-2/I-module/yky-20201201102629.png)
    
    - **官网步骤**

    <br />

    ![官网步骤](/docs/assets/spring-cloud-2/I-module/yky-20201201100905.png)

    - **断路器在什么情况下开始起作用**

    <br />

    ![断路器在什么情况下开始起作用](/docs/assets/spring-cloud-2/I-module/yky-20201201101040.png)

    - **断路器开启或者关闭的条件**
        1. 当满足一定阀值的时候（默认10秒内超过20个请求次数）
        2. 当失败率达到一定的时候（默认10秒内超过50%请求失败）
        3. 到达以上阀值，断路器将会开启
        4. 当开启的时候，所有请求都不会进行转发
        5. 一段时间之后（默认是5秒），这个时候断路器是半开状态，会让其中一个请求进行转发。如果成功，断路器会关闭，若失败，继续开启。重复4和5
    
    <br />    
    
    - **断路器打开之后**
        1. 再有请求调用的时候,将不会调用主逻辑,而是直接调用降级 fallback.通过断路器,实现了自动地发现错误并将降级逻辑切换为主逻辑,减少响应延迟的效果.
        2. 原来的主逻辑要如何恢复呢?

        对于这一问题, hystrix 也为我们实现了自动回复功能。

        当断路器打开,对主逻辑进行熔断之后,hystrix 会启动一个休眠时间窗,在这个时间窗内，降级逻辑是临时的成为主逻辑,当休眠时间窗到期,断路器将进入半开状态,释放一次请求到原来的主逻辑上,如果此次请求正常返回,那么断路器将继续闭合,主逻辑恢复,如果这次请求依然有问题,断路器继续进入打开状态,休眠时间窗重新计时。
    - **All配置**
    
    ![All配置](/docs/assets/spring-cloud-2/I-module/yky-Hystrix-All-配置.png)

## **服务限流***
---

> 后面高级篇讲解 alibaba 的 Sentinel 说明