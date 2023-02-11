<template>
	<view id="my" :style="{height:Height}">
		<phone-modal v-model="showPhone" :list="list" v-if="showPhone"></phone-modal>
		<template>
			<view>
				<u-navbar :is-back="false" title="我的" :background="none" :border-bottom="false" title-color="#FFFFFF">
				</u-navbar>
			</view>
		</template>

		<template>
			<view class="top u-skeleton">

				<view class="user_info">
					<view class="lfte" @click="getUserInfo">
						<view class="portrait">
							<view class="imageView" v-if="!avatarUrl"></view>
							<image :src="avatarUrl" mode="" v-else></image>
						</view>
						<view class="info">
							<text class="name">
								{{ !nickName ? '用户名称' : nickName }}
							</text>
							<text class="role">
								{{role}}
							</text>
						</view>
					</view>
					<view class="right">
						<image src="http://120.78.163.4:8082/my/dj.png" mode=""></image>
					</view>
				</view>
				
				<view class="attribute" v-if="isAgent">
					<view class="item" @click="tobrowse">
						<text>
							{{browseCount}}
						</text>
						<text>
							历史
						</text>
					</view>
					<view class="boder-hr">

					</view>
					<view class="item" @click="toCollection">
						<text>
							{{collectCount}}
						</text>
						<text>
							收藏
						</text>
					</view>
					<view class="boder-hr">

					</view>
					<view class="item" @click="toMemberCard">
						<text>
							{{cardNum}}
						</text>
						<text>
							会员卡
						</text>
					</view>
				</view>
				<view class="attributes" v-else>
					<view class="item" @click="tobrowse">
						<text>
							{{browseCount}}
						</text>
						<text>
							历史
						</text>
					</view>
					<view class="boder-hr">
					
					</view>
					<view class="item" @click="toCollection">
						<text>
							{{collectCount}}
						</text>
						<text>
							收藏
						</text>
					</view>
				</view>
			</view>
		</template>

		<template>
			<view class="card">

				<view class="top_all" @click="toOrder">

					<text class="lfte" >
						全部订单
					</text>

					<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>

				</view>

				<view class="option">
					<view class="option_item" @click="obligation">

						<image src="http://120.78.163.4:8082/my/dfk.png" mode=""></image>
						<text>
							待付款
						</text>
					</view>
					<view class="option_item" @click="shipments">

						<image src="http://120.78.163.4:8082/my/dfh.png" mode=""></image>
						<text>
							待送货
						</text>
					</view>
					<view class="option_item" @click="receiving">
						<image src="http://120.78.163.4:8082/my/dsh.png" mode=""></image>
						<text>
							送货中
						</text>
					</view>
					<!-- <view class="option_item" @click="tosales">

						<image src="http://120.78.163.4:8082/my/tksh.png" mode=""></image>
						<text>
							退款/售后
						</text>
					</view> -->
				</view>


				<view class="list">

				<!-- 	<view class="list_item" v-if="isAgent" @click="toTem" >
						<view class="lfte">
							<image src="http://120.78.163.4:8082/my/tem.png" mode=""></image>
							<text>
								我的团队
							</text>
						</view>
						<view class="right">
							<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
						</view>
					</view>
					<view class="list_item" @click="toCapital">
						<view class="lfte">
							<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/money.png" mode=""></image>
							<text>
								账户资金
							</text>
						</view>
						<view class="right">
							<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
						</view>
					</view>
					 -->
					<view class="list_item" @click="toAddress">
						<view class="lfte">
							<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/address.png" mode=""></image>
							<text>
								学生信息
							</text>
						</view>
						<view class="right">
							<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
						</view>
					</view>
					
					<!-- <view class="list_item">
						
						<button open-type="contact" show-message-card session-from send-message-path send-message-title :plain="true">
							<view class="lfte">
								<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/kh.png" mode=""></image>
								<text>
									投诉反馈
								</text>
							</view>
							<view class="right">
								<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
							</view>
						</button>
					</view> -->
					
					<view class="list_item" @click.stop="toCompany">
							<view class="lfte">
								<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/company.png" mode=""></image>
								<text>
									公司介绍
								</text>
							</view>
							<view class="right">
								<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
							</view>
					</view>
					<view class="list_item" @click.stop="toNotice">
						<view class="lfte">
							<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/notice.png" mode=""></image>
							<text>
								公告资讯
							</text>
						</view>
						<view class="right">
							<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
						</view>
					</view>
					<view class="list_item">
						
						<button open-type="contact" show-message-card session-from send-message-path send-message-title :plain="true">
							<view class="lfte">
								<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/kh.png" mode="" ></image>
								<text>
									在线客服
								</text>
							</view>
							<view class="right">
								<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
							</view>
						</button>
					</view>
					<view class="list_item">
						
						<button @click="showPhone=!showPhone" show-message-card session-from send-message-path send-message-title :plain="true">
							<view class="lfte">
								<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/agent.png" mode="" ></image>
								<text>
									联系方式
								</text>
							</view>
							<view class="right">
								<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
							</view>
						</button>
					</view>
					
					<!-- <view class="list_item">
						
						<button open-type="contact" show-message-card session-from send-message-path send-message-title :plain="true">
							<view class="lfte">
								<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/agent.png" mode=""></image>
								<text>
									升级代理
								</text>
							</view>
							<view class="right">
								<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
							</view>
						</button>
					</view> -->
					<view class="list_item" @click="setPassword" v-if="isAgent">
						<view class="lfte">
							<image style="width:40rpx;height:40rpx;" src="http://120.78.163.4:8082/my/mm.png" mode=""></image>
							<text>
								设置密码
							</text>
						</view>
						<view class="right">
							<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
						</view>
					</view>
					<!-- <view class="list_item" @click="toFeedback">
						<view class="lfte">
							<image src="http://120.78.163.4:8082/my/feedback.png" mode=""></image>
							<text>
								投诉反馈
							</text>
						</view>
						<view class="right">
							<image src="http://120.78.163.4:8082/index/dj.png" mode=""></image>
						</view>
					</view> -->
				</view>

			</view>
		</template>
		<tarbar id="tarbar" @change="handlerClick" :current="current" />

	</view>
</template>

<script>
	import _ from "lodash"
	import phoneModal from "../../components/phone-modal/phone-modal.vue"
	export default {
		components: {
			phoneModal
		},
		data() {
			return {
				list: [],
				showPhone: false,
				browseCount:0, //浏览||历史数量
				cardNum:0, //会员卡的数量
				collectCount:0, // 收藏数量
				Height: "",
				background: "none",
				code: "",
				nickName:'',
				avatarUrl:'',
				current:3,
				role:'普通用户',
				isAgent:false, //是否是代理
				

			};
		},
		onPullDownRefresh() {
		    // console.log("------下拉刷新")
			this.getUserInfo();
		    
		},
		onShow() {
			// this.getUserInfo();
			
			if(uni.getStorageSync('token')){
				this.getOpenInfo();
			}
			
		},
		onLoad() {
			this.nickName = uni.getStorageSync('nickName');
			this.avatarUrl = uni.getStorageSync('avatarUrl');
			this.getAppHeight();
			this.getUserInfo();
			this.getReq();
		},
		methods: {
			getReq() {
				this.$u.api.queryContactUs().then(res => {
					this.list = res;
				})
			},
			//初始化
			init(){
				this.browseCount = 0;
				this.cardNum = 0;
				this.collectCount = 0;
			},
			
			//跳转公告列表
			toNotice(){
				uni.navigateTo({
					url: '/pages/notice/index'
				});
			},
			
			//跳转公司介绍
			toCompany() {
				uni.navigateTo({
					url: '/pages/company/index'
				});
			},
			setPassword(){
				uni.navigateTo({
					url:'/pages/capital/message'
				})
			},
			handlerClick(index) {
				// console.log(index)
				this.current = index
			},
			allOrders(){
				uni.navigateTo({
					url:'/pages/order/index'
				})
			},
			in_array(stringToSearch, arrayToSearch) {
			     for (var s = 0; s < arrayToSearch.length; s++) {
			      var thisEntry = arrayToSearch[s].toString();
			      if (thisEntry == stringToSearch) {
			       return true;
			      }
			     }
			     return false;
			},
			
			getOpenInfo(){
				this.init();
				this.$u.api.getOpenInfo()
					.then(res => {
						// console.log(res,'res----------',res.browseCount,res.collectCount,res.cardNum)
						uni.setStorageSync('nickName',res.userName);
						uni.setStorageSync('avatarUrl', res.userHeader);
						this.nickName = uni.getStorageSync('nickName');
						this.avatarUrl = uni.getStorageSync('avatarUrl');
						this.browseCount = res.browseCount;
						this.collectCount = res.collectCount;
						this.cardNum = res.cardNum;
						
						if(this.in_array('944f251d-2a9e-49d2-b416-7eaa6b68ee3f',res.roleCode)){ //是否包含城市代理商ID
							
							for(var i = 0; i<res.roleList.length;i++){
								
								if(res.roleList[i].roleCode == '944f251d-2a9e-49d2-b416-7eaa6b68ee3f'){
									this.role = res.roleList[i].roleName;
									this.isAgent = true;
									break;
								}
							}
							
						}else{
							if(this.in_array('d2fe397f-2d95-4532-a1eb-74efbe242659',res.roleCode)){ //是否包含地区代理商ID
								for(var i = 0; i<res.roleList.length;i++){
									if(res.roleList[i].roleCode == 'd2fe397f-2d95-4532-a1eb-74efbe242659'){
										this.role = res.roleList[i].roleName;
										this.isAgent = true;
										break;
									}
								}
							}else{
								
								if(this.in_array('d2fe397f-2d95-4532-a1eb-74efbe242660',res.roleCode)){ //是否包含会员ID
								
									for(var i = 0; i<res.roleList.length;i++){
										if(res.roleList[i].roleCode == 'd2fe397f-2d95-4532-a1eb-74efbe242660'){
											this.role = res.roleList[i].roleName;
											this.isAgent = false;
											break;
										}
									}
								}else{
										this.role = '普通用户';
										this.isAgent = false;
								}
								
							}
						}
						
						
						uni.stopPullDownRefresh();
				
					}).catch((err) => {
						
						if(err.data.message == 401){
							//token验证失败
							uni.navigateTo({
								url: '/pages/login/index'
							})
						}
						
						
				
					})	
			},
			
			getUserInfo:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				this.getOpenInfo();
							
			            
			}, 1000, {
			    'leading': true, //在延迟开始前立即调用事件
			    'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}), 
			obligation:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/order/index?current=' + '待付款' + '&orderStatus=' + 0
				})
			 }, 1000, {
			     'leading': true, //在延迟开始前立即调用事件
			     'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			shipments:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/order/index?current=' + '待送货' + '&orderStatus=' + 1
				})
			 }, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			receiving:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/order/index?current=' + '待收货' + '&orderStatus=' + 2
				})
			 }, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			getAppHeight(){
				this.Height = uni.getSystemInfoSync().windowHeight+ 'px';
			},
			//获取商品信息
			getList() {

			},
			
			toOrder:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/order/index'
				});
			             
			 }, 1000, {
			     'leading': true, //在延迟开始前立即调用事件
			     'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			 }),
			
			toCapital:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/capital/index'
				});
			             
			 }, 1000, {
			     'leading': true, //在延迟开始前立即调用事件
			     'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			 }),
			 toAddress:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/address/index'
				});
			             
			 }, 1000, {
			     'leading': true, //在延迟开始前立即调用事件
			     'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			 }),   					   


			toCollection() {
				
				if(!this.$requiredLogin()){
					return
				}
			
				uni.navigateTo({
					url: '/pages/collection/index'
				});

			},

			tosales() {
				uni.navigateTo({
					url: '/pages/my/postSales'
				});

			},
			//浏览历史
			tobrowse() {
				
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/my/browse'
				});

			},
			toFeedback() {
				if(!this.$requiredLogin()){
					return
				}
				
				
				uni.navigateTo({
					url: '/pages/my/feedback'
				});
			},
			toTem() {
				
				
			
				if(!this.$requiredLogin()){
					return
				}
				
				
				uni.navigateTo({
					url: '/pages/my/team'
				});
			},
			toMemberCard(){
				
				if(!this.$requiredLogin()){
					return
				}
				
				uni.navigateTo({
					url: '/pages/my/usedCard'
				});
			}

		},

	}
</script>

<style lang="scss" scoped>
	#my {
		background: url(http://120.78.163.4:8082/my/bj.png) no-repeat;
		background-size: contain;
		background-color: #F0F0F0;
		.top {
			height: 274rpx;

			.user_info {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40rpx;

				.lfte {
					display: flex;
					align-items: center;

					.portrait {
										
						width: 88rpx;
						height: 88rpx;
						.imageView{
							width: 88rpx;
							height: 88rpx;
							border-radius: 50%;
							background:#FFFFFF;
						}
						image {
							width: 100%;
							height: 100%;
							border-radius: 48rpx;
						}
					}

					.info {
						margin-left: 20rpx;
						color: #FFFFFF;
						display: flex;
						flex-direction: column;

						.name {
							font-size: 32rpx;
							font-weight: bold;
						}

						.role {
							font-size: 24rpx;
							font-weight: bold;
						}
					}

				}

				.right {
					width: 12rpx;
					height: 24rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.attribute {
				font-weight: bold;
				margin-top: 66rpx;
				padding: 0 96rpx;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.item {
					font-size: 32rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.boder-hr {
					height: 40rpx;
					border-right: 1px #FFFFFF solid;
				}
			}
			.attributes {
				font-weight: bold;
				margin-top: 66rpx;
				padding: 0 96rpx;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: space-between;
			
				.item {
					font-size: 32rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			
				.boder-hr {
					height: 40rpx;
					border-right: 1px #FFFFFF solid;
				}
			}
		}

		.card {

			.top_all {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 32rpx;
				padding-top: 31rpx;
				background: #FFFFFF;
				border-radius: 34rpx 34rpx 0 0;
				

				.lfte {
					font-size: 28rpx;
					font-weight: bold;
				}
				
				text{
					color: $u-tilte-color;
				}


				image {
					width: 12rpx;
					height: 24rpx;
				}




			}

			.option {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0;
				padding-left: 59rpx;
				padding-right: 39rpx;
				padding-top: 34rpx;
				background: #FFFFFF;

				.option_item {
					display: flex;
					flex-direction: column;
					align-items: center;

					text {
						font-size: 28rpx;
						font-weight: bold;
						color: $u-tilte-color;


					}

					image {
						width: 40rpx;
						height: 40rpx;
					}

				}

			}

			.list {

				padding: 0 32rpx;
				padding-top: 34rpx;
				background-color: #FFF;
				margin-bottom: 120rpx;
				
				

				.list_item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					height: 88rpx;

					.lfte {
						display: flex;
						align-items: center;

						image {
							width: 37rpx;
							height: 40rpx;
							

						}

						text {
							font-size: 28rpx;
							font-weight: bold;
							margin-left: 21rpx;
							color: $u-tilte-color;
						}
					}

					.right {
						width: 12rpx;
						height: 24rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}
					
					button{
						width: 100%;
						height: 88rpx;
						border: none;
						margin: 0;
						padding: 0;
						display: flex;
						justify-content:space-between;
					
						
					}

				}

				

			}
		}
		#tarbar{
			width: 100%;
			z-index: 9999;
			position: fixed;
			bottom: 0;
		}
	}
</style>
