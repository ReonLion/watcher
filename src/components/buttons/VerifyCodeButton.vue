<template>
    <v-container fluid ma-0 pa-0>
        <v-btn :loading="loading" :disabled="!canClick" @click="clicked" 
        color="info" large depressed>{{text}}</v-btn>
        <div v-if="errorMsg" class="error--text caption">{{errorMsg}}</div>
    </v-container>
</template>

<script>
import {postVerifyCode, } from '@/api/api'

export default {
    props: {
        // 判断使用哪个api
        register: {
            type: Boolean,
            default: null,
        },
        username: {
            type: String,
            default: null,
        },
        email: {
            type: String,
            default: null,
        }
    },
    data() {
        return {
            canClick: true,
            loading: false,
            errorMsg: null,
            text: '获取验证码',
            interval: 5,
            click: 0,
            now: 0,
        }
    },
    methods: {
        clicked: function() {
            this.getCode()
        },
        getCode: function() {
            this.loading = true
            postVerifyCode(this.username, this.email, this.register)
            .then(
                (response) => {
                    // post成功后才执行以下操作
                    if(response.status==201) {
                        this.loading = false
                        // 禁用按钮点击
                        this.canClick = false
                        // 清楚错误显示
                        this.errorMsg = null
                        // 开始倒计时
                        this.now = this.interval - this.click
                        this.text = `重新发送(${this.now}s)`
                        let clock = setInterval(() => {
                            this.click++
                            this.now = this.interval - this.click
                            this.text = `重新发送(${this.now}s)`
                            if (this.now < 0) {
                                clearInterval(clock)
                                this.text = '获取验证码'
                                this.click = 0
                                this.canClick = true
                            }
                        }, 1000)
                    }
                }
            )
            .catch(
                (error) => {
                    // 只有是参数验证错误时才执行，如果是网络原因，不执行
                    // 错误则在按钮下面显示错误信息
                    if(error.response.status==400) {
                        this.loading = false
                    this.errorMsg = error.response.data.email[0]
                    }
                }
            )
        }
    }
}
</script>

