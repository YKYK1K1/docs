# **Config服务端配置与测试**
---

- 用你自己的账号在 Github 上新建一个名为`sprincloud-config`的新 Repository
- 由上一步获得刚新建的 git 地址 `git@github.com:YKYK1K1/springcloud-config.git`
- 本地硬盘上新建 git 仓库并 clone

    ![](/docs/assets/spring-cloud-2/K-module/yky-20210218161538.png)
    - 本地地址：`D:\workspace\spring-cloud-2020`
    - git 命令：`$ git clone git@github.com:YKYK1K1/springcloud-config.git`
- 此时在本地 D 盘符下 `D:\workspace\spring-cloud-2020\springcloud-config`
    - 表示多个环境的配置文件
    - 保存格式必须为UTF-8
    - 如果需要修改，此处模拟运维人员操作 git 和 github
        - `$ git add`
        - `$ git commit -m "init yml"`
        - `$ git push origin master`
- 新建 Module 模块`cloud-config-center-3344`它既为 Cloud 的配置中心模块 cloudConfig Center
- POM
```xml
 <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-config-server</artifactId>
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
- YML
```yml
server:
  port: 3344
spring:
  application:
    name: cloud-config-center # 注册进 Eureka 服务器的微服务名
  cloud:
    config:
      server:
        git:
          uri: https://github.com/YKYK1K1/springcloud-config.git # GitHub 上面的 git 仓库名字
          #### 搜索目录
          search-paths:
            - springcloud-config
      #### 读取分支
      label: master

# 服务注册到 eureka 地址
eureka:
  client:
    service-url:
      defaultZone: http://localhost:7001/eureka
```
- 主启动类
    - `ConfigCenterMain3344`
    ```java
    /**
    * @version 1.0
    * @ClassName ConfigCenterMain3344
    * @Description TODO
    * @Author YKY
    * @Date 2021/2/18 16:59
    **/
    @SpringBootApplication
    @EnableConfigServer
    public class ConfigCenterMain3344 {
        public static void main(String[] args) {
            SpringApplication.run(ConfigCenterMain3344.class, args);
        }
    }
    ```
- windows 下修改`hosts`文件，增加映射
    - `127.0.0.1 config-3344.com`
- 测试通过 Config 微服务是否可以从 Github 上获取配置内容
    - 启动微服务3344
    - `http://config-3344.com:3344/master/config-dev.yml`
- 配置读取规则
    - 官网

    <br />
    
    ![](/docs/assets/spring-cloud-2/K-module/yky-20210219105313.png)
    - /{label}/{application}-{profile}.yml（最推荐使用这种方式）
        - master 分支
            - `http://config-3344.com:3344/master/config-dev.yml`
            - `http://config-3344.com:3344/master/config-test.yml`
            - `http://config-3344.com:3344/master/config-prod.yml`
            
        - dev 分支
            - `http://config-3344.com:3344/dev/config-dev.yml`
            - `http://config-3344.com:3344/dev/config-test.yml`
            - `http://config-3344.com:3344/dev/config-prod.yml`

    - /{application}-{profile}.yml
        - `http://config-3344.com:3344/config-dev.yml`
        - `http://config-3344.com:3344/config-test.yml`
        - `http://config-3344.com:3344/config-prod.yml`
        - `http://config-3344.com:3344/config-xxxx.yml`(不存在的配置)

    - /{application}-{profile}[/{label}] (JSON 串)
        - `http://config-3344.com:3344/config/dev/master`
        - `http://config-3344.com:3344/config/test/master`
        - `http://config-3344.com:3344/config/prod/master`

    - 重要配置细节总结

    ![](/docs/assets/spring-cloud-2/K-module/yky-20210219143342.png)
- 成功实现了用SpringCloud Config 通过 GitHub 获取配置信息