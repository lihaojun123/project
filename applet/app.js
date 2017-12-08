//app.js

//import modeecb from './utils/mode-ecb.js'
import Api from './utils/test.js'
import Translate from './utils/config.js'
//console.log(Eng());
App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  },
  trans(){
    let lag='';
    wx.getSystemInfo({
      success: function (res) {
        lag=res.language;
      },
      fail:(err)=>{
           console.log(err);
      }
    })
    return Translate(lag);
  }
})