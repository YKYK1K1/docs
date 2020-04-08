module.exports = [
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
