(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/topaid"],{"4d17":function(t,e,i){"use strict";i.r(e);var n=i("e2ed"),r=i("ecb3");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("c915");var a=i("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"2e532840",null,!1,n["a"],void 0);e["default"]=s.exports},"5a45":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{Height:"810",background:"none",page:{status:"loadMore",pageNum:1,pageSize:10},cardCode:"",price:0,list:[],buts:[],oobj:{}}},watch:{list:{handler:function(){for(var t=0;t<this.list[0].omsOrderItemEntityList.length;t++)this.price+=Number(this.list[0].omsOrderItemEntityList[t].skuQuantity)*Number(this.list[0].omsOrderItemEntityList[t].skuPrice);this.price=this.price.toFixed(2)}},deep:!0},onLoad:function(e){var i=JSON.parse(decodeURIComponent(e.list));this.oobj=i,"0"===i.orderStatus?t.setNavigationBarTitle({title:"待付款"}):"1"===i.orderStatus?t.setNavigationBarTitle({title:"待送货"}):"2"===i.orderStatus?t.setNavigationBarTitle({title:"送货中"}):"3"===i.orderStatus?t.setNavigationBarTitle({title:"已送完"}):"6"===i.orderStatus&&t.setNavigationBarTitle({title:"已关闭"}),this.getAppHeight(),this.getOrderList(i.batchId),this.getbuts(i.orderStatus)},methods:{handerCode:function(){var e=this;this.list.forEach((function(i){e.cardCode&&e.$u.api.queryByCardCode({cardCode:e.cardCode,skuId:i.omsOrderItemEntityList[0].skuId}).then((function(n){i.omsOrderItemEntityList[0].cardCode=e.cardCode,t.showToast({title:"有效提货码"})})).catch((function(e){t.showToast({title:e.msg})}))}))},operationBtn:function(t){switch(t){case"待付款":this.topaid();break;case"取消订单":this.cancelOrder();break;case"去复购":this.repurchase();break;case"提醒发货":this.remindDelivery();break;case"确认收货":this.confirmReceipt();break;case"查看物流":this.checkLogistics();break;case"申请退款":this.refund();break}},topaid:function(){var e=[],i=[],n=[];this.list[0].omsOrderItemEntityList.map((function(t){e.push(t.spuId),i.push(t.skuId),n.push(t.skuQuantity)})),t.navigateTo({url:"/pages/order/confirmOrder?supId="+e.join(",")+"&skuId="+i.join(",")+"&num="+n.join(",")+"&orderSn="+this.list[0].orderSn+"&batchId="+this.list[0].batchId})},cancelOrder:function(){var e=t.getStorageSync("current");this.$u.api.updateStatus({orderSn:this.list[0].orderSn,orderStatus:"6",deliverySn:""}).then((function(i){t.showToast({title:"已取消订单"}),t.reLaunch({url:"/pages/order/index?current="+e+"&orderStatus=0"})})).catch()},refund:function(){var e=this.oobj,i=-1;e.totalCanRefundNum<=0&&(i=2),3==e.payType?i=0:1==e.payType&&(i=1),i>-1?t.showModal({title:"提示",content:["该订单为月付订单，不可申请退款","该订单为先送后付订单，不可申请退款","该订单为可退数量为0，不可申请退款"][i],confirmColor:"black",showCancel:!1,confirmText:"确定",success:function(t){t.confirm&&console.log("没有操作")}}):t.navigateTo({url:"/pages/my/torefund?id="+e.id+"&orderSn="+e.orderSn+"&payAmount="+e.payAmount+"&omsOrderItemEntityList="+encodeURIComponent(JSON.stringify(e.omsOrderItemEntityList))+"&totalRefundAmount="+e.totalRefundAmount+"&totalCanRefundNum="+e.totalCanRefundNum})},repurchase:function(){console.log("去复购")},remindDelivery:function(){console.log("提醒发货")},confirmReceipt:function(){console.log("确认收货")},checkLogistics:function(){console.log("查看物流")},getbuts:function(t){switch(t){case"0":this.buts=["取消订单","待付款"];break;case"1":this.buts=["申请退款"];break;case"2":this.buts=["申请退款"];break}},getOrderList:function(t){var e=this;this.$u.api.queryOrder({batchId:t}).then((function(t){console.log(t),e.list=t})).catch()},getAppHeight:function(){this.Height=t.getSystemInfoSync().windowHeight+"px"}}};e.default=i}).call(this,i("543d")["default"])},"7b74":function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("3afe");n(i("66fd"));var r=n(i("4d17"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(r.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},c915:function(t,e,i){"use strict";var n=i("de33"),r=i.n(n);r.a},de33:function(t,e,i){},e2ed:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uCellGroup:function(){return i.e("uview-ui/components/u-cell-group/u-cell-group").then(i.bind(null,"0e04"))},uCellItem:function(){return i.e("uview-ui/components/u-cell-item/u-cell-item").then(i.bind(null,"3a43"))}},r=function(){var t=this.$createElement;this._self._c},o=[]},ecb3:function(t,e,i){"use strict";i.r(e);var n=i("5a45"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a}},[["7b74","common/runtime","common/vendor"]]]);