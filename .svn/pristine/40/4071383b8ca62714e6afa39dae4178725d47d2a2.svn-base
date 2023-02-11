<template>
	<view id="editaddress" :style="{height:Height}">
		<view class="info" v-show="!showClass&&!showSchool">
			<u-form :model="form" ref="uForm" >
				<u-form-item label="学校" prop="schoolName" label-width="4rem">
					<u-input @click="geToSelectSchool()"
						v-model="form.schoolName"
						placeholder="请选择"
						suffixIcon="arrow-right"
						suffixIconStyle="color: #2979ff"
					></u-input>
				</u-form-item>
				<u-form-item label="班级" prop="className" label-width="4rem">
					<u-input @click="geToSelectClass()"
						v-model="form.className"
						placeholder="请选择"
						suffixIcon="arrow-right"
						suffixIconStyle="color: #2979ff"
					></u-input>
				</u-form-item>
				<u-form-item label="学生姓名" prop="studentName" label-width="4rem">
					<u-input v-model="form.studentName" placeholder="请输入学生姓名"   />
				</u-form-item>
				<u-form-item label="手机号码" prop="parentsMobile" label-width="4rem">
					<u-input v-model="form.parentsMobile"  placeholder="请输入手机号码" />
				</u-form-item>
				<u-form-item label="转学" prop="isTransfer" label-width="4rem">
					<u-picker mode="selector" v-model="show" rangeKey="label" :range='isTransferRange' @confirm="confirm"
						@cancel="cancel"></u-picker>
					<view class="button" :style="{color: form.isTransfer ? 'black' : '#C0C4CC'}" @click="show = true">{{ form.isTransfer ? form.isTransfer : '是否转学'}}</view>
				</u-form-item>
				
				<!-- <u-form-item prop="textarea">
					<u-input v-model="form.textarea" placeholder="请输入详细地址(街道、楼牌号等)" />
				</u-form-item> -->
			</u-form>
		</view>
		<view id="selectSchool" v-if="showSchool">
			<view class="select-box">
				<u-search class="search-box" @change="searchSchool" @search="searchSchool" clearable :showAction="false" placeholder="搜索"></u-search>
				<view class="list-box">
					<view
						class="row"
						v-for="(item, index) in indexList"
						:key="index"
					>
						<text class="title">
							{{item.schoolName}}
						</text>
						<u-button type="primary" size="mini" :plain="true" @click="selectedSchool(item)">选择</u-button>
					</view>
					<view class="row">
						<view class="title">
							<u-input v-model="extar.schoolName"></u-input>
						</view>
						<u-button type="primary" size="mini" :plain="true" @click="selectedSchool(extar)">选择</u-button>
					</view>
				</view>
			</view>
		</view>
		
		<view id="selectClass" v-if="showClass">
			<view class="select-box">
				<u-search class="search-box" @change="searchClass" @search="searchClass" clearable :showAction="false" placeholder="搜索" v-model="keyword"></u-search>
				<view class="list-box">
					<view
						class="row"
						v-for="(item, index) in schoolClassList"
						:key="index"
					>
						<text class="title">
							{{item.className}}
						</text>
						<u-button type="primary" size="mini" :plain="true" @click="selectedClass(item)">选择</u-button>
					</view>
					
					<view class="row">
						<view class="title">
							<u-input v-model="extar.className"></u-input>
						</view>
						<u-button type="primary" size="mini" :plain="true" @click="selectedClass(extar)">选择</u-button>
					</view>
				</view>
			</view>
		</view>
		
		<view class="pass">

			<view class="default">
				设为默认地址
				<u-switch class="checked" v-model="checked" :disabled="disabled" :size="40"></u-switch>
			</view>
		</view>
		<view class="overs" @click="submit">
			完成
		</view>

	</view>
</template>

<script>
	import _ from "lodash"
	export default {
		data() {
			return {
				indexList: [],
				schoolList: [],
				extra: {
					schoolName: '',
					className: '',
				},
				schoolClassList: [],
				classList: [],
				Height: "",
				checked: false,
				form: {
					name: '',
					parentsMobile: '',
					area: '',
					textarea: ''
				},
				address:{},
				show: false,
				isTransferRange: [{label:"否",id:0},{label: "是", id:1}],
				showSchool: false,
				showClass: false,
				isTransferShow: false,
				extar: {
					schoolName: '',
					className: ''
				},
				rules: {
					// 字段名称
					studentName: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式 
						// trigger: ['change', 'blur'],
					}],
					parentsMobile: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
					schoolName: [{
						required: true,
						message: '请输入所在学校',
						// 可以单个或者同时写两个触发验证方式 
						// trigger: ['change', 'blur'],
					}],
					className: [{
						required: true,
						message: '请输入所在班级',
						// 可以单个或者同时写两个触发验证方式 
						// trigger: ['change', 'blur'],
					}],
				},
				id:'',
				disabled:false,
			};
		},
		onLoad(option) {
			this.loadmore()
			if(option.id){
				this.id = option.id;
				uni.setNavigationBarTitle({title:'编辑地址'});
				this.$u.api.queryUserInformation(
						{
							id:option.id,
						}
				).then(result=>{
					let res = result.find(e => e.id == option.id);
					console.log(result,'编辑地址');
					this.form = {
						studentName:res.studentName,
						parentsMobile:res.parentsMobile,
						schoolName:res.schoolName,
						className:res.className,
						isTransfer: res.isTransfer&&this.isTransferRange[res.isTransfer].label||'',
					}
					this.checked = res.sequence === '0' ? false :true;
					this.disabled = res.sequence === "1" ? true : false;
				}).catch(err=>{})
			}
			this.getAppHeight()
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			searchSchool: _.debounce(function(val) {
				if (val) {
					this.indexList = this.schoolList.filter(e => e.schoolName.indexOf(val)>-1);
				} else {
					this.indexList = this.schoolList
				}
			}, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 // 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			searchClass: _.debounce(function(val) {
				if (val) {
					this.schoolClassList = this.classList.filter(e => e.className.indexOf(val)>-1);
				} else {
					this.schoolClassList = this.classList
				}
			}, 1000, {
				 'leading': true, //在延迟开始前立即调用事件
				 // 'trailing': false, //在延时结束后不调用,保证事件只被触发一次
			}),
			geToSelectSchool() {
				this.showSchool = true;
				this.indexList = this.schoolList;
				uni.setNavigationBarTitle({title:'选择学校'});
			},
			geToSelectClass() {
				this.showClass = true;
				this.schoolClassList = this.classList;
				uni.setNavigationBarTitle({title:'选择班级'});
			},
			selectedSchool(item) {
				this.form.schoolName = item.schoolName;
				this.form.className = '';
				this.schoolClassList = item.schoolClassList || [];
				this.classList = JSON.parse(JSON.stringify(this.schoolClassList));
				this.showSchool = false;
				uni.setNavigationBarTitle({title: this.id ? '编辑学生信息' : '添加学生信息'});
			},
			selectedClass(item) {
				this.form.className = item.className;
				this.showClass = false;
				uni.setNavigationBarTitle({title: this.id ? '编辑学生信息' : '添加学生信息'});
			},
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
					this.searchQuery()
			},
			searchQuery(schoolName) {
				this.$u.api.querySchoolsAndClass({
					pageNum: 1,
					pageSize: 50,
					schoolName,
				}).then(res => {
					this.indexList = res.records;
					
					this.schoolList = JSON.parse(JSON.stringify(this.indexList));
				})
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					// console.log(valid)
					if (valid) {
						this.id !== '' ? this.alterAddress() :this.addAddress();
					} else {
						console.log('验证失败');
					}
				});
			},
			cancel() {
				this.show = false;
			},
			confirm(res) {
				this.form.isTransfer = this.isTransferRange[res].label;
				// this.address = res;
				// this.form.area = res.province.label + res.city.label + res.area.label;
			},
			alterAddress(){
				this.$u.api.addOrUpdateStuInformation({
					studentName:this.form.studentName,
					parentsMobile:this.form.parentsMobile,
					schoolName:this.form.schoolName,
					className:this.form.className,
					id:this.id,
					sequence:this.checked ? 1 : 0,
					isTransfer: this.form.isTransfer&&this.isTransferRange.find(e => e.label == this.form.isTransfer).id||'',
				}).then(res => {
					
					uni.navigateBack();
					// uni.navigateTo({
					// 	url:'/pages/address/index'
					// })
				}).catch(err => {
				
				})
			},
			addAddress() {
				this.$u.api.addOrUpdateStuInformation({
					studentName:this.form.studentName,
					parentsMobile:this.form.parentsMobile,
					schoolName:this.form.schoolName,
					className:this.form.className,
					sequence:this.checked ? 1 : 0,
					isTransfer: this.form.isTransfer&&this.isTransferRange.find(e => e.label == this.form.isTransfer).id||'',
				}).then(res => {
					uni.navigateBack();
					// uni.navigateTo({
					// 	url:'/pages/address/index'
					// })
				}).catch(err => {

				})
			},
			// switch打开或者关闭时触发，值为true或者false
			// 即使不监听此事件，this.checked此时也会相应的变成true或者false
			change(status) {
				// console.log(status);
			},
			getAppHeight() {
				this.Height = uni.getSystemInfoSync().windowHeight + 'px';
			},
		}
	};
</script>

<style lang="scss">
	
	.u-form-item{
		color: #000000 !important;
	}
	.u-input__input{
		color: #000000 !important;
	}
	.u-column-item{
		color: #000000 !important;
	}
	
	.u-input__right-icon{
		padding-right: 60rpx;
	}
	#editaddress {
		background-color: #F0F0F0;

		.info {
			padding: 0 34rpx;
			background: #FFFFFF;
			.button {
				font-size: 28rpx;
				color: #C0C4CC;
			}
			
		}
		

		&>.text {}

		.pass {
			background-color: #FFFFFF;
			width: 750rpx;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: stretch;
			margin-top: 12rpx;

			.default {
				margin-left: 34rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex: 1;
				color: #000000;

				.checked {
					margin-right: 32rpx;
				}
			}

		}

		.overs {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 400rpx;
			height: 68rpx;
			position: absolute;
			left: 20%;
			bottom: 27px;
			background-color: $u-main-color;
			color: #FFFFFF;
			font-weight: bold;
			border-radius: 100rpx;
			letter-spacing: 2px;
		}
	}
	#selectSchool, #selectClass {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		background-color: white;
		overflow: none;
		z-index: 100;
		
		.select-box {
			position: relative;
			.search-box {
				position: fixed;
				top: 0;
				left: 1em;
				right: 1em;
				z-index: 199;
			}
			
			.list-box {
				z-index: 180;
				overflow: auto;
				margin: 84rpx 1em 0 1em;
				padding: 0 6rpx;
				height: calc(100vh - 84rpx);
				.row {
					display: flex;
					justify-content: space-between;
					padding: 20rpx;
					.title {		
						font-size: 54rpx;
						height: 50rpx;
						line-height: 50rpx;
						
						input {
							font-size: 54rpx;
						}
					}
					
					border-bottom: #C0C4CC 1px solid;
					
				}
			}
			
		}
	}
</style>
