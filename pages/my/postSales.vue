<template>
	<view id="postSales" :style="{height:Height}" style="overflow-y:auto">
		<view class="list">
			<view class="listItem" v-for="(val,index) in list" :key="index">
				<view class="item" v-for="(item,idx) in val.omsOrderItemEntityList" :key="idx">
					<view class="itemTop">
						<view class="left">
							<image :src="item.skuPic" mode=""></image>
						</view>
						<view class="right">
							<view class="title">
								{{item.spuName}}
							</view>
							<view class="info">
								<view class="skuName">
									{{item.skuName}}
								</view>
								<view class="num">
									x{{item.skuQuantity}}
								</view>
							</view>
							<view class="note">
								<!-- <view class="text">
									7天无理由退货
								</view> -->
								<view class="price">
									¥{{item.realAmount}}
								</view>
							</view>
						</view>
					</view>
					<view class="itemBottom">
						<button class="button" type="default" @click="handlerClick(val)">查看详情</button>
					</view>
				</view>
			</view>
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fixType: [1, 5],
				Height: "",
				orderStatus:'5',
				page: {
					status: 'loadMore',
					pageNum: 1,
					pageSize: 10,
				},
				list: [],
			};
		},
		methods: {
			handlerClick(item){
				// console.log(item);
				uni.navigateTo({
					url:'/pages/order/refundPage?list=' + encodeURIComponent(JSON.stringify(item))
				})
			},
			getSalesList(){
			
				let omsOrderVo =  Object.assign({
					"orderStatus": this.orderStatus,
				}, this.fixType.includes(this.orderStatus)?{
					type: this.orderStatus == 1? 1 : 2
				}: {});
				this.$u.api.findByOrders({
					'pageRequest': {
						"pageNum": this.page.pageNum,
						"pageSize": this.page.pageSize,
					},
					omsOrderVo,
				}).then(res=>{
					// console.log(res)
					res.records.forEach(item => {
						this.list.push(item)
					})
					
					if (res.current == res.pages) {
						this.page.status = 'noneMore';
					}
				}).catch()
			},
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		},
		onLoad() {
			this.getSalesList()
			this.getAppHeight()
		},
		onReachBottom() { //上拉加载
			if (this.page.status === 'loadMore') {
				this.page.pageNum++;
				this.getSalesList();
			}
		}
	}
</script>

<style lang="scss">
	#postSales {
		background-color: #F0F0F0;
		padding-top: 22rpx;
		.list{
			margin: 0 21rpx;
			.listItem{
				background: #FFFFFF;
				margin-bottom: 20rpx;
				.item{
					display: flex;
					flex-direction: column;
					.itemTop{
						display: flex;
						.left{
							padding: 20rpx;
							image{
								width: 180rpx;
								height: 180rpx;
							}
						}
						.right{
							flex: 1;
							.title{
								font-size: 28rpx;
								font-family: Source Han Sans CN;
								font-weight: bold;
								color: #1A1A1A;
								display: flex;
								align-items: center;
								padding: 18rpx 18rpx 0 0;
							}
							.info{
								display: flex;
								justify-content: space-between;
								padding: 17rpx 19rpx 0 0;
								.skuName{
									font-size: 24rpx;
									font-family: Source Han Sans CN;
									font-weight: bold;
									color: #808080;
								}
								.num{
									font-size: 28rpx;
									font-family: Source Han Sans CN;
									font-weight: bold;
									color: #1A1A1A;
								}
							}
							.note{
								display: flex;
								justify-content: space-between;
								padding: 47rpx 20rpx 0 0;
								.text{
									// background: #FFF0E5;
									border-radius: 4rpx;
									padding: 7rpx 15rpx 6rpx 15rpx;
									font-size: 20rpx;
									font-family: Source Han Sans CN;
									font-weight: bold;
									color: $u-main-color;
								}
								.price{
									font-size: 32rpx;
									font-family: Source Han Sans CN;
									font-weight: bold;
									color: $u-main-color;
								}
							}
						}
					}
					.itemBottom{
						display: flex;
						justify-content: flex-end;
						padding: 20rpx 20rpx 20rpx 0;
						.button{
							margin: 0;
							background: linear-gradient(180deg, #FF9933, #FF6633);
							border-radius: 8rpx;
							color: #FFFFFF;
							display: flex;
							align-items: center;
							font-size: 24rpx;
							font-family: Source Han Sans CN;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
</style>
