import axios from 'axios'

let host = 'http://127.0.0.1:8000'

// 获取学校列表
export const getSchools = () => { return axios.get(`${host}/schools/`) }

// 认证
export const login = (params) => { return axios.post(`${host}/login/`, params) }
