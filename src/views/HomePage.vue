<template>
  <div class="HomePage">
    
    <h1 class="subheading grey--text">HomePage</h1>
    <v-container class="my-5">
      <!--排序选框-->
      <v-layout row>
        <v-flex xs12 md4>
          <v-layout row wrap>
            <v-flex md3 text-md-center>
              <v-tooltip top>
                <v-btn id="sortByDormName" small flat color="grey" @click="sortBy('dormName')" slot="activator">
                <v-icon left small class="ma-1">sort</v-icon>
                <span class="caption">宿舍名称</span>
              </v-btn>
              <span>根据宿舍名称进行排序</span>
              </v-tooltip>
            </v-flex>
            <v-flex md3 text-md-center>
              <v-tooltip top>
                <v-btn id="sortByUpdateTime" small flat color="grey" @click="sortBy('updateTime')" slot="activator">
                <v-icon left small class="ma-1">sort</v-icon>
                <span class="caption">更新时间</span>
              </v-btn>
              <span>根据数据更新时间排序</span>
              </v-tooltip> 
            </v-flex>
            <v-flex md3 text-md-center>
              <v-tooltip top>
                <v-btn id="sortByOnlineRate" small flat color="grey" @click="sortBy('onlineRate')" slot="activator">
                <v-icon left small class="ma-1">sort</v-icon>
                <span class="caption">出勤率</span>
              </v-btn>
              <span>根据在宿舍的人数排序</span>
              </v-tooltip>
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
function createDate(string)
{
  let a, b, year, month, day, hour, minute;
  [a, b] = string.split(" ");
  [year, month, day] = a.split(".");
  [hour, minute] = b.split(":");
  return new Date(year, month, day, hour, minute);
}
export default {
  data() {
    return {
      dorms: [{name: "狮城公寓640", updateTime: "2019.06.14 00:29", online: 2, offline: 2, status: "partial"},
              {name: "狮城公寓639", updateTime: "2019.06.13 00:29", online: 3, offline: 1, status: "partial"},
              {name: "狮城公寓641", updateTime: "2019.06.15 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓642", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"}], 
      trans: {empty: "无人", full: "全勤", partial: "缺勤"},
      sortState: null,
    }
  },
  methods: {
    sortBy: function(prop)
    {
      if(prop == this.sortState)
      {
        // 点击相同的排序按钮，反序
        this.dorms.reverse();
      }
      else if(prop == "dormName")
      {
        this.dorms.sort((a, b) => a["name"] < b["name"] ? -1 : 1);
        this.sortState = "dormName";
      }
      else if(prop == "updateTime")
      {
        this.dorms.sort(function(a, b){
          let aDate = new createDate(a["updateTime"]);
          let bDate = new createDate(b["updateTime"]);
          return aDate.getTime() - bDate.getTime();
        });
        this.sortState = "updateTime";
      }
      else if(prop == "onlineRate")
      {
        this.dorms.sort((a, b) => a["online"]/(a["online"]+a["offline"]) < b["online"]/(b["online"]+b["offline"]) ? -1 : 1);
        this.sortState = "onlineRate";
      }
    }
  },
  // 初始化
  mounted(){
    this.sortBy("dormName");
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

