<template>
	<view id="collention" :style="{height:Height}">

		<template>
			<view class="list">
				<view class="list_item" v-for="item in collectionList" :key="item.id" @click="handlerClick(item)">
					<view class="item">
						<view class="lfte">
							<image :src="item.productSpuInfoEntity.imgUrl" mode=""></image>
						</view>
						<view class="right">

							<view class="name">
								{{ item.productSpuInfoEntity.spuName }}
							</view>
							<view class="attribute">
								<view class="lfte">
									<text class="money">
										¥{{ item.productSpuInfoEntity.floorPrice }} - {{ item.productSpuInfoEntity.highestPrice }}
									</text>
									<!-- <text class="num">
										921人收藏
									</text> -->
								</view>
								<!-- <view class="right">
									<image src="http://120.78.163.4:8082/commodity/vehicle.png" mode=""></image>
								</view> -->
							</view>

						</view>
					</view>

				</view>
				<u-loadmore :status="status" />
			</view>
		</template>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				queryInfo: {
					status: 'loadMore',
					pageNum: 1,
					pageSize: 10
				},
				collectionList:[], //收藏列表
				price: '' //展示价格
			};
		},
		onLoad() {
			this.$requiredLogin();
			this.getCollectionList()
			this.getAppHeight()
		},
		onReachBottom(){ //上拉加载
			if(this.queryInfo.status === 'loadMore'){
				this.queryInfo.pageNum++;
				this.getCollectionList();
			}
		},
		methods: {
			handlerClick(item){
				uni.navigateTo({
					url:'/pages/commodity/info?id=' + item.productSpuInfoEntity.id
				})
			},
			getCollectionList() {
				this.$u.api.queryCollectList(
					{
						"pageNum": this.queryInfo.pageNum,
						"pageSize": this.queryInfo.pageSize
					}
				)
					.then(res => {
						// console.log(res);
						// this.collectionList = res;
						// console.log(this.collectionList)
						res.records.forEach(item => {
							this.collectionList.push(item)
						})											
						if(res.current == res.pages ){
							this.queryInfo.status = 'noneMore';
						}
					}).catch((err) => {
						console.log(err)

					})
			},
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		}
	}
</script>

<style lang="scss">
	#collention {
		background-color: #F0F0F0;

		.list {
			.list_item {
				border-bottom: 1px #e8e8e8 solid;

				.item {
					padding: 0 20rpx;
					height: 200rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #FFF;

					&>.lfte {
						height: 160rpx;

						image {
							width: 160rpx;
							height: 160rpx;
							border-radius: 8rpx;
						}
					}

					&>.right {
						flex: 1;
						margin-left: 20rpx;
						height: 80px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;

						.name {
							font-size: 28rpx;
							font-weight: bold;
						}

						.attribute {
							display: flex;
							justify-content: space-between;
							align-items: flex-end;

							.lfte {
								display: flex;
								flex-direction: column;

								.money {
									font-size: 32rpx;
									color: $u-main-color;
									font-weight: bold;
								}

								.num {
									font-size: 24rpx;
									color: #4D4D4D;
								}
							}

							.right {
								width: 60rpx;
								height: 60rpx;
								border-radius: 48rpx;
								background: #efefef;
								display: flex;
								justify-content: center;
								align-items: center;

								image {
									width: 36rpx;
									height: 36rpx;
								}
							}


						}
					}
				}

			}



		}
	}
</style>
