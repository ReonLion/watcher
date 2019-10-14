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
        <td>{{ props.item.current }}</td>
        <td>{{ props.item.power }}</td>
        <td>
           <v-icon color="success" v-if="props.item.switch_status">toggle_on</v-icon>
           <v-icon color="error" v-else>toggle_off</v-icon>
        </td>
        <td>
          <div v-if="props.item.phone1_flag" class="success--text">{{props.item.phone1}}</div>
          <div v-else class="error--text">{{props.item.phone1}}</div>
        </td>
        <td>
          <div v-if="props.item.phone2_flag" class="success--text">{{props.item.phone2}}</div>
          <div v-else class="error--text">{{props.item.phone2}}</div>
        </td>
        <td>
          <div v-if="props.item.phone3_flag" class="success--text">{{props.item.phone3}}</div>
          <div v-else class="error--text">{{props.item.phone3}}</div>
        </td>
        <td>
          <div v-if="props.item.phone4_flag" class="success--text">{{props.item.phone4}}</div>
          <div v-else class="error--text">{{props.item.phone4}}</div>
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
          { text: '电流 (A)', sortable: false, value: 'current' },
          { text: '功率 (W)', sortable: false, value: 'power' },
          { text: '电源状态', sortable: false, value: 'switch_status' },
          { text: '电话1', sortable: false, value: 'phone1' },
          { text: '电话2', sortable: false, value: 'phone2' },
          { text: '电话3', sortable: false, value: 'phone3' },
          { text: '电话4', sortable: false, value: 'phone4' },
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
