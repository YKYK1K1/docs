# **SpringBoot 应用整合 Shiro — 案例（JdbcRealm）**
## **JdbcRealm介绍**
---

<br />

![](/assets/apache-shiro/yky_20200424145508674.png)

<br />

- 如果使用 JdbcRealm，则必须提供 JdbcRealm 所需的表结构(权限设计)

<br />

![](/assets/apache-shiro/yky_20200424152851569.png)

<br />

## **JdbcRealm 规定的表结构**

- 用户信息表： `users`

    ```SQL
    create table users(
        id int primary key auto_increment,
        username varchar(60) not null unique,
        password varchar(20) not null,
        password_salt varchar(20)
    );

    insert into users(username,password) values('zhangsan','123456');
    insert into users(username,password) values('lisi','123456');
    insert into users(username,password) values('wangwu','123456');
    insert into users(username,password) values('zhaoliu','123456');
    insert into users(username,password) values('chenqi','123456');
    ```
- 角色信息表： `user_roles`

    ```SQL
    create table user_roles(
        id int primary key auto_increment,
        username varchar(60) not null,
        role_name varchar(100) not null
    );

    -- admin系统管理员
    -- cmanager 库管人员
    -- xmanager 销售人员
    -- kmanager 客服人员
    -- zmanager 行政人员 
    insert into user_roles(username,role_name) values('zhangsan','admin');
    insert into user_roles(username,role_name) values('lisi','cmanager');
    insert into user_roles(username,role_name) values('wangwu','xmanager');
    insert into user_roles(username,role_name) values('zhaoliu','kmanager');
    insert into user_roles(username,role_name) values('chenqi','zmanager');   
    ```

## **SpringBoot 连接数据库 整合 Shiro**
---
> 新建项目 `hello-spring-boot-mybatis-shiro` 创建步骤如上

- 创建SpringBoot应用

- 整合Druid和MyBatis

- 整合shiro

    - 添加依赖
        ```xml
        <dependency>
            <groupId>org.apache.shiro</groupId>
            <artifactId>shiro-spring</artifactId>
            <version>1.4.1</version>
        </dependency>
        ```
    - 配置Shiro
        ```java
        package com.yky.hello.spring.boot.mybatis.shiro.config;


        import org.apache.shiro.realm.jdbc.JdbcRealm;
        import org.apache.shiro.realm.Realm;
        import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
        import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
        import org.springframework.context.annotation.Bean;
        import org.springframework.context.annotation.Configuration;

        import javax.sql.DataSource;
        import java.util.HashMap;
        import java.util.Map;

        /**
        * @version 1.0
        * @ClassName ShiroConfig
        * @Description TODO
        * @Author YKY
        * @Date 2020/6/2 10:34
        **/
        @Configuration
        public class ShiroConfig {

            @Bean
            public JdbcRealm getJDBCRealm(DataSource dataSource) {
                JdbcRealm jdbcRealm = new JdbcRealm();
                //JdbcRealm 会自行从数据库查询用户以及权限数据（数据库的表结构要符合 JdbcRealm 的规范）
                jdbcRealm.setDataSource(dataSource);
                return jdbcRealm;
            }

            @Bean
            public DefaultWebSecurityManager getDefaultWebSecurityManager(JdbcRealm jdbcRealm) {
                DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
                //SecurityManager 要完成校验，需要 Realm
                securityManager.setRealm(jdbcRealm);
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
## **认证功能测试**
---
- 拷贝之前的两个页面`index.html`,`login.html`
- 创建 controller,把之前的 `PageController`,`UserController`拷贝进来
- 创建 service.impl,把之前的 `UserServiceImpl` 拷贝进来

启动项目即可验证



    
    