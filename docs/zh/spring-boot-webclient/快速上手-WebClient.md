# **快速上手 WebClient**
## **添加 `Pom.xml` 文件**
---

> WebClient 是一个非阻塞、响应式的HTTP客户端，它以响应式被压流的方式执行HTTP请求；WebClient默认使用 Reactor Netty 作为HTTP连接器，当然也可以通过ClientHttpConnector修改其它的HTTP连接器。

> **使用WebClient需要进入Spring5的相关依赖，如果使用的是SpringBoot项目的话直接引入下面的依赖就可以啦**

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

## **创建 WebClient 实例的方式**
---

> 技巧01：从 WebClient 的源码中可以看出，WebClient 接口提供了三个静态方法来创建 WebClient 实例

![WebClient 实例](/docs/assets/webclient/yky-20200620170408.png)

### **利用 `create()` 创建**

    该方法不接受任何参数，返回类型是 WebClient

> 技巧01：由于利用 `create()` 创建的 WebClient 对象没有设定 baseURL，所以  `uri("http://127.0.0.1:8080/get/get01")` 返回的结果就是最终需要请求的远程服务器的URL；这里的 `uri("http://127.0.0.1:8080/get/get01")`相当于重写 baseURL。

![](/docs/assets/webclient/yky-20200820195815994.png)

### **利用 `create(String baseUrl)` 创建**

    该方法接收一个 String 类型的对象作为 baseUrl，直接返回 WebClient 对象

> 技巧01：由于利用 `create(String baseUrl)` 创建的 WebClient 对象时已经设定了 baseURL，所以 `uri("/get01")` 会将返回的结果和 baseUrl 进行拼接组成最终需要远程请求的资源 URL

![](/docs/assets/webclient/yky-20180820203359683.png)

### **利用 builder 创建【推荐使用】**

    该方法不接受任何参数，返回的是 WebClient.Builder

> 技巧01：由于返回的不是 WebClient 类型而是 WebClient.Builder，我们可以通过返回的 WebClient.Builder 设置一些配置参数（例如：baseUrl等），然后在调用 build 就可以返回 WebClient 对象了【WebClient.Builder先关知识点请继续往下看】

![](/docs/assets/webclient/yky-20180820204207193.png)

### **重写 baseURL**

> 如果在创建 WebClient 时没有指定 baseURL 就可以用 uri 进行重写【前提：uri 的参数必须是一个完整的路径】 -> 完全重写

![](/docs/assets/webclient/yky-20180820204732830.png)

> 即使在创建WebClient的时候指定了baseURL也可以用uri进行重写【前提：uri的参数必须是一个完整的路径】-> 部分重写

![](/docs/assets/webclient/yky-20180820205044169.png)


> 即使在创建 WebClient 的时候指定了 baseURL 也可以用 uri 进行重写【前提：此时需要用到参数是一个函数式接口的 uri 方法】 ->  部分重写
>
> - 技巧01：`uri(Function<UriBuilder, URI> var1)`  -> 这个uri方法接收一个 lambda 表达式【输入是 UriBuilder，输出时 RUI 对象】
>
> - 技巧02：uri 方法返回的URI对象会被转化成远程请求资源的URL
>
> - 技巧03：UriBuilder 的 replacePath 方法是替换端口后面的所有信息【详情参见 UriBuilder，其实 UriBuilder 和 URI 很像】

![](/docs/assets/webclient/yky-20180820205819123.png)


## **实战技巧**

> 在使用uri时尽量使用 `uri(Function<UriBuilder, URI> var1)` ，因为这个方法可以设定更多的配置信息【例如：设置端口、设置参数、拼接路径、替换路径、替换参数......】

![](/docs/assets/webclient/yky-20180820210621115.png)

## **WebClient 相关接口概览**
---
![](/docs/assets/webclient/yky-20180820194035657.png)

### `WebClient.Builder`
> 该接口可用来在创建 WebClient 实例时修改一些默认的配置，而且灵活性特别大；利用该接口对象可以设置 WebClient 的cookie、header 等信息。

获取 WebClient.Builder 对象

> 技巧01：获取 WebClient.Builder 对象或就可以进行一些配置设置了，配置完成后调用 build 方法就可以生成 WebClient 对象啦

```java
WebClient.Builder builder = WebClient.builder();
```
### `WebClient.RequestBodySpec`

> 该接口主要用来这顶媒体类型和请求体的【需要请求体类型的 HTTP 请求需要用到，例如：POST】
>
>　- 技巧01：调用`post()`后返回的类型是 RequestBodyUriSpec
>
>　- 技巧02：`uri()`方法需要 UriSpec 类型的实例才可以调用，但是 UriSpec  恰恰继承了 RequestBodyUriSpec，uri() 方法返回的类型是 RequestHeadersSpec
>
>　- 技巧03：`contentType()` 方法需要 RequestBodySpec 类型的实例才可以调用，但是 RequestHeadersSpec 的父接口是 RequestHeadersSpec，contentType() 的返回类型是 WebClient.RequestBodySpec
>
>　- 技巧04：`body()` 方法需要 RequestBodySpec 类型的实例才可以调用，body() 的返回值类型是 WebClient.RequestHeadersSpec
>
> 技巧总结：使用WebClient是由严格的调用你顺序的，如下：
>
> HTTP请求类型 -> 请求URL -> 请求体类型 -> 请求体

![](/docs/assets/webclient/yky-20180820212033929.png)

## **WebClient 请求方法概览**
---

![](/docs/assets/webclient/yky-20180820213727687.png)