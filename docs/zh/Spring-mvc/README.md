---
title: Spring MVC 简介
---
# **Spring MVC 简介**
## **概述**
Spring MVC也叫 Spring Web MVC,属于展示层框架。SpringMVC是Spring框架的一部分。

Spring Web MVC框架提供了MVC(模型-视图-控制器)架构和用于开发灵活和松散糊合的Web应用程序的组件. MVC模式导致应用程序的不同方面(输入逻相,业务逻辑和UI逆组)分离,同时提供这些元素之间的松散相合。
- 模型(Model) :封装了应用程序数据,通常它们将由POJO类组成。
- 视图(View) :负击渲染模型数据,一般来说它生成客广端浏览器可以解释HTML输出。
- 控制器(Controller):负责处理用户请求并构建话当的模型,并将其传递给视图进行渲染
 
## **DispatcherServlet 组件类**
Spring Web MVC惟架是固绕DispatcherServlet设计的,它处理所白的HTTP请水和响应。Spring Web MVC DispatcherServlet的请求处理T作流如下图所示:
![](https://note.youdao.com/yws/public/resource/c7ce33d4af2c2462ec3420a0831f6396/xmlnote/6DA35DB88EF24CE1A8A72242705AD800/5471)

以下是对应于到 DispatcherServlet 的传入 HTTP 请求的事件顺序：

- 在接收到 HTTP 请求后，DispatcherServlet 会查询 HandlerMapping 以调用相应的 Controller。
- Controller 接受请求并根据使用的 GET 或 POST 方法调用相应的服务方法。服务方法将基于定义的业务逻辑设置模型数据，并将视图名称返回给DispatcherServlet。
- DispatcherServlet 将从 ViewResolver 获取请求的定义视图。
- 当视图完成，DispatcherServlet将模型数据传递到最终的视图，并在浏览器上呈现。
所有上述组件，即: HandlerMapping，Controller 和 ViewResolver 是 WebApplicationContext 的一部分，它是普通 ApplicationContext 的扩展，带有 Web 应用程序所需的一些额外功能。