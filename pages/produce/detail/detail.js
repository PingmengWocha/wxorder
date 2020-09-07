// pages/produce/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailItem: {
        detail:[
          {
            title: '品牌',
            content: '慕思.歌蒂娅'
          },
          {
            title: '床垫厚度',
            content: '280mm'
          },
          {
            title: '床垫规模',
            content: '180*200*28cm'
          },
          {
            title: '软硬度',
            content: '偏硬'
          },
          {
            title: '床垫材质',
            content: '2cm乳胶 簧上簧独立筒设计'
          },
          {
            title: '床垫面料',
            content: '天丝针织面料'
          },
        ],
        url: 'http://img2.imgtn.bdimg.com/it/u=2849478517,2836099775&fm=26&gp=0.jpg'
    },
    ImageHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          ImageHeight: res.windowWidth * 0.6
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