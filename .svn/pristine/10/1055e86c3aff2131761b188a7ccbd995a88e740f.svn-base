<template>
	<view id="refund-detail" :style="{height: Height}">
		<!-- 顶部导航 -->
		<template>
			<view>
				<u-navbar title="退款成功" :background="none" height="44" :border-bottom="false" title-color="#FFFFFF">
				</u-navbar>
			</view>
		</template>
		
		<!-- 退款步骤 -->
		<template>
			<view class="refund-time-steps">
				<view  class="refund-steps">
					<u-steps un-active-color="#1A1A1A" :list="refundStepsList" mode="number" :current="currentIndex" active-color="$u-main-color"></u-steps>
				</view>
				
				<view class="time">
					<text>
						2021-01-01  00:00
					</text>
					<text>
						2021-01-01  00:00
					</text>
					<text>
						2021-01-01 00:00
					</text>
				</view>
			</view>
		</template>
		
		<!-- 退款信息 -->
		<template>
			<view class="refund-goodinfo">
				<view class="top">
					<view class="left-box">
						<view class="left-img">
		
						</view>
					</view>
		
					<view class="right-goodsinfo">
						<view class="first-row">我是标题我是标题我是标题我是标题我是标题我是标题</view>
		
						<view class="second-row">
							<view class="left-config">
								某某某规格 丨 某某某规格…
							</view>
		
							<view class="number">
								x1
							</view>
						</view>
		
						<view class="bottom-info">
							<!-- <view>
								<view>
									7天无理由退货
								</view>
							</view> -->
							<view>
								¥69.00
							</view>
		
						</view>
					</view>
				</view>
		
				<view class="bottom">
					<u-cell-group>
							<u-cell-item :title-style="titleStyle" :value-style="titleStyle" title="退货原因" value="物流慢" :arrow="true"></u-cell-item>
							<u-cell-item :title-style="titleStyle" :value-style="titleStyle" title="退款金额" value="¥0.00" :arrow="true"></u-cell-item>
							<u-cell-item :title-style="titleStyle" :value-style="titleStyle" title="申请件数" value="1件" :arrow="true"></u-cell-item>
							<u-cell-item :title-style="titleStyle" :value-style="titleStyle" title="申请时间" value="2021-01-01  00:00" :arrow="true"></u-cell-item>
							<u-cell-item :title-style="titleStyle" :value-style="titleStyle" title="退货编号" value="0123456789109876543210" :arrow="true"></u-cell-item>
					</u-cell-group>
					
				</view>
			</view>
		</template>
		
		<!-- 底部按钮 -->
		<template>
			<view class="bottom-view">
				<button class="bottom-btn" type="default">删除记录</button>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				refundStepsList:[
					{
						name: '卖家同意退款'
					}, 
					{
						name: '银行受理'
					}, 
					{
						name: '退款成功'
					},
				],
				titleStyle: {
					fontSize:'28rpx',
					lineHeight:'28rpx',
					color: '#1A1A1A'
				},
				currentIndex: 0
			}
		},
		methods: {
			//获取系统高度
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		},
		onLoad() {
			this.getAppHeight()
		}
	}
</script>

<style lang="scss" scoped>
 #refund-detail {
	 background: url(http://120.78.163.4:8082/my/refund-detail-top-bg.png) no-repeat;
	 
	 background-size: contain;
	 background-color: #F0F0F0;
	 
	 .refund-time-steps {
		 width: 708rpx;
		 height: 185rpx;
		 border-radius: 12rpx;
		 margin: 0 auto;
		 background-color: #FFFFFF;
		 
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
		 flex-wrap: wrap;
		 .refund-steps {
			 // margin-top: 40rpx;
			 // background-color: red;
			 width: 708rpx;
			 height: 92rpx;
			 .u-steps__item__text--row {
				 color: #000 !important;
			 }
			 // display: flex;
			 // flex-direction: column;
			 // justify-content: center;
			 // align-items: center;
			 
		 }
		 .time {
			 // background-color: green;
			 // width: 671rpx;
			 // margin: 0 auto;
		 		width: 100%;
		 		display: flex;
		 		justify-content: space-around;
				 &>text:first-child {
					 // padding-left: 16rpx;
				 }
		 		 &>text {
		 			 color: #808080;
		 			 font-size: 20rpx;
					 width: auto;
					
		 		 }
				 &>text:nth-child(3) {
					 // padding-right: 16rpx;
				 }
		 	 }
	 }
	 
	 
	 .refund-goodinfo {
	 	margin: 0 auto;
	 	margin-top: 30rpx;
	 
	 	width: 708rpx;
	 	height: 620rpx;
	 	background-color: #FFFFFF;
	 	border-radius: 12rpx;
	 
	 	.top {
	 		width: 100%;
	 		height: 220rpx;
	 		margin: 0 auto;
	 
	 		display: flex;
	 
	 		.left-box {
	 			width: 220rpx;
	 			height: 220rpx;
	 			display: flex;
	 			justify-content: center;
	 			align-items: center;
	 
	 			.left-img {
	 				margin: 10px;
	 
	 				background-color: $u-main-color;
	 				border-radius: 16rpx;
	 
	 				width: 180rpx;
	 				height: 180rpx;
	 
	 			}
	 		}
	 
	 		.right-goodsinfo {
	 			margin-top: 18rpx;
	 
	 			.first-row {
	 				font-size: 28rpx;
	 				color: #1A1A1A;
	 				line-height: 36rpx;
	 				margin-right: 20rpx;
	 				letter-spacing: 1rpx;
	 
	 			}
	 
	 			.second-row {
	 				font-size: 24rpx;
	 				color: #808080;
	 				margin-top: 17rpx;
	 
	 				width: 488rpx;
	 				height: 23rpx;
	 				line-height: 23rpx;
	 			}
	 
	 			.left-config {
	 				float: left;
	 			}
	 
	 			.number {
	 				color: #1A1A1A;
	 				font-size: 28rpx;
	 				font-weight: bold;
	 
	 				float: right;
	 				margin-right:20rpx;
	 			}
	 
	 			.number:after {
	 				content: "";
	 				display: block;
	 				visibility: hidden;
	 				clear: both;
	 			}
	 			
	 			.bottom-info {
	 				margin-top: 36rpx;
	 				line-height: 25rpx;
	 				height: 25rpx;
	 				&>view:first-child {
	 					font-size: 20rpx;
	 					
	 					float: left;
	 					width: 160rpx;
	 					height: 32rpx;
	 					// background-color: #FFF0E5;
	 					color: $u-main-color;
	 					text-align: center;
	 				}
	 				&>view:nth-child(2) {
	 					color: $u-main-color;
	 					font-size: 32rpx;
	 					float: right;
	 					margin-right:20rpx;
	 				}
	 			}
	 
	 		}
	 	}
	 	.bottom {
	 		margin-top: 45rpx;
	 		height: 400rpx;
	 		display: flex;
	 		flex-direction: column;
	 		justify-content: space-evenly;
	 	}
	 }
	 .bottom-view {
	 	width: 100%;
	 	height: 88rpx;
	 	background-color: #FFFFFF;
	 	
	 	position: fixed;
	 	bottom: 0rpx;
	 	
	 	.bottom-btn {
	 		width: 128rpx;
	 		height: 48rpx;
	 		color: #4D4D4D;
	 		border-radius: 8rpx;
	 		font-size: 24rpx;
	 		line-height: 24rpx;
	 		text-align: center;
	 		padding: 0rpx;  //文字如果换行，注意清除内边距
			border: 1rpx solid #4D4D4D;
	 		
	 		// background-image: #FFFFFF;
	 		
	 		position: absolute;
	 		bottom: 20rpx;
	 		right: 20rpx;
	 		
	 		box-sizing: border-box;
	 		display: flex;
	 		flex-wrap:nowrap;
	 		
	 		display: flex;
	 		justify-content: center;
	 		align-items: center;
	 	}
	 	
	 }
 }
</style>

