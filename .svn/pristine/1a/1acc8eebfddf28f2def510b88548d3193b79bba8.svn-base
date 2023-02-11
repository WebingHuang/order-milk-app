<template>
	<view class="refundDetail" :style="{height: Height}" style="overflow-y: auto;">
		<!-- 顶部导航 -->
		<template>
			<view v-if="titles">
				<u-navbar :title="titles" :background="none" height="44" :border-bottom="false" title-color="#FFFFFF">
				</u-navbar>
			</view>
		</template>

		<!-- 插槽 -->
		<template>
			<slot></slot>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default () {
					return '';
				}
			},
		},
		data() {
			return {
				Height: "",
				titles: '',
			}
		},
		methods: {
			//获取系统高度
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		},
		mounted() {
			this.titles = this.title
		},
		created() {
			this.getAppHeight()
		}
	}
</script>

<style lang="scss" scoped>
	.refundDetail {
		background: url(http://120.78.163.4:8082/my/refund-detail-top-bg.png) no-repeat;
		background-size: contain;
		background-color: #F0F0F0;
	}
</style>
