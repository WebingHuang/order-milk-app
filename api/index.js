

const api = {
	getSwiper:"/om/sys/staticInfo/querySliList", //获取轮播图
	getCompany:"/om/sys/CompanyIntroduction/findOne",//获取公司介绍
	getCommodity:"/om/Applet/user/findByCommoditys",//用户分页查询商品
	getCommodityDetails:'/om/Applet/user/CommodityDetailed', //获取商品详情
	wxCollect:'/om/sys/collect/addCollect', //收藏
	collectInfo:'/om/sys/collect/addCollectInfo', //足迹信息
	queryCollectList:'/om/sys/collect/queryCollectList' ,//查询收藏信息
	queryVideoList:'/om/sys/staticInfo/queryVideoList', //查询首页视频
	findOne:'/om/sys/announcement/findOne', //查询资讯
	queryMilkNumber: '/om/common/OmsOrder/queryMilkNumber', // 查询剩余牛奶明细
	whetherRenewalNotice: '/om/common/OmsOrder/whetherRenewalNotice', // 查询剩余牛奶
	queryContactUs: '/om/sys/queryContactUs', // 查询客服联系方式

}



// 首页相关接口
export function indexApi(vm) {
	
	
	
	let getSwiper = (params = {}) => vm.$u.get(api.getSwiper, params);
	let getCompany = (params = {}) => vm.$u.get(api.getCompany,params);
	let getCommodity = (params = {}) => vm.$u.post(api.getCommodity,params);
	let getCommodityDetails = (params = {}) => vm.$u.get(api.getCommodityDetails,params);
	let wxCollect = (params = {}) => vm.$u.post(api.wxCollect,params);
	let collectInfo = (params = {}) => vm.$u.post(api.collectInfo,params);
	let queryCollectList = (params = {}) => vm.$u.post(api.queryCollectList,params);
	let queryVideoList = (params = {}) => vm.$u.get(api.queryVideoList,params);
	let findOne = (params = {}) => vm.$u.get(api.findOne,params);
	let queryMilkNumber = (params = {}) => vm.$u.post(api.queryMilkNumber,params);
	let whetherRenewalNotice = (params = {}) => vm.$u.post(api.whetherRenewalNotice,params);
	let queryContactUs = (params = {}) => vm.$u.post(api.queryContactUs,params);

	return {
		getSwiper,
		getCompany,
		getCommodity,
		getCommodityDetails,
		wxCollect,
		collectInfo,
		queryCollectList,
		queryVideoList,
		findOne,
		queryMilkNumber,
		whetherRenewalNotice,
		queryContactUs,
	}
}
