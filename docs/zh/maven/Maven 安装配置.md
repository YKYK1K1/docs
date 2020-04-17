# **Maven安装配置**
## **概述**
想要安装Apache Maven在Windows系统上，需要下载Maven的zip文件，并将其解压到你想安装的目录，并配置Windows环境变量。

> 注意：请尽量使用JDK1.8及以上版本
## **JDK和JAVA_HOME**
确保已安装JDK，并设置`JAVA_HOME`环境变量到Windows环境变量。

![JAVA环境变量](/assets/maven/yky-1578321747.png)

# **添加 MAVEN_HOME**
添加MAVEN_HOME 环境变量到Windows环境变量，并将其指向你的Maven文件夹

![Maven环境变量](/assets/maven/yky-1576253781.png)

## **添加到环境变量**

![添加到环境变量](/assets/maven/yky-1573111370.png)

## **验证**
使用命令：`mvn -version`
输出：
``` cmd
C:\Users\Administrator>mvn -version
Apache Maven 3.6.1 (d66c9c0b3152b2e69ee9bac180bb8fcc8e6af555; 2019-04-05T03:00:29+08:00)
Maven home: D:\apache-maven-3.6.1\bin\..
Java version: 1.8.0_77, vendor: Oracle Corporation, runtime: C:\Program Files\Java\jdk1.8.0_77\jre
Default locale: zh_CN, platform encoding: GBK
OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"

C:\Users\Administrator>
```