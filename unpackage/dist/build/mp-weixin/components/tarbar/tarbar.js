(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tarbar/tarbar"],{"009b":function(e,t,n){"use strict";var a=n("f42f"),i=n.n(a);i.a},"62a7":function(e,t,n){"use strict";n.r(t);var a=n("88f8"),i=n.n(a);for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);t["default"]=i.a},6401:function(e,t,n){"use strict";n.r(t);var a=n("f8c6"),i=n("62a7");for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);n("009b");var o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"cf69942e",null,!1,a["a"],void 0);t["default"]=r.exports},"88f8":function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("2ef0")),c={data:function(){return{tabBar:{color:"#909399",selectedColor:"#303133",backgroundColor:"#FFFFFF",borderStyle:"black",list:[{pagePath:"/pages/index/index",iconPath:"/static/uview/example/component.png",selectedIconPath:"/static/uview/example/component_select.png",text:"首页"},{pagePath:"/pages/commodity/index",iconPath:"/static/uview/example/commodity-two.png",selectedIconPath:"/static/uview/example/commodity.png",text:"商品"},{pagePath:"/pages/vehicle/index",iconPath:"/static/uview/example/js.png",selectedIconPath:"/static/uview/example/js_select.png",text:"购物车"},{pagePath:"/pages/my/index",iconPath:"/static/uview/example/template.png",selectedIconPath:"/static/uview/example/template_select.png",text:"我的"}]},paddingBottomHeight:0,selected:this.current,noClick:!0}},watch:{current:{handler:function(t){this.current=t;e.setNavigationBarTitle({title:this.tabBar.list[t].text})},immediate:!0}},props:{current:{type:[Number,String],default:0}},methods:{setSelected:i.default.debounce((function(t,n){this.selected!=t&&(this.selected=t,e.redirectTo({url:n}),this.$emit("change",t))}),1e3,{leading:!0,trailing:!1})},created:function(){var t=this;e.getSystemInfo({success:function(e){["X","XR","XS","11","12"].forEach((function(n){-1!=e.model.indexOf(n)&&-1!=e.model.indexOf("iPhone")&&(t.paddingBottomHeight=40)}))}})}};t.default=c}).call(this,n("543d")["default"])},f42f:function(e,t,n){},f8c6:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tarbar/tarbar-create-component',
    {
        'components/tarbar/tarbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6401"))
        })
    },
    [['components/tarbar/tarbar-create-component']]
]);