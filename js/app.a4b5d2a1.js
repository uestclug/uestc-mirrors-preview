(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("8a23"),r=n.n(o);r.a},"25c1":function(t,e,n){},"4fc8":function(t){t.exports=JSON.parse('[{"name":"adobe-fonts","info":"app/adobe-fonts","icon":"adobe"},{"name":"alpine","info":"repo/alpine"},{"name":"anthon","info":"app/anthon"},{"name":"archlinux","info":"repo/archlinux","icon":"arch"},{"name":"archlinuxcn","info":"repo/archlinux","icon":"arch"},{"name":"centos","info":"repo/centos","icon":"centos"},{"name":"debian","info":"repo/debian","icon":"debian"},{"name":"debian-cd","info":"repo/debian","icon":"debian"},{"name":"debian-security","info":"repo/debian","icon":"debian"},{"name":"deepin","info":"repo/deepin"},{"name":"epel","info":"repo/epel"},{"name":"f-droid","info":"app/f-droid","icon":"cellphone-android"},{"name":"fedora","info":"repo/fedora","icon":"fedora"},{"name":"gnu","info":"app/gnu"},{"name":"kali","info":"repo/kali"},{"name":"kali-images","info":"repo/kali"},{"name":"linuxmint","info":"repo/mint","icon":"linux-mint"},{"name":"manjaro","info":"repo/manjaro"},{"name":"nginx","info":"app/nginx"},{"name":"nodejs-release","info":"app/node","icon":"nodejs"},{"name":"nodesource","info":"app/node","icon":"nodejs"},{"name":"opensuse","info":"repo/opensuse"},{"name":"openwrt","info":"repo/openwrt"},{"name":"proxmox","info":"repo/proxmox"},{"name":"raspbian","info":"repo/raspbian","icon":"raspberry-pi"},{"name":"repo-ck","info":"repo/archlinux","icon":"arch"},{"name":"termux","info":"repo/termux"},{"name":"ubuntu","info":"repo/ubuntu","icon":"ubuntu"},{"name":"ubuntu-cdimage","info":"repo/ubuntu","icon":"ubuntu"},{"name":"ubuntu-releases","info":"repo/ubuntu","icon":"ubuntu"}]')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavigationDrawer",{attrs:{app:""}}),n("router-view"),n("ColorPicker",{attrs:{app:""}})],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-list-group",{attrs:{"prepend-icon":"mdi-dots-horizontal"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(" 其他 ")])]},proxy:!0}])},[n("v-list-item",{attrs:{to:"/status"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-information")])],1),n("v-list-item-title",[t._v("状态")])],1),n("v-list-item",{attrs:{to:"/downloadiso"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-album")])],1),n("v-list-item-title",[t._v("下载ISO")])],1),n("v-list-item",{attrs:{to:"/browse"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-folder")])],1),n("v-list-item-title",[t._v("浏览目录")])],1)],1),n("v-divider"),n("v-footer",[n("span",{staticClass:"font-weight-light"},[t._v("Insider Preview v0.6.001")]),n("v-spacer"),n("AboutView")],1)]},proxy:!0}]),model:{value:t.drawerState,callback:function(e){t.drawerState=e},expression:"drawerState"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" UESTC 镜像站 ")]),n("v-list-item-subtitle",[t._v(" UESTC Mirror ")])],1)],1),n("v-divider"),n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("主页")])],1),"undefined"!=typeof t.repo.linux?n("v-list-group",{attrs:{"prepend-icon":"mdi-linux"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(" Linux发行版 ")])]},proxy:!0}],null,!1,4156937364)},t._l(t.repo.linux,(function(e,o){return n("v-list-item",{key:o,attrs:{to:"/repo/"+e["id"],link:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s("mdi-"+t.checkicon(e["icon"]))}})],1),n("v-list-item-title",{domProps:{textContent:t._s(e["name"])}})],1)})),1):t._e(),"undefined"!=typeof t.repo.app?n("v-list-group",{attrs:{"prepend-icon":"mdi-application"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-title",[t._v(" 程序 ")])]},proxy:!0}],null,!1,833817603)},t._l(t.repo.app,(function(e,o){return n("v-list-item",{key:o,attrs:{to:"/app/"+e["id"],link:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s("mdi-"+t.checkicon(e["icon"]))}})],1),n("v-list-item-title",{domProps:{textContent:t._s(e["name"])}})],1)})),1):t._e()],1)},s=[],c=n("91d2"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{dark:"",icon:""}},o),[n("v-icon",[t._v("mdi-information-outline")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"2","align-self":"center"}},[n("v-img",{attrs:{src:t.logo,width:"100%","aspect-ratio":1}})],1),n("v-col",{attrs:{cols:"10"}},[n("v-card-title",{staticClass:"headline lighten-2",attrs:{"primary-title":""}},[t._v(" UESTC Mirrors ")]),n("v-card-subtitle",[t._v("Insider Preview")])],1)],1),t._v(" UESTC Mirrors 是 UESTC LUG 与 UESTC NetUnion 共同维护， 在学校信息中心的支持下，为校内外（暂时只有校内）用户提供加速服务的镜像站点。 "),n("br"),t._v(" UESTC LUG 是由电子科技大学 GNU/Linux 使用者共同发起并运营的开放性组织，旨在宣传自由软件精神，为校内外 GNU/Linux 爱好者提供活动的平台和机会，并为校内外用户提供便利。 "),n("v-card-subtitle",[n("b",[t._v("授权和鸣谢")])]),t._v(" 本镜像在文档上借鉴了"),n("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/"}},[t._v("TUNA Mirrors")]),t._v("的部分内容。"),n("br"),t._v(" 本镜像目前在内部开发阶段，公开测试时将公布源码。 ")],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 关闭 ")])],1)],1)],1)},u=[],d=n("cf05"),p=n.n(d),v={data:function(){return{logo:p.a,dialog:!1}}},m=v,f=n("2877"),h=n("6544"),b=n.n(h),_=n("8336"),g=n("b0af"),y=n("99d9"),x=n("62ad"),V=n("169a"),w=n("ce7e"),k=n("132d"),S=n("adda"),C=n("0fd9"),I=n("2fa4"),j=Object(f["a"])(m,l,u,!1,null,null,null),L=j.exports;b()(j,{VBtn:_["a"],VCard:g["a"],VCardActions:y["a"],VCardSubtitle:y["b"],VCardText:y["c"],VCardTitle:y["d"],VCol:x["a"],VDialog:V["a"],VDivider:w["a"],VIcon:k["a"],VImg:S["a"],VRow:C["a"],VSpacer:I["a"]});var $={components:{AboutView:L},data:function(){return{repo:c}},methods:{checkicon:function(t){return"undefined"!=typeof t?t:"package-variant-closed"}},computed:{drawerState:{get:function(){return this.$store.state.drawerShow},set:function(t){return this.$store.commit("updateDrawer",t)}}}},A=$,T=n("553a"),O=n("56b0"),D=n("da13"),R=n("5d23"),B=n("34c3"),E=n("f774"),P=Object(f["a"])(A,i,s,!1,null,null,null),N=P.exports;b()(P,{VDivider:w["a"],VFooter:T["a"],VIcon:k["a"],VListGroup:O["a"],VListItem:D["a"],VListItemContent:R["b"],VListItemIcon:B["a"],VListItemSubtitle:R["c"],VListItemTitle:R["d"],VNavigationDrawer:E["a"],VSpacer:I["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{name:"color-picker-ui",adaptive:!0,height:"192",app:""}},[n("div",[n("swatches",{attrs:{"close-on-select":!0,inline:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)])},U=[],F=n("468d"),G=n.n(F),J=(n("2fac"),{data:function(){return{colors:["#F64272","#F6648B","#F493A7","#F891A6","#FFCCD5"]}},computed:{color:{get:function(){return this.$vuetify.theme.themes.light.primary},set:function(t){localStorage.colortheme=t,this.$vuetify.theme.themes.light.primary=t,this.$vuetify.theme.themes.dark.primary=t}}},components:{Swatches:G.a}}),q=J,K=Object(f["a"])(q,M,U,!1,null,null,null),W=K.exports,z={name:"App",components:{NavigationDrawer:N,ColorPicker:W},mounted:function(){localStorage.colortheme&&(this.$vuetify.theme.themes.light.primary=localStorage.colortheme,this.$vuetify.theme.themes.dark.primary=localStorage.colortheme),localStorage.dark&&(this.$vuetify.theme.dark=localStorage.dark)}},Y=z,H=(n("034f"),n("7496")),X=Object(f["a"])(Y,r,a,!1,null,null,null),Q=X.exports;b()(X,{VApp:H["a"]});var Z=n("9483");Object(Z["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var tt=n("8c4f"),et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MainAppBar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("PrimaryView"),n("v-footer",[n("v-col",{staticClass:"text-center"},[t._v(" UESTC Mirrors © "+t._s((new Date).getFullYear())+" ")])],1)],1)],1)],1)},nt=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{"elevate-on-scroll":"",color:"primary",dark:!0,app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",[t._v("UESTC Mirrors")])]),n("Search"),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-apps")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.toggleDark}},[n("v-icon",[t._v("mdi-invert-colors")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$modal.show("color-picker-ui")}}},[n("v-icon",[t._v("mdi-palette")])],1)],1)},rt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-autocomplete",{staticClass:"hidden-sm-and-down",attrs:{"return-object":"",flat:"",items:t.dists,"item-text":"name","item-value":"name","solo-inverted":!this.$vuetify.theme.dark,solo:this.$vuetify.theme.dark,"hide-details":"","prepend-inner-icon":"mdi-magnify",label:"客官, 今天想来点什么?"},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",[n("v-list-item-title",[t._v(" 貌似没要您想找的镜像... ")])],1)]},proxy:!0},{key:"item",fn:function(e){var o=e.item;return[n("v-list-item-avatar",{staticClass:"headline font-weight-light white--text",attrs:{color:"primary"}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-"+t._s(t.icon(o.icon)))])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(o.name)}}),n("v-list-item-subtitle",{domProps:{textContent:t._s(o.name)}})],1),n("v-list-item-action",[n("v-icon",[t._v("mdi-arrow-right-circle")])],1)]}}]),model:{value:t.searched,callback:function(e){t.searched=e},expression:"searched"}})},it=[],st=(n("b0c0"),n("4fc8")),ct={data:function(){return{dists:st,searched:null}},methods:{icon:function(t){return"undefined"!=typeof t?t:"package-variant-closed"}},watch:{searched:function(){this.$router.push("/"+this.searched.info+"/"+this.searched.name)}}},lt=ct,ut=n("c6a6"),dt=n("1800"),pt=n("8270"),vt=Object(f["a"])(lt,at,it,!1,null,null,null),mt=vt.exports;b()(vt,{VAutocomplete:ut["a"],VIcon:k["a"],VListItem:D["a"],VListItemAction:dt["a"],VListItemAvatar:pt["a"],VListItemContent:R["b"],VListItemSubtitle:R["c"],VListItemTitle:R["d"]});var ft={name:"AppBar",components:{Search:mt},data:function(){return{color:"#1CA085"}},methods:{toggleDrawer:function(){this.$store.commit("toggleDrawer")},toggleDark:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.dark=this.$vuetify.theme.dark}}},ht=ft,bt=(n("7004"),n("40dc")),_t=n("5bc1"),gt=n("2a7f"),yt=Object(f["a"])(ht,ot,rt,!1,null,"7c37822d",null),xt=yt.exports;b()(yt,{VAppBar:bt["a"],VAppBarNavIcon:_t["a"],VBtn:_["a"],VIcon:k["a"],VSpacer:I["a"],VToolbarTitle:gt["a"]});var Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",{},[n("v-card-title",{staticClass:"headline justify-center"},[t._v("UESTC 镜像站")]),n("v-card-subtitle",{staticClass:"text-center"},[t._v("本站由电子科技大学Linux用户组及电子科技大学网管会共同提供。 "),n("br"),t._v(" 本站共收录了"),n("b",[t._v("15")]),t._v("个Linux发行版镜像和"),n("b",[t._v("7")]),t._v("个软件包镜像。")]),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{color:"primary",large:"",outlined:"",to:"browse"}},[n("v-icon",[t._v("mdi-folder")]),t._v("浏览目录")],1),n("v-btn",{attrs:{color:"primary",large:"",outlined:"",to:"downloadiso"}},[n("v-icon",[t._v("mdi-album")]),t._v("下载ISO")],1)],1),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{attrs:{text:"",icon:"",color:"grey"},on:{click:function(e){return t.window.open("https://github.com/uestclug","_blank")}}},[n("v-icon",[t._v("mdi-github-circle")])],1),n("v-btn",{attrs:{text:"",icon:"",color:"blue"},on:{click:function(e){return t.window.open("https://t.me/joinchat/LgGQ2VXKXVu9fJpOlNgSDA","_blank")}}},[n("v-icon",[t._v("mdi-telegram")])],1),n("v-btn",{attrs:{text:"",icon:"",color:"brown"},on:{click:function(e){return t.window.open("mailto:lug.uestc@gmail.com","_blank")}}},[n("v-icon",[t._v("mdi-email")])],1),n("v-btn",{attrs:{text:"",icon:"",color:"purple"},on:{click:function(e){return t.window.open("https://jq.qq.com/?_wv=1027&k=54iKK8Y","_blank")}}},[n("v-icon",[t._v("mdi-qqchat")])],1)],1)],1)],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-row",t._l(t.dists,(function(e){return n("DistInfo",{key:e.name,attrs:{dist:e,status:t.getStatus(e.name)}})})),1)],1),n("NewsView")],1)},wt=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-card",{staticClass:"mx-auto"},[n("v-list",{attrs:{"two-line":"",subheader:""}},[n("v-skeleton-loader",{attrs:{loading:t.loading,"transition-group":"fade-transition",type:"list-item-two-line"}},[n("v-subheader",[t._v("镜像站公告")]),t._l(t.newslist,(function(e,o){return n("v-list-item",{key:o,attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.desc)}})],1),n("v-list-item-action",[n("v-list-item-action-text",{domProps:{textContent:t._s(e.time)}})],1)],1)}))],2)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{to:"/status",text:"",color:"primary"}},[t._v("镜像站状态")])],1)],1)],1)},St=[],Ct={data:function(){return{loading:!1,newslist:null,loaderr:!1}},mounted:function(){var t=this;this.$ajax.get("data/news.json").then((function(e){return t.newslist=e.data})).catch((function(){t.loaderr=!0})).then((function(){return t.loading=!1}))}},It=Ct,jt=n("8860"),Lt=n("3129"),$t=n("e0c7"),At=Object(f["a"])(It,kt,St,!1,null,null,null),Tt=At.exports;b()(At,{VBtn:_["a"],VCard:g["a"],VCardActions:y["a"],VCol:x["a"],VDivider:w["a"],VList:jt["a"],VListItem:D["a"],VListItemAction:dt["a"],VListItemActionText:R["a"],VListItemContent:R["b"],VListItemSubtitle:R["c"],VListItemTitle:R["d"],VSkeletonLoader:Lt["a"],VSpacer:I["a"],VSubheader:$t["a"]});var Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"6",lg:"4",sm:"6"}},[n("v-card",{attrs:{to:t.dist.info,hover:"",id:"infocard-"+t.dist.name,loading:t.loading}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-4"},[t._v(t._s(t.disttype))]),n("v-list-item-title",{staticClass:"headline mb-1"},[n("v-icon",{attrs:{large:""}},[t._v("mdi-"+t._s(t.icon))]),t._v(" "+t._s(t.dist.name))],1),n("v-list-item-subtitle",[t._v(t._s(t.statusInfo))])],1)],1)],1)],1)},Dt=[],Rt=(n("2ca0"),{props:["dist","status"],computed:{icon:function(){return"undefined"!=typeof this.dist.icon?this.dist.icon:"package-variant-closed"},statusInfo:function(){if(null!=this.status){if("success"===this.status.status){var t=new Date(1e3*this.status.updated),e=t.getFullYear()+"-";return e+=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",e+=t.getDate()+" ",e+=t.getHours()+":",e+=t.getMinutes(),"更新时间："+e}if("failed"===this.status.status)return"更新失败";if("syncing"===this.status.status)return"更新中"}return"未知"},loading:function(){if(null!=this.status){if("syncing"===this.status.status)return!0;if("failed"===this.status.status)return"error"}return!1},disttype:function(){return"undefined"!=typeof this.dist.info?this.dist.info.startsWith("app")?"应用程序":this.dist.info.startsWith("repo")?"Linux发行版":"未知":"未知"}}}),Bt=Rt,Et=Object(f["a"])(Bt,Ot,Dt,!1,null,null,null),Pt=Et.exports;b()(Et,{VCard:g["a"],VCol:x["a"],VIcon:k["a"],VListItem:D["a"],VListItemContent:R["b"],VListItemSubtitle:R["c"],VListItemTitle:R["d"]});var Nt={components:{NewsView:Tt,DistInfo:Pt},data:function(){return{dists:st,status:null}},methods:{getStatus:function(t){return null!=this.status?this.status[t]:null}},mounted:function(){var t=this;this.$ajax.get("/data/status.json").then((function(e){return t.status=e.data}))}},Mt=Nt,Ut=Object(f["a"])(Mt,Vt,wt,!1,null,null,null),Ft=Ut.exports;b()(Ut,{VBtn:_["a"],VCard:g["a"],VCardActions:y["a"],VCardSubtitle:y["b"],VCardTitle:y["d"],VCol:x["a"],VIcon:k["a"],VRow:C["a"]});var Gt={name:"home",components:{MainAppBar:xt,PrimaryView:Ft}},Jt=Gt,qt=n("a523"),Kt=n("a75b"),Wt=Object(f["a"])(Jt,et,nt,!1,null,"8e857bc6",null),zt=Wt.exports;b()(Wt,{VCol:x["a"],VContainer:qt["a"],VContent:Kt["a"],VFooter:T["a"]});var Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ExtendedAppBar",{attrs:{repo:t.thisrepo},scopedSlots:t._u([{key:"tabcontent",fn:function(){return[n("v-tabs",{attrs:{"show-arrows":"","align-with-title":"","center-active":"","background-color":"primary"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{attrs:{href:"#tab-home"}},[t._v("简介")]),t._l(t.thisrepo.dist_url,(function(e){return n("v-tab",{key:e.url,attrs:{href:"#tab-"+e.url}},[t._v(t._s(e.name))])}))],2),n("v-btn",{attrs:{color:"primary",dark:"",absolute:"",bottom:"",right:"",fab:"",to:"/downloadiso"}},[n("v-icon",[t._v("mdi-download")])],1)]},proxy:!0}])}),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{attrs:{value:"tab-home"}},[n("v-card",{staticStyle:{height:"80vh"}},[t._v(" Test"),n("br"),t._v("Test"),n("br"),t._v("Test"),n("br"),t._v("Test"),n("br"),t._v("Test"),n("br"),t._v("Test"),n("br"),t._v("Test"),n("br"),t._v("Test"),n("br")])],1),t._l(t.thisrepo.dist_url,(function(e){return n("v-tab-item",{key:e.url,attrs:{value:"tab-"+e.url}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card-text",[t._v("访问地址："),n("code",[t._v("https://mirrors.uestc.cn/"+t._s(e.url))]),n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.copylink("https://mirrors.uestc.cn/"+e.url)}}},[n("v-icon",[t._v("mdi-content-copy")])],1),n("v-snackbar",{model:{value:t.copyLinkBar,callback:function(e){t.copyLinkBar=e},expression:"copyLinkBar"}},[t._v(" 链接已复制 "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.copyLinkBar=!1}}},[t._v(" 关闭 ")])],1)],1),n("v-divider"),n("RepoDocView",{attrs:{doc:e.url}})],1)],1)],1)}))],2)],1)],1)],1)},Ht=[],Xt=(n("7db0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{"shrink-on-scroll":"",prominent:"","elevate-on-scroll":"",color:"primary",dark:!0,app:""},scopedSlots:t._u([{key:"extension",fn:function(){return[t._t("tabcontent")]},proxy:!0}],null,!0)},[n("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("v-icon",[t._v("mdi-"+t._s(t.repo.icon))]),t._v(" "),n("span",[t._v(t._s(t.repo.name))])],1),n("Search"),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-apps")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.toggleDark}},[n("v-icon",[t._v("mdi-invert-colors")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$modal.show("color-picker-ui")}}},[n("v-icon",[t._v("mdi-palette")])],1)],1)}),Qt=[],Zt={name:"AppBar",components:{Search:mt},data:function(){return{color:"#1CA085"}},props:["repo"],computed:{thisrepo:function(){return void 0!=this.$route.params.reponame?this.findRepos(this.$route.params.reponame):[]},thisapp:function(){return void 0!=this.$route.params.appname?this.findApp(this.$route.params.reponame):[]}},methods:{toggleDrawer:function(){this.$store.commit("toggleDrawer")},toggleDark:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.dark=this.$vuetify.theme.dark}}},te=Zt,ee=(n("7262"),Object(f["a"])(te,Xt,Qt,!1,null,"28dd4f5b",null)),ne=ee.exports;b()(ee,{VAppBar:bt["a"],VAppBarNavIcon:_t["a"],VBtn:_["a"],VIcon:k["a"],VSpacer:I["a"],VToolbarTitle:gt["a"]});var oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card-text",[n("v-skeleton-loader",{attrs:{loading:t.loading,transition:"fade-transition",height:"100vh",type:"article"}},[t.docerr?t._e():n("VueShowdown",{attrs:{markdown:t.mdtext}}),t.docerr?n("v-layout",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-btn",{attrs:{icon:"",large:"",target:"_blank"}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-selection-off")])],1),n("span",[t._v("哦豁，文档不见了")])],1)],1):t._e()],1)],1)},re=[],ae=(n("d3b7"),{data:function(){return{loading:!0,docerr:!1,mdtext:null}},props:["doc"],mounted:function(){var t=this;this.$ajax.get("doc/"+this.doc+".md").then((function(e){return t.mdtext=e.data})).catch((function(){t.docerr=!0})).finally((function(){return t.loading=!1}))}}),ie=ae,se=n("a722"),ce=Object(f["a"])(ie,oe,re,!1,null,null,null),le=ce.exports;b()(ce,{VBtn:_["a"],VCardText:y["c"],VIcon:k["a"],VLayout:se["a"],VRow:C["a"],VSkeletonLoader:Lt["a"]});var ue={name:"repo",data:function(){return{tab:"tab-home",copyLinkBar:!1}},components:{ExtendedAppBar:ne,RepoDocView:le},computed:{thisrepo:function(){return this.findRepos(this.$route.params.reponame)}},methods:{copylink:function(t){this.$copyText(t),this.copyLinkBar=!0},findRepos:function(t){return c.linux.find((function(e){return e.id===t}))}},mounted:function(){"undefined"!=typeof this.$route.params.tab&&(this.tab="tab-"+this.$route.params.tab)}},de=ue,pe=n("2db4"),ve=n("71a3"),me=n("c671"),fe=n("fe57"),he=n("aac8"),be=Object(f["a"])(de,Yt,Ht,!1,null,"7ec16308",null),_e=be.exports;b()(be,{VBtn:_["a"],VCard:g["a"],VCardText:y["c"],VCol:x["a"],VContainer:qt["a"],VContent:Kt["a"],VDivider:w["a"],VIcon:k["a"],VRow:C["a"],VSnackbar:pe["a"],VTab:ve["a"],VTabItem:me["a"],VTabs:fe["a"],VTabsItems:he["a"]});var ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MainAppBar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-list",{staticClass:"mx-auto",attrs:{subheader:"",dense:""}},[n("v-subheader",{attrs:{inset:""}},[t._v("镜像列表")]),t._l(t.dir,(function(e){return n("v-list-item",{key:e.name,attrs:{to:"/"+e.name}},[n("v-list-item-avatar",[n("v-icon",[t._v("mdi-folder")])],1),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1),"undefined"!=typeof e.info?n("v-list-item-action",[n("v-btn",{attrs:{icon:"",to:"/"+e.info}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1):t._e()],1)})),n("v-divider",{attrs:{inset:""}})],2)],1)],1)],1)],1)],1)},ye=[],xe={name:"browse",components:{MainAppBar:xt},data:function(){return{dir:st}}},Ve=xe,we=Object(f["a"])(Ve,ge,ye,!1,null,"2c556bfe",null),ke=we.exports;b()(we,{VBtn:_["a"],VCol:x["a"],VContainer:qt["a"],VContent:Kt["a"],VDivider:w["a"],VIcon:k["a"],VList:jt["a"],VListItem:D["a"],VListItemAction:dt["a"],VListItemAvatar:pt["a"],VListItemContent:R["b"],VListItemTitle:R["d"],VRow:C["a"],VSubheader:$t["a"]});var Se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MainAppBar"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("ISOWizard")],1)],1)],1)],1)],1)},Ce=[],Ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[n("v-stepper-header",[n("v-stepper-step",{attrs:{complete:t.e1>1,step:"1",editable:t.e1>1}},[t._v(" 选择发行版 ")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.e1>2,step:"2",editable:t.e1>2}},[t._v(" 选择版本 ")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.e1>3,step:"3",editable:t.e1>3}},[t._v(" 选择架构 ")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.e1>4,step:"4",editable:t.e1>4}},[t._v(" 选择文件格式 ")]),n("v-divider"),n("v-stepper-step",{attrs:{complete:t.e1>5,step:"5",editable:t.e1>5}},[t._v(" 完成 ")])],1),n("v-stepper-items",[n("v-stepper-content",{attrs:{step:"1"}},[n("v-card-title",[t._v("选择发行版")]),n("v-item-group",{model:{value:t.dist_selected,callback:function(e){t.dist_selected=e},expression:"dist_selected"}},[n("v-row",t._l(t.isolist,(function(e){return n("v-item",{key:e.name,attrs:{value:e.versions},scopedSlots:t._u([{key:"default",fn:function(o){var r=o.active,a=o.toggle;return[n("v-col",{attrs:{cols:"12",md:"4",lg:"3",sm:"6"}},[n("v-card",{attrs:{color:r?"primary":""},on:{click:a}},[n("v-card-title",[n("v-icon",[t._v(t._s(t.icon(e.icon)))]),t._v(" "+t._s(e.name))],1)],1)],1)]}}],null,!0)})})),1)],1),n("v-divider"),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",disabled:null==t.dist_selected},on:{click:function(e){return t.nextStep(1)}}},[t._v(" 继续 ")])],1)],1),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card-title",[t._v("选择版本")]),n("v-item-group",{model:{value:t.version_selected,callback:function(e){t.version_selected=e},expression:"version_selected"}},[n("v-row",t._l(t.dist_selected,(function(e){return n("v-item",{key:e.name,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(o){var r=o.active,a=o.toggle;return[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{color:r?"primary":""},on:{click:a}},[n("v-card-title",[n("v-icon",[t._v("mdi-information-outline")]),t._v(" "+t._s(e.name))],1)],1)],1)]}}],null,!0)})})),1)],1),n("v-btn",{attrs:{color:"primary",disabled:null==t.version_selected},on:{click:function(e){return t.nextStep(2)}}},[t._v(" 继续 ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.prevStep(2)}}},[t._v("返回")])],1),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card-title",[t._v("选择架构")]),n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.nextStep(3)}}},[t._v(" 继续 ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.prevStep(3)}}},[t._v("返回")])],1),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card-title",[t._v("选择文件格式")]),n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.nextStep(4)}}},[t._v(" 继续 ")]),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.prevStep(4)}}},[t._v("返回")])],1),n("v-stepper-content",{attrs:{step:"5"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-1",height:"200px"}}),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.prevStep(5)}}},[t._v("返回")])],1)],1)],1)},je=[],Le=n("969f"),$e={data:function(){return{e1:1,isolist:Le,dist_selected:null,version_selected:null}},watch:{steps:function(t){this.e1>t&&(this.e1=t)}},methods:{icon:function(t){return"undefined"!=typeof t?"mdi-"+t:"mdi-package-variant-closed"},nextStep:function(t){this.e1=t+1},prevStep:function(t){this.e1=t-1}}},Ae=$e,Te=n("d903"),Oe=n("604c"),De=n("7e85"),Re=n("e516"),Be=n("9c54"),Ee=n("56a4"),Pe=Object(f["a"])(Ae,Ie,je,!1,null,null,null),Ne=Pe.exports;b()(Pe,{VBtn:_["a"],VCard:g["a"],VCardActions:y["a"],VCardTitle:y["d"],VCol:x["a"],VDivider:w["a"],VIcon:k["a"],VItem:Te["a"],VItemGroup:Oe["b"],VRow:C["a"],VStepper:De["a"],VStepperContent:Re["a"],VStepperHeader:Be["a"],VStepperItems:Be["b"],VStepperStep:Ee["a"]});var Me={name:"ISO",components:{MainAppBar:xt,ISOWizard:Ne}},Ue=Me,Fe=Object(f["a"])(Ue,Se,Ce,!1,null,"52070f5a",null),Ge=Fe.exports;b()(Fe,{VCol:x["a"],VContainer:qt["a"],VContent:Kt["a"],VRow:C["a"]}),o["a"].use(tt["a"]);var Je=[{path:"/",name:"home",component:zt},{path:"/repo/:reponame/:tab?",name:"repo",component:_e},{path:"/browse",name:"browse",component:ke},{path:"/downloadiso/:repo?/:version?/:arch?",name:"downloadiso",component:Ge}],qe=new tt["a"]({mode:"history",base:"/",routes:Je}),Ke=qe,We=n("2f62");o["a"].use(We["a"]);var ze=new We["a"].Store({actions:{},modules:{},state:{drawerShow:!1},mutations:{toggleDrawer:function(t){t.drawerShow=!t.drawerShow},updateDrawer:function(t,e){t.drawerShow=e}}}),Ye=n("f309");o["a"].use(Ye["a"]);var He=new Ye["a"]({theme:{themes:{light:{}}}}),Xe=n("1881"),Qe=n.n(Xe),Ze=n("866c"),tn=n.n(Ze),en=n("4eb5"),nn=n.n(en),on=n("bc3a"),rn=n.n(on);rn.a.defaults.baseURL="/",o["a"].prototype.$ajax=rn.a,o["a"].use(Qe.a),o["a"].use(tn.a,{flavor:"github"}),nn.a.config.autoSetContainer=!0,o["a"].use(nn.a),o["a"].config.productionTip=!1,new o["a"]({router:Ke,store:ze,vuetify:He,render:function(t){return t(Q)}}).$mount("#app")},7004:function(t,e,n){"use strict";var o=n("25c1"),r=n.n(o);r.a},7262:function(t,e,n){"use strict";var o=n("c997"),r=n.n(o);r.a},"8a23":function(t,e,n){},"91d2":function(t){t.exports=JSON.parse('{"app":[{"name":"Adobe Fonts","id":"adobe-fonts","icon":"adobe","url":"adobe-fonts"},{"name":"Anthon","id":"anthon","url":"anthon"},{"name":"F-droid","id":"anthon","icon":"cellphone-android","url":"f-droid"},{"name":"GNU","id":"gnu","url":"gnu"},{"name":"Nginx","id":"nginx","url":"nginx"},{"name":"NodeJs","icon":"nodejs","id":"nodejs-release","url":"nodejs-release"},{"name":"NodeJs Source","icon":"nodejs","id":"nodesource","url":"nodesource"}],"linux":[{"name":"Alpine","id":"alpine","dist_url":[{"name":"Repo","type":"repo","url":"alpine"}]},{"name":"Arch Linux","id":"archlinux","icon":"arch","dist_url":[{"name":"Repo","type":"repo","url":"archlinux"},{"name":"Archlinux CN","type":"repo","url":"archlinuxcn"},{"name":"CK Repo","type":"repo","url":"repo-ck"}]},{"name":"Centos","id":"centos","icon":"centos","dist_url":[{"name":"Repo","type":"repo","url":"centos"}]},{"name":"Debian","id":"debian","icon":"debian","dist_url":[{"name":"ISO","type":"iso","url":"debian-cd"},{"name":"Repo","type":"repo","url":"debian"},{"name":"Security","type":"repo","url":"debian-security"}]},{"name":"Deepin","id":"deepin","dist_url":[{"name":"Repo","type":"repo","url":"deepin"}]},{"name":"Fedora","id":"fedora","icon":"fedora","dist_url":[{"name":"Repo","type":"repo","url":"fedora"}]},{"name":"Kali","id":"kali","dist_url":[{"name":"ISO","type":"iso","url":"kali-images"},{"name":"Repo","type":"repo","url":"kali"}]},{"name":"Linux Mint","id":"mint","icon":"linux-mint","dist_url":[{"name":"Repo","type":"repo","url":"mint"}]},{"name":"Manjaro","id":"manjaro","dist_url":[{"name":"Repo","type":"repo","url":"manjaro"}]},{"name":"OpenSUSE","id":"opensuse","dist_url":[{"name":"Repo","type":"repo","url":"opensuse"}]},{"name":"OpenWRT","id":"openwrt","dist_url":[{"name":"Repo","type":"repo","url":"openwrt"}]},{"name":"Proxmox","id":"proxmox","dist_url":[{"name":"Repo","type":"repo","url":"proxmox"}]},{"name":"Raspbian","id":"raspbian","icon":"raspberry-pi","dist_url":[{"name":"Repo","type":"repo","url":"raspbian"}]},{"name":"Termux","id":"termux","dist_url":[{"name":"Repo","type":"repo","url":"termux"}]},{"name":"Ubuntu","id":"ubuntu","icon":"ubuntu","dist_url":[{"name":"ISO","type":"iso","url":"ubuntu-cdimage"},{"name":"Releases ISO","type":"iso","url":"ubuntu-releases"},{"name":"Repo","type":"repo","url":"ubuntu"}]}]}')},"969f":function(t){t.exports=JSON.parse('[{"name":"Arch Linux","icon":"arch","versions":[{"name":"2020.01.01","arch":{"name":"x86_64","url":"/archlinux/iso/latest/archlinux-2020.01.01-x86_64.iso"}}]}]')},c997:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.d2a65f09.png"}});
//# sourceMappingURL=app.a4b5d2a1.js.map