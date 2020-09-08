//app.js
App({
  onLaunch: function () {
    let that = this;
    wx.getSystemInfo({
      success: function(res) {
        let modelmes = res.model;
        if(modelmes.search('iPhone X') != -1){
          that.globalData.isIphoneX = true
        }
        else if (modelmes.search('unknown') != -1){
          that.globalData.isIphoneX = true
        }
      },
    })
  },
  globalData: {
    isIphoneX: false,
    hasLogin: false, //是否登录
    type: 0, //0餐厅1房产2家居
    selectedContent: [], //首页选中的用户
  }
})