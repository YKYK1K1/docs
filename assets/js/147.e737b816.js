(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{902:function(t,a,s){"use strict";s.r(a);var n=s(67),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通过微服务名实现动态路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过微服务名实现动态路由"}},[t._v("#")]),t._v(" "),s("strong",[t._v("通过微服务名实现动态路由")])]),t._v(" "),s("blockquote",[s("p",[t._v("默认情况下"),s("code",[t._v("Gateway")]),t._v("会根据注册中心的服务列表，以注册中心上微服务名为路径创建动态路由进行转发，从而实现动态路由的功能")])]),t._v(" "),s("h2",{attrs:{id:"实现动态路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现动态路由"}},[t._v("#")]),t._v(" "),s("strong",[t._v("实现动态路由")])]),t._v(" "),s("hr"),t._v(" "),s("ol",[s("li",[t._v("启动 -> 一个"),s("code",[t._v("eureka7001")]),t._v("+两个服务提供者"),s("code",[t._v("8001")]),t._v("/"),s("code",[t._v("8002")])]),t._v(" "),s("li",[t._v("POM")]),t._v(" "),s("li",[t._v("YML")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9527")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gateway\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gateway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("discovery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("locator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启从注册中心动态创建路由的功能，利用微服务名进行路由")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("routes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" payment_routh "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# payment_route                              # 路由的ID,没有固定规则但要求唯一,建议配合服务名")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          uri: http://localhost:8001                                     # 匹配后提供服务的路由地址")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service                                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配后提供服务的路由地址")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Path=/payment/get/"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**")]),t._v("                                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 断言,路径相匹配的进行路由")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" payment_routh2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# payment_route                              # 路由的ID,没有固定规则但要求唯一,建议配合服务名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          uri: http://localhost:8001                                     # 匹配后提供服务的路由地址")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("payment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service                                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配后提供服务的路由地址")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Path=/payment/lb/"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**")]),t._v("                                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 断言,路径相匹配的进行路由")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eureka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 服务提供者 provider 注册进 eureka 服务列表内")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service-url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("register-with-eureka")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch-registry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultZone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//eureka7001.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("7001/eureka\n\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("需要注意的是"),s("code",[t._v("uri")]),t._v("的协议为"),s("code",[t._v("lb")]),t._v("，表示启用"),s("code",[t._v("Gateway")]),t._v("的负载均衡功能。")]),t._v(" "),s("p",[s("code",[t._v("lb://serviceName")]),t._v("是"),s("code",[t._v("spring cloud gateway")]),t._v("在微服务中自动为我们创建的负载均衡"),s("code",[t._v("uri")])])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("测试："),s("code",[t._v("http://localhost:9527/payment/lb")]),t._v(" ->  "),s("strong",[s("code",[t._v("8001")]),t._v("/"),s("code",[t._v("8002")]),t._v("两个端口切换")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);