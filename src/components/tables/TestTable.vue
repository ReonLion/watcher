<template>
    <vue-seamless-scroll :data="dorms" class="seamless-warp">
    <v-data-table :headers="headers" :items="dorms" hide-actions>
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>
            <v-icon color="success" v-if="props.item.infrared">wifi_tethering</v-icon>
            <v-icon color="error" v-else>wifi_tethering</v-icon>
        </td>
        <td>
            <v-icon color="success" v-if="props.item.bluetooth">bluetooth</v-icon>
            <v-icon color="error" v-else>bluetooth</v-icon>
        </td>
        <td>
          <v-icon color="success" v-if="props.item.has_student">person</v-icon>
          <v-icon color="error" v-else>person</v-icon>
        </td>
        <td>{{ props.item.current }}</td>
        <td>
          <v-icon color="success" v-if="props.item.switch_status">toggle_on</v-icon>
          <v-icon color="error" v-else>toggle_off</v-icon>
        </td>
        <td>
            <v-icon color="error" v-if="props.item.is_warning">warning</v-icon>
            <v-icon color="success" v-else>done</v-icon>
            <span class="error--text" v-if="props.item.is_warning">&nbsp;&nbsp;{{ props.item.warning_msg }}</span>
        </td>
        <td>{{ props.item.update_time }}</td>
      </template>
    </v-data-table>
    </vue-seamless-scroll>
</template>

<script>
import VueSeamlessScroll from 'vue-seamless-scroll'
import {getDormsInfo,} from '@/api/api'
  export default {
    components: {VueSeamlessScroll , },
    props: {

    },
    data () {
      return {
        dorms: [],
        // 设置为1分钟，即60000
        updateInterval: 10000,
        stop: false,
        headers: [
          { text: '宿舍名称', sortable: false, value: 'name' },
          { text: '红外检测', sortable: false, value: 'infrared' },
          { text: '蓝牙检测', sortable: false, value: 'bluetooth' },
          { text: '是否有人', sortable: false, value: 'has_student' },
          { text: '电流 (A)', sortable: false, value: 'current' },
          { text: '电源状态', sortable: false, value: 'switch_status' },
          { text: '安全信息', sortable: false, value: 'warning_msg' },
          { text: '更新时间', sortable: false, value: 'update_time' },
        ],
      }
    },

    created: function() {
      this.update()
    },

    methods: {
      getData: function() {
        getDormsInfo()
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
            })
        })
      },

      update: function() {
          if(this.stop) {
              return
          }
          this.getData()
          setTimeout(this.update, this.updateInterval)
      }
    },

    beforeDestroy: function() {
        this.stop = true
    }
  }
</script>

<style>
.seamless-warp {
  height: 95vh;
  overflow: hidden;
}
</style>
