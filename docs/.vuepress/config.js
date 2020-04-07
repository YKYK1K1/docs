const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
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
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        { title: '走向单体地狱', path: '走向单体地狱' }
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