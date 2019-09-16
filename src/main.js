import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// 全局引入store，这样所有子组件可以访问store
import store from './store/store'
// 字体图片库
import "font-awesome/css/font-awesome.css"

Vue.config.productionTip = false

// 全局加载http拦截器
import './axios/axios'
import Axios from 'axios'
Vue.prototype.$http = Axios

// 全局css文件
import '@/styles/main.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
