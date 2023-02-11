<template>
	<view id="card" :style="{height: Height}">
		<!-- <view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false" active-color="$u-main-color" swiperWidth="750"></u-tabs-swiper>
		</view> -->
		<!-- <swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
					<view class="card-list" v-for="(item,index) in dataList" :key="index">
						<view class="card-item" v-if="item.status == '0'">
							<view class="left">
								<text>会员卡</text>
							</view>
						<view class="right">
							<view class="first-row">
								<text>{{item.cdkey}}</text>
									<button class="used-btn" @click="toPresentedCard">{{item.status | statusFilter}}</button>
								</view>
								<text>指定商品可用</text>
								<text>使用人:{{item.activateUserName}}</text>
							</view>							
						</view>
					</view>
					<view class="card-list" v-for="(item,index) in dataList" :key="index" v-else>
						<view class="card-item">
							<view class="left">
								<text>会员卡</text>
							</view>
						<view class="right">
							<view class="first-row">
								<text>{{item.cdkey}}</text>
									<button class="used-btn" @click="toPresentedCard">{{item.status | statusFilter}}</button>
								</view>
								<text>指定商品可用</text>
								<text>使用人:{{item.holderName}}</text>
							</view>							
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper> -->
		<template>
			<view class="tabs">
				<view class="tabsList" v-for="item in list" :key="item.name" @click="change(item)"
					:class="item.name === current ? 'activeColor' : ''">
					{{item.name}}
				</view>
			</view>
		</template>
		<template>
			<view class="card-list">
				<view class="list-item" v-for="(item,index) in dataList" :key="index">
					<view v-if="item.status == '已激活'">
						<view class="card-item" :style="{backgroundImage: 'url(' + 'http://120.78.163.4:8082/my/card-used.png' + ')', backgroundSize:'contain'}">
							<view class="left">
								<text>臻香卡</text>
							</view>
							<view class="right">
								<view class="first-row">
									<view class="right-text">
										
										<text>卡号：{{item.encode}}</text>
										<text>激活手机号：{{item.activatePhone}}</text>
										<text style="">{{item.type}}</text>
									</view>
									
									<!-- <button class="used-btn"
										@click="toPresentedCard">{{item.status}}</button> -->
								</view>
							</view>
						</view>
					</view>
					<view v-else>
						
						<view class="card-item" :style="{backgroundImage: 'url(' + 'http://120.78.163.4:8082/my/card.png' + ')', backgroundSize:'contain'}">
							<view class="left">
								<text>臻香卡</text>
							</view>
							<view class="right">
								<view class="first-row">
									<view class="right-text">
										
										<text>卡号：{{item.encode}}</text>
										<text>激活码：{{item.cdkey}}</text>
										<text style="">{{item.type}}</text>
									</view>
								<!-- 	<button class="used-btn"
										@click="toPresentedCard">{{item.status}}</button> -->
									<button class="used-btn"
											@click="getQrImg(item.encode)">查看</button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
		
		<template>
			<view>
				<u-popup v-model="show"  mode="center">
						<view class="qrimg">
							<view class="tip">
								<text>
									卡号：{{encode}}
								</text>
							</view>
							<image :src="imgUrl" mode=""></image>
						</view>	
				</u-popup>
			</view>
		</template>
		<!-- <template>
			<view class="tarbar">
				<text>未使用</text>
				<text>已使用</text>
			</view>
		</template>
		
		<template>
			<view class="card-list">
				<view class="card-item">
					<view class="left">
						<text class="first-row">
							<text>￥</text>
							<text class="number">100</text>
						</text>
						<text>会员卡</text>
					</view>
					<view class="right">
						<view class="first-row">
							<text>zxh_123456</text>
							<button class="used-btn" @click="toPresentedCard">已使用</button>
						</view>
						<text>指定商品可用</text>
						<text>使用人:12345678910</text>
					</view>
				</view>
				
				<view class="card-item">
					<view class="left">
						<text class="first-row">
							<text>￥</text>
							<text class="number">100</text>
						</text>
						<text>会员卡</text>
					</view>
					<view class="right">
						<view class="first-row">
							<text>zxh_123456</text>
							<button class="used-btn" @click="toPresentedCard">已使用</button>
						</view>
						<text>指定商品可用</text>
						<text>使用人:12345678910</text>
					</view>
				</view>
			</view>
			
			
		</template>-->
	</view>

</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				list: [{
						name: '已激活'
					},
					{
						name: '未激活'
					},
				],
				current: '未激活',
				dataList: [],
				orderStatus: 1, // swiper组件的current值，表示当前那个swiper-item是活动的
				show:false,
				imgUrl:"",
				encode:"", //当前展示的encode
			};
		},
		filters: {
			// statusFilter(val) {
			// 	if (val == '0') {
			// 		return '已激活'
			// 	} else {
			// 		return '未激活'
			// 	}
			// },
		},
		methods: {
			change(item) {
				// console.log(item, this.orderStatus);
				// this.current = index;
				switch (item.name) {
					case '已激活':
						this.current = '已激活'
						break;
					case '未激活':
						this.current = '未激活'
						break;
				}
				// console.log(this.current);
				let orderStatus;
				if (this.current === '已激活') {
					orderStatus = 0
					this.orderStatus = orderStatus
					this.handler(orderStatus)
				} else if (this.current === '未激活') {
					orderStatus = 1
					this.orderStatus = orderStatus
					this.handler(orderStatus)
				}
			},
			tabsChange(index) { // tabs通知swiper切换
				console.log(index);
				this.current = index;
				this.swiperCurrent = index;
				this.handler(index)
			},
			handler(index) {
				this.$u.api.findByCards({
					type: index ? index : this.orderStatus,
				}).then(res => {
					// console.log(res)
					this.dataList = []
					this.dataList = res
				}).catch()
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			transition(e) { // swiper-item左右移动，通知tabs的滑块跟随移动
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			onreachBottom() { // scroll-view到底部加载更多

			},
			//获取系统高度
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().screenHeight + 'px';
			},
			//查看臻香卡二维码
			getQrImg(encode){
				
				this.$u.api.getQrImg({
					encode:encode
				}).then(res => {
					this.imgUrl = res;
					this.encode = encode;
					this.show = true;
					
				
				}).catch()
				
			},
			toPresentedCard() {
				uni.navigateTo({
					url: '/pages/my/PresentedCard'
				});
			}
		},
		onLoad() {
			this.handler()
			this.getAppHeight()
		}
	}
</script>

<style lang="scss" scoped>
	#card {
		background-color: #F0F0F0;

		.tabs {
			width: 750rpx;
			height: 88rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			align-items: center;
			position: fixed;
			z-index: 100;

			.tabsList {}
		}

		.activeColor {
			color: $u-main-color;
			border-bottom: 1rpx solid $u-main-color;
		}

		.tarbar {
			width: 100%;
			height: 88rpx;
			background-color: #FFFFFF;

			display: flex;
			justify-content: space-evenly;
			align-items: center;

			&>text:first-child {
				padding-bottom: 29rpx;
			}

			&>text:nth-child(2) {
				color: $u-main-color;
				padding-bottom: 29rpx;
				border-bottom: 1rpx solid $u-main-color;
			}
		}

		.list-item:nth-child(1) {
			padding-top: 96rpx;
		}

		.card-list {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.card-item {
				margin-top: 20rpx;
				margin-left: auto;
				margin-right: auto;
				// background: url(http://120.78.163.4:8082/my/card-used.png) no-repeat;
				// background-size: contain;

				width: 668rpx;
				height: 170rpx;


				display: flex;

				.left {
					width: 200rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					color: #fff;

					.first-row {
						
						&:first-child {
							color: #FFFFFF;
							font-size: 40rpx;
						}

						.number {
							font-size: 63rpx;
							color: #FFFFFF;
						}
					}

					&>text:nth-child(2) {
						font-size: 28rpx;
						color: #FFFFFF;

					}
				}

				.right {
					flex: 1;
					margin-left: 38rpx;

					display: flex;
					flex-direction: column;

					.first-row {
						display: flex;
						justify-content: space-around;
						align-items: center;
						height: 100%;
						// margin-top: 15.5rpx;
						color: #808080;

						.right-text {
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-around;
						}

						.used-btn {
							
							margin: 0;
							// margin-left: 100rpx;
							background-color: #FFFFFF;
							color: #808080;
							border: 2rpx solid #808080;
							display: flex;
						
							height: 40rpx;
							line-height: 40rpx;
							border-radius: 8rpx;
							font-size: 24rpx;
							vertical-align: middle;
							justify-content: center;
							align-items: center;
						}
					}

					&>text:nth-child(2) {
						color: #808080;
						font-size: 24rpx;
						// margin-top: 17rpx;
					}

					&>text:nth-child(3) {
						color: #808080;
						font-size: 24rpx;
						// margin-top: 22rpx;
					}
				}
			}
		}
	
		.qrimg{
			
			.tip{
				text-align: center;
				padding-top: 40rpx;
				text{
					
				}
			}
			
			image{
				width: 480rpx;
				height: 480rpx;
			}
		}
	}
</style>
