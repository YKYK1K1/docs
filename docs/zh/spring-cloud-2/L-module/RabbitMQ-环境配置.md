# **RabbitMQ 环境配置**
## **安装 Erlang**
---
> 下载地址：[http://erlang.org/download/otp_win64_23.2.exe](http://erlang.org/download/otp_win64_23.2.exe)

### **步骤**

![第一步](/docs/assets/spring-cloud-2/L-module/yky-20210301155511.png)

<br />

![第二步](/docs/assets/spring-cloud-2/L-module/yky-20210301155801.png)

<br />

![第三步](/docs/assets/spring-cloud-2/L-module/yky-20210301155849.png)

<br />

![第三步](/docs/assets/spring-cloud-2/L-module/yky-20210301155956.png)

## **安装 RabbitMQ**
---
> 下载地址：[https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.8.13/rabbitmq-server-3.8.13.exe](https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.8.13/rabbitmq-server-3.8.13.exe)

### **步骤**

![第一步](/docs/assets/spring-cloud-2/L-module/yky-20210301160602.png)

<br />

![第二步](/docs/assets/spring-cloud-2/L-module/yky-20210301160726.png)

<br />

![第三步](/docs/assets/spring-cloud-2/L-module/yky-20210301161007.png)

<br />

## **进入 RabbitMQ 安装目录下的 sbin 目录**
---

> 我自己本地：`D:\Program Files\RabbitMQ Server\rabbitmq_server-3.8.13\sbin`

<br />

![cmd 命令](/docs/assets/spring-cloud-2/L-module/yky-20210301161407.png)

<br />

::: tip 输入以下命令启动管理功能

<br />

1. 运行命令行窗口 cmd
2. 输入命令 `rabbitmq-plugins enable rabbitmq_management` 这样就可以添加可视化插件了

这样就添加了 rabbitmq 界面,只要启动 rabbitmq,然后在浏览器输入 http://127.0.0.1:15672/ 就可以访问了

<br />

![rabbitmq 界面](/docs/assets/spring-cloud-2/L-module/yky-20210301163227.png)

:::

## **访问地址查看是否安装成功**
---

> 测试是否安装成功：[http://localhost:15672/](http://localhost:15672/)
>
> 输入账号密码并登录：guest guest