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
			<view class="login_inp-box code_box">
				<input type="number" v-model="code" placeholder="请输入验证码" value="" />
				<button type="primary" class="primary1">获取验证码</button>
			</view>
		</view>
<!-- 		 <view class="action-row">
		    <navigator class='nav zhu' url="../reg/reg">注册账号?</navigator>
		    <text>|</text>
		    <navigator  class='nav wan' url="../pwd/pwd">忘记密码</navigator>
		</view> -->
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">注册</button>
        </view>
       
      <!--  <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
        </view> -->
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
                code: "",//验证码
				model:"",//手机系统
				appId:"",//100=微信公众号 101=微信小程序用户端 200=安卓用户端 201=安卓代理商端 202=安卓跑腿员端 300=苹果用户端 301=苹果代理商端 303=苹果跑腿员端
            }
        },
        methods: {
            bindLogin(){
				uni.navigateTo({
					url:"../login/login"
				})
			}
            
        },
        onLoad() {
            
        }
    }
</script>

<style>
	@import "../../common/login.css";
   
</style>

