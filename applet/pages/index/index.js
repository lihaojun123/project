//index.js
//获取应用实例
const app = getApp();
const trans = app.trans();
Page({
  data: {
    trans:{
      name: trans.name
    },
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // const arrayBuffer = new Uint8Array(['1','2']);
    // const base64 = wx.arrayBufferToBase64(arrayBuffer);
    // console.log(base64);
    // const base64 = 'CxYh'
    // const arrayBuffer = wx.base64ToArrayBuffer(base64);
    // console.log(arrayBuffer);

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

    // this.ajax('dsff','sfdsfads').then(res=>{
    //      console.log(res);
    // }).catch(error=>{
    //      console.log(error);
    // })
      // let promise=new Promise((resolve,reject)=>{
      //   wx.chooseImage({
      //     count: 1, // 默认9
      //     sizeType: ['original', 'compressed'],
      //     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者
      //     success:res=>resolve(res),
      //     fail:error=>reject(error)
      //   })
      // })
        
      // promise.then(res=>{
      //     console.log(res);
      //     return 2;
      // }).then(res=>{
      //      console.log(res);
      // })
     /*****Set数据结构****** */
    // const arr = new Set([2, 3, 4, 5, 6]);
    //       arr.add(7);//添加操作
    //       console.log(arr.has(6));
    //       arr.delete(4);
    //       //console.log(arr.keys()); 
    //       for(let item of arr.keys()){
    //            console.log(item);
    //       }

    /******map数据结构****** */
      //const mapObj=new Map();
           // mapObj.set('k1','v1');
            //console.log(mapObj.get('k1'));
    //let s = Symbol();

    //typeof s
// "symbol"
    // let v1={
    //     'obj':'2',
    //     'obj1':3
    // }
    // let v2={
    //   'obj':'2',
    //   'obj1': 3
    // }
    //  console.log(Object.is(v1,v2)); 
        //console.log(...[1,2,3]); 
  // let  _getSystemInfo=app.wxPromisify(wx.getSystemInfo);
  // _getSystemInfo({ type: 'wgs84'}).then(res=>console.log(res));   
  },

  ajax(url, requestData){
      return new Promise((resolve,reject)=>{
        wx.request({
          url:url ||'',
          data:requestData,
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
              resolve(res);
          },
          fail(error){
              resolve(error); 
          }
        }) 
      })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
