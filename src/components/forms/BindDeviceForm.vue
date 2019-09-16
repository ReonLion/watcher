<template>
    <v-form ref="form">
        <v-snackbar v-model="showBindSuccess" top color="success" :timeout="timeout">设备绑定成功!</v-snackbar>
        <v-snackbar v-model="showBindError" top color="error" :timeout="timeout">设备绑定失败，设备已被绑定!</v-snackbar>
        <v-layout row wrap class="my-0 pa-0" justify-center>
            <v-flex xs12 md12>
                <v-select v-model="selectBuilding" :items="buildings" @change="selectBuildingChange"
                item-text="name" item-value="id" label="宿舍楼" 
                :rules="emptyRules" outline flat></v-select>
            </v-flex>
            <v-flex xs12 md12>
                <v-select v-model="selectFloor" :items="floors" @change="selectFloorChange"
                item-text="floor" item-value="floor" label="楼层" 
                :rules="emptyRules" outline flat></v-select>
            </v-flex>
            <v-flex xs12 md12>
                <v-select v-model="selectDorm" :items="dorms" @change="selectDormChange"
                item-text="name" item-value="id" label="宿舍" 
                :rules="emptyRules" outline flat></v-select>
            </v-flex>
            <v-flex xs12 md12>
                <v-text-field v-model="deviceNo" label="设备编号" 
                :rules="emptyRules" outline flat></v-text-field>
            </v-flex>
            <v-flex xs8 md8>
                <v-btn :loading="loading" color="success" @click="validate" block>绑定设备</v-btn>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
import {getBuildings, getBuildingFloors, getBuildingFloorDorms, postBindDevice} from '@/api/api'

export default {
    components: {},
    data: () => ({
        loading: false,
        selectBuilding: null,
        selectFloor: null,
        selectDorm: null,
        buildings: [],
        floors: [],
        dorms: [],
        deviceNo: null,
        emptyRules: [
            v => !!v || '不能为空',
        ],
        showBindSuccess: false,
        showBindError: false,
        timeout: 3000,
    }),

    methods: {
        validate: function() {
            // 如果表单验证通过
            if(this.$refs.form.validate()) {
                this.loading = true
                postBindDevice(this.deviceNo, this.selectDorm)
                .then(
                    (response) => {
                        // 绑定/添加成功
                        if (response.status == 201) {
                            this.loading = false
                            // 显示成功提示
                            this.showBindSuccess = true
                            // 清空dorm选择
                            this.selectDorm = null
                            // 清空设备编号
                            this.deviceNo = null
                            // 重置表单验证结果
                            this.$refs.form.resetValidation()
                        }
                    }
                )
                .catch(
                    (error) => {
                        // 设备已经存在
                        if (error.response.status == 400) {
                            // 显示失败提示
                            this.showBindError = true
                            this.loading = false
                        }
                    }
                )
            }
        },

        selectBuildingChange: function() {
            // 清楚楼层和宿舍数据
            this.floors = []
            this.dorms = []
            this.selectFloor = null
            this.selectDorm = null
            // 更新楼层和宿舍数据
            getBuildingFloors(this.selectBuilding)
            .then(
                (response) => {
                    this.floors = response.data
                }
            )
        },

        selectFloorChange: function() {
            // 清楚宿舍数据
            this.dorms = []
            this.selectDorm = null
            // 更新宿舍数据
            getBuildingFloorDorms(this.selectBuilding, this.selectFloor)
            .then(
                (response) => {
                    this.dorms = response.data
                }
            )
        },

        selectDormChange: function() {

        }
    },

    created: function() {
        getBuildings()
        .then(
            (response) => {
                this.buildings = response.data
            }
        )
    },
}
</script>

