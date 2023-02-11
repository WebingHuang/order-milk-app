<template>
	<pageRefund>
		<view id="unsentDetail">
			<view class="row" v-for="item in unsentDetails" :key="item.id">
				<view class="skuPic">
					<image :src="item.skuPic" mode=""></image>
				</view>
				<view class="right-box">
					<view class="skuName">
						{{item.skuName}}
					</view>
					<view class="skuQuantity">
						订购数量：{{item.skuQuantity}}盒
					</view>
					<view class="prensentNum">
						赠送数量：{{item.presentedNum}}盒
					</view>
					<view class="unsentNum">
						未送数量：{{item.unsentNum}}盒
					</view>
				</view>
			</view>
		</view>
	</pageRefund>
</template>

<script>
	import pageRefund from '@/components/page-refund/page-refund.vue'
	export default {
		components: {
			pageRefund
		},
		data() {
			return {
				unsentDetails: [],
			}
		},
		onLoad(option) {
			this.getReq(option.orderId);
		},
		methods: {
			getReq(orderId) {
				this.$u.api.queryMilkNumber({
					orderId
				}).then(res => {
					this.unsentDetails = res.unsentDetails;
				})
			},
		}
	}
</script>

<style lang="scss">
#unsentDetail {
	margin: 0.5em;
	display: flex;
	flex-direction: column;
	.row {
		display: flex;
		flex-direction: row;
		margin: 21rpx 20rpx;
		padding: 0 32rpx;
		padding-bottom: 20rpx;
		background-color: #FFFFFF;
		border-radius: 28rpx;
		justify-content: space-between;
		align-items: center;
		.skuPic {
			image{
				padding: 20rpx;
				border-radius: 16rpx;
				width: 180rpx;
				height: 180rpx;
			}
		}
		
		
		.right-box {
			height: 180rpx;
			width: 100%;
			padding-left: 12rpx;
			.skuName {
				font-size: 30rpx;
				color: #ff7f27;
				line-height: 36rpx;
				// margin-right: 20rpx;
				letter-spacing: 1rpx;
			}
			.skuQuantity {
				font-size: 28rpx;
				color: #a44aa4;
				line-height: 36rpx;
				// margin-right: 20rpx;
				letter-spacing: 1rpx;
			
			}
			
			.prensentNum {
				font-size: 28rpx;
				color: #a44aa4;
				line-height: 36rpx;
				// margin-right: 20rpx;
				letter-spacing: 1rpx;
			}
			
			.unsentNum {
				font-size: 28rpx;
				color: #a44aa4;
				line-height: 36rpx;
				// margin-right: 20rpx;
				letter-spacing: 1rpx;
			
			}
		}
	}
}
</style>
