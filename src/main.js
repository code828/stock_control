import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import router from './router'
import Element from 'element-ui'
//import './styles/element-variables.scss'

//全局加载resource拦截器
import './axios/';
import Axios from 'axios';
Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
