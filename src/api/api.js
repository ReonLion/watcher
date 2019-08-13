import axios from 'axios'

let host = 'http://106.14.205.68:8000'

// 获取学校列表
export const getSchools = () => { return axios.get(`${host}/schools/`) }

// 认证
export const login = (params) => { return axios.post(`${host}/login/`, params) }

// 获取用户管理学生的对应宿舍楼
export const getBuildings = () => { return axios.get(`${host}/buildings`) }
