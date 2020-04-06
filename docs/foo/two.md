# 二、初试 vuepress

## 创建 Github 账号

已有省略

## 创建项目

![img](D:\Program Files (x86)\Youdao\YoudaoData\yky19970707@163.com\e4fafa09463247829be4580737cc5187\clipboard.png)



**将项目拉取到本地** 

![img](D:\Program Files (x86)\Youdao\YoudaoData\yky19970707@163.com\6c3643365acf48cbb7f26c7cd958a0e1\clipboard.png)



## 初体验 vuepress

可以参考 [VuePress 中文文档](https://www.vuepress.cn/)

## 使用 `git Bash Here` 执行命令

```cmd
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 使用安装好的 VSCode 打开目录
code .

# 开始项目之前初始
npm init -y

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .
```

## 现有项目

```cmd
# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md
```

接着，在 `package.json` 里加一些脚本:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## 默认主题的首页

首页 默认的主题提供了一个首页（Homepage）的布局 (用于 这个网站的主页)。想要使用它，需要在你的根级 `README.md` 的 YAML front matter 指定 `home: true`。以下是一个如何使用的例子：

```properties
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

任何 `YAML front matter` 之后额外的内容将会以普通的 markdown 被渲染，并插入到 `features` 的后面。 然后就可以开始写作了:

```cmd
yarn docs:dev # 或者：npm run docs:dev
```

**访问端口**

```properties
localhost:8080
```