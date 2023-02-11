

const api = {
	wxgetUserInfo:"/om/wx/userLogin/decodeUserInfo",
	wxLogin :"/om/wx/userLogin/login"
	
}



// 首页相关接口
export function loginApi(vm) {
	
	
	
	
	let wxgetUserInfo = (params={}) => vm.$u.post(api.wxgetUserInfo, params);
	


	let wxLogin = (params={}) => vm.$u.post(api.wxLogin, params);

	return {
		wxgetUserInfo,
		wxLogin
	}
}
