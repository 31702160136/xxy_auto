export function getTime(timestamp) {
  // 时间戳转换日期格式
  let date = new Date(parseInt(timestamp) * 1000) // 时间戳为10位需乘1000，为13位则不用

  let Y = date.getFullYear() // 年
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) // 月
  let D = date.getDate() < 10 ? '0' + date.getDate() + '' : date.getDate() + '' // 日

  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 时
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
  var atTime=new Date()
  var today=atTime.getFullYear()+atTime.getMonth()+atTime.getDate()
  var draw=date.getFullYear()+date.getMonth()+date.getDate()
  if(draw==today){
    return '今天' + ' ' + h + ':' + m + ':' + s
  }
  // else if(draw==(today+1)){
  //   return '明天' + ' ' + h + ':' + m + ':' + s
  // }else if(draw==(today+2)){
  //   return '后天' + ' ' + h + ':' + m + ':' + s
  // }
  return Y + '年' + M + '月' + D + '日' + ' ' + h + ':' + m + ':' + s
}
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getFullYear()+
      '年'+
      (d.getMonth()+1) +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
export function copy(obj) {
  var newobj = {};
  for (var attr in obj) {
    newobj[attr] = obj[attr];
  }
  return newobj;
}
