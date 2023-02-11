<template>
	<view id="vehicle" :style="{height: Height}">
		
		<template>

			<view class="container" v-if="isShow">
				<block v-if="flag">
					<sideslip-car ref="mycar" @selAllBtn="selAllBtn" @delBtn="delBtn" @touchEv="touchEv"
						class="sideslip-car" @selThis="selThis" @jsBtn="jsBtn" @changeNum="changeNum" :carts="carts">
					</sideslip-car>
				</block>
			</view>
			<view class="noneList" v-else>
				<image src="http://120.78.163.4:8082/commodity/datanull.png" mode=""></image>
				<text>暂无数据</text>
			</view>
			<tarbar id="tarbar" @change="handlerClick" :current="current" />
		</template>
	




	</view>
</template>

<script>
	import sideslipCar from '../../components/sideslip-car/sideslip-car.vue'
	import tarbar from '../../components/tarbar/tarbar.vue'
	export default {
		components: {
			sideslipCar,
			tarbar
		},
		data() {
			return {
				isShow: true,
				Height:"",
				carts: [], // 购物车列表
				dataList: [], //数据集合
				page: {
					status: 'loadmore',
					pageNum: 1,
					pageSize: 10
				},
				current: 2, //当前激活项
				flag: false,
			};
		},
		watch: {
			carts: {
				handler() {
					if (this.carts.length === 0) {
						this.isShow = false;
					}
				},
				deep: true
			}
		},
		methods: {
			
			//获取系统高度
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
			handlerClick(index) {
				console.log(index)
				this.current = index
			},
			getList() { //获取购物车列表

				this.$u.api.getShoppingCartList({
					pageNum: this.page.pageNum,
					pageSize: this.page.pageSize
				}).then(res => {
					this.carts = [];
					res.records.map(item => {
						item['selected'] = false; //添加一个选中的属性默认是不选中
						item['isTouchMove'] = false;
						this.carts.push(item)
					})
					this.flag = true;
				}).catch(err => {

				})
			},
			jsBtn: function(newArr) {
				
				// console.log("结算回调函数")
				
				
				this.$u.api.queryUserInformation({
					sequence: '1'
				}).then(res => {
					if(res.length){
						
						var spuId=[]; //商品id
						
						var skuId = [] ;//规格id
						
						var num = []; //数量
						
						newArr.map(item=>{
							spuId.push(item.spuId)
							skuId.push(item.skuTwoId)
							num.push(Number(item.commNum))
						})
						
						uni.navigateTo({
							url: '/pages/order/confirmOrder?supId='+ spuId.join(',') + '&skuId=' +skuId.join(',') + '&num='+num.join(',')
						})
									
						uni.setStorageSync('list',newArr);
						
					}else{
						uni.navigateTo({
							url: '/pages/address/index'
						})
					}
				}).catch()
				
			
			},
			changeNum: function(item) {
				
				
				if(item.stock ==="" ||  item.stock ==="0" || Number(item.stock)<=0){
					return
				}
			
				if(item.isActivity ==="0" && item.coupon !="" && item.coupon !==0 ){
					return
				}
				
				this.$u.api.addShoppingCart({
					id: item.id,
					skuTwoId: item.skuTwoId,
					spuId: item.spuId,
					commNum: item.commNum,
					imgUrl: item.imageUrl
				}).then(res => {

					this.$refs.mycar.getTotalPrice();
				}).catch(err => {

				})

			},
			selThis: function(carts) {
				// console.log(carts)
				
				this.carts = carts;
				this.$refs.mycar.getTotalPrice();
			},
			selAllBtn: function(carts) {
				this.carts = carts;
				this.$refs.mycar.getTotalPrice();
			},
			touchEv: function(carts) {
				this.carts = carts;
			},
			delBtn: function(item) {
				// console.log(item);
				// carts.splice(index, 1);
				// this.carts = carts;
				// this.$refs.mycar.getTotalPrice();
				this.$u.api.addShoppingCart({
					id: item.id,
					deleteFlag: '0'
				}).then(res => {
					uni.showToast({
						title: '删除成功',
						icon: 'none'
					})
					this.getList()
				}).catch()
			}
		},
		onLoad() {
			
			this.getAppHeight();
			
			if (this.$requiredLogin()) {
				this.isShow = true;
				this.getList();
			} else {
				this.isShow = false;
			}
			
		},
		onShow() {
		
			if(this.carts){
				this.carts.forEach((item,index)=>{
					if(item.selected){ //当前选择的状态
						this.$refs.mycar.selectList(index);
					}
				})
			}
		},
		onHide() {
			
			if (this.isShow) {
				this.$refs.mycar.selectAll = false;
				this.$refs.mycar.totalPrice = 0;
				this.$refs.mycar.totalNum = 0;
			}
		},
		onTabItemTap(e) {
			this.$requiredLogin();
		},

	}
</script>

<style lang="scss" scoped>
	page {
		background: #f5f5f5;
	}

	view,
	textarea,
	input,
	text,
	button {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: "微软雅黑";
	}

	.uni-checkbox-input {
		border-radius: 50% !important;
	}

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		background: #f5f5f5;
		overflow: hidden;
		padding-bottom: 200rpx;
	}

	.line1 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: box;
		display: -webkit-box;
		line-clamp: 1;
		box-orient: vertical;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
		/* 英文换行问题 */
	}

	.line2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: box;
		display: -webkit-box;
		line-clamp: 2;
		box-orient: vertical;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		/* 英文换行问题 */
	}

	.centerboth {
		display: flex;
		display: -webkit-flex;
		align-items: center;
		-webkit-align-items: center;
		justify-content: center;
		-webkit-justify-content: center;
	}

	.clearfix:after {
		content: "";
		display: block;
		visibility: hidden;
		height: 0;
		clear: both;
	}

	.clearfix {
		zoom: 1;
	}

	image {
		padding: 0;
		margin: 0;
	}

	textarea {
		width: 300rpx;
		height: 75rpx;
		display: block;
		position: relative;
		font-size: 28rpx;
	}

	button::after {
		border: none;
	}

	input:-ms-input-placeholder {
		color: #808080;
	}

	.container {
		background: #F5F5F5;
	}

	.container {
		width: 100%;
		// padding: 0 24rpx;
	}

	.sideslip-car {
		width: 100%;
	}

	#vehicle {
		.noneList {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			image {
				padding-top: 263rpx;
				width: 480rpx;
				height: 313rpx;
			}

			text {
				padding-top: 40rpx;
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #808080;
			}
		}
		#tarbar{
			width: 100%;
			z-index: 9999;
			position: fixed;
			bottom: 0;
		}
	}
</style>
