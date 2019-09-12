<template>
  <v-breadcrumbs :items="items" class="my-1 ml-1 py-0" divider=">">
    <template v-slot:item="props">
      <v-breadcrumbs-item :to="props.item.to" exact :class="{'disabled': props.item.disabled}">
        <div :class="{'disabled': props.item.disabled, 'subtitle': true}">{{ props.item.text}}</div>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: '宿舍楼',
          disabled: false,
          to: {
            name: 'buildings',
          },
        },
        {
          text: '楼层',
          disabled: false,
          to: {
            name: 'floors',
            query: {
              building_id: null,
            }
          },
        },
        {
          text: '宿舍',
          disabled: false,
          to: {
            name: 'dorms',
            query: {
              building_id: null,
              floor: null
            }
          },
        },
      ],
    }),

    computed: {
      buildingsInfo: function() {
        return this.$store.state.buildingsInfo
      },
      floorsInfo: function() {
        return this.$store.state.floorsInfo
      },
      dormsInfo: function() {
        return this.$store.state.dormsInfo
      }
    },

    methods: {
      init: function(to) {
        // 禁用子路径
        if(to.name == 'buildings') {
          this.items[0].disabled = true
          this.items[1].disabled = true
          this.items[2].disabled = true
          // this.items[0].text = '宿舍楼'
          // this.items[1].text = '楼层'
          // this.items[2].text = '宿舍'
        }
        else if(to.name == 'floors') {
          this.items[0].disabled = false
          this.items[1].disabled = true
          this.items[2].disabled = true
          // if (this.floorsInfo.length)
          //   this.items[0].text = this.floorsInfo.floors[0].building_name
          // this.items[1].text = '楼层'
          // this.items[2].text = '宿舍'
        }
        else if(to.name == 'dorms') {
          this.items[0].disabled = false
          this.items[1].disabled = false
          this.items[2].disabled = true
          // if (this.dormsInfo.length) {
          //   this.items[0].text = this.dormsInfo.dorms[0].building_name
          //   this.items[1].text = this.dormsInfo.dorms[0].floor + '层'
          // }
          // this.items[2].text = '宿舍'
        }
        else if(to.name == 'dormDetail') {
          this.items[0].disabled = false
          this.items[1].disabled = false
          this.items[2].disabled = false
          // if (this.dormsInfo.length) {
          //   this.items[0].text = this.$store.state.dormsInfo.dorms[0].building_name
          //   this.items[1].text = this.$store.state.dormsInfo.dorms[0].floor + '层'
          //   this.items[2].text = this.$store.state.dormsInfo.dorms[0].name
          // }
        }
        // 传递url参数
        this.items[1].to.query.building_id = this.$route.query.building_id
        this.items[2].to.query.building_id = this.$route.query.building_id
        this.items[2].to.query.floor = this.$route.query.floor
      }
    },

    watch: {
      $route(to) {
        this.init(to)
      },

      // floorsInfo(to) {
      //   if (!to.loading && !to.floors.length) {
      //     console.log(to)
      //     if (this.$route.name == 'floors') {
      //       this.items[0].text = this.floors[0].building_name
      //     }
      //   }
      // },

      // dormsInfo(to) {
      //   if (!to.loading && !to.dorms.length) {
      //     if (this.$route.name == 'dorms') {
      //       this.items[0].text = this.dorms[0].building_name
      //       this.items[1].text = this.dorms[0].floor + '层'
      //     }
      //     else if (this.$route.name == 'dormDetail') {
      //       let dorm_id = this.$route.query.dorm_id
      //       for(let i=0; i < to.dorms.length; ++i) {
      //         if (to.dorms[i].dorm_id == dorm_id) {
      //           this.items[2].text = this.dorms[0].name
      //         }
      //       }
      //     }
      //   }
      // },

    },

    created: function() {
      this.init(this.$route)
    }
  }
</script>

<style>
  .disabled {
    color: grey;
    pointer-events: none;
  }
</style>