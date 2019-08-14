import * as types from "./mutations-types"
import cookie from "../assets/js/cookie"
import {getBuildings, getFloors, getDorms} from '@/api/api'
import Vue from "vue"
import Axios from "axios"
// 全局默认使用axios
Vue.prototype.$http = Axios

export default {
    [types.SET_USERINFO](state){
        state.userInfo = {
            name: cookie.getCookie("name"),
            token: cookie.getCookie("token"),
        }
    },

    [types.SET_BUILDINGS_INFO](state){
        getBuildings()
        .then(
            (response) => {
                // 更新store数据
                state.buildingsInfo.buildings = response.data
                // 统计数据
                let online_num = 0
                let total_num = 0
                response.data.forEach(element => {
                    online_num += element.online_num
                    total_num += element.total_num
                });
                state.buildingsInfo.online_num = online_num
                state.buildingsInfo.total_num = total_num
            }
        )
    },

    [types.SET_FLOORS_INFO](state, payload){
        getFloors(payload.building_id)
        .then(
            (response) => {
                // 更新store数据
                state.floorsInfo.floors = response.data
                // 统计数据
                let online_num = 0
                let total_num = 0
                response.data.forEach(element => {
                    online_num += element.online_num
                    total_num += element.total_num
                });
                state.floorsInfo.online_num = online_num
                state.floorsInfo.total_num = total_num
            }
        )
    },

    [types.SET_DORMS_INFO](state, payload){
        getDorms(payload.building_id, payload.floor)
        .then(
            (response) => {
                // 更新store数据
                state.dormsInfo.dorms = response.data
                // 统计数据
                let online_num = 0
                let total_num = 0
                response.data.forEach(element => {
                    online_num += element.online_num
                    total_num += element.total_num
                });
                state.dormsInfo.online_num = online_num
                state.dormsInfo.total_num = total_num
            }
        )
    },

    [types.CLEAR_BUILDINGS_INFO](state){
        state.buildingsInfo.online_num = null
        state.buildingsInfo.total_num = null
        state.buildingsInfo.buildings = []
    },

    [types.CLEAR_FLOORS_INFO](state){
        state.floorsInfo.online_num = null
        state.floorsInfo.total_num = null
        state.floorsInfo.floors = []
    },

    [types.CLEAR_DORMS_INFO](state){
        state.dormsInfo.online_num = null
        state.dormsInfo.total_num = null
        state.dormsInfo.dorms = []
    },
}
