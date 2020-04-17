# **知识点：Maven pom**
## **maven 生命周期**
- clean: 删除构建目录
- validate: 检查工程配置是否正确，完成构建过程的所有必要信息是否能够获取到。
- compile: 编译工程源码
- test: 使用适当的单元测试框架（例如JUnit）运行测试。
- package: 获取编译后的代码，并按照可发布的格式进行打包，例如 JAR、WAR 或者 EAR 文件
- verify: 运行检查操作来验证工程包是有效的，并满足质量要求。
- install: 安装工程包到本地仓库中，该仓库可以作为本地其他工程的依赖。
- site: 创建新的报告文档、部署站点等
- deploy: 拷贝最终的工程包到远程仓库中，以共享给其他开发人员和工程。

## **pom.xml 常用节点**
基本信息
```
<modelVersion>4.0.0</modelVersion>
<groupId>com.xstore.order.production</groupId>
<artifactId>xstore-order-production</artifactId>
<name>xstore-order-production</name>
<packaging>pom</packaging>
<version>1.0-SNAPSHOT</version>
```
`groupId`, `artifactId`, `name`, `version` 构成应用的坐标

`packaging` 默认为 jar

### **packaging**

- pom 声明该artifact仅仅是pom文件，是子模块的容器
- jar
- ejb
- maven-plugin
- war
- ear
- rar

### **version**
- SNAPSHOT：快照版本
- ALPHA：内测版本
- BETA：公测版本
- RELEASE：稳定版本
- GA：正式发布


资源插件将文件从输入资源目录复制到输出目录。
- resources: 将main源码下的资源文件复制到main输出目录中
- testResources:  将test源码下的资源文件复制到test输出目录中
- copy-resources: 讲任意资源文件复制到输出目录中，需要指定来源和输出目录
```
<plugin>
    <artifactId>maven-resources-plugin</artifactId>
    <version>3.0.2</version>
    <configuration>
        <outputDirectory>output-resources</outputDirectory>
        <resources>
            <resource>
                <directory>input-resources</directory>
                <excludes>
                    <exclude>*.png</exclude>
                </excludes>
                <filtering>true</filtering>
            </resource>
        </resources>
    </configuration>
</plugin>
```
上面的配置，将input-resources中的资源文件复制到output-resuorces中，并且排除了以png为后缀的文件。

其中filtering设置为true，则会用properties中声明的变量替换资源文件中的占位符变量：
```
<properties>
    <resources.name>Baeldung</resources.name>
</properties>
```
将替代资源文件中包含如下文本的地方：
```
Welcome to ${resources.name}!
```
## **The Compiler Plugin**
用以构建源码

- compile 编译main下的源码
- testCompile 编译test下的源码
```
<plugin>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.7.0</version>
    <configuration>
        <source>1.8</source>
        <target>1.8</target>
    </configuration>
</plugin>
```
方便起见，可以将版本号声明为一个属性：
```
<properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
</properties>
```
可以做一些额外的设置，如警告unchecked操作：
```
<configuration>
    <compilerArgs>
        <arg>-Xlint:unchecked</arg>
    </compilerArgs>
</configuration>
```
The Surefire Plugin
用于执行单元测试，默认情况下将在`target/surefire-reports`中生成xml报告

默认情况下，surefire将自动包含所有以Test开始或以`Test`,`Tests`,`TestCase`结束的测试类

包含在顶级POM中

- test 默认选项的goal
```
<plugin>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.21.0</version>
    <configuration>
        <excludes>
            <exclude>DataTest.java</exclude>
        </excludes>
        <includes>
            <include>DataCheck.java</include>
        </includes>
    </configuration>
</plugin>
```
## **The Failsafe Plugin**
> 用于项目的集成测试

与surefire插件不同的是，它必须在pom.xml中明确指定goal的值

- integeration-test: 运行集成测试，测试失败不会令构建失败
- verify: 确认集成测试通过
```
<plugin>
    <artifactId>maven-failsafe-plugin</artifactId>
    <version>2.21.0</version>
    <executions>
        <execution>
            <goals>
                <goal>integration-test</goal>
                <goal>verify</goal>
            </goals>
            <configuration>
                ...
            </configuration>
        </execution>
    </executions>
</plugin>
```
默认包含如下测试文件：
```
<includes>
    <include>**/IT*.java</include>
    <include>**/*IT.java</include>
    <include>**/*ITCase.java</include>
</includes>
```
IT -> Integration Test

## **The Verifier Plugin**
确保文件和目录的存在或不存在，也可以根据正则表达式检查文件的内容

- verify 显式指定时才会触发该插件
```
<plugin>
    <artifactId>maven-verifier-plugin</artifactId>
    <version>1.1</version>
    <configuration>
        <verificationFile>input-resources/verifications.xml</verificationFile>
    </configuration>
    <executions>
        <execution>
            <goals>
                <goal>verify</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```
默认的检查文件位于`src/test/verifier/verifications.xml`，如果想要使用别的文件，需要指定`verificationFile`参数

下面的校验要求input-resources/baeldung.txt存在单词Welcome
```
<verifications
  xmlns="http://maven.apache.org/verifications/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/verifications/1.0.0 
  http://maven.apache.org/xsd/verifications-1.0.0.xsd">
    <files>
        <file>
            <location>input-resources/baeldung.txt</location>
            <contains>Welcome</contains>
        </file>
    </files>
</verifications>
```
## **The Install Plugin**
将应用打包至本地仓库中。这个插件包含在顶级POM中，因此不需要显式的包含它

## **The Deploy Plugin**
将包部署到远程Maven仓库中。

## **distributionManagement**
用以定义要部署的仓库的信息

## **modules**
> aven Pom Modules
```
<modules>
  <module>my-project</module>
  <module>another-project</module>
  <module>third-project/pom-example.xml</module>
</modules>
```
无需考虑项目之间的依赖关系，maven会确保依赖的模块优先被构建

## **Maven 项目管理**

使用maven进行模块管理，每个模块下面都有一个pom文件，pom中维护各模块之间的依赖和继承关系。

项目模块化可以将通用的部分抽离出来，方便重用。修改一部分代码不再需要build整个项目，缩短了build时间。

## **Maven 依赖管理**
http://ifeve.com/maven-dependency-mechanism/

## **传递性依赖**
假设你的项目依赖于一个库，而这个库又依赖于其他库。你不必自己去找出所有这些依赖，你只需要加上你直接依赖的库，Maven会隐式的把这些库间接依赖的库也加入到你的项目中。当项目中出现多个版本构件依赖的情形，依赖调解决定最终应该使用哪个版本。项目会选择依赖关系树中路径最短的版本作为依赖。当两个版本的依赖路径长度一致时，POM中依赖声明的顺序决定了哪个版本会被使用，也叫作”第一声明原则”。

## **依赖范围**
- compile 默认范围
- provided provided范围表明你希望由JDK或者某个容器提供运行时依赖。如Servlet API和相关的Java EE APIs，会由web容器提供运行时依赖。provided依赖只对编译和测试classpath有效，并且不能传递。
- runtime 编译时不需要依赖，而只在运行时依赖。此依赖范围对运行和测试classpath有效，对编译classpath无效。
- test 只在编译测试代码和运行测试的时候需要，应用的正常运行不需要此类依赖。
- system 系统范围与provided类似，不过你必须显式指定一个本地系统路径的JAR，此类依赖应该一直有效，Maven也不会去仓库中寻找它。
- import import范围只适用于pom文件中的<dependencyManagement>部分。表明指定的POM必须使用<dependencyManagement>部分的依赖。因为依赖已经被替换，所以使用import范围的依赖并不影响依赖传递。

## **依赖管理**
Maven提供了一个机制来集中管理依赖信息，叫做依赖管理元素<dependencyManagement>。假设你有许多项目继承自同一个公有的父项目，那可以把所有依赖信息放在一个公共的POM文件，并且在子POM中简单第引用该构件即可。