<template>
    <v-btn outline fab color="blue">
      <v-icon @click="clicked" size="50px" :color="style.color">{{style.icon}}</v-icon>
    </v-btn>
</template>

<script>
export default {
  props: {
      dorm: Object,
  },
  data() {
      return {
          // false说明电源关闭
          status: this.dorm.switch_status
      }
  },
  computed: {
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
      // 如果是打开电源状态
      if (this.status) {
        // send something
        this.status = false
      }
      // 如果是关闭电源状态
      else {
        // send something
        this.status = true
      }
    }
  }
}
</script>
