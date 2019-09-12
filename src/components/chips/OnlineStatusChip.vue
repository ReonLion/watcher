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
        color: function(){
            if(this.tag==OnlineStatus.NONE)
                return 'error'
            else if(this.tag==OnlineStatus.PART)
                return 'warning'
            else if(this.tag==OnlineStatus.ALL)
                return 'success'
            else
                return null
        },
        text: function(){
            if(this.tag==OnlineStatus.NONE)
                return 'NONE'
            else if(this.tag==OnlineStatus.PART)
                return 'PART'
            else if(this.tag==OnlineStatus.ALL)
                return 'ALL'
            else
                return null
        }
    }
}
</script>
