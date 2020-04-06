module.exports = {
    title: "七伊",
    description: "七伊的博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: '七伊' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明，七伊' }]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/hero.png',
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
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