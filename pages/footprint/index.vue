<template>
	<view id="footproint">
		
		<template>
			<view class="list">
				<view class="list_item">
					<view class="item">
						<view class="lfte">
							<image src="http://120.78.163.4:8082/index/commodity.png" mode=""></image>
						</view>
						<view class="right">
							
							<view class="name">
								产品名称产品名称产品名称产品名称产品名称产品名称产品名称
							</view>
							<view class="attribute">
								<view class="lfte">
									<text class="money">
										¥69
									</text>
									<!-- <text class="num">
										921人收藏
									</text> -->
								</view>
								<view class="right">
									<image src="http://120.78.163.4:8082/commodity/vehicle.png" mode=""></image>
								</view>
							</view>
							
						</view>
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
				
			};
		},
		methods:{
			
		},
		onLoad(){
			
		},
	}
</script>

<style lang="scss">

	#footproint{
		.list{
			.list_item{
				 border-bottom: 1px #e8e8e8 solid;
				 
				.item{
					margin: 0 20rpx;
					height: 200rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					&>.lfte{
						height: 160rpx;
						image{
							width: 160rpx;
							height: 160rpx;
						}
					}
					&>.right{
						 margin-left: 20rpx;
						 height: 80px;
						 display: flex;
						 flex-direction: column;
						 justify-content: space-between;
						.name{
							font-size: 28rpx;
							font-weight: bold;
						}
						.attribute{
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							
							.lfte{
								display: flex;
								flex-direction: column;
								.money{
									font-size: 32rpx;
									color: $u-main-color;
									font-weight: bold;
								}
								.num{
									font-size: 24rpx;
									color: #4D4D4D;
								}
							}
							
							.right{
								width: 60rpx;
								height: 60rpx;
								border-radius: 48rpx;
								background: #efefef;
								display: flex;
								justify-content: center;
								align-items: center;
								image{
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
