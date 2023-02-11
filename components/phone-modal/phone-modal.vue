<template>
	<view class="phone-modal">
		<view class="phone-box">
			<view class="phone-list">
				<view class="row" v-for="(item, key) in list" :key="key">
					<a :href="'tel:' + item.phone">
						{{item.name}}: {{item.phone}}
					</a>
				</view>
			</view>
			<view class="button phone-cancel" @click="cancel()">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			},
			list: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				show: false,
			}
		},
		methods: {
			getReq() {
				this.$u.api.queryContactUs().then(res => {
					this.list = res;
					console.log('list', this.list, res);
				})
			},
			cancel() {
				this.show = false;
				this.$emit('input', this.show);
			},
		}
	}
</script>

<style lang="scss" scoped>
.phone-modal {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #b2b2b280;
	z-index: 9;
	// opacity: .8;
	.phone-box {
		position: relative;
		height: 100%;
		.phone-list {
			position: absolute;
			bottom: 86px;
			left: 0;
			right: 0;
			z-index: 10;
			
			.row {
				background-color: white;
				text-align: center;
				border-bottom: 4px solid #f3f3f3;
				height: 36px;
				line-height: 36px;
				color: black;
			}
		}
		.phone-cancel {
			position: absolute;
			bottom: 48px;
			background-color: white;
			height: 40px;
			line-height: 40px;
			left: 0;
			right: 0;
			z-index: 10;
			text-align: center;
			color: black;
		}
	}
}
</style>
