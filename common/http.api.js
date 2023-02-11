// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)

import {indexApi} from '../api/index.js'
import {myApi} from '../api/my.js'
import {paymentApi} from '../api/payment.js'
import {vehicleApi} from '../api/vehicle.js'
import {collectionApi} from '../api/collection.js'
import {loginApi} from '../api/login.js'




// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		...indexApi(vm),
		...myApi(vm),
		...paymentApi(vm),
		...vehicleApi(vm),
		...collectionApi(vm),
		...loginApi(vm)
	};
}

export default {
	install
}