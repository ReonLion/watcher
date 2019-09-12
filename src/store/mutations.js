import * as types from "./mutations-types"
import cookie from "../assets/js/cookie"
import {getBuildingsInfo, getFloorsInfo, getDormsInfo} from '@/api/api'
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
        state.buildingsInfo.loading = true
        getBuildingsInfo()
        .then(
            (response) => {
                // 更新store数据
                state.buildingsInfo.buildings = response.data
                // 统计数据
                let online_num = 0
                let total_num = 0
                let warning_num = 0
                response.data.forEach(element => {
                    online_num += element.online_dorms_num
                    total_num += element.total_dorms_num
                    warning_num += element.warning_dorms_num
                });
                state.buildingsInfo.online_dorms_num = online_num
                state.buildingsInfo.total_dorms_num = total_num
                state.buildingsInfo.warning_dorms_num = warning_num
                state.buildingsInfo.loading = false
            }
        )
    },

    [types.SET_FLOORS_INFO](state, payload){
        state.floorsInfo.loading = true
        getFloorsInfo(payload.building_id)
        .then(
            (response) => {
                // 更新store数据
                state.floorsInfo.floors = response.data
                // 统计数据
                let online_num = 0
                let total_num = 0
                let warning_num = 0
                response.data.forEach(element => {
                    online_num += element.online_dorms_num
                    total_num += element.total_dorms_num
                    warning_num += element.warning_dorms_num
                });
                state.floorsInfo.online_dorms_num = online_num
                state.floorsInfo.total_dorms_num = total_num
                state.floorsInfo.warning_dorms_num = warning_num
                state.floorsInfo.loading = false
            }
        )
    },

    [types.SET_DORMS_INFO](state, payload){
        state.dormsInfo.loading = true
        getDormsInfo(payload.search, payload.building_id, payload.floor)
        .then(
            (response) => {
                // 更新store数据
                state.dormsInfo.dorms = response.data
                // 统计数据
                let online_num = 0
                let total_num = 0
                let warning_num = 0
                response.data.forEach(element => {
                    if(element.has_student) {
                        online_num += 1
                    }
                    if(element.is_warning) {
                        warning_num += 1
                    }
                    total_num += 1
                });
                state.dormsInfo.online_dorms_num = online_num
                state.dormsInfo.total_dorms_num = total_num
                state.dormsInfo.warning_dorms_num = warning_num
                state.dormsInfo.loading = false
            }
        )
    },

    [types.CLEAR_BUILDINGS_INFO](state){
        state.buildingsInfo.loading = true
        state.buildingsInfo.online_dorms_num = null
        state.buildingsInfo.total_dorms_num = null
        state.buildingsInfo.buildings = []
    },

    [types.CLEAR_FLOORS_INFO](state){
        state.floorsInfo.loading = true
        state.floorsInfo.online_dorms_num = null
        state.floorsInfo.total_dorms_num = null
        state.floorsInfo.floors = []
    },

    [types.CLEAR_DORMS_INFO](state){
        state.dormsInfo.loading = true
        state.dormsInfo.online_dorms_num = null
        state.dormsInfo.total_dorms_num = null
        state.dormsInfo.dorms = []
    },
}
