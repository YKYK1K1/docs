# ⼆、Shiro 架构



## 2.1 ⼯作流程

shiro 运⾏流程中，3个核⼼的组件:
Subject、SecutiryManager、Realm
shiro使⽤中，必须有的3个概念！！

![](media/image4.jpeg)



- • Subject
  安全校验中，最常⻅的问题是"当前⽤户是谁?" "当前⽤户是否有权做x事?",所以考虑安全校验过程最⾃
  然的⽅式就是基于当前⽤户。Subject 代表了当前“⽤户”，
  应⽤代码直接交互的对象是 Subject，只要得到Subject对象⻢上可以做绝⼤多数的shiro操作。
  也就是说 Shiro 的对外API 核⼼就是 Subject。
  Subject 会将所有交互都会委托给 SecurityManager。
  ==Subject是安全管理中直接操作的对象==
- SecurityManager
  安全管理器；即所有与安全有关的操作都会与SecurityManager 交互；
  且其管理着所有 Subject；它是 Shiro的核⼼，
  它负责与 Shiro 的其他组件进⾏交互，它相当于 SpringMVC 中DispatcherServlet 的⻆⾊
- Realm
  Shiro 从 Realm 获取安全数据（如⽤户、⻆⾊、权限），就是说SecurityManager 要验证⽤户身份，那么
  它需要从 Realm 获取相应的⽤户进⾏⽐较以确定⽤户身份是否合法；
  也需要从 Realm 得到⽤户相应的⻆⾊/权限进⾏验证⽤户是否能进⾏操作；
  可以把 Realm 看成 DAO，( 数据访问⼊⼝ )



## 2.2 RBAC模型

Role Base Access Controll 基于⻆⾊的访问控制

shiro采⽤的安全管理 模型。将用户和权限做了解耦



模型中3个主体：⽤户、⻆⾊、权限
每个⻆⾊可以有多个权限，每个权限可以分配给多个⻆⾊
每个⽤户可以有多个⻆⾊，每个⻆⾊可以分配给多个⽤户
两个多对多



![](media/image5.jpeg)



则权限访问控制，做的事是：
1. 身份校验：判断是否为合法⽤户
2. 权限校验：⽤户要做做某件事或使⽤某些资源，必须要拥有某⻆⾊，或必须拥有某权限



在访问控制管理过程中，是要对项⽬中的资源(功能，数据，⻚⾯元素等)的访问、使⽤进⾏安全管理。

- 1> ⾸先照旧记录⽤户信息
- 2> 然后制定⻆⾊
  如 “千锋学员”，“千锋讲师”，“保洁员”
- 3> 然后会对"资源"制定权限：即能对资源做的所有操作
  如 "教室" -资源, "进⼊教室" ， “在教室学习” ，就是该资源的两个权限。
- 4> 然后将权限分配给不同⻆⾊
  如 “进⼊教室” 分配给 “千锋学员”，“千锋讲师”，“保洁员” 三种⻆⾊
  “在教室学习” 分配给 “千锋学员” ⻆⾊
- 5> 最后将⻆⾊分配给具体⽤户
  如 “张三” 报名后分配 “千锋学员” ⻆⾊
  “李四” ⼊职千锋分配"千锋保洁员" ⻆⾊
- 6> 如此完成对 ⽤户(李四，张三)使⽤某资源的访问控制
  则：张三能不能进教室？李四能不能在教室学习？











## 2.3 架构(了解)



![](media/image6.jpeg)



- Subject：任何可以与应⽤交互的“⽤户”；
- SecurityManager：相当于SpringMVC 中的 DispatcherServlet；是 Shiro 的⼼脏；
  所有具体的交互都通过 SecurityManager 进⾏控制；它管理着所有 Subject、且负责进⾏认证、授权、会话及
  缓存的管理。
- Authenticator：负责 Subject 身份认证，是⼀个扩展点，可以⾃定义实现；可以使⽤认证
  策略（Authentication Strategy），即什么情况下算⽤户认证通过了；
- Authorizer：授权器、即访问控制器，⽤来决定主体是否有权限进⾏相应的操作；即控制着⽤户能访问应⽤中的哪些功能；
- Realm：可以有 1 个或多个 Realm，可以认为是安全实体数据源，即⽤于获取安全实体
  的；可以是JDBC 实现，也可以是内存实现等等；由⽤户提供；所以⼀般在应⽤中都需要实现⾃⼰的 Realm；
- SessionManager：管理 Session ⽣命周期的组件；⽽ Shiro 并不仅仅可以⽤在 Web环境，也可以⽤在如普通的 JavaSE 环境
- CacheManager：缓存控制器，来管理如⽤户、⻆⾊、权限等的缓存的；因为这些数据基本上很少改变，
  放到缓存中后可以提⾼访问的性能
- Cryptography：密码模块，Shiro 提供了⼀些常⻅的加密组件⽤于如密码加密/解密。





# 三、HelloWorld

## 3.1 pom文件

新建一个Web项目，因为后续迟早要和web集成

```xml
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-core</artifactId>
    <version>1.4.0</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.12</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.12</version>
</dependency>
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.16</version>
</dependency>
<dependency>
    <groupId>commons-logging</groupId>
    <artifactId>commons-logging</artifactId>
    <version>1.2</version>
</dependency>
```

ops : require JDK 1.6+ and Maven 3.0.3+



## 3.2 配置

创建⼀个shiro.ini ⽂件，MySQL也有my.ini，没有标签但分区域，用中括号分开

```ini
#定义⽤户信息
#格式：⽤户名=密码,⻆⾊1,⻆⾊2,....
[users]
zhangsan=123,admin
lisi=456,manager,seller
wangwu=789,clerk
# -----------------------------------------------------------------------------
# ⻆⾊及其权限信息
# 预定权限：user:query
# user:detail:query
# user:update
# user:delete
# user:insert
# order:update
# ....
[roles]
# admin 拥有所有权限,⽤*表示
admin=*
# clerk 只有查询权限
clerk=user:query,user:detail:query
# manager 有 user 的所有权限
manager=user:*
```







## 3.3 代码

通过在ini中设置的 身份信息、⻆⾊、权限，做安全管理

1. 身份认证: subject.login(token)
2. 是否认证身份判断：subject.isAuthenticated()
3. ⻆⾊校验：subject.hasRole(String:role); subject.hasRoles(List:roles)
4. 权限校验：subject.isPermitted(String:perm); subject.isPermittedAll(List:perms)



```java
// 定义main函数测试效果
// 创建 "SecurityFactory",加载ini配置,并通过它创建SecurityManager
Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
SecurityManager securityManager = factory.getInstance();

// 将SecurityManager托管到SecurityUtils⼯具类中(ops:之后可以不必关⼼SecurityManager)
//因为直接操作SecurityManager太复杂、易出错。
SecurityUtils.setSecurityManager(securityManager);

// 获得Subject，通过subject可以执⾏shiro的相关功能操作(身份认证或权限校验等)
//几乎所有操作，除了加密，因为加密是其他模块，可以在架构图看到。每次创建了subject都会从session中同步一下信息。直接由用户使用，调用功能简单，其底层调用Securitymanager的相关流程
Subject currentUser = SecurityUtils.getSubject();

// 身份认证( 类似登录逻辑 )
if (!currentUser.isAuthenticated()) {//判断是否已经登录
    //如果未登录，则封装⼀个token，其中包含 ⽤户名和密码
    UsernamePasswordToken token = new UsernamePasswordToken("zhangsan", "123");
    try {
        //将token传⼊login⽅法，进⾏身份认证 (判断⽤户名和密码是否正确)
        currentUser.login(token);//如果失败则会抛出异常
    } catch (UnknownAccountException uae) {//⽤户不存在
        System.out.println("There is no user with username of " + token.getPrincipal());
    } catch (IncorrectCredentialsException ice) {//密码错误
        System.out.println("Password for account " + token.getPrincipal() + " was incorrect!");
    } catch (LockedAccountException lae) {//账户冻结，例如多次登陆
        System.out.println("The account for username " 
                   + token.getPrincipal() 
                   + " is locked. Please contact your administrator to unlock it.");
    }catch (AuthenticationException ae) {//其他认证异常
    }
}

// 认证成功则⽤户信息会存⼊ currentUser（Subject）
System.out.println("User [" + currentUser.getPrincipal() + "] logged in successfully.");

// 可以进⼀步进⾏⻆⾊校验 和 权限校验
if (currentUser.hasRole("admin")) { //校验⻆⾊
    System.out.println("hello,boss");
} else {
    System.out.println("Hello, you");
}
if (currentUser.isPermitted("user:update")) { //校验权限
    System.out.println("you can update user");
} else {
    System.out.println("Sorry, you can not update.");
}
// ⽤户退出，会清除⽤户状态 身份信息，登录状态信息，权限信息，角色信息，会话信息 全部抹除
currentUser.logout();
// System.exit(0);
```



shiro中有个Realm接口，其中有个IniRealm。所以如果配置Realm，默认会使用IniRealm	





## 3.4 权限规则

最常⽤的权限标识：【资源 ：操作】

```ini
1> user:query , user:insert , order:delete , menu:show
【:】 作为内部分隔符，分隔资源和操作 【资源:操作]
【,】 作为分隔，分隔多个权限【权限1,权限2,权限3】

2> user:* , *:query
【*】 作为通配符，代表所有操作、资源
【user:* 即user的所有操作】
【*:query 即所有资源的查询操作】

3> *
【代表⼀切资源的⼀切权限 = 最⾼权限】

4> 细节：
1)【user:* 可以匹配 user:xx, user:xx:xxx】
	【*:query 只可以匹配 xx:query,不能匹配 xx:xx:query. 除⾮ *:*:query】
2)【user:update,user:insert】 可以用双引号包住，简写为 【"user:update,insert"】
    [roles]
    manager1=user:query,user:update,user:insert
    manager2="user:query,update,insert" #注意要加引号
    #如上manager1和manager2权限等价
    #subject.isPermittedAll("user:update","user:insert","user:query")
```



实例级权限标识：【资源 ：操作 ：实例】，粒度细化到具体某个资源实例，例如针对某个用户，而不是全体用户

```
1> user:update:1 , user:delete:1
# 对⽤户1可以update,对⽤户1可以delete

2> "user:update,delete:1" #和上⾯等价
# subject.isPermittedAll("user:update,delete:1","user:update:1","user:delete:1")
3> user:*:1 , user:update:* , user:*:*
```









# 四、与Web 集成

与web项⽬集成后，shiro的⼯作模式如下：

![](media/image7.jpeg)

如上：ShiroFilter拦截所有请求，对于请求做访问控制
如请求对应的功能是否需要有 认证的身份，是否需要某种⻆⾊，是否需要某种权限。



- 如果没有做 身份认证，则将请求强制跳转到登录⻚⾯。
  如果没有充分的⻆⾊或权限，则将请求跳转到权限不⾜的⻚⾯。
- 如果校验成功，则执⾏请求的业务逻辑





## 4.1 pom

```xml
<!-- ============ Servlet ============ -->
<dependency>
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>jsp-api</artifactId>
    <version>2.1</version>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
</dependency>
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>3.1.0</version>
    <scope>provided</scope>
</dependency>
<!-- ============== SpringMVC ============== -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>4.3.6.RELEASE</version>
</dependency>
<!-- ============ shiro ============ -->
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-core</artifactId>
    <version>1.4.0</version>
</dependency>
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-web</artifactId>
    <version>1.4.0</version>
</dependency>
<!-- ============ log ============ -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.12</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.12</version>
</dependency>
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.16</version>
</dependency>
```





## MVC的配置web.xml

```xml
<!DOCTYPE web-app PUBLIC
 "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
 "http://java.sun.com/dtd/web-app_2_3.dtd" >

<web-app>
  <display-name>Archetype Created Web Application</display-name>
  <servlet>
    <servlet-name>mvc</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>
  
  <servlet-mapping>
    <servlet-name>mvc</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
</web-app>
```



## 配置mvc.xml

```xml
<beans 	xmlns="http://www.springframework.org/schema/beans"
          xmlns:context="http://www.springframework.org/schema/context"
          xmlns:mvc="http://www.springframework.org/schema/mvc"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
					http://www.springframework.org/schema/beans/spring-beans.xsd
					http://www.springframework.org/schema/context
					http://www.springframework.org/schema/context/spring-context.xsd
					http://www.springframework.org/schema/mvc
					http://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <!-- 告知springmvc  哪些包中 存在 被注解的类
         use-default-filters="false"  遇到到 @Controller  @Service  @Repository  @Component类，都会忽略
    -->
    <context:component-scan base-package="com.qianfeng" use-default-filters="false">
        <!-- 只扫描  有@Controller注解的类 -->
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>
    <!-- 注册注解开发驱动 -->
    <mvc:annotation-driven></mvc:annotation-driven>

    <!-- 视图解析器
	     作用：1.捕获后端控制器的返回值="index"
	          2.解析： 在返回值的前后 拼接 ==> "/index.jsp"
	 -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/"></property><!-- 前缀 -->
        <property name="suffix" value=".jsp"></property><!-- 后缀 -->
    </bean>
    
    
    <!-- 在项目中 自动添加一个 映射{"/**" : DefaultServletHttpRequestHandler}
         请求进入前端后，会先匹配自定义的Handler，如果没有匹配的则进入DefaultServletHttpRequestHandler。
         DefaultServletHttpRequestHandler会将请求转发给Tomcat中名为"default"的servlet。
         最终实现了静态资源的访问
    -->
    <mvc:default-servlet-handler/>
    
</beans>
```



## 新建User类

这个类用来封装



## 新建login.jsp

先新建登陆页面 src/main/webapp/login.jsp

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>登陆页面</title>
    </head>
    <style>
        label{
            display: block;
        }
    </style>
    <body>
        <form action="/user/login" method="post">
            <label>用户名: <input type="text" name="username"></label>
            <label>密码: <input type="text" name="password"></label>
            <input type="submit" value="登陆">
        </form>
    </body>
</html>

```



## 新建UserController

```java
package com.peterjxl.controller;

import com.peterjxl.pojo.User;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    @GetMapping("/login")
    public String login(){
        System.out.println("go to login page");
        return "login";
    }

    @PostMapping("login")
    public String loginLogic(User user){
        System.out.println("login logic");
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(), user.getPassword());
        subject.login(token);
        return null;
    }
}
```

注意，SecurityManager并没有配置，所以需要在web.xml里先配置





## 4.2 代码：Servlet

定义⼀些Servlet 或 springMVC的controller，发送请求，验证shiro的验证

```java
@Controller
@RequestMapping("/user")
public class ShiroController {
    @RequestMapping("/delete")
    public String deleteUser(){//访问此删除功能时要先经过shiro的安全校验
        System.out.println("delete User");
        return "forward:/xx.jsp";
    }
    
    @RequestMapping("/update")
    public String updateUser(){//访问此更新功能时要先经过shiro的安全校验
        System.out.println("update User");
        return "forward:/xx.jsp";
    }
    
    @RequestMapping("/insert")
    public String insertUser(){//访问此增加功能时要先经过shiro的安全校验
        System.out.println("insert User");
        return "forward:/xx.jsp";
    }
    
    @RequestMapping("/login/page")
    public String login(){
        System.out.println("goto login.jsp");
        return "forward:/login.jsp";
    }
    
    @RequestMapping("/login/logic")
    public String login(String username,String password){
        //登录功能不能被shiro校验，否则永不能登录
        try{
            Subject subject = SecurityUtils.getSubject();
            subject.login(new UsernamePasswordToken(username,password));
            String uname = (String)subject.getPrincipal();
            System.out.println("uname:"+uname);
        }catch (AuthenticationException e){
            e.printStackTrace();
            return "redirect:/login.jsp";
        }
        return "forward:/success.jsp";
    }
}
```

springMVC的相关配置照旧。



## 4.3 配置

### web.xml

配置 ShiroFilter，相当于初始化环境。例如创建工厂，通过工厂获得SecurityManager对象等



```xml
<!-- 接收所有请求，以通过请求路径 识别是否需要 安全校验，如果需要则触发安全校验
做访问校验时，会遍历过滤器链。(链中包含shiro.ini中urls内使⽤的过滤器)
会通过ThreadContext在当前线程中绑定⼀个subject和SecurityManager，供请求内使⽤
可以通过SecurityUtils.getSubject()获得Subject
1.在项目的最外层构建访问控制层
2.在启动时，初始化shiro环境
-->
<filter>
    <filter-name>shiroFilter</filter-name>
    <filter-class>org.apache.shiro.web.servlet.ShiroFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>shiroFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>

<!-- 在项⽬启动时，加载web-info 或 classpath下的 shiro.ini ，并构建WebSecurityManager。
	构建所有配置中使⽤的过滤器链(anon,authc等)，ShiroFilter会获取此过滤器链
-->
<listener>
    <listener-class>org.apache.shiro.web.env.EnvironmentLoaderListener</listener-class>
</listener>
<!-- ⾃定义ini⽂件名称和位置，默认会取寻找classpath下的 shiro.ini 。
<context-param>
<param-name>shiroConfigLocations</param-name>
<param-value>classpath:shiro9.ini</param-value>
</context-param>-->
<!-- springMVC的配置照旧，此处省略...-->
```





### shiro.ini

新增两个部分(section), [main] 和 [urls]

```ini
[users]
zhangsan=123,admin
lisi=456,manager,seller
wangwu=789,clerk

[roles]
admin=*
clerk=user:query,user:detail:query
manager=user:*

[main]
#没有身份认证时，跳转地址
shiro.loginUrl = /user/login/page
#⻆⾊或权限校验不通过时，跳转地址
shiro.unauthorizedUrl=/author/error
#登出后的跳转地址,回⾸⻚
shiro.redirectUrl=/

[urls]
# 如下格式："访问路径 = 过滤器"
#【1.ant路径：？ * ** 细节如下】
# /user/login/page , /user/login/logic 是普通路径
# /user/* 代表/user后还有⼀级任意路径 ： /user/a , /user/b , /user/c , /user/xxxxxxxxxxx
# /user/** 代表/user后还有任意多级任意路径: /user/a , /user/a/b/c , /user/xxxx/xxxxxx/xxxxx
# /user/hello? 代表hello后还有⼀个任意字符: /user/helloa , /user/hellob , /user/hellox

#【2.过滤器，细节如下】
# anon => 不需要身份认证
# authc => 指定路径的访问，会验证是否已经认证身份，如果没有则会强制转发到 最上⾯配置的loginUrl上
# ( ops:登录逻辑本身千万不要被认证拦截，否则⽆法登录 )
# logout => 访问指定的路径，可以登出,不⽤定义handler。
# roles["manager","seller"] => 指定路径的访问需要subject有这两个⻆⾊
# perms["user:update","user:delete"] => 指定路径的访问需要subject有这两个权限
/user/login/page = anon
/user/login/logic = anon
/user/query = authc
/user/update = authc,roles["manager","seller"]
/user/delete = authc, perms["user:update","user:delete"]
/user/logout = logout  # 内置的过滤器，直接登出
#其余路径都需要身份认证【⽤此路径需谨慎】
/** = authc
#【3.注意】
#  以上的就是过滤器链条
# url的匹配，是从上到下匹配，⼀旦找到可以匹配的则停⽌，所以，通配范围⼤的url要往后放，
# 如"/user/delete" 和 "/user/**"
```





### 其他默认过滤器

![](media/image8.jpeg)



```java
public enum DefaultFilter {
    // 定义了诸多 过滤器
    anon(AnonymousFilter.class),
    authc(FormAuthenticationFilter.class),
    authcBasic(BasicHttpAuthenticationFilter.class),
    logout(LogoutFilter.class),
    noSessionCreation(NoSessionCreationFilter.class),
    perms(PermissionsAuthorizationFilter.class),
    port(PortFilter.class),
    rest(HttpMethodPermissionFilter.class),
    roles(RolesAuthorizationFilter.class),
    ssl(SslFilter.class),
    user(UserFilter.class);
    ....
}
```





## 配置异常解析器

```java
package com.qianfeng.resolver;

import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyExceptionResolver implements HandlerExceptionResolver{
    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        System.out.println(ex.getClass());
        ex.printStackTrace();//开发时必需
        ModelAndView mv = new ModelAndView();
        if(ex instanceof IncorrectCredentialsException
           || ex instanceof UnknownAccountException){
            //跳转登录页面，重新登录
            mv.setViewName("redirect:/user/login");
        }
        return mv;
    }
}
```



然后在mvc.xml里 声明用这个类来捕获异常

```xml
<bean class="com.qianfeng.resolver.MyExceptionResolver"></bean>
```







## 4.4 JSP

定义 Controller中和 shiro.ini中需要的jsp







## 4.5 总结

通过ShiroFilter和定义在shiro.ini中的配置信息，即可在项⽬接收⽤户访问时，进⾏身份，⻆⾊，权限进⾏访问控制！！！



# 五、shiro标签

## 5.1 导⼊shiro标签库

每个URL 都有自己的前缀和URI

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags"%>
        <html>
            ....
        </html> 
```



## 5.2 身份认证

| 标签                       | 作用                     |
| -------------------------- | ------------------------ |
| `<shiro:authenticated>`    | 已登录                   |
| `<shiro:user>>`            | 已登录或记住我           |
| `<shiro:guest>`            | 游客(未登录 且 未记住我) |
| `<shiro:notAuthenticated`> | 未登录                   |
| `<shiro:principal`>        | 获取⽤户身份信息         |





```html
<shiro:authenticated>
    欢迎您， <shiro:principal/>
</shiro:authenticated>

<shiro:user> <!-- 常⽤，包含已登录 且配合记住我，⽤户体验好 -->
    欢迎您,<shiro:principal/>
</shiro:user>

<shiro:guest>
    欢迎您，未登录，请<a href="<c:url value="/user/login/page"/>">登录</a>
</shiro:guest>

<shiro:notAuthenticated>
    您尚未登录(记住我也算在未登录中)
</shiro:notAuthenticated>
```









## 5.3 角色校验

```
<shiro:hasAnyRoles name="admin,manager">是其中任何⼀种⻆⾊
<shiro:hasRole name="admin">是指定⻆⾊
<shiro:lacksRole name="admin">不是指定⻆⾊
```



```html
<table>
    <tr>
        <td>id</td>
        <td>name</td>
        <td>operation</td>
    </tr>
    <tr>
        <td>001</td>
        <td>张三</td>
        <td>
            <shiro:hasAnyRoles name="admin,manager">
                <a href="#" style="text-decoration:none">详情</a>
            </shiro:hasAnyRoles>
            <shiro:hasRole name="admin">
                <a href="#" style="text-decoration: none">删除</a>
            </shiro:hasRole>
            <shiro:lacksRole name="admin">
                <a href="#" style="text-decoration: none">点击升级</a>
            </shiro:lacksRole>
        </td>
    </tr>
</table>
```





## 5.4 权限校验

<shiro:hasPermission name="user:delete">
有指定权限
<shiro:lacksPermission name="user:delete">
缺失指定权限



```html
...
<td>
    <a href="#" style="text-decoration:none">查看详情</a>
    <shiro:hasPermission name="user:delete">
        <a href="#" style="text-decoration: none">删除</a>
    </shiro:hasPermission>
    <shiro:lacksPermission name="user:delete">
        <a href="#" style="text-decoration: none" >⽆权删除</a>
    </shiro:lacksPermission>
</td>
...
```





## 5.5 自定义标签(了解)

jsp中允许⾃定义标签，所以可以根据需求 ⾃定义⼀些shiro标签。

### 定义标签类

```java
public class MyAllRoleTag extends RoleTag {
    // jsp中使⽤：<xxx:xx name="⻆⾊参数1,⻆⾊参数2,..."/>
    private String name;//存储传⼊的⻆⾊参数
    @Override
    public String getName() {
        return name;
    }
    @Override
    public void setName(String name) {
        this.name = name;
    }
    @Override
    protected boolean showTagBody(String name) {
        System.out.println("验证⻆⾊:"+name);
        String[] roles = name.split(",");
        Subject subject = getSubject();
        for(String role:roles) {
            if(!subject.hasRole(role)){
                return false;
            }
        }
        return true;
    }
}
```



### 定义tld文件

要放在WEB-INF ⽬录下，名称任意

```html
<!DOCTYPE taglib PUBLIC "-//Sun Microsystems, Inc.//DTD JSP Tag Library 1.2//EN"
"http://java.sun.com/dtd/web-jsptaglibrary_1_2.dtd">
<taglib>
    <tlib-version>1.1.2</tlib-version>
    <jsp-version>1.2</jsp-version>
    <short-name>zhj</short-name>
    <uri>http://zhj.apache.org/tags</uri>
    <description>Apache Shiro JSP Tag Library.</description>
    <tag>
        <!-- 标签名 <zhj:hasAllRoles .../> -->
        <name>hasAllRoles</name>
        <!-- ⾃定义Tag类路径 -->
        <tag-class>com.zhj.tag.MyAllRoleTag</tag-class>
        <body-content>JSP</body-content>
        <description>Displays body content only if the current Subject (user)
            'has' (implies) all the specified roles
        </description>
        <!-- ⾃定义Tag中属性名：name
<zhj:hasAllRoles name="role1,role2"/>
-->
        <attribute>
            <name>name</name>
            <required>true</required>
            <rtexprvalue>true</rtexprvalue>
        </attribute>
    </tag>
</taglib>
```

### 使用



```html
<%@ taglib prefix="zhj" uri="http://zhj.apache.org/tags" %>
    <!-- tld中定义的标签名：hasAllRoles, 向Tag类中传递参数：“seller,manager” -->
    <zhj:hasAllRoles name="seller,manager">
        有所有的⻆⾊2：manager，seller
    </zhj:hasAllRoles>
```







# 六、⾃定义Realm

存在的问题：⽬前所有的 ⽤户、⻆⾊、权限数据都在ini⽂件中，不利于管理。

**实际项目开发中这些信息，应该在数据库中。所以需要为这3类信息建表**

## 6.1 建表

⽤户表，⻆⾊表，权限表

```sql
create table t_user(
    id int primary key auto_increment,
    username varchar(20) not null unique,
    password varchar(100) not null
)engine=innodb default charset=utf8;

create table t_role(
    id int primary key auto_increment,
    role_name varchar(50) not null unique,
    create_time timestamp not null
)engine=innodb default charset=utf8;

create table t_permission(
    id int primary key auto_increment,
    permission_name varchar(50) not null unique,
    create_time timestamp
)engine=innodb default charset=utf8;


create table t_user_role(
    id int primary key auto_increment,
    user_id int references t_user(id),
    role_id int references t_role(id),
    unique(user_id,role_id)
)engine=innodb default charset=utf8;


create table t_role_permission(
    id int primary key auto_increment,
    permission_id int references t_permission(id),
    role_id int references t_role(id),
    unique(permission_id,role_id)
)engine=innodb default charset=utf8;
```





```sql
insert into t_user(username，password）values("松松"，"123")，("张远肌"，"456");
insert into t_role (role_name,create_time)
                   VALUES ("banzhang","2019-10-09"),("student","2019-10-09");
                   
insert into t_permission(permission_name,create_time)
                   VALUES("student:yq","2019-10-09"),("student:study","2019-10-09"); 
                   
insert into t_user_role(user id,role id)VALUES (1,1),(1,2),(2,2);                   
 
insert into t_role_permission(permission_id,role_id) VALUES (1,1),(2,1),(2,2);
```





## 6.2 ⾃定义Realm

Realm的职责是，为shiro加载用户，角色，权限数据，以供shiro内部校验。
之前定义在ini中的数据，默认有IniRealm去加载。
现在库中的数据，需要⾃定义Realm去加载。
ops : 没必要在Realm中定义⼤量的查询数据的代码，可以为Realm定义好查询数据的DAO和Service。









### ⽗类

如下是Realm接口的所有⼦类，其中IniRealm是默认的Realm，负责加载shiro.ini中的[users]和[roles]信息,当shiro需要⽤户，⻆⾊，权限信息时，会通过IniRealm获得。

自定义realm有两个⽗类可以选择：
1> 如果realm只负责做身份认证 ，则可以继承：AuthenticatingRealm
2> 如果realm要负责身份认证和权限校验，则可以继承：AuthorizingRealm



![](media/image9.jpeg)

### 定义Realm

doGetAuthenticationInfo：查看身份信息：登陆的使用，subject.login()时使用

Authentication：认证的意思

doGetAuthorizationInfo：查看权限信息

Authorization：授权的意思

```java
public class MyRealm extends AuthorizingRealm {
    /**
* 是否⽀持某种token
* @param token
* @return
*/
    @Override
    public boolean supports(AuthenticationToken token) {
        System.out.println("is support in realm1");
        if(token instanceof UsernamePasswordToken){
            return true;
        }
        return false;
    }
    /**
    查看身份信息：登陆的使用
	* 当subject.login()时，shiro会调⽤Realm的此⽅法做⽤户信息的查询，然后做校验
	* 职责：通过⽤户传递来的⽤户名查询⽤户表，获得⽤户信息
	* 返回值：将查到的⽤户信息（⽤户名+密码）封装在AuthenticationInfo对象中返回
    * 异常：如果没有查到⽤户可抛出⽤户不存在异常；如果⽤户被锁定可抛出⽤户被锁异常；或其它⾃定义异常.
	* @param token
	* @return
	* @throws AuthenticationException
	*/
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username = (String) token.getPrincipal();//获得⽤户名
        System.out.println("user:"+username+" is authenticating~~");
        UserService userService =
(UserService)ContextLoader.getCurrentWebApplicationContext().getBean("userService");
        //身份认证
        User user = userService.queryUser(username);
        System.out.println("user:"+user);
        /**
		如下代码可以省略，如果查询结果为空，直接返回null即可，
		shiro的后续流程已有类似判断逻辑，也会抛出UnknownAccountException
		if(user==null){//如果⽤户信息⾮法，则抛出异常
		System.out.println("⽤户不存在");
		throw new UnknownAccountException("username:"+username+"不存在");
		}
		**/
        //省略如上代码后，可以直接写：
        if(user == null){
            return null;
        }
        // 将 当前⽤户的认证信息存⼊ SimpleAuthenticationInfo 并返回
        // 注意此⽅法的本职⼯作就是查询⽤户的信息，所以查到后不⽤⽐对密码是否正确，那是shiro后续流程的职责。
        // 如果密码错误，shiro的后续流程中会抛出异常IncorrectCredentialsException
        return new SimpleAuthenticationInfo(user.getUsername(),user.getPassword(),getName());
        /**
补充: 可以在user表中增加⼀列，⽤于存储⽤户是否被锁定，则查询的User对象中会有是否锁定的属性
如果发现锁定则可以在此⽅法中抛出异常：LockedAccountException，
**/
    }
    
    
    
    /**
		* 当触发权限或⻆⾊校验时：subject.isPermitted() / subject.checkPermission();
		* subject.hasRole() / subject.checkRole() 等。
		* 此时需要数据库中的 权限和⻆⾊数据，shiro会调⽤Realm的此⽅法来查询
		* ⻆⾊和权限信息存⼊SimpleAuthorizationInfo对象
		* @param principals
		* @return
	*/
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String username = (String)principals.getPrimaryPrincipal();//获得username
        //新建SimpleAuthorizationInfo对象
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        //查询当前⽤户的所有 "⻆⾊" 和 "权限"
        UserService userService =(UserService)ContextLoader.getCurrentWebApplicationContext().getBean("userService");
        Set<String> roles = userService.queryRolesByUsername(username);
        Set<String> perms = userService.queryPermissionsByUsername(username);
        //“⻆⾊” 和 “权限” 存⼊ SimpleAuthorizationInfo对象
        info.setRoles(roles);
        info.setStringPermissions(perms);
        //返回SimpleAuthorizationInfo
        return info;
    }
}
```







### Service层的编写

新增依赖

```xml
<!-- spring -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context-support</artifactId>
    <version>4.3.6.RELEASE</version>
</dependency>

<!--  AOP  -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>4.3.6.RELEASE</version>
</dependency>

<!-- spring-jdbc(会传递tx) ，context-support ,aspects-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>4.3.6.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>4.3.6.RELEASE</version>
</dependency>

<!-- spring+mybatis集成依赖 -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>1.3.1</version>
</dependency>

<!-- MyBatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.5</version>
</dependency>
<!-- mysql驱动 依赖 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.25</version>
    <scope>runtime</scope>
</dependency>

<!-- druid依赖 -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.12</version>
</dependency>
```





```java

```



### dao层的编写

新增实体类：Role类、Permission类和User类

```java
package com.qianfeng.pojo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Permission {
    private Integer id;
    private String permissionName;
    private Date createTime;
}

//////////////////////////////////////
package com.qianfeng.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    private Integer id;
    private String roleName;
    private Date createTime;
}
/////////////////////
package com.qianfeng.pojo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Integer id;
    private String username;
    private String password;
}
```





UserDAO的编写

新增RoleDAO接口，UserDAO接口，PermissionDAO接口





## 6.3 配置Realm

shiro.ini中 配置⾃定义Realm
注意：[users] [roles] 两个部分不再需要

```ini
[main]
shiro.loginUrl = /login.jsp
shiro.unauthorizedUrl=/login.jsp
shiro.redirectUrl=/logout.jsp
shiro.postOnlyLogout = true
#注意：此处实在安装⾃定义Realm 指定realm
#声明Realm 名称 = Realm类路径
realm1 = com.zhj.realm.MyRealm
realm2 = com.zhj.realm.MyRealm2
#安装Reaml 关联到SecurityManager
securityManager.realms=$realm1,$realm2
[urls]
#照旧
```



web.xml配置不变

Shiro_⾃定义Realm后的 项⽬架构

![image10](media/image10.jpeg)

# 七、加密

⽤户的密码是不允许明⽂存储的，因为⼀旦数据泄露，⽤户的隐私信息会完全暴露。
密码必须结果加密，⽣成密⽂，然后数据库中只存储⽤户的密码的密⽂。

![](media/image11.jpeg)



在加密过程中需要使⽤到⼀些"不可逆加密"，如 md5,sha等
所谓不可逆是指

加密函数A, 明⽂ “abc”, 

```
A("abc") = "密⽂"
```

不能通过 "密⽂" 反推出 "abc"，即使密⽂泄露密码仍然安全。





## 7.1 加密介绍

shiro⽀持hash(散列)加密，常见的如 md5, sha等

基本加密过程
md5(明⽂)，sha(明⽂) 得到明⽂的密⽂，但明⽂可能⽐较简单，导致密⽂容易被破解。

加盐加密过程
系统⽣成⼀个随机salt="xxxxxx", md5(明⽂+salt) ,sha(明⽂+salt)，则提升了密⽂的复杂度。

加盐多次迭代加密过程
如果迭代次数为2，则加密2次： md5(明⽂+salt)=密⽂a ， md5(密⽂a+salt)=最终密⽂

sha(明⽂+salt)=密⽂a ， sha(密⽂a+salt)=最终密⽂
则进⼀步提升了密⽂的复杂度，和被破解的难度。

加密过程中建议使⽤salt，并指定迭代次数，迭代次数的建议值1000+

实例代码：

```java
String password="abc";//密码明⽂
String salt=UUID.randomUUID().toString();//盐
Integer iter = 1000;//迭代次数
String pwd = new Md5Hash(password, salt,iter).toString(); //md5加密
String pwd = new Md5Hash(password, salt, iter).toBase64(); //加密后转base64
String pwd = new Sha256Hash(password, salt, iter).toString();//sha256加密
String pwd = new Sha256Hash(password, salt, iter).toBase64();//加密后转base64
String pwd = new Sha512Hash(password, salt, iter).toString();//sha256加密
String pwd = new Sha512Hash(password, salt, iter).toBase64()//加密后转base64
```





## 7.2 加密

增加⽤户，或修改⽤户密码时，涉及到密码的加密

在注册⽤户的业务中，对⽤户提交的密码加密即可。
注意：之前的⽤户表，并未考虑存储加密相关信息，所以此时需要对⽤户表做出改进,
加⼀列【 salt varchar(50) 】，⽤于存储每个⽤户的盐。

![image12](media/image12.jpeg)

```java
class UserServiceImpl implements UserService{
    @Autowired
    private UserDAO userDAO;
    public void createUser(User user){
        user.setSalt(UUID.randomUUID().toString());//设置随机盐
        //设置加密属性：sha256算法，随机盐，迭代1000次
        Sha256Hash sha256Hash = new Sha256Hash(user.getPassword(),user.getSalt(),1000);
        //将⽤户信息 (包括密码的密⽂ 和 盐) 存⼊数据库
        user.setPassword(sha256Hash.toBase64());//密⽂采⽤base64格式化
        userDAO.createUser(user);
    }
}
```





## 7.3 密码比对

登录认证身份时，涉及到密码 ⽐对 过程
注意，加密过程中使⽤的加密属性，和此处使⽤的加密属性 必须⼀致：
【sha256,迭代1000次，使⽤base64格式化密⽂】

### 指定比对器



```ini
[main]
...
#声明密码⽐对器
credentialsMatcher=org.apache.shiro.authc.credential.HashedCredentialsMatcher
credentialsMatcher.hashAlgorithmName=sha-256
credentialsMatcher.hashIterations=1000
#true=hex格式 false=base64格式
credentialsMatcher.storedCredentialsHexEncoded=false
#⽐对器关联给realm,则realm中对⽤户做身份认证时，可以使⽤加密⽐对器，对密⽂做⽐对
realm1 = com.zhj.realm.MyRealm
realm1.credentialsMatcher=$credentialsMatcher
#realm关联给securityManager
securityManager.realms=$realm1
```





### 修改Realm

doGetAuthenticationInfo⽅法的返回值需要做修改

```java
protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws
    AuthenticationException {
    String username = (String) token.getPrincipal();
    UserService userService =
        (UserService)ContextLoader.getCurrentWebApplicationContext().getBean("userService");
    User user = userService.queryUser(username);
    System.out.println("user:"+user);
    if(user==null){
        System.out.println("⽤户不存在");
        throw new UnknownAccountException("username:"+username+"不存在");
    }
    //以上逻辑不变
    //在最后返回⽤户认证info时，添加⼀个属性：ByteSource.Util.bytes(user.getSalt()) = 盐
    //⽤于密码⽐对
    return new SimpleAuthenticationInfo(user.getUsername(),
                                        user.getPassword(),
                                        ByteSource.Util.bytes(user.getSalt()),
                                        getName());
}
```

⾄此，可以进⾏注册，注册中已经会加密密码。
然后登陆认证身份，认证时realm会调⽤⽐对器⽐对密⽂。







# ⼋、Spring集成

web项⽬的核⼼组件都在spring⼯⼚中管理，利⽤IOC和AOP，组建了关系松散，稳健的系统。
shiro的诸多组件也需要由spring统⼀管理，进⽽可以更好的和其他组件协作。

之前的Realm中⼀直有如下代码：

```java
//由于Realm还未进⼊spring⼯⼚，所以⽆法直接注⼊⼯⼚内部的DAO组件
UserService userService =(UserService)ContextLoader.getCurrentWebApplicationContext().getBean("xx");
```

ops：shiro的组件都是pojo组件，⾮常容易⽤spring管理，可以⽅便的从ini迁移到spring





## 8.1 pom

```xml
<!-- 其他依赖和web集成中 ⼀致 ，此处省略-->
<!-- 新增⼀个依赖 ⽤于在⼯⼚中⽣产 ShiroFilter-->
<!-- 会传递导⼊shiro-core 和 shiro-web -->
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-spring</artifactId>
    <version>1.4.0</version>
</dependency>
```



## 8.2 aplicationContext.xml



将SecurityManager和Realm和ShiroFilter 都迁移到applicationContext.xml中
建议将如下配置，单独⼀个配置⽂件：shiro-spring.xml,然后在applicationContext.xml中引⼊：

```
<import resource="classpath:shiro-spring.xml"/>
```

```xml
<!-- 整合mybaits，事务控制等 配置不变 -->
<!-- 添加配置 -->
<!-- shiro -->
<!-- 声明realm -->
<bean id="realm1" class="com.zhj.realm.MyRealm">
    <property name="userService" ref="userService"/>
    <!-- 此属性如果通过注解注⼊，则需要将注解加载set⽅法上，不能⽤在属性上。
此属性是⽗类属性，所以只有在set⽅法上注⼊，才能覆盖⽗类属性值。
-->
    <property name="credentialsMatcher">
        <bean class="org.apache.shiro.authc.credential.HashedCredentialsMatcher">
            <property name="hashAlgorithmName" value="SHA-256"/>
            <!-- true means hex encoded, false means base64 encoded -->
            <property name="storedCredentialsHexEncoded" value="false"/>
            <property name="hashIterations" value="1000"/>
        </bean>
    </property>
</bean>
<!-- 声明SecurityManager -->
<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">
    <property name="realm" ref="realm1"/>
</bean>
<!-- ⽣产SpringShiroFilter
（ 持有shiro的过滤相关规则，可进⾏请求的过滤校验，校验请求是否合法 ）
-->
<bean id="shiroFilter" class="org.apache.shiro.spring.web.ShiroFilterFactoryBean">
    <property name="securityManager" ref="securityManager"/>
    <property name="loginUrl" value="/user/login/page"/>
    <property name="unauthorizedUrl" value="/error.jsp"/>
    <property name="filterChainDefinitions">
        <value>
            /user/query=anon
            /user/insert=authc,roles["banfu"]
            /user/update=authc,perms[""student:update""]
            /order/insert=authc,roles["xuewei"]
            /user/logout=logout
        </value>
    </property>
</bean>
```

## 8.3 web.xml

```xml
<!-- 会从spring⼯⼚中获取和它同名的bean，（id="shiroFilter"）
接到请求后调⽤bean的doFilter⽅法，进⾏访问控制。
-->
<filter>
    <filter-name>shiroFilter</filter-name>
    <filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
    <init-param>
        <param-name>targetFilterLifecycle</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>shiroFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
<!-- EnvironmentLoaderListener不再需要，因为shiro环境已由spring初始化
springMVC,spring配置不变 -->

```



# 九、记住我

在登录后，可以将⽤户名存在cookie中，下次访问时，可以先不登录，就可以识别身份。

在确实需要身份认证时，⽐如购买，⽀付或其他⼀些重要操作时，再要求⽤户登录即可，⽤户体验好。

由于可以保持⽤户信息，系统后台也可以更好的监控、记录⽤户⾏为，积累数据。

## 9.1 代码

”记住我“ 起点在登录时刻：Subject.login(UsernameAndPasswordToken)
⽽是否确定要“记住我”，由登录时的token控制开关： token.setRememberMe(true);

```java
Subject subject = SecurityUtils.getSubject();
UsernamePasswordToken token = new UsernamePasswordToken(username, password);
//如果需要记住我的话，需要在token中设置
token.setRememberMe(true);//shiro默认⽀持”记住我“，只要有此设置则⾃动运作。
subject.login(token);
```

## 9.2 效果

登录后效果

![](media/image13.jpeg)







## 9.3 ⻚⾯中显示

```
在⻚⾯中显示，cookie中记录的⽤户信息
<shiro:user> 当有记住我信息，或已登录，则显示标签体内容
<shiro:principal> 获取⽤户信息
注意：⾸⻚的访问路径的过滤器 不能是 authc，只能是 user 或 anon
```



```html
<!-- ⾸⻚ xx.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
        <html>
            <body>
                <h2>Hello World! </h2>
                <!-- 重点在此：通过如下shiro标签显示 -->
                <shiro:user>
                    欢迎您，<shiro:principal/> <a href="#">退出登录</a>
                </shiro:user>
            </body>
        </html>
```



```html
<!-- 登录⻚⾯ login.jsp ⾃动填充⽤户名 -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
            <html>
                <head>
                    <title>Title</title>
                </head>
                <body>
                    <form action="<c:url value="/user/login"/>" method="post">
                        <!-- 重点在此：<shiro:principal/> -->
                        username:<input type="text" name="username" value="<shiro:principal/>"> <br>
                        password:<input type="password" name="password"><br>
                        <input type="submit" value="登录">
                    </form>
                </body>
            </html>
```



## 9.4 ⾃定义

如果需要做⾃定义，可以明确定义如下两个组件：

- SimpleCookie ：封装cookie的相关属性，定制cookie写出逻辑( 详⻅：addCookieHeader() )
- CookieRememberMeManager ：接受SecurityManager调度，获取⽤户信息，加密数据，并调度SimpleCookie写出cookie



```xml
<!-- 之前的配置不变，添加如下配置 -->
<!-- remember me -->
<bean id="rememberMeCookie" class="org.apache.shiro.web.servlet.SimpleCookie">
    <!-- rememberMe是cookie值中的key，value时⽤户名的密⽂
cookie["rememberMe":"deleteMe"] 此cookie每次登陆后都会写出，⽤于清除之前的cookie
cookie["rememberMe":username的密⽂] 此cookie也会在登录后写出，⽤于记录最新的username
（ops: 如上设计，既能保证每次登陆后重新记录cookie，也能保证切换账号时，记录最新账号）
-->
    <property name="name" value="rememberMe"/>
    <!-- cookie只在http请求中可⽤，那么通过js脚本将⽆法读取到cookie信息，有效防⽌cookie被窃取 -->
    <property name="httpOnly" value="true"/>
    <!-- cookie的⽣命周期，单位：秒 -->
    <property name="maxAge" value="2592000"/><!-- 30天 -->
</bean>
<bean id="rememberMeManager" class="org.apache.shiro.web.mgt.CookieRememberMeManager">
    <!-- 对cookie的value加密的密钥 建议每个项⽬都不⼀样
加密⽅式AES(对称加密)
密钥⽣成：【KeyGenerator keygen = KeyGenerator.getInstance("AES");
SecretKey deskey = keygen.generateKey();
System.out.println(Base64.encodeToString(deskey.getEncoded()));】
SpEL:Spring Expression Language #{表达式} #{T(类型)...}
<property name="cipherKey"
value="#{T(org.apache.shiro.codec.Base64).decode('c+3hFGPjbgzGdrC+MHgoRQ==')}"/>
此配置可以省略，CookieRememberMeManager⾃动完成秘钥⽣成
-->
    <!-- 注⼊SimpleCookie -->
    <property name="cookie" ref="rememberMeCookie"/>
</bean>
<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">
    ...
    <!-- CookieRememberMeManager注⼊给SecurityManager,
SecurityManager在处理login时，如果login成功，则会通过rememberMeManager做"记住我"，
将⽤户名存⼊cookie
-->
    <property name="rememberMeManager" ref="rememberMeManager"/>
</bean>
```





# ⼗、Session管理

shiro作为⼀款安全管理框架，对状态保持有很强的需要。
⽐如最常⽤的⽤户认证，就必需状态的保持，以及其他的⼀些功能实现的需要。
【shiro需要：认证中的 记住我中的⽤户名 正式登陆的⽤户名 】

【 开发者需要：其他功能中需要存⼊session的值 】

shiro提供了⼀整套session管理⽅案.

**1. shiro的session⽅案和任何`容器⽆关`(如servlet容器)；**
**2. javaSE也可以使⽤；相关组件都是pojo对ioc极其友好(⽅便的管理对象和满⾜依赖关系，定制参数)**
**3. 可以⽅便的扩展定制存储位置(`内存，缓存，数据库`等)**
**4. 对`web透明`⽀持：⽤了shiro的session后，项⽬中关于session的代码完全不⽤任何改动**
**5. 提供了全⾯的session`监听`机制，和session`检测`机制，对session可以细粒度操作**

即，使⽤了shiro后，采⽤shiro的session⽅案是最优的⽅案。





## 10.1 javaSE环境 （了解）

shiro 的session管理⽅案，可以在javaSE中使⽤，实⽤价值不⼤。

```java
Subject subject = SecurityUtils.getSubject();
//获取session
Session session = subject.getSession();
//session超时时间，单位：毫秒；0，⻢上过期；正数，则空闲对应毫秒后过期；负数，则不会过期
session.setTimeout(10000);
//session存、取值
session.setAttribute("name","zhj"); session.getAttribute("name");
//获取sessionID
getSession().getId();
// 销 毁 session session.stop();
```







```
原理，核⼼对象：
1.SimpleSession
Session的实现类，完成session基本功能。


2.SimpleSessionFactory
⽣产SimpleSession


3.SessionDAO
默认的实现类：MemorySessionDAO，由SessionManager创建，
负责存储所有session对象，存储位置：内存

4.DefaultSessionManager
由SecurityManager创建，负责创建、管理SessionFactory和SessionDAO。
```





```java
//核⼼类演示： （ ops:实际开发不⽤⼿动创建，shiro会初始化 ）
//通过SecurityManager 获得 SessionManager
DefaultSessionManager sessionManager = (DefaultSessionManager)securityManager.getSessionManager();
//通过SessionManager获得SessionFactory
SimpleSessionFactory sessionFactory = (SimpleSessionFactory) sessionManager.getSessionFactory();
//通过SessionManager获得SessionDAO
MemorySessionDAO sessionDAO = (MemorySessionDAO)sessionManager.getSessionDAO();
//通过SessionFactory获得Session
SimpleSession session1 = (SimpleSession) sessionFactory.createSession(null);
//通过Session做具体操作session1.setAttribute("name","zhangsan"); System.out.println(session1.getAttribute("name"));
```

## 10.2 javaEE环境

applicationContext.xml

```xml
<!-- 增加session管理相关配置 -->
<!-- 会话Cookie模板 默认可省-->
<bean id="sessionIdCookie" class="org.apache.shiro.web.servlet.SimpleCookie">
<!-- cookie的 key="sid" -->
<property name="name" value="JSESSIONID"/>
<!-- 只允许http请求访问cookie -->
<property name="httpOnly" value="true"/>
<!-- cookie过期时间，-1:存活⼀个会话 ,单位:秒 ，默认为-1-->
<property name="maxAge" value="-1"/>
</bean>

<bean id="sessionManager" class="org.apache.shiro.web.session.mgt.DefaultWebSessionManager">
<!-- 默认值和配置中给出的⼀致，所bean:sessionIdCookie 可以省略 -->
<property name="sessionIdCookie" ref="sessionIdCookie"/>
<!-- session全局超时时间, 单位:毫秒 ，30分钟 默认值为1800000-->
<property name="globalSessionTimeout" value="1800000"/>
</bean>

<!-- 将sessionManager关联到SecurityManager -->
<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">
...
<!-- 增加配置sessionManager -->
<property name="sessionManager" ref="sessionManager"/>
</bean>
```

## 10.3 Session监听

session有三个核⼼过程：创建、过期、停⽌

**过期：**session的默认过期时间为30分钟。通过⽐对最近⼀次使⽤时间和当前使⽤时间判断  session不会⾃动报告过期，需检测器检测时，或再次访问时，才可以识别是否过期并移除。

**停⽌：**⽤户主动`logout`；主动调⽤`session.stop()`; 两种情况会将session标志为停⽌状态。

```java
// 定义监听类 exentends SessionListenerAdapter
public class MySessionListener extends SessionListenerAdapter{
    //当有session创建时 触发
    @Override
    public void onStart(Session session) { System.out.println("session:"+session.getId()+" start");
                                         }
    //当有session停⽌时 触发
    @Override
    public void onStop(Session session) { System.out.println("session:"+session.getId()+" stop");
                                        }
    //当有session过期时 触发
    // 但不会主动触发，需要再次访问时，即⼜要使⽤session时才会发现session过期，并触发。
    @Override
    public void onExpiration(Session session) { System.out.println("session:"+session.getId()+" expired");
                                              }
}
```

配置监听类，关联给SessionManager



```xml
<bean id="sessionManager" class="org.apache.shiro.web.session.mgt.DefaultWebSessionManager">
    ...
    <property name="sessionListeners">
        <list>
            <bean class="com.zhj.listener.MySessionListener"></bean>
        </list>
    </property>
    ...
</bean>
```



## 10.4 Session检测

⽤户如果没有主动退出登录，只是关闭浏览器，则session是否过期⽆法获知，也就不能停⽌session。  为此，shiro提供了session的检测机制，可以定时发起检测，识别session过期 并停⽌session。



```xml
<!-- sessionManager默认开启session检测机制 -->
<bean id="sessionManager" class="org.apache.shiro.web.session.mgt.DefaultWebSessionManager">
    ...
    <!-- 开启检测器，默认开启 -->
    <property name="sessionValidationSchedulerEnabled" value="true"/>
    <!--- 检测器运⾏间隔，单位：毫秒	默认1⼩时
//检测到过期后，会直接将session删除
protected void afterExpired(Session session) { if (isDeleteInvalidSessions()) {
delete(session);
}
}
-->
    <property name="sessionValidationInterval" value="3600000"/>
    ...
</bean>
```

如上，通过检测器，定时的检测session，并及时移除⽆效session，释放资源。





# ⼗⼀、注解开发

shiro提供了⼀系列的访问控制的注解，可以简化开发过程。

```xml
<!-- 注解加载Controller中，原理是会对Controller做增强，切⼊访问控制逻辑，所以需要如下依赖 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aspects</artifactId>
    <version>4.3.6.RELEASE</version>
</dependency>
```

## 11.1 配置mvc.xml

```xml
<!-- enable shiro's annotation-->
<bean id="lifecycleBeanPostProcessor" class="org.apache.shiro.spring.LifecycleBeanPostProcessor"/>
<!-- ⾃动代理⽣成器，等价于aop:config;
aop:config 或 AutoProxyCreator两者选其⼀，spring官⽅提醒千万不要同时使⽤。

<bean class="org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator" depends-on="lifecycleBeanPostProcessor"/>
-->
<aop:config></aop:config>
<!-- 在 此 bean 的 构 建 过 程 中 ， 初 始 化 了 ⼀ 些 额 外 功 能 和 piontcut interceptors.add(new RoleAnnotationMethodInterceptor(resolver));
interceptors.add(new PermissionAnnotationMethodInterceptor(resolver)); interceptors.add(new AuthenticatedAnnotationMethodInterceptor(resolver)); interceptors.add(new UserAnnotationMethodInterceptor(resolver)); interceptors.add(new GuestAnnotationMethodInterceptor(resolver));
-->
<bean class="org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor">
    <property name="securityManager" ref="securityManager"/>
</bean>
```



## 11.2注解使⽤

加在类上

```java
@Controller @RequestMapping("/user")
@RequiresAuthentication //类中的所有⽅法都需要身份认证
@RequiresRoles(value={"manager","admin"},logical= Logical.OR)//类中的所有⽅法都需要⻆⾊,"或"
public class ShiroController {
    ...
}
```





加在⽅法上

```java
@Controller @RequestMapping("/user") public class ShiroController2{
    ...
        @RequiresPermissions({"user:query”,“user:delete"}) //有对应权限，默认是 "且" @RequiresUser //记住我 或 已身份认证
        public String hello(){
        ...
    }
    @RequiresGuest //游客身份public String hello2(){
    ...
}
}
```



配置修改

```xml
<bean id="shiroFilter" class="org.apache.shiro.spring.web.ShiroFilterFactoryBean">
    <property name="securityManager" ref="securityManager"/>
    <!-- 不再需要，此时如果身份或权限不通过，会抛出异常，需要异常解析器处理
<property name="loginUrl" value="/user/login/page"/>
<property name="unauthorizedUrl" value="/error.jsp"/>
<property name="filterChainDefinitions">
<value>
/user/query=anon	如下不再需要，登出可以保留，也可以⾃⼰写handler中subject.logout()
/user/insert=authc,roles["banfu"]
/user/update=authc,perms[""student:update""]
/order/insert=authc,roles["xuewei"]
/user/logout=logout
</value>
</property>-->
</bean>
```

## 11.3 异常处理

```xml
<!-- mvc.xml中：MVC的⾃定义异常处理器,⽤于处理权限或身份认证不通过时的异常处理-->
<bean class="com.zhj.ex.handler.MyExHandler"></bean>
```

```java
public class MyExceptionResolver implements HandlerExceptionResolver{ @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        System.out.println(ex.getClass()); ex.printStackTrace();//开发时必需ModelAndView mv = new ModelAndView();
        if(ex instanceof IncorrectCredentialsException || ex instanceof UnknownAccountException){
            //跳转登录⻚⾯，重新登录mv.setViewName("redirect:/user/login");
        }else if(ex instanceof UnauthorizedException){// ⻆⾊不⾜
            //跳转权限不⾜的⻚⾯
            mv.setViewName("redirect:/user/perms/error");
        }else if(ex instanceof UnauthenticatedException){//没有登录 没有合法身份
            //跳转登录⻚⾯，重新登录
            mv.setViewName("redirect:/user/login");
        }
        return mv;
    }
}
```





