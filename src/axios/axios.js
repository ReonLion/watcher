import axios from 'axios'

// 全局状态控制引入
import store from '../store/store'

// import * as types from '../store/mutations-types'
import router from '../router'

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if(store.state.userInfo.token){
            // 存在token则加入
            config.headers.Authorization = `token ${store.state.userInfo.token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    undefined,
    error => {
        let res = error.response
        switch(res.status){
            case 401:
                // 认证失败，返回登陆页面，登陆页面created中会清除token
                router.replace({path: "/Login"})
                console.log("认证失败")
                break
            case 403:
                // 无权操作，返回登陆页面，登陆页面created中会清除token
                router.replace({path: "/Login"})
                console.log("您无该操作权限")
                break
            case 500:
                console.log("服务器错误")
                break
        }
        // 返回接口返回的错误信息
        return Promise.reject(error.response.data)
    }
)
