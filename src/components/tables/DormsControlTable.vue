<template>
  <v-card>
    <v-snackbar v-model="showWarning" top color="error" :timeout="timeout">操作失败，请重试</v-snackbar>
    <v-card-title class="mb-0 pb-0">
      <v-overflow-btn v-model="temp1"
        small 
        :items="actions"
        segmented target="#dropdown-example"
        :label="selectText"
      ></v-overflow-btn>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="查找宿舍..." small></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="dorms" :search="search"
    v-model="selected" item-key="id" select-all
    :rows-per-page-items="rowsPerPage">
      <template v-slot:items="props">
        <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.name }}</td>
        <td>
          <v-icon color="success" v-if="props.item.has_student">person</v-icon>
          <v-icon color="error" v-else>person</v-icon>
        </td>
        <td>{{ props.item.current }}</td>
        <td>{{ props.item.power }}</td>
        <td>
          <v-icon color="error" v-if="props.item.lock">lock</v-icon>
          <v-icon color="success" v-else>lock_open</v-icon>
        </td>
        <td>
          <v-icon color="success" v-if="props.item.switch_status">toggle_on</v-icon>
          <v-icon color="error" v-else>toggle_off</v-icon>
        </td>
        <td>{{ props.item.update_time }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          您搜索的内容 "{{search}}" 暂无匹配宿舍
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {getDormsList, LockDorms, unlockDorms, openDorms, closeDorms} from '@/api/api'
  export default {
    props: {

    },
    data () {
      return {
        dorms: [],
        loading: false,
        showWarning: false,
        timeout: 2000,
        rowsPerPage: [20, 40, 80, {"text":"全部","value":-1} ],
        temp1: null,
        search: "",
        selected: [],
        selectedDormsId: [],
        headers: [
          { text: '宿舍名称', sortable: true, value: 'name' },
          { text: '是否有人', sortable: false, value: 'has_student' },
          { text: '电流 (A)', sortable: false, value: 'current' },
          { text: '功率 (W)', sortable: false, value: 'power' },
          { text: '远程锁定', sortable: false, value: 'lock' },
          { text: '电源状态', sortable: false, value: 'switch_status' },
          { text: '更新时间', sortable: false, value: 'update_time' },
        ],
        actions: [
          { text: '锁定远程设备', callback: () => this.lockSelected() },
          { text: '解锁远程设备', callback: () => this.unlockSelected() },
          { text: '打开宿舍电源', callback: () => this.openSelected() },
          { text: '关闭宿舍电源', callback: () => this.closeSelected() }
      ],
      }
    },

    created: function() {
      this.getData()
    },

    methods: {
      lockSelected() {
        LockDorms(this.selectedDormsId)
        .then(
          () => {
            this.temp1 = null
            this.getData()
          }
        )
        .catch(
          () => {
            this.showWarning = true
          }
        )
      },

      unlockSelected() {
        unlockDorms(this.selectedDormsId)
        .then(
          () => {
            this.temp1 = null
            this.getData()
          }
        )
        .catch(
          () => {
            this.showWarning = true
          }
        )
      },

      openSelected() {
        openDorms(this.selectedDormsId)
        .then(
          () => {
            this.temp1 = null
            this.getData()
          }
        )
        .catch(
          () => {
            this.showWarning = true
          }
        )
      },

      closeSelected() {
        closeDorms(this.selectedDormsId)
        .then(
          () => {
            this.temp1 = null
            this.getData()
          }
        )
        .catch(
          () => {
            this.showWarning = true
          }
        )
      },

      getData: function() {
        this.loading = true
        getDormsList()
        .then(response => {
            this.dorms = response.data
            // 遍历结果，更改宿舍电源状态的显示
            this.dorms.forEach(dorm => {
                if (dorm.net_control_switch_status == null) {
                    // dorm.switch_status = dorm.switch_status
                }
                else {
                    dorm.switch_status = dorm.net_control_switch_status
                }
            });
            this.loading = false
        })
      },
    },

    computed: {
      selectText: function() {
        return '选择' + this.selected.length + '项进行操作'
      }
    },
    watch: {
      selected: function(to) {
        this.selectedDormsId = []
        // 生成post内容
        to.forEach(e => {
          this.selectedDormsId.push(e.id)
        })
      }
    }
  }
</script>
