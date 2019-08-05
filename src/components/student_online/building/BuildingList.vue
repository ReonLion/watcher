<template>
    <div>
        <vue-perfect-scrollbar class="list-scrollbar">
          <template v-for="(building, index) in buildings">
              <v-divider :key="index"></v-divider>
              <building-card :key="building.name + index" :building="building" class="my-2"></building-card>           
          </template>
        </vue-perfect-scrollbar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import BuildingCard from '@/components/student_online/building/BuildingCard'
export default {
  components: {VuePerfectScrollbar, BuildingCard},
  data(){
    return{
      baidu: "http://www.baidu.com",
      buildings:[
        {id: "1", name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓", online: 200, total: 300,},
      ]
    }
  },
}
</script>
