import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


let host = 'http://127.0.0.1:8000';


//获取库存信息
export const queryStocks = params => { return axios.get(`${host}/backend/stocks/`, { params: params })}

//获取放置地址
export const queryAddress = () => { return axios.get(`${host}/backend/address/`)}

//更新库存
export const updateStocks = (stockId, params) => { return axios.patch(`${host}/backend/stocks/`+stockId+'/', params) }

//调拨记录
export const queryRecord = params => { return axios.get(`${host}/backend/record/`, { params: params })}

//新增库存
export const addStocks = params => { return axios.post(`${host}/backend/stocks/`, params)}