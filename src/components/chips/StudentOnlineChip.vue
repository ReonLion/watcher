<template>
  <div class="text-xs-center">
    <v-chip :color="color" text-color="white">
      <v-avatar>
        <v-icon>account_circle</v-icon>
      </v-avatar>
      {{ name }}
    </v-chip>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '',
        },
        online: {
            type: Boolean,
            default: false,
        }
    }, 

    data(){
        return{

        }
    },
    computed: {
        color: function(){
            if(this.online) {
                return "success"
            }
            else {
                return "error"
            }
        },
    }
}
</script>
