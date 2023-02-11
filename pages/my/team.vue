<template>

	<view id="team" :style="{height: Height}">
		<!-- 顶部导航栏 -->
		<template>
			<view>
				<u-navbar :title="'我的团队('+userCount+'人)'" :background="none" height="44" :border-bottom="false"
					title-color="#FFFFFF"  back-icon-color="#FFFFFF" ></u-navbar>
			</view>
		</template>

		<!-- 顶部图片区域 -->
		<view class="top">
			<template>
				<view class="statistics">
					<view class="statistics-message">
						<view class="statistics-text">总业绩</view>
						<view class="statistics-value">￥{{performance}}</view>
					</view>
				</view>
			</template>
			
			<template>
				<view class="today" @click="putTile">{{tile}}</view>
			</template>
			
			<template>
				<view class="data">
					<view>
						<view v-if="tile=='今日'">¥ {{intraDay}}</view>
						<view v-else>¥ {{month}}</view>
						<view>业绩</view>
					</view>
			
					<!-- <view>
						<view>6</view>
						<view>会员卡</view>
					</view> -->
			
					<view>
						<view v-if="tile=='今日'">{{intraDayCount}}</view>
						<view v-else>{{monthCount}}</view>
						<view>订单</view>
					</view>
			
					<!-- <view>
						<view>3</view>
						<view>复购率</view>
					</view> -->
			
				</view>
			
			</template>
			
		</view>
		
		<!-- 用户列表区域 -->
		<template>
			<view class="user-list" :style="{height: listHeight}">
				<u-card  v-for="(item,index) in list" :key="index" class="user-list-card" margin="20rpx 20rpx" :show-head="false" padding="20" box-shadow="none" >
					<view class="user-list-card-body" slot="body">
						<view class="top-info">
							<view class="circle">
								<image :src="item.userHeader" mode=""></image>
							</view>

							<view class="user-info">
								<text>{{item.userName}}</text>
								<text>{{item.roleName}}</text>
							</view>
						</view>
						<view class="bottom">
							<view class="left">
								<text>消费</text>
								<text>¥{{item.integration || 0}}</text>
							</view>
							
							<view class="left" @click.stop="getUserPerformanceAll(item.userCode,index)">
								<text>业绩</text>
								<text>{{item.achievement || 0}}</text>
							</view>
							<view class="right">
								<text>直推人数</text>
								<text>{{item.userCounts || 0}}</text>
							</view>
						</view>
					</view>
				</u-card>
				
			
			</view>
		</template>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				Height: "",
				listHeight:"", //列表高度
				intraDay: 0,//当日业绩
				intraDayCount: 0, //当日订单数量
				monthCount:0, //近一个月的订单数量
				month: 0, //近一个月业绩
				performance: 0, //订单总金额
				performanceCount: 0,//订单总数
				userCount: 0, //下级用户
				list:[], //用户列表
				tile:"今日",
			};
		},
		methods: {
			
			putTile(){
				if(this.tile == '今日'){
					this.tile = '30天';
				}else{
					this.tile = '今日'
				}
			},
			//获取系统高度
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
				
				this.listHeight = uni.getSystemInfoSync().windowHeight-300 + 'px';
				
			},
			
			
			
			getUserPerformanceAll(usercode,index){
				this.$u.api.getUserPerformanceAll
				({
					userCode:usercode
				}).then(res => {
					this.list[index].achievement = '￥'+ res.performance;
					this.$forceUpdate();
				}).catch(err => {
					
				})
			},
			
			//查询个人业绩接口
			getAgentOrOrder(){
				this.$u.api.getAgentOrOrder
				().then(res => {
					
					this.intraDay = res.intraDay;
					this.intraDayCount = res.intraDayCount;
					this.month = res.month;
					this.monthCount = res.monthCount;
					this.performance = res.performance;
					this.performanceCount = res.performanceCount;
					this.userCount = res.userCount;
				}).catch(err => {
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
			//查询下级用户
			getAgentUser(){
				this.$u.api.getAgentUser
				().then(res => {
					this.list = res.overallUser.sysUserEntities.reverse();
					
					
					this.list.map(item=>{
						item['roleCodeList'] = item.roleCode.split(",");
						item['achievement'] = '--';
					})
					
					this.list.map((item,index)=>{
						
						if(this.in_array('ae454664-fafa-4cd0-9724-26b5b8337e58',item.roleCodeList)){
							item['roleName'] = '普通用户';
						}
						
						if(this.in_array('d2fe397f-2d95-4532-a1eb-74efbe242660',item.roleCodeList)){
							item['roleName'] = 'VIP';
						}
						if(this.in_array('d2fe397f-2d95-4532-a1eb-74efbe242659',item.roleCodeList)){
							item['roleName'] = '社区代理商';
						}
						if(this.in_array('944f251d-2a9e-49d2-b416-7eaa6b68ee3f',item.roleCodeList)){
							item['roleName'] = '城市代理商';
						}
						
					})
					
				
				}).catch(err => {
					
				})
			},
			
		},
		onLoad() {
			this.getAppHeight();
			this.getAgentOrOrder();
			this.getAgentUser();
		}
	}
</script>

<style lang="scss" scoped>
	#team {
		background: url(http://120.78.163.4:8082/my/team.png) no-repeat;
		background-size: contain;
		background-color: #F0F0F0;
		.top {
			width: 750rpx;
			height: 373rpx;
			box-sizing: border-box;
			.statistics {
				height: 160rpx;
				width: 750rpx;
				
				display: flex;
				justify-content: center;
				
				.statistics-message {
					background: url(http://120.78.163.4:8082/my/wg.png) no-repeat;
					background-size: cover;
				
					margin-top: 40rpx;
				
					width: 348rpx;
					height: 137rpx;
				
					font-size: 36rpx;
					color: #FFFFFF;
				
					display: flex;
					justify-content: center;
					flex-direction: column;
				
					.statistics-text {
						margin-top: 20rpx;
						padding: 0;
						height: 34rpx;
				
						display: flex;
						justify-content: center;
						align-items: center;
					}
				
					.statistics-value {
						margin-top: 30rpx;
						margin-bottom: 23rpx;
						padding: 0;
						height: 28rpx;
				
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
			
			
			.today {
				background: url(http://120.78.163.4:8082/my/ltk.png) no-repeat;
				background-size: contain;
			
				width: 80rpx;
				height: 32rpx;
				margin-left: 61rpx;
				margin-top: 33rpx;
			
				text-align: center;
				font-size: 20rpx;
				color: $u-main-color;
			}
			
			.data {
				margin-top: 28rpx;
				display: flex;
				align-items: center;
				
				width: 100%;
				height: 60rpx;


			
				&>view {
					height: 60rpx;
					border-right: 1rpx solid #FFFFFF;
					flex: 1;
			
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
			
					color: #FFFFFF;
					&>view {
						&:first-child {
							font-size: 28rpx;
							height: 28rpx;
							line-height: 28rpx;
						}
						&:nth-child(2) {
							margin-top: 11rpx;
							
							font-size: 24rpx;
							height: 24rpx;
							line-height: 24rpx;
						}
					}
			
					&:last-child {
						border-right: none;
					}
				}
			}
		}

		

		.user-list {
			margin: 0 auto;			
		    overflow: auto;
			.user-list-card {
				.user-list-card-body {
					.top-info {
						display: flex;

						.circle {
							width: 88rpx;
							height: 88rpx;
							border-radius: 50%;
							background-color: $u-main-color;
							image {
								width: 100%;
								height: 100%;
								border-radius: 48rpx;
							}
						}

						.user-info {
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							margin-left: 32rpx;
							

							:first-child {
								font-weight: bold;
								line-height: 32rpx;
								font-size: 32rpx;

								color: #1A1A1A;
							}

							&:nth-child(2) {
								font-size: 24rpx;
								line-height: 24rpx;
								color: #4D4D4D;
							}
						}
					}

					.bottom {
						display: flex;
						justify-content: space-evenly;
						margin-top: 40rpx;

						.left {
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							border-right: 1rpx solid #4D4D4D;
							flex: 1;

							text-align: center;

							&>text:first-child {
								font-size: 24rpx;
								line-height: 24rpx;
								color: #4D4D4D;
							}

							&>text:nth-child(2) {
								font-size: 28rpx;
								line-height: 28rpx;
								color: $u-main-color;
							}
						}

						.right {
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							flex: 1;

							text-align: center;

							&>text:first-child {
								font-size: 24rpx;
								color: #4D4D4D;
							}

							&>text:nth-child(2) {
								font-size: 28rpx;
								color: #4D4D4D;
							}
						}
					}
				}
			}
		}
	}

</style>
