<template>
    <v-btn outline large fab color="blue">
      <v-icon @click="clicked" size="65px" :color="style.color">{{style.icon}}</v-icon>
    </v-btn>
</template>

<script>
import {patchDormNetSwitch, } from '@/api/api'
export default {
  props: {
      dorm: Object,
  },
  data() {
      return {
        
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
    style: function() {
      if (this.status)
          return {
              color: 'success',
              icon: 'toggle_on',
          }
      else
          return {
              color: 'error',
              icon: 'toggle_off',
          }
    }
  },
  methods: {
    clicked: function() {
      patchDormNetSwitch(this.dorm.id, !this.status)
      .then(
        () => {
          location.reload()
        }
      )
    }
  }
}
</script>
