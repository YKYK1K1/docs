(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{856:function(v,_,t){"use strict";t.r(_);var a=t(67),l=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[v._v("#")]),v._v(" "),t("strong",[v._v("MySQL")])]),v._v(" "),t("h2",{attrs:{id:"什么是数据库？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库？"}},[v._v("#")]),v._v(" "),t("strong",[v._v("什么是数据库？")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。")]),v._v(" "),t("p",[v._v("每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。")]),v._v(" "),t("p",[v._v("我们也可以将数据存储在文件中，但是在文件中读写数据速度相对较慢。")]),v._v(" "),t("p",[v._v("所以，现在我们使用关系型数据库管理系统（RDBMS）来存储和管理大数据量。所谓的关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。")]),v._v(" "),t("p",[v._v("RDBMS 即关系数据库管理系统(Relational Database Management System)的特点：")]),v._v(" "),t("ul",[t("li",[t("ol",[t("li",[v._v("数据以表格的形式出现")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[v._v("每行为各种记录名称")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[v._v("每列为记录名称所对应的数据域")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"4"}},[t("li",[v._v("许多的行和列组成一张表单")])])]),v._v(" "),t("li",[t("ol",{attrs:{start:"5"}},[t("li",[v._v("若干的表单组成database")])])])]),v._v(" "),t("h2",{attrs:{id:"mysql数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库"}},[v._v("#")]),v._v(" "),t("strong",[v._v("MySQL数据库")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。")]),v._v(" "),t("ul",[t("li",[v._v("MySQL 是开源的，所以你不需要支付额外的费用。")]),v._v(" "),t("li",[v._v("MySQL 支持大型的数据库。可以处理拥有上千万条记录的大型数据库。")]),v._v(" "),t("li",[v._v("MySQL 使用标准的 SQL 数据语言形式。")]),v._v(" "),t("li",[v._v("MySQL 可以运行于多个系统上，并且支持多种语言。这些编程语言包括 C、C++、Python、Java、Perl、PHP、Eiffel、Ruby 和 Tcl 等。")]),v._v(" "),t("li",[v._v("MySQL 对PHP有很好的支持，PHP 是目前最流行的 Web 开发语言。")]),v._v(" "),t("li",[v._v("MySQL 支持大型数据库，支持 5000 万条记录的数据仓库，32 位系统表文件最大可支持 4GB，64 位系统支持最大的表文件为8TB。")]),v._v(" "),t("li",[v._v("MySQL 是可以定制的，采用了 GPL 协议，你可以修改源码来开发自己的 MySQL 系统。")])]),v._v(" "),t("h2",{attrs:{id:"rdbms-术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-术语"}},[v._v("#")]),v._v(" "),t("strong",[v._v("RDBMS 术语")])]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("在我们开始学习MySQL 数据库前，让我们先了解下 RDBMS 的一些术语：")]),v._v(" "),t("ul",[t("li",[v._v("数据库: 数据库是一些关联表的集合。")]),v._v(" "),t("li",[v._v("数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。")]),v._v(" "),t("li",[v._v("列: 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。")]),v._v(" "),t("li",[v._v("行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。")]),v._v(" "),t("li",[v._v("冗余：存储两倍数据，冗余降低了性能，但提高了数据的安全性。")]),v._v(" "),t("li",[v._v("主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。")]),v._v(" "),t("li",[v._v("外键：外键用于关联两个表。")]),v._v(" "),t("li",[v._v("复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。")]),v._v(" "),t("li",[v._v("索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。")]),v._v(" "),t("li",[v._v("参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。")])]),v._v(" "),t("p",[v._v('MySQL 为关系型数据库(Relational Database Management System), 这种所谓的"关系型"可以理解为"表格"的概念, 一个关系型数据库由一个或数个表格组成, 如图所示的一个表格:')]),v._v(" "),t("p",[t("img",{attrs:{src:"",alt:""}})]),v._v(" "),t("ul",[t("li",[v._v("表头(header): 每一列的名称;")]),v._v(" "),t("li",[v._v("列(col): 具有相同数据类型的数据的集合;")]),v._v(" "),t("li",[v._v("行(row): 每一行用来描述某条记录的具体信息;")]),v._v(" "),t("li",[v._v("值(value): 行的具体信息, 每个值必须与该列的数据类型相同;")]),v._v(" "),t("li",[v._v("键(key): 键的值在当前列中具有唯一性。")])])])}),[],!1,null,null,null);_.default=l.exports}}]);