# **SpringCloud config 分布式配置中心**
## **概述**
---
::: tip 分布式系统面临的配置问题
&nbsp;&nbsp;&nbsp;&nbsp;微服务意味着要将单体应用中的业务拆分成一个个子服务,每个服务的粒度相对较小,因此系统中会出现大量的服务。由于每个服务都需要必要的配置信息才能运行,所以一套集中式的、动态的配置管理设施是必不可少的。

SpringCloud提供了`ConfigServer`来解决这个问题,我们每一个微服务自己带着一个`application.yml`,上百个配置文件的管理
:::

![](/docs/assets/spring-cloud-2/K-module/yky-20210218150815.png)

### **是什么?**

SpringCloud Config 为微服务架构中的微服务提供集中化的外部配置支持,配置服务器为<font color=#FF0000>各个不同微服务应用</font>的所有环境提供了一个<font color=#FF0000>中心化的外部配置</font>。

### **怎么玩?**

SpringCloud Config 分为<font color=#FF0000>服务端和客户端两部分</font>。

<br />

服务端也称为<font color=#FF0000>分布式配置中心,它是一个独立的微服务应用</font>,用来连接配置服务器并为客户端提供获取配置信息,加密/解密信息等访问接口

<br />

客户端则是通过指定的配置中心来管理应用资源,以及与业务相关的配置内容,并在启动的时候从配置中心获取和加载配置信息配置服务器默认采用git来存储配置信息,这样就有助于对环境配置进行版本管理,并且可以通过git客户端工具来方便的管理和访问配置内容

### **能干嘛?**

1. 集中管理配置文件
2. 不同环境不同配置，动态化的配置更新，分环境部署比如 dev【开发环境】/ test【测试环境】/ prod【产品环境】/ beta【预发布环境】/ release【发布环境】
3. 运行期间动态调整配置，不再需要在每个服务部署的机器上编写配置文件，服务会向配置中心统一拉取配置自己的信息
4. 当配置发生变动时，服务不需要重启即可感知到配置的变化并应用新的配置
5. 将配置信息以REST接口的形式暴露 -> post、curl访问刷新均可....

### **与Github整合配置**

由于SpringCloud Config默认使用 Git 来存储配置文件（也有其它方式，比如支持 svn 和本地文件，但最推荐的还是 Git，而且使用的是`http/https`访问的形式）

### **官网**

![](/docs/assets/spring-cloud-2/K-module/yky-20210218154630.png)

`https://cloud.spring.io/spring-cloud-static/spring-cloud-config/2.2.1.RELEASE/reference/html/`



