/**
 * yujiahe
 * 2021-6-19
 * 全局方法
 */

//必须登录
export function requiredLogin() {
	
	const token = uni.getStorageSync('token');
	if(!token){

		 uni.navigateTo({
		   url: '/pages/login/index'
		 });
		 return false;
	}else{
		return true;
	}
 
}

function noMultipleClicks(method, ...args) {
    let that = this;
    
    if (that.noClick) {
        that.noClick= false;
        method(args)
        setTimeout(function () {
            that.noClick= true;
        }, 2000)
    } else {
        console.log("请稍后点击")
    }
}



//导出
export default {
	noMultipleClicks,//禁止多次点击
}


