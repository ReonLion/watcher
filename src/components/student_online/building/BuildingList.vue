<template>
    <div class="scroll-area">
        <vue-scroll :ops="$store.vueScrollOps">
          <template v-for="(building, index) in buildings">
            <div :key="index">
              <v-divider></v-divider>
              <building-card :building="building" class="my-1"></building-card>
            </div>
          </template>
        </vue-scroll>
    </div>
</template>

<script>
import vueScroll from 'vuescroll'
import BuildingCard from '@/components/student_online/building/BuildingCard'
import {getBuildings,} from '@/api/api'
export default {
  components: {vueScroll, BuildingCard},
  data(){
    return{
      buildings: null,
    }
  },

  created: function(){
    // 获取用户管理学生的对应宿舍楼
    getBuildings()
    .then(
      (response) => {
        this.buildings = response.data
      }
    )
    .catch(
      (error) => {
        console.log(error)
      }
    )
  },
}
</script>
