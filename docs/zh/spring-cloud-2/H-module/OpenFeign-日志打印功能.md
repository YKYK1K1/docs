# **OpenFeign 日志打印功能**

## **概述**
---

Feign 提供了日志打印功能，我们可以通过配置来调整日志级别,从而了解 Feign 中 Http 请求的细节。
说白了就是对 Feign 接口的调用情况进行监控和输出

## **日志级别**
---

- `NONE`: 默认的,不显示任何日志;
- `BASIC`: 仅记录请求方式、URL、响应状态码及执行时间;
- `HEADERS`: 除了 BASIC 中定义的信息之外，还有请求和相应的头信息;
- `FULL`: 除了 HEADERS 中定义的信息之外,还有请求和相应的正文及元数据;

## **配置日志bean**
---

```java
/**
 * @version 1.0
 * @ClassName FeignConfig
 * @Description TODO
 * @Author YKY
 * @Date 2020/11/3 15:44
 **/
@Configuration
public class FeignConfig {
    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}

```

## **YML文件里需要开启日志的Feign客户端**

```yml
logging:
  level:
    # feign 日志以什么级别监控哪个接口
    com.yky.spring.cloud.service.PaymentFeignService: debug
```

## **后台日志查看**

```yml
2020-11-06 10:03:28.592 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] ---> GET http://CLOUD-PAYMENT-SERVICE/payment/get/2 HTTP/1.1
2020-11-06 10:03:28.593 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] ---> END HTTP (0-byte body)
2020-11-06 10:03:28.894  INFO 8556 --- [p-nio-80-exec-1] c.netflix.config.ChainedDynamicProperty  : Flipping property: CLOUD-PAYMENT-SERVICE.ribbon.ActiveConnectionsLimit to use NEXT property: niws.loadbalancer.availabilityFilteringRule.activeConnectionsLimit = 2147483647
2020-11-06 10:03:28.958  INFO 8556 --- [p-nio-80-exec-1] c.n.u.concurrent.ShutdownEnabledTimer    : Shutdown hook installed for: NFLoadBalancer-PingTimer-CLOUD-PAYMENT-SERVICE
2020-11-06 10:03:28.959  INFO 8556 --- [p-nio-80-exec-1] c.netflix.loadbalancer.BaseLoadBalancer  : Client: CLOUD-PAYMENT-SERVICE instantiated a LoadBalancer: DynamicServerListLoadBalancer:{NFLoadBalancer:name=CLOUD-PAYMENT-SERVICE,current list of Servers=[],Load balancer stats=Zone stats: {},Server stats: []}ServerList:null
2020-11-06 10:03:28.971  INFO 8556 --- [p-nio-80-exec-1] c.n.l.DynamicServerListLoadBalancer      : Using serverListUpdater PollingServerListUpdater
2020-11-06 10:03:29.013  INFO 8556 --- [p-nio-80-exec-1] c.netflix.config.ChainedDynamicProperty  : Flipping property: CLOUD-PAYMENT-SERVICE.ribbon.ActiveConnectionsLimit to use NEXT property: niws.loadbalancer.availabilityFilteringRule.activeConnectionsLimit = 2147483647
2020-11-06 10:03:29.017  INFO 8556 --- [p-nio-80-exec-1] c.n.l.DynamicServerListLoadBalancer      : DynamicServerListLoadBalancer for client CLOUD-PAYMENT-SERVICE initialized: DynamicServerListLoadBalancer:{NFLoadBalancer:name=CLOUD-PAYMENT-SERVICE,current list of Servers=[192.168.124.9:8001],Load balancer stats=Zone stats: {defaultzone=[Zone:defaultzone;	Instance count:1;	Active connections count: 0;	Circuit breaker tripped count: 0;	Active connections per server: 0.0;]
},Server stats: [[Server:192.168.124.9:8001;	Zone:defaultZone;	Total Requests:0;	Successive connection failure:0;	Total blackout seconds:0;	Last connection made:Thu Jan 01 08:00:00 CST 1970;	First connection made: Thu Jan 01 08:00:00 CST 1970;	Active Connections:0;	total failure count in last (1000) msecs:0;	average resp time:0.0;	90 percentile resp time:0.0;	95 percentile resp time:0.0;	min resp time:0.0;	max resp time:0.0;	stddev resp time:0.0]
]}ServerList:org.springframework.cloud.netflix.ribbon.eureka.DomainExtractingServerList@1511e64c
2020-11-06 10:03:29.186 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] <--- HTTP/1.1 200 (592ms)
2020-11-06 10:03:29.186 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] connection: keep-alive
2020-11-06 10:03:29.186 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] content-type: application/json
2020-11-06 10:03:29.186 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] date: Fri, 06 Nov 2020 02:03:29 GMT
2020-11-06 10:03:29.187 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] keep-alive: timeout=60
2020-11-06 10:03:29.187 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] transfer-encoding: chunked
2020-11-06 10:03:29.187 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] 
2020-11-06 10:03:29.190 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] {"code":200,"message":"查询成功,serverPort:8001","data":{"id":2,"serial":"b000001"}}
2020-11-06 10:03:29.190 DEBUG 8556 --- [p-nio-80-exec-1] c.y.s.cloud.service.PaymentFeignService  : [PaymentFeignService#getByPrimaryKey] <--- END HTTP (88-byte body)
2020-11-06 10:03:29.981  INFO 8556 --- [erListUpdater-0] c.netflix.config.ChainedDynamicProperty  : Flipping property: CLOUD-PAYMENT-SERVICE.ribbon.ActiveConnectionsLimit to use NEXT property: niws.loadbalancer.availabilityFilteringRule.activeConnectionsLimit = 2147483647
```