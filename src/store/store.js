// 引入Vue
import Vue from 'vue'
// 全局引入Vuex
import Vuex from 'vuex'
// 全局注册vuex
Vue.use(Vuex)
import mutations from "./mutations"
import * as actions from './actions'

import cookie from "../assets/js/cookie"

const userInfo = {
    name: cookie.getCookie("name") || "",
    token: cookie.getCookie("token") || "",
};

const userDetail = {
    name: null,
    department: null,
    email: null,
    canWatch: null,
    canRegister: null,
    canControl: null,
}

const vueScrollOps = {
    rail: {
        opacity: '0.2',
        background: undefined,
        border: '1px solid #cecece',
        size: '5px'
      },
    bar: {
        background: undefined,
        keepShow: true,
        size: '5px',
        minSize: 0.2
    },
}

const buildingsInfo = {
    loading: true,
    online_dorms_num: null,
    total_dorms_num: null,
    warning_dorms_num: null,
    buildings: [],
}

const floorsInfo = {
    loading: true,
    online_dorms_num: null,
    total_dorms_num: null,
    warning_dorms_num: null,
    floors: [],
}

const dormsInfo = {
    loading: true,
    online_dorms_num: null,
    total_dorms_num: null,
    warning_dorms_num: null,
    dorms: [],
}


const state = {
    userInfo,
    userDetail,
    vueScrollOps,
    buildingsInfo,
    floorsInfo,
    dormsInfo,
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
});
