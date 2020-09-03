// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: ''
  },

  //手机号输出
  phoneTf: function(e) {
    this.data.phone = e.detail.value
  },

  //密码输入
  passwordTf: function(e) {
    this.data.password = e.detail.value
  },

  goto() {
    let that = this
    if(this.data.phone != null && this.data.phone.length > 0) {
      if(!that.telFun(that.data.phone)){
        wx.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 2000
        })
        return;
      }else {
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

        }
      }
    }else {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.switchTab({
      url: '/pages/index/index',
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
  }
})