import Vue from 'vue'
import Vuex from 'vuex'
import { loginMini } from '../config/api'
Vue.use(Vuex)

const state = {
  name: 'ronin',
  userInfo: {},
  loginMiniData: {} // 登录接口返回的数据

}
const mutations = {
  LOGINMINIDATA (state, data) {
    state.loginMiniData = data
  },
  USERINFO (state, data) {
    state.userInfo = data
  }
}
const actions = {
  async loginMini ({commit}, params) {
    const data = await loginMini(params)
    console.log('login-接口===========>>', data)
    commit('LOGINMINIDATA', data || {})
    wx.setStorageSync('TOKEN', data && data.token)
    return data
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
