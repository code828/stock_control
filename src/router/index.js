import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Login from '../views/Login.vue'
import Stock from '../views/Stock.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import { homedir } from 'os';
//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    //component: Login
    redirect: '/stock'
  },
  {
    path: '/stock',
    component: Stock,
    children: [
      {path: '',component: Home,meta: ['查询调拨']},
      {path: '/add',component: () => import('../views/Addgoods.vue'),meta: ['入库']},
      {path: '/allot',component: () => import('../views/Allot.vue'),meta: ['出库']}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
