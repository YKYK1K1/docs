(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{826:function(e,a,t){"use strict";t.r(a);var n=t(67),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"知识点：maven-pom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识点：maven-pom"}},[e._v("#")]),e._v(" "),t("strong",[e._v("知识点：Maven pom")])]),e._v(" "),t("h2",{attrs:{id:"maven-生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven-生命周期"}},[e._v("#")]),e._v(" "),t("strong",[e._v("maven 生命周期")])]),e._v(" "),t("ul",[t("li",[e._v("clean: 删除构建目录")]),e._v(" "),t("li",[e._v("validate: 检查工程配置是否正确，完成构建过程的所有必要信息是否能够获取到。")]),e._v(" "),t("li",[e._v("compile: 编译工程源码")]),e._v(" "),t("li",[e._v("test: 使用适当的单元测试框架（例如JUnit）运行测试。")]),e._v(" "),t("li",[e._v("package: 获取编译后的代码，并按照可发布的格式进行打包，例如 JAR、WAR 或者 EAR 文件")]),e._v(" "),t("li",[e._v("verify: 运行检查操作来验证工程包是有效的，并满足质量要求。")]),e._v(" "),t("li",[e._v("install: 安装工程包到本地仓库中，该仓库可以作为本地其他工程的依赖。")]),e._v(" "),t("li",[e._v("site: 创建新的报告文档、部署站点等")]),e._v(" "),t("li",[e._v("deploy: 拷贝最终的工程包到远程仓库中，以共享给其他开发人员和工程。")])]),e._v(" "),t("h2",{attrs:{id:"pom-xml-常用节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pom-xml-常用节点"}},[e._v("#")]),e._v(" "),t("strong",[e._v("pom.xml 常用节点")])]),e._v(" "),t("p",[e._v("基本信息")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<modelVersion>4.0.0</modelVersion>\n<groupId>com.xstore.order.production</groupId>\n<artifactId>xstore-order-production</artifactId>\n<name>xstore-order-production</name>\n<packaging>pom</packaging>\n<version>1.0-SNAPSHOT</version>\n")])])]),t("p",[t("code",[e._v("groupId")]),e._v(", "),t("code",[e._v("artifactId")]),e._v(", "),t("code",[e._v("name")]),e._v(", "),t("code",[e._v("version")]),e._v(" 构成应用的坐标")]),e._v(" "),t("p",[t("code",[e._v("packaging")]),e._v(" 默认为 jar")]),e._v(" "),t("h3",{attrs:{id:"packaging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#packaging"}},[e._v("#")]),e._v(" "),t("strong",[e._v("packaging")])]),e._v(" "),t("ul",[t("li",[e._v("pom 声明该artifact仅仅是pom文件，是子模块的容器")]),e._v(" "),t("li",[e._v("jar")]),e._v(" "),t("li",[e._v("ejb")]),e._v(" "),t("li",[e._v("maven-plugin")]),e._v(" "),t("li",[e._v("war")]),e._v(" "),t("li",[e._v("ear")]),e._v(" "),t("li",[e._v("rar")])]),e._v(" "),t("h3",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" "),t("strong",[e._v("version")])]),e._v(" "),t("ul",[t("li",[e._v("SNAPSHOT：快照版本")]),e._v(" "),t("li",[e._v("ALPHA：内测版本")]),e._v(" "),t("li",[e._v("BETA：公测版本")]),e._v(" "),t("li",[e._v("RELEASE：稳定版本")]),e._v(" "),t("li",[e._v("GA：正式发布")])]),e._v(" "),t("p",[e._v("资源插件将文件从输入资源目录复制到输出目录。")]),e._v(" "),t("ul",[t("li",[e._v("resources: 将main源码下的资源文件复制到main输出目录中")]),e._v(" "),t("li",[e._v("testResources:  将test源码下的资源文件复制到test输出目录中")]),e._v(" "),t("li",[e._v("copy-resources: 讲任意资源文件复制到输出目录中，需要指定来源和输出目录")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<plugin>\n    <artifactId>maven-resources-plugin</artifactId>\n    <version>3.0.2</version>\n    <configuration>\n        <outputDirectory>output-resources</outputDirectory>\n        <resources>\n            <resource>\n                <directory>input-resources</directory>\n                <excludes>\n                    <exclude>*.png</exclude>\n                </excludes>\n                <filtering>true</filtering>\n            </resource>\n        </resources>\n    </configuration>\n</plugin>\n")])])]),t("p",[e._v("上面的配置，将input-resources中的资源文件复制到output-resuorces中，并且排除了以png为后缀的文件。")]),e._v(" "),t("p",[e._v("其中filtering设置为true，则会用properties中声明的变量替换资源文件中的占位符变量：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<properties>\n    <resources.name>Baeldung</resources.name>\n</properties>\n")])])]),t("p",[e._v("将替代资源文件中包含如下文本的地方：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Welcome to ${resources.name}!\n")])])]),t("h2",{attrs:{id:"the-compiler-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-compiler-plugin"}},[e._v("#")]),e._v(" "),t("strong",[e._v("The Compiler Plugin")])]),e._v(" "),t("p",[e._v("用以构建源码")]),e._v(" "),t("ul",[t("li",[e._v("compile 编译main下的源码")]),e._v(" "),t("li",[e._v("testCompile 编译test下的源码")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<plugin>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.7.0</version>\n    <configuration>\n        <source>1.8</source>\n        <target>1.8</target>\n    </configuration>\n</plugin>\n")])])]),t("p",[e._v("方便起见，可以将版本号声明为一个属性：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<properties>\n    <maven.compiler.source>1.8</maven.compiler.source>\n    <maven.compiler.target>1.8</maven.compiler.target>\n</properties>\n")])])]),t("p",[e._v("可以做一些额外的设置，如警告unchecked操作：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<configuration>\n    <compilerArgs>\n        <arg>-Xlint:unchecked</arg>\n    </compilerArgs>\n</configuration>\n")])])]),t("p",[e._v("The Surefire Plugin\n用于执行单元测试，默认情况下将在"),t("code",[e._v("target/surefire-reports")]),e._v("中生成xml报告")]),e._v(" "),t("p",[e._v("默认情况下，surefire将自动包含所有以Test开始或以"),t("code",[e._v("Test")]),e._v(","),t("code",[e._v("Tests")]),e._v(","),t("code",[e._v("TestCase")]),e._v("结束的测试类")]),e._v(" "),t("p",[e._v("包含在顶级POM中")]),e._v(" "),t("ul",[t("li",[e._v("test 默认选项的goal")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<plugin>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <version>2.21.0</version>\n    <configuration>\n        <excludes>\n            <exclude>DataTest.java</exclude>\n        </excludes>\n        <includes>\n            <include>DataCheck.java</include>\n        </includes>\n    </configuration>\n</plugin>\n")])])]),t("h2",{attrs:{id:"the-failsafe-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-failsafe-plugin"}},[e._v("#")]),e._v(" "),t("strong",[e._v("The Failsafe Plugin")])]),e._v(" "),t("blockquote",[t("p",[e._v("用于项目的集成测试")])]),e._v(" "),t("p",[e._v("与surefire插件不同的是，它必须在pom.xml中明确指定goal的值")]),e._v(" "),t("ul",[t("li",[e._v("integeration-test: 运行集成测试，测试失败不会令构建失败")]),e._v(" "),t("li",[e._v("verify: 确认集成测试通过")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<plugin>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <version>2.21.0</version>\n    <executions>\n        <execution>\n            <goals>\n                <goal>integration-test</goal>\n                <goal>verify</goal>\n            </goals>\n            <configuration>\n                ...\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")])])]),t("p",[e._v("默认包含如下测试文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<includes>\n    <include>**/IT*.java</include>\n    <include>**/*IT.java</include>\n    <include>**/*ITCase.java</include>\n</includes>\n")])])]),t("p",[e._v("IT -> Integration Test")]),e._v(" "),t("h2",{attrs:{id:"the-verifier-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-verifier-plugin"}},[e._v("#")]),e._v(" "),t("strong",[e._v("The Verifier Plugin")])]),e._v(" "),t("p",[e._v("确保文件和目录的存在或不存在，也可以根据正则表达式检查文件的内容")]),e._v(" "),t("ul",[t("li",[e._v("verify 显式指定时才会触发该插件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<plugin>\n    <artifactId>maven-verifier-plugin</artifactId>\n    <version>1.1</version>\n    <configuration>\n        <verificationFile>input-resources/verifications.xml</verificationFile>\n    </configuration>\n    <executions>\n        <execution>\n            <goals>\n                <goal>verify</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")])])]),t("p",[e._v("默认的检查文件位于"),t("code",[e._v("src/test/verifier/verifications.xml")]),e._v("，如果想要使用别的文件，需要指定"),t("code",[e._v("verificationFile")]),e._v("参数")]),e._v(" "),t("p",[e._v("下面的校验要求input-resources/baeldung.txt存在单词Welcome")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<verifications\n  xmlns="http://maven.apache.org/verifications/1.0.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/verifications/1.0.0 \n  http://maven.apache.org/xsd/verifications-1.0.0.xsd">\n    <files>\n        <file>\n            <location>input-resources/baeldung.txt</location>\n            <contains>Welcome</contains>\n        </file>\n    </files>\n</verifications>\n')])])]),t("h2",{attrs:{id:"the-install-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-install-plugin"}},[e._v("#")]),e._v(" "),t("strong",[e._v("The Install Plugin")])]),e._v(" "),t("p",[e._v("将应用打包至本地仓库中。这个插件包含在顶级POM中，因此不需要显式的包含它")]),e._v(" "),t("h2",{attrs:{id:"the-deploy-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-deploy-plugin"}},[e._v("#")]),e._v(" "),t("strong",[e._v("The Deploy Plugin")])]),e._v(" "),t("p",[e._v("将包部署到远程Maven仓库中。")]),e._v(" "),t("h2",{attrs:{id:"distributionmanagement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distributionmanagement"}},[e._v("#")]),e._v(" "),t("strong",[e._v("distributionManagement")])]),e._v(" "),t("p",[e._v("用以定义要部署的仓库的信息")]),e._v(" "),t("h2",{attrs:{id:"modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" "),t("strong",[e._v("modules")])]),e._v(" "),t("blockquote",[t("p",[e._v("aven Pom Modules")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<modules>\n  <module>my-project</module>\n  <module>another-project</module>\n  <module>third-project/pom-example.xml</module>\n</modules>\n")])])]),t("p",[e._v("无需考虑项目之间的依赖关系，maven会确保依赖的模块优先被构建")]),e._v(" "),t("h2",{attrs:{id:"maven-项目管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven-项目管理"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Maven 项目管理")])]),e._v(" "),t("p",[e._v("使用maven进行模块管理，每个模块下面都有一个pom文件，pom中维护各模块之间的依赖和继承关系。")]),e._v(" "),t("p",[e._v("项目模块化可以将通用的部分抽离出来，方便重用。修改一部分代码不再需要build整个项目，缩短了build时间。")]),e._v(" "),t("h2",{attrs:{id:"maven-依赖管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven-依赖管理"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Maven 依赖管理")])]),e._v(" "),t("p",[e._v("http://ifeve.com/maven-dependency-mechanism/")]),e._v(" "),t("h2",{attrs:{id:"传递性依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传递性依赖"}},[e._v("#")]),e._v(" "),t("strong",[e._v("传递性依赖")])]),e._v(" "),t("p",[e._v("假设你的项目依赖于一个库，而这个库又依赖于其他库。你不必自己去找出所有这些依赖，你只需要加上你直接依赖的库，Maven会隐式的把这些库间接依赖的库也加入到你的项目中。当项目中出现多个版本构件依赖的情形，依赖调解决定最终应该使用哪个版本。项目会选择依赖关系树中路径最短的版本作为依赖。当两个版本的依赖路径长度一致时，POM中依赖声明的顺序决定了哪个版本会被使用，也叫作”第一声明原则”。")]),e._v(" "),t("h2",{attrs:{id:"依赖范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖范围"}},[e._v("#")]),e._v(" "),t("strong",[e._v("依赖范围")])]),e._v(" "),t("ul",[t("li",[e._v("compile 默认范围")]),e._v(" "),t("li",[e._v("provided provided范围表明你希望由JDK或者某个容器提供运行时依赖。如Servlet API和相关的Java EE APIs，会由web容器提供运行时依赖。provided依赖只对编译和测试classpath有效，并且不能传递。")]),e._v(" "),t("li",[e._v("runtime 编译时不需要依赖，而只在运行时依赖。此依赖范围对运行和测试classpath有效，对编译classpath无效。")]),e._v(" "),t("li",[e._v("test 只在编译测试代码和运行测试的时候需要，应用的正常运行不需要此类依赖。")]),e._v(" "),t("li",[e._v("system 系统范围与provided类似，不过你必须显式指定一个本地系统路径的JAR，此类依赖应该一直有效，Maven也不会去仓库中寻找它。")]),e._v(" "),t("li",[e._v("import import范围只适用于pom文件中的"),t("code",[e._v("<dependencyManagement>")]),e._v("部分。表明指定的POM必须使用"),t("code",[e._v("<dependencyManagement>")]),e._v("部分的依赖。因为依赖已经被替换，所以使用import范围的依赖并不影响依赖传递。")])]),e._v(" "),t("h2",{attrs:{id:"依赖管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖管理"}},[e._v("#")]),e._v(" "),t("strong",[e._v("依赖管理")])]),e._v(" "),t("p",[e._v("Maven提供了一个机制来集中管理依赖信息，叫做依赖管理元素"),t("code",[e._v("<dependencyManagement>")]),e._v("。假设你有许多项目继承自同一个公有的父项目，那可以把所有依赖信息放在一个公共的POM文件，并且在子POM中简单第引用该构件即可。")])])}),[],!1,null,null,null);a.default=r.exports}}]);