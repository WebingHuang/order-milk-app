import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

App.mpType = 'app';

// 此处为演示Vue.prototype使用，非uView的功能部分
// Vue.prototype.vuePrototype = '枣红';


// Vue.prototype.checkLogin = function(){
// 	const token = uni.getStorageSync('token')
// 	if(token === ''){ // 本地没有token表示未登录
// 		uni.reLaunch({url:'/pages/login/index'})
// 		return false
// 	}
// }

// 引入全局uView
import uView from 'uview-ui';



Vue.use(uView);



// 此处为演示vuex使用，非uView的功能部分
import store from '@/store';


// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js');
Vue.mixin(vuexStore);

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare);

// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';

// VueI18n
import VueI18n from '@/common/vue-i18n.min.js';

import { requiredLogin, noMultipleClicks} from '@/common/common.js';



//引用微信分享js
import share from '@/common/share.js';

Vue.mixin(share)





// VueI18n
Vue.use(VueI18n);

const i18n = new VueI18n({
	// 默认语言
	locale: 'zh',
	// 引入语言文件
	messages: {
		'zh': Chinese,
		'en': English,
	}
});


Vue.prototype.$requiredLogin= requiredLogin;

Vue.prototype.$noMultipleClicks= noMultipleClicks;



// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;

const app = new Vue({
	i18n,
	store,
	...App
});

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js';
Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http.api.js';



Vue.use(httpApi, app);



app.$mount();
