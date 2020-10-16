# **集群 Eureka 构建步骤**

## **Eureka 集群原理说明**
---

![Eureka 集群原理说明](/docs/assets/spring-cloud-2/C-module/yky-2020-08-13-141204.png)

> 解决办法：搭建Eureka注册中心集群，实现负载均衡+故障容错

## **EurekaServer 集群环境构建步骤**
---

### **参考cloud-eureka-server7001**
### **新建cloud-eureka-server7002**
### **改POM**
### **修改映射配置**
- **找到 `C:\Windows\System32\drivers\etc` 路径下的`hosts`文件**
![hosts文件](/docs/assets/spring-cloud-2/C-module/yky-20200813152724.png)
- **修改映射配置添加进hosts文件**
    - 127.0.0.1  eureka7001.com
    - 127.0.0.1  eureka7002.com
### **写YML（以前单机）**
```yml
server:
  port: 7001
eureka:
  instance:
    hostname: localhost #eureka 服务端的实例名称
  client:
    # false 表示不能象注册中心注册自己
    register-with-eureka: false
    # false 表示自己端就是注册中心,我的职责就是维护服务实例，并不需要去检索服务
    fetch-registry: false
    service-url:
    # 设置与 Eureka Server 交互的地址查询服务和注册服务都需要依赖这个地址。
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
```
- **7001**

```yml
server:
  port: 7001
eureka:
  instance:
    hostname: eureka7001.com #eureka 服务端的实例名称
  client:
    # false 表示不能象注册中心注册自己
    register-with-eureka: false
    # false 表示自己端就是注册中心,我的职责就是维护服务实例，并不需要去检索服务
    fetch-registry: false
    service-url:
    # 设置与 Eureka Server 交互的地址查询服务和注册服务都需要依赖这个地址。
      defaultZone: http://eureka7002.com:7002/eureka/
```
- **7002**

```yml
server:
  port: 7002
eureka:
  instance:
    hostname: eureka7002.com #eureka 服务端的实例名称
  client:
    # false 表示不能象注册中心注册自己
    register-with-eureka: false
    # false 表示自己端就是注册中心,我的职责就是维护服务实例，并不需要去检索服务
    fetch-registry: false
    service-url:
      # 设置与 Eureka Server 交互的地址查询服务和注册服务都需要依赖这个地址。
      defaultZone: http://eureka7001.com:7001/eureka/
```
> **主启动(复制cloud-eureka-server7001的主启动类到7002即可)**

## **将支付服务8001微服务发布到上面2台Eureka集群配置中**
---

### **YML**

```yml
 service-url:
      defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka  #集群版
```
## **将订单服务80微服务发布到上面2台Eureka集群配置中**
---

### **YML**

```yml
 service-url:
      defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka  #集群版
```

## **测试01**
---

1. **先要启动EurekaServer，7001/7002服务**
2. **再要启动服务提供者provider，8001服务**
3. **再要启动消费者，80**
4. **http://localhost/consumer/payment/get/31**

## **支付服务提供者8001集群环境构建**
---

### **参考 `cloud-provider-payment8001`**
1. **新建 `cloud-provider-payment8002`**
2. **改POM(和8001一样)**
3. **写YML(和8001一样，换个端口)**
4. **主启动(修改为8002)**
5. **业务类(直接从8001粘)**
6. **修改8001/8002的Controller**
- **8001 和 8002**

![8001 和 8002 controller 新家 serverPort](/docs/assets/spring-cloud-2/C-module/yky-2020-08-14-103858.png)

## **负载均衡**
---

1. **bug** 
> 订单服务访问地址不能写死
> 改为这个：
> ```java
> private static final String PAYMENT_URL = "http://CLOUD-PAYMENT-SERVICE";
> ```
2. **使用`@LoadBalanced`注解赋予 RestTemplate 负载均衡的能力**
3. **ApplicationContextBean**

## **测试02**
---
1. **先要启动EurekaServer，7001/7002服务**
2. **再要启动服务提供者provider，8001/8002服务**
3. **http://localhost/consumer/payment/get/31**
4. **结果**
    - **负载均衡效果达到**
    - **8001/8002端口交替出现**
5. **Ribbon和Eureka整合后Consumer可以直接调用服务而不用再关心地址和端口号，且该服务还有负载功能了**
