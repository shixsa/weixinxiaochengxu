<template>
	<view>
		<!-- 头部 -->
		<xiaoH></xiaoH>
		<!-- 消息 -->
		<swiper class='swiper' :current="index">
			<swiper-item>
				<view class="xiaoX">
					<view class='xiaoX-left'><image src="../../static/tongzhi.png" mode=""></image></view>
					<view class='xiaoX-right'>
						<view class='title'>站务通知</view>
						<view class="lie">你提出的问题</view>
						<view>前端工作3-5年的发展？</view>
						<view class="time">5小时前</view>
					</view>
				</view>
				<view class="xiaoX">
					<view class='xiaoX-left'><image src="../../static/004.png" mode=""></image></view>
					<view class='xiaoX-right'>
						<view class='title'>每天逛逛</view>
						<view class="lie">徽章小助手</view>
						<view>恭喜你有一个徽章可领取</view>
						<view class="time">1天前</view>
					</view>
				</view>
				<view class="xiaoX">
					<view class='xiaoX-left'><image src="../../static/002.jpg" mode=""></image></view>
					<view class='xiaoX-right'>
						<view class='title'>管家助手</view>
						<view class="lie">知乎小管家</view>
						<view>亲爱的集市里的养猫人你好： 欢迎来到知乎，一个认真，专业，友善的知识分享专区。</view>
						<view class="time">3个月前</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		
		
	</view>
</template>

<script>
	import xiaoH from "../../components/xiaoH.vue"
	export default{
		components:{
			xiaoH
		},
		data(){
			return{
				index:0,
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.swiper{
		height: 100vh;
	}
	/*. */
	.xiaoX{
		display: flex;
		justify-content: flex-start;
		padding: 0 30upx;
		padding-right: 0;
		background-color: #fff;
	}
	.xiaoX-left{
		width: 80upx;
		height: 80upx;
		padding-top: 15px;
		margin-right: 10px;
	}
	.xiaoX-left image{
		width: 100%;
		height: 100%;
	}
	.xiaoX-right{
		width: 90%;
		padding: 10px 0;
		border-bottom: 1px solid #D7D7D7;
	}
	.xiaoX-right view{
		line-height: 20px;
	}
	.xiaoX-right .title{
		font-size: 34upx;
		font-weight: 700;
	}
	.xiaoX-right .lie{
		color:#7E7E7E;
	}
	.xiaoX-right view{
		font-size: 30upx;
		color:#333;
		display: -webkit-box; 
		-webkit-line-clamp: 2; 
		-webkit-box-orient: vertical; 
		overflow: hidden;
	}
	.xiaoX-right .time{
		color:#7E7E7E;
		padding-top:6px;
	}
</style>
