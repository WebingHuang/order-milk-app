(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/capital/addcard"],{"160c":function(e,t,n){"use strict";n.r(t);var r=n("8652"),u=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},"4fa7":function(e,t,n){"use strict";var r=n("ff3c"),u=n.n(r);u.a},"69dc":function(e,t,n){"use strict";n.r(t);var r=n("dd6e"),u=n("160c");for(var a in u)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("4fa7");var i=n("f0c5"),o=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=o.exports},8652:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{Height:"",tips:"",seconds:60,form:{cardNumber:"",cardholder:"",IdNumber:"",phoneNumber:"",verify:"666"},rules:{cardNumber:[{required:!0,message:"请输入卡号",trigger:["change","blur"]},{pattern:/^\d{16}|\d{19}$/,transform:function(e){return String(e)},message:"银卡输入不正确",trigger:["change","blur"]}],verify:[{required:!0,message:"请输入验证码",trigger:["change","blur"]}],cardholder:[{required:!0,message:"请输入持卡人",trigger:["change","blur"]},{pattern:/^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/,transform:function(e){return String(e)},message:"请输入正确的持卡人",trigger:["change","blur"]}],IdNumber:[{required:!0,message:"请输入身份证",trigger:["change","blur"]},{pattern:/^(\d{18,18}|\d{15,15}|\d{17,17}X)$/,transform:function(e){return String(e)},message:"请输入正确的身份证",trigger:["change","blur"]}],phoneNumber:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{pattern:/^1[3|4|5|7|8][0-9]{9}$/,transform:function(e){return String(e)},message:"请输入正确的手机号",trigger:["change","blur"]}]}}},onLoad:function(){this.getAppHeight()},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{codeChange:function(e){parseInt(e)?this.tips=parseInt(e)+"S":this.tips=e},getCode:function(){var t=this;""!=this.form.phoneNumber?this.$refs.uCode.canGetCode?(e.showLoading({title:"正在获取验证码"}),this.$u.api.getMessageCode({phone:this.form.phoneNumber}).then((function(e){t.$u.toast("验证码已发送"),t.$refs.uCode.start(),t.form.verify=e.data})).catch((function(e){t.$u.toast(e.data.message)}))):this.$u.toast("倒计时结束后再发送"):this.$u.toast("请输入手机号")},end:function(){this.$u.toast("倒计时结束")},start:function(){this.$u.toast("已发送")},toaddcard:function(){var t=this;this.$refs.uForm.validate((function(n){n?t.$u.api.queryByBank({bank:t.form.cardNumber}).then((function(n){t.$u.api.BindingBankCard({bankCardFront:t.form.cardNumber,idCard:t.form.IdNumber,mobile:t.form.phoneNumber,userName:t.form.cardholder,messageCode:t.form.verify}).then((function(t){e.navigateBack()})).catch((function(e){t.$u.toast(e.msg)}))})).catch((function(e){e.data||t.$u.toast("银行卡已存在")})):console.log("验证失败")}))},getAppHeight:function(){this.Height=e.getSystemInfoSync().windowHeight+"px"}}};t.default=n}).call(this,n("543d")["default"])},dd6e:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uForm:function(){return n.e("uview-ui/components/u-form/u-form").then(n.bind(null,"839a"))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,"5a25"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"438b"))}},u=function(){var e=this.$createElement;this._self._c},a=[]},f38c:function(e,t,n){"use strict";(function(e,t){var r=n("4ea4");n("3afe");r(n("66fd"));var u=r(n("69dc"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(u.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},ff3c:function(e,t,n){}},[["f38c","common/runtime","common/vendor"]]]);