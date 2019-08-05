<template>
    <div>
        <vue-perfect-scrollbar class="list-scrollbar">
          <template v-for="(floor, index) in floors">
              <v-divider :key="index"></v-divider>
              <floor-card :key="floor.name + index" :floor="floor" class="my-2"></floor-card>           
          </template>
        </vue-perfect-scrollbar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import FloorCard from '@/components/student_online/floor/FloorCard'
export default {
  components: {VuePerfectScrollbar, FloorCard},
  data(){
    return{
      floors:[
        {id: "1", name: "狮城公寓", online: 200, total: 300,},
        {name: "狮城公寓-2", online: 200, total: 300,},
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
