# **Ribbon 负载均衡演示**

## **架构说明**
---

![经典CAP图](/docs/assets/spring-cloud-2/G-module/yky-20200914160256.png)

> Ribbon 在工作时分成两步
> 
> 第一步先选择 EurekaServer,它优先选择在同一个区域内负载较少的 server
> 
> 第二步再根据用户指定的策略,在从 server 取到的服务注册列表中选择一个地址。
> 
> 其中 Ribbon 提供了多种策略: 比如轮询、随机和根据响应时间加权。

::: tip 总结
Ribbon其实就是一个软负载均衡的客户端组件，他可以和其他所需请求的客户端结合使用，和eureka结合只是其中的一个实例。
:::

## **POM**
---

![经典CAP图](/docs/assets/spring-cloud-2/G-module/yky-20200914164037.png)

## **二说RestTemplate的使用**
---

### **官网**

[官网地址](https://docs.spring.io/spring-framework/docs/5.2.2.RELEASE/javadoc-api/org/springframework/web/client/RestTemplate.html)

![官网地址](/docs/assets/spring-cloud-2/G-module/yky-20200916131306.png)

### **`getForObject` 方法/ `getForEntity` 方法 和 `postForObject` 方法/ `postForEntity` 方法**

```java
/**
 * @version 1.0
 * @ClassName OrderController
 * @Description TODO
 * @Author YKY
 * @Date 2020/8/7 16:29
 **/
@Slf4j
@RequestMapping(value = "/consumer/payment")
@RestController
public class OrderController {
// private static final String PAYMENT_URL = "http://localhost:8001";

    private static final String PAYMENT_URL = "http://CLOUD-PAYMENT-SERVICE";
    @Resource
    private RestTemplate restTemplate;

    @GetMapping(value = "/create")
    public CommonResult create(Payment payment) {
        log.info("通过 create 调用 PAYMENT 服务 添加信息：{}", payment);
        return restTemplate.postForObject(PAYMENT_URL + "/payment/create", payment, CommonResult.class);
    }

    @GetMapping(value = "/get/{id}")
    public CommonResult getPayment(@PathVariable("id") Long id) {
        log.info("通过 getPayment 调用 PAYMENT 服务 添加信息：{}", id);
        return restTemplate.getForObject(PAYMENT_URL + "/payment/get/" + id, CommonResult.class);
    }

    /**
     * 返回对象为 ResponseEntity 对象,包含了响应中的一些重要信息m,比如响应头、响应状态码、响应体等
     *
     * @param id id
     * @return CommonResult
     */
    @GetMapping(value = "/getForEntity/{id}")
    public CommonResult getPayment2(@PathVariable("id") Long id) {
        ResponseEntity<CommonResult> entity = restTemplate.getForEntity(PAYMENT_URL + "/payment/get/" + id, CommonResult.class);
        if (entity.getStatusCode().is2xxSuccessful()) {
            log.info(entity.getStatusCode() + "\t" + entity.getHeaders());
            return entity.getBody();
        } else {
            return new CommonResult<>(444, "操作失败");
        }
    }

    @GetMapping(value = "/postForEntity")
    public CommonResult postPayment(Payment payment) {
        CommonResult body = restTemplate.postForEntity(PAYMENT_URL + "/payment/create", payment, CommonResult.class).getBody();
        if ("200".equals(body.getCode())) {
            log.info(body.toString());
            return body;
        } else {
            return new CommonResult<>(444, "操作失败");
        }
    }

}
```