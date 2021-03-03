# **Gateway 新一代网关**
## **概述简介**
---

### **官网**

>  **上一代 `zuul 1.X` -> `https://github.com/Netflix/zuul/wiki`** 
> 
>  **当前 `gateway` -> `https://cloud.spring.io/spring-cloud-static/spring-cloud-gateway/2.2.1.RELEASE/reference/html/`**

### **是什么?**

::: tip 概述
Gateway 是在 Spring 生态系统之上构建的 API 网关服务,基于 Spring5,Spring Boot 2 和 Project Reactor等技术。

Gateway 旨在提供一种简单而有效的方式来对 API 进行路由,以及提供一些强大的过滤器功能,例如：熔断、限流、重试等
:::

![Spring Cloud Gateway](/docs/assets/spring-cloud-2/J-module/yky-20201209160358.png)

<br >

`Spring Cloud Gateway` 是 `Spring Cloud` 的一个全新项目,基于 `Spring 5.0`+ `Spring Boot 2.0` 和 `Project Reactor` 等技术开发的网关,它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。

<br >

`Spring Cloud Gateway` 作为 `Spring Cloud` 生态系统中的网关,目标是替代 `Zuul`,在 `Spring Cloud 2.0` 以上版本中,
没有对新版本的 `Zuul 2.0` 以上最新高性能版本进行集成,仍然还是使用的 `Zuul 1.x` 非 `Reactor` 模式的老版本。 而为了提升网关的性能,`Spring Cloud Gateway` 是基于 `WebFlux` 框架实现的,而 `WebFlux` 框架底层则使用了高性能的 `Reactor` 模式通信框架 `Netty`。

<br >

`Spring Cloud Gateway` 的目标提供统一的路由方式且基于 `Filter` 链的方式提供了网关基本的功能,例如：安全、监控/指标、限流。

::: warning 一句话
`Spring Cloud Gateway` 使用的 `Webflux` 中的 `reactor-netty` 响应式编程组件，底层使用了 `Netty` 通讯框架
:::
    

#### **源码架构**

<br >

![源码架构](/docs/assets/spring-cloud-2/J-module/yky-20201211091333.png)

### **能干嘛?**

1. **反向代理**
2. **鉴权**
3. **流量控制**
4. **熔断**
5. **日志监控**

### **微服务架构中网关在哪里**

<br >

![源码架构](/docs/assets/spring-cloud-2/J-module/yky-20201211091746.png)

### **有了`Zuul`了怎么又出来了`gateway`**

### **我们为什么选择`Gatway`?**
<br >

1. `neflix`不太靠谱，`zuul2.0`一直跳票,迟迟不发布
    - 一方面因为`Zuul1.0`已经进入了维护阶段,而且`Gateway`是`SpringCloud`团队研发的,是亲儿子产品,值得信赖。而且很多功能Zuul都没有用起来也非常的简单便捷。

    - `Gateway`是基于异步非阻塞模型上进行开发的,性能方面不需要担心。虽然`Netflix`早就发布了最新的`Zuul 2.x`,但`Spring Cloud`貌似没有整合计划。而且`Netlix`相关组件都宣布进入维护期;不知前景如何?
    
    - 多方面综合考虑`Gateway`是很理想的网关选择。

2. `SpringCloud Gateway`具有如下特性
    - `Spring Cloud Gateway`具有如下特性:
        1. <font color=#FF0000>基于Spring Framework 5, Project Relactor和Spring Boot 2.0进行构建;</font>
        2. 动态路由:能够匹配任何请求属性;
        3. 可以对路由指定Predicate (断言)和Filter (过滤器) ;
        4. 集成Hystrix的断路器功能;集成Spring Cloud服务发现功能;
        5. 易于编写的Predicate (断言)和Filter (过滤器);
        6. 请求限流功能;支持路径重写。

3. `SpringCloud Gateway`与`Zuul`的区别
    - 在`SpringCloud Finchley`正式版之前, `Spring Cloud`推荐的网关是`Netflix`提供的`Zuul`:
    1. `Zuul 1.x` 是个基于阻塞1/0的API Gateway
    2. `Zuul 1.x` <font color=#FF0000>基于Servlet 2.5使用阻塞架构</font> 它不支持任何长连接(如WebSocket) Zuul的设计模式和Nginx较像,每次1/。操作都是从工作线程中选择一个执行,请求线程被阻塞到工作线程完成,但是差别是Nginx用C++实现, Zuul用Java实,而JM本身会有第,一次加载较慢的情况,使得Zuul的性能相对较差。
    3. `Zuul 2.x`理念更先进,想基于Netty非阻塞和支持长连接,但`SpringCloud`目前还没有整合。`Zuul 2.x`的性能较Zuul 1.x有较大提升在性能方面,根据官方提供的基准测试, Spring Cloud Gateway的RPS (每秒请求数)是Zuul的1.6倍。
    4. `Spring Cloud Gateway`建立在`Spring Framework5`、`Project Reactor`和`Spring Boot 2`之上,使用非阻塞API 
    6. `Spring Cloud Gateway`还支持`WebSocket`,并且与 Spring 紧密集成拥有更好的开发体验

### **`Zuul 1.x` 模型**

<br >

![Zuul 1.x` 模型](/docs/assets/spring-cloud-2/J-module/yky-20201211140346.png)

### **`GateWay` 模型**

<br >

**WebFlux是什么？**

![GateWay` 模型](/docs/assets/spring-cloud-2/J-module/yky-20201211140643.png)

![WebFlux 是什么？](/docs/assets/spring-cloud-2/J-module/yky-20201214095036.png)

**说明**

传统的Web框架,比如说: `struts2`, `springmvc`等都是基于`Servlet API`与 `Servlet` 容器基础之上运行的。

但是

<font color=#FF0000>在`Servlet3.1`之后有了异步非阻塞的支持。</font>而WebFlux是一个典型非阻塞异步的框架,它的核心是基于Reactor的相关API实现的。相对于传统的web框架来说,它可以运行在诸如Netty, Undertow及支持Servlet3.1的容器上。非阻塞式+函数式编程(Spring5必须让你使用java8)

`Spring WebFlux`是`Spring 5.0`引入的新的响应式框架,区别于`Spring MVC`,它不需要依赖`Servlet API`,它是完全异步非阻塞的,并且基于 Reactor 来实现响应式流规范。

## **三大核心概念**
---

### **Route(路由)**

路由是构建网关的基本模块，它由ID，目标URI，一系列的断言和过滤器组成，如果断言为true则匹配该路由

### **Predicate（断言）**

参考的是java8的`java.util.function.Predicate`开发人员可以匹配HTTP请求中的所有内容（例如请求头或请求参数），如果请求与断言相匹配则进行路由

### **Filter(过滤)**

指的是Spring框架中`GatewayFilter`的实例，使用过滤器，可以在请求被路由前或者之后对请求进行修改。

### **总体**

![总体](/docs/assets/spring-cloud-2/J-module/yky-20201214133506.png)


**web请求,通过一些匹配条件,定位到真正的服务节点,并在这个转发过程的前后,进行一些精细化控制。**

**predicate 就是我们的匹配条件 而 filter,就可以理解为一个无所不能的拦截器。有了这两个元素,加上目标 url,就可以实现一个具体的路由了**

## **Gateway 工作流程**
---
### **官网总结**

![官网总结](/docs/assets/spring-cloud-2/J-module/yky-20201214134024.png)

客户端向Spring Cloud Gateway发出请求。然后在Gateway Handler Mapping中找到与请求相匹配的路由,将其发送到GatewayWeb Handler。

Handler再通过指定的过滤器链来将请求发送到我们实际的服务执行业务逻辑,然后返回。过滤器之间用虚线分开是因为过滤器可能会在发送代理请求之前( "pre" )或之后("post" )执行业务逻辑。

Filter在"pre"类型的过滤器可以做参数校验、权限校验、流量监控、日志输出、协议转换等,

在"post"类型的过滤器中可以做响应内容、响应头的修改,日志的输出,流量监控等有着非常重要的作用。

### **核心逻辑**

路由转发+执行过滤器链

## **入门配置**
---

### **新建 Module**

1. **cloud-gateway-gateway-9527**
2. **POM**
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

    <artifactId>cloud-gateway-gateway-9527</artifactId>

    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>

        <!-- 引入自己定义的 api 通用包,可以使用 Payment 支付 Entity -->
        <dependency>
            <groupId>com.yky.spring.cloud</groupId>
            <artifactId>cloud-api-commons</artifactId>
            <version>${project.version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>

        <!-- 一般基础配置类-->
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
3. **YML**
```yml
server:
  port: 9527
spring:
  application:
    name: cloud-gateway
eureka:
  instance:
    hostname: cloud-gateway-service
  client: # 服务提供者 provider 注册进 eureka 服务列表内
    service-url:
      register-with-eureka: true
      fetch-registry: true
      defaultZone: http://eureka7001.com:7001/eureka
```
4. **业务类**
5. **主启动类**
```java
/**
 * @version 1.0
 * @ClassName GateWayMain9527
 * @Description TODO
 * @Author YKY
 * @Date 2020/12/14 14:56
 **/
@SpringBootApplication
@EnableEurekaClient
public class GateWayMain9527 {
    public static void main(String[] args) {
        SpringApplication.run(GateWayMain9527.class, args);
    }
}
```
6. **9527网关如何做路由映射那？？？**
    - `cloud-provider-payment-8001`看看`controller`的访问地址
        - `get` 接口
        - `lb` 接口
    - 我们目前不想暴露`8001`端口，希望在`8001`外面套一层`9527`
7. **YML新增网关配置**
```yml
server:
  port: 9527
spring:
  application:
    name: cloud-gateway
  cloud:
    gateway:
      routes:
        - id: payment_routh # payment_route                              # 路由的ID,没有固定规则但要求唯一,建议配合服务名
          uri: http://localhost:8001                                     # 匹配后提供服务的路由地址
          predicates:
            - Path=/payment/get/**                                       # 断言,路径相匹配的进行路由

        - id: payment_routh2 # payment_route                              # 路由的ID,没有固定规则但要求唯一,建议配合服务名
            uri: http://localhost:8001                                     # 匹配后提供服务的路由地址
            predicates:
              - Path=/payment/lb/**                                       # 断言,路径相匹配的进行路由
eureka:
  instance:
    hostname: cloud-gateway-service
  client: # 服务提供者 provider 注册进 eureka 服务列表内
    service-url:
      register-with-eureka: true
      fetch-registry: true
      defaultZone: http://eureka7001.com:7001/eureka
```
8. **测试**

1. 启动`7001`
2. 启动`8001` -> `cloud-provider-payment-8001`
3. 启动`9527`网关
4. 访问说明
    - 添加网关前
        - [http://localhost:8001/payment/get/31](http://localhost:8001/payment/get/31)
    - 添加网关后
        - [http://localhost:9527/payment/get/31](http://localhost:9527/payment/get/31)

9. **YML 配置说明**

  - Gateway 网关路由有两种配置方式
    - 在配置文件yml中配置
    - 代码中注入`RouteLocator`的 Bean
      1. 官网案例
      2. 百度国内新闻网址，需要外网 -> `http://news.baidu.com/guoji`
      3. 自己写一个 百度新闻
        1. 业务需求：通过`9527`网关访问到外网的百度新闻网址
        2. 编码  `cloud-gateway-gateway-9527`
          1. 实现业务`config`
        ```java
          /**
          * @version 1.0
          * @ClassName GateWayConfig
          * @Description TODO
          * @Author YKY
          * @Date 2020/12/17 13:33
          **/
          @Configuration
          public class GateWayConfig {

              /**
              * 配置了一个 id 为 route-name 的路由规则，
              * 当访问地址 http://localhost:9527/guonei 时会自动转发到地址: http://news.baidu.com/guonei
              *
              * @param routeLocatorBuilder
              * @return
              */
              @Bean
              public RouteLocator customRouteLocator(RouteLocatorBuilder routeLocatorBuilder) {
                  RouteLocatorBuilder.Builder routes = routeLocatorBuilder.routes();

                  routes.route("path_route yky",
                          r -> r.path("/guonei")
                                  .uri("http://news.baidu.com/guonei")).build();
                  return routes.build();
              }
          }
        ```