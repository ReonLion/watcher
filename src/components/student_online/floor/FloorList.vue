<template>
    <div class="list-scrollbar">
        <vue-scroll :ops="$store.vueScrollOps">
          <template v-for="(floor, index) in floors">
              <div :key="index">
                <v-divider></v-divider>
                <floor-card :floor="floor" class="my-2"></floor-card>       
              </div>    
          </template>
        </vue-scroll>
    </div>
</template>

<script>
import vueScroll from 'vuescroll'
import FloorCard from '@/components/student_online/floor/FloorCard'
import {getFloors, } from '@/api/api'
export default {
  components: {vueScroll, FloorCard},
  data(){
    return{
      floors: null,
    }
  },

  created: function(){
    getFloors(this.$route.params.building_id)
    .then(
      (response) => {
        this.floors = response.data
      }
    )
    .catch(
      (err) => {
        console.log(err)
      }
    )
  }
}
</script>
