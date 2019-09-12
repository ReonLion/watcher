import axios from 'axios'

let host = 'http://106.14.205.68:8000'

// 获取学校列表
export const getSchools = () => { return axios.get(`${host}/SchoolList/`) }

// 认证
export const login = (params) => { return axios.post(`${host}/login/`, params) }

// 获取用户管理学生的对应宿舍楼
export const getBuildingsInfo = () => { return axios.get(`${host}/BuildingRealtimeStatus/`) }

// 获取用户管理学生的对应宿舍楼的宿舍楼层
export const getFloorsInfo = (building_id) => { return axios.get(`${host}/FloorRealtimeStatus/`, {
    params: {
        building_id: building_id,
    }
}) }

// 获取用户管理学生的对应宿舍
export const getDormsInfo = (search, building_id, floor) => { return axios.get(`${host}/DormRealtimeStatus/`, {
    params: {
        search: search,
        building_id: building_id,
        floor: floor,
    }
}) }

// 获取用户管理学生的对应宿舍
export const getDormInfo = (dorm_id) => { return axios.get(`${host}/DormRealtimeStatus/`, {
    params: {
        dorm_id: dorm_id,
    }
}) }


export const getAll24hHistory = () => { return axios.get(`${host}/24hHistory/`) }

export const getBuilding24hHistory = (building_id) => { return axios.get(`${host}/24hHistory/`, {
    params: {
        building_id: building_id,
    }
}) }

export const getFloor24hHistory = (building_id, floor) => { return axios.get(`${host}/24hHistory/`, {
    params: {
        building_id: building_id,
        floor: floor,
    }
}) }

export const getDorm24hHistory = (dorm_id) => { return axios.get(`${host}/24hHistory/`, {
    params: {
        dorm_id: dorm_id,
    }
}) }

