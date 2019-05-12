<template>
	<view>
		<view class="child" v-for="(item,index) in showModal" :key="index">
			<view class='child-img'><image :src="item.img" mode=""></image></view>
			<view class='child_right'>
				<view class='name'>{{item.name}}</view>
				<view class='child-right-center'>
					<view>￥{{item.price}}/人</view>
					<view>{{item.distance}}</view>
				</view>
				<view class='fastFood'>{{item.fastFood}}</view>
				<view class='title'>{{item.title}}</view>
			</view>
			
		</view> 
	</view>
</template>

<script>
	export default{
		props:{
			showModal:{
				 type: Array
			}
		},
		data(){
			return{}
		},
		methods:{
			
		}
	}
</script>

<style>
	.child{
		background-color: #fff;
		display: flex;
		justify-content: flex-start;
		padding:30upx 20upx;
		border-top:1px solid  #D8D8D8;
	}
	.child-img{
		width: 140upx;
		height: 140upx;
	}
	.child-img image{
		width: 100%;
		height: 100%;
	}
	.child_right{
		width: 75%;
		padding-left: 10px;
	}
	.child_right view{
		line-height: 18px;
	}
	.child-right-center{
		display: flex;
		justify-content: space-between;
		padding: 5px 0;
		font-size: 26upx;
		color:#666666;
	}
	.name{
		font-size: 34upx;
		color:#333;
	}
	.fastFood{
		font-size: 26upx;
		color:#666;
	}
	.title{
		font-size: 30upx;
		color:#666;
		padding-top: 20upx;
		margin-top: 5px;
		border-top: 1px solid #E5E5E5;
	}
</style>
