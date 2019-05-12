<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="headerBox">
				<view class='active'>通知<text>5</text></view>
				<view>私信</view>
			</view>
			<view class="xiuG">
				<image :src="indexList==0?'../../static/shezhi1.png':'../../static/bianjixiugai.png'" mode=""></image>
			</view>
		</view>
		<view class="place"></view>

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
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		text-align: center;
	}

	.headerBox view {
		width: 50%;
		font-size: 36upx;
		padding: 8px 0;
		border-bottom: 2px solid transparent;
	}
	.headerBox view text{
		display: inline-block;
		width:40upx;
		height: 40upx;
		border-radius: 50%;
		background-color: #FF3333;
		color:#fff;
		line-height: 40upx;
		text-align: center;
		margin-left: 5px;
		font-weight: 700;
		font-size: 24upx;
		
	}
	.headerBox view.active{
		border-bottom: 2px solid #333333;
	}

	/* 图片 */
	.xiuG {
		width: 100upx;
		height: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
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
</style>
