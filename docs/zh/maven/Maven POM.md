# **Maven POM**
## **概述**
POM代表项目对象模型。它是Maven中工作的基本单位，这是一个XML文件。它始终保存在该项目基本目录中的`pom.xml`文件

POM包含的项目是使用Maven来构建的，它用来包含各种配置信息。

POM也包含了目标和插件。在执行任务或者目标时，Maven会使用当前目录中的POM。它读取POM得到所需要的配置信息，然后执行目标。部分的配置可以在POM使用如下：

- project dependencies
- plugins
- goals
- build profiles
- project version
- developers
- mailing list

创建一个POM之前，应该要先决定项目组(groupId)，它的名字(artifactId)和版本，因为这些属性在项目仓库是唯一标识的。

## **POM的例子**

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.funtl</groupId>
    <artifactId>my-shop-dependencies</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</project>
```

要注意的是，每个项目只有一个POM文件
- 所有的POM文件要项目元素必须有三个必填字段:groupId,artifactId,version
- 在库中的项目符号是:`groupId:artifactId:version`
- `pom.xml`的根元素是project，它有三个主要的子节点。


节点 | 描述 
:-:| :-:
groupId | 这是项目组的编号，这在组织或项目中通常是独一无二的。例如，一家银行集团`com.company.bank`拥有所有银行相关项目。
artifactId  | 这是项目ID。这通常是项目的名称。例如`consumer-banking`。除了groupId之外，artifactId还定义了artifact在存储库中的位置。
version | 这是项目版本。与groupId一起使用，artifact在存储库中用于将版本彼此分离。例如：`com.company.bank:consumer-banking:1.0`,`com.company.bank:consumer-banking:1.1`

## **语义化版本规范**
版本号 | 详细
:-: | :-
1.0.0 | 第一个版本  五个功能
1.0.1 | 小的改变大的修复
1.1.0 | 增加了一个功能或减少了一个功能
2.0.0 | 意味着整个项目的架构变化了
