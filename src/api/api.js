import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


let host = 'http://127.0.0.1:8000';


//获取库存信息
export const queryStocks = params => { return axios.get(`${host}/backend/stocks/`, { params: params })}
