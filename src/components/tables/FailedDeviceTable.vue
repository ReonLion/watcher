<template>
  <v-card>
    <v-data-table :headers="headers" :items="devices" item-key="id" :rows-per-page-items="rowsPerPage">
      <template v-slot:items="props">
        <td>{{ props.item.no }}</td>
        <td>{{ props.item.dorm_name }}</td>
        <td>{{ props.item.update_time }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {getLongtimeNotUpdateDevices} from '@/api/api'
  export default {
    props: {

    },
    data () {
      return {
        devices: [],
        loading: false,
        rowsPerPage: [20, 40, 80, {"text":"全部","value":-1} ],
        headers: [
          { text: '设备编号', sortable: false, value: 'no' },
          { text: '宿舍名称', sortable: false, value: 'dorm_name' },
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
        getLongtimeNotUpdateDevices()
        .then(response => {
            this.devices = response.data
        })
      },
    },
  }
</script>
