<template>
    <div class="scroll-area">
        <vue-scroll :ops="$store.state.vueScrollOps">
          <template v-for="(dorm, index) in dorms">
              <div :key="index">
                <v-divider></v-divider>
                <dorm-card :dorm="dorm"></dorm-card>       
              </div>
          </template>
        </vue-scroll>
    </div>
</template>

<script>
import vueScroll from 'vuescroll'
import DormCard from '@/components/student_online/dorm/DormCard'
export default {
  components: {vueScroll, DormCard},
  data(){
    return{

    }
  },

  computed: {
    dorms: function()
    {
      return this.$store.state.dormsInfo.dorms
    }
  },

  created: function(){
    // 同步清除vuex中dormsInfo数据
    this.$store.commit('CLEAR_DORMS_INFO')
    // 异步更新vuex中dormsInfo数据
    this.$store.dispatch('setDormsInfo', {building_id: this.$route.params.building_id, floor: this.$route.params.floor})
  }
}
</script>
