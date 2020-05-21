# **Maven 本地仓库**
## **概述**
---
`Maven` 的本地资源库是用来存储所有项目的依赖关系(插件`Jar`和其他文件，这些文件被`Maven`下载)到本地文件夹。很简单，当你建立一个`Maven`项目，所有相关文件将被存储在你的`Maven`本地仓库。

默认情况下，Maven的本地资源库默认为`.m2`目录文件夹：

- Unix/MacOS X：`~/.m2`
- Windows：`C:\Documents and Settings\{your-username}\.m2`

## **配置 Maven 的本地库**
---

通常情况下，可改变默认的`.m2`目录下的默认本地存储库文件夹到其他更有意义的名称，例如，maven-repo找到`{M2_HOME}\conf\setting.xml`,更新`localRepository`到其它名称。

```
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   |
   | Default: ${user.home}/.m2/repository
  <localRepository>/path/to/local/repo</localRepository>
  -->
  
<localRepository>D:\apache-maven-3.6.1\repo</localRepository>
  
  <!-- interactiveMode
   | This will determine whether maven prompts you when it needs input. If set to false,
   | maven will use a sensible default value, perhaps based on some other setting, for
   | the parameter in question.
   |
   | Default: true
  <interactiveMode>true</interactiveMode>
  -->
  ```

  执行之后，新的Maven本地存储库现在改为`D:/apache-maven-3.5.2/repo`
  

  ![本地存储库位置](/assets/maven/yky_1573115273.png)
  
## **Maven 中央仓库**
---

当你建立一个Maven的项目，Maven会检查你的`pom.xml`,以确定哪些依赖下载。首先，Maven将从本地资源库获得Maven的本地资源库依赖资源，如果没有找到，然后把它会从默认的Maven中央存储库  http://repo1.maven.org/maven2/ 查找下载。

![中央仓库地址](/assets/maven/yky_1511452924.png)

<br />

使用 MVNrepository 搜索：https://mvnrepository.com/

<br />

![maven依赖](/assets/maven/yky_20200520111258.png)