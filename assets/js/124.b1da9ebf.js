(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{560:function(a,e,t){"use strict";t.r(e);var s=t(23),v=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[a._v("#")]),a._v(" SQL")]),a._v(" "),t("h2",{attrs:{id:"通用规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用规则"}},[a._v("#")]),a._v(" 通用规则")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. SQL语句可以单行或多行书写,已分号结尾,遇到分号才会结束\n2. show databases语句用来查看数据库\n3. 使用空格和tab来提高可读性\n4. SQL语句不区分大小写,关键字建议使用大写\n5. 三种注释\n    - 单行注释  show databases; -- 查询所有数据库名称 (两个横杆一个空格)\n    - 单行注释 show databases; # 查询所有数据库名称 (#号,不需要加空格,是mysql特有的注释方式)\n    - 多行注释 /* show databases */;\n")])])]),t("h2",{attrs:{id:"sql分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql分类"}},[a._v("#")]),a._v(" SQL分类")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("1. DDL 数据定义语言 操作数据库和表\n2. DML 数据操作语言 增删改表中的数据\n3. DQL 数据查询语句 查询表中的数据\n4. DCL 授权\n")])])]),t("h3",{attrs:{id:"ddl-操作数据库-表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ddl-操作数据库-表"}},[a._v("#")]),a._v(" DDL 操作数据库,表")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("操作数据库 CRUD")]),a._v(" "),t("ul",[t("li",[a._v("C: create 创建\n"),t("ul",[t("li",[t("code",[a._v("create database 数据库名称;")]),a._v(" 创建数据库")]),a._v(" "),t("li",[t("code",[a._v("create database if not exists 数据库名称;")]),a._v(" 可以使用判断操作,如果不存在,才创建")]),a._v(" "),t("li",[t("code",[a._v("create database 数据库名称 character set gbk;")]),a._v(" 已gbk字符集创建数据库")]),a._v(" "),t("li",[t("code",[a._v("create database if not exists 数据库名称 character set gbk;")]),a._v(' 如果不存在"数据库名称",则使用gbk 创建数据库')])])]),a._v(" "),t("li",[a._v("R: retrieve 查询\n"),t("ul",[t("li",[t("code",[a._v("show databases;")]),a._v(" 查询所有数据库名称")]),a._v(" "),t("li",[t("code",[a._v("show create databases;")]),a._v(" 数据库名称; 查看某个数据库的创建语句")])])]),a._v(" "),t("li",[a._v("U: update 修改\n"),t("ul",[t("li",[t("code",[a._v("alter 数据库名称 character set 字符集名称;")]),a._v(" 修改数据库字符集")])])]),a._v(" "),t("li",[a._v("D: delet 删除\n"),t("ul",[t("li",[t("code",[a._v("drop database 数据库名称;")]),a._v(" 删除数据库")]),a._v(" "),t("li",[t("code",[a._v("drop database if exists 数据库名称;")]),a._v(" 判断指定数据库存在,才删除")])])]),a._v(" "),t("li",[a._v("使用数据库\n"),t("ul",[t("li",[t("code",[a._v("select database();")]),a._v(" 查询当前使用的数据库名称")]),a._v(" "),t("li",[t("code",[a._v("use 数据库名称;")]),a._v(" 使用数据库")])])])])]),a._v(" "),t("li",[t("h2",{attrs:{id:"操作表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作表"}},[a._v("#")]),a._v(" 操作表")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);