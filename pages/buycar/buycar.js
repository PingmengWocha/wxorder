// pages/buycar/buycar.js
const apiUtil = require("../../utils/ApiUtil.js")
const api = require('../../constants/HttpConstants')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderItems: [
      {
        id: 1,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '酸菜鱼',
        price: 15.0,
        num: 1
      },
      {
        id: 2,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '辣子鸡',
        price: 58.2,
        num: 2
      },
      {
        id: 3,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '爆炒猪肚',
        price: 150.0,
        num: 3
      },
      {
        id: 5,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '爆炒土豆丝',
        price: 150.0,
        num: 3
      }
    ],
    totalPrice: 0,
    type: 4,//0餐厅1房产2家居3未登录4没有内容
  },

  //桌号
  orderTf(e) {
    let num = e.detail.value
    console.log(num)
  },

  //客数
  clientTf(e) {
    let num = e.detail.value
    console.log(num)
  },

  //备注
  tipcontent(e) {
    let content = e.detail.value
    console.log(content)
  },

  //点击下单
  order(e) {
    let orderItems = this.data.orderItems
    if(orderItems.length == 0) {
      wx.showToast({
        title: '点些什么吧',
        icon: 'none',
        duration: 2000
      })
    }
  },

  //减菜数量
  cut(e) {
    let index = e.currentTarget.dataset.index //获取菜品的索引
    let orderItems = this.data.orderItems
    let num = orderItems[index].num
    let totalPrice = this.data.totalPrice
    totalPrice =parseFloat(parseFloat(totalPrice) - parseFloat(orderItems[index].price)).toFixed(2)
    if(num == 1) {
      orderItems.splice(index,1)
    }else {
      orderItems[index].num--
    }
    this.setData({
      orderItems: orderItems,
      totalPrice: totalPrice
    })
  },

  //增加菜量
  plus(e) {
    let index = e.currentTarget.dataset.index //获取菜品的索引
    let orderItems = this.data.orderItems
    let totalPrice = this.data.totalPrice
    orderItems[index].num++
    totalPrice = parseFloat(parseFloat(totalPrice) + parseFloat(orderItems[index].price)).toFixed(2)
    this.setData({
      orderItems: orderItems,
      totalPrice: totalPrice
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
    let orderItems = this.data.orderItems
    let totalPrice = this.data.totalPrice
    totalPrice = 0
    for(let i = 0; i < orderItems.length; i++) {
      totalPrice += parseFloat(orderItems[i].num * orderItems[i].price)
    }
    this.setData({
      totalPrice: totalPrice
    })
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