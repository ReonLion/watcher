<template>
    <v-dialog v-model="dialog" max-width="500px" lazy>
      <v-card>
        <v-card-title class="info white--text">
          <span class="headline">忘记密码</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form ref="form">
              <v-layout row wrap>
                <v-flex md12 xs12 px-3>
                    <v-select v-model="selectSchool"
                    :items="schools" item-text="name" name="school" item-value="no"
                    label="学校"></v-select>
                </v-flex>
                <v-flex md12 xs12 px-3>
                    <v-text-field v-model="employeeNo" label="用户名/职工号" :rules="emptyRules"></v-text-field>
                </v-flex>
                <v-flex md12 xs12 px-3>
                    <v-text-field v-model="email" label="邮箱" :rules="emailRules"></v-text-field>
                </v-flex>
                <v-flex md7 xs7 pl-3>
                    <v-text-field v-model="code" label="验证码" :rules="emptyRules"></v-text-field>
                </v-flex>
                <v-flex md5 xs5 pl-3 pr-3>
                    <verify-code-button :username="username" :email="email"></verify-code-button>
                </v-flex>
                <v-flex md12 xs12 px-3>
                    <v-text-field v-model="password" label="新密码" :rules="passwordRules" type="password"></v-text-field>
                </v-flex>
                <v-flex md12 xs12 px-3>
                    <v-text-field v-model="temp" label="确认密码" :rules="passwordRules" type="password"></v-text-field>
                </v-flex>
                <v-flex md12 xs12 text-xs-center>
                    <v-btn @click="changePassword" :loading="loading" color="success" large depressed>更改密码</v-btn>
                    <div v-if="errMsg" class="error--text caption">{{errMsg}}</div>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import VerifyCodeButton from '@/components/buttons/VerifyCodeButton'
import {getSchools,} from '../../api/api'
import {patchPassword,} from '@/api/api'

  export default {
    components: {VerifyCodeButton, },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
          code: null,
          loading: false,
          emptyRules: [
              v => !!v || '不能为空',
          ],
          passwordRules: [
              v => (v.length >= 8) || '密码长度不能少于8字符',
          ],
          emailRules: [ 
            v => /.+@.+/.test(v) || '不是正确的邮箱格式' 
          ],
          errMsg: null,
          password: '',
          temp: '',
          schools: [],
          selectSchool: null,
          employeeNo: '',
          email: null,
        }
    },
    computed: {
        // 因为show从父组件传值而来，再次不能更改父组件的值
        dialog: {
            get() {
                return this.show
            },
            set(newVal) {
                // 父子组件通过.sync实现伪双向通信
                this.$emit('update:show', newVal)
                return newVal
            }
        },

        // username=学校编号+职工号
        username: function(){
            if(this.employeeNo.endsWith('admin') || this.employeeNo.endsWith('register'))
                return this.employeeNo
            else
                return this.selectSchool + this.employeeNo
        },
    },
    watch: {

    },
    methods: {
        getSchools(){
            getSchools().then(
            (response) => {
                this.schools = response.data
                this.selectSchool = this.schools[0].no
            }
            ).catch(
                (error) => console.log(error)
            )
        },
        changePassword: function() {
            if (this.$refs.form.validate()) {
                if(this.password != this.temp) {
                    this.errMsg = '两次输入密码不相同'
                    return
                }
                this.loading = true
                patchPassword(this.username, this.email, this.code, this.password)
                .then(
                    () => {
                    this.errMsg = null
                    // 刷新用户信息
                    this.refreshUserDetail()
                    this.loading = false
                    // 关闭窗口
                    this.dialog = false
                    }
                )
                .catch(
                    (error) => {
                    this.loading = false
                    if(error.response.status == 400)
                        if (error.response.data.code)
                            this.errMsg = error.response.data.code[0]
                        else if (error.response.data.password)
                            this.errMsg = error.response.data.password[0]
                    }
                )
            }
      },

      refreshUserDetail: function() {
        // 同步清除vuex中userDetail数据
        this.$store.commit('CLEAR_USER_DETAIL')
        // 同步步更新vuex中userDetail数据
        this.$store.dispatch('setUserDetail')
      }
    },
    created: function(){
        // 获取学校列表
        this.getSchools()
    },
  }
</script>
