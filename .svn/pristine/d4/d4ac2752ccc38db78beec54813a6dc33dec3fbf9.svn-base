<template>
	<view id="company">
		<view class="wrap" v-for="(item,index) in list" :key="index">
			<view class="title">
				{{ item.title }}
			</view>
			<view class="attribute">
				<!-- {{ item.userName }} -->
				{{ item.updateDate | dateFilter }}
			</view>
			<!-- <view class="photo">
				
			</view> -->
			<view class="html">
				<u-parse :html="item.content" :tag-style="style"></u-parse>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				style:{
					img :'border-radius: 12rpx;'
				},
				
			};
		},
		onLoad(obj) {
			
			this.getCompany();
		},
		filters:{
			dateFilter(val){
				return val.substring(0,10);
			}
		},
		methods:{
			getCompany(){
				
				this.$u.api.getCompany()
				.then(res => {
					this.list.push(res);
				}).catch((err)=>{
					console.log(err)
					
				})
			}
		}
	}
</script>

<style lang="scss">
	
	#company{
		.title{
			margin-top: 38rpx;
			font-size: 36rpx;
			padding: 0 52rpx;
			color: #000000;
		
		}
		.attribute{
			padding: 0 31rpx;
			padding-top: 39rpx;
			color: #808080;
			font-size: 28rpx;
		}
		.photo{
			width: 686rpx;
			height: 280rpx;
		}
		.html{
			padding: 0 32rpx;
			padding-top: 32rpx;
			font-size: 28rpx;
			color: #000000;
			
		}
	}

</style>
