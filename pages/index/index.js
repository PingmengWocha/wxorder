
const apiUtil = require('../../utils/ApiUtil')
const api = require('../../constants/HttpConstants')
//获取应用实例
const app = getApp()

Page({
  data: {
    checkboxItems: [],
    hidden: false,
    canCheck: false, //当checkbox未显示时，点击item不进行记录
    pageNum: 0,
    pageSize: 1,
    isRequest: true, //是否可以加载跟多
    hasSelected: [],//已选择的内容
    hasLogin: false, //判断是否登录
  },

  //点击操作事件
  operate(e) {
  },

  checkboxChange(e) {
    if(!this.data.hasLogin) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      })
      wx.navigateTo({
        url: '../login/login',
      })
      return
    }
    let checked = e.detail.value
    console.log( e.detail.value)
    this.data.hasSelected = e.detail.value
    var changed = {}
    let checkboxItems = this.data.checkboxItems
    for(let i = 0; i < this.data.checkboxItems.length; i++) {
      let id = String(this.data.checkboxItems[i].id)
      if(checked.indexOf(id) !== -1) {
        // changed['checkboxItems[' + i + '].checked'] = true
        checkboxItems[i].checked = true
        this.setData({
          checkboxItems: checkboxItems
        })
      }else {
        // changed['checkboxItems[' + i + '].checked'] = false
        checkboxItems[i].checked = false
        this.setData({
          checkboxItems: checkboxItems
        })
      }
    }
    // console.log(this.data.checkboxItems)

  },

  //接待
  admit(e) {
    console.log(e.currentTarget.dataset.index)
    let id = (this.data.checkboxItems[e.currentTarget.dataset.index].id).toString()
    let hasSelected = this.data.hasSelected
    let checkboxItems = this.data.checkboxItems
    console.log(id)
    if(!this.data.hasLogin) {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 2000
      })
      wx.navigateTo({
        url: '../login/login',
      })
      return
    }
    if(hasSelected.indexOf(id) === -1) {
      wx.showToast({
        title: '请正确选择',
      })
      return
    }
    hasSelected = hasSelected.map(Number)
    let selectedContent = []
    let contentObj = {}
    for(let i = 0; i < hasSelected.length; i++) {
      for(let j = 0; j < checkboxItems.length; j++) {
        if(hasSelected[i] == checkboxItems[j].id) {
          contentObj = {
            id: checkboxItems[j].id,
            image: checkboxItems[j].faceImagename
          }
          selectedContent.push(contentObj)
          checkboxItems.splice(j,1)
        }
      }
    }
    // selectedContent = JSON.stringify(selectedContent)
    // console.log(selectedContent)
    let ids =  this.data.hasSelected.join(',')//数组转换成字符串
    let data = {
      ids: ids
    }
    // apiUtil.request(api.admit, data).then(res => {
    //   console.log(res)
    // })
    app.globalData.selectedContent = selectedContent
    wx.switchTab({
      url: '/pages/produce/produce'
    })
    this.setData({
      checkboxItems: checkboxItems
    })
  },

  //下拉刷新
  onPullDownRefresh: function() {
    let that = this
    this.data.pageNum == 0
    this.setData({
      isRequest: true
    })
    this.getClients()
  },

  //上拉加载
  onReachBottom: function() {
    if(this.data.isRequest) {
      this.getClients()
    }
  },
  
  onLoad: function () {
    this.getClients()
  },

  onShow: function () {
    let hasLogin = wx.getStorageSync('hasLogin')
    if(hasLogin == 1) {
      this.data.hasLogin = true
      app.globalData.hasLogin = true
      let type = wx.getStorageSync('type')
      app.globalData.type = type
    }else {
      this.data.hasLogin = false
      app.globalData.hasLogin = false
    }
  },

  getClients() {
    let that = this
    wx.showLoading({
      title: '加载中....',
      mask: true
    })
    let data = {
      pageNum: this.data.pageNum,
      pageSize: this.data.pageSize
    }
    apiUtil.request(api.indexItem, data).then(res => {
      
      if(res.code == 200) {
        console.log(res)
        if(that.data.pageNum == 0) {
          that.setData({
            checkboxItems: []
          })
        }
        that.data.pageNum = that.data.pageNum + 1
        var rows = res.rows
        for(let i = 0; i < rows.length; i++) {
          rows[i].faceImagename = api.imageRootUrl + rows[i].faceImagename
        }
        that.setData({
          checkboxItems: that.data.checkboxItems.concat(rows)
        })
        if(that.data.checkboxItems.length >= res.total) {
          that.setData({
            isRequest: false
          })
        }else {
          that.setData({
            isRequest: true
          })
        }
        wx.hideLoading();
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }else {
        wx.hideLoading()
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
        wx.showToast({
          title: res.msg,
        })
      }
    })
  },
})
