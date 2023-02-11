<template>
	<view id="agent">
		
		
		<view class="list">
			
			<view class="list_item" @click="getcommodityInfo">
				<view class="cover">
					<image src="http://120.78.163.4:8082/index/commodity.png" mode=""></image>
				</view>
				<view class="text">
					<view class="name">
						我是标题我是标题我是标题我是标题
					</view>
					<view class="attribute">
						<text class="price">
							¥108
						</text>
						<text class="purchase">
							1108人付款
						</text>
					</view>
				</view>
			</view>
			<view class="list_item" @click="getcommodityInfo">
				<view class="cover">
					<image src="http://120.78.163.4:8082/index/commodity.png" mode=""></image>
				</view>
				<view class="text">
					<view class="name">
						我是标题我是标题我是标题我是标题
					</view>
					<view class="attribute">
						<text class="price">
							¥108
						</text>
						<text class="purchase">
							1108人付款
						</text>
					</view>
				</view>
			</view>
			<view class="list_item" @click="getcommodityInfo">
				<view class="cover">
					<image src="http://120.78.163.4:8082/index/commodity.png" mode=""></image>
				</view>
				<view class="text">
					<view class="name">
						我是标题我是标题我是标题我是标题
					</view>
					<view class="attribute">
						<text class="price">
							¥108
						</text>
						<text class="purchase">
							1108人付款
						</text>
					</view>
				</view>
			</view>
			<view class="list_item">
				<view class="cover">
					<image src="http://120.78.163.4:8082/index/commodity.png" mode=""></image>
				</view>
				<view class="text">
					<view class="name">
						我是标题我是标题我是标题我是标题
					</view>
					<view class="attribute">
						<text class="price">
							¥108
						</text>
						<text class="purchase">
							1108人付款
						</text>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:""
			};
		},
		methods:{
			getcommodityInfo(){
				uni.navigateTo({
					url: '/pages/commodity/info'
				});
			}
		},
		onLoad(obj){
		},
	}
</script>

<style lang="scss">
	
	#agent{
		
		padding: 0 22rpx;
		margin-top: 32rpx;
		
		
		.list{
			margin-top: 32rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.list_item{
				width: 344rpx;
				height: 517rpx;
				
				.cover{
					width: 100%;
					height: 344rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.text{
					.name{
						font-size: 28rpx;
						font-weight: bold;
						padding-top: 18rpx;
					}
					
					.attribute{
							padding-top: 18rpx;
						    display: flex;
						    justify-content: space-between;
						    align-items: center;
						.price{
							color: $u-main-color;
							font-size: 28rpx;
							font-weight: bold;
						}
						
						.purchase{
							color: #4D4D4D;
							font-size: 24rpx;
							
						}
						
					}
				}
			}
		}
	}

</style>
