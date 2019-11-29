import Vue from 'vue'
import App from './App.vue'
import router from './router'

//全局加载resource拦截器
import './axios/';
import Axios from 'axios';
Vue.prototype.$http = Axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
