const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
    base: '/docs/',
    title: "七伊",
    description: "七伊的博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/192x192.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'author', content: '七伊' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明，七伊' }]
    ],
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => moment(timestamp).format("LLLL")
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'YKYK1K1',
            repo: 'docs',
            clientId: 'e7689aca1c779c83325c',
            clientSecret: '78f06ba11751c78f409a5cd05fa38f74261ee077',
            autoCreateIssue: true
        },

    },
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/hero.png',
        sidebar: {
            '/zh/guide/': [
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
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            {
                text: '在线工具',
                items: [
                    {
                        text: '在线转换', items: [
                            { text: '格式转换', link: 'https://www.aconvert.com/cn/format/svg/' },
                            { text: 'Guide', link: '/about' },]
                    },
                    {
                        text: 'Group2', items: [
                            { text: 'Home', link: '/' },
                            { text: 'Guide', link: '/about' },]
                    }
                ]
            },
        ]
    },
}