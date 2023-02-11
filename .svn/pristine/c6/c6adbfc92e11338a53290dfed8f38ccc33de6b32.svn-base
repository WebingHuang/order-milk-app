<template>
	<view id="commodity">
		
		<view class="search">
			<u-search placeholder="输入商品" v-model="keyword" @clear="clearKeyWord" @blur="search" :show-action="false"></u-search>
		</view>
		<block v-if="commodityList.length === 0 ? false : true ">
		<view class="list">
			
			<view class="list_item" v-for="(item,index) in commodityList" :key="index" @click="getcommodityInfo(item)">
				<view class="cover">
					<image :src="item.imgUrl" mode=""></image>
					<view class="activity" v-if="item.isActivity==1">
						限时活动
					</view>
				</view>
				<view class="text">
					<view class="name">
						{{ item.spuName }}
					</view>
					<view class="attribute">
						<view class="">
							<view class="">
								<text class="price" v-if="item.floorPrice == item.highestPrice">
									¥{{item.floorPrice}}
								</text>
								<text class="price" v-else>
									¥ {{item.floorPrice}}-{{item.highestPrice}}
								</text>
							</view>
							
						<!-- 	<view class="discount">
								<view class="member">会员价</view>
								<view class="member_price" v-if="item.floorPriceVip == item.highestPriceVip">
									{{item.floorPriceVip || 0}}
								</view>
								
								
								<view class="member_price" v-else>
									{{item.floorPriceVip || 0}}-{{item.highestPriceVip || 0}}
								</view>
								
							</view> -->
						</view>
						
						<text class="purchase">
							{{item.salesQuantity ? sum(item) : 0}}人付款
						</text>
					</view>
				</view>
			</view>							
		</view>
		<u-loadmore :status="status" />
		</block>
		<view class="noneList" v-else>
			<image src="http://120.78.163.4:8082/commodity/datanull.png" mode=""></image>
			<text>暂无数据</text>
		</view>
		<tarbar id="tarbar" @change="handlerClick" :current="current" />
	</view>
</template>

<script>
	import tarbar from '../../components/tarbar/tarbar.vue'
	export default {
		components:{
			tarbar
		},
		data() {
			return {
				current:1,
				keyword:"",
				page:{
					state:'loadMore',
					pageNum:1,
					pageSize:6
				},
				commodityList:[],
				isAgent:false, //是否是代理商
			};
		},
		onReachBottom(){ //上拉加载
		
			if(this.page.state === 'loadMore'){
				this.page.pageNum++;
				this.getCommodityList();
			}
		},
		
		methods:{
			sum(item) {
				let num = 0;
				num += Number(item.salesQuantity||0);
				num += Number(item.virtualQuantity||0);
				return num;
			},
			
			handlerClick(index) {
				// console.log(index)
				this.current = index
			},
			getcommodityInfo(item){
				
				uni.navigateTo({
					url: '/pages/commodity/info?id=' + item.id + '&imgurl=' + item.imgUrl
				});
				
			},
			getCommodityList(){
			
				this.$u.api.getCommodity({
					"commodityQueryVo": {
						"spuName": this.keyword,
						// "flag":this.isAgent ?  1 : 0,
						// "homeStatus":0,
					},
					"pageRequest": {
						"pageNum": this.page.pageNum,
						"pageSize": this.page.pageSize
					},
					// "pageRequest": {
					// 	"pageNum": this.page.pageNum,
					// 	"pageSize": this.page.pageSize
					// }
				}).then(res=>{
					
					res.records.forEach(item => {
						this.commodityList.push(item)
					})
																	
					if(res.current == res.pages ){
						this.page.status = 'noneMore';
					}
				}).catch(e=>{
					
				})
			},
			clearKeyWord(e){
				this.keyword = '';
				this.page.state = 'loadMore';
				this.page.pageNum = 1;
				this.page.pageSize = 6;
				this.commodityList = [];
				this.getCommodityList();
			},
			search(e){
				// console.log(e);
				this.keyword = e;
				this.page.state = 'loadMore';
				this.page.pageNum = 1;
				this.page.pageSize = 6;
				this.commodityList = [];
				this.getCommodityList();
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
			//一起
			getOpenInfo(token){
				this.$u.api.getOpenInfo()
					.then(res => {
						if(this.in_array('944f251d-2a9e-49d2-b416-7eaa6b68ee3f',res.roleCode)){ //是否包含城市代理商ID
							for(var i = 0; i<res.roleList.length;i++){
								if(res.roleList[i].roleCode == '944f251d-2a9e-49d2-b416-7eaa6b68ee3f'){
									this.isAgent = true;
									break;
								}
							}
						}else{
							if(this.in_array('d2fe397f-2d95-4532-a1eb-74efbe242659',res.roleCode)){ //是否包含地区代理商ID
								for(var i = 0; i<res.roleList.length;i++){
									if(res.roleList[i].roleCode == 'd2fe397f-2d95-4532-a1eb-74efbe242659'){
										this.isAgent = true;
										break;
									}
								}
							}else{
								if(this.in_array('d2fe397f-2d95-4532-a1eb-74efbe242660',res.roleCode)){ //是否包含会员ID
								
									for(var i = 0; i<res.roleList.length;i++){
										if(res.roleList[i].roleCode == 'd2fe397f-2d95-4532-a1eb-74efbe242660'){
											this.isAgent = false;
											break;
										}
									}
								}else{
										this.isAgent = false;
								}
							}
						}
						this.getCommodityList();
					})
					.catch((err) => {
						// console.log(err)
									
					})
			},
		},
		watch:{
			
		},
		onLoad(obj){
			// console.log(obj);
			this.keyword = obj.search;
			this.page.state = 'loadMore';
			this.page.pageNum = 1;
			this.page.pageSize = 6;
			this.commodityList = [];
			const token = uni.getStorageSync('token');
			if(token){
				this.getOpenInfo(token);
			}else{
				this.getCommodityList();
			}
		},
		
	}
</script>

<style lang="scss">
	
	#commodity{
		
		margin-top: 32rpx;
		
		.search{
			padding: 0 22rpx;
		}
		.list{
			padding: 0 22rpx;
			margin-top: 32rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding-bottom: 120rpx;
			.list_item{
				width: 344rpx;
				height: 517rpx;
				
				.cover{
					width: 100%;
					height: 344rpx;
					background: $u-main-color;
					border-radius: 12rpx;
					position: relative;
					image{
						width: 100%;
						height: 100%;
						border-radius: 12rpx;
					}
					
					.activity{
						position: absolute;
						top: 0rpx;
						color: #fff;
						background: red;
						font-size: 20rpx;
						padding: 6rpx 8rpx;
						border-radius: 0 0 8rpx 0;    
					}
				}
				.text{
					.name{
						font-size: 28rpx;
						font-weight: bold;
						padding-top: 18rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						color: $u-tilte-color;
					}
					
					.attribute {
						padding-top: 12rpx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						.discount{
							display: flex;
							align-items: center;
							.member{
								color: #FFFFFF;
								font-size: 16rpx;
								border-radius: 4rpx;
								width: 60rpx;
								height: 24rpx;
								background: linear-gradient($u-main-color,$u-vice-color); /* 标准语法 */
								display: flex;
								justify-content: center;
								align-items: center;
							}
							.member_price{
								color: $u-main-color;
								font-size: 22rpx;
								font-weight: bold;
								margin-left: 4rpx;
							}
						}
						.price {
							color: $u-main-color;
							font-size: 28rpx;
							font-weight: bold;
						}
						.purchase {
							color: #4D4D4D;
							font-size: 22rpx;
							font-weight: bold;
						}
					
					}
				}
			}
			
		}
		.noneList{
			
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			image{
				padding-top: 263rpx;
				width: 480rpx;
				height: 313rpx;
			}
			text{
				padding-top: 40rpx;
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: #808080;
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
