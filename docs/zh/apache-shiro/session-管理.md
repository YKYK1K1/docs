# **Session 管理**
> Shiro 进行认证和授权是基于 session 实现的，Shiro 包含了对 session 的管理

- 如果我们需要对 session 进行管理

  - 自定义 session 管理器
  - 将自定义的 session 管理器设置给 SecurityManager

- 配置自定义 SessionManager：`ShiroConfig.java`

```java
/**
     * 自定义 Session 生命周期
     * @return
     */
    @Bean
    public DefaultWebSessionManager getDefaultWebSessionManager(){
        DefaultWebSessionManager sessionManager = new DefaultWebSessionManager();
        // 1800000
        System.out.println("----------"+sessionManager.getGlobalSessionTimeout());
        //配置sessionManager
        sessionManager.setGlobalSessionTimeout(5*60*1000);
        return sessionManager;
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
        return securityManager;
    }
```