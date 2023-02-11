<template>
	<view id="tologistics">
			
<logistics :wlInfo="wlInfo"></logistics>
	</view>
</template>





<script>
	import logistics from '@/components/xinyu-logistics/xinyu-logistics.vue'
	export default {
		components: { logistics },
		data() {
			return {
				wlInfo: {
				    // delivery_status: 1, //快递状态 1已签收 2配送中
				    // post_name: '韵达快递', //快递名称
				    // logo: 'https://cdn.kuaidi100.com/images/all/56/yunda.png', //快递logo
				    // exp_phone: '95546', //快递电话
				    // post_no: '4304678557725', //快递单号
				    // addr: '江西省南昌市青云谱区', //收货地址
				    //物流信息
				    list: [{
				            "context": "运输中  01-01  00:00 ",
				            "location": "快件已到达东莞中心"
				        },
				        {
				            "context": "01-01  00:00 ",
				            "location": "快件已到达东莞中心"
				        },
				        {
				            "context": "已揽件  01-01  00:00 快件已到达东莞中心",
				            "location": "快件已到达东莞中心"
				        },
				        {
				            "context": "已发货  01-01  00:00 ",
				            "location": "包裹正在等待揽收"
				        },
						{
						    "context": "已下单  01-01  00:00 ",
						    "location": "商品已下单"
						},
				    ]
				}
			};
		}
	}
</script>

<style lang="scss">
	#tologistics{
		
	}
</style>
