const md5 = require('md5.js')
const apiVersion = "1.0.0"; //API版本号
const clientVer = "1.0.0"; //客户端版本号 
const key = "e8742291-7357-0a3f-93e1-22a482c7e52b"; //生成签名key
const api = require('../constants/HttpConstants.js');

/**
 * 封装请求request
 */

 function request(url,data = {}, method = "POST") {
   return new Promise(function(resolve,reject) {
     var userInfo = wx.getStorageSync('userInfo');
     //获取当前时间戳
     var timestamp = Date.parse(new Date())
     timestamp = timestamp / 100;
     var userInfo = wx.getStorageSync('userInfo')
     var userId = wx.getStorageSync('userId')
     var userToken = wx.getStorageSync('userToken')
     var openId = wx.getStorageSync('openId')
     var temp;
     if(userInfo == "") {
      //  console.log("userInfo是空")
       temp = {
        "timestamp": timestamp,
        "openId": openId,
        "userId": ((userId == "") ? 0 : userId),
        "userToken": userToken,
        "body": {}
       }
     }else {
       //console.log("userinfo不是空")
       temp = {
        "timestamp": timestamp,
        "openId": openId,
        "userId": userId,
        "userToken": userToken,
        "body": {}
      }
      temp["body"] = data;
      var jsonstr = JSON.stringify(temp)
      wx.request({
        url: url,
        data: {
          params: jsonstr
        },
        method: method,
        header: {
          'Authorization': 'userToken',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        success: function(res) {
          console.log('请求地址:' + url)
          console.log('请求参数:')
          console.log(temp)
          console.log('返回数据:')
          console.log(res.data)
          if(res.statusCode == 200) {
            if(res.data.code == 0) {
              resolve(res.data)
            }else if(res.data.code == 200001) {
              //用户token过期
              wx.hideLoading()
              wx.showToast({
                title: res.data.msg,
              })
              //跳转授权页面
            }else {
              wx.hideLoading()
              wx.showModal({
                title: '提示',
                content: res.data.msg,
                showCancel: false,
                success: function(res) {}
              })
              reject(res.data.code)
            }
          }else {
            wx.hideLoading()
            wx.showModal({
              title: '提示',
              content: '网络异常',
              showCancel: false,
              success: function(res) {}
            })
          }
        },
        fail: function(err) {
          console.log('请求地址:' + url)
          console.log('请求参数:')
          console.log(temp)
          console.log('错误信息' + err)
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: '网络请求超时!',
            showCancel: false,
            success: function(res) {}
          })
          console.log("err",err)
          reject(err)
        }
      })
     }
   })
 }

 function randomWord(randomWord,min,max) {
   let str = "",
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    var pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
 }

 /**
 * 封装提交FormId的方法
 * 静默接口，不管返回值
 */
function postFormId(data = {}, method = "POST") {
  params(data).then(function(res) {
    var params_data = res;
    // console.log("params=======>", params_data);
    wx.request({
      url: api.addFormId,
      // data: params_data,
      data: {
        params: params_data
      },
      method: method,
      header: {
        //'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Encrypt-Sign": JSON.parse(params_data).sign,
      },
      success: function(res) {

      }
    })
  });
}

/**
 * 封装uploadFile请求
 */
function uploadFile(url, data = {}, filePath, name = 'file') {
  return new Promise(function(resolve,reject) {
    params(data).then(function(res) {
      var params_data = res
      // console.log("params=======>", params_data);
      wx.uploadFile({
        url: url,
        filePath: filePath,
        name: name,
        //data: params_data,
        formData: {
          params: params_data
        },
        header: {
          //'Content-Type': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          "Encrypt-Sign": JSON.parse(params_data).sign,
        },
        success: function(res) {
          var data = JSON.parse(res.data)
          console.log('res', data)
          resolve(data)
        },
        fail: function(err) {
          console.log(err)
          wx.hideLoading()
          wx.showModal({
            title: '提示',
            content: '网络异常',
            showCancel: false,
            success: function(res) {}
          })
          console.log('err',err)
          reject({
            data: {
              msg: '网络异常'
            }
          })
        }
      })
    })
  })
}

module.exports = {
  request,

  key,

  uploadFile,
  postFormId,
  randomWord
}