(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{3908:function(e,n,t){},7290:function(e,n,t){"use strict";t.r(n);var a=t("a889"),i=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=i.a},"85ea":function(e,n,t){"use strict";(function(e,n){var a=t("4ea4");t("3afe");a(t("66fd"));var i=a(t("a2cd"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},a2cd:function(e,n,t){"use strict";t.r(n);var a=t("eab7"),i=t("7290");for(var o in i)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(o);t("e4b6");var c=t("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"4721997b",null,!1,a["a"],void 0);n["default"]=r.exports},a889:function(e,n,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("7e29")),o={data:function(){return{code:"",openid:"",iv:"",encryptedData:"",appId:"",sessionkey:"",userInfo:{iv:"",encryptedData:""},phone:"",isLogin:!0,nickName:"",avatarUrl:"",isCanUse:e.getStorageSync("isCanUse")||!0}},onLoad:function(){this.login()},methods:{wxLogin:function(){var n=this;this.$u.api.wxLogin({openId:this.openid,userHeader:this.avatarUrl,userName:this.nickName,userPhone:this.phone}).then((function(t){e.setStorageSync("token",t),e.navigateBack(),n.$u.api.whetherRenewalNotice().then((function(n){null!==n&&void 0!==n&&n.flag&&e.showModal({title:"提示",content:n.note,cancelColor:"black",confirmColor:"black",showCancel:!0,cancelText:"已知晓",confirmText:"立即续订",success:function(n){n.confirm&&e.navigateTo({url:"/pages/commodity/index"})}})}))})).catch((function(e){n.$u.toast(e.data.message)}))},PhoneNumber:function(n){if("getPhoneNumber:ok"==n.detail.errMsg){this.encryptedData=n.detail.encryptedData,this.iv=n.detail.iv;var t=new i.default(this.appId,this.sessionkey),a=t.decryptData(this.encryptedData,n.detail.iv);e.setStorageSync("phoneNumber",a.phoneNumber),this.phone=a.purePhoneNumber,this.wxLogin()}},wxGetUserInfo:function(){var n=this;e.showLoading({title:"拉取授权中"}),e.getUserProfile({desc:"授权登录",lang:"zh_CN",success:function(t){console.log(t),n.nickName=t.userInfo.nickName,n.avatarUrl=t.userInfo.avatarUrl;try{n.isLogin=!1,e.setStorageSync("isCanUse",!1),e.hideLoading()}catch(a){}},fail:function(e){}})},login:function(){var n=this;e.login({provider:"weixin",success:function(t){n.code=t.code,n.$u.api.wxgetUserInfo({code:n.code}).then((function(t){n.openid=t.openId,n.appId=t.appId,n.sessionkey=t.sessionKey,e.setStorageSync("openid",n.openid)})).catch((function(e){console.log(e)}))}})}}};n.default=o}).call(this,t("543d")["default"])},e4b6:function(e,n,t){"use strict";var a=t("3908"),i=t.n(a);i.a},eab7:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]}},[["85ea","common/runtime","common/vendor"]]]);