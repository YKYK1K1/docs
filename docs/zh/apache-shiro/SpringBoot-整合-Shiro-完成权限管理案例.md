 # **Spring Boot 整合 Shiro 完成权限管理案例（自定义 Realm）**
> 使用JdbcRealm可以完成用户权限管理，但是我们必须提供JdbcRealm规定的数据表结构；如果在我们
> 项目开发中 ，这个JdbcRealm规定的数据表结构不能满足开发需求，该如何处理呢？
> 
> - 自定义数据库表结构
> - 自定义Realm实现认证和授权

<br />

![](/assets/apache-shiro/yky_20200426143303884.png)

<br />

## **Shiro 功能**
---
<br />

![](/assets/apache-shiro/yky_20200427094830658.png)

## **数据库设计**
---

- RBAC基于角色的访问控制

```SQL
-- 用户信息表
create table tb_users(
	user_id int primary key auto_increment,
	username varchar(60) not null unique,
	password varchar(20) not null,
  password_salt varchar(60)
);

insert into tb_users(username,password) values('zhangsan','123456');
insert into tb_users(username,password) values('lisi','123456');
insert into tb_users(username,password) values('wangwu','123456');
insert into tb_users(username,password) values('zhaoliu','123456');
insert into tb_users(username,password) values('chenqi','123456');

-- 角色信息表
create table tb_roles(
	role_id int primary key auto_increment,
	role_name varchar(60) not null
);

insert into tb_roles(role_name) values('admin');
insert into tb_roles(role_name) values('cmanager');  -- 仓管
insert into tb_roles(role_name) values('xmanager');  --  销售
insert into tb_roles(role_name) values('kmanager');  -- 客服
insert into tb_roles(role_name) values('zmanager');  -- 行政

-- 权限信息表
create table tb_permissions(
	permission_id int primary key auto_increment,		-- 1
	permission_code varchar(60) not null,						-- sys:c:find
	permission_name varchar(60)											-- 仓库查询
);
insert into tb_permissions(permission_code,permission_name) values('sys:c:save','入库');
insert into tb_permissions(permission_code,permission_name) values('sys:c:delete','出库');
insert into tb_permissions(permission_code,permission_name) values('sys:c:update','修改');
insert into tb_permissions(permission_code,permission_name) values('sys:c:find','查询');

insert into tb_permissions(permission_code,permission_name) values('sys:x:save','新增订单');
insert into tb_permissions(permission_code,permission_name) values('sys:x:delete','删除订单');
insert into tb_permissions(permission_code,permission_name) values('sys:x:update','修改订单');
insert into tb_permissions(permission_code,permission_name) values('sys:x:find','查询订单');


insert into tb_permissions(permission_code,permission_name) values('sys:k:save','新增客户');
insert into tb_permissions(permission_code,permission_name) values('sys:k:delete','删除客户');
insert into tb_permissions(permission_code,permission_name) values('sys:k:update','修改客户');
insert into tb_permissions(permission_code,permission_name) values('sys:k:find','查询客户');

-- 用户角色表
create table tb_urs(
	uid int not null,
	rid int not null
	-- primary key(uid,rid),
	-- constraint FK_user foreign key(uid) references tb_users(user_id),
	-- constraint FK_role foreign key(rid) references tb_roles(role_id)
);
insert into tb_urs(uid,rid) values(1,1);
insert into tb_urs(uid,rid) values(1,2);
insert into tb_urs(uid,rid) values(1,3);
insert into tb_urs(uid,rid) values(1,4);
insert into tb_urs(uid,rid) values(1,5);

insert into tb_urs(uid,rid) values(2,2);
insert into tb_urs(uid,rid) values(3,3);
insert into tb_urs(uid,rid) values(4,4);
insert into tb_urs(uid,rid) values(5,5);

-- 角色权限表
create table tb_rps(
	rid int not null,
	pid int not null
);
-- 给仓管角色分配权限
insert into tb_rps(rid,pid) values(2,1);
insert into tb_rps(rid,pid) values(2,2);
insert into tb_rps(rid,pid) values(2,3);
insert into tb_rps(rid,pid) values(2,4);
-- 给销售角色分配权限
insert into tb_rps(rid,pid) values(3,4);
insert into tb_rps(rid,pid) values(3,5);
insert into tb_rps(rid,pid) values(3,6);
insert into tb_rps(rid,pid) values(3,7);
insert into tb_rps(rid,pid) values(3,8);
insert into tb_rps(rid,pid) values(3,9);
insert into tb_rps(rid,pid) values(3,10);
insert into tb_rps(rid,pid) values(3,11);
insert into tb_rps(rid,pid) values(3,12);
-- 给客服角色分配权限
insert into tb_rps(rid,pid) values(4,11);
insert into tb_rps(rid,pid) values(4,12);
-- 给行政角色分配权限
insert into tb_rps(rid,pid) values(5,4);
insert into tb_rps(rid,pid) values(5,8);
insert into tb_rps(rid,pid) values(5,12);
```
## **DAO 实现**
---

> - Shiro进行认证需要用户信息：
>   - 根据用户名查询用户信息
>
> - Shiro进行授权管理需要当前用户的角色和权限
>
>   - 根据用户名查询当前用户的角色列表（3张表连接查询）
>
>   - 根据用户名查询当前用户的权限列表（5张表连接查询）

### **创建 SpringBoot 项目，整合 MyBatis**

> 用插件生成 domain,dao,server.impl,mappers 文件

### **根据用户名查询用户信息**

- 创建 `TbUsersMapper` Dao 层

```java
package com.yky.hello.spring.boot.mybatis.shiro.dao;


import com.yky.hello.spring.boot.mybatis.shiro.domain.TbUsers;

public interface TbUsersMapper {

    public TbUsers queryUserByUsername(String username) throws Exception;
}
```
- 映射配置 `TbUsersMapper.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yky.hello.spring.boot.mybatis.shiro.dao.TbUsersMapper">
    <resultMap id="UserMap" type="com.yky.hello.spring.boot.mybatis.shiro.domain.TbUsers">
        <!--@mbg.generated generated on Tue Jun 02 15:58:26 CST 2020.-->
        <!--@Table tb_users-->
        <id column="user_id" jdbcType="INTEGER" property="userId"/>
        <result column="username" jdbcType="VARCHAR" property="username"/>
        <result column="password" jdbcType="VARCHAR" property="password"/>
        <result column="password_salt" jdbcType="VARCHAR" property="passwordSalt"/>
    </resultMap>
    <sql id="tbUsersColumns">
        <!--@mbg.generated generated on Tue Jun 02 15:58:26 CST 2020.-->
        user_id, username, `password`, password_salt
    </sql>
    <select id="queryUserByUsername" resultMap="UserMap">
        select
        <include refid="tbUsersColumns"/>
        from tb_users
        where username=#{username};

    </select>
</mapper>
```

### **根据用户名查询角色名列表**

- 创建 `TbRolesMapper` DAO 层

```java
package com.yky.hello.spring.boot.mybatis.shiro.dao;


import com.yky.hello.spring.boot.mybatis.shiro.domain.TbRoles;

import java.util.Set;

public interface TbRolesMapper {

    public Set<String> queryRoleNamesByUsername(String username) throws Exception;
}
```

- 映射配置 `TbRolesMapper.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yky.hello.spring.boot.mybatis.shiro.dao.TbRolesMapper">
    <resultMap id="BaseResultMap" type="com.yky.hello.spring.boot.mybatis.shiro.domain.TbRoles">
        <!--@mbg.generated generated on Tue Jun 02 15:58:26 CST 2020.-->
        <!--@Table tb_roles-->
        <id column="role_id" jdbcType="INTEGER" property="roleId"/>
        <result column="role_name" jdbcType="VARCHAR" property="roleName"/>
    </resultMap>
    <sql id="tbRolesColumns">
        <!--@mbg.generated generated on Tue Jun 02 15:58:26 CST 2020.-->
        role_id, role_name
    </sql>
    <select id="queryRoleNamesByUsername" resultSets="java.util.Set" resultType="java.lang.String">
      select role_name
        from tb_users inner join tb_urs
        on tb_users.user_id = tb_urs.uid
        inner join tb_roles
        on tb_urs.rid = tb_roles.role_id
        where tb_users.username=#{username};
    </select>
</mapper>
```
### **根据用户名查询权限列表**
- 创建 `TbPermissionsMapper` DAO 层
```java
package com.yky.hello.spring.boot.mybatis.shiro.dao;


import java.util.Set;

public interface TbPermissionsMapper {

    public Set<String> queryPermissionsByUsername(String username)throws Exception;
}
```

- 映射配置 `TbPermissionsMapper.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.yky.hello.spring.boot.mybatis.shiro.dao.TbPermissionsMapper">
    <resultMap id="BaseResultMap" type="com.yky.hello.spring.boot.mybatis.shiro.domain.TbPermissions">
        <!--@mbg.generated generated on Tue Jun 02 15:58:26 CST 2020.-->
        <!--@Table tb_permissions-->
        <id column="permission_id" jdbcType="INTEGER" property="permissionId"/>
        <result column="permission_code" jdbcType="VARCHAR" property="permissionCode"/>
        <result column="permission_name" jdbcType="VARCHAR" property="permissionName"/>
    </resultMap>
    <sql id="Base_Column_List">
        <!--@mbg.generated generated on Tue Jun 02 15:58:26 CST 2020.-->
        permission_id, permission_code, permission_name
    </sql>
    <select id="queryPermissionsByUsername" resultSets="java.util.Set" resultType="java.lang.String">
        select tb_permissions.permission_code from tb_users
        inner join tb_urs on tb_users.user_id=tb_urs.uid
        inner join tb_roles on tb_urs.rid=tb_roles.role_id
        inner join tb_rps on tb_roles.role_id=tb_rps.rid
        inner join tb_permissions on tb_rps.pid=tb_permissions.permission_id
        where tb_users.username=#{username};
    </select>
</mapper>
``` 
## **整合 Shiro**
---

- 导入依赖
```xml
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-spring</artifactId>
    <version>1.5.3</version>
</dependency>
<dependency>
    <groupId>com.github.theborakompanioni</groupId>
    <artifactId>thymeleaf-extras-shiro</artifactId>
    <version>2.0.0</version>
</dependency>
```
- 配置 Shiro -基于 Java 配置方式
```java
package com.yky.hello.spring.boot.mybatis.shiro.config;


import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;
import org.apache.shiro.realm.jdbc.JdbcRealm;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

/**
 * @version 1.0
 * @ClassName ShiroConfig
 * @Description TODO
 * @Author YKY
 * @Date 2020/6/2 10:34
 **/
@Configuration
public class ShiroConfig {

    @Bean
    public ShiroDialect shiroDialect() {
        return new ShiroDialect();
    }

    /**
     * 自定义 Realm
     *
     * @return
     */
    @Bean
    public MyRealm getMyRealm() {
        MyRealm myRealm = new MyRealm();
        return myRealm;
    }


    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(MyRealm myRealm) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        //SecurityManager 要完成校验，需要 Realm
        securityManager.setRealm(myRealm);
        return securityManager;
    }

    @Bean
    public ShiroFilterFactoryBean shirofilter(DefaultWebSecurityManager securityManager) {
        ShiroFilterFactoryBean filter = new ShiroFilterFactoryBean();
        //过滤器就是 Shiro 就行权限校验的核心，进行认证和授权是需要 SecurityManager 的
        filter.setSecurityManager(securityManager);


        //设置 Shiro 的拦截规则
        // anon   匿名用户可访问
        // authc  认证用户可访问
        // user   使用 RemeberMe 的用户可访问
        // perms  对应权限可访问
        // role   对应的角色可访问
        Map<String, String> filterMap = new HashMap<>();
        filterMap.put("/", "anon");
        filterMap.put("/index", "anon");
        filterMap.put("/login", "anon");
        filterMap.put("/regist", "anon");
        filterMap.put("/user/login", "anon");
        filterMap.put("/user/regist", "anon");
        filterMap.put("/static/**", "anon");
        filterMap.put("/**", "authc");

        filter.setFilterChainDefinitionMap(filterMap);
        filter.setLoginUrl("/login");
        //设置未授权访问的页面路径
        filter.setUnauthorizedUrl("/login");
        return filter;
    }
}

```
- 自定义 Realm

```java
package com.yky.hello.spring.boot.mybatis.shiro.config;

import com.yky.hello.spring.boot.mybatis.shiro.dao.TbPermissionsMapper;
import com.yky.hello.spring.boot.mybatis.shiro.dao.TbRolesMapper;
import com.yky.hello.spring.boot.mybatis.shiro.dao.TbUsersMapper;
import com.yky.hello.spring.boot.mybatis.shiro.domain.TbUsers;
import lombok.SneakyThrows;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.realm.SimpleAccountRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Set;

/**
 * @version 1.0
 * @ClassName MyRealm
 * @Description TODO 1.创建一个类继承 AuthorizingRealm 类（实现了 Realm 接口的类）
 * @Description TODO 2.重写 doGetAuthorizationInfo和 doGetAuthenticationInfo 方法
 * @Description TODO 3.重写 getName 方法返回当前 Realm 的一个自定义名称
 * @Author YKY
 * @Date 2020/6/2 21:48
 **/
public class MyRealm extends AuthorizingRealm {

    @Autowired
    private TbUsersMapper tbUsersMapper;
    @Autowired
    private TbRolesMapper tbRolesMapper;
    @Autowired
    private TbPermissionsMapper tbPermissionsMapper;

    @Override
    public String getName() {
        return "MyRealm";
    }

    /**
     * 获取授权数据(将当前用户的角色及权限信息查询出来)
     *
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        //获取用户的用户名
        String username = (String) principalCollection.iterator().next();
        //根据用户名查询当前用户的角色列表
        Set<String> roleNames = tbRolesMapper.queryRoleNamesByUsername(username);

        //根据用户名查询当前用户的权限列表
        Set<String> permissions = tbPermissionsMapper.queryPermissionsByUsername(username);

        //实现类
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        info.setRoles(roleNames);
        info.setStringPermissions(permissions);
        return info;
    }

    /**
     * 获取认证的安全数据（从数据库查询的用户的正确数据）
     *
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        // 参数 authenticationToken 就是传递的 subject.login(token)
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        String username = token.getUsername();
        //根据用户名，从数据库查询当前用户的安全数据
        TbUsers user = tbUsersMapper.queryUserByUsername(username);
        if (user == null) {
            return null;
        }
        //实现类
        AuthenticationInfo info = new SimpleAuthenticationInfo(
                //当前用户用户名
                username,
                //从数据库查询出的安全密码
                user.getPassword(),
                //当前 Realm 名字
                getName()
        );
        return info;
    }
}

```
## **Spring Boot 应用打包部署**
---

- Spring Boot 项目集成了 web 容器(Tomcat),所以 Spring Boot 应用是可以打包成 jar 直接运行的
- 在 Linux 系统上运行 可以使用 

```bat
// 不挂断地运行命令
nohup java -jar XXXX.jar
```
- 查询后台端口状态

```bat
lsof -i:8080
```
