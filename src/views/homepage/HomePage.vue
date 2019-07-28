<template>
  <div class="HomePage">
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/navigations/Navbar'
import {getSchools,} from '../../api/api'

function createDate(string)
{
  let a, b, year, month, day, hour, minute;
  [a, b] = string.split(" ");
  [year, month, day] = a.split(".");
  [hour, minute] = b.split(":");
  return new Date(year, month, day, hour, minute);
}
export default {
  components: {NavBar},
  data() {
    return {
      dorms: [{name: "狮城公寓640", updateTime: "2019.06.14 00:29", online: 2, offline: 2, status: "partial"},
              {name: "狮城公寓639", updateTime: "2019.06.13 00:29", online: 3, offline: 1, status: "partial"},
              {name: "狮城公寓641", updateTime: "2019.06.15 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓642", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓643", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓644", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓645", updateTime: "2019.06.15 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓646", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓647", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓648", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓649", updateTime: "2019.06.15 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓650", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓651", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓652", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓653", updateTime: "2019.06.15 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓654", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓655", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓656", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓657", updateTime: "2019.06.15 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓658", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓659", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓660", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓661", updateTime: "2019.06.15 00:29", online: 0, offline: 4, status: "empty"},
              {name: "狮城公寓662", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓663", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},
              {name: "狮城公寓664", updateTime: "2019.06.14 01:29", online: 4, offline: 0, status: "full"},], 
      trans: {empty: "无人", full: "全勤", partial: "缺勤"},
      sortState: null,
      focousName: null,
      selectedName: null,
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
    },

    dormDisplayChange: function(name){
      this.selectedName = name;
    },

    focous: function(name){
      this.focousName = name;
    },

    unfocous: function(){
      
    }
  },
  // 初始化
  mounted(){
    this.sortBy("dormName");
    this.selectedName = this.dorms[0].name;
  },
  // 检测是否登陆
  created(){
    getSchools()
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

.scroll {
  height: 85vh;
  overflow-y: auto;
}

.v-card.focous {
  background: #3CD1C2;
}

.v-card.selected {
  background: #7986CB;
}

</style>

