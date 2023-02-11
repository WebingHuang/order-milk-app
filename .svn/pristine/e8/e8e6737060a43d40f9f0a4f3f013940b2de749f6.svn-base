<template>
	<view id="capial" :style="{height:Height}">
		<template>
			<view>
				<u-navbar  title="账户资金" :background="none" :border-bottom="false" title-color="#FFFFFF"></u-navbar>
			</view>
		</template>
		
		
		<template>
			<view>
				<view class="top">
					<view class="money">
						<text class="title">
							我的余额
						</text>
						<text class="text">
							¥ {{list.sumBalance | userBalanceFilter}}
						</text>
					</view>
					
					<view class="item">
						<view class="lfte">
							<text>
								可提现余额
							</text>
							<text>
								¥ {{list.userBalance | userBalanceFilter }}
							</text>
						</view>
						<view class="hr">
							
						</view>
						<view class="right">
							<text>
								不可提现余额
							</text>
							<text>
								¥{{list.userNotBalance | userBalanceFilter}}
							</text>
						</view>				
					</view>
					
					
				</view>
				<view class="list">
					<view class="item" @click="toBalance">
						<image src="http://120.78.163.4:8082/capital/info.png" mode=""></image>
						<text>
							明细
						</text>
					</view>
					<view class="item" @click="Withdrawal" >
						<image src="http://120.78.163.4:8082/capital/tx.png" mode=""></image>
						<text>
							提现
						</text>
					</view>
					<view class="item" @click="toRotation" >
						<image src="http://120.78.163.4:8082/capital/hz.png" mode=""></image>
						<text>
							互转
						</text>
					</view>
				</view>
				<view class="list">
					<view class="item"  @click="toCard">
						<image src="http://120.78.163.4:8082/capital/bank.png" mode=""></image>
						<text>
							银行卡
						</text>
					</view>
				</view>
			</view>
		</template>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height:"",
				list:[],
			};
		},
		filters:{
			userBalanceFilter(val){
				if(val){
					if(typeof val === 'number' && val%1 === 0){
						return val + '.00'
					}else{
						return val
					}
				}else{
					return 0
				}
			}
		},
		methods:{
			getUserInfoList(){
				this.$u.api.getUserInfo().then(res=>{
					// console.log(res)
					this.list = res
				}).catch()
			},
			//跳转互转页面
			toRotation(){
				uni.navigateTo({
					url: '/pages/capital/rotation'
				});
			},
			//银行卡
			toCard(){
				uni.navigateTo({
					url: '/pages/capital/card'
				});
			},
			//获取系统高度
			getAppHeight(){
				
				this.Height = uni.getSystemInfoSync().screenHeight + 'px';
				
			
			},
			toBalance(){
				uni.navigateTo({
					url: '/pages/balance/index'
				});	
			},
			Withdrawal(){
				uni.navigateTo({
					url: '/pages/capital/Withdrawal'
				});	
			}
		},
		onLoad() {
			// this.getUserInfoList()
			// this.getAppHeight()
		},
		onShow() {
			this.getUserInfoList()
			this.getAppHeight()
		}
	}
</script>

<style lang="scss">

	#capial{
		background: url(http://120.78.163.4:8082/capital/bj.png) no-repeat;
		background-size: cover;
		
		width: 100%;
		.top{
			background-color: #FFFFFF;
			opacity:0.5;
			margin: 0 21rpx;
			height: 280rpx;
			border-radius: 12rpx;
			.money{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding-top: 31rpx;
				
				.title{
					font-size: 32rpx;
					color: #4D2D17;
				}
				.text{
					color: #4D2D17;
					font-size: 32rpx;
					font-weight: bold;
					padding-top: 39rpx;
				}
			}
			.item{
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding-top: 40rpx;
				.lfte{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					font-size: 24rpx;
					color: #4D2D17;
				}
				
				.hr{
					border-right:  1px #4D2D17 solid;
				}
				.right{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					font-size: 24rpx;
					color: #4D2D17;
				}
			}
			
			
		}
	
	
		.list{
			display: flex;
			justify-content: space-between;
			margin: 0 21rpx;
			padding-top: 20rpx;
			.item{
				width: 220rpx;
				height: 220rpx;
				border-radius: 12rpx;
				background-color: #FFFFFF;
				opacity:0.5;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				image{
					width: 60rpx;
					height: 60rpx;
				}
				text{
					font-size: 32rpx;
					
				}
			}
		}
	}
</style>
