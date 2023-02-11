<template>
	<view id="message">
		<view class="cardFrom">
			<u-form :model="form" ref="uForm">
				<u-form-item label="设置密码" prop="password" label-width="auto" style="display: flex;">
					<u-input v-model="form.password" placeholder="请输入密码" />
				</u-form-item>
				<u-form-item label="手机号" prop="phoneNumber" label-width="auto" style="display: flex;">
					<u-input v-model="form.phoneNumber" disabled="true" placeholder="请输入手机号" />
				</u-form-item>
				<u-form-item label="验证码" prop="verify" label-width="auto">
					<view class="verify">
						<u-input v-model="form.verify" placeholder="请输入验证码" />
						<view class="wrap">
							<u-toast ref="uToast"></u-toast>
							<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange">
							</u-verification-code>
							<view class="code_button" @tap="getCode">
								{{tips}}
							</view>
						</view>
					</view>
				</u-form-item>
			</u-form>
		</view>
		<view class="botomBtn">
			<view class="adres" @click="confirm">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				seconds: 60,
				form: {
					password: '',
					phoneNumber: '',
					verify: ''
				},
				rules: {
					password: [{
						required: true,
						message: '请输入密码',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					verify: [{
						required: true,
						message: '请输入验证码',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					phoneNumber: [{
						required: true,
						message: '请输入手机号',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}, {
						pattern: /^1[3|4|5|7|8][0-9]{9}$/,
						transform(value) {
							return String(value);
						},
						message: '请输入正确的手机号',
						trigger: ['change', 'blur'],
					}],
				},
			};
		},
		methods: {
			confirm(){
				this.$refs.uForm.validate(valid => {
					if(valid){
						// console.log('提交',this.form)
						this.$u.api.updatePassword({
							'newPassword':this.form.password,
							'phone':this.form.phoneNumber,
							'messageCode':this.form.verify
						}).then(res=>{
							// console.log(res)
							uni.redirectTo({
								url:'/pages/my/index'
							})
							uni.showToast({
								title:'修改成功',
								duration: 2000
							})
						}).catch()
					}
				})
			},
			codeChange(text) {
				if (parseInt(text)) {
					this.tips = parseInt(text) + "S";
				} else {
					this.tips = text;
				}
			},
			getCode() {
				if (this.form.phoneNumber == "") {
					this.$u.toast('请输入手机号');
					return
				}
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					});

					this.$u.api.getMessageCode({
						phone: this.form.phoneNumber
					}).then(res => {
						this.$u.toast('验证码已发送');
						this.$refs.uCode.start();
						this.form.verify = res.data;

					}).catch(err => {
						this.$u.toast(err.data.message);
						// console.log(err)
					})

				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				this.$u.toast('已发送');
			},
		},
		onLoad() {
			
		},
		onShow() {
			this.form.phoneNumber = uni.getStorageSync('phoneNumber')
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
	}
</script>

<style lang="scss">
	#message {
		.cardFrom {
			padding-left: 31rpx;
			background: #FFFFFF;

			.card {
				font-size: 28rpx;
				font-weight: bold;
				background-color: #F0F0F0;
			}
		}
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
				position: absolute;
				left: 20%;
				bottom: 27px;
				background: linear-gradient(180deg, #FF9933, #FF6633);
				color: #FFFFFF;
				font-weight: bold;
				border-radius: 100rpx;
				letter-spacing: 1px;
				font-size: 32rpx;
			}
		}
		
		.verify {
			display: flex;
			align-items: center;

			.wrap {
				padding: 60rpx;
				font-size: 20rpx;
			}
		}
	}
</style>
