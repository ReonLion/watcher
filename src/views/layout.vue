<template>
  <div v-if="confirmUser">
    <!-- 上侧工具条 -->
    <ToolBar />
    <!-- 左侧导航 -->
    <NavBar />
    <!-- 内容式图，一定要在v-content标签下 -->
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-content>
  </div>
</template>

<script>
import NavBar from '@/components/navigations/Navbar'
import ToolBar from '@/components/navigations/Toolbar'

export default {
  components: {NavBar, ToolBar},
  data() {
    return {
      confirmUser: false,
    }
  },
  created: function() {
    // 同步清除vuex中userDetail数据
    this.$store.commit('CLEAR_USER_DETAIL')
    // 同步步更新vuex中userDetail数据
    this.$store.dispatch('setUserDetail')
  },
  watch: {
    '$store.state.userDetail.loading': function(val) {
      if (val === false) {
        this.$store.commit('CLEAR_HOMEPAGE_LINK')
        if(this.$store.state.userDetail.canWatch) {
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "home", text: "首\xa0\xa0\xa0\xa0页", route: "/Homepage"})
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "autorenew", text: "实\xa0时\xa0信\xa0息", route: "/RealtimeInfo"})
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "history", text: "历\xa0史\xa0查\xa0询", route: "/History"})
        }
        if(this.$store.state.userDetail.canControl){
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "view_list", text: "批\xa0量\xa0控\xa0制", route: "/BulkControl"})
        }
        if(this.$store.state.userDetail.username.endsWith('admin')) {
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "build", text: "用\xa0电\xa0设\xa0置", route: "/GlobalSettings"})
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "warning", text: "故\xa0障\xa0设\xa0备", route: "/FailedDevices"})
        }
        if(this.$store.state.userDetail.canRegister) {
          // this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "link", text: "绑\xa0定\xa0设\xa0备", route: "/BindDevice"})
        }
        if(this.$store.state.userDetail.canWatch) {
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "person_pin", text: "长期无人宿舍", route: "/EmptyDorms"})
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "fullscreen", text: "大\xa0屏\xa0轮\xa0播", route: "/RepeatDisplay"})
        }
        this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "settings", text: "设\xa0\xa0\xa0\xa0置", route: "/Settings"})
        // this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "repeat", text: "测\xa0试\xa0页\xa0面", route: "/Test"})
        // 身份权限分配完成
        this.confirmUser = true
        // 跳转路由
        // if(this.$store.state.userDetail.canRegister) {
        //   this.$router.replace({name: 'BindDevice'})
        // }
        // if(this.$store.state.userDetail.canWatch) {
        //   this.$router.replace({name: 'Homepage'})
        // }
      }
    }
  }
}
</script>
