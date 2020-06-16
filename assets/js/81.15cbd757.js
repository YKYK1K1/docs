(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{836:function(n,t,e){"use strict";e.r(t);var s=e(67),r=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-虚拟主机"}},[n._v("#")]),n._v(" "),e("strong",[n._v("Nginx 虚拟主机")])]),n._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[n._v("#")]),n._v(" "),e("strong",[n._v("概述")])]),n._v(" "),e("p",[n._v("我们使用 Docker 来安装和运行 Nginx，"),e("code",[n._v("docker-compose.yml")]),n._v(" 配置如下：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("version: '3.1'\nservices:\n  nginx:\n    restart: always\n    image: nginx\n    container_name: nginx\n    ports:\n      - 80:80\n    volumes:\n      - ./conf/nginx.conf:/etc/nginx/nginx.conf\n      - ./wwwroot:/usr/share/nginx/wwwroot  //放静态文件的目录\n")])])]),e("blockquote",[e("p",[n._v("运行： docker-compose up")])]),n._v(" "),e("h2",{attrs:{id:"什么是虚拟主机？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟主机？"}},[n._v("#")]),n._v(" "),e("strong",[n._v("什么是虚拟主机？")])]),n._v(" "),e("p",[n._v("虚拟主机是一种特殊的软硬件技术，它可以将网络上的每一台计算机分成多个虚拟主机，每个虚拟主机可以独立对外提供 www 服务，这样就可以实现一台主机对外提供多个 web 服务，每个虚拟主机之间是独立的，互不影响的。")]),n._v(" "),e("p",[n._v("通过 Nginx 可以实现虚拟主机的配置，Nginx 支持三种类型的虚拟主机配置")]),n._v(" "),e("ul",[e("li",[n._v("基于 IP 的虚拟主机")]),n._v(" "),e("li",[n._v("基于域名的虚拟主机")]),n._v(" "),e("li",[n._v("基于端口的虚拟主机")])]),n._v(" "),e("h2",{attrs:{id:"nginx-配置文件的结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置文件的结构"}},[n._v("#")]),n._v(" "),e("strong",[n._v("Nginx 配置文件的结构")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# ...\nevents {\n\t# ...\n}\n\nhttp {\n\t# ...\n\tserver{\n\t\t# ...\n\t}\n\t\n\t# ...\n\tserver{\n\t\t# ...\n\t}\n}\n")])])]),e("blockquote",[e("p",[n._v("注： 每个 server 就是一个虚拟主机")])]),n._v(" "),e("h2",{attrs:{id:"基于端口的虚拟主机配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于端口的虚拟主机配置"}},[n._v("#")]),n._v(" "),e("strong",[n._v("基于端口的虚拟主机配置")])]),n._v(" "),e("h3",{attrs:{id:"需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[n._v("#")]),n._v(" "),e("strong",[n._v("需求")])]),n._v(" "),e("p",[n._v("Nginx 对外提供 80 和 8080 两个端口监听服务\n请求 80 端口则请求 html80 目录下的 html\n请求 8080 端口则请求 html8080 目录下的 html")]),n._v(" "),e("h3",{attrs:{id:"创建目录及文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录及文件"}},[n._v("#")]),n._v(" "),e("strong",[n._v("创建目录及文件")])]),n._v(" "),e("p",[n._v("在 "),e("code",[n._v("/usr/local/docker/nginx/wwwroot")]),n._v(" 目录下创建 "),e("code",[n._v("html80")]),n._v(" 和 "),e("code",[n._v("html8080")]),n._v(" 两个目录，并分辨创建两个 "),e("code",[n._v("index.html")]),n._v(" 文件")]),n._v(" "),e("h3",{attrs:{id:"配置虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机"}},[n._v("#")]),n._v(" "),e("strong",[n._v("配置虚拟主机")])]),n._v(" "),e("p",[n._v("修改 "),e("code",[n._v("/usr/local/docker/nginx/conf")]),n._v(" 目录下的 "),e("code",[n._v("nginx.conf")]),n._v(" 配置文件：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# Nginx 处理要用几个CPU 几核 同时开多少个线程 CPU几核就填几 充分利用 CPU 资源\nworker_processes  1;\n\nevents {\n    # 同时的连接数\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n    \n    keepalive_timeout  65;\n    # 配置虚拟主机 192.168.31.204\n    server {\n\t# 监听的ip和端口，配置 192.168.31.204:80\n        listen       80;\n\t# 虚拟主机名称这里配置ip地址\n        server_name  192.168.31.204;\n\t# 所有的请求都以 / 开始，所有的请求都可以匹配此 location\n        location / {\n\t    # 使用 root 指令指定虚拟主机目录即网页存放目录\n\t    # 比如访问 http://ip/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/index.html\n\t    # 比如访问 http://ip/item/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/item/index.html\n\n            root   /usr/share/nginx/wwwroot/html80;\n\t    # 指定欢迎页面，按从左到右顺序查找\n            index  index.html index.htm;\n        }\n\n    }\n    # 配置虚拟主机 192.168.31.204\n    server {\n        listen       9000;\n        server_name  192.168.31.204;\n\n        location / {\n            root   /usr/share/nginx/wwwroot/html9000;\n            index  index.html index.htm;\n        }\n    }\n}\n")])])]),e("h2",{attrs:{id:"基于域名的虚拟主机配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于域名的虚拟主机配置"}},[n._v("#")]),n._v(" "),e("strong",[n._v("基于域名的虚拟主机配置")])]),n._v(" "),e("h3",{attrs:{id:"需求-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求-2"}},[n._v("#")]),n._v(" "),e("strong",[n._v("需求")])]),n._v(" "),e("ul",[e("li",[n._v("两个域名指向同一台 Nginx 服务器，用户访问不同的域名显示不同的网页内容")]),n._v(" "),e("li",[n._v("两个域名是 admin.service.itoken.yky.com 和 admin.web.itoken.yky.com")]),n._v(" "),e("li",[n._v("Nginx 服务器使用虚拟机 192.168.31.204")])]),n._v(" "),e("h3",{attrs:{id:"配置-windows-hosts-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-windows-hosts-文件"}},[n._v("#")]),n._v(" "),e("strong",[n._v("配置 Windows Hosts 文件")])]),n._v(" "),e("ul",[e("li",[n._v("通过 host 文件指定 admin.service.itoken.yky.com 和 admin.web.itoken.yky.com 对应 192.168.31.204 虚拟机：")]),n._v(" "),e("li",[n._v("修改 window 的 hosts 文件：（C:\\Windows\\System32\\drivers\\etc）")])]),n._v(" "),e("h3",{attrs:{id:"创建目录及文件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录及文件-2"}},[n._v("#")]),n._v(" "),e("strong",[n._v("创建目录及文件")])]),n._v(" "),e("p",[n._v("在 "),e("code",[n._v("/usr/local/docker/nginx/wwwroot")]),n._v(" 目录下创建 "),e("code",[n._v("htmlservice")]),n._v(" 和 "),e("code",[n._v("htmlweb")]),n._v(" 两个目录，并分辨创建两个 "),e("code",[n._v("index.html")]),n._v(" 文件")]),n._v(" "),e("h3",{attrs:{id:"配置虚拟主机-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机-2"}},[n._v("#")]),n._v(" "),e("strong",[n._v("配置虚拟主机")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("user  nginx;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n    server {\n        listen       80;\n        server_name  admin.service.itoken.yky.com;\n        location / {\n            root   /usr/share/nginx/wwwroot/htmlservice;\n            index  index.html index.htm;\n        }\n\n    }\n\n    server {\n        listen       80;\n        server_name  admin.web.itoken.yky.com;\n\n        location / {\n            root   /usr/share/nginx/wwwroot/htmlweb;\n            index  index.html index.htm;\n        }\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);