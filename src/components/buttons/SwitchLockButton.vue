<template>
    <v-btn outline fab color="blue">
      <v-icon @click="clicked" size="45px" :color="style.color">{{style.icon}}</v-icon>
    </v-btn>
</template>

<script>
export default {
  props: {
      dorm: Object,
  },
  data() {
      return {
          // true说明不允许设备控制，false说明设备可以自己控制
          lock: this.dorm.lock
      }
  },
  computed: {
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
      // 如果是锁定状态
      if (this.lock) {
        // send something
        this.lock = false
      }
      else {
        // send something
        this.lock = true
      }
    }
  }
}
</script>
