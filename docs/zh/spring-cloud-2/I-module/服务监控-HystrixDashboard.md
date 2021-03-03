# **服务监控 HystrixDashboard**

## **概述**
---
> 除了隔离依赖服务的调用以外,Hystrix还提供了<font color=#FF0000>准实时的调用监控(Hystrix Dashboard)</font>,Hystrix 会持续地记录所有通过 Hystrix 发起的请求的执行信息,并以统计报表和图形的形式展示给用户,包括每秒执行多少请求多少成功,多少失败等,Netflix 通过 hystrix-metrics-event-stream 项目实现了对以上指标的监控。 Spring Cloud 也提供了 Hystrix Dashboard 的整合, 对监控内容转化成可视化界面。

## **仪表盘 9001**
---

- **新建`cloud-consumer-hystrix-dashboard-9001`**
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

    <artifactId>cloud-consumer-hystrix-dashboard-9001</artifactId>

    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
        </dependency>
        <!--  actuator 监控信息-->
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

</project>
```
- **YML**
```yml
server:
  port: 9001
```
- **主启动类`HystrixDashboardMain9001`+新注解`@EnableHystrixDashboard`**
```java
/**
 * @version 1.0
 * @ClassName HystrixDashboardMain9001
 * @Description TODO
 * @Author YKY
 * @Date 2020/12/2 9:37
 **/
@SpringBootApplication
@EnableHystrixDashboard
public class HystrixDashboardMain9001 {
    public static void main(String[] args) {
        SpringApplication.run(HystrixDashboardMain9001.class, args);
    }
}

```
- **所有Provider微服务提供类（8001/8002/8003）都需要监控依赖配置**
```xml
<!--  actuator 监控信息-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```
- **启动`cloud-consumer-hystrix-dashboard-9001`该微服务后续将监控微服务`8001`**

    - [http://localhost:9001/hystrix](http://localhost:9001/hystrix)

    ![豪猪哥](/docs/assets/spring-cloud-2/I-module/yky-20201202094321.png)

## **断路器演示**
---

- **修改`cloud-provider-hystrix-payment-8001`**
    1. 注意：新版本 Hystrix 需要在主启动类`MainAppHystrix8001`中指定监控路径
    ```java
        /**
     * 此配置是为了服务监控而配置,与服务容错本身无关,SpringCloud 升级后的坑
     * ServletRegistrationBean 因为 SpringCloud 的默认路径不是 "/hystrix.steam",
     * 只要在自己的项目里配置上下面的 servlet 就可以了
     * @return
     */
    @Bean
    public ServletRegistrationBean getServlet(){
        HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
        registrationBean.setLoadOnStartup(1);
        registrationBean.addUrlMappings("/hystrix.stream");
        registrationBean.setName("HystrixMetricsStreamServlet");
        return registrationBean;
    }
    ```
    2. Unable to connect to Command Metric Stream
    3. 404

- **监控测试**
    1. 启动1个eureka或者3个eureka集群均可
    2. 观察监控窗口
        - **`9001`监控`8001` -> 填写监控地址 `http://localhost:8001/hystrix.stream`**
        
        <br/>

        ![监控测试](/docs/assets/spring-cloud-2/I-module/yky-20201209085801.png)
        - **测试地址**
            - `http://localhost:8001/payment/circuit/31`
            - `http://localhost:8001/payment/circuit/-31`
            - **上述测试通过 -> ok**
            - **先访问正确地址，再访问错误地址，再正确地址，会发现图示断路器都是慢慢放开的**
                - **监控结果，成功**
                
                <br />

                ![监控结果，成功](/docs/assets/spring-cloud-2/I-module/yky-20201209091611.png)
                
                - **监控结果，失败**
                
                <br />

                ![监控结果，失败](/docs/assets/spring-cloud-2/I-module/yky-20201209091659.png)
        
        - **如何看**
        1. 7色
        2. 1圈
            - 实心圆：共有两种含义。它通过颜色的变化代表了实例的健康程度,它的健康度从绿色 < 黄色 < 橙色 < 红色递减。
            该实心圆除了颜色的变化之外,它的大小也会根据实例的请求流量发生变化,流量越大该实心圆就越大.所以通过该实心圆的展示,就可以在大量的实例中快速的发现<font color=#FF0000>故障实例和高压力实例</font>.
        3. 1线
            - 曲线：用来记录 2 分钟内流量的相对变化,可以通过它来观察到流量的上升和下降趋势
        
        4. 整图说明
            
        <br />

        ![整图说明](/docs/assets/spring-cloud-2/I-module/yky-20201209143425.png)
        
        5. 整图说明2
            
        <br />

        ![整图说明2](/docs/assets/spring-cloud-2/I-module/yky-20201209143622.png)
           
        - **搞懂一个才能看懂复杂的**

        <br />

        ![整图说明2](/docs/assets/spring-cloud-2/I-module/yky-20201209143742.png)