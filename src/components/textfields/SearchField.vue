<template>
    <v-text-field 
    append-icon="search" 
    class="mr-3" 
    label="搜索..."  
    hide-details 
    flat 
    color="purple" 
    solo 
    @keyup.enter="search" 
    @click:append="search"
    v-model="value"
    />
</template>

<script>
  export default {
      data() {
          return {
              value: null,
          }
      },
      methods: {
          search: function() {
              this.$router.push(
                  {
                      name: 'dormDetail',
                      query: {
                          search: this.value,
                          building_id: this.$route.query.building_id,
                          floor: this.$route.query.floor,
                      }
                  }
              )
          },
      },
      watch: {
          $route(to) {
              if(to.query.search) {
                  this.value = to.query.search
              }
              else {
                  this.value = null
              }
          },
      },
      created: function() {
          if(this.$route.query.search) {
              this.value = this.$route.query.search
          }
      }
  }
</script>
