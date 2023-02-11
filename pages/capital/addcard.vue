<template>
	<view id="addcard" :style="{height:Height}">
		<!-- <u-cell-group class="card">
				<u-cell-item  title="银行卡"><u-input v-model="cardName" placeholder="东莞农商银行" type="text" /></u-cell-item>
				<u-cell-item  title="卡号"><u-input v-model="cardNumber" type="text" /></u-cell-item>
				<u-cell-item  title="持卡人"><u-input v-model="cardNumber" placeholder="持卡人姓名" type="text" /></u-cell-item>
				<u-cell-item  title="身份证"><u-input v-model="cardNumber" placeholder="身份证号码" type="text" /></u-cell-item>
				<u-cell-item  title="手机号"  @click="toaddcard()" ><u-input v-model="cardNumber" placeholder="银行预留手机号" type="text" /></u-cell-item>
			</u-cell-group> -->
		<view class="cardFrom">
			<u-form :model="form" ref="uForm">
				<!-- <u-form-item label="银行卡" prop="cardName" label-width="auto">
					<u-input v-model="form.cardName" placeholder="请输入银行卡" />
				</u-form-item> -->
				<u-form-item label="卡号" prop="cardNumber" label-width="auto">
					<u-input v-model="form.cardNumber" placeholder="请输入卡号" />
				</u-form-item>
				<u-form-item label="持卡人" prop="cardholder" label-width="auto">
					<u-input v-model="form.cardholder" placeholder="请输入持卡人" />
				</u-form-item>
				<u-form-item label="身份证" prop="IdNumber" label-width="auto">
					<u-input v-model="form.IdNumber" placeholder="请输入身份证" />
				</u-form-item>
				<u-form-item label="手机号" prop="phoneNumber" label-width="auto" style="display: flex;">
					<u-input v-model="form.phoneNumber" placeholder="请输入手机号" />
				</u-form-item>
				<!-- <u-form-item label="验证码" prop="verify" label-width="auto">
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
				</u-form-item> -->
			</u-form>
		</view>
		<view class="botomBtn">
			<view class="adres" @click="toaddcard">
				绑定银行卡
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				tips: '',
				seconds: 60,
				form: {
					// cardName: '',
					cardNumber: '',
					cardholder: '',
					IdNumber: '',
					phoneNumber: '',
					verify: '666' //验证码
				},
				rules: {
					// 字段名称
					// cardName: [{
					// 	required: true,
					// 	message: '请输入银行卡',
					// 	trigger: ['change', 'blur'],
					// }],
					cardNumber: [{
							required: true,
							message: '请输入卡号',
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change', 'blur'],
						}, {
							pattern: /^\d{16}|\d{19}$/,
							transform(value) {
								return String(value);
							},
							message: '银卡输入不正确',
							trigger: ['change', 'blur'],
						}
					],
					verify: [{
						required: true,
						message: '请输入验证码',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					cardholder: [{
						required: true,
						message: '请输入持卡人',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}, {
						pattern: /^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/,
						transform(value) {
							return String(value);
						},
						message: '请输入正确的持卡人',
						trigger: ['change', 'blur'],
					}],
					IdNumber: [{
						required: true,
						message: '请输入身份证',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}, {
						pattern: /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/,
						transform(value) {
							return String(value);
						},
						message: '请输入正确的身份证',
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
		onLoad() {
			this.getAppHeight();
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
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
			toaddcard() {
				this.$refs.uForm.validate(valid => {
					// console.log(valid,'toaddcard-----------');
					if (valid) {
						this.$u.api.queryByBank({
							bank:this.form.cardNumber
						}).then(res=>{
							this.$u.api.BindingBankCard({
								bankCardFront: this.form.cardNumber,
								idCard: this.form.IdNumber,
								mobile: this.form.phoneNumber,
								userName: this.form.cardholder,
								messageCode: this.form.verify
							}).then(res => {
								// console.log(res)
								
								uni.navigateBack();
								
								// uni.redirectTo({
								// 	url: '/pages/capital/card'
								// })
							}).catch(err => {
								this.$u.toast(err.msg);
							})
						}).catch(err=>{
							// console.log(err)
							if(!err.data){
								this.$u.toast('银行卡已存在');
							}
						})
					} else {
						console.log('验证失败');
					}
				});
				// uni.navigateTo({
				// 	url: '/pages/capital/message'
				// });
			},
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		}
	}
</script>

<style lang="scss">
	#addcard {
		background-color: #F0F0F0;
		height: 1506rpx;

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
