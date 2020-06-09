# **基于 JavaSE 应用—Shiro 的基本使用**
## **创建 Maven 项目**
---

打开 `IDEA` -> `New Project` -> `Maven` -> `org.apache.maven.archetypes:maven-archetype-webapp` -> `Next`

<br />

![创建 Maven 项目](/assets/apache-shiro/yky_20200527110701.png)

<br />

填写项目信息 -> `Next`

<br />

![填写项目信息](/assets/apache-shiro/yky_20200527111017.png)

<br />

选择 Maven 依赖库 -> `Next`

<br />

![选择 Maven 依赖库](/assets/apache-shiro/yky_20200527112336.png)

<br />

选择工作空间 -> `Finish`

<br />

![选择工作空间](/assets/apache-shiro/yky_20200527111220.png)

<br />

## **导入 Shiro 依赖库**
---

```xml
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-core</artifactId>
    <version>1.5.3</version>
</dependency>
```

## **创建 Shiro 配置文件**
---

- 在resource目录下创建名为 `shiro.ini` 的文件
- 在文件中完成用户、角色及权限的配置

```ini
[users]
yky=yky,seller
zhangsan=zhangsan,ckmgr
admin=admin,admin

[roles]
admin=*
seller=order-add,order-del,order-list
ckmgr=ck-add,ck-del,ck-list
```

## **Shiro 的基本使用**
---

```java
package com.yky.hello.shiro;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.mgt.DefaultSecurityManager;
import org.apache.shiro.realm.text.IniRealm;
import org.apache.shiro.subject.Subject;

import java.util.Scanner;


/**
 * @version 1.0
 * @ClassName TestShiro
 * @Description TODO
 * @Author YKY
 * @Date 2020/5/28 8:49
 **/
public class TestShiro {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入账号");
        String username = scanner.nextLine();
        System.out.println("请输入密码");
        String password = scanner.nextLine();

        //1. 创建安全管理器
        DefaultSecurityManager securityManager = new DefaultSecurityManager();
        //2. 创建 Realm
        IniRealm iniRealm = new IniRealm("classpath:shiro.ini");
        //3. 将 Realm 设置给安全管理器
        securityManager.setRealm(iniRealm);
        //4. 将 Realm 设置给 SecurityUtils 工具
        SecurityUtils.setSecurityManager(securityManager);
        //5. 通过 SecurityUtils 工具类获取 Subject 对象
        Subject subject = SecurityUtils.getSubject();

        // 【认证流程】
        //1. 将认证账号和密码f封装到 token 对象中
        UsernamePasswordToken token = new UsernamePasswordToken(username, password);
        //2. 通过 subject 对象调用 Login 方法进行认证申请
        boolean b = false;
        try {
            subject.login(token);
            b = true;
        } catch (IncorrectCredentialsException e) {
            System.out.println("认证失败");
        }
        System.out.println(b ? "登录成功" : "登录失败");

        //【授权】
        //判断是否有某个角色
        System.out.println(subject.hasRole("seller"));

        //判断是否有某个权限
        boolean permitted = subject.isPermitted("order-del");
        System.out.println(permitted);
    }
}

```