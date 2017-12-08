  let translate = function (lag) {
  let language = {}
  if (lag == 'zh_EN') {
    language = {
      loginWechat: 'Login via Wechat',
      inputPhone:  'input phone No.',
      getCode:'Get code',
      logIn:'Log in',
      purchaser:'Purchaser',
      supplier:'Supplier',
      all:'all',
      print:'Print'
    }               
  } else {
    language = {
      loginWechat: '微信一键登录',
      inputPhone:'请输入手机号',
      getCode:'获取验证码',
      logIn:'登录',
      purchaser:'我是采购商',
      supplier:'我是供应商',
      all:'全选',
      print:'打印'
    }
  }
  return language
}
export default translate