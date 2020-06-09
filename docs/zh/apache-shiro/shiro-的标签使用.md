# **Shiro 的标签使用**
> 当用户认证进入到主页面之后，需要显示用户信息及当前用户的权限信息
> Shiro 就提供了一套标签用于在页面来进行权限数据的呈现

- Shiro 提供了可供 JSP 使用的标签以及 Thymeleaf 中标签

    - JSP 页面中引用：

        ```jsp
        <%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
        ```
    - Thymeleaf模版中引用：

        - 在 `pom.xml` 文件中导入 thymeleaf 模版对 shiro 标签支持的依赖

        ```xml
        <dependency>
            <groupId>com.github.theborakompanioni</groupId>
            <artifactId>thymeleaf-extras-shiro</artifactId>
            <version>2.0.0</version>
        </dependency>
        ```
        - 在 ShiroConfig 中配置 Shiro 的 ShiroDialect

        ```java
        @Configuration
        public class ShiroConfig {

            @Bean
            public ShiroDialect getShiroDialect(){
                return new ShiroDialect();
            }
            //...
        }
        ```
        - Thymeleaf 模版中引入 shiro 的命名空间

        ```html
        <html xmlns:th="http://www.thymeleaf.org"
            xmlns:shiro="http://www.pollix.at/thymeleaf/shiro">
            ...
        </html>        
        ```
## **常用标签**
---

- guest，判断用户是否是游客身份，如果是游客身份则显示此标签内容

```html
<shiro:guest>
    欢迎游客访问，<a href="/login">登录</a>
</shiro:guest>
```
- user，判断用户是否是认证身份，如果是认证身份则显示此标签内容

- principal，获取当前登录用户名

```html
<shiro:user>
    用户[<shiro:principal/>]欢迎您！
</shiro:user>
```
- notAuthenticated/authenticated
- hasRole
- hasPermission

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org"
      xmlns:shiro="http://www.pollix.at/thymeleaf/shiro">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    index
    <hr/>
    <shiro:guest>
        欢迎游客访问，<a href="/login">登录</a>
    </shiro:guest>
    <shiro:user>
        用户[<shiro:principal/>]欢迎您！
        当前用户为<shiro:hasRole name="admin">超级管理员</shiro:hasRole>
                <shiro:hasRole name="cmanager">仓管人员</shiro:hasRole>
                <shiro:hasRole name="xmanager">销售人员</shiro:hasRole>
                <shiro:hasRole name="kmanager">客服人员</shiro:hasRole>
                <shiro:hasRole name="zmanager">行政人员</shiro:hasRole>
    </shiro:user>

    <hr/>
    仓库管理
    <ul>
        <shiro:hasPermission name="sys:c:save"><li><a href="#">入库</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:c:delete"><li><a href="#">出库</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:c:update"><li><a href="#">修改</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:c:find"><li><a href="#">查询</a></li></shiro:hasPermission>
    </ul>

    订单管理
    <ul>
        <shiro:hasPermission name="sys:x:save"><li><a href="#">添加订单</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:x:delete"><li><a href="#">删除订单</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:x:update"><li><a href="#">修改订单</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:x:find"><li><a href="#">查询订单</a></li></shiro:hasPermission>
    </ul>

    客户管理
    <ul>
        <shiro:hasPermission name="sys:k:save"><li><a href="#">添加客户</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:k:delete"><li><a href="#">删除客户</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:k:update"><li><a href="#">修改客户</a></li></shiro:hasPermission>
        <shiro:hasPermission name="sys:k:find"><li><a href="#">查询客户</a></li></shiro:hasPermission>
    </ul>


</body>
</html>
```