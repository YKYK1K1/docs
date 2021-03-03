# **Config 客户端配置与测试**
## **新建 cloud-config-client-3355**
---
## **POM**
---
```xml
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-config</artifactId>
        </dependency>
        <!--eureka-client-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
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
```

## **bootstap.yml**
---

> `applicaiton.yml`是用户级的资源配置项
> `bootstrap.yml`是系统级的,<font color=#FF0000>优先级更加高</font>
>
> Spring Cloud会创建一个"Bootstrap Context",作为Spring应用的Application Context的<font color=#FF0000>父上下文</font>。初始化的时候, 'BootstrapContext'负责从<font color=#00C5CD>外部源</font>加载配置属性并解析配置。这两个上下文共享一个从外部获取的Environment
>
> `Bootstrap`属性有高优先级,默认情况下,它们不会被木地配置覆盖.`Bootstrap context`和`Application Context`有着不同的约定,所以新增了一个`bootstrap.yml`文件,保证`Bootstrap Context`和`Application Context`配置的分离。
> 
> <font color=#FF0000>要将Client模块下的application.yml文件改为bootstrap.yml,这是很关键的</font>
> 因为`bootstrap.yml`是比`application.yml`先加载的。`bootstrap.yml`优先级高于`application.yml`

```yml
server:
  port: 3344
spring:
  application:
    name: config-client # 注册进 Eureka 服务器的微服务名
  cloud:
    #Config 客户端配置
    config:
      #### 读取分支
      label: master #分支名称
      name: config #配置文件名称
      profile: dev #读取后缀名称 上述 3个综合：master 分支上 config-dev.yml的配置文件被读取 http://config-3344.com:3344/master/config-dev.yml
      uri: http://localhost:3344 #配置中心地址

# 服务注册到 eureka 地址
eureka:
  client:
    service-url:
      defaultZone: http://localhost:7001/eureka
```
### **说明**

![](/docs/assets/spring-cloud-2/K-module/yky-20210219155241.png)


> 修改`config-dev.yml`配置并提交到 GitHub 中，比如加个变量 age 或者版本号 version

## **主启动 ConfigClientMain3355**
---

```java
/**
 * @version 1.0
 * @ClassName ConfigClientMain3355
 * @Description TODO
 * @Author YKY
 * @Date 2021/2/20 10:12
 **/
@SpringBootApplication
@EnableEurekaClient
public class ConfigClientMain3355 {
    public static void main(String[] args) {
        SpringApplication.run(ConfigClientMain3355.class, args);
    }
}
```
## **业务类**
---

```java
/**
 * @version 1.0
 * @ClassName ConfigClientController
 * @Description TODO
 * @Author YKY
 * @Date 2021/2/20 10:23
 **/
@RestController
public class ConfigClientController {

    @Value("${config.info}")
    private String configInfo;

    @GetMapping("/configInfo")
    public String getConfigInfo() {
        return configInfo;
    }
}
```
## **测试**
---

- 启动 Config 配置中心`3344`微服务并自测
    - `http://config-3344.com:3344/master/config-dev.yml`
    - `http://config-3344.com:3344/master/config-test.yml`
- 启动`3355`作为 Client 准备访问
    - `http://localhost:3355/configInfo`


<font color=#00BB00>成功实现了客户端`3355`访问`Spring-Cloud-Config-3344`通过 GitHub 获取配置信息</font>

## **问题随时而来，分布式配置的动态刷新**
---

1. Linux 运维修改 GitHub 上的配置文件内容做调整
2. 刷新`3344`，发现 ConfigServer 配置中心立刻响应
3. 刷新`3355`，发现 ConfigServer 客户端没有任何响应
4. `3355` 没有变化除非自己重启或者重新加载
5. 难道每次运维修改配置文件，客户端都需要重启？？噩梦