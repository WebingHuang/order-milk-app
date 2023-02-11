<template>
	<view id="card" :style="{height:Height}">
		
			<view class="list">
				
				<view class="item" v-for="(item,index) in bankList" :key="index">
					<!-- 头部 -->
					<view class="top">						
						<text>
							{{item.bankCardName}}
						</text>
						
					</view>
					<!-- 中间 -->
					<view class="text">
						<view class="lfte">
							{{item.bankCardType}}
						</view>
					</view>
					<!-- 底部 -->
					<view class="lower">
						<view class="lfte">
							<text>{{item.bankCardFront | bankCardNumFilter }}</text>
						</view>
						
					</view>
				</view>
			</view>
			<view class="botomBtn">
				<view class="addcard" @click="toaddcard">
					添加银行卡
				</view>
					
			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				bankList:[],
			};
		},
		onLoad(){
			this.getAppHeight();
			this.getBankList()
		},
		onShow() {
			
		},
		filters:{
			bankCardNumFilter(val){
				return val.substring(0,4) + '****' + ' ' + val.slice(-4)
			},
		},
		methods:{
			getBankList(){
				this.$u.api.queryBankList().then(res=>{
					// console.log(res)
					this.bankList = res
				}).catch()
			},
			toaddcard(){
				uni.navigateTo({
					url: '/pages/capital/addcard'
				});
			},
			getAppHeight(){
				this.Height = uni.getSystemInfoSync().windowHeight+ 'px';
			},
		}
	}
</script>

<style lang="scss">
		#card{
			
			background-color: #F0F0F0;
				height: 1506rpx;
				
				.list{
					margin: 0 21rpx;
					padding-top: 22rpx;
					
					.item{
					
						padding: 0 32rpx;
						padding-bottom: 20rpx;
						background-color: $u-main-color;
						border-radius: 28rpx;
						padding-bottom: 22rpx;
						flex-direction: column;
						margin-top: 20rpx;
						.top{
							
							display: flex;
							align-items: center;
							height: 80rpx;
							padding-top: 20rpx;
							
							.ico{
								width: 48rpx;
								height: 48rpx;
								background-color: #FFFFFF;
								border-radius: 50%;
								display: flex;
								align-items: center;
								justify-content: center;
								 
								&>image{
									
									width: 24rpx;
									height: 24rpx;
									
								}
							}
						
							
							
							&>text{
								font-size: 32rpx;
								color: #FFFFFF;
								font-weight: bold;
								
								margin-left: 64rpx;
							}
							.but{
								background-color: #FFFFFF;
								
								border-radius: 50%;
								display: flex;
								
								
							}
							&>.lfte{
									color: 	#FFFFFF;
									font-size: 32rpx;
									font-weight: bold;
									padding-top: 32rpx;
									padding-bottom: 30rpx;
									margin-left: 22rpx;
							}
							
						}
						.text{
							padding-top: 20rpx;
							&>.lfte{
								color: #FFFFFF;
								font-size: 24rpx;
								margin-left: 34px;
								margin-top: 1px;
	
							}
							
						}
						.lower{
							display: flex;
							justify-content: space-between;
							padding-top: 33rpx;
					
							&>.lfte{
								color: #FFFFFF;
								font-size: 24rpx;
								display: flex;
								align-items: center;
								
								image{
									width: 28rpx;
									height: 28rpx;
									
								}
								text{
									margin-left: 12rpx;
									font-size: 36rpx;
									margin-left: 65rpx;

								}
							}
								
						
							
							
							
						}
					}
							
				}
			
			
			
			// 按钮居中！
			.botomBtn{
				width: 100%;
				position: absolute;
				left: 0;
				bottom: 27px;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.addcard{
					background-color: #FFFFFF;
					width:400rpx;
					height: 68rpx;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 62rpx;
				}
				
			}
		}
		
</style>
