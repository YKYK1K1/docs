# **Predicate 的使用**

## **是什么?**
---
### **启动我们的`gatewat-9527`**

![gatewat-9527](/docs/assets/spring-cloud-2/J-module/yky-20201217164505.png)


### **`Route Predicate Factories`这个是什么东东？**

![gatewat-9527](/docs/assets/spring-cloud-2/J-module/yky-20201217164757.png)


### **常用的`Route Predicate`**

<br >

![常用的Route Predicate](/docs/assets/spring-cloud-2/J-module/yky-20201218111303.png)

### **<font color=#FF0000>1.After Route Predicate</font>**

<br >

![After Route Predicate](/docs/assets/spring-cloud-2/J-module/yky-20201214095123.png)

```yml
   - After=2020-03-08T10:59:34.102+08:00[Asia/Shanghai]
```

![用指定时区获取当前时间](/docs/assets/spring-cloud-2/J-module/yky-20201209160123.png)



### **<font color=#FF0000>2.Before Route Predicate</font>**

```yml
    - After=2020-03-08T10:59:34.102+08:00[Asia/Shanghai]
    - Before=2020-03-08T10:59:34.102+08:00[Asia/Shanghai]
```

### **<font color=#FF0000>3.Between Route Predicate</font>**

```yml
    - Between=2020-03-08T10:59:34.102+08:00[Asia/Shanghai] ,  2020-03-08T10:59:34.102+08:00[Asia/Shanghai]
```
### **<font color=#FF0000>4. Cookie Route Predicate</font>**

![Cookie Route Predicate](/docs/assets/spring-cloud-2/J-module/yky-20201209160172.png)

<br />

- **不带`cookies`访问** ->  `curl http://localhost:9527/payment/lb`

![不带 cookies 访问](/docs/assets/spring-cloud-2/J-module/yky-20201209167851.png)

- **带上`cookies`访问**
    - 加入 curl 返回中文乱码 -> `https://blog.csdn.net/leedee/article/details/82685636`
    
![不带 cookies 访问](/docs/assets/spring-cloud-2/J-module/yky-20201209169852.png)

```yml
    - Cookie=username,zzyy                                     # 携带 cookie
```

### **<font color=#FF0000>5. Header Route Predicate</font>** 

![Header Route Predicate](/docs/assets/spring-cloud-2/J-module/yky-20201209169635.png)

![Header Route Predicate](/docs/assets/spring-cloud-2/J-module/yky-20201209112433.png)

```yml
 - Header=X-Request-Id, \d+                                # 请求头要有X-Request-Id 属性 并且值为整数的正则表达式
```

### **<font color=#FF0000>6. Host Route Predicate</font>** 

```yml
  - Host=**.atguigu.com
```

### **<font color=#FF0000>7. Method Route Predicate</font>** 

```yml
    - Method=GET
```

### **<font color=#FF0000>8. Path Route Predicate</font>** 

```yml
    - Path=/payment/lb/**                                       # 断言,路径相匹配的进行路由
```

### **<font color=#FF0000>9. Query Route Predicate</font>** 

```yml
  - Query=username, \d+ #要有参数名称并且是正整数才能路由
```

### **<font color=#FF0000>10. 小总结</font>** 

```yml
server:
  port: 9527
spring:
  application:
    name: cloud-gateway
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true  #开启从注册中心动态创建路由的功能，利用微服务名进行路由
      routes:
        - id: payment_routh #路由的ID，没有固定规则但要求唯一，建议配合服务名
          #uri: http://localhost:8001   #匹配后提供服务的路由地址
          uri: lb://cloud-payment-service
          predicates:
            - Path=/payment/get/**   #断言,路径相匹配的进行路由


        - id: payment_routh2
          #uri: http://localhost:8001   #匹配后提供服务的路由地址
          uri: lb://cloud-payment-service
          predicates:
            - Path=/payment/lb/**   #断言,路径相匹配的进行路由
            #- After=2020-03-08T10:59:34.102+08:00[Asia/Shanghai]
            #- Cookie=username,zhangshuai #并且Cookie是username=zhangshuai才能访问
            #- Header=X-Request-Id, \d+ #请求头中要有X-Request-Id属性并且值为整数的正则表达式
            #- Host=**.atguigu.com
            #- Method=GET
            #- Query=username, \d+ #要有参数名称并且是正整数才能路由

eureka:
  instance:
    hostname: cloud-gateway-service
  client:
    service-url:
      register-with-eureka: true
      fetch-registry: true
      defaultZone: http://eureka7001.com:7001/eureka
```

::: tip 总结
说白了，Predicate就是为了实现一组匹配规则，让请求过来找到对应的 Route 进行处理
:::