// pages/produce/produce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clientItems: [
      {
        id: 1,
        url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
        haveHis: true
      },
      {
        id: 2,
        url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
        haveHis: false
      },
      {
        id: 3,
        url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
        haveHis: false
      },
      {
        id: 4,
        url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
        haveHis: false
      }
    ],
    produceItems: [
      {
        id: 1,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '酸菜鱼',
        price: 88.8
      },
      {
        id: 2,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '水晶猪肘',
        price: 88.0
      },
      {
        id: 3,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '咸鸭',
        price: 98.0
      },
      {
        id: 4,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '红烧老鹅',
        price: 128.0
      },
      {
        id: 5,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '辣子鸡',
        price: 95.0
      },
      {
        id: 11,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '香辣烤鱼',
        price: 115.0
      },
      {
        id: 12,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '一网打尽',
        price: 150.0
      },
      {
        id: 13,
        url: 'http://img3.imgtn.bdimg.com/it/u=2710306391,904435642&fm=26&gp=0.jpg',
        name: '蒜蓉龙虾',
        price: 158.0
      }
    ],
    hideSearch: true, //控制搜索框显示和客户历史显示(互斥关系)
    canShow: false, //控制用户喜好弹框显示
    type: 1, //控制餐饮(0)，房产(1)，家居页面(2)显示
    checkboxItems: [
      {
        id: 0,
        url: 'http://fc1tn.baidu.com/it/u=2611045465,441782941&fm=202&src=765&crossm&mola=new&crop=v1',
        details: [
          {
            name: '朝向',
            info: '南'
          },
          {
            name: '建面',
            info: '75m'
          }
        ],
        goodinfo: '优势描述：1、入户玄关柜设计轻松收纳鞋帽包裹2、L型厨房房间'
      },
      {
        id: 1,
        url: 'http://fc1tn.baidu.com/it/u=2611045465,441782941&fm=202&src=765&crossm&mola=new&crop=v1',
        details: [
          {
            name: '朝向',
            info: '南'
          },
          {
            name: '建面',
            info: '75m'
          }
        ],
        goodinfo: '优势描述：1、入户玄关柜设计轻松收纳鞋帽包裹2、L型厨房房间'
      },
      {
        id: 2,
        url: 'http://fc1tn.baidu.com/it/u=2611045465,441782941&fm=202&src=765&crossm&mola=new&crop=v1',
        details: [
          {
            name: '朝向',
            info: '南'
          },
          {
            name: '建面',
            info: '75m'
          },
        ],
        goodinfo: '优势描述：1、入户玄关柜设计轻松收纳鞋帽包裹2、L型厨房房间'
      },
      {
        id: 3,
        url: 'http://fc1tn.baidu.com/it/u=2611045465,441782941&fm=202&src=765&crossm&mola=new&crop=v1',
        details: [
          {
            name: '朝向',
            info: '南'
          },
          {
            name: '建面',
            info: '75m'
          },
        ],
        goodinfo: '优势描述：1、入户玄关柜设计轻松收纳鞋帽包裹2、L型厨房房间'
      },
      {
        id: 4,
        url: 'http://fc1tn.baidu.com/it/u=2611045465,441782941&fm=202&src=765&crossm&mola=new&crop=v1',
        details: [
          {
            name: '朝向',
            info: '南'
          },
          {
            name: '建面',
            info: '75m'
          },
        ],
        goodinfo: '优势描述：1、入户玄关柜设计轻松收纳鞋帽包裹2、L型厨房房间2、L型厨房房间2、L型厨房房间2、L型厨房房间2、L型厨房房间2、L型厨房房间2、L型厨房房间'
      }
    ], //房产item列表
  },

  //房地产选择框点击事件
  checkboxChange(e) {
    // console.log(e)
    let checked = e.detail.value
    let checkboxItems = this.data.checkboxItems
    for(let i = 0; i < checkboxItems.length; i++) {
      let id = String(this.data.checkboxItems[i].id)
      if(checked.indexOf(id) !== -1) {
        checkboxItems[i].checked = true
        this.setData({
          checkboxItems: checkboxItems
        })
      }else {
        checkboxItems[i].checked = false
        this.setData({
          checkboxItems: checkboxItems
        })
      }
    }
  },

  //点击查看房产详情
  houseInfo(e) {
    wx.navigateTo({
      url: './ambitus/ambitus',
    })
  },

  //点击房贷参考
  reference(e) {
    wx.navigateTo({
      url: './reference/reference',
    })
  },

  //菜品详情点击事件
  detailClick(e) {
    let that = this
    let produceItems = this.data.produceItems
    let index = e.currentTarget.dataset.index
    let name = produceItems[index].name
    let content = '你赖东东不错嘛'
    if(this.data.hideSearch) {
      this.setData({
        hideSearch: false
      })
    }
    wx.showModal({
      title: name,
      content: content,
      showCancel: false,
      success(res) {
        if(res.confirm) {
          console.log('点击了确定')
          that.setData({
            hideSearch: true
          })
        }
      }
    })
  },

  //点击我吃过显示喜好弹窗
  history(e) {
    this.setData({
      canShow: true
    })
  },

  //点击空白处弹窗消失
  miss(e) {
    this.setData({
      canShow: false
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