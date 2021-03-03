(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{915:function(t,v,_){"use strict";_.r(v);var r=_(67),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"持续集成的操作流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#持续集成的操作流程"}},[t._v("#")]),t._v(" "),_("strong",[t._v("持续集成的操作流程")])]),t._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" "),_("strong",[t._v("概述")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("根据持续集成的设计，代码从提交到生产，整个过程有以下几步。")]),t._v(" "),_("h2",{attrs:{id:"提交"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[t._v("#")]),t._v(" "),_("strong",[t._v("提交")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("流程的第一步，是开发者向代码仓库提交代码。所有后面的步骤都始于本地代码的一次提交（commit）。")]),t._v(" "),_("h2",{attrs:{id:"测试（第一轮）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试（第一轮）"}},[t._v("#")]),t._v(" "),_("strong",[t._v("测试（第一轮）")])]),t._v(" "),_("p",[t._v("代码仓库对 commit 操作配置了钩子（hook），只要提交代码或者合并进主干，就会跑自动化测试。")]),t._v(" "),_("p",[t._v("测试的种类：")]),t._v(" "),_("ul",[_("li",[t._v("单元测试：针对函数或模块的测试")]),t._v(" "),_("li",[t._v("集成测试：针对整体产品的某个功能的测试，又称功能测试")]),t._v(" "),_("li",[t._v("端对端测试：从用户界面直达数据库的全链路测试")])]),t._v(" "),_("p",[t._v("第一轮至少要跑单元测试。")]),t._v(" "),_("h2",{attrs:{id:"构建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[t._v("#")]),t._v(" "),_("strong",[t._v("构建")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("通过第一轮测试，代码就可以合并进主干，就算可以交付了。")]),t._v(" "),_("p",[t._v("交付后，就先进行构建（build），再进入第二轮测试。所谓构建，指的是将源码转换为可以运行的实际代码，比如安装依赖，配置各种资源（样式表、JS脚本、图片）等等。")]),t._v(" "),_("p",[t._v("常用的构建工具如下：")]),t._v(" "),_("ul",[_("li",[t._v("Jenkins(可以做持续交付）")]),t._v(" "),_("li",[t._v("Travis")]),t._v(" "),_("li",[t._v("Codeship")]),t._v(" "),_("li",[t._v("Strider")])]),t._v(" "),_("p",[t._v("Jenkins 和 Strider 是开源软件，Travis 和 Codeship 对于开源项目可以免费使用。它们都会将构建和测试，在一次运行中执行完成。")]),t._v(" "),_("h2",{attrs:{id:"测试（第二轮）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试（第二轮）"}},[t._v("#")]),t._v(" "),_("strong",[t._v("测试（第二轮）")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("构建完成，就要进行第二轮测试。如果第一轮已经涵盖了所有测试内容，第二轮可以省略，当然，这时构建步骤也要移到第一轮测试前面。")]),t._v(" "),_("p",[t._v("第二轮是全面测试，单元测试和集成测试都会跑，有条件的话，也要做端对端测试。所有测试以自动化为主，少数无法自动化的测试用例，就要人工跑。")]),t._v(" "),_("p",[t._v("需要强调的是，新版本的每一个更新点都必须测试到。如果测试的覆盖率不高，进入后面的部署阶段后，很可能会出现严重的问题。")]),t._v(" "),_("h2",{attrs:{id:"部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" "),_("strong",[t._v("部署")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("通过了第二轮测试，当前代码就是一个可以直接部署的版本（artifact）。将这个版本的所有文件打包（ tar filename.tar * ）存档，发到生产服务器。")]),t._v(" "),_("p",[t._v("生产服务器将打包文件，解包成本地的一个目录，再将运行路径的符号链接（symlink）指向这个目录，然后重新启动应用。这方面的部署工具有Ansible，Chef，Puppet等。")]),t._v(" "),_("h2",{attrs:{id:"秒级回滚"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#秒级回滚"}},[t._v("#")]),t._v(" "),_("strong",[t._v("秒级回滚")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("一旦当前版本发生问题，就要回滚到上一个版本的构建结果。最简单的做法就是修改一下符号链接，指向上一个版本的目录。")]),t._v(" "),_("p",[t._v("可以用软连接指向 也可以用docker tag")])])}),[],!1,null,null,null);v.default=a.exports}}]);