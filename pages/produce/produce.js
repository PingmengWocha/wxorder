// pages/produce/produce.js
const apiUtil = require('../../utils/ApiUtil')
const api = require('../../constants/HttpConstants')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // clientItems: [
    //   {
    //     id: 1,
    //     url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
    //     haveHis: true
    //   },
    //   {
    //     id: 2,
    //     url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
    //     haveHis: false
    //   },
    //   {
    //     id: 3,
    //     url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
    //     haveHis: false
    //   },
    //   {
    //     id: 4,
    //     url: 'http://img2.imgtn.bdimg.com/it/u=1424373188,297799872&fm=26&gp=0.jpg',
    //     haveHis: false
    //   }
    // ],
    busCarNum: 0, //已选择的菜品数量
    addedOrder: [], //已选择的菜品列表
    clientItems: [],
    synopsis: '',//菜品简介
    foodName: '',//菜品名称
    main: '',//主料
    material: '',//辅料
    taste: '', //口味
    foodDialogShow: false, //控制菜品详情弹框是否显示
    personnum: '', //菜品招待人数
    tablenum: '', //菜品招待桌号
    produceItems: [
      {
        id: 1,
        url: '../../images/order/tcpg.jpg',
        name: '糖醋排骨',
        price: 88.8,
        synopsis: '酸甜适中，不油不腻，口感丰富细腻，不会觉得任何一种调料的突兀。颜色呈糖稀色，不浓不淡。就是拿汁水拌米饭也是一样好吃',
        main: '小排 500g',
        material: '料酒、生抽、老抽、香醋、糖、盐、味精、芝麻',
        taste: '酸甜',
        num: 1
      },
      {
        id: 2,
        url: '../../images/order/scy.jpg',
        name: '酸菜鱼',
        price: 88.0,
        synopsis: '酸辣爽口，鱼片滑嫩',
        main: '黑鱼、酸菜',
        material: '白胡椒、蛋清、辣椒、花椒、葱、干淀粉、食用油、盐',
        taste: '辣',
        num: 1
      },
      {
        id: 3,
        url: '../../images/order/sltds.jpg',
        name: '酸辣土豆丝',
        price: 98.0,
        synopsis: '简单的材料和调味料烧的一个菜，味道却很好',
        main: '土豆、青椒、朝天椒',
        material: '盐、油、醋',
        taste: '微辣',
        num: 1
      },
      {
        id: 4,
        url: '../../images/order/sznr.jpg',
        name: '水煮牛肉',
        price: 128.0,
        synopsis: '红绿相映，香味浓郁，麻辣回香，风味独特',
        main: '牛里脊肉、豆苗、芹菜、大白菜',
        material: '植物油、郫县豆瓣酱、干辣椒末、花椒粉、蒜、姜、酱油、料酒、胡椒粉、鸡精、水淀粉、高汤、盐',
        taste: '麻辣',
        num: 1
      },
      {
        id: 5,
        url: '../../images/order/gbjd.jpg',
        name: '宫保鸡丁',
        price: 95.0,
        synopsis: '酸辣口，鸡肉滑嫩，花生米爽脆，大葱也好吃。是一道超级下饭菜',
        main: '鸡胸肉、大葱、油炸花生米、辣椒段',
        material: '盐、生抽、老抽、香醋、糖、姜汁、蒜泥、鸡精、水淀粉、花椒粉、白胡椒、料酒',
        taste: '酸辣',
        num: 1
      }
    ],
    houseHis: [
      {
        tip: '来楼盘次数',
        res: 3
      },
      {
        tip: '上次看房',
        res: '2020-08-09 12:20:09'
      },
      {
        tip: '上次接待',
        res: '小张'
      },
      {
        tip: '关注点',
        res: '学区房，购物遍历，交通方便'
      }
    ],//房产历史
    homeHis: [
      {
        tip: '来门店次数',
        res: 3
      },
      {
        tip: '上次到店',
        res: '2020-08-09 12:20:09'
      },
      {
        tip: '上次接待',
        res: '小张'
      },
      {
        tip: '关注点',
        res: '床垫软硬适中'
      }
    ],//家居历史
    homeItems: [
      {
        id: 0,
        url: 'http://img2.imgtn.bdimg.com/it/u=660880553,2923388103&fm=26&gp=0.jpg'
      },
      {
        id: 1,
        url: 'http://img5.imgtn.bdimg.com/it/u=3141091343,828620550&fm=26&gp=0.jpg'
      },
      {
        id: 2,
        url: 'http://img0.imgtn.bdimg.com/it/u=3315125281,3900744129&fm=26&gp=0.jpg'
      },
      {
        id: 3,
        url: 'http://img5.imgtn.bdimg.com/it/u=2515270731,1051295312&fm=26&gp=0.jpg'
      }
    ],//家居图片
    hideSearch: true, //控制搜索框显示和客户历史显示(互斥关系)
    canShow: false, //控制用户喜好弹框显示
    type: 5, //控制餐饮(0)，房产(1)，家居页面(2),未登录(3)没有内容(4)空白内容(5)显示
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
    ImageHeight: 0, //家居图片高度
    windowWidth: 0, //手机宽度
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

  // 跳转登录页面
  goLogin(e) {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  //家居详情
  hdetailClick(e) {
    wx.navigateTo({
      url: './detail/detail',
    })
  },

  //户型对比
  contrast(e) {
    wx.navigateTo({
      url: './contrast/contrast',
    })
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

  //人数输入
  clientTf(e) {
    console.log(e.detail.value)
    this.setData({
      personnum: e.detail.value
    })
    app.globalData.personNum = this.data.personnum
  },

  //桌号输入
  orderTf(e) {
    this.setData({
      tablenum: e.detail.value
    })
    app.globalData.tableNum = this.data.tablenum
  },

  //添加菜品
  addOrder(e) {
    if(app.globalData.selectedContent.length <= 0) {
      wx.showToast({
        title: '请先接待顾客',
        duration: 2000,
        icon: 'none'
      })
      return
    }
    let index = e.currentTarget.dataset.index
    let produceItems = this.data.produceItems
    let id = produceItems[index].id
    let num = this.data.busCarNum
    for(let i = 0; i < this.data.addedOrder.length; i++) {
      if(this.data.addedOrder[i].id == id) {
        this.data.addedOrder[i].num++
        console.log(this.data.addedOrder)
        num = this.data.busCarNum + 1
        this.setData({
          busCarNum: num
        })
        app.globalData.busCarNum = num
        return
      }
    }
    this.data.addedOrder.push(this.data.produceItems[index])
    console.log(this.data.addedOrder)
    num = this.data.busCarNum + 1
    this.setData({
      busCarNum: num
    })
    app.globalData.busCarNum = num
  },

  //结算跳转到购物车页面
  balance() {
    let busCarNum = this.data.busCarNum
    let addedOrder = this.data.addedOrder
    if(busCarNum == 0) {
      wx.showToast({
        title: '请添加菜品',
        duration: 2000,
        icon: 'none'
      })
      return
    }
    if(this.data.personnum == '' || this.data.personnum.length == 0) {
      wx.showToast({
        title: '请输入人数',
        duration: 2000,
        icon: 'none'
      })
      return
    }
    if(this.data.tablenum == '' || this.data.tablenum.length == 0) {
      wx.showToast({
        title: '请输入桌号',
        duration: 2000,
        icon: 'none'
      })
      return
    }

    app.globalData.selectedFood = addedOrder
    app.globalData.personNum = parseInt(this.data.personnum)
    app.globalData.tableNum = parseInt(this.data.tablenum)
    
    console.log(app.globalData.personNum)
    console.log(app.globalData.tableNum)
    console.log(app.globalData.selectedFood)

    wx.switchTab({
      url: '../buycar/buycar',
    })
  },

  //菜品详情点击退出
  backfood() {
    this.setData({
      foodDialogShow: false,
      foodName: '',
      synopsis: '',
      main: '',
      material: '',
      taste: '',
      hideSearch: true
    })
  },

  //菜品详情点击事件
  detailClick(e) {
    let that = this
    let produceItems = this.data.produceItems
    let index = e.currentTarget.dataset.index
    this.setData({
      foodName: produceItems[index].name,
      synopsis: produceItems[index].synopsis,
      main: produceItems[index].main,
      material: produceItems[index].material,
      taste: produceItems[index].taste,
      foodDialogShow: true,
    })
    if(this.data.hideSearch) {
      this.setData({
        hideSearch: false
      })
    }
    // wx.showModal({
    //   title: name,
    //   content: content,
    //   showCancel: false,
    //   success(res) {
    //     if(res.confirm) {
    //       console.log('点击了确定')
    //       that.setData({
    //         hideSearch: true
    //       })
    //     }
    //   }
    // })
  },

  //房产点击我看过
  hisClick(e) {
    this.setData({
      canShow: true
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
    let that = this
    this.data.addedOrder = app.globalData.selectedFood
    let seletedContent = app.globalData.selectedContent
    console.log(seletedContent)
    // if(seletedContent != null && seletedContent.length > 0) {
    //   this.setData({
    //     clientItems: seletedContent
    //   })
    // }
    this.setData({
      clientItems: seletedContent
    })
    if(this.data.clientItems.length > 0) {
      app.globalData.personNum = this.data.clientItems.length
      this.setData({
        personnum: this.data.clientItems.length
      })

    }
    let hasLogin = app.globalData.hasLogin
    if(!hasLogin) {
      this.setData({
        type: 3
      })
    }else {
      console.log(app.globalData.personNum)
      console.log(app.globalData.tableNum)
      console.log(app.globalData.busCarNum)
      let type = app.globalData.type
      let personNum = app.globalData.personNum
      let tableNum = app.globalData.tableNum
      this.setData({
        type: type,
        personnum: personNum,
        tablenum: tableNum,
        busCarNum: app.globalData.busCarNum
      })
    }
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