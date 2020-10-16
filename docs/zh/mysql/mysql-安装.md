# **MySQL 安装**

## **MySQL官网下载**
---

[MySQL 8.0.20 免安装版](https://dev.mysql.com/downloads/file/?id=494993)

<br />

![MySQL 8.0.20 免安装版 下载](/assets/mysql/yky-2020050915013951.jpg)

<br />

**不用注册，直接下载就好**

## **解压缩**

<br />

![MySQL 8.0.20 免安装版 下载](/assets/mysql/yky-2020050915013952.png)

<br />

**ok解压后的目录并没有的my.ini文件，那么自己配置。自行创建在安装根目录下添加的my.ini，写入基本配置：**

```ini
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=C:\Program Files\MySQL
# 设置mysql数据库的数据的存放目录
datadir=C:\Program Files\MySQL\Data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。
max_connect_errors=10
# 服务端使用的字符集默认为utf8mb4
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
#mysql_native_password
default_authentication_plugin=mysql_native_password
# GROUP bY
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```

**请注意路径一致，不会改的就和我一样就好。**

## **初始化 MySQL 用管理员身份运行 cmd**
---

![用管理员身份运行cmd](/assets/mysql/yky-2020050915013953.jpg)

<br />

**进入 mysql 文件夹 bin 目录**

<br />

![用管理员身份运行cmd](/assets/mysql/yky-20200707092751.png)

>这个是初始密码，一定要记下来，后期会用到！！！！
>
>如果此步骤报错，说明缺少微软运行所需要的一些库，自行百度添加

## **安装及启动 mysql 服务**
---

### 安装 mysql 服务执行

```java
// 服务名可不加，默认为mysql

mysqld --install [服务名]  
```
<br />

![安装 mysql 服务](/assets/mysql/yky-20200707093811.png)

<br />

**很好，成功，服务安装成功后通过命令**

```cmd
net start mysql
```

### **启动 mysql 服务**

![启动 mysql 服务](/assets/mysql/yky-2020050915013957.png)

<br />

**mysql已经安装好**

## **更改数据库默认密码**
---

**密码修改在 mysql 的 bin 目录下 进行数据库连接  `mysql -u root -p`**

<br />

![连接数据库](/assets/mysql/yky-20200707094812.png)

<br />

**显示正常，再输入指令**

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';
```


