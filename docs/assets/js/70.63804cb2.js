(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{168:function(e,n,t){"use strict";t.r(n);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"vue路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue路由","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue路由")]),e._v(" "),t("h4",{attrs:{id:"_1、路由-外置的-vue-router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、路由-外置的-vue-router","aria-hidden":"true"}},[e._v("#")]),e._v(" 1、路由(外置的) vue-router")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import VueRouter from 'vue-router';\nimport Index from './components/index.vue';\nimport List from './components/index.vue';\nimport Login from './components/index.vue';\n\nVue.use(VueRouter); // 注册\nlet router = new VueRouter({\n    routes:[{ // 定义多个路由\n        path:'/index', \n        component:Index\n    },{\n        path:'/list',\n        component:List\n    },{\n        path:'/login',\n        component:Login\n    },{\n        path:'/music',\n        component:Music,\n        children:[{  // 封装子路由\n            path:'/comd',\n            component:Comd\n        },{\n            path:'/search',\n            component:Search\n        }]\n    }]\n})\n\n\napp.vue // 入口文件\n<router-view></router-view>\n")])])]),t("h4",{attrs:{id:"_2、路由跳转路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、路由跳转路径","aria-hidden":"true"}},[e._v("#")]),e._v(" 2、路由跳转路径")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<router-link to="/music/recommd">推荐</router-link>\n\nrouter-link === a\nto === href\n')])])])])}],!1,null,null,null);n.default=a.exports}}]);