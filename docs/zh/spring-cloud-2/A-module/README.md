# **从 2.2.x 和 H 版开始说起**

> 本次的 SpringCloud 第二季分为上半场和下半场
>
> 上篇：`SpringBoot2.X`版和`SpringCloud H`版
>
> 下篇：SpringCloud Alibaba


## **SpringBoot 版本选择**
---

### **git源码地址：**

[git 源码](https://github.com/spring-projects/spring-boot/releases/)

### **SpringBoot2.0新特性**

[SpringBoot2.0新特性](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Release-Notes)

### **通过上面官网发现，Boot官方强烈建议你升级到2.X以上版本**

![升级到2.X](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-102700.png)

### **官网看Boot版本**

-  **springboot(截至2019.10.26)**

![springboot(截至2019.10.26)](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-103345.png)

-  **springboot(截至2020.2.15)**

![springboot(截至2019.10.26)](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-103738.png)

## **SpringCloud版本选择**
---

### **git源码地址：**

[git 源码](https://github.com/spring-projects/spring-cloud/wiki)


### **官网**

[springcloud 官网](https://spring.io/projects/spring-cloud)

### **官网看 Cloud 版本**

- Cloud 命名规则

![Cloud 命名规则](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-104433.png)

- **springcloud(截至2019.10.26)**

![springcloud(截至2019.10.26)](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-104640.png)


- **springboot(截至2020.2.15)**

![springcloud(截至2020.2.15)](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-104811.png)

## **SpringCloud 和 Springboot 之间的依赖关系如何看**
---

[SpringCloud 和 Springboot 之间的依赖关系](https://spring.io/projects/spring-cloud#overview)

### **依赖**

![springcloud(截至2020.2.15)](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-105020.png)

### **更详细的版本对应查看方法**

[更详细的版本对应查看方法](https://start.spring.io/actuator/info)

- **结果**

![结果](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-105222.png)

- **查看 `json` 串返回结果**

![查看 json 串返回结果](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-105354.png)


## **SpringCloud 第二季定稿版（截止2020.2.15）**

> java : JAVA8
>
> maven : 3.5及以上
>
> mysql : 5.7及以上
>
> spring cloud  : Hoxton.SR1
>
> spring boot   : 2.2.2.RELEASE
>
> cloud Alibaba : 2.1.0.RELEASE

> 以上版本必须一致！

### **题外话**

- **boot 版已经到 `2.2.4` 为最新，为什么选 `2.2.2` ？**
    - **只用 boot，直接用最新**
    - **同时用 boot 和 cloud，需要照顾 cloud，由 cloud 决定 boot 版本**
        - **结果**
        ![查看 json 串返回结果](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-110028.png)

    - **SpringCloud 和 SpringBoot 版本对应关系**

     ![查看 json 串返回结果](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-110154.png)
    
- **2.X 版本常用的组件 `pom`**

![查看 json 串返回结果](/docs/assets/spring-cloud-2/A-module/yky-2020-08-07-110624.png)
