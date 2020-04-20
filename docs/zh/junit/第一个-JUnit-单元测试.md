# 第一个 JUnit 单元测试
## POM
`pom.xml` 文件如下：
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.yky</groupId>
    <artifactId>hello-spring</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>4.3.17.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
主要增加了`junit:junit`依赖

## **创建测试类**
在测试包下 `src/main/test` 创建一个名为 `UserServiceTest` 的测试类，代码如下：
```
package com.yky.hello.spring.service.test;

import com.yky.hello.spring.service.UserService;
import com.yky.hello.spring.service.impl.UserServiceImpl;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class UserServiceTest {

    private UserService userService;
    
    @Before
    public void before() {
        System.out.println("初始化数据库连接");
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("spring-context.xml");
        userService=(UserService) applicationContext.getBean("userService");
    }

    @Test
    public void testSayHi(){
        userService.sayHi();
    }
    @Test
    public void testSayHello(){
        System.out.println("Hello JUnit");
    }
    @After
    public void after() {
        System.out.println("关闭数据库连接");
    }
}

```