(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/feedback"],{"378b":function(t,e,n){"use strict";n.r(e);var i=n("6d30"),u=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=u.a},4340:function(t,e,n){"use strict";n.r(e);var i=n("47f3"),u=n("378b");for(var o in u)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(o);n("d0ce");var a=n("f0c5"),r=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"726f230a",null,!1,i["a"],void 0);e["default"]=r.exports},"47f3":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"438b"))},uUpload:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-upload/u-upload")]).then(n.bind(null,"44df"))}},u=function(){var t=this.$createElement;this._self._c},o=[]},5764:function(t,e,n){},"6d30":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{Height:"",action:"https://api.xianghuikejiapp.com/zxh/UploadPictures/upload",value:"",reson:"",imgLists:[]}},methods:{getAppHeight:function(){this.Height=t.getSystemInfoSync().windowHeight+"px"},commit:function(){for(var e=this.$refs.uUpload.lists,n=[],i=0;i<e.length;i++)n.push(e[i].url);if(this.imgLists=n,0!=this.imgLists.length&&this.value){var u=this.imgLists.toString();this.$u.api.userfeedback({content:this.reson,title:this.value,imgUrl:u}).then((function(e){t.showToast({title:"反馈成功"}),t.redirectTo({url:"/pages/my/index"})})).catch()}else t.showToast({title:"请填写反馈信息",type:"error"})}},onLoad:function(){this.getAppHeight()}};e.default=n}).call(this,n("543d")["default"])},c251:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("3afe");i(n("66fd"));var u=i(n("4340"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(u.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},d0ce:function(t,e,n){"use strict";var i=n("5764"),u=n.n(i);u.a}},[["c251","common/runtime","common/vendor"]]]);