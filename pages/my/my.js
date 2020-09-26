// pages/my/my.js
const apiUtil = require('../../utils/ApiUtil')
const api = require('../../constants/HttpConstants')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 4, //0餐厅1房产2家居3未登录4空白内容
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

  //点击获取订单
  myOrder() {
    wx.navigateTo({
      url: './orders/orders',
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
    wx.clearStorageSync()
    app.globalData.hasLogin = false
    app.globalData.type = 0
    app.globalData.selectedContent = []
    //跳转到登录页面
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  //跳转登录页面
  goLogin() {
    wx.navigateTo({
      url: '../login/login',
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
    let that = this
    let hasLogin = app.globalData.hasLogin
    if(!hasLogin) {
      this.setData({
        type: 3
      })
    }else {
      let type = app.globalData.type
      this.setData({
        type: type
      })
    }
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