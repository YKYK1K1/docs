# **IDEA 新建 project 工作空间**

## **微服务 cloud 整体聚合父工程 Project**
---

### **父工程步骤:**

1. **New Project**

![New Project](/docs/assets/spring-cloud-2/fourth-module/yky-20200706134104.png)

<br />

2. **聚合总工程名字和工程名字**

<br />

![聚合总工程名字和工程名字](/docs/assets/spring-cloud-2/fourth-module/yky-20200706134316.png)

<br />

3. **Maven 选版本**

<br />

![Maven 选版本](/docs/assets/spring-cloud-2/fourth-module/yky-20200706135254.png)

<br />

4. **字符编码**

<br />

![字符编码](/docs/assets/spring-cloud-2/fourth-module/yky-20200706135738.png)

<br />

5. **注解生效激活**

<br />

![注解生效激活](/docs/assets/spring-cloud-2/fourth-module/yky-20200706135929.png)

<br />

6. **java 编译版本选 8**

<br />

![java 编译版本选 8](/docs/assets/spring-cloud-2/fourth-module/yky-20200706140053.png)

<br />

7. **File Type 过滤**

<br />

![File Type 过滤](/docs/assets/spring-cloud-2/fourth-module/yky-20200706140221.png)

## **父工程 POM**
---

`pom.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.yky.spring.cloud</groupId>
    <artifactId>spring-cloud-2020</artifactId>
    <packaging>pom</packaging>
    <version>1.0-SNAPSHOT</version>

    <modules>
        <module>cloud-provider-payment-8001</module>
    </modules>

    <!-- 统一管理jar包版本 -->
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <junit.version>4.12</junit.version>
        <log4j.version>1.2.17</log4j.version>
        <lombok.version>1.16.18</lombok.version>
        <mysql.version>8.0.20</mysql.version>
        <druid.version>1.1.16</druid.version>
        <mybatis.spring.boot.version>1.3.0</mybatis.spring.boot.version>
    </properties>

    <!-- 子模块继承之后，提供作用：锁定版本+子modlue不用写groupId和version  -->
    <dependencyManagement>
        <dependencies>
            <!--spring boot 2.2.2-->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>2.2.2.RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!--spring cloud Hoxton.SR1-->
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>Hoxton.SR1</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!--spring cloud alibaba 2.1.0.RELEASE-->
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>2.1.0.RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>${mysql.version}</version>
            </dependency>
            <dependency>
                <groupId>com.alibaba</groupId>
                <artifactId>druid</artifactId>
                <version>${druid.version}</version>
            </dependency>
            <dependency>
                <groupId>org.mybatis.spring.boot</groupId>
                <artifactId>mybatis-spring-boot-starter</artifactId>
                <version>${mybatis.spring.boot.version}</version>
            </dependency>
            <dependency>
                <groupId>junit</groupId>
                <artifactId>junit</artifactId>
                <version>${junit.version}</version>
            </dependency>
            <dependency>
                <groupId>log4j</groupId>
                <artifactId>log4j</artifactId>
                <version>${log4j.version}</version>
            </dependency>
            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>${lombok.version}</version>
                <optional>true</optional>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <fork>true</fork>
                    <addResources>true</addResources>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```

## **解决maven下载不了jar的问题请复制这个链接到浏览器自行解决：**
---

https://blog.csdn.net/HeyWeCome/article/details/104543411

## **Maven 工程落地细节复习**
---

### **Maven 中的 `dependencyManagement` 和 `dependencies`**

<br />

![](/docs/assets/spring-cloud-2/fourth-module/yky-20200707100827.png)
![](/docs/assets/spring-cloud-2/fourth-module/yky-20200707100943.png)

<br />

这样做的好处就是: 如果有多个子项目都引用同一样的依赖,则可以避免在每个使用的子项目里都声明一个版本号,这样想升级或切换到另一个版本时,只需在顶层父容器里更新,而不需要一个一个子项目的修改;另外如果某个子项目需要另外的一个版本,只需声明 `version` 版本 

* `dependencyManagement` 里只是声明依赖,***并不是实现引入***,因此子项目需要显示的声明需要用的依赖。

* 如果不在子项目中声明依赖，是不会从父项目中继承下来的；只有在子项目中写了该依赖项，并且没用指定具体版本，才会从父项目中继承该项，并且 `version` 和 `scope` 都读取自父 `pom`；

* 如果子项目中指定了版本号，那么会使用子项目中指定的 `jar` 版本。

### **maven 中跳过单元测试**

<br />

![跳过单元测试](/docs/assets/spring-cloud-2/fourth-module/yky-20200707110244.png)

<br />

### **父工程创建完成执行 `mvn:insall` 将父工程发布到仓库方便子工程继承**