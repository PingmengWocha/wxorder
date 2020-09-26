// pages/login/login.js
const apiUtil = require('../../utils/ApiUtil')
const api = require('../../constants/HttpConstants')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    account: '',
    password: ''
  },

  //手机号输出
  phoneTf: function(e) {
    this.data.phone = e.detail.value
  },

  //账号输入
  accountTf(e) {
    this.setData({
      account: e.detail.value
    })
  },

  //密码输入
  passwordTf: function(e) {
    // this.data.password = e.detail.value
    this.setData({
      password: e.detail.value
    })
  },

  sureAction(info) {
    let that = this
    // if(this.data.phone != null && this.data.phone.length > 0) {
    //   if(!that.telFun(that.data.phone)){
    //     wx.showToast({
    //       title: '请输入正确的手机号',
    //       icon: 'none',
    //       duration: 2000
    //     })
    //     return;
    //   }else {
    //     console.log(that.data.password.length)
    //     if(that.data.password == null || that.data.password.length <= 0) {
    //       wx.showToast({
    //         title: '请输密码',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //       return
    //     }else {
    //       //网络请求

    //     }
    //   }
    // }else {
    //   wx.showToast({
    //     title: '手机号不能为空',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return
    // }
    let code
    // wx.login({
    //   success: function(res) {
    //     code = res.code
    //     wx.getUserInfo({
    //       withCredentials: true,
    //       lang: 'zh_CN',
    //       success: function(res) {
    //         let data = {
    //           code: code,
    //           encryptedData: res.encryptedData,
    //           iv: res.iv
    //         }
    //       },
    //       fail: function(res) {},
    //       complete: function(res) {},
    //     })
    //   }
    // })

    if(this.data.account != null && this.data.account.length > 0) {
      console.log(that.data.password.length)
      if(that.data.password == null || that.data.password.length <= 0) {
        wx.showToast({
          title: '请输密码',
          icon: 'none',
          duration: 2000
        })
        return
      }else {
        //网络请求
        let data = {
          clerkLoginAccount: that.data.account,
          loginPassword: that.data.password
        }
        apiUtil.request(api.login,data).then(res => {
          console.log(res)
          if(res.code == 200) {
            wx.setStorageSync('userId', res.data.id)
            wx.setStorageSync('hasLogin', 1) //0未登录1已登录
            wx.setStorageSync('clerkLoginAccount', res.data.clerkLoginAccount)
            if(res.data.industryType === 'sale') {
              app.globalData.type = 1
              wx.setStorageSync('type', 1)
            }
            if(res.data.industryType === 'house') {
              app.globalData.type = 2
              wx.setStorageSync('type', 2)
            }
            if(res.data.industryType === 'diet') {
              wx.setStorageSync('type', 0)
              app.globalData.type = 0
            }
            app.globalData.hasLogin = true
            wx.switchTab({
              url: '/pages/index/index',
            })
          }
        })
      }
    }else {
      wx.showToast({
        title: '账号不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.test()
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

  },

  //手机号正则判断
  telFun(tels){
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(tels)) {
      return false;
    } else {
      return true;
    }
  },

  checkFun($poneInput) {
    var myreg = /^\d{6}$/;
    if (!myreg.test($poneInput)) {
      return false;
    } else {
      return true;
    }
  },

  test(){
    let that = this
    let data = {}
    apiUtil.request(api.test,data).then(res => {
      console.log('走了')
      console.log(res)
      if(res.code == 0) {
        console.log(res)
      }
    })
  }
})