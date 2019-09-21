<template>
    <v-dialog v-model="dialog" max-width="500px" lazy>
      <v-card>
        <v-card-title class="info white--text">
          <span class="headline">解绑邮箱</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form ref="form">
              <v-layout row wrap>
                <v-flex md12 xs12 px-3>
                  <v-text-field v-model="email" readonly label="邮箱" :rules="emailRules"></v-text-field>
                </v-flex>
                <v-flex md7 xs7 pl-3>
                  <v-text-field v-model="code" label="验证码" :rules="emptyRules"></v-text-field>
                </v-flex>
                <v-flex md5 xs5 pl-3 pr-3>
                  <verify-code-button :username="username" :email="email"></verify-code-button>
                </v-flex>
                <v-flex md12 xs12 text-xs-center>
                  <v-btn @click="delEmail" :loading="loading" color="error" large depressed>解绑邮箱</v-btn>
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
import {delBindEmail,} from '@/api/api'

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
          emailRules: [ 
            v => /.+@.+/.test(v) || '不是正确的邮箱格式' 
          ],
          errMsg: null,
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

        username: function() {
          return this.$store.state.userDetail.username
        },

        email: function() {
          return this.$store.state.userDetail.email
        }
    },
    watch: {

    },
    methods: {
      delEmail: function() {
        if (this.$refs.form.validate()) {
          this.loading = true
          console.log(this.username)
          delBindEmail(this.username, this.email, this.code)
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
                this.errMsg = error.response.data.code[0]
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
    }
  }
</script>
