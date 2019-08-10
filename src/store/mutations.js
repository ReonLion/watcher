import * as types from "./mutations-types"
import cookie from "../assets/js/cookie"
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
        console.log(cookie.getCookie("token"))
    },
}
