<template>
	<view class="feedback" :style="{height:Height}">
		<view class="main">
			<!-- 反馈 -->
			<view class="message-input">
				<u-input class="msg-input" height="88" v-model="value" placeholder="输入您要反馈的问题(必输)" type="text" :border="false" />
			</view>
			
			<!-- 描述 -->
			<view class="message-area">
				<u-input class="msg-area" v-model="reson" placeholder="添加描述以便我们提供更好的帮助(不超过200字)" type="textarea" height="220" />
			</view>
			
			<!-- 上传区域 -->
			<view class="upload">
				<!-- 顶部文字 -->
				<view class="upload-text">
					<view class="left">
						上传图片
					</view>
				</view>
				
				<!-- 上传组件 -->
				<u-upload ref="uUpload" class="upload-button" max-count="3" :action="action" :file-list="fileList"
				:custom-btn="true">
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
		</view>
		<view class="commit">
			<button size="medium" class="commit-btn" @click="commit">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height:"",
				action:'https://api.xianghuikejiapp.com/zxh/UploadPictures/upload',
				value:'',
				reson:'',
				imgLists:[],
			};
		},
		methods:{
			//获取系统高度
			getAppHeight(){
				this.Height = uni.getSystemInfoSync().windowHeight+ 'px';
			},
			commit(){
				let lists = this.$refs.uUpload.lists;
				let imgLists = [];
				for (let i = 0; i < lists.length; i++) {
					imgLists.push(lists[i].url)
				}
				this.imgLists = imgLists;
				if (this.imgLists.length == 0 || !this.value) {
					uni.showToast({
						title:'请填写反馈信息',
						type: 'error'
					})
				} else {
					let imgUrl = this.imgLists.toString();
					this.$u.api.userfeedback({
						content:this.reson,
						title:this.value,
						imgUrl
					}).then(res=>{
						uni.showToast({
							title: '反馈成功'
						})
						uni.redirectTo({
							url:'/pages/my/index'
						})
					}).catch()
				}
			},
		},
		onLoad() {
			this.getAppHeight()
		}
	}
</script>

<style lang="scss" scoped>
	.feedback {
		background-color: #F0F0F0;
		.main {
			border-top: 0.5rpx solid #F0F0F0;
			background-color: #FFFFFF;
			height: auto;
			// 反馈问题
			.message-input {
				height: 88rpx ;
				border-bottom: 0.5rpx solid #F0F0F0;
				padding-left: 32rpx;
				
				font-size: 28rpx;
				color: #808080;
			}
			// 文本域
			.message-area {
				border-bottom: 0.5rpx solid #F0F0F0;
				padding-left: 32rpx;
				
				font-size: 28rpx;
				color: #808080;
			}
			// 上传图片文本
			.upload-text {
				display: flex;
				margin-top: 22rpx;
				.left {
					color: #1A1A1A;
					background-color: #FFFFFF;
					
					font-size: 30rpx;				
					font-weight: bold;

					
					margin-left: 31rpx;
				}
				.left:after {
					 content: "(选填)";
					 color: #808080;
					 background-color: #FFFFFF;
					 font-weight: normal;
				}
			}
			// 上传
			.upload {
				padding-bottom: 20rpx;
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
		}
		// 按钮居中！
		.commit {
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			
			.commit-btn {
				border-radius: 34rpx;
				width: 400rpx;
				height: 68rpx;
				display: flex; 
				justify-content:center; 
				align-items:center;
				background-image: linear-gradient(#FF9933,#FF6633);
				
				color: #ffffff;
				font-size: 32rpx;
			}
		}
	}
	

</style>
