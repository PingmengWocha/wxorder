// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //点击头像
  avatar() {
    console.log('点击了')
  },

  //我的客户
  myClient() {
    wx.navigateTo({
      url: './myclient/myclient',
    })
  },


  //改变密码
  changepassword(e) {
    wx.navigateTo({
      url: '/pages/my/password/password',
    })
  },

  //登出
  loginout() {
    //清除缓存
    //跳转到登录页面
    wx.navigateTo({
      url: '/pages/login/login',
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})