// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    zhanghao:'',
    password:'',
    asd:""
  },
  formName:function(e){
    this.setData({
      zhanghao: e.detail.value
    })
  },
  formName1: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login:function(e){
   var thia = this
    if (thia.data.zhanghao === "123456"){
      if (thia.data.password === "123456"){
        wx.reLaunch({
          url: '../index/index'
        })
      }else{
        thia.setData({
          asd: "密码错误！"
        })
      }
     
    }else{
      thia.setData({
        asd:"账号错误！"
      })
    }
   
  },
zhuce:function(e){

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})