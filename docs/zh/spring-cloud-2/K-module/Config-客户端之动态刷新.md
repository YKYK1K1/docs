# **Config 客户端之动态刷新**
<br />
<font color=#FF0000>避免每次更新配置都要重启客户端微服务 3355 </font>

## **动态刷新 (手动版)**
---

1. 修改`3355`模块
2. POM 引入 `actuator` 监控
    ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    ```
3. 修改 YML，暴露监控端口
    ```yml
    server:
    port: 3355
    spring:
    application:
        name: config-client # 注册进 Eureka 服务器的微服务名
    cloud:
        #Config 客户端配置
        config:
        #### 读取分支
        label: dev #分支名称
        name: config #配置文件名称
        profile: test #读取后缀名称 上述 3个综合：master 分支上 config-dev.yml的配置文件被读取 http://config-3344.com:3344/master/config-dev.yml
        uri: http://localhost:3344 #配置中心地址

    # 服务注册到 eureka 地址
    eureka:
    client:
        service-url:
        defaultZone: http://localhost:7001/eureka

    # 暴露监控端点
    management:
    endpoints:
        web:
        exposure:
            include: "*"
    ```
4. `@RefreshScope`业务类 Controller 修改
    ```java
    /**
    * @version 1.0
    * @ClassName ConfigClientController
    * @Description TODO
    * @Author YKY
    * @Date 2021/2/20 10:23
    **/
    @RestController
    @RefreshScope
    public class ConfigClientController {

        @Value("${config.info}")
        private String configInfo;

        @GetMapping("/configInfo")
        public String getConfigInfo() {
            return configInfo;
        }
    }
    ```
5. 此时修改 github---> 3344 ---> 3355
    - `http://localhost:3355/configInfo`
    - 3355 改变了没有？？？ ---> 没有改变，(┬＿┬)
6. How
    - 需要运维人员发送Post请求刷新 3355
7. 必须是Post请求
    - `curl -X POST "http://localhost:3355/actuator/refresh"`
8. 再次
    - `http://localhost:3355/configInfo`  ->> ok
    - 成功实现了客户端 3355 刷新到最新配置内容,避免了服务的重启

## **想想还有什么问题?**

1. 假如有多个微服务客户端3355/3366/3377。。。。
2. 每个微服务都要执行一次post请求，手动刷新？
3. 可否广播，一次通知，处处生效？
4. 我们想大范围的自动刷新，求方法
