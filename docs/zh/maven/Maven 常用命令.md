# **Maven 常用命令**
本章节只提供Maven使用时的一些基本命令

## **清除产生的项目**
```
mvn clean
```

## **编译源代码**
```
 mvn compile
```

## **打包**
```
mvn package
```

## **只打包不测试(跳过测试)**
> 编译打包安装到本地仓库
```
mvn install -Dmaven.test.skip=true 
```
## **源码打包**
```

mvn source:jar
或
mvn source:jar-no-fork
```

## **打包的过程**
```
清理 clean
    将所有需要的依赖都存在（让第三方依赖到本地仓库） AOP
编译
    寻找所需的全部依赖，依赖都存在才可以打包，才可执行
打包

mvn clean 将第三方依赖安装进本地仓库
```