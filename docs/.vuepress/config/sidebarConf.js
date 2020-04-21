module.exports = {
    '/zh/guide/': [
        {
            title: '指南',
            collapsable: false,
            children: [
                { title: '如何学编程', path: '/zh/guide/' }
            ]
        },
        {
            title: '基础',
            collapsable: false,
            children: [
                { title: '走向单体地狱', path: '走向单体地狱' },
                { title: 'GitFlow 工作流指南', path: 'GitFlow-工作流指南' },
                { title: '微服务解决复杂问题', path: '微服务解决复杂问题' },
                { title: '再谈谈微服务', path: '再谈谈微服务' },
            ]
        },

    ],
    '/zh/idea/': [
        {
            title: 'Intllij IDEA',
            collapsable: false,
            children: [
                { title: 'IDEA 简介', path: '/zh/idea/' },
                { title: '第一个 IDEA 单体应用', path: '第一个 IDEA 单体应用' }
            ]
        },
    ],
    '/zh/maven/': [
        {
            title: 'Maven',
            collapsable: false,
            children: [
                { title: 'Maven 简介', path: '/zh/maven/' },
                { title: 'Maven 安装配置', path: 'Maven 安装配置' },
                { title: 'Maven 的本地仓库与中央仓库', path: 'Maven 的本地仓库与中央仓库' },
                { title: 'Maven 依赖机制', path: 'Maven 依赖机制' },
                { title: 'Maven POM', path: 'Maven POM' },
                { title: 'Maven 插件', path: 'Maven 插件' },
                { title: 'Maven 快照', path: 'Maven 快照' },
                { title: 'Maven 常用命令', path: 'Maven 常用命令' },
                { title: '第一个 Maven 程序', path: '第一个 Maven 程序' },
                { title: '解决 Maven 无法自动下载依赖的问题', path: '解决 Maven 无法自动下载依赖的问题' },
                { title: '知识点：Maven Pom', path: '知识点 MavenPom' },
            ]
        },
    ],
    '/zh/mvc/': [
        {
            title: '三层架构 + MVC',
            collapsable: false,
            children: [
                { title: '什么是三层架构', path: '/zh/mvc/' },
                { title: '什么是 MVC 模式', path: '什么是MVC模式' },
                { title: '小知识：高内聚低耦合', path: '小知识高内聚低耦合' }
            ]
        },
    ],
    '/zh/bootstrap/': [
        {
            title: 'Bootstrap',
            collapsable: false,
            children: [
                { title: 'Bootstrap 简介', path: '/zh/bootstrap/' },
            ]
        },
    ],
    '/zh/spring/': [
        {
            title: 'Spring',
            collapsable: false,
            children: [
                { title: 'Spring 简介', path: '/zh/spring/' },
                { title: 'Spring 体系结构', path: 'Spring-体系结构' },
                { title: 'Spring 的特点', path: 'Spring-的特点' },
                { title: 'Spring 与 loC', path: 'Spring-与-loC' },
                { title: '第一个  Spring 应用程序', path: '第一个-Spring-应用程序' },
            ]
        },
    ],
    '/zh/junit/': [
        {
            title: 'JUnit',
            collapsable: false,
            children: [
                { title: 'JUnit 简介', path: '/zh/junit/' },
                { title: '知识点：测试', path: '知识点：测试' },
                { title: '第一个 JUnit 单元测试', path: '第一个-JUnit-单元测试' },
                { title: 'JUnit 注解', path: 'JUnit-注解' },
                { title: 'JUnit 断言', path: 'JUnit-断言' },
            ]
        },
    ],
    '/zh/log4j/': [
        {
            title: 'Log4j',
            collapsable: false,
            children: [
                { title: 'Log4j 简介', path: '/zh/log4j/' },
                { title: 'Log4j 日志级别', path: 'Log4j-日志级别' },
                { title: 'Log4j 日志输出控制文件', path: 'Log4j-日志输出控制文件' },
                { title: '第一个 Log4j 日志文件', path: '第一个-Log4j-日志文件' },
            ]
        },
    ],
    '/zh/spring-web/': [
        {
            title: 'Spring Web',
            collapsable: false,
            children: [
                { title: 'Spring 整合 Web', path: '/zh/spring-web/' },
                { title: 'ApplicationContextAware', path: 'ApplicationContextAware' },
                { title: 'Bean 的装配方式', path: 'Bean-的装配方式' },
                { title: '浏览器端存储技术简介', path: '浏览器端存储技术简介' },
            ]
        },
    ],
    '/zh/spring-mvc/': [
        {
            title: 'Spring MVC',
            collapsable: false,
            children: [
                { title: 'Spring MVC 简介', path: '/zh/spring-mvc/' },
                { title: 'Spring 整合 Spring MVC', path: 'Spring-整合-Spring-MVC' },
                { title: '第一个 Controller 控制器', path: '第一个-Controller-控制器' },
                { title: 'Spring MVC 拦截器的使用', path: 'Spring-MVC-拦截器的使用' },
                { title: 'Maven 模块化开发', path: 'Maven-模块化开发' },
                { title: 'Spring MVC 表单标签库', path: 'Spring-MVC-表单标签库' },
                { title: 'SpringMVC @ModelAttribute', path: 'SpringMVC-@ModelAttribute' },
                { title: 'Spring MVC @ResponseBody', path: 'Spring MVC-@ResponseBody' },
            ]
        },
    ],
    '/zh/gitflow/': [
        {
            title: 'GitFlow 工作流指南',
            collapsable: false,
            children: [
                { title: '为什么需要版本控制', path: '/zh/git/' },
                { title: '什么是 Git', path: '什么是-Git' },
                { title: '安装 Git', path: '安装-Git' },
                { title: 'Git 工作流程简介', path: 'Git-工作流简介' },
                { title: '集中式工作流', path: '集中式工作流' },
                { title: '功能分支工作流', path: '功能分支工作流' },
                { title: 'GitFlow 工作流', path: 'GitFlow-工作流' },
                { title: 'Forking 工作流', path: 'Forking-工作流' },
                { title: 'Pull Requests', path: 'Pull-Requests' },
            ]
        },
    ],
    '/zh/micro-service-about/': [
        {
            title: '再谈谈微服务',
            collapsable: false,
            children: [
                { title: '微服务架构的概念', path: '/zh/micro-service-about/' },
                { title: '传统架构与微服务架构的区别', path: '传统架构与微服务架构的区别' },
                { title: '微服务的特征', path: '微服务的特征' },
                { title: 'SOA 架构与微服务架构的区别.md', path: 'SOA-架构与微服务架构的区别' },
                { title: '微服务的实践', path: '微服务的实践' },
            ]
        },
    ],
    '/zh/gengxin/': [
        {
            title: 'Spring MVC 简介',
            collapsable: false,
            children: [
                { title: '更新中', path: '/zh/gengxin/' }
            ]
        },
    ]

}