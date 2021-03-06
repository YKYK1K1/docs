# **Spring 简介**
## **概述**
---

Spring的主要作用就是为代码"解耦",降低代码间的耦合度。

根据功能的不同,可以将一个系统中的代码分为**主业务逻辑**与**系统级业务逻辑**两类。它们各自具有鲜明的特点:主业务代码间逻辑联系紧密,有具体的专业业务应用场景,复用性相对较低;系统级业务相对功能独立,没有具体的专业业务应用场景,主要是为主业务提供系统级服务,如日志、安全、事务等,复用性强。

Spring根据代码的功能特点,将降低耦合度的方式分为了两类:loC与AOP,loC使得主业务在相互调用过程中,不用再自己维护关系了,即不用再自己创建要使用的对象了。而是由Spring容器统一管理,自动"注入"。而AOP使得系统级服务得到了最大复用,且不用再由程序员手工将系统级服务“混杂"到主业务逻辑中了,而是由Spring容器统一完成"织入"。

Spring是于2003年兴起的一个轻量级的Java开发框架,它是为了解决企业应用开发的复杂性而创建的。Spring的核心是控制反转(loC)和面向切面编程(AOP)。简单来说, Spring是一个分层的Java SE/EE full-stack(一站式)轻量级开源框架。

## **面试小技巧**
---

> 面试：你是怎么理解Spring的？
>
> Spring是为了解决企业级开发的复杂度(耦合度)问题
>
> 系统开发的过程当中
>
> 1. 主业务逻辑
    - 银行业务
    - 保险业务
    - 电商业务
    - 物流业务
> 2. 系统级业务逻辑，交叉业务逻辑
    - JDBC 连数据库
        1. 加载驱动
        2. 创建连接
        3. 开启事务
        4. SQL操作
        5. 提交事务
        6. 释放连接

## **IOC:**
---

**以前**
```
//主动实例化
UserService userservice=new UserServiceImpl(); 

```
**现在**
```
//具体创建哪个容器不应该交给我们来创建交给Spring 容器创建
```

**Spring 胶水框架**