<template>
    <div class="scroll-area">
      <div v-if="loading">载入中...</div>
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
import BuildingCard from '@/components/cards/BuildingListCard'
export default {
  components: {vueScroll, BuildingCard},
  data(){
    return{
      // buildings: null,
    }
  },

  computed: {
    loading: function() {
      return this.$store.state.buildingsInfo.loading
    }
  },

  created: function(){
    // 同步清除vuex中dormsInfo数据
    this.$store.commit('CLEAR_BUILDINGS_INFO')
    // 同步步更新vuex中buildingsInfo数据
    this.$store.commit('SET_BUILDINGS_INFO')
  },
}
</script>
