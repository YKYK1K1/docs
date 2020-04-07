const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
    base: '/docs/',
    title: "七伊",
    description: "七伊的博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: '七伊' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明，七伊' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {

                    return moment(timestamp).format("LLLL")
                }
            }
        ]
    ],
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
                text: 'Languages',
                items: [
                    {
                        text: 'Group1', items: [{ text: 'Home', link: '/' },
                        { text: 'Guide', link: '/about' },]
                    },
                    {
                        text: 'Group2', items: [{ text: 'Home', link: '/' },
                        { text: 'Guide', link: '/about' },]
                    }
                ]
            },
        ]
    },
}