<template>
	<meta charset="utf-8" />
<title>v-bind练习</title>
<!-- 开发环境版本，包含了有帮助的命令⾏警告 -->
<!-- 通过CDN引⼊Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<style type="text/css">
.container {
display: flex;
flex-direction: column;
width: 80%;
margin: 0 auto;
}
.card {
display: flex;
margin-top: 10px;
}
.card img {
border-radius: 50%;
width: 7%;
height: 7%;
}
#message {
margin-left: 15px;
margin-top: 20px;
}
.top {
display: flex;
}
.name {
width: 50px;
}
.attention,
.noattention {
position: relative;
margin-left: 120px;
margin-top: -1px;
}
.attention {
color: #008000;
}
.noattention {
color: lightgrey;
}
</template>
<script>
<!-- xue-app根容器 -->
<view id="app">
<h3>推荐作者</h3>
<view class="container">
<view class="card" v-for="message in messages">
<!-- 作者图像 -->
<img :src="message.image">
<view id="message">
<view class="top">
<view class="name">
<!-- 作者名字 -->
{{message.name}}

<!-- 是否已经加关注 -->
<view class="attention" v-if="message.like">+关注</p>
<view class="noattention" v-else>√已关注</p>
</view>
<view class="bottom">
<!-- 作品阅读信息 -->
{{message.message}}
export default {
data: {
messages: [{
image: 'img/image1.png',
name: '阿栈',
message: '写了465.2字·1.2k喜欢',
like: true
},
{
image: 'img/image2.jpg',
name: '胡七筒',
message: '写了325k字·11k喜欢',
like: false
},
{
image: 'img/image3.jpg',
name: '江波_偶遇科学',
message: '写了302.1k字·1.9k喜欢',
like: true
},
{
image: 'img/image4.jpg',
name: '梅拾遗',
message: '写了269.3k字·23.4k喜欢',
like: false
},
{
image: 'img/image5.jpg',
name: '林徐Grace',
message: '写了677.9k字·5.5k喜欢',
like: true
},
]
}
})
</script>

<style scoped="scoped">
	.content {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
	}
    .code{
		flex: 1 1 70%;
	}
	.box {
		margin-top: 40upx;
		height:120upx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #D3D3D3;
	}

	.accept {
		height:100upx;
		flex: 1 1 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #19AD1A;
		color: #EEEEEE;
	}

	.rightnow {
		margin-top: 30upx;
		background-color: #2E7BEB;
		color: #EEEEEE;
	}
</style>
