# **Shiro 工作原理**
## **Shiro 核心功能**
---

<br />

![](/docs/assets/apache-shiro/yky_20200423151533733.png)

<br />

- Anthentication 认证，验证用户是否有相应的身份-登录验证;
- Authorization 授权，即权限验证：对已经通过认证的用户检查是否具有某个权限或者角色，从而控制是否能够进行某种操;
- SessionManagement 会话管理，用户在认证成功之后创建会话，在没有退出之前，当前用户的所有信息都会保存在这个会话中;可以是普通的 JavaSE 应用，也可以是 Web 应用;
- Cryptography 加密，对敏感信息进行加密处理, Shiro 提供了这种加密的机制;
支持的特性：
    - Web Support —— Shiro 提供了过滤器，可以通过过滤器拦截 Web 请求来处理 Web 应用的访问控制
    - Caching 缓存支持, Shiro 可以缓存用户信息以及用户的角色权限信息，可以提高执行效率
    - Concurrency 支持多线程应用
    - Testing 提供测试支持
    - Run As 允许一个用户以另一种身份去访问
    - Remeber Me 记住密码

> 特别说明：
> Shiro 是一个安全框架，不提供用户、权限的维护（用户的权限管理需要我们自己去设计）

## **⼯作流程**
---

> shiro 运⾏流程中，3个核⼼的组件:
>
> **Subject、SecutiryManager、Realm**
>
> shiro使⽤中，必须有的3个概念！！

<br />

![](/docs/assets/apache-shiro/image4.jpeg)

<br />


- Subject

    安全校验中，最常⻅的问题是"当前⽤户是谁?" "当前⽤户是否有权做x事?",所以考虑安全校验过程最⾃然的⽅式就是基于当前⽤户。

    Subject 代表了当前“⽤户”，应⽤代码直接交互的对象是 Subject，只要得到Subject对象⻢上可以做绝⼤多数的shiro操作。

    也就是说 Shiro 的对外API 核⼼就是 Subject。

    Subject 会将所有交互都会委托给 SecurityManager。
 
    **Subject是安全管理中直接操作的对象**

- SecurityManager

    安全管理器；即所有与安全有关的操作都会与SecurityManager 交互；

    且其管理着所有 Subject；它是 Shiro的核⼼，

    它负责与 Shiro 的其他组件进⾏交互，它相当于 SpringMVC 中DispatcherServlet 的⻆⾊

- Realm

    Shiro 从 Realm 获取安全数据（如⽤户、⻆⾊、权限），就是说SecurityManager 要验证⽤户身份，那么

  它需要从 Realm 获取相应的⽤户进⾏⽐较以确定⽤户身份是否合法；

  也需要从 Realm 得到⽤户相应的⻆⾊/权限进⾏验证⽤户是否能进⾏操作；

  可以把 Realm 看成 DAO，( 数据访问⼊⼝ )

## **Shiro 核心组件**
---

![](/docs/assets/apache-shiro/yky_13495408237665.jpg)

- Shiro三大核心组件：Subject、Security Manager、Realms
    - Subject，表示待认证和授权的用户
    - Security Manager，它是 Shiro 框架的核心，Shiro 就是通过Security Manager 来进行内部实例的管理，并通过它来提供安全管理的各种服务。
        - Authenticator，认证器
        - Anthorizer，授权器
        - SessionManager，会话管理器
        - CacheManager，缓存管理器
    - Realms，相当于 Shiro 进行认证和授权的数据源，充当了 Shiro 与安全数据之间的 "桥梁" 或者 "连接器"。也就是说，当对用户进行认证(登录)和授权（访问控制）验证时，Shiro 会用应用配置的 Realm 中查找用户及其权限信息 (也有多 Realms 配置)。

![](/docs/assets/apache-shiro/yky_20200423163414191.png)


## **RBAC模型**
---

> **Role Base Access Controll 基于⻆⾊的访问控制**

> **shiro 采⽤的安全管理 模型。将用户和权限做了解耦**



> **模型中3个主体：⽤户、⻆⾊、权限**
>
> **每个⻆⾊可以有多个权限，每个权限可以分配给多个⻆⾊**
>
> **每个⽤户可以有多个⻆⾊，每个⻆⾊可以分配给多个⽤户**
>
> ***两个多对多***



![](/docs/assets/apache-shiro/image5.jpeg)



> **则权限访问控制，做的事是：**
> 1. **身份校验：判断是否为合法⽤户**
> 2. **权限校验：⽤户要做做某件事或使⽤某些资源，必须要拥有某⻆⾊，或必须拥有某权限**
> 

> **在访问控制管理过程中，是要对项⽬中的资源(功能，数据，⻚⾯元素等)的访问、使⽤进⾏安全管理。**
> 
> - 1> **⾸先照旧记录⽤户信息**
> - 2> **然后制定⻆⾊**
>
>   如 " 学员 "，" 讲师 "，" 保洁员 " 
>
> - 3> **然后会对"资源"制定权限：即能对资源做的所有操作**
>
>   如 " 教室 " -资源, " 进⼊教室 " ， " 在教室学习 " ，就是该资源的两个权限。
>
> - 4> **然后将权限分配给不同⻆⾊**
>
>   如 " 进⼊教室 " 分配给 " 学员 "，" 讲师 "，" 保洁员 " 三种⻆⾊
>
>    " 在教室学习 " 分配给 " 学员 " ⻆⾊
>
> - 5> **最后将⻆⾊分配给具体⽤户**
>
>   如 " 张三 " 报名后分配 " 学员 " ⻆⾊
>
>    " 李四 " ⼊职学校分配 " 保洁员 " ⻆⾊
>
> - 6> **如此完成对 ⽤户(李四，张三)使⽤某资源的访问控制**
>
>   则：张三能不能进教室？李四能不能在教室学习？

## **架构(了解)**
---

> **简单了解，在对 shiro 有了完整得应用体验后可以重点了解！**

![](/docs/assets/aoache-shiro/image6.jpeg)



- Subject：

    任何可以与应⽤交互的“⽤户”；
- SecurityManager：

    相当于SpringMVC 中的 DispatcherServlet；是 Shiro 的⼼脏；

    所有具体的交互都通过 SecurityManager 进⾏控制；它管理着所有 Subject、且负责进⾏认证、授权、会话及缓存的管理。

- Authenticator：

    负责 Subject 身份认证，是⼀个扩展点，可以⾃定义实现；可以使⽤认证策略（Authentication Strategy），即什么情况下算⽤户认证通过了；

- Authorizer：

    授权器、即访问控制器，⽤来决定主体是否有权限进⾏相应的操作；即控制着⽤户能访问应⽤中的哪些功能；

- Realm：

    可以有 1 个或多个 Realm，可以认为是安全实体数据源，即⽤于获取安全实体的；可以是JDBC 实现，也可以是内存实现等等；由⽤户提供；所以⼀般在应⽤中都需要实现⾃⼰的 Realm；

- SessionManager：
    
    管理 Session ⽣命周期的组件；⽽ Shiro 并不仅仅可以⽤在 Web环境，也可以⽤在如普通的 JavaSE 环境

- CacheManager：

    缓存控制器，来管理如⽤户、⻆⾊、权限等的缓存的；因为这些数据基本上很少改变，放到缓存中后可以提⾼访问的性能

- Cryptography：
    
    密码模块，Shiro 提供了⼀些常⻅的加密组件⽤于如密码加密/解密。

