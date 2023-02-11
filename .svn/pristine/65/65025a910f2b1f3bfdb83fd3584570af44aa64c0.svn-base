<template>
	<view id="balance" :style="{height:Height}">
		<!-- 头部 -->
		<view class="list">
			<view class="item" v-for="(item,index) in list" :key="index" @click.stop="toInfo(item.id)">
				<view class="lfte">
					<text class="title">
						{{item.title}}
					</text>
					<text class="text">
						{{item.updateDate}}
					</text>
				</view>
				<view class="right">
					<text class="money">
						<!-- {{item.money}} -->
					</text>
					<text class="text">
						
					</text>
				</view>
			</view>
			<u-loadmore :status="status" />
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				page: {
					status: 'loadMore',
					pageNum: 1,
					pageSize: 15
				},
				list:[],
			};
		},
		methods: {
			toInfo(id){
				uni.navigateTo({
					url: '/pages/notice/info?id='+id
				});
			},
			//获取系统高度
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
			getMoneyInfoList(){
				console.log("进入方法")
				this.$u.api.getNoticeList({
					"pageNum": this.page.pageNum,
					"pageSize": this.page.pageSize
				}).then(res=>{
				
					res.records.forEach(item => {
						this.list.push(item)
					})
				
					if (res.current == res.pages) {
						console.log("分页结束")
						this.page.status = 'noneMore';
					}
				}).catch()
			},
		},
		onReachBottom() { //上拉加载
			console.log("")
			if (this.page.status === 'loadMore') {
				this.page.pageNum++;
				this.getMoneyInfoList();
			}
		},
		onLoad() {
			this.getAppHeight()
			this.getMoneyInfoList()
		}
	}
</script>

<style lang="scss">
	#balance {
		background-color: #F0F0F0;

		.list {
			.item {
				width: 100%;
				height: 112rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 32rpx;
				border-bottom: solid #F0F0F0 1px;
				background-color: #FFFFFF;

				.lfte {
					display: flex;
					flex-direction: column;

					.title {
						font-weight: bold;
						font-size: 28rpx;
						color: #1A1A1A;
					}

					.text {
						font-size: 24rpx;
						color: #4D4D4D;
					}
				}

				.right {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					.money {
						font-weight: bold;
						color: $u-main-color;
						font-size: 32rpx;
					}

					.delmoney {
						color: #1A1A1A;
						font-weight: bold;
						font-size: 32rpx;
					}

					.text {
						font-size: 24rpx;
						color: #4D4D4D;
					}
				}
			}
		}


	}
</style>
