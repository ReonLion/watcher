<template>
    <v-form ref="form">
        <v-snackbar v-model="showUnbindSuccess" top color="success" :timeout="timeout">设备解绑成功!</v-snackbar>
        <v-snackbar v-model="showUnbindError" top color="error" :timeout="timeout">设备解绑失败，设备不存在!</v-snackbar>
        <v-layout row wrap class="my-0 pa-0" justify-center>
            <v-flex xs12 md12>
                <v-autocomplete v-model="selectDevice" :items="devices" @change="selectDeviceNoChange" 
                item-text="no" return-object
                :rules="emptyRules" label="设备编号" outline flat></v-autocomplete>
            </v-flex>
            <v-flex xs12 md12>
                <v-text-field :value="selectDorm" readonly :rules="emptyRules" 
                label="宿舍" single-line outline flat></v-text-field>
            </v-flex>
            <v-flex xs8 md8>
                <v-btn :loading="loading" color="error" @click="validate" block>解除绑定</v-btn>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
import {getBindDevice, deleteBindDevice} from '@/api/api'

export default {
    components: {},
    data: () => ({
        loading: false,
        devices: [],
        selectDevice: null,
        selectDorm: null,
        showUnbindSuccess: false,
        showUnbindError: false,
        timeout: 3000,
        emptyRules: [
            v => !!v || '不能为空',
        ],
    }),

    methods: {
        validate: function() {
            // 如果表单验证通过
            if(this.$refs.form.validate()) {
                this.loading = false
                deleteBindDevice(this.selectDevice.no)
                .then(
                    (response) => {
                        if(response.status == 204) {
                            this.loading = false
                            // 删除成功，显示通知，重置表格
                            this.showUnbindSuccess = true
                            this.$refs.form.reset()
                            // 重新获取数据
                            this.getDeivces()
                        }
                    }
                )
                .catch(
                    (error) => {
                        if(error.response.status == 404) {
                            this.loading = false
                            this.showUnbindError = true
                        }
                    }
                )
            }
        },

        selectDeviceNoChange: function(device) {
            this.selectDorm = device.dorm_name
        },

        getDeivces: function() {
            getBindDevice()
            .then(
                (response) => {
                    this.devices = response.data
                }
            )
        }
    },

    created: function() {
        this.getDeivces()
    }
}
</script>

