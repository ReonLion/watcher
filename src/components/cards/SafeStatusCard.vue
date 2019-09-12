<template>
    <v-card flat color="light-blue" height="173px" class="rounded-card">
        <v-card-text class="pa-0">
            <v-layout row wrap>
                <v-flex xs3 md3>
                    <v-card flat :color="color" height="173px" width="50px" class="left-rounded-card">
                        <div class="layout fill-height align-center justify-center ma-0">
                            <v-icon size="50px" color="white">{{icon}}</v-icon>
                        </div>
                    </v-card>
                </v-flex>
                <v-flex xs9 md9>
                    <div class="text-xs-center white--text pt-2">
                        <div class="subtitle-1 pb-1">安全通知</div>
                        <v-divider style="border-width: 0.5px;"></v-divider>
                        <span class="caption">{{warning_msg}}</span>
                    </div>
                </v-flex>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        is_warning: {
            type: Boolean,
            default: false,
        },
        warning_msg: {
            type: String,
            default: '暂无用电安全信息'
        }
    },
    data(){
        return{

        }
    },
    computed: {
        color: function(){
            if(this.is_warning===true)
                return "error"
            else
                return "success"
        },
        icon: function(){
            if(this.is_warning===true)
                return "warning"
            else
                return "done"
        },
    }
}
</script>
