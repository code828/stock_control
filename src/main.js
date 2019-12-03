import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
import router from './router'
import Element from 'element-ui'


//import './api';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Element)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
