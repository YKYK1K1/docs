# **单机 Eureka 构建步骤**
## **IDEA 生成 eurekaServer 端服务注册中心类似物业公司**
---

- **建 Module**(`cloud-eureka-server-7001`)
- **改Pom**

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

    <artifactId>cloud-eureka-server-7001</artifactId>

    <dependencies>
        <!--eureka-server-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
        <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity-->
        <dependency>
            <groupId>com.yky.spring.cloud</groupId>
            <artifactId>cloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>
        <!--boot  web actuator-->
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
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
    - 1.X和2.X的对比说明
    ![1.X和2.X的对比说明](/docs/assets/spring-cloud-2/C-module/yky-2020-08-12-145356.png)

- **写YML**
```yml
server:
  port: 7001
eureka:
  instance:
    hostname: localhost #eureka 服务端的实例名称
  client:
    # false 表示不能象注册中心注册自己
    register-with-eureka: false
    # false 表示自己端就是注册中心,我的职责就是维护服务实例，并不需要去检索服务
    fetch-registry: false
    service-url:
    # 设置与 Eureka Server 交互的地址查询服务和注册服务都需要依赖这个地址。
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
```
- **主启动**

```java
package com.yky.spring.cloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * @version 1.0
 * @ClassName EurekaMain7001
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/12 14:40
 **/
@EnableEurekaServer
@SpringBootApplication
public class EurekaMain7001 {
    public static void main(String[] args) {
        SpringApplication.run(EurekaMain7001.class, args);
    }
}
```
- **测试**
    - http://localhost:7001/
    - ![](/docs/assets/spring-cloud-2/C-module/yky-2020-08-12-155357.png)

## **EurekaClient 端 cloud-provider-payment8001 将注册进 EurekaServer 成为服务提供者 provider，类似尚硅谷学校对外提供授课服务**
---

### **cloud-provider-payment8001**

- **添加 Pom 依赖**

```xml
<!--eureka-server-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
```
> **1.X和2.X的对比说明**
>
> ![1.X和2.X的对比说明](/docs/assets/spring-cloud-2/C-module/yky-2020-08-13-090604.png)

- **写YML**

```yml
eureka:
  client:
    # 表示是否将自己注册进 EurekaServer 默认为 true
    register-with-eureka: true
    # 是否从 EurekaServer 抓取已有的注册信息 默认为 true 。单节点无所谓，集群必须设置成 true 才能配合 ribbon 使用负载均衡
    fetchRegistry: true
    service-url:
      defaultZone: http://localhost:7001/eureka
```
- **主启动**
> 添加 `@EnableEurekaClient`

```java
package com.yky.spring.cloud;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * @version 1.0
 * @ClassName PaymentMain8001
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/7 14:09
 **/
@MapperScan(basePackages = "com.yky.spring.cloud.dao")
@SpringBootApplication
@EnableEurekaClient
public class PaymentMain8001 {
    public static void main(String[] args) {
        SpringApplication.run(PaymentMain8001.class, args);
    }
}
```
- **测试**
    - **先要启动 EurekaServer**
    - **http://localhost:7001/**
    ![http://localhost:7001/](/docs/assets/spring-cloud-2/C-module/yky-2020-08-13-092611.png)
    - **微服务注册名配置说明**
    ![微服务注册名配置说明](/docs/assets/spring-cloud-2/C-module/yky-2020-08-13-092335.png)

- **自我保护机制**
![自我保护机制](/docs/assets/spring-cloud-2/C-module/yky-2020-08-13-092732.png)

## **EurekaClient 端 cloud-consumer-order80 将注册进 EurekaServer 成为服务消费者 consumer,类似来尚硅谷上课消费的各位同学**
---

### **cloud-consumer-order80**

- **添加 Pom 依赖**
```xml
<!--eureka-server-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
```
- **写YML**

```yml
spring:
  application:
    name: cloud-order-service

eureka:
  client:
    # 表示是否将自己注册进 EurekaServer 默认为 true
    register-with-eureka: true
    # 是否从 EurekaServer 抓取已有的注册信息 默认为 true 。单节点无所谓，集群必须设置成 true 才能配合 ribbon 使用负载均衡
    fetchRegistry: true
    service-url:
      defaultZone: http://localhost:7001/eureka
```
- **主启动**
> 添加 `@EnableEurekaClient`

```java
package com.yky.spring.cloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * @version 1.0
 * @ClassName OrderMain80
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/7 15:45
 **/
@SpringBootApplication
@EnableEurekaClient
public class OrderMain80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderMain80.class, args);
    }
}
```
- **测试**
    - **先要启动 EurekaServer，7001服务**
    - **再要启动服务提供者provider，8001服务,8002服务(应该是80)**
    ![eureka服务器](/docs/assets/spring-cloud-2/C-module/yky-2020-08-13-093902.png)
    - **http://localhost/consumer/payment/get/31**

