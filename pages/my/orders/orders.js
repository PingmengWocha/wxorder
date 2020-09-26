// pages/my/orders/orders.js
const apiUtil = require('../../../utils/ApiUtil')
const api = require('../../../constants/HttpConstants')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // orderItems: [
    //   {
    //     id: 4,
    //         addTime: "2020-09-24 05:13:04",
    //         orderTime: "2020-09-24 05:13:04",
    //         tableNumber: 1,
    //         dinersNumber: 4,
    //         orderStatus: 1,
    //         orderNo: "1600895584600",
    //         orderDesc: "不要辣",
    //         orderUser: "test3",
    //         orderUserId: 3,
    //         orderUserWX: "text3333",
    //         orderInfoList: [
    //             {
    //                 infoId: 6,
    //                 addTime: null,
    //                 orderMainId: 0,
    //                 menuName: "土豆",
    //                 menuId: 0,
    //                 menuPrice: 15.00,
    //                 menuNumber: 1
    //             },
    //             {
    //                 infoId: 7,
    //                 addTime: null,
    //                 orderMainId: 0,
    //                 menuName: "西红柿",
    //                 menuId: 0,
    //                 menuPrice: 8.00,
    //                 menuNumber: 1
    //             }
    //         ]
    //   },
    //   {
    //     id: 5,
    //         addTime: "2020-09-24 05:13:04",
    //         orderTime: "2020-09-24 05:13:04",
    //         tableNumber: 1,
    //         dinersNumber: 4,
    //         orderStatus: 1,
    //         orderNo: "1600946244917",
    //         orderDesc: "不怕辣",
    //         orderUser: "test3",
    //         orderUserId: 3,
    //         orderUserWX: "text3333",
    //         orderInfoList: [
    //             {
    //                 infoId: 8,
    //                 addTime: null,
    //                 orderMainId: 0,
    //                 menuName: "牛肉火锅",
    //                 menuId: 0,
    //                 menuPrice: 15.00,
    //                 menuNumber: 1
    //             },
    //             {
    //                 infoId: 9,
    //                 addTime: null,
    //                 orderMainId: 0,
    //                 menuName: "番茄鱼",
    //                 menuId: 0,
    //                 menuPrice: 8.00,
    //                 menuNumber: 1
    //             }
    //         ]
    //   }
    // ],
    orderItems: [],
    pageNum: 0,
    pageSize: 1,
    isRequest: true, //是否可以加载跟多
  },

  //点击跳转到订单详情页面
  detail(e) {
    let detailOrder = JSON.stringify(e.currentTarget.dataset.item)
    console.log(detailOrder)

    wx.navigateTo({
      url: '../orderdetail/orderdetail?detailOrder=' + detailOrder,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderItem()
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
    let that = this
    this.data.pageNum = 0
    this.setData({
      isRequest: true
    })
    this.getOrderItem()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.isRequest) {
      this.getOrderItem()
    }
  },

  getOrderItem() {
    let that = this
    wx.showLoading({
      title: '加载中....',
      mask: true
    })
    let data = {
      userId: 3
    }
    apiUtil.request(api.myOrders,data).then(res => {
      if(res.code == 200) {
        console.log(res.rows)
        if(that.data.pageNum == 0) {
          that.setData({
            orderItems: []
          })
          console.log(that.data.orderItems)
        }
        that.data.pageNum = that.data.pageNum + 1
        that.setData({
          orderItems: that.data.orderItems.concat(res.rows)
        })
        if(that.data.orderItems.length >= res.total) {
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
        wx.hideLoading();
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
        wx.showToast({
          title: res.msg,
        })
      }
    })
  },
})