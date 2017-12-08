/**
 * apiName为小程序api接口名，@objData为小程序api接口的入口参数***
 */
export default function wxApi(apiName, objData) {
  var data = {};
  wx.getSystemInfo({
    success: function (res) {
      return new Promise(function (resolve, reject) {
        if (res.SDKVersion > '2.1.0') {
          Object.assign(data, objData);
          data.success = suc => resolve(suc);
          data.fail = error => reject(error);
          data.complete = {
            //不做处理
          }
          try {
            apiName(data);
          } catch (e) {
            console.log('非法接口');
          }
        } else {
          wx.showModal({
            title: '提示',
            content: '微信版本过低！',
            success: function (res) {
            }
          })
        }

      })

    }
  })
}
