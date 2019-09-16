<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      hide-actions
      class="elevation-1"
      :loading="loading"
      no-data-text="暂无搜索结果"
    >
      <template v-slot:items="props">
        <td>{{ props.item.device_no }}</td>
        <td>{{ props.item.dorm_name }}</td>
        <td>
           <v-icon color="success" v-if="props.item.has_student">person</v-icon>
           <v-icon color="error" v-else>person</v-icon>
        </td>
        <td>{{ props.item.voltage }}</td>
        <td>{{ props.item.current }}</td>
        <td>{{ props.item.power }}</td>
        <td>
           <v-icon color="success" v-if="props.item.switch_status">toggle_on</v-icon>
           <v-icon color="error" v-else>toggle_off</v-icon>
        </td>
        <td>{{ props.item.update_time }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="currPage" :length="totalPages" :total-visible="7"></v-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default() {
          return []
        },
      },

      page: {
        type: Number,
        default: 1,
      },

      totalPages: {
        type: Number,
        default: 1,
      },

      loading: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        currPage: this.page,
        headers: [
          { text: '设备编号',align: 'left', sortable: false, value: 'device_no'},
          { text: '宿舍名称', sortable: false, value: 'dorm_name' },
          { text: '是否有人', sortable: false, value: 'has_student' },
          { text: '电压 (V)', sortable: false, value: 'voltage' },
          { text: '电流 (A)', sortable: false, value: 'current' },
          { text: '功率 (W)', sortable: false, value: 'power' },
          { text: '电源状态', sortable: false, value: 'switch_status' },
          { text: '更新时间', sortable: false, value: 'update_time' },
        ],
      }
    },

    computed: {

    },
    watch: {
        'currPage': function() {
            // 调用父组件种的方法，访问搜索api
            this.$emit('pageChange', this.currPage)
        }
    }
  }
</script>
