// pages/my/myclient/myclient.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 0, //状态类高度
    topbarItems: [
      {
        name: '头像'
      },
      {
        name: '口味'
      },
      {
        name: '上次进店'
      },
      {
        name: '喜好'
      }
    ],
    clientItems: [
      {
        id: 1,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 2,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 3,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 4,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 5,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 6,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 7,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 8,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 9,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '鲈鱼'
          },
          {
            name: '辣子鸡'
          },
          {
            name: '毛血旺'
          }
        ]
      },
      {
        id: 17,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          }
        ]
      },
      {
        id: 18,
        url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',
        dishes: '偏辣',
        time: '20200822',
        like: [
          {
            name: '酸菜鱼'
          },
          {
            name: '豆腐'
          }
        ]
      }
    ],

    itemHeight: 0,
    windowHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getSystemInfo({
      success: res => {
        that.setData({
          statusBarHeight: res.statusBarHeight,
          windowHeight: res.windowHeight
        })
      },
    })

    var query = wx.createSelectorQuery();
    query.select('#bar').boundingClientRect()
    query.exec(res => {
      that.setData({
        itemHeight: that.data.windowHeight - res[0].height
      })
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