# **actuator微服务信息完善**
## **主机名称：服务名称修改**
---

### **当前问题 1**

![当前问题](/docs/assets/spring-cloud-2/C-module/yky-2020-08-14-161102.png)

### **当前问题 2**

> 访问信息有ip信息提示

### **修改`cloud-provoder-payment8001`和 `cloud-provoder-payment8002`**

- **`8001`yaml**
```yml
eureka:
    instance:
        instance-id: payment-8001
        prefer-ip-address: true #访问路径可以显示 IP地址
```
- **`8002`yaml**
```yml
eureka:
    instance:
        instance-id: payment-8002
        prefer-ip-address: true #访问路径可以显示 IP地址
```