

const api = {
	
	getOpenInfo:"/om/sys/user/getOpenInfo", //获取
	userfeedback:'/om/applet/userfeedback/save', //反馈
	upload:'/om/UploadPictures/upload', //图片上传
	findByCards:'/om/sys/user/findCardByUserCode', //查询提货码
	getHistory:"/om/sys/collect/queryTrackList", //查询浏览历史分页
	updatePassword:'/om/sys/user/updatePassword' ,//修改密码
	
	checkQuantity:"/om/Applet/user/checkQuantity", //验证金额有效性
	
	getUserMoney:"/om/sys/user/queryUserMoney", //查询用户可用余额
	
	getQrImg:"/om/shop/queryShopCardEwm", //查询臻香卡的二维码
	
	getNoticeList:"/om/sys/announcement/findByAnnouncements" ,//查询公告列表
	
	getNoticeInfo:"/om/sys/announcement/findOneById",//根据公告id查询公告详情
	
	
	getUserInfoByPhone:"/om/sys/user/queryUserByPhone", //根据手机号查询用户信息

	setAccounts:"/om/sys/user/setAccounts", //用户转账接口
	
	
	getAgentOrOrder:"/om/statistics/queryAgentOrOrder", //查询个人业绩
	
	getAgentUser:"/om/agentUp/queryAgentUser", //查询下级用户
	
	
	getUserPerformanceAll:"/om/agentUp/queryUserPerformanceAll", //查询下级用户业绩
	
	
	
}



export function myApi(vm) {
	
	let getAgentUser = (params = {}) => vm.$u.get(api.getAgentUser, params);
	
	let getAgentOrOrder = (params = {}) => vm.$u.get(api.getAgentOrOrder, params);
	
	let checkQuantity = (params = {}) => vm.$u.get(api.checkQuantity, params);
	
	let getOpenInfo = (params = {}) => vm.$u.get(api.getOpenInfo, params);
	
	let findByCards = (params = {}) => vm.$u.get(api.findByCards, params);
	let getHistory = (params = {}) => vm.$u.post(api.getHistory, params);
	let upload = (params = {}) => vm.$u.post(api.upload, params);
	let userfeedback = (params = {}) => vm.$u.post(api.userfeedback, params);
	let updatePassword = (params = {}) => vm.$u.post(api.updatePassword, params);
	let getUserMoney = (params = {}) => vm.$u.get(api.getUserMoney, params);
	
	let getQrImg = (params = {}) => vm.$u.get(api.getQrImg, params);
	
	let getNoticeList = (params = {}) => vm.$u.post(api.getNoticeList, params);
	
	let getNoticeInfo = (params = {}) => vm.$u.get(api.getNoticeInfo, params);
	
	let getUserInfoByPhone = (params = {}) => vm.$u.get(api.getUserInfoByPhone, params);
	
	let setAccounts = (params = {}) => vm.$u.get(api.setAccounts, params);
	
	
	let getUserPerformanceAll = (params = {}) => vm.$u.get(api.getUserPerformanceAll, params);
	
	
	
	
	

	return {
		checkQuantity,
		getOpenInfo,
		getHistory,
		userfeedback,
		upload,
		findByCards,
		updatePassword,
		getUserMoney,
		getQrImg,
		getNoticeList,
		getNoticeInfo,
		getUserInfoByPhone,
		setAccounts,
		getAgentOrOrder,
		getAgentUser,
		getUserPerformanceAll
	}
}
