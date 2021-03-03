# **OpenFeign 超时控制**
## **超时设置**
---
> 故意设置超时演示出错情况

- **服务提供方`8001`故意写暂停程序**
```java
   /**
     * 手动测试暂停 3 秒线程
     *
     * @return
     */
    @GetMapping(value = "/feign/timeout")
    public String paymentFeignTimeout() {
        try {
            //暂停几秒线程
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return serverPort;
    }
```
- **服务消费方`80`添加超时方法`PaymentFeignService`**
```java
    @GetMapping(value = "/payment/feign/timeout")
    public String paymentFeignTimeout();
```
- **服务消费方`80`添加超时方法`OrderFeignController`**
```java
    @GetMapping(value = "/feign/timeout")
    public String paymentFeignTimeout() {
        //openfeign-ribbon,客户端一般默认等待1秒钟
        return service.paymentFeignTimeout();
    }
```

- **测试**
    - **`http://localhost/consumer/payment/feign/timeout`**
    - **错误页面**
    ![错误页面](/docs/assets/spring-cloud-2/H-module/yky-20201023103131.png)

::: tip 提示

**OpenFeign默认等待一秒钟，超过后报错**

:::

## **是什么**
    默认Feign客户端只等待一秒钟，但是服务端处理需要超过1秒钟,导致Feign客户端不想等待了,直接返回报错。
    为了避免这种的情况,有时候我们需要设置Feign客户端的超时控制。

    yml文件中开启配置

- **OpenFeign默认支持Ribbon**

![默认支持](/docs/assets/spring-cloud-2/H-module/yky-20201023104600.png)

> YML文件里需要开启OpenFeign客户端超时控制

- `yml` 配置
```yml
#设置Feign客户端超时时间(openFeign默认支持ribbon)
ribbon:
  #指的是建立连接所用的时间,适用于网络状况正常的情况下,两端连接所用的时间
  ReadTimeout: 5000
  #指的是建立连接后从服务器读取到可用资源所用的时间
  ConnectTimeout: 5000
```


