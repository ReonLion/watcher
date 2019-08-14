<template>
    <div class="scroll-area">
        <vue-scroll :ops="$store.state.vueScrollOps">
          <template v-for="(floor, index) in floors">
              <div :key="index">
                <v-divider></v-divider>
                <floor-card :floor="floor"></floor-card>       
              </div>
          </template>
        </vue-scroll>
    </div>
</template>

<script>
import vueScroll from 'vuescroll'
import FloorCard from '@/components/student_online/floor/FloorCard'
export default {
  components: {vueScroll, FloorCard},
  data(){
    return{

    }
  },

  computed: {
    floors: function()
    {
      return this.$store.state.floorsInfo.floors
    }
  },

  created: function(){
    // 同步清除vuex中floorsInfo数据
    this.$store.commit('CLEAR_FLOORS_INFO')
    // 异步更新vuex中floorsInfo数据
    this.$store.dispatch('setFloorsInfo', {building_id: this.$route.params.building_id})
  }
}
</script>
