<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="headerBox">
				<view  class="head"><image src="../../static/01.jpg" mode=""></image></view>
				<view class='headerBox-name'>
					<view class="name">集市里的养猫人 <text>开通盐选会员</text></view>
					<view>加入盐选会员享各种精彩课程</view>
				</view>
			</view>
			<view class="xiuG">
				<view class='uni-icon uni-icon-bars'></view>
				<view class='uni-icon uni-icon-search'></view>
				
			</view>
		</view>
		<view class="place"></view>
		<!-- 导航 -->
		<view class='hui_d'>
			<view class='active'>会员推荐</view>
			<view>课 堂</view>
			<view>读书会</view>
		</view>
		
		<swiper class="swiper">
			<swiper-item>
				<view class="swiper-item">
					<view class='sw_img'>
						<view>
							<image src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" mode=""></image>
						</view>					
					</view>
					<!-- 导航栏 -->
					<view class='sw_daohan'>
						<view class='sw_daohan-list'>
							<image src="../../static/daxue-.png" mode=""></image>
							<view>名师课堂</view>
						</view>
						<view class='sw_daohan-list'>
							<image src="../../static/shuju.png" mode=""></image>
							<view>盐选书榜</view>
						</view>
						<view class='sw_daohan-list'>
							<image src="../../static/liebiao1.png" mode=""></image>
							<view>盐选分类</view>
						</view>
						<view class='sw_daohan-list'>
							<image src="../../static/fuli.png" mode=""></image>
							<view>福利专区</view>
						</view>
					</view>
					<!-- 今日上新 -->
					<view class="jin">
						<view class='name'>今日上新</view>
						<view class='xian'>|</view>
						<view class='center'>电子书:（斗罗大陆）等你来</view>
					</view>
					
					<!-- 课程 会员上架 -->
					<view class='course'>
						<view class="course-box">
							<view class='course-box-top'>
								<view class='Top_title'>盐选会员 · 上新推荐</view>
								<view >查看更多<text class='uni-icon uni-icon-arrowright'></text></view>
							</view>
							<view class='course-box-list'>
								<view class='course-box-list_box'>
									<view class='img'>
										<image src="https://ps.ssl.qhmsg.com/bdr/800__/t01ca271e7436e2ffc6.jpg" mode=""></image>
									</view>
									<view class='title'>教你如何低成本的创业项目呢？</view>
									<view class='time'>22节课 | 7小时</view>
								</view>
								<view class='course-box-list_box'>
									<view class='img'>
										<image src="http://photocdn.sohu.com/20130508/Img375239800.jpg" mode=""></image>
									</view>
									<view class='title'>教你如何学习计算机？</view>
									<view class='time'>18节课 | 5小时</view>
								</view>
								<view class='course-box-list_box'>
									<view class='img'>
										<image src="https://ps.ssl.qhmsg.com/bdr/800__/t01c06d205f890d7f26.jpg" mode=""></image>
									</view>
									<view class='title'>如何让自己成为一个真正的成功人士？</view>
									<view class='time'>30节课 | 16小时</view>
								</view>
								<view class='course-box-list_box'>
									<view class='img'>
										<image src="http://i6.hexunimg.cn/2014-09-15/168468431.jpg" mode=""></image>
									</view>
									<view class='title'>教你如何让自己变得独立！</view>
									<view class='time'>20节课 | 4小时</view>
								</view>
							</view>
						</view>
					</view>
					<!--  -->
				</view>
			</swiper-item>
		
		</swiper>
		<!--  -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headerPosition: "fixed", //导航栏
				display: false,
				indexList: 0, //判断是否 设置 或者修改
			}
		},
		methods: {
	
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
			// console.log(e.scrollTop)
		},
	}
</script>

<style>
	/* 头部 */
	.status {
		width: 100%;
		height: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);
		/*  #endif  */
		background-color: #fff;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	
	/* 分页导航 */
	.header {
		width: 100%;
		height: 100upx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		z-index: 999;
	}
	
	
	.headerBox {
		width: 80%;
		display: flex;
		justify-content:flex-start;
		align-items: center;
		padding-left: 15px;
	}
	
	.headerBox  .head{
		background-color: #C9A26E;
		width: 65upx;
		height: 65upx;
		border-radius: 50%;
	}
	.headerBox  .head image{
		width: 65upx;
		height: 65upx;
	}
		.headerBox-name{
			padding-left: 10px;
		}
	.headerBox-name view{
		line-height: 18px;
		color:#A1A1A1;
		font-size: 24upx;
	}
	.headerBox-name .name{
		font-size: 34upx;
		color:#807D8F;
		font-weight: 700;
	}
	.headerBox-name .name text{
		font-weight: 400;
		font-size: 24upx;
		background-color: #C3C3C3;
		padding: 1px 6px;
		border-radius: 2px;
		margin-left: 10px;
	}
	/* 图片 */
	.xiuG {
		width: 20%;
		height: 100upx;
		display: flex;
		padding-right: 15px;
		justify-content: flex-end;
		align-items: center;
	}
	
	.xiuG view {
		margin-left: 10px;
	}
	
	.xiuG .uni-icon-search {
		width:25px;
		height: 25px;
		border:1px solid #DADADA;
		border-radius: 50%;
		color: #646464;
		font-size: 18px;
		text-align: center;
		line-height: 25px;
		font-weight: 700;
	}
	
	.xiuG .uni-icon-bars {
		width:25px;
		height: 25px;
		border:1px solid #DADADA;
		border-radius: 50%;
		color: #646464;
		font-size: 18px;
		text-align: center;
		line-height: 25px;
		font-weight: 700;
	}	
	.place {
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
		background-color: #fff;
		height: 100upx;
	}
	
/*  */

.hui_d{
	position:fixed;
	top:88upx;
	left:0;
	width: 92%;
	display: flex;
	z-index: 996;
	justify-content: space-between;
	align-items: center;
	padding:0 30upx;
	background-color: #fff;
	border:1px solid #CFCFCF;
}
.hui_d view{
	padding-top: 8px;
	font-size: 34upx;
	padding-bottom: 5px;
	color:#969696;
	border-bottom: 2px solid transparent;
}
.hui_d view.active{
	color:#E7A773;
	border-bottom: 2px solid #E7A773;
}

.swiper{
	height: 100vh;
	padding:20px 0; 
	padding-top: 88upx;
}
.sw_img{
	padding: 10px 15px;
	background-color: #fff;
}
.sw_img view{
	width: 100%;
	height: 100px;
	border-radius: 10px;
	overflow: hidden;
}
.sw_img image{
	width: 100%;
	height: 100%;
}

/* 导航栏 */
.sw_daohan{
	padding: 10px 20upx;
	display: flex;
	justify-content:space-between;
	background-color: #fff;
	border-bottom: 1px solid #F0F0F0;
}
.sw_daohan-list{
	text-align: center;
}
.sw_daohan-list image{
	width: 80upx;
	height: 80upx;
}

.jin{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px 20upx;
	background-color: #fff;
}
.jin .name{
	font-weight: 700;
	font-size: 34upx;
}
.jin .xian{
	padding:0 20px; 
}
.center{
	width: 60%;
}

.course{
	margin-top: 10px;
	background-color: #fff;
}
.course-box{
	padding: 10px 20upx;	
}
.course-box-top{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.course-box-top .Top_title{
	font-size: 34upx;
	font-weight: 700;
	color:#181818;
}
.course-box-top view{
	color:#979797;
}
/*  */
.course-box-list{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.course-box-list_box{
	width: 49%;
	padding: 10px 0;
}
.course-box-list_box image{
	width: 100%;
	height:100px;
	border-radius: 10px;
}
.course-box-list_box .title{
	font-size: 30upx;
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	-ms-text-overflow: ellipsis;
	text-overflow: ellipsis;
}
.course-box-list_box .time{
	font-size: 24upx;
	color:#999999;
}
</style>
