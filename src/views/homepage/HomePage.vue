<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg3 sm6 xs12>
        <home-mini-statistic color="indigo" icon="fa fa-address-book-o" :title="totalDormNum" sub-title="宿舍"></home-mini-statistic>
      </v-flex>
      <v-flex lg3 sm6 xs12>
        <home-mini-statistic color="success" icon="fa fa-key" :title="onlineDormNum" sub-title="在线宿舍"></home-mini-statistic>
      </v-flex>
      <v-flex lg3 sm6 xs12>
        <home-mini-statistic color="warning" icon="fa fa-hourglass-end" :title="offlineDormNum" sub-title="离线宿舍"></home-mini-statistic>
      </v-flex>
      <v-flex lg3 sm6 xs12>
        <home-mini-statistic color="error" icon="fa fa-warning" :title="warningDormNum" sub-title="宿舍用电异常"></home-mini-statistic>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-5 v-if="getHistoryFlag">
      <template v-for="(building, index) in buildings">
          <v-flex md4 sm6 xs12 :key="index + '_'">
            <complex-chart card-color="amber darken-4" title="24小时电流趋势图" sub-title="电流(A)"
            bottom-title="最大电流(A)" :bottom-sub-title="building.name" 
            :bottom-content="getMaxValue(buildingsHistory[index], 'max_current')"
            :data="buildingsHistory[index]" :dimensions="dimensions[0]"></complex-chart>
          </v-flex>
          <v-flex md4 sm6 xs12 :key="index + '__'">
            <complex-chart card-color="indigo" title="24小时功率趋势图" sub-title="功率(W)"
            bottom-title="最大功率(W)" :bottom-sub-title="building.name" 
            :bottom-content="getMaxValue(buildingsHistory[index], 'max_power')"
            :data="buildingsHistory[index]" :dimensions="dimensions[1]"></complex-chart>
          </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import HomeMiniStatistic from '@/components/cards/HomeMiniStatistic'
import ComplexChart from '@/components/charts/ComplexChart'
import {getBuilding24hHistory, } from '@/api/api'
import {getMaxValue, } from '@/assets/js/utils'

export default {
  components: {HomeMiniStatistic, ComplexChart},

  data() {
    return {
      getHistoryFlag: false,
      buildingsHistory: [],
      dimensions: [
        [
          { name: 'sample_update_time', displayName: '时间'}, 
          { name: 'avg_current', displayName: '电流'}, 
        ],
        [
          { name: 'sample_update_time', displayName: '时间'}, 
          { name: 'avg_power', displayName: '功率'}, 
        ]
      ]
    }
  },

  computed: {
    buildings: function() {
      return this.$store.state.buildingsInfo.buildings
    },

    totalDormNum: function() {
      return this.$store.state.buildingsInfo.total_dorms_num
    },

    onlineDormNum: function() {
      return this.$store.state.buildingsInfo.online_dorms_num
    },

    offlineDormNum: function() {
      return this.totalDormNum - this.onlineDormNum
    },

    warningDormNum: function() {
      return this.$store.state.buildingsInfo.warning_dorms_num
    }
  },

  watch: {
    buildings: function() {
      // 如果没有buildings则直接返回，否则会报错
      if(this.buildings.length === 0)
        return
      let promises = []
      for (let building of this.buildings) {
        let promise = getBuilding24hHistory(building.id)
        promises.push(promise)
      }
      // 清空上次的内容
      this.buildingsHistory = []
      Promise.all(promises)
      .then(
        (res) => {
          for (let response of res) {
            this.buildingsHistory.push(response.data)
          }
          this.getHistoryFlag = true
        }
      )
    }
  },

  created: function() {
    // 同步清除vuex中dormsInfo数据
    this.$store.commit('CLEAR_BUILDINGS_INFO')
    // 异步更新vuex中buildingsInfo数据
    this.$store.dispatch('setBuildingsInfo')
  },

  methods: {
    getMaxValue: function(listObj, key) {
      console.log(getMaxValue(listObj, key))
      return getMaxValue(listObj, key)
    }
  }
}
</script>
