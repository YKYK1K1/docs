# **第一个IDEA应用程序**
## **简介**

`Eclipse`:是不具备`tomcat`的能力的需要装载服务的插件 入门

`MyEclipse`: 集成了市面上大量的插件,`MyEclipse`本身是`Eclipse`的插件 收费

`Spring STS`: 开发了一个基于`Eclipse`的插件`STS`独立下载的开发工具,还是`Eclipse`的插件

`Intellij IDEA`: Java语言开发的集成环境，公认最好的开发软件之一 收费

## **新建 JAVA Web 项目**
---

打开 `IDEA` -> `Create New Project`

<br />

![](/assets/idea/yky_20200520092922.jpg)

<br />

选择 `JaVa` -> `Java EE`-> `Web Application`

<br />

![](/assets/idea/yky_20200520093426.jpg)

## **选择工作空间**
---

项目命名后选择存放的工作空间，项目就创建完成了

<br />

![](/assets/idea/yky_20200520093625.jpg)

## **配置 JDK**
---
选择 `File` -> `Project Structure...`

<br />

![](/assets/idea/yky_20200520093803.jpg)

<br />

选择 JDK 的安装路径即可

<br />

![](/assets/idea/yky_20200520094051.jpg)

## **配置 Tomcat**
---

选择 `Run` -> `Edit Configurations...`

<br />

![](/assets/idea/yky_20200520094159.jpg)

<br />

选择 `+` 号 -> `Tomcat Server` -> `Local`

<br />

![](/assets/idea/yky_20200520094246.jpg)

<br />

选择 Tomcat 的安装路径即可

<br />

![](/assets/idea/yky_20200520094318.jpg)

## **配置 Tomcat 本地部署**
---

继续上一步，选择 `Deployment` -> `+` 号 -> `Artifact...`

<br />

![](/assets/idea/yky_20200520094457.jpg)

<br />

![](/assets/idea/yky_20200520094535.jpg)

<br />

选择 `Server` 配置自动更新

<br />

![](/assets/idea/yky_20200520094615.jpg)

## **测试运行**
---

选择需要运行的项目，点击 `运行` 图标

<br />

![](/assets/idea/yky_20200520094723.jpg)

<br />

浏览器打开：http://localhost:8080 显示如下

```
$END$
```

## **开发规范**
---
`com.XXX.项目名`

![](/assets/idea/yky_20200520095523.png)

## **测试输出**
---

```
package com.yky.hello.idea;

public class MyTest {
    public static void main(String[] args) {
        System.out.println("Hello IDEA");
    }
}
```


<a-button type="primary">我就是你们要找的按钮</a-button>

<a-checkbox checked>Checkbox</a-checkbox>
<a-input placeholder="Basic usage" />
<a-radio checked>Radio</a-radio>
<a-rate :defaultValue="4.5" allowHalf />