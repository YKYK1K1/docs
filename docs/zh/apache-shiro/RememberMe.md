# **RememberMe**

> 将用户对页面访问的权限分为三个级别：
> 
> - 未认证—可访问的页面—(陌生人)—问候
>  - `login.html`、`regist.html`
> - 记住我—可访问的页面—(前女友)—朋友间的拥抱
>  - `info.html`
> - 已认证—可访问的页面—(现女友)—牵手
>  - `转账.html`
## **前提**
> 提示：
> 先更改 `login.html`

```java
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>
</head>
<body>
<h2>login</h2>
<hr>
<form action="/user/login" method="post">
    <p>账号：<input type="text" name="userName"></p>
    <p>密码：<input type="password" name="userPwd"></p>
    <p>记住我：<input type="checkbox" name="rememberMe"></p>
    <p><input type="submit" value="登录"></p>
</form>
</body>
</html>
```

## **在过滤器中设置 "记住我" 可访问的 url**
---

```java
// anon     表示未认证可访问的url
// user     表示记住我可访问的url（已认证也可以访问）
//authc     表示已认证可访问的url
//perms		表示必须具备指定的权限才可访问
//logout	表示指定退出的url
filterMap.put("/","anon");
filterMap.put("/index","user");
filterMap.put("/login","anon");
filterMap.put("/regist","anon");
filterMap.put("/user/login","anon");
filterMap.put("/user/regist","anon");
filterMap.put("/static/**","anon");
filterMap.put("/**","authc");
filterMap.put("/c_add","perms[sys:c:save]");
filterMap.put("/exit","logout");
```
## **在 `ShiroConfig.java` 中配置基于 cookie 的 RememberMe 管理器**
---

```java
 @Bean
    public CookieRememberMeManager cookieRememberMeManager() {
        CookieRememberMeManager rememberMeManager = new CookieRememberMeManager();
        SimpleCookie cookie = new SimpleCookie();
        //cookie 存活时间 (一个月）
        cookie.setMaxAge(30 * 24 * 60 * 60);
        rememberMeManager.setCookie(cookie);
        return rememberMeManager;
    }


    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(MyRealm myRealm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        //SecurityManager 要完成校验，需要 Realm
        securityManager.setRealm(myRealm);
        //缓存管理器
        securityManager.setCacheManager(getEhCacheManager());
        //使用自己定义的 Session
        securityManager.setSessionManager(getDefaultWebSessionManager());
        //设置 Remember 管理器
        securityManager.setRememberMeManager(cookieRememberMeManager());
        return securityManager;
    }
```
## **登录认证时设置 token "记住我"**

- 登录页面

```html
<form action="/user/login" method="post">
    <p>帐号:<input type="text" name="userName"/></p>
    <p>密码:<input type="text" name="userPwd"/></p>
    <p>记住我:<input type="checkbox" name="rememberMe"/></p>
    <p><input type="submit" value="登录"/></p>
</form>
```
- 控制器 - `UserController.java`

```java
/**
     * 登录
     *
     * @param userName
     * @param userPwd
     * @return
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(String userName, String userPwd, boolean rememberMe) {
        try {
            tbUsersService.checkLogin(userName, userPwd, rememberMe);
            System.out.println("-------登录成功");
            return "index";
        } catch (Exception e) {
            System.out.println("-------登录失败");
            return "login";
        }
    }
    //...
```
- service - `TbUsersService.java`
    
```java
void checkLogin(String userName, String userPwd, boolean rememberMe);
```

    - impl - ``