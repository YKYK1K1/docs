# **Hystrix断路器**

## **概述**

::: tip 分布式系统面临的问题
<font color=#FF0000>复杂分布式系统结构中的应用程序有数十个依赖关系，每个依赖关系在某些时候将不可避免地失败。</font>
:::
![复杂分布式系统](/docs/assets/spring-cloud-2/I-module/yky-20201106101536.png)
<br />

![服务雪崩](/docs/assets/spring-cloud-2/I-module/yky-20201106101743.png)

## **是什么?**

Hystrix 是一个用于处理分布式的<font color=#FF0000>延迟</font>和<font color=#FF0000>容错</font>的开源库,在分布式系统里,许多依赖不可避免的会调用失败,比如超时、异常等,

Hystrix 能保证在一个依赖出问题的情况下,<font color=#FF0000>不会导致整体服务失败,避免级联故障,以提高分布式系统的弹性。</font>

<br>

"断路器" 本身是一种开关装置,当某个服务单元发生故障之后,通过断路器的故障监控(类似熔断保险丝),<font color=#FF0000>向调用方返回一个符合预期的、可处理的备选响应(FallBack) , 而不是长时间的等待或者抛出调用方无法处理的异常</font>,这样就保证了服务调用方的线程不会被长时间、不必要地占用,从而避免了故障在分布式系统中的蔓延,乃至雪崩.

## **能干嘛?**

- 服务降级
- 服务熔断
- 接近实时的监控

## **官网资料**

> [https://github.com/Netflix/Hystrix/wiki/How-To-Use](https://github.com/Netflix/Hystrix/wiki/How-To-Use)

## **Hystrix官宣，停更进维**

> [https://github.com/Netflix/Hystrix](https://github.com/Netflix/Hystrix)

![Hystrix](/docs/assets/spring-cloud-2/I-module/yky-20201109154022.png)


- 被动修复bugs
- 不再接受合并请求
- 不再发布新版本

