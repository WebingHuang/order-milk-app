<template>
	<view class="tarbar" :style="{
		backgroundColor:tabBar.backgroundColor,
		color:tabBar.color,
		'padding-bottom': paddingBottomHeight + 'rpx'
		}">
		<view class="tarbar-list">
			<view class="tarbar-list-item" v-for="(item,index) in tabBar.list" :key="index"
				@click="setSelected(index,item.pagePath)" >
				<view class="tarbar-list-icon">
					<image :src="selected == index ? item.selectedIconPath : item.iconPath" mode=""></image>
				</view>
				<view class="tarbar-list-name" :style='selected == index?"color:"+tabBar.selectedColor:tabBar.color'>
					{{item.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import _ from "lodash"
	export default {
		data() {
			return {
				"tabBar": {
					"color": "#909399",
					"selectedColor": "#303133",
					"backgroundColor": "#FFFFFF",
					"borderStyle": "black",
					"list": [{
							"pagePath": "/pages/index/index",
							"iconPath": "/static/uview/example/component.png",
							"selectedIconPath": "/static/uview/example/component_select.png",
							"text": "首页"
						},
						{
							"pagePath": "/pages/commodity/index",
							"iconPath": "/static/uview/example/commodity-two.png",
							"selectedIconPath": "/static/uview/example/commodity.png",
							"text": "商品"
						},
						{
							"pagePath": "/pages/vehicle/index",
							"iconPath": "/static/uview/example/js.png",
							"selectedIconPath": "/static/uview/example/js_select.png",
							"text": "购物车"
						},
						{
							"pagePath": "/pages/my/index",
							"iconPath": "/static/uview/example/template.png",
							"selectedIconPath": "/static/uview/example/template_select.png",
							"text": "我的"
						}
					]
				},
				paddingBottomHeight: 0,  //苹果X以上手机底部适配高度
				selected: this.current ,//当前激活项
				noClick:true,
			}
		},
		watch: {
			current: {
				handler(val) {
					// console.log('handler-----------',val)
					this.current = val
					const _this = this
					uni.setNavigationBarTitle({ // 设置顶部bar的标题
						title: _this.tabBar.list[val].text
					})
				},
				immediate: true
			}
		},
		props: {
			current: {
				type: [Number, String],
				default: 0
			}
		},
		methods: {
			setSelected:_.debounce(function(index, path) {
			  if (this.selected == index) return
			  this.selected = index
			  // console.log(path)
			  uni.redirectTo({
			  	url: path
			  })
			  this.$emit('change', index)  	                
			}, 1000, {
			    'leading': true, //在延迟开始前立即调用事件
			    'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			})           
		},
		created() {
			
			let that = this;
			uni.getSystemInfo({
				success(res) {
					let model = ['X', 'XR', 'XS', '11', '12'];
					model.forEach(item => {
						//适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
						if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
							that.paddingBottomHeight = 40;
						}
					})
					// console.log(res, 'uni.getSystemInfo');
				}
			})
		},
	}
</script>

<style lang="scss" scoped>
	.tarbar {
		width: 100%;
		// height: 98rpx;

		.tarbar-list {
			// height: 98rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding-top: 12rpx;
			padding-bottom: 11rpx;
			box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
			// padding-bottom: 40rpx;
			.tarbar-list-item {
				.tarbar-list-icon {
					display: flex;
					justify-content: center;

					image {
						display: flex;
						width: 44rpx;
						height: 44rpx;
					}
				}

				.tarbar-list-name {
					padding-top: 12rpx;
				}
			}
		}
	}
</style>
