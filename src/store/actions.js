import * as types from './mutations-types'
// 提交mutation
function makeAction(type){
    return ({ commit }, ...args) => commit(type, ...args)
}

export default {
    setUserInfo: function(){
        makeAction(types.SET_USERINFO)
    },
}