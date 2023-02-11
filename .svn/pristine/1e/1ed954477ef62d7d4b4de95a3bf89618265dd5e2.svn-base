<template>
	<view id="browse" :style="{height:Height}">
		<view v-if="list.length !=0">
			<template>
				<view class="list">
					<view class="list_item">
						<view class="item" v-for="(item,index) in list">
							<view class="lfte">
								<image :src="item.productSpuInfoEntity.imgUrl" mode=""></image>
							</view>
							<view class="right">
								
								<view class="name">
									{{item.productSpuInfoEntity.spuName || '已下架'}}
								</view>
								<view class="attribute">
									<view class="lfte">
										<text class="money">
											¥{{item.productSpuInfoEntity.floorPrice || 0}} - {{item.productSpuInfoEntity.highestPrice || 0}}
										</text>
										
									</view>
									<view class="right" @click.stop="getInfoById(item.spuId)">
										<image src="http://120.78.163.4:8082/commodity/vehicle.png" mode=""></image>
									</view>
								</view>
								
							</view>
						</view>
					
					</view>
					
				</view>
			</template>
		</view>
		
		<view class="noneList" v-else>
			<image src="http://120.78.163.4:8082/commodity/datanull.png" mode=""></image>
			<text>暂无数据</text>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				queryInfo: {
					pageNum: 1,
					pageSize: 10
				},
				
				list:[],
				
				
			};
		},
		onLoad() {
			this.getCollection()
			this.getAppHeight()
			
		},
		methods: {
			//跳转到商品详情页面
			getInfoById(id){
				// console.log(id)
				uni.navigateTo({
					url: '/pages/commodity/info?id=' + id
				});
				
			},
			getCollection() {
				
				
				this.$u.api.getHistory(this.queryInfo)
				.then(res => {
					// console.log(res);
					res.records.map(item=>{
						this.list.push(item);
					})
					
				}).catch((err)=>{
					console.log(err)
					
				})
			},
			getAppHeight(){
				this.Height = uni.getSystemInfoSync().windowHeight+ 'px';
			},
		}
	}
</script>

<style lang="scss">

	#browse{
		background-color: #F0F0F0;
		.list{
			.list_item{
				 border-bottom: 1px #e8e8e8 solid;
				.item{
					padding: 0 20rpx;
					height: 200rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background-color: #FFFFFF;
					&>.lfte{
						height: 160rpx;
						width: 160rpx;
						background-color: $u-main-color;
						border-radius: 8rpx;
						image{
							
							height: 160rpx;
							width: 160rpx;
							border-radius: 8rpx;
							
						}
					}
					&>.right{
						 margin-left: 20rpx;
						 height: 80px;
						 width: 517rpx;
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
	
		.noneList{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			image{
				padding-top: 263rpx;
				width: 480rpx;
				height: 313rpx;
			}
			text{
				padding-top: 40rpx;
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #808080;
			}
		}
	}
</style>
