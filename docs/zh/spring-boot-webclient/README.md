# **Spring Boot 响应式客户端 WebClient**
## **简介**
---
WebClient 是一个响应式客户端，它提供了RestTemplate的替代方法。它公开了一个功能齐全、流畅的API，并依赖于非阻塞I / O，使其能够比 RestTemplate 更高效地支持高并发性。WebClient 非常适合流式的传输方案，并且依赖于较低级别的 HTTP 客户端库来执行请求，是可插拔的。

WebClient 使用与 WebFlux 服务器应用程序相同的编解码器，并与服务器功能Web框架共享公共基本包，一些通用API和基础结构。API 公开了 Reactor Flux 和 Mono 类型。默认情况下，它使用 Reactor Netty 作为 HTTP 客户端库，但其他人可以通过自定义 ClientHttpConnector 插入。

## **优点**
---
与 RestTemplate 相比，WebClient是：

- 非阻塞，Reactive的，并支持更高的并发性和更少的硬件资源。
- 提供利用Java 8 lambdas的函数API。
- 支持同步和异步方案。
- 支持从服务器向上或向下流式传输。

RestTemplate不适合在非阻塞应用程序中使用，因此 Spring WebFlux 应用程序应始终使用 WebClient。在大多数高并发场景中，WebClient 也应该是 Spring MVC 中的首选，并且用于编写一系列远程，相互依赖的调用。
