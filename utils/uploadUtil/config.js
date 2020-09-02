var fileHost = "https://medicineonline.oss-cn-hangzhou.aliyuncs.com"
var config = {
  //aliyun OSS config 
  uploadImageUrl: `${fileHost}`, //默认存在根目录，可根据需求改 
  AccessKeySecret: '0bQvglfdDyBRVXdHgvI6SSagPk8Tqg',
  OSSAccessKeyId: 'LTAI4FszCrThmAkiv4fnownF',
  timeout:1 //这个是上传文件时Policy的失效时间 
};
module.exports = config