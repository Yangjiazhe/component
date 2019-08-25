function isMobileNumber(phone) {
  let flag = false
  let message = ''
  let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/
  if (phone === '') {
    message = '手机号码不能为空！'
  } else if (phone.length !== 11) {
    message = '请输入11位手机号码！'
  } else if (!myreg.test(phone)) {
    message = '请输入有效的手机号码！'
  } else {
    flag = true
  }
  if (message !== '') {
    alert(message)
  }
  return flag
}
function isPassword(password) {
  // let pattern = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{1,}).*$/ // 密码必须有数字和大写字母，长度大于6！
  let pattern = /^.{6,}$/
  if (pattern.test(password)) return true
  alert('密码必须长度大于6！')
  return false
}
function isSms(sms) {
  let pattern = /^\d{6}$/
  if (!pattern.test(sms)) {
    alert('验证码必须是6位数字！')
    return false
  }
  return true
}
function isNumberP(num) {
  let pattern = /^[1-9]\d*(\.\d+)?$/
  if (!pattern.test(num)) {
    alert('请输入大于0的数字！')
    return false
  }
  return true
}
export default { isMobileNumber, isPassword, isSms, isNumberP }
