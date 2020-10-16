# **Zookeeper 服务注册与发现**
## **Eureka 停止更新了你怎么办**
---

[Eureka 已有停更公告](https://github.com/Netflix/eureka/wiki)

## **SpringCloud 整合 Zookeeper 代替 Eureka**
---

### **注册中心 Zookeeper**

1. **zookeeper 是一个分布式协调工具，可以实现注册中心功能**
2. **关闭 Linux 服务器防火墙后启动 zookeeper 服务器**
3. **zookeeper 服务器取代 Eureka 服务器，zk 作为服务注册中心**

### **服务提供者**

- **新建 `cloud-provider-payment-8004`**
- **POM**
```xml
<dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity-->
        <dependency>
            <groupId>com.yky.spring.cloud</groupId>
            <artifactId>cloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>
        <!-- SpringBoot 整合 zookeeper 客户端-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>
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
```

- **YML**

```yml
# 8004 表示注册到 zookeeper 服务器的支付服务提供者端口号
server:
  port: 8004

# 服务别名----注册 zookeeper 到注册中心名称
spring:
  application:
    name: cloud-provider-payment-8004
  cloud:
    zookeeper:
      connect-string: 127.0.0.1:21810
```

- **主启动类**

```java
/**
 * @version 1.0
 * @ClassName PaymentMain8004
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/18 8:47
 **/
@SpringBootApplication
/**
 * 该注解用于向使用consul或者zookeeper作为注册中心时注册服务
 */
@EnableDiscoveryClient
public class PaymentMain8004 {
    public static void main(String[] args) {
        SpringApplication.run(PaymentMain8004.class, args);
    }
}
```
- **Controller**

```java
/**
 * @version 1.0
 * @ClassName PaymentController
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/18 8:51
 **/
@Slf4j
@RestController
@RequestMapping(value = "/payment")
public class PaymentController {

    @Value("${server.port}")
    private String serverPort;

    @GetMapping(value = "/zk")
    public String paymentzk() {
        return "springcloud with zookeeper:" + serverPort + "\t" + UUID.randomUUID().toString();
    }
}
```

- **启动8004注册进zookeeper**
    - **启动后问题(*针对 linux 安装的 zookeeper*)**

    <br />

    ![启动后问题](/docs/assets/spring-cloud-2/E-module/yky-2020-08-18-090742.png)

    - **why**
        - **解决 zookeeper 版本 jar 包冲突问题**
        
        <br />

        ![启动后问题](/docs/assets/spring-cloud-2/E-module/yky-2020-08-18-091048.png)

        - **排出 zk 冲突后的新 POM**

        ```xml
           <!-- SpringBoot 整合 zookeeper 客户端-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>
            <!--  先排除自带的 zookeeper 3.5.3-->
            <exclusions>
                <exclusion>
                    <groupId>org.apache.zookeeper</groupId>
                    <artifactId>zookeeper</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <!-- 添加 zookeeper 3.4.9 版本-->
        <dependency>
            <groupId>org.apache.zookeeper</groupId>
            <artifactId>zookeeper</artifactId>
            <version>3.4.9</version>
        </dependency>
        ```
- **验证测试1**

![验证测试1](/docs/assets/spring-cloud-2/E-module/yky-2020-08-18-100049.png)

> 模拟发送请求：http://localhost:8004/payment/zk

- **验证测试2**

> 获得json串后用在线工具查看试试

![验证测试2](/docs/assets/spring-cloud-2/E-module/yky-2020-08-18-102422.png)

::: tip 思考
**服务节点是临时节点还是持久节点?**

答：**临时节点 (停止服务,zookeeper里数据并没有立即消失,过了一会才消失)**

:::

### **服务消费者**

- **新建 `cloud-consumerzk-order-80`**
- **POM**
```xml
<dependencies>
        <dependency>
            <groupId>com.yky.spring.cloud</groupId>
            <artifactId>cloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
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
```
- **YML**

```yml
server:
  port: 8000

spring:
  application:
    name: cloud-consumerzk-order-80
  cloud:
    # 注册到 zookeeper 地址
    zookeeper:
      connect-string: 127.0.0.1:21810
```

- **主启动**

```java
/**
 * @version 1.0
 * @ClassName OrderZKMain80
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/18 15:33
 **/
@SpringBootApplication
@EnableDiscoveryClient
public class OrderZKMain80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderZKMain80.class, args);
    }
}
```

- **业务类**
    - **配置Bean**
    ```java
    /**
     * @version 1.0
     * @ClassName ApplicationContextConfig
     * @Description TODO
     * @Author YKY
     * @Date 2020/8/18 15:40
     **/

    @Configuration
    public class ApplicationContextConfig {

        @Bean
        @LoadBalanced
        public RestTemplate getRestTemplate() {
            return new RestTemplate();
        }
    }
    ```
    - **Controller**
    ```java
    /**
     * @version 1.0
     * @ClassName OrderZKController
     * @Description TODO
     * @Author YKY
     * @Date 2020/8/18 15:45
     **/
    @Slf4j
    @RestController
    @RequestMapping(value = "/consumer/payment")
    public class OrderZKController {

        private static final String INVOME_URL = "http://cloud-provider-payment";

        @Resource
        private RestTemplate restTemplate;

        @GetMapping(value = "/zk")
        public String payment() {
            String result = restTemplate.getForObject(INVOME_URL + "/payment/zk", String.class);
            return result;
        }
    }
    ```
- **验证测试**

![验证测试1](/docs/assets/spring-cloud-2/E-module/yky-2020-08-18-160130.png)

> http://localhost:8004/payment/zk

- **访问测试地址**

> http://localhost/consumer/payment/zk