import axios from 'axios'

let host = 'http://106.14.205.68:8000'

// 获取学校列表
export const getSchools = () => { return axios.get(`${host}/schools/`) }

// 认证
export const login = (params) => { return axios.post(`${host}/login/`, params) }

// 获取用户管理学生的对应宿舍楼
export const getBuildings = () => { return axios.get(`${host}/buildings`) }

// 获取用户管理学生的对应宿舍楼的宿舍楼层
export const getFloors = (building_id) => { return axios.get(`${host}/floors`, {
    params: {
        building_id: building_id,
    }
}) }

// 获取用户管理学生的对应宿舍
export const getDorms = (building_id, floor) => { return axios.get(`${host}/dorms`, {
    params: {
        building_id: building_id,
        floor: floor,
    }
}) }

