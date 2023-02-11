<template>
	<view id="presentedcard" :style="{height: Height}">
		<template>
			<view class="card">
				<view class="left-card">
					<view class="first-row">
						<text>￥</text>
						<text>100</text>
					</view>
					<text>会员卡</text>
				</view>
				<view class="middle-card">
					
				</view>
				<view class="right-card">
					<view class="first-row">
						<text>zxh_123456</text>
					</view>
					<text>指定商品可用</text>
					<text>有效期至2020-01-01</text>
				</view>
			</view>
		</template>
		
		<template>
			<view class="presented-friend">
				赠送好友
			</view>
		</template>
		
		<template>
			<view class="phone">
				<input type="text" :value="phone" placeholder="请输入手机号"/>
			</view>
		</template>
		
		<template>
			<view class="commit">
				<button size="medium" class="commit-btn">赠送</button>
			</view>
		</template>
		
		<template>
			<view class="user-info">
				<view class="circle">
					
				</view>
				<text>用户名称</text>
				<text class="select-user"></text>
			</view>
		</template>
		<template>
			<view class="tip-message">未查询到该用户</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				Height:""
			}
		},
		methods:{
			//获取系统高度
			getAppHeight(){
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		},
		onLoad() {
			this.getAppHeight()
		}
	}
</script>

<style lang="scss" scoped>
#presentedcard {
	.card{
		background: url(http://120.78.163.4:8082/my/card.png) no-repeat;
		background-size: contain;
		
		width: 668rpx;
		height: 167rpx;
		margin: 0 auto;
		
		display: flex;
		.left-card {
			width: 200rpx;
			height: 100%;
			
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.first-row {
				display: flex;
				justify-content: center;
				align-items: center;
				&>text:first-child {
					font-size: 40rpx;
					height: 82rpx;
					padding-bottom: 6rpx;
					
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
				}
				&>text:nth-child(2) {
					font-size: 63rpx;
				}
			}
			&:nth-child(1){
				color: #FFFFFF;
			}
		}
		.right-card {
			// margin-left: 38rpx;
			width: 468rpx;
			box-shadow: 1rpx 2rpx 2rpx #f0f0f0;
			display: flex;
			flex-direction: column;
			border-top-right-radius: 12rpx;
			border-bottom-right-radius: 12rpx;
			
			.first-row {
				padding-left: 38rpx;
				margin-top: 15.5rpx;
				color: #1A1A1A;
			}
			&>text:nth-child(2) {
				padding-left: 38rpx;
				color: #1A1A1A;
				font-size: 24rpx;
				margin-top: 17rpx;
			}
			&>text:nth-child(3) {
				padding-left: 38rpx;
				color: #1A1A1A;
				font-size: 24rpx;
				margin-top: 22rpx;
			}
		}
	}
	.presented-friend {
		font-size: 32rpx;
		font-weight: 550;
		
		margin-top: 47rpx;
		margin-left: 55rpx;
	}
	.phone {
		width: 670rpx;
		height: 100rpx;
		margin-top: 20rpx;
		margin-left: 40rpx;
		
		border-bottom: 1rpx solid #f0f0f0;
		
		display: flex;
		align-items: center;
		&>input {
			line-height: 27rpx;
			margin-left: 16rpx;
			width: 100%;
		}
	}
	// 按钮居中！
	.commit {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.commit-btn {
			border-radius: 34rpx;
			width: 400rpx;
			height: 68rpx;
			display: flex; 
			justify-content:center; 
			align-items:center;
			background-image: linear-gradient(#FF9933,#FF6633);
			
			color: #ffffff;
			font-size: 32rpx;
		}
	}
	.user-info {
		margin-top: 21rpx;
		margin-left: 40rpx;
		
		width: 670rpx;
		
		display: flex;
		align-items: center;
		position: relative;
		.circle {
			border-radius: 100%;
			background-color: $u-main-color;
			width: 60rpx;
			height: 60rpx;
		}
		&>text:nth-child(2) {
			margin-left: 30rpx;
			font-size: 28rpx;
			color: #4D4D4D;
		}
		.select-user{
			right: 0rpx;
			position: absolute;
			
			width: 12rpx;
			height: 24rpx;
			
			background: url(http://120.78.163.4:8082/my/right-arrow.png) no-repeat;
			background-size: contain;
			background-size:100% 100%;
		}
	}
	.tip-message {
		margin-top: 72rpx;
		
		color: #808080;
		font-size: 28rpx;
		
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
}
</style>
