// pages/my/password/password.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newPassword: '',
    confirmPassword: ''
  },

  //新密码输入
  npasswordTf(e) {
    this.data.newPassword = e.detail.value
  },

  cpasswordTf(e) {
    this.data.confirmPassword = e.detail.value
  },

  //点击确认按钮
  confirm(e) {
    if(this.data.newPassword === this.data.confirmPassword) {

    }else {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'none',
        duration: 2000
      })
    }
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