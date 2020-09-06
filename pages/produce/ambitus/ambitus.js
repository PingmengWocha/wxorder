// pages/produce/ambitus/ambitus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoItems: [
      {
        tip: '周边介绍',
        imgItem: [
          {
            url: 'http://img4.imgtn.bdimg.com/it/u=144597532,3071909316&fm=26&gp=0.jpg'
          },
          {
            url: 'http://img3.imgtn.bdimg.com/it/u=3629273007,2415813808&fm=26&gp=0.jpg'
          }
        ]
      },
      {
        tip: '样板间',
        imgItem: [
          {
            url: 'http://img5.imgtn.bdimg.com/it/u=3277897572,176104445&fm=26&gp=0.jpg'
          }
        ]
      }
    ],
    imageHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          imageHeight: res.windowWidth * 0.6
        })
      },
    })
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