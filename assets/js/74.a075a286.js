(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{829:function(t,a,v){"use strict";v.r(a);var _=v(67),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"soa-架构与微服务架构的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#soa-架构与微服务架构的区别"}},[t._v("#")]),t._v(" "),v("strong",[t._v("SOA 架构与微服务架构的区别")])]),t._v(" "),v("h2",{attrs:{id:"注重重用，微服务注重重写"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注重重用，微服务注重重写"}},[t._v("#")]),t._v(" "),v("strong",[t._v("注重重用，微服务注重重写")])]),t._v(" "),v("p",[t._v("SOA 的主要目的是为了企业各个系统更加容易地融合在一起。")]),t._v(" "),v("p",[t._v("微服务通常由重写一个模块开始。要把整个巨石型的应用重写是有很大的风险的，也不一定必要。我们向微服务迁移的时候通常从耦合度最低的模块或对扩展性要求最高的模块开始。")]),t._v(" "),v("p",[t._v("把它们一个一个剥离出来用敏捷地重写，可以尝试最新的技术和语言和框架，然后 "),v("strong",[t._v("单独布署")]),t._v("。它通常不依赖其他服务。微服务中常用的 "),v("code",[t._v("API Gateway")]),t._v(" 的模式主要目的也不是重用代码。")]),t._v(" "),v("p",[t._v("而是减少客户端和服务间的往来。"),v("code",[t._v("API gateway")]),t._v(" 模式不等同与 "),v("code",[t._v("Facade")]),t._v(" 模式，我们可以使用如 "),v("code",[t._v("Future")]),t._v(" 之类的调用，甚至返回不完整数据。")]),t._v(" "),v("h2",{attrs:{id:"注重水平服务，微服务注重垂直服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注重水平服务，微服务注重垂直服务"}},[t._v("#")]),t._v(" "),v("strong",[t._v("注重水平服务，微服务注重垂直服务")])]),t._v(" "),v("p",[t._v("SOA 设计喜欢给服务分层(如 Service Layers 模式)。我们常常见到一个 Entity 服务层的设计，美其名曰 Data Access Layer。这种设计要求所有的服务都通过这个 Entity 服务层。来获取数据。这种设计非常不灵活，比如每次数据层的改动都可能影响到所有业务层的服务。而每个微服务通常有它自己独立的 Data Store。我们在拆分数据库时可以适当的做些去范式化，让它不需要依赖其他服务的数据。")]),t._v(" "),v("p",[t._v("微服务通常是直接面对用户的，每个微服务通常直接为用户提供某个功能。类似的功能可能针对手机有一个服务，针对机顶盒是另外一个服务。在 SOA 设计模式中这种情况通常会用到 "),v("code",[t._v("Multi-ChannelEndpoint")]),t._v(" 的模式返回一个大而全的结果兼顾到所有的客户端的需求。")]),t._v(" "),v("h2",{attrs:{id:"注重自上而下，微服务注重自下而上"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注重自上而下，微服务注重自下而上"}},[t._v("#")]),t._v(" "),v("strong",[t._v("注重自上而下，微服务注重自下而上")])]),t._v(" "),v("p",[t._v("SOA 架构在设计开始时会先定义好服务合同。它喜欢集中管理所有的服务，包括集中管理业务逻辑，数据，流程，Schema 等。它使用 Enterprise Inventory 和 Service Composition 等方法来集中管理服务。SOA 架构通常会预先把每个模块服务接口都定义好。模块系统间的通讯必须遵守这些接口，各服务是针对他们的调用者。")]),t._v(" "),v("p",[t._v("SOA 架构适用于 TO GAF 之类的架构方法论。")]),t._v(" "),v("p",[t._v("微服务则敏捷得多。只要用户用得到，就先把这个服务挖出来。然后针对性的，快速确认业务需求，快速开发迭代。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" "),v("strong",[t._v("总结")])]),t._v(" "),v("p",[t._v("微服务与 SOA 有很多相同之处。两者都属于典型的、包含松耦合分布式组件的系统结构。在围绕着服务的概念创建架构这一方面，微服务提供了一种更清晰、定义更良好的方式。微服务的原则与敏捷软件开发思想是高度一致的，而它与 SOA 原则的演化的目标也是相同的，则减少传统的企业服务总线开发的高复杂性。两者之间最关键的区别在于，微服务专注于以自治的方式产生价值。但是两种架构背后的意图是不同的：SOA 尝试将应用集成，一般采用中央管理模式来确保各应用能够交互运作。微服务尝试部署新功能，快速有效地扩展开发团队。它着重于分散管理、代码再利用与自动化执行。")]),t._v(" "),v("p",[t._v("功能 SOA 微服务\n组件大小 大块业务逻辑 单独任务或小块业务逻辑\n耦合 通常松耦合 总是松耦合\n公司架构 任何类型 小型、专注于功能交叉的团队\n管理 着重中央管理 着重分散管理\n目标 确保应用能够交互操作 执行新功能，快速拓展开发团队")]),t._v(" "),v("p",[t._v("微服务并不是一种新思想的方法。它更像是一种思想的精炼，一种 SOA 的精细化演进，并且更好地利用了先进的技术以解决问题，例如容器与自动化等。所以对于我们去选择服务技术框架时，并不是非黑即白，而是针对 SOA、MSA 两种架构设计同时要考虑到兼容性，对于现有平台情况架构设计，退则守 SOA，进则攻 MSA，阶段性选择适合的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);