import Fly from 'flyio/dist/npm/wx'
import store from '../store/index'
import {
  baseUrl
} from '../config/env'
const http = new Fly()

// 配置请求基地址
// //定义公共headers
http.config.headers = {
  // 'token': new Date().getTime()
}
// //设置超时
http.config.timeout = 10000
// //设置请求基地址
http.config.baseURL = baseUrl

http.interceptors.request.use((request) => {
  request.headers['content-type'] = 'application/x-www-form-urlencoded'
  request.headers['token'] = store.state.loginMiniData.token || wx.getStorageSync('TOKEN')
  // wx.showNavigationBarLoading()
  // console.log('http请求参数======>>', request.body)
  wx.showLoading({
    title: '加载中...'
  })
  return request
})

http.interceptors.response.use(
  (response, promise) => {
    // wx.hideNavigationBarLoading()
    wx.hideLoading()
    let {status, data, msg} = response.data
    console.log('http===============>>', response.data)
    if (status === 200) {
      return promise.resolve(data)
    } else {
      switch (status) {
        case 601:
          msg = '登录过期'
          break
      }
      wx.showToast({
        title: msg || '网络繁忙，稍候再试',
        icon: 'none',
        success: res => {
          if (status === 601) {
            setTimeout(() => {
              // wx.navigateTo({url: '../login/main'})
            }, 500)
          }
        }
      })
      return promise.resolve(response.data)
    }
  },
  (err, promise) => {
    wx.hideLoading()
    console.log('http=====>>err:', err)
    let {status, response, message} = err
    if (status === 1) {
      wx.showToast({
        title: '请求超时',
        icon: 'none'
      })
      return false
    }
    wx.hideNavigationBarLoading()
    switch (response.status) {
      case 400:
        message = '错误请求'
        break
      case 401:
        message = '未授权，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求错误,未找到该资源'
        break
      case 405:
        message = '请求方法未允许'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器端出错'
        break
      case 501:
        message = '网络未实现'
        break
      case 502:
        message = '网络错误'
        break
      case 503:
        message = '服务不可用'
        break
      case 504:
        message = '网络超时'
        break
      case 505:
        message = 'http版本不支持该请求'
        break
      default:
        message = `连接错误${status}`
    }
    wx.showToast({
      title: message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default http
