# **GitLab 创建第一个项目**

### **设置**

<br />

![](/docs/assets/gitlab/yky-20200625140927.png)

<br />

### **点击 `+` 号 --> `新建项目`**

<br />

![](/docs/assets/gitlab/yky-clipboard.png)

<br />

### **输入项目名称及描述信息，设置可见等级为私有，这样别人就看不见你的项目**

<br />

![](/docs/assets/gitlab/yky-er1511800627.png)

<br />

## **初始化项目**
---

### **我们选择通过增加一个 `README` 的方式来初始化项目**

<br />

![](/docs/assets/gitlab/yky-er1511800836.png)

<br />

### **直接提交修改即可**

<br />

![](/docs/assets/gitlab/yky-er1511800904.png)

<br />


## **使用 SSH 的方式拉取和推送项目**
---

### **生成 SSH KEY**

使用 `ssh-keygen` 工具生成，位置在 Git 安装目录下，我的是 `C:\Program Files\Git\usr\bin`
输入命令：

```sh
ssh-keygen -t rsa -C "your_email@example.com"
```
执行成功后的效果：

```bat
Microsoft Windows [版本 10.0.18362.900]
(c) 2019 Microsoft Corporation。保留所有权利。

C:\Program Files\Git\usr\bin>ssh-keygen -t rsa -C "yky19970707@163.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/yky19/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/yky19/.ssh/id_rsa
Your public key has been saved in /c/Users/yky19/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:+F1/bQBmWyBGQKx954C994ItM8vcNxXz8dyiIKj1tKA yky19970707@163.com
The key's randomart image is:
+---[RSA 3072]----+
|       ooo+ .    |
|        .. . .   |
|       o o  + .  |
|      ..o +o.+ + |
|      ..S. =o ..B|
|      +.o.o.o...B|
|     + +.o.= o.o+|
|    E   oo=.+ +o |
|          +=.o . |
+----[SHA256]-----+

C:\Program Files\Git\usr\bin>
```

### **复制 `SSH-KEY` 信息到 `GitLab`**

秘钥位置在：`C:\Users\你的用户名\.ssh` 目录下，找到 `id_rsa.pub` 并使用编辑器打开，如：

<br />

![](/docs/assets/gitlab/yky-20200625160729.png)

<br />

**登录 GitLab，点击 "用户头像" --> "设置" --> "SSH 密钥"**

<br />

![](/docs/assets/gitlab/yky-clipboard-2.png)

<br />

**成功增加密钥后的效果**

<br />

![](/docs/assets/gitlab/yky-clipboard-3.png)

<br />


## **推送项目（提交代码）过滤配置文件**
---

- 创建或修改文件（这里的文件为所有文件，包括：代码、图片等）
- 我们以创建 `.gitignore` 过滤配置文件为例，该文件的主要作用为过滤不需要上传的文件，比如：IDE 生成的工程文件、编译后的 class 文件等
- 在工程目录下，新建 `.gitignore` 文件，并填入如下配置：

```
.gradle
*.sw?
.#*
*#
*~
/build
/code
.classpath
.project
.settings
.metadata
.factorypath
.recommenders
bin
build
target
.factorypath
.springBeans
interpolated*.xml
dependency-reduced-pom.xml
build.log
_site/
.*.md.html
manifest.yml
MANIFEST.MF
settings.xml
activemq-data
overridedb.*
*.iml
*.ipr
*.iws
.idea
.DS_Store
.factorypath
dump.rdb
transaction-logs
**/overlays/
**/logs/
**/temp/
**/classes/
```

