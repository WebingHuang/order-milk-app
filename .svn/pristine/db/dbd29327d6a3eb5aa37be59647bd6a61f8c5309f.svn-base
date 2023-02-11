<template>
	<view id="crad">
		<template>
			<view>
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
			</view>
		</template>
		
		<template>
			<!-- <view>
				list
			</view> -->
			<view class="">
					<u-button @click="close = true;">打开弹窗</u-button>
					<u-popup mode="bottom" v-model="close">
						<view class="content">
							<scroll-view scroll-y="true" style="height: 300rpx;">
								<view>
									<view v-for="index in 20" :key="index">
										第{{index}}个Item
									</view>
								</view>
							</scroll-view>
							<view class="confrim-btn">
								<u-button @click="show = false;">确定</u-button>
							</view>
						</view>
					</u-popup>
				</view>
		</template>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				close: false
			};
		},
		onLoad(){
			uni.setNavigationBarTitle({
			    title: '会员卡领取'
			});
		},
	}
</script>

<style lang="scss">

</style>
