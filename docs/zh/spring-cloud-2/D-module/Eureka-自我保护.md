# **Eureka 自我保护**
## **故障现象**
---

![故障现象](/docs/assets/spring-cloud-2/C-module/yky-2020-08-17-164008.png)

## **导致原因**
---
![导致原因1](/docs/assets/spring-cloud-2/C-module/yky-2020-08-17-164929.png)
![导致原因2](/docs/assets/spring-cloud-2/C-module/yky-2020-08-17-165540.png)

::: warning
一句话：某时刻某一个微服务不可用了，Eureka不会立刻清理，依旧会对该微服务的信息进行保存

属于CAP里面的AP分支
:::

## **怎么禁止自我保护（一般生产环境中不会禁止自我保护）**
---

### **注册中心 eureakeServer 端 7001**
1. **出厂默认，自我保护机制是开启的**

```yml
eureka:
  server:
    # 关闭自我保护机制，保证不可用服务被及时清除
    enable-self-preservation: true
    # 时间间隔
    eviction-interval-timer-in-ms: 2000
```
2. **使用 `eureka.server.enable-self-preservation = false` 可以禁用自我保护模式**

3. **关闭效果**

4. **在eurekaServer端7001处设置关闭自我保护机制**

### **生产者客户端 eureakeClient 端8001**

1. **默认**
```yml
eureka:
  instance:
    # Eureka 客户端向服务端发送心跳的时间间隔,单位为秒(默认是30秒)
    lease-renewal-interval-in-seconds: 30
    # Eureka 服务端在收到最后一次心跳后等待时间上限,单位为秒(默认是90秒)，超时将剔除服务
    lease-expiration-duration-in-seconds: 90
```
2. **配置**

![配置](/docs/assets/spring-cloud-2/C-module/yky-2020-08-17-201922.png)

3. **测试**
- **7001和8001都配置完成**
- **先启动7001再启动8001**
- **先关闭8001**
    - **马上被删除了**