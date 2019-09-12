<template>
    <div class="scroll-area">
        <div v-if="loading">载入中...</div>
        <div v-if="empty">暂无数据记录</div>
        <vue-scroll :ops="$store.state.vueScrollOps">
          <template v-for="(dorm, index) in dorms">
              <div :key="index">
                <v-divider></v-divider>
                <dorm-card :dorm="dorm" :selectedDormId="selectedDormId"></dorm-card>
              </div>
          </template>
        </vue-scroll>
    </div>
</template>

<script>
import vueScroll from 'vuescroll'
import DormCard from '@/components/cards/DormListCard'
export default {
  components: {vueScroll, DormCard},
  data(){
    return{
      selectedDormId: null,
      boolTrue: true,
    }
  },

  computed: {
    dorms: function()
    {
      return this.$store.state.dormsInfo.dorms
    },

    loading: function() {
      return this.$store.state.dormsInfo.loading
    },

    empty: function() {
      return (!this.loading) && (this.dorms.length==0)
    }
  },

  methods: {
    getData: function() {
      // 同步清除vuex中DormsInfo数据
      this.$store.commit('CLEAR_DORMS_INFO')
      if (this.$route.query.search) {
        // 当存在search字段时，忽略building和floor
        this.$store.dispatch('setDormsInfo', {
          search: this.$route.query.search,
        })
        return
      }
      // 异步更新vuex中DormsInfo数据
      this.$store.dispatch('setDormsInfo', {
        search: this.$route.query.search,
        building_id: this.$route.query.building_id, 
        floor: this.$route.query.floor
      })
    },

    searchJump: function() {

    }
  },

  watch: {
    // 
    '$route.query.dorm_id'(to) {
      this.selectedDormId = Number(this.$route.query.dorm_id)
      // 当searchfield内容不变时，再按一次search时，重新获取数据
      if(to==undefined) {
        this.getData()
      }
    },

    // 只有当search字段变化时，才获取数据
    '$route.query.search'() {
      this.selectedDormId = Number(this.$route.query.dorm_id)
      this.getData()
    },

    loading(to, from) {
      if(!to && from) {
        if(this.$route.query.search && (this.dorms.length!=0)) {
          this.$router.replace({
            name: 'dormDetail',
            query: {
                search: this.$route.query.search,
                building_id: this.$route.query.building_id,
                floor: this.$route.query.floor,
                dorm_id: this.dorms[0].id
            }
          })
        }
      }
    }
  },

  created: function(){
    this.selectedDormId = Number(this.$route.query.dorm_id)
    this.getData()
  },
}
</script>
