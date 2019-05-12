<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="input">
				<text class="icon uni-icon uni-icon-search"></text>
				<input placeholder="如何看待自己..." :disabled="true" />
				<view class="input_right">
					<view class='input_right-img'>
						<text class="uni-icon uni-icon-scan"></text>
					</view>
				</view>
			</view>
		<!-- 	 <view class="scan">
				<view class="uni-icon uni-icon-person"></view>
			</view> --> 
		</view>		
		<view class="place"></view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				headerPosition:"fixed", //导航栏
				display:false,
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
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
		justify-content: center;
		position: fixed;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		z-index: 999;
	}
	.input {
		width: calc(100% - 80upx);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}
	
	.input .icon {
		width: 60upx;
		height: 60upx;
		position: absolute;
		color: #a18090;
		z-index: 996;
		top: 20upx;
		left: 0;
		font-size: 40upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
	}
	.input_right{
		position:absolute;
		right: 0px;
		z-index: 996;
		display: flex;
		width: 100upx;
		height: 75upx;
		justify-content: flex-end;
		padding-right: 20upx;
		align-items: center;
	}
	.input_right-img{
		display: flex;
		align-items: center;
	}
	.input_right-img image{
		width: 20px;
		height: 20px;
		padding: 0 15px;
	}
	.input_right-img  .uni-icon-scan{
		font-size: 25px;
		color:#a18090;
		font-weight: 600;
	}
	.xian{
		color:#B8B8B8;
	}
	.input input {
		width: calc(100% - 70upx);
		height: 75upx;
		border-radius:5px;
		background-color: #EBEBEB;
		font-size: 34upx;
		padding-left: 70upx;
		text-align: left;
	}
	
	.menu {
		width: 100upx;
		height: 100upx;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;		
	}
	.menu image{
		width: 60upx;
		height: 60upx;
		border-radius: 60upx;
		margin-right: 5px;
		margin-left: 10px;
	}
	
	.place {
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		
		/*  #endif  */
		background-color: #fff;
		height:100upx;
	}
	
</style>
