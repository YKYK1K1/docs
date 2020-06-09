(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{852:function(e,n,t){"use strict";t.r(n);var a=t(67),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"bean-的装配方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bean-的装配方式"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Bean 的装配方式")])]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" "),t("strong",[e._v("概述")])]),e._v(" "),t("p",[e._v("截止目前为止，咱们 Bean 的装配方式是通过代码 getBean() 的方式从容器获取指定的 Bean 实例，容器首先会调用 Bean 类的无参构造器，创建空值的实例对象。除了使用 getBean() 的装配方式外，还可以使用注解的装配方式。")]),e._v(" "),t("h2",{attrs:{id:"容器中-bean-的作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器中-bean-的作用域"}},[e._v("#")]),e._v(" "),t("strong",[e._v("容器中 Bean 的作用域")])]),e._v(" "),t("p",[e._v("在学习 Bean 的装配方式之前，我们先了解一下 Bean 的作用域。当通过 Spring 容器创建一个 Bean 实例时，不仅可以完成 Bean 的实例化，还可以通过 scope 属性，为 Bean 指定特定的作用域。Spring 支持 5 种作用域。")]),e._v(" "),t("ul",[t("li",[e._v("singleton：单态模式。即在整个 Spring 容器中，使用 singleton 定义的 Bean 将是单例的，只有一个实例。默认为单态的。")]),e._v(" "),t("li",[e._v("prototype：原型模式。即每次使用 getBean 方法获取的同一个 "),t("bean"),e._v(" 的实例都是一个新的实例。")],1),e._v(" "),t("li",[e._v("request：对于每次 HTTP 请求，都将会产生一个不同的 Bean 实例。")]),e._v(" "),t("li",[e._v("session：对于每个不同的 HTTP session，都将产生一个不同的 Bean 实例。")]),e._v(" "),t("li",[e._v("global session：每个全局的 HTTP session 对应一个 Bean 实例。典型情况下，仅在使用 portlet 集群时有效，多个 Web 应用共享一个 session。一般应用中，global-session 与 session 是等同的。")])]),e._v(" "),t("p",[e._v("注意事项：")]),e._v(" "),t("ul",[t("li",[e._v("对于 scope 的值 request、session 与 global session，只有在 Web 应用中使用 Spring 时，该作用域才有效。")]),e._v(" "),t("li",[e._v("对于 scope 为 singleton 的单例模式，该 Bean 是在容器被创建时即被装配好了。")]),e._v(" "),t("li",[e._v("对于 scope 为 prototype 的原型模式，Bean 实例是在代码中使用该 Bean 实例时才进行装配的。")])]),e._v(" "),t("h2",{attrs:{id:"基于注解的装配方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于注解的装配方式"}},[e._v("#")]),e._v(" "),t("strong",[e._v("基于注解的装配方式")])]),e._v(" "),t("p",[e._v("对于 DI 使用注解，将不再需要在 Spring 配置文件中声明 Bean 实例。Spring 中使用注解， 需要在原有 Spring 运行环境基础上再做一些改变")]),e._v(" "),t("p",[e._v("需要在 Spring 配置文件中配置组件扫描器，用于在指定的基本包中扫描注解。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.0" encoding="UTF-8" ?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans  http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">\n\n <context:annotation-config />\n    <context:component-scan base-package="com.yky.my.shop"></context:component-scan>\n</beans>\n')])])]),t("p",[t("strong",[e._v("@Component")]),e._v("\n需要在类上使用注解"),t("code",[e._v("@Component")]),e._v("，该注解的value属性用于指定该bean的id值。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Component(value = "student")\npublic class Student {\n    private Long id;\n    private String name;\n\n    public Long getId() {\n        return id;\n    }\n\n    public void setId(Long id) {\n        this.id = id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public String toString() {\n        return "Student{" +\n                "id=" + id +\n                ", name=\'" + name + \'\\\'\' +\n                \'}\';\n    }\n}\n')])])]),t("p",[e._v("Spring 还提供了3个功能基本和"),t("code",[e._v("Component")]),e._v("等效的注解：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("@Repository")]),e._v(":用于对DAO实现类进行注解")]),e._v(" "),t("li",[t("code",[e._v("@Service")]),e._v("：用于对Service实现类进行注解")]),e._v(" "),t("li",[t("code",[e._v("@Controller")]),e._v("：用于对Controller实现类进行注解")])]),e._v(" "),t("p",[t("strong",[e._v("@Scope")]),e._v("\n需要在类上使用注解"),t("code",[e._v("@Scope")]),e._v("，其value属性用于指定作用域。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Scope("prototype")\n@Component(value="student")\npublic class Student{\n    privcate Long id;\n    private String name;\n}\n')])])]),t("p",[t("strong",[e._v("@Value")]),e._v("\n需要在属性上使用注解"),t("code",[e._v("@value")]),e._v("，该注解的value属性用于指定要注入的值")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Scope("prototype")\n@Component(value="student")\npublic class Student{\n    @Value("1")\n    privcate Long id;\n    @Value("张三")\n    private String name;\n}\n')])])]),t("p",[e._v("使用该注解完成属性注入时，类中无需setter。当然，若属性有setter，则也可将其加到setter上。\n"),t("strong",[e._v("@Autowired")]),e._v("\n需要在域属性上使用注解"),t("code",[e._v("@Autowired")]),e._v(",该注解默认使用"),t("strong",[e._v("按类型自动装配Bean")]),e._v("的方式。")]),e._v(" "),t("p",[e._v("使用该注解完成属性注入时，类中无需setter。当然，若属性有setter，则也可将其加到setter上。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Component\npublic class School{\n    @Value("2")\n    private Long id;\n    @Value("麻省理工")\n    private String name；\n    \n}\n@Scope("prototype")\n@Component(value="student")\npublic class Student{\n    @Value("1")\n    privcate Long id;\n    @Value("张三")\n    private String name;\n    @Autowired\n    private School school;\n}\n')])])]),t("p",[t("strong",[e._v("@Resource")]),e._v("\n需要域属性上使用注解"),t("code",[e._v("@Resource")]),e._v("，该注解有一个name属性，可以创建指定的bean")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@Resource(name="userService")\nprivate UserService userService;\n')])])]),t("p",[t("strong",[e._v("@PostConstruct")]),e._v("\n在方法上使用"),t("code",[e._v("@PostConstruct")]),e._v("相当于初始化")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@PostConstruct\npublic void setUp(){\n    System.out.println("执行 setUp() 方法")\n}\n')])])]),t("h2",{attrs:{id:"注解与xml配置的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解与xml配置的区别"}},[e._v("#")]),e._v(" "),t("strong",[e._v("注解与XML配置的区别")])]),e._v(" "),t("p",[e._v("注解的好处是，配置方便，直观。但其弊端也显而易见：以硬编码的方式写入到了Java代码中,其修改是需要重新编译代码的。")]),e._v(" "),t("p",[e._v("XML配置方式的最大好处就是，对其所做修改，无需编译代码，只需重启服务器即可将新的配置加载。")]),e._v(" "),t("p",[e._v("若注解与XML同用，XML的优先级要高于注解。这样做的好处是，需要对某个Bean做修改，只需要修改配置文件即可。")])])}),[],!1,null,null,null);n.default=s.exports}}]);