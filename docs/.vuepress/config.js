const headConf = require("./config/headConf.js");
const puluginsConf = require("./config/pluginsConf")
const sidebarConf = require("./config/sidebarConf")
const navConf = require("./config/navConf")


module.exports = {
    base: '/docs/',
    title: "七伊",
    theme: 'antdocs',
    description: "七伊的博客",
    head: headConf,
    plugins: puluginsConf,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/hero.png',
        nav: navConf
    },
}