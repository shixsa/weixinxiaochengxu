<template>
    <view class="content">
		<view class="logo">
			<view class="logo-img">
				<image src="../../static/head.png" mode=""></image>
			</view>
		</view>
        <view class="login_inp">
			<view class="login_inp-box">
				<input type="number" v-model="phone" placeholder="请输入手机号码" value="" />
			</view>
			<view class="login_inp-box">
				<input type="password" v-model="password" placeholder="请输入密码" value="" />
			</view>
		</view>
		 <view class="action-row">
		    <navigator class='nav zhu' url="../reg/reg">注册账号?</navigator>
		    <text>|</text>
		    <navigator  class='nav wan' url="../pwd/pwd">忘记密码</navigator>
		</view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
       
    </view>
</template>

<script>
    export default {
        data() {
            return {
                providerList: [],
                hasProvider: false,
                phone: '',//手机号码
                password: '',//密码
				model:"",//手机系统
            }
        },
        methods: {
            
            bindLogin() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
				uni.switchTab({
					url:"../index/index"
				})
             
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
            },
            //获取手机信息
            getSystemInfo(){
            	var that = this;
            	uni.getSystemInfo({
            		success: function (res) {
            			console.log(res.model);
            			console.log(res.pixelRatio);
            			console.log(res.windowWidth);
            			console.log(res.windowHeight);
            			console.log(res.language);
            			console.log(res.version);
            			console.log(res.platform);
            			that.model = res.platform;
            			uni.setStorageSync('model', that.model);
            		}
            	});
            },
	
			
        },
        onLoad() {
        
        }
    }
</script>

<style>
	@import "../../common/login.css";
   
</style>

