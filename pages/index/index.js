//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    checkboxItems: [
      {id: 0,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 1,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 2,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 3,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 4,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 5,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 6,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 7,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 8,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
      {id: 9,url: 'http://img0.imgtn.bdimg.com/it/u=2766255690,1088478936&fm=26&gp=0.jpg',data: '2020-08-25 09:09:09',star: '5'},
    ],
    hidden: false,
    canCheck: false, //当checkbox未显示时，点击item不进行记录
  },

  //点击操作事件
  operate(e) {
  },

  checkboxChange(e) {
    let checked = e.detail.value
    console.log( e.detail.value)
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
    wx.switchTab({
      url: '/pages/produce/produce',
    })
  },

  
  onLoad: function () {
    
  },
})
