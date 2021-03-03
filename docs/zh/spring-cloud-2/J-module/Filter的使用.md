# **Filter 的使用**

## **是什么？**
---

路由过滤器可用于修改进入的 HTTP 请求和返回的 HTTP 响应,路由过滤器只能指定路由进行使用

Spring Cloud Gateway 内置了多种路由过滤器,他们都由 GatewayFilter 的工厂类来产生

## **Spring Cloud Gateway的 Filter **
---

### **生命周期，Only**

- pre ：在业务逻辑之前
- post ：在业务逻辑之后

### **种类，Only Two**

- GatewayFilter ：31种 <font color=#FF0000>单一</font>
- GlobalFilter ：10种 <font color=#FF0000>全局</font>

## **常用的 GatewayFilter**
---

`AddRequestParameter`
- YML
```yml
          filters:
            - AddRequestParameter=X-Request-Id,1024                   # 过滤器工厂会在匹配的请求头加上一对请求头，名称为 X-Request-Id 值为 1024
```

## **自定义过滤器**
---

### **自定义全局 GlobalFilter**

- 两个主要接口介绍
    - impiemerts `GlobalFilter` ，`Ordered`

### **能干嘛**

- 全局日志记录
- 统一网关鉴权

### **案例代码**

```java

/**
 * @version 1.0
 * @ClassName MyLogGateWayFilter
 * @Description TODO 全局日志
 * @Author YKY
 * @Date 2020/12/24 15:26
 **/

@Component
@Slf4j
public class MyLogGateWayFilter implements GlobalFilter, Ordered {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        log.info("******************come in MyLogGateWayFilter : " + new Date());
        String uname = exchange.getRequest().getQueryParams().getFirst("uname");
        if (uname == null) {
            log.info("*************用户名为 null,非法用户，/(ㄒoㄒ)/~~");
            //给一个回应
            exchange.getResponse().setStatusCode(HttpStatus.NOT_ACCEPTABLE);
            return exchange.getResponse().setComplete();
        }
        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        //加载过滤器的顺序，数字越小优先级越高
        return 0;
    }
}
```

### **测试**

#### **启动**

<br />

![启动四个服务](/docs/assets/spring-cloud-2/J-module/yky-20210218142413.png)

#### **正确**

<br />

`http://localhost:9527/payment/lb?uname=z3`

#### **错误**

<br />

`http://localhost:9527/payment/lb?uname=z3`

