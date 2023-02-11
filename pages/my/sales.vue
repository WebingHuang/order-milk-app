<template>
	<view id="sales" :style="{height:Height}">
		<view class="list">
			<view class="listItem">
				<view class="item" v-for="(item,index) in list[0].omsOrderItemEntityList" :key="index">
					<view class="square">
						<image :src="item.skuPic" mode=""></image>
					</view>
					<view class="top">
						<view class="biao">
							{{item.spuName}}
						</view>
						<view class="lfte">
							{{item.skuName}}
						</view>
					</view>
				</view>
				<view class="cards">
					<u-cell-group class="card">
						<u-cell-item icon="http://image.xianghuikejiapp.com/my/refund.png" title="我要退款(无需退货)" label="没收到货，或与卖家协商同意不用退货只退款"
							@click="torefund"></u-cell-item>
						<!-- <u-cell-item title="我要退货退款" icon="http://image.xianghuikejiapp.com/my/salesReturn.png" label="没收到货，或与卖家协商同意不用退货只退款"
							@click="toreturn"></u-cell-item> -->
						<!-- <u-cell-item title="我要换货" icon="http://image.xianghuikejiapp.com/my/barter.png" label="已收到货，需要更换已收到的货物"
							@click="tochange"></u-cell-item> -->
					</u-cell-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				list: [],
			};
		},
		methods: {

			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
			// 退款
			torefund() {
				console.log('我要退款')
				uni.navigateTo({
					url: '/pages/my/torefund?list=' + encodeURIComponent(JSON.stringify(this.list))
				});
			},
			// 退货
			toreturn() {
				uni.navigateTo({
					url: '/pages/my/torefund?list=' + encodeURIComponent(JSON.stringify(this.list))
				});
			},
			// 换货
			tochange() {
				uni.navigateTo({
					url: '/pages/my/change'
				});
			},
		},
		onLoad(option) {
			this.list = JSON.parse(decodeURIComponent(option.list));
			console.log(this.list)
			this.getAppHeight()
		}
	}
</script>

<style lang="scss">
	#sales {
		background-color: #F0F0F0;

		.list {
			.listItem {
				.item {
					padding: 0 32rpx;
					padding-bottom: 20rpx;
					background-color: #FFFFFF;
					padding-top: 20rpx;
					width: 750rpx;
					height: 140rpx;
					display: flex;

					.square {

						// width: 100rpx;
						// height: 100rpx;
						// background-color: $u-main-color;
						// border-radius: 12rpx;
						// display: inline-block;
						// align-items: center;
						image {
							width: 100rpx;
							height: 100rpx;
						}
					}

					.top {
						font-size: 28rpx;
						display: inline-block;
						text-align: left;
						width: 480rpx;
						color: #1A1A1A;
						position: absolute;
						right: 118rpx;
						flex: 1;

						&>.lfte {
							font-size: 24rpx;
							color: #808080;
						}

						&>.biao {
							color: #1A1A1A;
							font-weight: bold;
						}
					}
				}

				.cards {
					padding-top: 20rpx;

					.card {
						width: 100%;

						u-cell-item:nth-child(1) {

							.u-cell_title {
								color: #1A1A1A !important;
								font-weight: bold;
							}
						}

						// 第二个
						u-cell-item:nth-child(2) {

							.u-cell_title {
								color: #1A1A1A !important;
								font-weight: bold;
							}
						}

						//第三个
						u-cell-item:nth-child(3) {

							.u-cell_title {
								color: #1A1A1A !important;
								font-weight: bold;
							}
						}

						image {
							width: 40rpx;
							height: 40rpx;
						}

					}
				}
			}
		}
	}
</style>
