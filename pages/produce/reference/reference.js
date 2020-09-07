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
    payOptions: [
      {
        id: 0,
        name: '等额本息',
        checked: true
      },
      {
        id: 1,
        name: '等额本金'
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
    moneyItems: [
      {
        option: 1
      },
      {
        option: 2
      },
      {
        option: 3
      }
    ],//贷款利率下拉选择我框
    hideSelect: true,//控制下拉框是否显示
    hideMSelect: true, //控制贷款利率下拉框是否显示
    ration: 1, //按揭成数
    rate: 1, //贷款利率
    price: '', //单价
    area: '', //面积
  },

  //输入单价
  priceInput(e) {
    let value = e.detail.value
    // console.log(e)
    this.setData({
      price: value
    })
  },

  //输入面积
  areaInput(e) {
    let value = e.detail.value
    this.setData({
      area: value
    })
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

  pradioChange(e) {
    console.log(e)
    let checked = e.detail.value
    let payOptions = this.data.payOptions
    for(let i = 0; i < payOptions.length; i++) {
      let id = String(this.data.payOptions[i].id)
      if(checked.indexOf(id) !== -1) {
        payOptions[i].checked = true
        this.setData({
          payOptions: payOptions
        })
      }else {
        payOptions[i].checked = false
        this.setData({
          payOptions: payOptions
        })
      }
    }
  },

  //显示或隐藏按揭成数选择框
  selectClick(e) {
    let hideSelect = this.data.hideSelect
    let hideMSelect = this.data.hideMSelect
    if(!hideMSelect) {
      this.setData({
        hideMSelect: !hideMSelect
      })
    }
    this.setData({
      hideSelect: !hideSelect
    })
  },

  //按揭成数下拉选择框选项点击事件
  selectbox(e) {
    let selectItems = this.data.selectItems
    let index = e.currentTarget.dataset.index
    this.setData({
      ration: selectItems[index].option,
      hideSelect: true
    })
  },
  //贷款利率下拉选择框选项点击事件
  moneySelect(e) {
    let moneyItems = this.data.moneyItems
    let index = e.currentTarget.dataset.index
    this.setData({
      rate: moneyItems[index].option,
      hideMSelect: true
    })
  },

  //显示或隐藏贷款利率下拉选择框
  moneyShow(e) {
    let hideMSelect = this.data.hideMSelect
    let hideSelect = this.data.hideSelect
    if(!hideSelect) {
      this.setData({
        hideSelect: !hideSelect
      })
    }
    this.setData({
      hideMSelect: !hideMSelect
    })
  },

  miss() {
    let hideSelect = this.data.hideSelect
    let hideMSelect = this.data.hideMSelect
    if(!hideSelect) {
      this.setData({
        hideSelect: !hideSelect
      })
    }else if (!hideMSelect) {
      this.setData({
        hideMSelect: !hideMSelect
      })
    }
  },

  //开始计算
  count(e) {

  },
  //重新填写
  reset(e) {
    let price = this.data.price
    let area = this.data.area
    this.setData({
      area: '',
      price: '',
      ration: 1,
      rate: 1
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})