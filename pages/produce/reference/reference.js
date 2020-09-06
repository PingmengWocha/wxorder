// pages/produce/reference/reference.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    optionItems: [
      {
        id: 0,
        name: '商业贷款',
        checked: true
      },
      {
        id: 1,
        name: '公积金贷款'
      },
      {
        id: 2,
        name: '组合型贷款'
      }
    ],
    selectItems: [
      {
        option: 1
      },
      {
        option: 2
      },
      {
        option: 3
      }
    ],
    hideSelect: true,//控制下拉框是否显示
    ration: 1, //按揭成数
  },

  radioChange(e) {
    // console.log(e)
    let checked = e.detail.value
    let optionItems = this.data.optionItems
    for(let i = 0; i < optionItems.length; i++) {
      let id = String(this.data.optionItems[i].id)
      if(checked.indexOf(id) !== -1) {
        optionItems[i].checked = true
        this.setData({
          optionItems: optionItems
        })
      }else {
        optionItems[i].checked = false
        this.setData({
          optionItems: optionItems
        })
      }
    }
  },

  selectClick(e) {
    let hideSelect = this.data.hideSelect
    this.setData({
      hideSelect: !hideSelect
    })
  },

  selectbox(e) {
    let selectItems = this.data.selectItems
    let index = e.currentTarget.dataset.index
    this.setData({
      ration: selectItems[index].option,
      hideSelect: true
    })
  },

  miss() {
    let hideSelect = this.data.hideSelect
    if(!hideSelect) {
      this.setData({
        hideSelect: !hideSelect
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