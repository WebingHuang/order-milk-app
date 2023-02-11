<template>
	<view id="Withdrawal">


		<view class="item">
			<!-- 头部 -->
			<view class="top">
				<view class="lfte">
					提现方式
				</view>
				<view class="right" @click="openType">
					{{typeName}}
				</view>
				<u-select v-model="typeShow" mode="single-column" :list="typeList" 
					@confirm="typeAffirm" @cancel="typeCancel"></u-select>
			</view>
			<view class="top" v-if="isBank">
				<view class="lfte">
					银行卡
				</view>
				<view class="right" @click="openBank">
					{{bankCardName}}
				</view>
				<u-select v-model="show" mode="single-column" :list="bankList" label-name="bankCardName" value-name="bankCardFront" :default-value="[0]"
					@confirm="affirm" @cancel="cancel"></u-select>
			</view>
			<!-- 中间 -->
			<view class="text">
				<view class="lfte">
					提现金额
				</view>
				<view class="right">

				</view>
			</view>
			<!-- 底部 -->
			<view class="lower">
				<view class="lfte">
					<text>¥</text>
					<view class="right">
						<input type="number"  v-model="money" placeholder="请输入可提现金额" @change="quantityChange"/>
					</view>
				</view>
			</view>
			<view class="balan">
				当前余额为{{list.userBalance}}元，<text style="color: $u-main-color;" @click="allMoney">全部提现</text>
			</view>
		</view>

		<!-- 尾部 -->
		<view class="botomBtn">

			<view class="confirm" @click="confirm">
				确认提现
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
				typeName:"请选择提现方式",
				isBank:false,
				typeList:[ {
					label:"微信零钱",
					value:2,
				},{
					label:"银行卡",
					value:1,
				}],
				type:"",//提现方式
				typeShow:false,
				bankList: [],
				bankCardName:'请选择银行卡',
				bankCard:'',
			};
		},
		methods: {
			
			quantityChange(){
				
				// this.list = [];
							
				if(this.money){
					this.$u.api.checkQuantity({
						quantity:this.money
					
					}).then(res=>{
						console.log(res)
						
						this.actual = res.actual;
						this.rate = res.rate;
						this.serviceCharge = res.serviceCharge;
						this.toDay = res.toDay;
						this.isok = true;
					
					
					}).catch(err=>{
						this.isok = false;
						this.$u.toast(err.data.message);
					})
				}
				
				
				
			},
			
			
			typeAffirm(e){
				console.log(e)
				if(e[0].value === 2){
					//选的是微信零钱
					this.isBank = false;
					
				}else if(e[0].value === 1){
					//选的是银行卡
					this.isBank = true;
				}
				
				this.type = e[0].value; 
				this.typeName = e[0].label;
				
			},
			
			
			affirm(e) {
				// console.log(e)
				this.bankCardName = e[0].label
				this.bankCard = e[0].value
				this.show = false;
			},
			confirm:_.debounce(function() {
				if(	this.typeName == "请选择提现方式"){
					this.$u.toast('请选择提现方式');
					return
				}
				
				
				if(this.bankCard == '' && this.isBank){
					this.$u.toast('请选择银行卡');
					return
				}
				
				if(this.money == ''){
					this.$u.toast('请输入提现金额');
					return
				}
				
				if(/^[1-9]\d*$/.test(this.money)){
					this.$u.api.withdraw({
						bankCard:this.bankCard,
						quantity:this.money,
						status:this.type
					}).then(res=>{
						this.$u.toast('提现成功');
						this.getUserInfoList();
						this.money = "";
							
					}).catch(err=>{
						
						this.$u.toast(err.data.message);
					})
				}
			 }, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			
			openType(){
				this.typeShow = true;
			},
			//打开选择银行卡弹窗
			openBank(){
				
				
				if(this.bankList.length == 0){
					uni.navigateTo({
						url:'/pages/capital/addcard'
					})
					return
				}
				this.show = true;
			},
			cancel() {
				this.show = false;
			},
			
			typeCancel(){
				this.typeShow = false;
			},
			getUserInfoList() {
				this.$u.api.getUserInfo().then(res => {
					// console.log(res)
					this.list = res
				}).catch(err=>{
					console.log(err)
				})
			},
			//查询银行卡列表
			getBankList() {
				this.$u.api.queryBankList().then(res => {
					// console.log(res)
					if(res.length==0){
						
						// uni.navigateTo({
						// 	url:'/pages/capital/addcard'
						// })
					}else{
						this.bankList = res
					}
				}).catch()
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
			this.getBankList()
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
