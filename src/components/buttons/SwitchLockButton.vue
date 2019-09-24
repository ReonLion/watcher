<template>
    <v-btn :loading="loading" outline fab color="blue">
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
          localLock: null,
          loading: false,
      }
  },
  computed: {
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
      patchDormLock(this.dorm.id, !this.lock)
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
