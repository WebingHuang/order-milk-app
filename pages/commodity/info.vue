<template>
	<view id="commodityinfo">
		<phone-modal v-model="showPhone" :list="list" v-if="showPhone"></phone-modal>
		<template>
			<view class="swiper">
				<u-swiper :list="dataList.productSpuImagesEntities" name="imgUrl" height="622" border-radius="0"
					:autoplay="false" img-mode="aspectFit"></u-swiper>
					 <!-- img-mode="aspectFit" -->
			</view>
		</template>
		<view v-for="item in dataList.productSkuInfoEntities" :key="item.id">
			<u-popup v-model="close" mode="bottom" duration="100" border-radius="10" width="100%" height="375px"
				closeable="true">

				<view class="items">
					<view class="square">
						<image lazy-load="true" :src="checked.skuDefaultImg ? checked.skuDefaultImg : imageUrl" mode=""></image>
					</view>
					<view class="tan">
						<view class="biao">
							{{ checked.skuName }}
						</view>
						<view class="monor">
							<view class="price">
								¥{{ checked.price }}
							</view>
							<!-- <view class="vip">
								<view class="vip_Price">
									会员价
								</view>
								<view class="vipPrice">
									{{checked.vipPrice}}
								</view>
							</view> -->
						</view>
						<view class="red" :key="gg.id" v-for="gg in checked.productSkuInfoEntities" v-show="gg.isPresented==1">
							买满{{gg.buyEnoughNum}}盒赠{{gg.presenterNum}}盒
						</view>
					</view>
				</view>
				<view class="itemone">
					<view class="tou">
						套装
					</view>
					<view class="skuName">
						<view class="suitone" :class="checked.id === item.id ? 'checked' : ''"
							@click="handlerSkuName(item)" v-for="item in dataList.productSkuInfoEntities"
							:key="item.id">
							{{ item.skuName }}
						</view>
						
					</view>
				
				</view>
			
				<view class="number">
					<view class="left">
						购买数量
					</view>
					<view class="rights">
						<view class="stock">
							库存:{{ checked.stock }}
						</view>
						<view class="Stepper">
							<u-number-box v-model="value" min="1" :max="checked.coupon" @change="valChange"
								disabled-input="true"></u-number-box>
						</view>
					</view>
				</view>
				<!-- 按钮 -->
				<view class="botom">
					<view class="button" @click.stop="confirm">
						确定
					</view>
				</view>

			</u-popup>
		</view>
		<template>
			<view class="attribute">
				<view class="top">
					<view class="money">
						<view class="lfte">
							<view class="price" v-if="floorPrice == highestPrice">
								¥{{floorPrice}}
							</view>
							<view class="price" v-else>
								¥{{floorPrice}} - {{highestPrice}}
							</view>
							<!-- <view class="discount">
								<view class="member">会员价</view>
								<view class="member_price" v-if="floorPriceVip == highestPriceVip">
									{{floorPriceVip}}
								</view>
								<view class="member_price" v-else>
									{{floorPriceVip}} - {{highestPriceVip}}
								</view>
							</view> -->
							<!-- <text class="">
								¥{{ price }}
							</text> -->
						</view>
						<view class="right">

							<button open-type="share" v-bind:data-student="share" class="share" :plain="true">
								<image src="http://120.78.163.4:8082/commodity/share.png" mode=""></image>
								<text>
									分享
								</text>
							</button>

						</view>
					</view>
					<view class="name">
						{{ dataList.spuName | dataListFilter }}
					</view>
				</view>

				<view class="main">
					<u-cell-group>
						<u-cell-item title="规格" :value="addList.value ? '已选择' : '请选择'" @click="skuchange">
						</u-cell-item>
						<u-cell-item title="运费" value="免运费"></u-cell-item>
						<!-- <u-cell-item title="保障" value="7天无理由退货 丨 运险费"></u-cell-item> -->
					</u-cell-group>
				</view>
				<view class="html">
					<view class="details">
						<text>
							详情
						</text>
					</view>
					<view class="info">
						<u-parse :html="dataList.productSpuInfoDescEntities[0].decript"></u-parse>
					</view>

				</view>

			</view>
		</template>

		<template>
			<view class="footer" :style="{'padding-bottom': paddingBottomHeight + 'rpx'}">
				<view class="lfte">
					<view class="item" @click="collect">
						<image src="http://120.78.163.4:8082/commodity/iscollection.png" mode="" v-if="flag === 'true' ? true : false"></image>
						<image src="http://120.78.163.4:8082/commodity/collection.png" mode="" v-else></image>
						<text :class="flag === 'true' ? 'collect' : ''">
							收藏
						</text>
					</view>
					<view class="item">
						<button @click="showPhone=!showPhone" show-message-card session-from send-message-path send-message-title
							:plain="true">
							<image src="http://120.78.163.4:8082/commodity/kf.png" mode=""></image><strong></strong>
						</button>
						<text>
							客服
						</text>
					</view>
					<view class="item" @click="shoppingCart">
						<image src="http://120.78.163.4:8082/commodity/vehicle.png" mode=""></image>
						<text>
							购物车
						</text>
					</view>

				</view>
				<view class="right">
					<button type="default" @click="addShoppingCart">加入购物车</button>
					<button type="default" @click.stop="buy">立即购买</button>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import _ from "lodash"
	export default {
		data() {
			return {
				list: [],
				showPhone: false,
				floorPrice:0, //商品最低价
				highestPrice:0, //商品最高价
				floorPriceVip:0,//商品会员最低价
				highestPriceVip:0, //商品会员最高价
				
				share: {
					title: '一猿亿码-商品详情',
					path: '/pages/index/index',
					imageUrl: 'http://120.78.163.4:8082/login/logo.png',
					desc: '',
					content: '测试商品详情页分享'
				},
				swiperList: [
				],
				dataList: [],
				priceList: [],
				show: false,
				value: 1,
				price: 0,
				flag: '',
				isActivity:false, //是否是活动商品
				close: false,
				spuId: '', //商品Id
				checked: {},
				addList: {},
				imageUrl: '', //规格商品没有图片需要用到
				paddingBottomHeight: 0,  //苹果X以上手机底部适配高度
				isCart:false,
			};
		},
		filters:{
			dataListFilter(val){
				if(val){
					return val
				}else{
					return ''
				}
			}
		},
		onLoad() {
			this.getReq();
		},
		methods: {
		
			getReq() {
				this.$u.api.queryContactUs().then(res => {
					this.list = res;
					console.log('list', this.list, res);
				})
			},
			skuchange(){
				this.close = true;
				this.isCart = false;
			},
			getPhoneInfo(){
				var that = this
				uni.getSystemInfo({
					success(res) {
						let model = ['X', 'XR', 'XS', '11', '12'];
						model.forEach(item => {
							//适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
							if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
								that.paddingBottomHeight = 40;
							}
						})
						// console.log(res, 'uni.getSystemInfo');
					}
				})
			},
			
			confirm:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				this.checked = {
					...this.checked,
					value: this.value,
					spuName:this.dataList.spuName,
				}
				this.addList = {
					...this.checked,
				};
				this.close = false;
				
				if(this.isCart){
					this.addShoppingCart();
				}else{
					this.buy();
				}
				
			 }, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			
			valChange(e) { //步进器
				// console.log('当前值为: ' + e.value)
			},
			getCommodityDetails() {
				this.$u.api.getCommodityDetails({
					"spuId": this.spuId
				}).then(res => {
					
					this.dataList = res;
					this.floorPrice = res.floorPrice;
					this.floorPriceVip = res.floorPriceVip;
					this.highestPrice = res.highestPrice;
					this.highestPriceVip = res.highestPriceVip;
					this.imageUrl = res.imgUrl;
					
					this.checked = {
						coupon: 1, //默认最大值只能买一个商品
						id: res.productSkuInfoEntities[0].id,
						price: res.productSkuInfoEntities[0].price,
						skuDefaultImg: res.productSkuInfoEntities[0].skuDefaultImg,
						skuName: res.productSkuInfoEntities[0].skuName,
						spuId: res.productSkuInfoEntities[0].spuId,
						stock:res.productSkuInfoEntities[0].stock,
						spuType:res.productSkuInfoEntities[0].spuType,
						deleteFlag:res.productSkuInfoEntities[0].deleteFlag,
						vipPrice:res.productSkuInfoEntities[0].vipPrice,
						productSkuInfoEntities: res.productSkuInfoEntities,
					}
					
				
					if(res.isActivity == 1 || res.productSkuInfoEntities[0].coupon === '' || res.productSkuInfoEntities[0].coupon === 0){ //如果等于1则为活动商品，可以进行商品的数量增加
						this.isActivity = true;
						this.checked.coupon = res.productSkuInfoEntities[0].stock;
					}else{
						this.isActivity = false;
					}
				
					res.productSkuInfoEntities.forEach(item => {
						this.priceList.push(item.price);
					})
					this.priceList = this.priceList.sort((a, b) => {
						return a - b;
					})
					if(this.priceList[0] == this.priceList[this.priceList.length-1]){
						this.price = `${this.priceList[0]}`;
					}else{
						this.price = `${this.priceList[0]} - ${this.priceList[this.priceList.length-1]}`;
					}
					
					
					this.flag = this.dataList.flag;
					
					//重写分享配置
					this.share.title = res.spuName;
					this.share.path = 'pages/commodity/info?id=' + res.id;
					this.share.imageUrl = res.imgUrl;
					this.share.desc = '';
					this.share.content = '分享一猿亿码商品详情';
					
				}).catch(e => {
					// console.log(e)
					if(e.msg == '商品不存在'){
						// console.log(e.msg)
						uni.redirectTo({
							url:'/pages/index/index'
						})
						uni.showToast({
							title:e.msg
						})
					}
				})
			},
			addCollectIofo() { //足迹信息
				this.$u.api.collectInfo({
					spuId: this.spuId
				}).then(res => {
					// console.log(res);
				})
			},
			collect:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				const isCollect = this.flag === 'true' ? '0' : '1';
				this.$u.api.wxCollect({
					isCollect,
					spuId: this.dataList.id
				}).then(res => {
					// console.log(res, '点击收藏');
					this.getCommodityDetails();
					if(this.flag === 'true'){
						uni.showToast({
							title: '取消收藏'
						})
					}else{
						uni.showToast({
							title: '收藏成功'
						})
					}
				
				}).catch(e => {
				
				})
			 }, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			
			
			handlerSkuName(item) {
				
			
				this.value = 1;
				this.checked = {
					coupon: 1,
					stock:item.stock,
					id: item.id,
					price: item.price,
					skuDefaultImg: item.skuDefaultImg,
					skuName: item.skuName,
					spuId: item.spuId,
					spuType:item.spuType,
					vipPrice:item.vipPrice
				}
				
				if(this.isActivity || item.coupon === '' || item.coupon === 0){
					//判断商品臻香卡优惠价格为0的时候可以自定义数量
					this.checked.coupon = item.stock;
				}
				
			
			},
			shoppingCart:_.debounce(function() {
				if(!this.$requiredLogin()){
					return
				}
				uni.navigateTo({
					url: '/pages/vehicle/index'
				});
			 }, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			
			addShoppingCart() {
				
				//验证
				if(!this.$requiredLogin()){
					return
				}else{
					this.isCart = true; //是购物车
					if (this.addList.id) {
						this.$u.api.addShoppingCart({
							skuTwoId: this.addList.id,
							spuId: this.addList.spuId,
							commNum: this.addList.value,
							imgUrl: this.addList.skuDefaultImg ? this.addList.skuDefaultImg : this.imageUrl
						}).then(res => {
							uni.showToast({
								title:'添加成功',
								icon:'none'
							})
						}).catch(err => {
					
						})
					} else {
						this.close = true;
					}
				}
				
			},
			buy() {
				
				
				if(!this.$requiredLogin()){
					return
				}
			
				
				if(this.addList.id){
					
					// this.addList.spuId  商品id
					
					// this.addList.id  规格id
					
					// this.addList.value   数量
					
					
					
					//在这里验证是否有地址
					this.$u.api.queryUserInformation({
						sequence: '1'
					}).then(res => {
						if(res.length){
							uni.navigateTo({
								url: '/pages/order/confirmOrder?supId='+ this.addList.spuId + '&skuId=' +this.addList.id + '&num='+this.addList.value
							})
						}else{
							uni.navigateTo({
								url: '/pages/address/index'
							})
						}
					}).catch()
					
				}else{
					this.close = true;
				}
			
			
			},
			
			
			getParam(name,url) {
			    try {
			        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			        var r = url.split('?')[1].match(reg);
			        if(r != null) {
			          return r[2];
			        }
			        return "";//如果此处只写return;则返回的是undefined
			    } catch(e) {
			        return "";//如果此处只写return;则返回的是undefined
			    }
			}
		
		},
		onHide(){
			this.addList = {};
		},
		onShow() {
			const token = uni.getStorageSync('token');
			if (token) {
				this.addCollectIofo();
			}
			this.isCart = false;
		},
		onLoad(obj) {
			console.log(obj)
			
			if(obj.q){
		
				let scan_url = decodeURIComponent(obj.q);
				//扫码进入链接
				this.spuId = this.getParam('id',scan_url);
				//获取url上的encode并且保存到缓存
				let encode = this.getParam('encode',scan_url);
				let data = {
					spuId:this.spuId,
					encode:encode
				};
				console.log(data)
							
				// 存入臻香卡信息到缓存里
				uni.setStorageSync('couponCard',JSON.stringify(data));
				
				
			}else{
				this.spuId = obj.id; //业务写完放开注释
			}
			
			this.$nextTick(()=>{
				this.getCommodityDetails();	
			})
			this.getPhoneInfo();
		},
	}
</script>

<style lang="scss">
	#commodityinfo {
		.swiper {
			// height: 622rpx;
			width: 100%;
		}

		.attribute {
			.top {
				padding: 0;
				padding-top: 24rpx;
				padding-left: 22rpx;
				padding-right: 27rpx;
				height: 218rpx;

				.money {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.lfte {
						display: flex;
						align-items: center;
						.discount{
							display: flex;
							align-items: center;
							margin-left: 16rpx;
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
							font-size: 40rpx;
							color: $u-main-color;

						}

						.oldprice {
							font-size: 24rpx;
							color: #808080;
							margin-left: 40rpx;
							text-decoration: line-through;

						}
					}

					.right {
						display: flex;
						flex-direction: column;

						image {
							width: 34rpx;
							height: 36rpx;
						}

						text {
							font-size: 20rpx;
							color: #808080;
						}

						button {
							border: none;
							display: flex;
							flex-direction: column;
							margin: 0;
							padding: 0;
							justify-content: space-between;
							align-items: center;
						}
					}
				}

				.name {
					padding-top: 20rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: $u-tilte-color;
				}
			}

			.main {
				.u-cell {
					padding: 26rpx 20rpx;
				}
			}

			.html {
				.details {
					width: 100%;
					height: 88rpx;
					display: flex;
					align-items: center;
					text {
						color: #4D4D4D;
						font-size: 32rpx;
						font-weight: bold;
					}
				}
				.info{
					color: #000000;
				}
			}
		}

		.html {
			padding: 0 20rpx;
			padding-bottom: 120rpx;
		}

		.footer {
			position: fixed;
			z-index: 99;
			left: 0;
			bottom: 0;
			background: #fff;
			width: 100%;
			padding: 0 20rpx;
			// height: 98rpx;
			border-top: 1px #cecece solid;
			padding-top: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.lfte {
				display: flex;
				align-items: center;

				.item {

					display: flex;
					align-items: center;
					flex-direction: column;
					margin-right: 30rpx;

					image {
						width: 40rpx;
						height: 40rpx;
					}

					text {
						font-size: 24rpx;
						color: #808080;

					}

					button {
						border: none;
						width: 40rpx;
						height: 40rpx;
						margin: 0;
						display: flex;
						padding: 0;

						image {
							width: 40rpx;
							height: 40rpx;
						}
					}

					.collect {
						color: #E60012;
					}
				}
			}

			.right {
				display: flex;
				align-items: center;
				padding-bottom: 10rpx;
				button {
					height: 80rpx;
					width: 216rpx;
					border-radius: 48rpx;
					color: #FFFFFF;
					font-size: 32rpx;
					font-weight: bold;
				}

				button:nth-child(1) {
					background: $u-main-color;
				}

				button:nth-child(2) {
					background: #FF0606;
					margin-left: 20rpx;

				}

			}
		}

		.items {
			border: 1px solid #E6E5E5;
			display: flex;
			align-items: center;

			.square {
				display: inline-block;
				margin-top: 10rpx;
				margin-left: 10rpx;

				image {
					width: 120rpx;
					height: 120rpx;
					border-radius: 8rpx;
				}
			}

			.tan {

				font-size: 28rpx;
				text-align: left;
				width: 480rpx;
				color: #1A1A1A;
				position: absolute;
				right: 118rpx;
				height: 120rpx;
				display: flex;
				justify-content: space-between;
				flex-direction: column;

				&>.biao {
					color: #1A1A1A;
					font-weight: bold;
					font-size: 28rpx;

				}

				&>.monor {
					font-size: 32rpx;
					color: $u-main-color;
					font-weight: bold;
					display: flex;
					&>.vip{
					   display: flex;
					   align-items: center;
					   margin-left: 8rpx;
					   &>.vip_Price{
							font-weight: initial;
						     height: 24rpx;
							 width: 60rpx;
							 font-size: 16rpx;
							 background: linear-gradient($u-main-color,$u-vice-color); /* 标准语法 */
							 color: #fff;
							 display: flex;
							 justify-content: center;
							 align-items: center;
							 border-radius: 8rpx;     
					   }
					   
					   &>.vipPrice{
						    font-size: 22rpx;
						    margin-left: 6rpx;
					   }
					}
				}
				
				
			}
		}

		.itemone {
			width: 750rpx;
			// height: 189rpx;
			border: 1px solid #E6E5E5;

			.skuName {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding-bottom: 24rpx;

				.suitone {
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #F0F0F0;
					color: $u-tilte-color;
					font-size: 28rpx;
					// width: 190rpx;
					// height: 48rpx;
					padding: 8rpx;
					border-radius: 4rpx;
					margin-left: 32rpx;
					margin-top: 25rpx;
					font-weight: bold;
				}

				.checked {
					background-color: #FFF0E5;
				}
			}

			.tou {
				font-weight: bold;
				color: #1A1A1A;
				font-size: 32rpx;
				margin-left: 31rpx;
				margin-top: 31rpx;

			}


			.suit {
				background-color: #F0F0F0;
				width: 190rpx;
				height: 48rpx;
				color: #1A1A1A;
				font-weight: bold;
				margin-left: 260rpx;
				margin-top: -48rpx;
			}
		}

		// 二
		.itemones {
			width: 750rpx;
			height: 189rpx;
			border: 1px solid #E6E5E5;

			.capacity {
				display: flex;
			}

			.tous {
				font-weight: bold;
				color: #1A1A1A;
				font-size: 32rpx;
				margin-left: 31rpx;
				margin-top: 31rpx;

			}

			.suitones {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #FFF0E5;
				// color: $u-main-color;
				font-size: 28rpx;
				width: 190rpx;
				height: 48rpx;
				border-radius: 4rpx;
				margin-left: 32rpx;
				margin-top: 25rpx;
				font-weight: bold;
			}

			.suits {
				background-color: #F0F0F0;
				width: 190rpx;
				height: 48rpx;
				color: #1A1A1A;
				font-weight: bold;
				margin-left: 260rpx;
				margin-top: -48rpx;
			}
		}


		.number {
			margin: 0 15px;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #1A1A1A;
			font-size: 32rpx;
			font-weight: bold;

			.rights {
				display: flex;
				justify-content: space-between;
				align-items: center;

			}

			.stock {
				font-size: 24rpx;
				color: #808080;
				width: 135rpx;
			}
		}

		.botom {
			width: 100%;
			height: 88rpx;
			background-color: $u-main-color;
			position: absolute;
			left: 0rpx;
			bottom: 0rpx;

			.button {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				font-size: 32rpx;
				color: #FFFFFF;
				font-weight: bold;

			}
		}
		
		.red {
			color: red;
		}
	}
</style>
