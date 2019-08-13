<template>
    <div>
        <vue-perfect-scrollbar class="list-scrollbar">
          <template v-for="(building, index) in buildings">
            <div :key="index">
              <v-divider :key="index"></v-divider>
              <building-card :key="building.id" :building="building" class="my-2"></building-card>
            </div>
          </template>
        </vue-perfect-scrollbar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import BuildingCard from '@/components/student_online/building/BuildingCard'
import {getBuildings,} from '@/api/api'
export default {
  components: {VuePerfectScrollbar, BuildingCard},
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
