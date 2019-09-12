<template>
  <div>
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
      
    }
  },
}
</script>
