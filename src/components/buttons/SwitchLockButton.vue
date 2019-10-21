<template>
    <v-btn outline fab color="blue">
      <v-icon @click="clicked" size="45px" :color="style.color">{{style.icon}}</v-icon>
    </v-btn>
</template>

<script>
import {patchDormLock,} from '@/api/api'
export default {
  props: {
      dorm: Object,
  },
  data() {
      return {
          // true说明不允许设备控制，false说明设备可以自己控制
          // lock: this.dorm.lock,
          // localLock: null,
          loading: false,
      }
  },
  computed: {
    status: function() {
      if (this.dorm.net_control_switch_status == null) {
        return this.dorm.switch_status
      }
      else {
        return this.dorm.net_control_switch_status
      }
    },
    lock: function() {
      return this.dorm.lock
    },
    style: function() {
      if (this.lock)
          return {
              color: 'error',
              icon: 'lock',
          }
      else
          return {
              color: 'success',
              icon: 'lock_open',
          }
    }
  },
  methods: {
    clicked: function() {
      console.log('*************************')
      console.log(!this.lock)
      console.log(this.status)
      this.loading = true
      patchDormLock(this.dorm.id, !this.lock, this.status)
      .then(
        () => {
          location.reload()
        }
      )
      .catch(
        () => {

        }
      )
    }
  }
}
</script>
