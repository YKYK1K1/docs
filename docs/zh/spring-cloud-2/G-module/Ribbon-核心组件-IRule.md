# **Ribbon 核心组件 IRule**
## **IRule:根据特定算法从服务列表中选取一个要访问的服务**
---
- `com.netflix.loadbalancer.RoundRobinRule` —— 轮询
- `com.netflix.loadbalancer.RandomRule` —— 随机
- `com.netflix.loadbalancer.RetryRule` —— 先按照`RoundRobinRule`的策略获取服务，如果获取服务失败则在指定时间内会进行重试
- `WeightedResponseTimeRule` —— 对`RoundRobinRule`的扩展，响应速度越快的实例选择权重越大，越容易被选择
- `BestAvailableRule` —— 会先过滤掉由于多次访问故障而处于断路器跳闸状态的服务，然后选择一个并发量最小的服务
- `AvailabilityFilteringRule` —— 先过滤掉故障实例，再选择并发较小的实例
- `ZoneAvoidanceRule` —— 默认规则，复合判断`server`所在区域的性能和`server`的可用性选择服务器

## **如何替换**
---

- **修改 `cloud-consumer-order-80` 服务**
- **注意配置细节**

![AP](/docs/assets/spring-cloud-2/G-module/yky-20200921161557.png)

- **新建 package**
    - **com.yky.myrule**
- **上面包下新建 MySelfRule 规则类**
```java
/**
 * @version 1.0
 * @ClassName MySelfRule
 * @Description TODO 规则类 Ribbon核心组件
 * @Author YKY
 * @Date 2020/9/21 16:27
 **/
public class MySelfRule {
    @Bean
    public IRule myRule() {
        //定义为随机
        return new RandomRule();
    }
}
```
- **主启动类添加 `@RibbonClient`**
```java
/**
 * @version 1.0
 * @ClassName OrderMain80
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/7 15:45
 **/
@SpringBootApplication
@EnableEurekaClient
@RibbonClient(name = "CLOUD-PAYMENT-SERVICE", configuration = MySelfRule.class)
public class OrderMain80 {
    public static void main(String[] args) {
        SpringApplication.run(OrderMain80.class, args);
    }
}
```
- **测试**
    - `http://localhost:8000/consumer/payment/get/1`