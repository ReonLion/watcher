<template>
  <div class="HomePage">
    
    <h1 class="subheading grey--text">HomePage</h1>
    <v-container class="my-5">
      <!--排序选框-->
      <v-layout row>
        <v-flex xs12 md4>
          <v-layout row wrap>
            <v-flex md3 text-md-center>
              <v-btn small flat color="grey" @click="sortBy('dormName')">
                <v-icon left small>sort</v-icon>
                <span class="caption">宿舍名称</span>
              </v-btn>
            </v-flex>
            <v-flex md3 text-md-center>
              <v-btn small flat color="grey" @click="sortBy('updateTime')">
                <v-icon left small>sort</v-icon>
                <span class="caption">更新时间</span>
              </v-btn>
            </v-flex>
            <v-flex md3 text-md-center>
              <v-btn small flat color="grey" @click="sortBy('onlineRate')">
                <v-icon left small>sort</v-icon>
                <span class="caption">出勤率</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!--宿舍信息-->
        <v-flex xs12 md8>
          <v-card flat class="pl-2 py-2" v-for="dorm in dorms" :key="dorm.name">
            <v-layout row wrap :class="`pl-3 dorm ${dorm.status}`">
              <v-flex xs12 md3>
                <div class="caption grey--text">宿舍</div>
                <div>{{dorm.name}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div class="caption grey--text">更新时间</div>
                <div>{{dorm.updateTime}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div class="caption grey--text">在线人数</div>
                <div>{{dorm.online}} / {{dorm.online + dorm.offline}}</div>
              </v-flex>
              <v-flex xs12 md3>
                <div>
                  <v-chip small :class="`${dorm.status} white--text caption my-2`">{{trans[dorm.status]}}</v-chip>
                </div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <!--单个宿舍详细信息-->
        <v-flex xs12 md4>
          <v-card color="red lighten-2" dark flat>
            <v-card-text>Hello</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dorms: [{name: "狮城公寓639", updateTime: "2019.06.14 00:29", online: 2, offline: 2, status: "partial"},
              {name: "狮城公寓640", updateTime: "2019.06.14 00:29", online: 3, offline: 1, status: "partial"},
              {name: "狮城公寓641", updateTime: "2019.06.14 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓642", updateTime: "2019.06.14 00:29", online: 4, offline: 0, status: "full"}], 
      trans: {empty: "空", full: "全勤", partial: "缺勤"},
    }
  },
  methods: {
    sortBy: function(prop)
    {
      this.dorms.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
    }
  }
}
</script>

<style>

.dorm.full{
  border-left: 4px solid #3CD1C2
}

.dorm.empty{
  border-left: 4px solid tomato
}

.dorm.partial{
  border-left: 4px solid orange
}

.v-chip.full{
  background: #3CD1C2
}

.v-chip.empty{
  background: tomato
}

.v-chip.partial{
  background: orange
}

</style>

