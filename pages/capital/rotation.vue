<template>
	<view id="Withdrawal">


		<view class="item">
			<!-- 头部 -->
			<view class="top">
				<view class="lfte">
					手机号
				</view>
				<view class="right" >
					<u-input v-model="phone" type="number" @blur="phoneBlur" />
				</view>
			
			</view>
			<!-- 中间 -->
			<view class="text">
				<view class="lfte">
					转出金额
				</view>
				<view class="right">

				</view>
			</view>
			<!-- 底部 -->
			<view class="lower">
				<view class="lfte">
					<text>¥</text>
					<view class="right">
						<input type="number"  v-model="money" placeholder="请输入转出现金额" @change="quantityChange"/>
					</view>
				</view>
			</view>
			<view class="balan">
				当前余额为{{list.userBalance}}元，<text style="color: $u-main-color;" @click="allMoney">全部转出</text>
			</view>
		</view>
		<view class="item" v-if="userInfo.userPhone">
			<view class="">
				转入到{{userInfo.userPhone}}
			</view>
			<view class="user_info">
				用户信息
			</view>
			<view class="" style="text-align: center;">
				<view class="">
					<image :src="userInfo.userHeader" mode="" style="width: 200rpx;height: 200rpx;"></image>
				</view>
				<view class="">
					用户名：{{userInfo.userName || userInfo.openName}}
				</view>
			</view>
		</view>

		<!-- 尾部 -->
		<view class="botomBtn">

			<view class="confirm" @click.stop="confirm">
				确认转出
			</view>
		</view>
	</view>
</template>

<script>
	import _ from "lodash"
	export default {
		data() {
			return {
				list: [],
				actual:"", //实际到账
				rate:"",//费率
				serviceCharge:"", //服务费
				toDay:"", //今日剩余提现额度
				money: '',
				isok:false,
				show: false,
				bankList: [],
				bankCardName:'请选择银行卡',
				bankCard:'',
				phone:"",
				userInfo:{
					
				},//转出用户信息
			};
		},
		methods: {
			
			//监听输入框
			phoneBlur(){
				if(this.phone){
					console.log(this.phone)
					this.$u.api.getUserInfoByPhone({
						phone:this.phone
					
					}).then(res=>{
						console.log(res)
						if(res){
							this.userInfo = res;
							
						}else{
							this.$u.toast("查无该用户信息，请核实手机号");
						}
						
						
					
					}).catch(err=>{
						
						this.$u.toast(err.data.message);
					})
					
				}else{
					//为空
					this.userInfo = {};
				}
				
			},
			quantityChange(){
				
				// this.list = [];
							
				// if(this.money){
				// 	this.$u.api.checkQuantity({
				// 		quantity:this.money
					
				// 	}).then(res=>{
				// 		console.log(res)
						
				// 		this.actual = res.actual;
				// 		this.rate = res.rate;
				// 		this.serviceCharge = res.serviceCharge;
				// 		this.toDay = res.toDay;
				// 		this.isok = true;
					
					
				// 	}).catch(err=>{
				// 		this.isok = false;
				// 		this.$u.toast(err.data.message);
				// 	})
				// }
				
				
				
			},
			
			
			affirm(e) {
				// console.log(e)
				this.bankCardName = e[0].label
				this.bankCard = e[0].value
				this.show = false;
			},
			confirm:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				if(this.money == ''){
					this.$u.toast('请输入转出金额');
					return
				}
				
				if(/^[1-9]\d*$/.test(this.money) ){
					this.$u.api.setAccounts({
						money:this.money,
						phone:this.phone
					}).then(res=>{
					
						this.$u.toast('转出成功');
						this.getUserInfoList();
					
					}).catch(err=>{
						console.log(err)
						this.$u.toast(err.data.message);
					})
				}
				
			 }, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
		
		
			
			getUserInfoList() {
				this.$u.api.getUserInfo().then(res => {
					// console.log(res)
					this.list = res
				}).catch(err=>{
					console.log(err)
				})
			},
			
			
			allMoney() {
				// console.log('全部提现')
				this.money = parseInt(this.list.userBalance);
				
				this.quantityChange();
			},
		},
		onLoad() {
			this.getUserInfoList()
			
		},
		onShow(){
			
		},
	}
</script>

<style lang="scss">
	#Withdrawal {

		.item {

			padding: 0 32rpx;
			padding-bottom: 20rpx;
			background-color: #FFFFFF;
			border-radius: 28rpx;
			padding-bottom: 22rpx;
			flex-direction: column;

			.top {
				image {
					width: 40rpx;
					height: 40rpx;

					top: 34rpx;
					position: absolute;
					left: 239rpx;

				}

				display: flex;
				justify-content: space-between;
				flex-wrap: nowrap;


				&>.lfte {
					color: #1A1A1A;
					font-size: 32rpx;
					font-weight: bold;
					padding-top: 32rpx;
					padding-bottom: 30rpx;
				}


				&>.right {
					color: #4D4D4D;
					font-size: 28rpx;
					padding-top: 32rpx;
					padding-bottom: 30rpx;
					position: absolute;
					left: 300rpx;


				}
			}

			.text {

				&>.lfte {
					color: #1A1A1A;
					font-size: 32rpx;
					font-weight: bold;
				}

				&>.right {}
			}

			.lower {
				display: flex;
				justify-content: space-between;
				padding-top: 33rpx;

				width: 100%;

				&>.lfte {
					color: #1A1A1A;
					font-size: 32rpx;
					display: flex;
					align-items: center;
					
					input{
						// font-size: 28rpx;
						// font-weight: bold;
					}
					image {
						width: 28rpx;
						height: 28rpx;

					}

					text {
						margin-left: 12rpx;
					}
				}


				width: 100%;

				border-bottom: solid #F0F0F0 1px;

				&>.right {
					
					
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

			.balan {
				margin-top: 40rpx;
				margin-left: 14.5rpx;
				font-size: 24rpx;
			}
	
			.user_info{
				font-size: 36rpx;
				font-weight: bold;
				text-align: center;
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

			.confirm {
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
	}
</style>
