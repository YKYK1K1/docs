(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{819:function(t,e,a){"use strict";a.r(e);var v=a(67),n=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"maven-pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven-pom"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Maven POM")])]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("POM代表项目对象模型。它是Maven中工作的基本单位，这是一个XML文件。它始终保存在该项目基本目录中的"),a("code",[t._v("pom.xml")]),t._v("文件")]),t._v(" "),a("p",[t._v("POM包含的项目是使用Maven来构建的，它用来包含各种配置信息。")]),t._v(" "),a("p",[t._v("POM也包含了目标和插件。在执行任务或者目标时，Maven会使用当前目录中的POM。它读取POM得到所需要的配置信息，然后执行目标。部分的配置可以在POM使用如下：")]),t._v(" "),a("ul",[a("li",[t._v("project dependencies")]),t._v(" "),a("li",[t._v("plugins")]),t._v(" "),a("li",[t._v("goals")]),t._v(" "),a("li",[t._v("build profiles")]),t._v(" "),a("li",[t._v("project version")]),t._v(" "),a("li",[t._v("developers")]),t._v(" "),a("li",[t._v("mailing list")])]),t._v(" "),a("p",[t._v("创建一个POM之前，应该要先决定项目组(groupId)，它的名字(artifactId)和版本，因为这些属性在项目仓库是唯一标识的。")]),t._v(" "),a("h2",{attrs:{id:"pom的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom的例子"}},[t._v("#")]),t._v(" "),a("strong",[t._v("POM的例子")])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.funtl</groupId>\n    <artifactId>my-shop-dependencies</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n</project>\n')])])]),a("p",[t._v("要注意的是，每个项目只有一个POM文件")]),t._v(" "),a("ul",[a("li",[t._v("所有的POM文件要项目元素必须有三个必填字段:groupId,artifactId,version")]),t._v(" "),a("li",[t._v("在库中的项目符号是:"),a("code",[t._v("groupId:artifactId:version")])]),t._v(" "),a("li",[a("code",[t._v("pom.xml")]),t._v("的根元素是project，它有三个主要的子节点。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("节点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("groupId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这是项目组的编号，这在组织或项目中通常是独一无二的。例如，一家银行集团"),a("code",[t._v("com.company.bank")]),t._v("拥有所有银行相关项目。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("artifactId")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这是项目ID。这通常是项目的名称。例如"),a("code",[t._v("consumer-banking")]),t._v("。除了groupId之外，artifactId还定义了artifact在存储库中的位置。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这是项目版本。与groupId一起使用，artifact在存储库中用于将版本彼此分离。例如："),a("code",[t._v("com.company.bank:consumer-banking:1.0")]),t._v(","),a("code",[t._v("com.company.bank:consumer-banking:1.1")])])])])]),t._v(" "),a("h2",{attrs:{id:"语义化版本规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语义化版本规范"}},[t._v("#")]),t._v(" "),a("strong",[t._v("语义化版本规范")])]),t._v(" "),a("hr"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("版本号")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("详细")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("第一个版本  五个功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1.0.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("小的改变大的修复")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1.1.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("增加了一个功能或减少了一个功能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2.0.0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("意味着整个项目的架构变化了")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);