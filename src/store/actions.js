import * as types from './mutations-types'
// 提交mutation
function makeAction(type){
    return ({ commit }, ...args) => commit(type, ...args)
}

export const setUserInfo = makeAction(types.SET_USERINFO)
