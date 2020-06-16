# **第一个Maven程序**
## **概述**
---

下面由我们来学习如何使用Maven创建一个Java Web应用陈旭

## **创建Maven项目**
---

选择`File`->`New`->`Project...`

<br />

![创建项目](/docs/assets/maven/yky_1528025821.png)

<br />

选择`maven`项目

<br />

![创建maven项目](/docs/assets/maven/yky_1573199544.png)

<br />

填写项目信息 -> `Next`

<br />

![填项目信息](/docs/assets/maven/yky_1573199700.png)

<br />

选择工作空间 `Finish`

<br />

![创建项目](/docs/assets/maven/yky_1573199996.png)

<br />

选择当前窗口创建还是新起一个窗口创建 `New Window`

<br />

![创建新窗口](/docs/assets/maven/yky_1573200106.png)

## **目录结构**
---

Java Web的Maven基本结构如下:

<br />

```
├─src
│  ├─main
│  │  ├─java
│  │  ├─resources
│  │  └─webapp
│  │      └─WEB-INF
│  └─test
│      └─java
```

结构说明:

- `src`：源码目录
- `src/main/java`：Java源码目录
- `src/main/resources`：资源文件目录
- `src/main/webapp`：Web相关目录
- `src/test`：单元测试

新建文件夹`webapp`

<br />

![](/docs/assets/maven/yky_1573200584.png)

<br />

配置打包格式`war`

<br />

![](/docs/assets/maven/yky_1573200610.png)

<br />

修改`maven`仓库为之前配置的仓库路径(只对当前项目有效) `File`->`Settings`->`Maven`

<br />

![修改maven仓库路径](/docs/assets/maven/yky_1573200710.png)

<br />

设置全局maven配置仓库路径 `File`->`Other Settings`->`Default Settings`

<br />

![全局maven仓库路径](/docs/assets/maven/yky-1234522132.png)

## **Idea Maven项目管理**
---

在Idea界面的右侧 `Maven Projects` 选项，可以管理Maven项目的整个生命周期、插件、依赖等。

![右侧项目菜单](/docs/assets/maven/yky-123741238.png)

## **完善Java Web 程序**
---

### **POM**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.yky</groupId>
    <artifactId>my-shop-dependencies</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <dependencies>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
        </dependency>

        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>log4j-over-slf4j</artifactId>
            <version>1.7.25</version>
        </dependency>
    </dependencies>

</project>
```

配置说明：
- `packaging`：打包方式，这里是war包，表示为Java Web 应用程序
- `dependencies`：项目依赖配置，整个项目生命周期中所需的依赖都在这里配置
### **创建测试用Servlet**

创新一个`Servlet`用于测试请求

```java
package com.yky.hello.maven.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("/index.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
```
### **创建测试用 JSP**

创建一个 `JSP` 页面，用于测试请求

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    Hello Maven
</body>
</html>
```

### **创建 Log4J 的配置文件**
在 `src/main/resources` 目录下创建 `log4j.properties` 配置文件，内容如下：

```properties
log4j.rootLogger=INFO, console, file

log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%d %p [%c] - %m%n

log4j.appender.file=org.apache.log4j.DailyRollingFileAppender
log4j.appender.file.File=logs/log.log
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.A3.MaxFileSize=1024KB
log4j.appender.A3.MaxBackupIndex=10
log4j.appender.file.layout.ConversionPattern=%d %p [%c] - %m%n
```

### **配置 `web.xml`**

`web.xml` 配置文件如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>com.yky.hello.maven.servlet.HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/servlet/hello</url-pattern>
    </servlet-mapping>
</web-app>
```
##  **配置 Tomcat**

![tomcat](/docs/assets/maven/yky-15734367557.png9)

## **测试运行**
按照之前章节 `第一个 IDEA 应用程序` 配置完 `Tomcat` 后直接运行，打开浏览器访问 http://localhost:8080 显示如下：

```
Hello Maven
```