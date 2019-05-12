<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="headerBox">
				<view>想法</view>
			</view>
			<view class="xiuG">
				<view class='uni-icon uni-icon-search'></view>
				<view class='uni-icon uni-icon-chat'></view>
				<view class="head">
					<image src="../../static/01.jpg" mode=""></image>
				</view>
			</view>

		</view>
		<view class="place"></view>
		<!-- 主要内容 -->
		<view class='center'>
			<swiper class='swiper' :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<view class="view_img">
							<image src="https://ps.ssl.qhmsg.com/sdr/400__/t012f692985b2832407.jpg" mode=""></image>
						</view>
						<view class="view_right">
							<view class='state'>正在讨论</view>
							<view class='title'>Intent能传递多大</view>
							<text class='state_box'>移步到这里观看</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 热门更新 -->
		<view class='update'>
			<view class='update-box'>
				<view>热门更新了</view>
				<view class='xian'>|</view>
				<view>发现知友</view>
			</view>
		</view>
		<!-- 新闻 -->
		<view class='news'>
			<!--  -->
			<view class='news_list'>
				<view class='news_list-top'>
					<view class="news_list-box">
						<image src="https://upload.jianshu.io/users/upload_avatars/15736285/0d43f3d0-61d1-4941-8ad0-073bb0068bb0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" mode=""></image>
						<view class='right'>
							<text class='title'>最显脸小的锁骨发发型</text>
							<view>15分钟前</view>
						</view>
					</view>
					
					<view class='uni-icon uni-icon-more-filled'></view>
				</view>
				<!--  -->
				<view class='news_list-center'>
					锁骨发发型可是从2018年就开始很流行了，现如今到了2019年还是依然很火，在冬季比起一头长头发，剪上一款利落短发更好看，很适合不喜欢扎头发的女生。下面是小编特意整理出来的2019年最显脸小的锁骨发，圆脸长脸鹅蛋脸都适合，一起来看看吧!
				
					<view class='news_list-center-img'>
						<image src="https://ps.ssl.qhmsg.com/sdr/400__/t019053548777ce08af.jpg" mode="aspectFit"></image>
					</view>
					<view class='news_bottom'>
						<view>转发 3</view>
						<view>评论 56</view>
						<view>点赞 234</view>
					</view>
				</view>
			</view>
			<!--  -->
			<view class='news_list'>
				<view class='news_list-top'>
					<view class="news_list-box">
						<image src="https://ps.ssl.qhmsg.com/sdr/400__/t010406294cf180b096.jpg" mode=""></image>
						<view class='right'>
							<text class='title'>南京那些你没有去过的地方</text>
							<view>1小时前</view>
						</view>
					</view>
					
					<view class='uni-icon uni-icon-more-filled'></view>
				</view>
				<!--  -->
				<view class='news_list-center'>
					　夫子庙秦淮风光带位于南京城南，指的是以夫子庙建筑为中心，秦淮河为纽带，东起东水关淮青桥秦淮水亭，越过文德桥，直到中华门城堡延伸至西水关的内秦淮河地带，包括秦淮河两岸的街巷、民居、附近的古迹和风景点，是南京最繁华的地方。
					<view class='news_list-center-img'>
						<image src="https://ps.ssl.qhmsg.com/bdr/500__/t01eee4264bd636fcc7.jpg" mode="aspectFit"></image>
					</view>
					<view class='news_bottom'>
						<view>转发 15</view>
						<view>评论 134</view>
						<view>点赞 520</view>
					</view>
				</view>
			</view>
			<!--  -->
			<view class='news_list'>
				<view class='news_list-top'>
					<view class="news_list-box">
						<image src="https://p1.ssl.qhimgs1.com/sdr/400__/t015545b0a0d38ef8ad.jpg" mode=""></image>
						<view class='right'>
							<text class='title'>DNF又摊上事？因活动被质疑黑蔡徐坤，被要求全网道歉</text>
							<view>2天前</view>
						</view>
					</view>
					
					<view class='uni-icon uni-icon-more-filled'></view>
				</view>
				<!--  -->
				<view class='news_list-center'>
					蔡徐坤，当今网络上最响亮的名字，这位偶像练习生C位出道的流量明星，靠着一手唱、跳、RAP、篮球招来了全网齐黑的节奏。蔡徐坤也成为首位将自己名字搞成贬义词的明星，如今你XXX像蔡徐坤盛行网络，成为了网友们公认的最恶毒语言。
				
					<view class='news_list-center-img'>
						<image src="https://ps.ssl.qhmsg.com/bdr/533__/t01fe06fd7cf76a3509.jpg" mode="aspectFit"></image>
					</view>
					<view class='news_bottom'>
						<view>转发</view>
						<view>评论</view>
						<view>点赞 3</view>
					</view>
				</view>
			</view>
			<!--  -->
		</view>
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
	page {
		background-color: #fff !important;
	}

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
		justify-content: flex-start;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		z-index: 999;
		border-bottom: 1px solid #E6E6E6;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	.headerBox {
		width: 20%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.headerBox view {
		font-weight: 700;
		font-size: 40upx;

	}

	/* 图片 */
	.xiuG {
		width: 50%;
		height: 100upx;
		display: flex;
		padding-right: 20px;
		justify-content: flex-end;
		align-items: center;
	}

	.xiuG view {
		margin-left: 20px;
	}

	.xiuG .uni-icon-search {
		color: #646464;
		font-size: 25px;
		font-weight: 700;
	}

	.xiuG .uni-icon-chat {
		color: #646468;
	}

	.xiuG image {
		width: 65upx;
		height: 65upx;
	}

	.place {
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
		background-color: #fff;
		height: 100upx;
	}

	/*  */
	.head {
		width: 30px;
		height: 30px;
		background-color: #C9A26E;
		border-radius: 50%;
	}

	.head image {
		width: 100%;
		height: 100%;
	}

	/* 主体 */
	.center {
		padding: 10px 30px;
	}

	.swiper {
		height: 150upx;
	}

	.swiper-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.view_img {
		width: 200upx;
		height: 150upx;
		border-radius: 10px;
		overflow: hidden;
	}

	.view_img image {
		width: 100%;
		height: 100%;
	}

	.view_right {
		padding-left: 10px;
	}

	.view_right view {
		line-height: 20px;
		font-size: 30upx;
	}

	.view_right .state {
		color: #107AF6;
		font-weight: 700;
	}

	.view_right .title {
		font-size: 34upx;
		font-weight: 700;
		color: #333;
	}

	.state_box {
		color: #999999;
		font-size: 24upx;
	}

	.update {
		padding: 10px 20px;
	}

	.update-box {
		background-color: #fff;
		box-shadow: 0 0 5px rgba(0, 0, 0, .3);
		display: flex;
		justify-content: center;
		padding: 10px 20px;
	}

	.update-box view {
		font-size: 34upx;
		font-weight: 700;
	}

	.update-box .xian {
		color: #E9E9E9;
		padding: 0 30px;
	}

	/* 新闻 */
	.news_list {
		padding: 10px 20px;
		border-bottom: 1px solid #EEEEEE;
	}

	.news_list-top {
		display: flex;
		justify-content:space-between;
	}
	.news_list-box{
		display: flex;
		justify-content: flex-start;
	}
	.news_list-top image {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	.news_list-top .right {
		padding-left: 10px;
	}

	.news_list-top .right text {
		font-size: 34upx;
		font-weight: 700;
	}

	.news_list-top .right view{
		color:#969696;
	}
	.news_list-center{
		padding-left: 50px;
		line-height: 18px;
		color:#4D4D4D;
		font-size: 26upx;
	}
	.news_list-center-img{
		width: 100%;
	}
	.news_list-center-img image{
		width: 100%;
	}
	.news_bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.news_bottom view{
		font-size: 30upx;
		font-weight: 700;
	}
	
	/* 更多 */
	.uni-icon-more-filled{
		color:#9B9B9B;
		font-size: 30px;
	}
</style>
