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
```
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

```
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