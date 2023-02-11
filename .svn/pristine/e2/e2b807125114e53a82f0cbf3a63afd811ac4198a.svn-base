<template>
	<view id="address" :style="{height:Height}" style="overflow-y:auto">
		<view class="list">
			<view class="item" v-for="item in addressList" :key="item.id">
				<!-- 头部 -->
				<view class="top">
					<view class="lfte">
						姓名：{{ item.studentName }}
					</view>
					<view class="right">
						{{ item.parentsMobile }}
					</view>
				</view>
				<!-- 中间 -->
				<view class="text">
					<view class="lfte">
						<!-- {{ item.provincesCode }}{{ item.cityCode }}{{ item.areaCode }}{{ item.address }} -->
						{{item.schoolName}}{{item.className}}
					</view>
					<view class="right">
					</view>
				</view>
				<!-- 底部 -->
				<view class="lower">
					<view class="lfte">
						<u-checkbox v-model="item.checked" :disabled="item.sequence === '1' ? true : false"
							active-color="red" @change="preferredAddress(item)"><text
								:class="item.sequence === '1' ? 'activeColor' : ''">默认地址</text></u-checkbox>
					</view>
					<view class="right">
						<view class="item" @click="edit(item)">
							<image src="http://120.78.163.4:8082/address/bianji.png" mode=""></image>
							<text>编辑</text>
						</view>
						<view class="item" @click="remove(item)">
							<image src="http://120.78.163.4:8082/address/shanchu.png" mode=""></image>
							<text>删除</text>
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="button">
			<view class="adres" @click="toEditaddress">
				添加学生信息
			</view>
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
	</view>


</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				checked: false,
				addressList: [],
			};
		},
		onLoad() {
			this.getAppHeight();
		},
		onShow() {
			this.getAddressList();
		},
		methods: {
			getAddressList() {
				this.$u.api.queryUserInformation().then(res => {
					res.forEach(item => {
						item.checked = item.sequence === '1' ? true : false;
					})
					this.addressList = res.filter(e => e.deleteFlag == 1);
				}).catch(err => {})
			},
			edit(item) { //修改
				uni.navigateTo({
					url: '/pages/address/edit?id=' + item.id
				})
			},
			remove(item) { //删除
				console.log(item, '删除')
				delete item.checked;
				this.$u.api.addOrUpdateStuInformation(Object.assign({},item, {
					deleteFlag: '0'
				})).then(res => {
					this.getAddressList();
					// this.$refs.uToast.show({
					// 	title: '删除成功',
					// 	type: 'success',
					// })
					uni.showToast({
						title:'删除成功',
						icon:'none'
					})
				}).catch(err => {})
			},
			preferredAddress(item) { //设置默认地址
				if (item.sequence === '0') {
					delete item.checked;
					// let defaultAddr = this.addressList.find(e => e.sequence == '1');
					Promise.all([
						// this.$u.api.addOrUpdateStuInformation(Object.assign({}, defaultAddr, {
						// 	sequence: '0',
						// })),
						this.$u.api.addOrUpdateStuInformation(Object.assign({}, item, {
							sequence: '1',
						}))
					]).then(res => {
						this.getAddressList();
					}).catch(err => {

					})
				}
			},
			toEditaddress() {
				uni.navigateTo({
					url: '/pages/address/edit'
				});
			},

			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		}
	}
</script>

<style lang="scss">
	#address {
		background-color: #F0F0F0;
		padding-top: 22rpx;

		.list {

			// margin-top:20rpx;
			// margin-bottom: 20rpx;
			.item {
				margin: 21rpx 20rpx;
				padding: 0 32rpx;
				padding-bottom: 20rpx;
				background-color: #FFFFFF;
				border-radius: 28rpx;
				// padding-bottom: 22rpx;
				flex-direction: column;

				.top {
					display: flex;
					justify-content: space-between;
					flex-wrap: nowrap;

					&>.lfte {
						color: #1A1A1A;
						font-size: 28rpx;
						font-weight: bold;
						padding-top: 32rpx;
						padding-bottom: 30rpx;
					}

					&>.right {
						color: #1A1A1A;
						font-size: 28rpx;
						font-weight: bold;
						padding-top: 32rpx;
						padding-bottom: 30rpx;
					}
				}

				.text {
					&>.lfte {
						color: #808080;
					}

					&>.right {}
				}

				.lower {
					display: flex;
					justify-content: space-between;
					padding-top: 33rpx;

					&>.lfte {
						color: #FA732C;
						font-size: 24rpx;
						display: flex;
						align-items: center;

						image {
							width: 28rpx;
							height: 28rpx;
						}

						text {
							margin-left: 12rpx;
						}

						.activeColor {
							color: red;
						}
					}

					&>.right {
						font-size: 24rpx;
						color: #808080;
						display: flex;
						align-items: center;
						justify-content: space-between;

						&>.item {
							display: flex;
							align-items: center;
							justify-content: space-between;
							flex-direction: row;
							padding: 0;

						}

						image {
							width: 28rpx;
							height: 28rpx;

						}

						text {
							margin-left: 12rpx;
						}
					}
				}
			}

			.item1 {
				margin-top: 10px;
			}
		}

		.button {
			position: fixed;
			bottom: 40rpx;
			width: 100%;
			display: flex;
			justify-content: center;

			.adres {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 400rpx;
				height: 68rpx;
				background-color: $u-main-color;
				color: #FFFFFF;
				font-weight: bold;
				border-radius: 100rpx;
				letter-spacing: 2px;
				margin: 0 auto;
			}
		}
	}
	.u-icon__icon{
		margin: 0 !important;
	}
</style>
