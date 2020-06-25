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
                { title: 'Spring Cloud iToken', path: 'Spring-Cloud-iToken' },
                { title: 'Nginx', path: 'Nginx' },
                { title: 'ZooKeeper 源码分析与实战', path: 'Zookeeper-源码分析与实战' },
            ]
        },
        {
            title: '管理',
            collapsable: false,
            children: [
                {title:'平台',path:'平台管理'},
              
                { title: 'Nexus - 依赖管理平台', path: '/zh/nexus/' },
                { title: 'GitFlow 工作流指南', path: 'GitFlow-工作流指南' },
            ]
        },
        {
            title: '专题',
            collapsable: false,
            children: [
                { title: 'REST 与 RPC', path: 'REST-RPC' },
                { title: 'Apache Shiro', path: 'Apache-Shiro' },
                { title: 'Spring Security oAuth2', path: 'Spring-Security-oAuth2' },
            ]
        }
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
                { title: '第一个 Spring 应用程序', path: '第一个-Spring-应用程序' },
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
                { title: '为什么需要版本控制', path: '/zh/gitflow/' },
                { title: '什么是 Git', path: '什么是-Git' },
                { title: '安装 Git', path: '安装-Git' },
                { title: 'Git 工作流程简介', path: 'Git-工作流简介' },
                { title: '集中式工作流', path: '集中式工作流' },
                { title: '功能分支工作流', path: '功能分支工作流' },
                { title: 'GitFlow 工作流', path: 'GitFlow-工作流' },
                // { title: 'Forking 工作流', path: 'Forking-工作流' },
                // { title: 'Pull Requests', path: 'Pull-Requests' },
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
    '/zh/spring-cloud-itoken/': [
        {
            title: '项目介绍',
            collapsable: false,
            children: [
                { title: 'iToken 白皮书', path: '/zh/spring-cloud-itoken/' },
                { title: 'iToken 项目简介', path: 'iToken-项目简介' },
            ]
        },
    ],
    '/zh/spring-cloud-itoken-prepare/': [
        {
            title: '开发前的准备',
            collapsable: false,
            children: [
                { title: '了解敏捷开发', path: '/zh/spring-cloud-itoken-prepare/' },
                { title: '在 GitLab 上创建项目', path: '在-GitLab-上创建项目' },
                { title: '部署服务到容器', path: '部署服务到容器' },
            ]
        },
    ],
    '/zh/spring-cloud-itoken-ci/': [
        {
            title: 'iToken 持续集成',
            collapsable: false,
            children: [
                { title: '持续集成的基本概念', path: '/zh/spring-cloud-itoken-ci/' },
                { title: '持续集成的操作流程', path: '持续集成的操作流程' },
                { title: '使用 GitLab 持续集成', path: '使用-GitLab-持续集成' },
                { title: '使用 GitLab Runner', path: '使用-GitLab-Runner' },
                { title: '使用 GitLab Runner Docker', path: '使用-GitLab-Runner-Docker' },
            ]
        },
    ],
    '/zh/nginx/': [
        {
            title: 'Nginx',
            collapsable: false,
            children: [
                { title: '知识点：CDN', path: '知识点-CDN' },
                { title: 'Nginx 简介', path: '/zh/nginx/' },
                { title: 'Nginx 虚拟主机', path: 'Nginx-虚拟主机' },
                { title: '小知识：Nginx 惊群问题', path: '小知识-Nginx-惊群问题' },
            ]
        },
    ],
    '/zh/zookeeper-analysis/': [
        {
            title: 'ZooKeeper 源码分析与实战',
            collapsable: false,
            children: [
                { title: 'ZooKeeper 数据模型：节点的特性与应用', path: '/zh/zookeeper-analysis/' },
            ]
        },
    ],
    '/zh/spring-security-oAuth2/': [
        {
            title: 'Spring Security oAuth2',
            collapsable: false,
            children: [
                { title: 'Spring Security oAuth2', path: '/zh/spring-security-oAuth2/' },
            ]
        },
    ],
    '/zh/gengxin/': [
        {
            title: '更新中',
            collapsable: false,
            children: [
                { title: '更新中', path: '/zh/gengxin/' }
            ]
        },
    ],
    '/zh/apache-shiro/':[
        {
            title: 'Shiro',
            collapsable: false,
            children: [
                { title: '小知识点：权限管理', path: '小知识点-权限管理.md' },
                { title: 'Shiro 介绍', path: '/zh/apache-shiro/' },
                { title: 'shiro 架构', path: 'shiro-架构' },
                { title: '基于 JavaSE 应用', path: '基于JavaSE应用-Shiro-的基本使用' },
                { title: 'Shiro 认证流程', path: 'Shiro-认证流程' },
                { title: 'SpringBoot 应用整合 Shiro', path: 'SpringBoot-应用整合-Shiro-案例' },
                { title: 'Shiro 的标签使用', path: 'shiro-的标签使用' },
                { title: 'Shiro 自定义 Realm', path: 'SpringBoot-整合-Shiro-完成权限管理案例'},
                { title: '密码加密介绍', path: '密码加密介绍' },
                { title: '缓存使用', path: '缓存使用' },
                { title: 'Session 管理', path: 'session-管理' },  
                { title: 'Remember Me', path: 'RememberMe' },  
            ]
        },
    ],
    '/zh/gitlab/':[
        {
            title: 'GitLab - 代码管理平台',
            collapsable: false,
            children: [
                { title: '什么是 Git ？', path: '/zh/gitlab/' },
                { title: '安装 Git', path: '安装-Git' },
                { title: 'Git 的一般工作流程', path: 'Git-的一般工作流程' },
                { title: 'Git 的基本操作', path: 'Git-的基本操作' },
                { title: 'SmartGit 简化 Git 操作', path: 'SmartGit-简化-Git-操作' },
                { title: '什么是 GitLab ？', path: '什么是-GitLab' },
                { title: '基于 Docker 安装 GitLab', path: '基于-Docker-安装-GitLab' },
                { title: 'GitLab 的基本设置', path: 'GitLab-的基本设置' },
                { title: 'GitLab 的账户管理', path: 'GitLab-的账户管理' },
                { title: 'GitLab 创建第一个项目', path: 'GitLab-创建第一个项目' },
            ]
        }
    ],
    '/zh/nexus/':[
        {
            title: 'Nexus - 依赖管理平台',
            collapsable: false,
            children: [
                { title: '什么是 Nexus ？', path: '/zh/nexus/' },
                { title: '基于 Docker 安装 Nexus', path: '基于-Docker-安装-Nexus' },
                { title: 'Maven 仓库介绍', path: 'Maven-仓库介绍' },
                { title: '在项目中使用 Maven 私服', path: '在项目中使用-Maven-私服' },
                { title: 'Maven 私服 Nexus 的好处', path: 'Maven-私服-Nexus-的好处' },
            ]
        }
    ],
    '/zh/spring-boot-webclient/':[
        {
            title: 'WebClient',
            collapsable: false,
            children: [
                { title: 'Spring Boot 响应式客户端 WebClient', path: '/zh/spring-boot-webclient/' },
                { title: '快速上手 WebClient', path: '快速上手-WebClient' },
            ]
        }
    ],
    '/zh/changelog/':[
        {
            title: 'Change Log',
            collapsable: false,
            children: [
                { title: '最近更新', path: '/zh/changelog/' },
                { title: '2020 年 05 月', path: '2020-05' }
            ]
        },
    ],

}