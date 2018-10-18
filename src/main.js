import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store // 这里通过全局注入绑定到实例原型上 后面组件里就不需要再引入注册了

const app = new Vue(App)
app.$mount()
