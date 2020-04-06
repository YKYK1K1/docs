# 三、默认主题配置

## 首页

默认的主题提供了一个首页（Homepage）的布局 (用于 [这个网站的主页](https://www.vuepress.cn/))。想要使用它，需要在你的根级 `README.md` 的 [YAML front matter](https://www.vuepress.cn/guide/markdown.html#front-matter) 指定 `home: true`。以下是一个如何使用的例子：

```yaml
---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

你可以将相应的内容设置为 `null` 来禁用标题和副标题。

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `features` 的后面。

## 导航栏

导航栏可能包含你的页面标题、[搜索框](https://www.vuepress.cn/theme/default-theme-config.html#搜索框)、 [导航栏链接](https://www.vuepress.cn/theme/default-theme-config.html#导航栏链接)、[多语言切换](https://www.vuepress.cn/guide/i18n.html)、[仓库链接](https://www.vuepress.cn/theme/default-theme-config.html#git-仓库和编辑链接)，它们均取决于你的配置。

#### 导航栏 Logo

你可以通过 `themeConfig.logo` 增加导航栏 Logo ，Logo 可以被放置在[公共文件目录](https://www.vuepress.cn/guide/assets.html#public-files)：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
  }
}
```

#### 导航栏链接

你可以通过 `themeConfig.nav` 增加一些导航栏链接:

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
```

外部链接 `` 标签的特性将默认包含`target="_blank" rel="noopener noreferrer"`，你可以提供 `target` 与 `rel`，它们将被作为特性被增加到 `` 标签上：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' }
    ]
  }
}
```

当你提供了一个 `items` 数组而不是一个单一的 `link` 时，它将显示为一个 `下拉列表` ：

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}
```

此外，你还可以通过嵌套的 `items` 来在 `下拉列表` 中设置分组：

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [/*  */] },
          { text: 'Group2', items: [/*  */] }
        ]
      }
    ]
  }
}
```