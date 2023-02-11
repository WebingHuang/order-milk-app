<template>
	<view id="return" :style="{height:Height}">
		<view class="item">
			<view class="square">

			</view>
			<view class="top">
				<view class="biao">
					我是标题我是标题我是标题我是标题...
				</view>
				<view class="lfte">
					某某某规格 丨 某某某规格…
				</view>
			</view>
		</view>

		<view class="cards">
			<u-cell-group class="card">
				<u-cell-item title="退货数量" value="12"></u-cell-item>
				<view class="goodsCode">
					<view class="code">
						退款原因
					</view>
					<view class="codeHint">
						<input class="uni-input" v-model="cardCode" placeholder="请输入" />
						<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
					</view>
				</view>
				<u-cell-item title="退货金额" value="¥69.00"></u-cell-item>
			</u-cell-group>
		</view>
		<!-- 上传区域 -->
		<view class="upload">
			<!-- 顶部文字 -->
			<view class="upload-text">
				<view class="left">
					上传凭证
				</view>
			</view>

			<!-- 上传组件 -->
			<u-upload class="upload-button" max-count="3" :action="action" :file-list="fileList" :custom-btn="true">
				<view class="slot-btn" slot="addBtn" hover-class="slot-btn__hover" hover-stay-time="150">
					<view class="top">
						上传凭证
					</view>
					<view class="bottom">
						(最多3张)
					</view>
				</view>
			</u-upload>
		</view>
		<!-- 按钮 -->
		<view class="botomBtn">

			<view class="adres">
				提交申请
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				list: [],
			};
		},
		methods: {

			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},

		},
		onLoad(option) {
			this.list = JSON.parse(decodeURIComponent(option.list));
			console.log(this.list)
			this.getAppHeight()
		}
	}
</script>

<style lang="scss">
	#return {
		background-color: #F0F0F0;

		.item {

			padding: 0 32rpx;
			padding-bottom: 20rpx;
			background-color: #FFFFFF;
			padding-top: 20rpx;
			width: 750rpx;
			height: 140rpx;
			display: flex;

			.square {

				// width: 100rpx;
				// height: 100rpx;
				// background-color: $u-main-color;
				// border-radius: 12rpx;
				// display: inline-block;
				// align-items: center;
				image {
					width: 100rpx;
					height: 100rpx;
				}
			}

			.top {
				font-size: 28rpx;
				display: inline-block;
				text-align: left;
				width: 480rpx;
				color: #1A1A1A;
				position: absolute;
				right: 118rpx;

				&>.lfte {
					font-size: 24rpx;
					color: #808080;
				}

				&>.biao {
					color: #1A1A1A;
					font-weight: bold;
				}
			}
		}

		.cards {
			// padding: 0 21rpx;

			.card {
				margin: 5rpx;
				width: 100%;
				font-size: 28rpx;
				font-weight: bold;
				color: #1A1A1A;

				.goodsCode {
					display: flex;
					justify-content: space-between;
					padding-top: 53rpx;
					padding-left: 19rpx;
					padding-bottom: 27rpx;

					.code {
						font-size: 28rpx;
						font-family: Source Han Sans CN;
						color: #1A1A1A;
						font-weight: bold;
						display: flex;
						align-items: center;
						padding-left: 20rpx;
					}

					.codeHint {
						display: flex;
						align-items: center;
						padding-right: 20rpx;
						flex: 1;
						justify-content: space-around;

						image {
							width: 12rpx;
							height: 24rpx;
							padding-left: 20rpx;
						}
					}
				}

				u-cell-item:nth-child(2) {

					.u-cell__value {
						color: $u-main-color !important;
					}
				}

			}
		}

		// 上传图片文本
		.upload-text {
			display: flex;
			margin-top: 22rpx;

			.left {
				margin-top: 11rpx;
				color: #1A1A1A;
				background-color: #FFFFFF;
				font-size: 30rpx;
				font-weight: bold;
				margin-left: 31rpx;
			}

			.left:after {
				color: #808080;
				background-color: #FFFFFF;
				font-weight: normal;
			}
		}

		// 上传
		.upload {
			padding-bottom: 20rpx;
			background-color: #FFFFFF;

			// 上传组件
			.upload-button {

				// slot插槽
				.slot-btn {
					background: url(http://120.78.163.4:8082/feedback/upload.png) no-repeat;
					background-size: cover;

					width: 140rpx;
					height: 140rpx;

					margin-left: 32rpx;
					margin-top: 17rpx;

					display: flex;
					flex-direction: column;

					.top {
						margin-top: 66rpx;
						margin-left: 31rpx;
						font-size: 20rpx;
					}

					.bottom {
						margin-left: 28rpx;
						margin-bottom: 21rpx;
						font-size: 20rpx;
					}
				}
			}
		}

		//按钮
		.botomBtn {
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 27px;
			display: flex;
			justify-content: center;
			align-items: center;

			.adres {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 400rpx;
				height: 68rpx;

				background-color: #FF6633;
				color: #FFFFFF;
				font-weight: bold;
				border-radius: 100rpx;
				letter-spacing: 1px;
				font-size: 32rpx;
			}
		}
	}
</style>
