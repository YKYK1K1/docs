module.exports = {
    '/zh/guide/': [
        {
            title: '指南',
            collapsable: false,
            children: [
                { title: '如何学编程', path: '如何学编程' }
            ]
        },
        {
            title: '基础',
            collapsable: false,
            children: [
                { title: '走向单体地狱', path: '走向单体地狱' }
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
            ]
        },
    ]

}