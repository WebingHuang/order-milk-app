<script>
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
			username: '白居易',
		},
		onNavigationBarButtonTap() {
		   console.log("点击了自定义按钮"); 
		},
		onLaunch() {
			
			
			// 1.1.0版本之前关于http拦截器代码，已平滑移动到/common/http.interceptor.js中
			// 注意，需要在/main.js中实例化Vue之后引入如下(详见文档说明)：
			// import httpInterceptor from '@/common/http.interceptor.js'
			// Vue.use(httpInterceptor, app)
			// process.env.VUE_APP_PLATFORM 为通过js判断平台名称的方法，结果分别如下：
			/**
			 * h5，app-plus(nvue下也为app-plus)，mp-weixin，mp-alipay......
			 */
		
			// console.log('App Launch，app启动')  
			
			
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function(res) {
			  // 请求完新版本信息的回调
			  if (res.hasUpdate) {
				  updateManager.onUpdateReady(function(res2) {
					  uni.showModal({
						  title: '更新提示',
						  content: '发现新版本，是否重启应用?',
						  cancelColor:'#eeeeee',
						  confirmColor:'#FF0000',
						  success(res2) {
							  if (res2.confirm) {
								  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								  updateManager.applyUpdate();
							  }
						  }
					  });
				  });
			  }          
			});       
			
			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
				uni.showModal({
					title: '提示',
					content: '检查到有新版本，但下载失败，请检查网络设置',
					success(res) {
						if (res.confirm) {
						  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}						 
				});						
			});      
		},
		
	
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "common/demo.scss";
	.isIPXup{
		padding-bottom: 68rpx !important;
	}
</style>