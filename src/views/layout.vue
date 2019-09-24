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
        if(this.$store.state.userDetail.canRegister) {
          this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "link", text: "绑\xa0定\xa0设\xa0备", route: "/BindDevice"})
        }
        this.$store.commit('PUSH_HOMEPAGE_LINK', {icon: "settings", text: "设\xa0\xa0\xa0\xa0置", route: "/Settings"})
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
