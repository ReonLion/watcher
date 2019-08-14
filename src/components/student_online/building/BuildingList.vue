<template>
    <div class="scroll-area">
        <vue-scroll :ops="$store.state.vueScrollOps">
          <template v-for="(building, index) in $store.state.buildingsInfo.buildings">
            <div :key="index">
              <v-divider></v-divider>
              <building-card :building="building"></building-card>
            </div>
          </template>
        </vue-scroll>
    </div>
</template>

<script>
import vueScroll from 'vuescroll'
import BuildingCard from '@/components/student_online/building/BuildingCard'
export default {
  components: {vueScroll, BuildingCard},
  data(){
    return{
      // buildings: null,
    }
  },

  created: function(){
    // 同步清除vuex中dormsInfo数据
    this.$store.commit('CLEAR_BUILDINGS_INFO')
    // 异步更新vuex中buildingsInfo数据
    this.$store.dispatch('setBuildingsInfo')
  },
}
</script>
