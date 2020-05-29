# **Hello World**
## **创建项目**
---

打开 `IDEA` -> `Create New Project`

<br />

![IDEA 创建项目](/assets/idea/yky_20200520092922.jpg)

<br />

选择 `Maven` -> `org.apache.maven.archetypes:maven-archetype-webapp`

<br />

![创建 maven shiro 项目](/assets/apache-shiro/yky_20200522105155.png)

<br />

填写 `GroupId` 和 `ArtifactIdp`

![填写项目信息](/assets/apache-shiro/yky_20200522105623.png)


<br />

选择自己的 `Maven` 库 和 `Maven` 配置文件

<br />

![填写项目信息](/assets/apache-shiro/yky_20200522105823.png
)

<br />

项目命名后选择存放的工作空间，项目就创建完成了

<br />

![填写项目信息](/assets/apache-shiro/yky_20200522105949.png
)

## **pom 文件**
---

新建一个Web项目，因为后续迟早要和 web 集成

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

配置

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

