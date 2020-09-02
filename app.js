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
    isIphoneX: false
  }
})