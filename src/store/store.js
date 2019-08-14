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
    online_num: null,
    total_num: null,
    buildings: [],
}

const floorsInfo = {
    online_num: null,
    total_num: null,
    floors: [],
}

const dormsInfo = {
    online_num: null,
    total_num: null,
    dorms: [],
}


const state = {
    userInfo,
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
