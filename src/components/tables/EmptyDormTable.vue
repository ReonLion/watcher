<template>
  <v-card>
    <v-data-table :headers="headers" :items="dorms" item-key="id" :rows-per-page-items="rowsPerPage">
      <template v-slot:items="props">
        <td>{{ props.item.building_name }}</td>
        <td>{{ props.item.floor }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.update_time }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {getLongtimeNoStudentDorms} from '@/api/api'
  export default {
    props: {

    },
    data () {
      return {
        dorms: [],
        loading: false,
        rowsPerPage: [20, 40, 80, {"text":"全部","value":-1} ],
        headers: [
          { text: '宿舍楼', sortable: false, value: 'building_name' },
          { text: '楼层', sortable: false, value: 'floor' },
          { text: '宿舍', sortable: false, value: 'name' },
          { text: '更新时间', sortable: false, value: 'update_time' },
        ],
      }
    },

    created: function() {
      this.getData()
    },

    methods: {
      getData: function() {
        this.loading = true
        getLongtimeNoStudentDorms()
        .then(response => {
            this.dorms = response.data
        })
      },
    },
  }
</script>
