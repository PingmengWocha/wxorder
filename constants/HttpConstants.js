//正式服务器
// const apiRootUrl = "https://jszyy.pspress.cn/medicine-api/";
// const userinfo = "api";
// const examineUrl = "https://jszyy.pspress.cn/medicine-quiz/#/bank" //正式服

const apiRootUrl = "http://yeweimf.vicp.net/"
const imageRootUrl = "http://yeweimf.vicp.net/headimg/"


//测试服  
// const apiRootUrl = "https://testMedicineOnline.ureading.com/medicine-api/";
// const userinfo = "test";
// const examineUrl = "https://testMedicineOnline.ureading.com/medicine-quiz/#/bank" //测试服

module.exports = {
  // test: apiRootUrl + 'user/test',
  imageRootUrl,
  login: apiRootUrl + 'face/clerkLogin', //登录

  indexItem: apiRootUrl + 'face/realTime', //首页

  admit: apiRootUrl + 'face/reception', //接待

  pushOrder: apiRootUrl + 'face/order', //下单

  myOrders: apiRootUrl + 'face/getMyOrder' //我的订单

}