# **第一个Maven程序**
## **概述**
下面由我们来学习如何使用Maven创建一个Java Web应用陈旭
## 创建Maven项目
选择`File`->`New`->`Project...`

![创建项目](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/7F6EDBD400DB4DD0B32EC1F2C879B026/2216)

选择`maven`项目

![创建maven项目](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/33734E46B25A441DB1A14383997BF78D/2228)

填写项目信息 `Next`

![填项目信息](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/D31706A2C98A47A4AE8AB45FFE3C9979/2234)

选择工作空间 `Finish`

![创建项目](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/4AC8B1536ACF48DFB3327994C59C5DCB/2245)

选择当前窗口创建还是新起一个窗口创建 `New Window`

![创建新窗口](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/AD6917877ECF43D9A6B03033244B1B19/2251)

## **目录结构**
Java Web的Maven基本结构如下:

![目录结构](/assets/maven/yky-1235312312.png)

结构说明:

- `src`：源码目录
- `src/main/java`：Java源码目录
- `src/main/resources`：资源文件目录
- `src/main/webapp`：Web相关目录
- `src/test`：单元测试

新建文件夹`webapp`

![](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/CF70696C55C142BA954CA6E3D2D4E14F/2262)

配置打包格式`war`

![](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/30D1E025345148148BC0BAECBEC08C5E/2264)

修改`maven`仓库为之前配置的仓库路径(只对当前项目有效) `File`->`Settings`->`Maven`

![修改maven仓库路径](https://note.youdao.com/yws/public/resource/6746b00449dca15808460205b79fc09b/xmlnote/E1FCE7441B2C49459382B8B1B5C7FAFF/2279)

设置全局maven配置仓库路径 `File`->`Other Settings`->`Default Settings`

![全局maven仓库路径](/assets/maven/yky-1234522132.png)

## **Idea Maven项目管理**
在Idea界面的右侧`Maven Projects`选项，可以管理Maven项目的整个生命周期、插件、依赖等。

![右侧项目菜单](/assets/maven/yky-123741238.png)

## **完善Java Web 程序**
### **POM**
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.funtl</groupId>
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

## **创建测试用Servlet**
创新一个`Servlet`用于测试请求

## **配置 web.xml**

```
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

![tomcat](/assets/maven/yky-15734367557.png)
