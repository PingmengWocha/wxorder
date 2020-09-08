//正式服务器
// const apiRootUrl = "https://jszyy.pspress.cn/medicine-api/";
// const userinfo = "api";
// const examineUrl = "https://jszyy.pspress.cn/medicine-quiz/#/bank" //正式服

const apiRootUrl = "http://yeweimf.vicp.net/"
const imageRootUrl = "http://yeweimf.vicp.net/uploadpath/"


//测试服  
// const apiRootUrl = "https://testMedicineOnline.ureading.com/medicine-api/";
// const userinfo = "test";
// const examineUrl = "https://testMedicineOnline.ureading.com/medicine-quiz/#/bank" //测试服

module.exports = {
  // test: apiRootUrl + 'user/test',
  imageRootUrl,
  login: apiRootUrl + 'face/clerkLogin',

  indexItem: apiRootUrl + 'face/realTime',

  admit: apiRootUrl + 'face/reception'

}