# **Shiro 认证流程**
## **认证流程图**
---
<br />

![认证流程图](/assets/apache-shiro/yky_20200424104531685.png)

<br />

## **Spring Boot 应用整合 Shiro**
---

- JavaSE应用中使用
- web应用中使用
  - SSM整合Shiro(配置多，用的少)
  - SpringBoot应用整合Shiro

### **创建 Spring Boot 应用**

- lombok
- spring web
- thymeleaf

打开 `IDEA` -> `New Project` -> `Spring Initializr` -> `Next`

<br />

![创建 Spring Boot 项目](/assets/apache-shiro/yky_20200601105756.png)

<br />

填写项目信息 -> `Next`

<br />

![创建 Spring Boot 项目](/assets/apache-shiro/yky_20200601110055.png)

<br />

选择 Spring Boot 所需要的依赖 -> `Next`
![创建 Spring Boot 项目](/assets/apache-shiro/yky_20200601110228.png)

<br />

选择工作空间 -> `Finish`

<br />

![创建 Spring Boot 项目](/assets/apache-shiro/yky_20200601110401.png)


### **整合 Druid 和 MyBatis**

- 依赖

```xml
<!-- druid starter -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.1.10</version>
</dependency>
 <!--mysql -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
     <scope>runtime</scope>
</dependency>
<!-- mybatis -->
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.0</version>
</dependency>
```
- 配置

```yml
spring:
  datasource:
    druid:
      url: jdbc:mysql://localhost:3306/databases
      # MySQL如果是8.x   com.mysql.cj.jdbc.Driver
      driver-class-name: com.mysql.jdbc.Driver
      username: root
      password: root
      initial-size: 1
      min-idle: 1
      max-active: 20
mybatis:
  mapper-locations: classpath:mappers/*Mapper.xml
  type-aliases-package: com.yky.hello.spring.boot.shiro.domain
```

## **整合 Shiro**
---

<br />

![](/assets/apache-shiro/yky_20200601141615.png)


- 导入依赖

```xml
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-spring</artifactId>
    <version>1.4.1</version>
</dependency>
```

- Shiro配置（java配置方式）

    - SpringBoot默认没有提供对Shiro的自动配置

```java
package com.yky.hello.spring.boot.shiro.config;

import org.apache.shiro.realm.text.IniRealm;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

/**
 * @version 1.0
 * @ClassName ShiroConfig
 * @Description TODO Shiro 配置
 * @Author YKY
 * @Date 2020/6/1 14:23
 **/
@Configuration
public class ShiroConfig {


    @Bean
    public IniRealm getIniRealm() {
        IniRealm iniRealm = new IniRealm("classpath:shiro.ini");
        return iniRealm;
    }

    /**
     * @param iniRealm 文件形式的数据源
     * @return
     */
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(IniRealm iniRealm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        //SecurityManager 要完成校验，需要 Realm
        securityManager.setRealm(iniRealm);
        return securityManager;
    }

    @Bean
    public ShiroFilterFactoryBean shirofilter(DefaultWebSecurityManager securityManager) {
        ShiroFilterFactoryBean filter = new ShiroFilterFactoryBean();
        //过滤器就是 Shiro 就行权限校验的核心，进行认证和授权是需要 SecurityManager 的
        filter.setSecurityManager(securityManager);


        //设置 Shiro 的拦截规则
        // anon   匿名用户可访问
        // authc  认证用户可访问
        // user   使用 RemeberMe 的用户可访问
        // perms  对应权限可访问
        // role   对应的角色可访问
        Map<String, String> filterMap = new HashMap<>();
        filterMap.put("/", "anon");
        filterMap.put("/login.html", "anon");
        filterMap.put("/regist.html", "anon");
        filterMap.put("/user/login", "anon");
        filterMap.put("/user/regist", "anon");
        filterMap.put("/static/**", "anon");
        filterMap.put("/**", "authc");

        filter.setFilterChainDefinitionMap(filterMap);
        filter.setLoginUrl("/login");
        //设置未授权访问的页面路径
        filter.setUnauthorizedUrl("/login");
        return filter;
    }

}

```
- 认证测试
    - `login.html`

        ```html
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>登录页面</title>
        </head>
        <body>
        <h2>login</h2>
        <hr>
        <form action="/user/login">
            <p>账号：<input type="text" name="userName"></p>
            <p>密码：<input type="password" name="userpwd"></p>
            <p><input type="submit" value="登录"></p>
        </form>
        </body>
        </html>
        ```
    - `UserController.java`

        ```java
        package com.yky.hello.spring.boot.shiro.controller;

        import com.yky.hello.spring.boot.shiro.service.impl.UserServiceImpl;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Controller;
        import org.springframework.web.bind.annotation.RequestMapping;

        import javax.annotation.Resource;

        /**
        * @version 1.0
        * @ClassName UserController
        * @Description TODO
        * @Author YKY
        * @Date 2020/6/1 15:38
        **/
        @Controller
        @RequestMapping(value = "/user")
        public class UserController {

            @Autowired
            private UserServiceImpl userService;

            @RequestMapping(value = "/login")
            public String login(String userName, String userPwd) {
                try {
                    userService.checkLogin(userName, userPwd);
                    System.out.println("-------登录成功");
                    return "index";
                } catch (Exception e) {
                    System.out.println("-------登录失败");
                    return "login";
                }
            }
        }
        ```
    - `UserServiceImpl.java`

        ```java
        package com.yky.hello.spring.boot.shiro.service.impl;

        import org.apache.shiro.SecurityUtils;
        import org.apache.shiro.authc.UsernamePasswordToken;
        import org.apache.shiro.subject.Subject;
        import org.springframework.stereotype.Service;

        /**
        * @version 1.0
        * @ClassName UserServiceImpl
        * @Description TODO
        * @Author YKY
        * @Date 2020/6/1 15:42
        **/
        @Service
        public class UserServiceImpl {

            public void checkLogin(String userName, String userPwd) throws Exception {
                Subject subject = SecurityUtils.getSubject();
                UsernamePasswordToken token = new UsernamePasswordToken(userName, userPwd);
                subject.login(token);
            }
        }
        ```