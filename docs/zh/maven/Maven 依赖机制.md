# **Maven 依赖机制**
## **概述**
在Maven依赖机制的帮助下自动下载所有必需的依赖库，并保持版本升级，让我们看一个案例研究，以了解它是如何工作的。假设你想使用Log4j作为项目的日志，这里你要做什么?

## **传统方式**
- 访问 http://logging.apache.org/log4j/
- 下载Log4j的jar库
- 复制jar到项目类路径
- 手动将其包含到项目的依赖
- 所有的管理需要一切由自己做

如果有Log4j版本升级，则需要重复上述步骤一次。

## **Maven的方式**
- 你需要知道Log4j的Maven坐标，例如:
```
<groupId>log4j</groupId>
<artifactId>log4j</artifactId>
<version>1.2.17</varsion>
```
- 它会自动下载log4j的1.2.17版本库
- 生命Maven的坐标转换成pom.xml文件
```
<!-- https://mvnrepository.com/artifact/log4j/log4j -->
<dependencies>
    <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.17</version>
    </dependency>
<dependencies>
```
- 当Maven编译或构建，log4j的jar会自动下载，并把它放到Maven本地存储库
- 所有由Maven管理

## **解释说明**
看看有什么不同？那么到底在Maven发生了什么?当建立一个Maven的项目，pom.xml文件将被解析，如果看到log4j的Maven坐标，然后Maven按此顺序搜索log4j库:
- 在Maven的本地仓库搜索log4j
- 在Maven中央存储库搜索log4j
- 在Maven远程仓库搜索log4j(如果在pom.xml中定义)

Maven依赖库管理是一个非常好的工具，为您节省了大量的工作 