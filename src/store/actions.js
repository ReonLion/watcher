import * as types from './mutations-types'
// 提交mutation
function makeAction(type){
    return ({ commit }, ...args) => commit(type, ...args)
}

export const setUserInfo = makeAction(types.SET_USERINFO)
export const setUserDetail = makeAction(types.SET_USER_DETAIL)
export const setBuildingsInfo = makeAction(types.SET_BUILDINGS_INFO)
export const setFloorsInfo = makeAction(types.SET_FLOORS_INFO)
export const setDormsInfo = makeAction(types.SET_DORMS_INFO)
