<template>
    <v-chip small disabled :color="color">
      <span v-if="show_text" class="white--text">{{text}}</span>
    </v-chip>
</template>

<script>
import {OnlineStatus,} from '@/assets/js/utils'

export default {
    props: {
        tag: OnlineStatus,
        show_text: {
            type: Boolean,
            default: true,
        },
    }, 

    data(){
        return{

        }
    },
    computed: {
        
    }
}
</script>
