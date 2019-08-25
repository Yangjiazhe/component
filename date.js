// 获取当前的日期时间如：2019-08-16 17:11:03
function getDateTime() {
  let d = new Date()
  let re1 = /^\d{4}-\d{1,2}-\d{1,2}/
  let re2 = /\d{1,2}:\d{1,2}:\d{1,2}/
  let date = d.toJSON().match(re1) + ' ' + d.toTimeString().match(re2)
  return date
}
// 返回 1970 年 1 月 1 日至今的--秒数。
function getTimeS() {
  let d = new Date().getTime()
  let date = parseInt((d / 1000).toString())
  return date
}
export default { getDateTime, getTimeS }
