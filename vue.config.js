module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			disableHostCheck: true,
			"proxy": {
			    "/": {
			      "target": "http://8.134.110.178:10882",//目标接口域名
			      // "target": "http://47.243.228.50:10881",//目标接口域名
			      // "target": "http://localhost:10881",//目标接口域名
			      // "target": "http://192.168.31.235:10881",//目标接口域名
				  	// "target": 'http://localhost:8080', //家里地址
				  	// "target": 'https://siyuanwanluo.cn', //家里地址
				  	// "target": 'https://192.168.1.71:10881', //家里地址
			      "changeOrigin": true,//是跨域
			      "secure": false,//设置支持https协议的代理
		        }
			}
			
			
		}
	},
	
	//productionSourceMap: false,
}


