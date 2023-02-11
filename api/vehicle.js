

const api = {
	getSwiper:"/sys/staticInfo/querySliList", //获取轮播图
	addShoppingCart:'/om/applet/ProductShopInfo/SaveOrUpdateProductShopInfo', //加入购物车
	getShoppingCartList:'/om/applet/ProductShopInfo/queryShopInfoByUserCode', //查询购物车列表
	// addAddress:'/om/sys/sysaddress/SaveOrUpdateAddress' ,//添加地址
	addOrUpdateStuInformation:'/om/sys/addOrUpdateStuInformation' ,//添加地址
	queryUserInformation:'/om/sys/queryUserInformation' ,//地址查询
	preferredAddress:'/om/sys/sysaddress/DefaultAddress' ,//设置默认地址
	getAddressList:'/om/sys/sysaddress/getUserAddr' ,//查询用户地址列表
	queryAddress:'/om/sys/sysaddress/queryAddress' ,//查询用户地址
	addOrder:'/om/common/OmsOrder/addOrder', //新增订单
	queryByCardCode:'/om/shop/queryByCardCode' ,//查询是否有绑定提货码
	getPaySign:'/om/api/wechatpay/pay.do', //微信订单支付接口
	findByOrders:'/om/common/OmsOrder/findByOrders' ,//查询订单
	payCallback:'/om/api/wechatpay/wechatpay_callback_shsd', //支付回调
	querySchoolsAndClass: '/om/sys/querySchoolsAndClass', // 学校列表
}




export function vehicleApi(vm) {
	
	let getSwiper = (params = {}) => vm.$u.post(api.getSwiper, params);
	let addShoppingCart = (params = {}) => vm.$u.post(api.addShoppingCart, params);
	// let addAddress = (params = {}) => vm.$u.post(api.addAddress, params);
	let addOrUpdateStuInformation = (params = {}) => vm.$u.post(api.addOrUpdateStuInformation, params);
	let queryUserInformation = (params = {}) => vm.$u.post(api.queryUserInformation, params);
	let preferredAddress = (params = {}) => vm.$u.post(api.preferredAddress, params);
	let getShoppingCartList = (params = {}) => vm.$u.post(api.getShoppingCartList, params);
	let getAddressList = (params = {}) => vm.$u.get(api.getAddressList, params);
	let queryAddress = (params = {}) => vm.$u.get(api.queryAddress, params);
	let addOrder = (params = {}) => vm.$u.post(api.addOrder, params);
	let queryByCardCode = (params = {}) => vm.$u.get(api.queryByCardCode, params);
	let getPaySign = (params = {}) => vm.$u.get(api.getPaySign, params);
	let findByOrders = (params = {}) => vm.$u.post(api.findByOrders, params);
	let payCallback = (params = {}) => vm.$u.post(api.payCallback, params);
	let querySchoolsAndClass = (params = {}) => vm.$u.post(api.querySchoolsAndClass, params);

	return {
		addShoppingCart,
		addOrUpdateStuInformation,
		queryUserInformation,
		preferredAddress,
		getShoppingCartList,
		getAddressList,
		queryAddress,
		addOrder,
		queryByCardCode,
		getPaySign,
		findByOrders,
		payCallback,
		querySchoolsAndClass,
		// getSwiper
	}
}
