<template>
  <section id="welcome" class="hide-overflow">
    <v-layout>
      <!-- 轮播图 -->
      <v-flex md6 hidden-xs-and-down>
        <v-carousel height="100vh" hide-controls interval="4000">
          <v-carousel-item v-for="(pic, i) in pics" :key="i" :src="pic.src"></v-carousel-item>
        </v-carousel>
      </v-flex>
      <!-- 登陆页面 -->
      <v-flex xs12 md6 align-content-space-between layout :pa-5="$vuetify.breakpoint.smAndDown" wrap>
        <icon-bubble-1 style="transform: rotate(180deg) translateY(25%)"/>

        <v-layout align-center justify-center>
          <!-- 登陆表单 -->
          <v-flex xs10 md6 >
            <v-form id="loginForm" autocomplete="false" class="pa-0">
              <!-- item-text字段用于展示，item-value字段代表真正的值，值与v-model绑定，这里值是学校编号 -->
              <v-select v-model="selectSchool" @change="schoolSelectChange"
              :items="schools" item-text="name" name="school" 
              append-icon="account_balance" label="学校" type="text" outline flat></v-select>
              <v-text-field v-model="employeeNo" name="no" append-icon="person" label="职工号" type="text" outline></v-text-field>
              <v-text-field v-model="password" name="password" append-icon="lock" label="密码" type="password" outline></v-text-field>
            </v-form>
            <div class="my-0 py-0 error--text" v-show="loginErr">用户名或密码错误</div>
            <!-- 登录按钮 -->
            <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
            <!-- 后台超链接 -->
            <v-layout>
              <v-flex xs6 md6>
                <a class="caption left" href="http://www.baidu.com">忘记密码？</a>
              </v-flex>
              <v-flex xs6 md6>
                <a class="caption right" href="http://www.baidu.com">管理员入口</a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <icon-bubble-2 style="transform: rotate(180deg) translate(-200px, -15%)"/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import IconBubble1 from '@/components/icon/Bubble1'
import IconBubble2 from '@/components/icon/Bubble2'
import {getSchools, login} from '../../api/api'
import cookie from '../../assets/js/cookie'

export default {
    components: {IconBubble1, IconBubble2, },

    data() {
      return {
        loading: false,
        employeeNo: null,
        password: null,
        loginErr: false,
        pics: [
          {src: require('@/assets/images/welcome1.jpg')},
          {src: require('@/assets/images/welcome2.jpg')},
          {src: require('@/assets/images/welcome3.jpg')},
        ],
        schools: [],
        selectSchool: null,
      }
    },

    computed: {
      // username=学校编号+职工号
      username: function(){
        return this.selectSchool.no + this.employeeNo
      },
    },

    methods: {
      login: function(){
        this.loading = true
        login({
          username: this.username,
          password: this.password,
        })
        .then(
          (response) => {
            // 按钮等待状态取消，错误取消
            this.loading = false
            this.loginErr = false
            // 把token存在cookie中，1天后过期
            cookie.setCookie("name", this.username, 1)
            cookie.setCookie("token", response.data.access, 1)
            // 存储在vuex中
            this.$store.dispatch("setUserInfo")
            // 路由跳转
            this.$router.push({name: 'HomePage'})
          }
        )
        .catch(
          (error) => {
            console.log(error)
            // 按钮等待状态取消，错误显示，可重新登陆
            this.loading = false
            this.loginErr = true
          }
        )
      },

      schoolSelectChange(){
        console.log(this.selectSchool)
      },

      getSchools(){
        getSchools().then(
          (response) => {
            this.schools = response.data
            this.selectSchool = this.schools[0]
          }
        ).catch(
          (error) => console.log(error)
        )
      },

    },

    created: function(){
      // 获取学校列表
      this.getSchools()
      // 清除cookie缓存
      cookie.delCookie("name")
      cookie.delCookie("token")
      // 清除vuex缓存
      this.$store.dispatch('setUserInfo')
    }
}
</script>

