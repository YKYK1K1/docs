(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{859:function(t,r,s){"use strict";s.r(r);var v=s(67),a=Object(v.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"为什么需要-oauth2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-oauth2"}},[t._v("#")]),t._v(" "),s("strong",[t._v("为什么需要 oAuth2")])]),t._v(" "),s("h2",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" "),s("strong",[t._v("应用场景")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("我们假设你有一个“云笔记”产品，并提供了“云笔记服务”和“云相册服务”，此时用户需要在不同的设备（PC、Android、iPhone、TV、Watch）上去访问这些“资源”（笔记，图片）")]),t._v(" "),s("p",[t._v("那么用户如何才能访问属于自己的那部分资源呢？此时传统的做法就是提供自己的账号和密码给我们的“云笔记”，登录成功后就可以获取资源了。但这样的做法会有以下几个问题：")]),t._v(" "),s("ul",[s("li",[t._v("“云笔记服务”和“云相册服务”会分别部署，难道我们要分别登录吗？")]),t._v(" "),s("li",[t._v("如果有第三方应用程序想要接入我们的“云笔记”，难道需要用户提供账号和密码给第三方应用程序，让他记录后再访问我们的资源吗？")]),t._v(" "),s("li",[t._v("用户如何限制第三方应用程序在我们“云笔记”的授权范围和使用期限？难道把所有资料都永久暴露给它吗？")]),t._v(" "),s("li",[t._v("如果用户修改了密码收回了权限，那么所有第三方应用程序会全部失效。")]),t._v(" "),s("li",[t._v("只要有一个接入的第三方应用程序遭到破解，那么用户的密码就会泄露，后果不堪设想。")])]),t._v(" "),s("p",[t._v("为了解决如上问题，oAuth 应用而生。")]),t._v(" "),s("h2",{attrs:{id:"名词解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" "),s("strong",[t._v("名词解释")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("第三方应用程序（Third-party application）： 又称之为客户端（client），比如上节中提到的设备（PC、Android、iPhone、TV、Watch），我们会在这些设备中安装我们自己研发的 APP。又比如我们的产品想要使用 QQ、微信等第三方登录。对我们的产品来说，QQ、微信登录是第三方登录系统。我们又需要第三方登录系统的资源（头像、昵称等）。对于 QQ、微信等系统我们又是第三方应用程序。")]),t._v(" "),s("li",[t._v("HTTP 服务提供商（HTTP service）： 我们的云笔记产品以及 QQ、微信等都可以称之为“服务提供商”。")]),t._v(" "),s("li",[t._v("资源所有者（Resource Owner）： 又称之为用户（user）。")]),t._v(" "),s("li",[t._v("用户代理（User Agent）： 比如浏览器，代替用户去访问这些资源。")]),t._v(" "),s("li",[t._v("认证服务器（Authorization server）： 即服务提供商专门用来处理认证的服务器，简单点说就是登录功能（验证用户的账号密码是否正确以及分配相应的权限）。")]),t._v(" "),s("li",[t._v("资源服务器（Resource server）： 即服务提供商存放用户生成的资源的服务器。它与认证服务器，可以是同一台服务器，也可以是不同的服务器。简单点说就是资源的访问入口，比如上节中提到的“云笔记服务”和“云相册服务”都可以称之为资源服务器。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/docs/assets/spring-security-oAuth2/yky_20200521103727.png",alt:"流程"}})]),t._v(" "),s("h2",{attrs:{id:"交互过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交互过程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("交互过程")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v('oAuth 在 "客户端" 与 "服务提供商" 之间，设置了一个授权层（authorization layer）。"客户端" 不能直接登录 "服务提供商"，只能登录授权层，以此将用户与客户端区分开来。"客户端" 登录授权层所用的令牌（token），与用户的密码不同。用户可以在登录的时候，指定授权层令牌的权限范围和有效期。"客户端" 登录授权层以后，"服务提供商" 根据令牌的权限范围和有效期，向 "客户端" 开放用户储存的资料。')]),t._v(" "),s("p",[s("img",{attrs:{src:"/docs/assets/spring-security-oAuth2/yky_201904010001.png",alt:"交互过程"}})])])}),[],!1,null,null,null);r.default=a.exports}}]);