<template>
    <v-chip small disabled :color="color">
      <span class="white--text">{{text}}</span>
    </v-chip>
</template>

<script>
import {OnlineStatus,} from '@/assets/js/utils'

export default {
    props: [
        'tag'
    ],
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
                return '无人'
            else if(this.tag==OnlineStatus.PART)
                return '缺勤'
            else if(this.tag==OnlineStatus.ALL)
                return '全勤'
            else
                return null
        }
    }
}
</script>
