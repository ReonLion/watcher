import axios from 'axios'

let host = 'http://106.14.205.68:8000'
// let host = 'http://127.0.0.1:8000'

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

export const getDormsList = () => { return axios.get(`${host}/DormRealtimeStatus/`) }

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

export const getHistoryData = (page, start_time, end_time, search, page_size) => { return axios.get(`${host}/HistoryData`, {
    params: {
        start_time: start_time,
        end_time: end_time,
        search: search,
        page_size: page_size,
        page: page,
    }
}) }

export const getBuildings = () => { return axios.get(`${host}/Buildings/`) }

export const getBuildingFloors = (building_id) => { return axios.get(`${host}/BuildingFloors/`, {
    params: {
        building_id: building_id,
    }
}) }

export const getBuildingFloorDorms = (building_id, floor) => { return axios.get(`${host}/BuildingFloorDorms/`, {
    params: {
        building_id: building_id,
        floor: floor,
    }
}) }

export const postBindDevice = (deviceNo, dormId) => { return axios.post(`${host}/BindDevice/`, {
    no: deviceNo,
    dorm: dormId,
}) }

export const getBindDevice = () => { return axios.get(`${host}/BindDevice/`) }

export const deleteBindDevice = (deviceNo) => { return axios.delete(`${host}/BindDevice/${deviceNo}/`) }

export const getUserDetail = () => { return axios.get(`${host}/UserDetail/`) }

export const postVerifyCode = (username, email, register) => {
    if (register) {
        // 初次绑定，邮箱不能重复
        return axios.post(`${host}/VerifyCodeofRegister/`, {email:email})
    }
    else {
        // 更改密码等时，发送验证码，邮箱在userprofile中可以重复，但必须存在
        return axios.post(`${host}/VerifyCodeofOperation/`, {username: username, email:email})
    }
}


export const patchBindEmail = (username, email, code) => { return axios.patch(`${host}/User/${username}/`, {
    username: username,
    code: code,
    verify_email: email,
    email: email,
}) }

export const delBindEmail = (username, email, code) => { return axios.patch(`${host}/User/${username}/`, {
    username: username,
    code: code,
    verify_email: email,
    email: "",
}) }

export const patchPassword = (username, email, code, password) => { return axios.patch(`${host}/User/${username}/`, {
    username: username,
    code: code,
    verify_email: email,
    password: password,
}) }


// 控制宿舍电源
export const patchDormLock = (dormId, lock, switchStatus) => { return axios.patch(`${host}/DormRealtimeStatus/${dormId}/`, {
    lock: lock,
    net_control_switch_status: switchStatus
}) }

export const patchDormNetSwitch = (dormId, switchStatus) => { return axios.patch(`${host}/DormRealtimeStatus/${dormId}/`, {
    net_control_switch_status: switchStatus,
}) }

export const LockDorms = (dormsId) => { return axios.post(`${host}/LockDorms/`, {id: dormsId}) }
export const unlockDorms = (dormsId) => { return axios.post(`${host}/UnlockDorms/`, {id: dormsId}) }
export const openDorms = (dormsId) => { return axios.post(`${host}/OpenDormsSwitch/`, {id: dormsId}) }
export const closeDorms = (dormsId) => { return axios.post(`${host}/CloseDormsSwitch/`, {id: dormsId}) }

export const getGlobalSettings = () => { return axios.get(`${host}/GlobalSettings/`) }

export const postGlobalSettings = (minCurrentOffline, minCurrentOnline) => { return axios.post(`${host}/GlobalSettings/`, {
    min_current_offline: minCurrentOffline,
    min_current_online:minCurrentOnline,
}) }