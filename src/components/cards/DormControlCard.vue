<template>
    <div height="173px" weight="100%" class="outlined">
        <div class="title text-xs-center my-1">{{dorm.name}}</div>
        <v-layout v-if="canControl" row wrap>
            <!-- <v-flex xs6 md6 class="text-xs-center">
                <lock-button :dorm="dorm"></lock-button>
            </v-flex> -->
            <v-flex xs12 md12 class="text-xs-center">
                <switch-button :dorm="dorm"></switch-button>
            </v-flex>
            <v-flex xs12 md12 class="text-xs-center">电源开关</v-flex>
        </v-layout>
        <div v-else class="text-xs-center">暂无信息</div>
        <!-- <div class="mt-2 px-1 font-weight-thin" style="font-size: 10px;">
            1.锁定按钮锁定表示远程设备不进行任何自我动作
        </div>
        <div class="mt-1 px-1 font-weight-thin" style="font-size: 10px;">
            2.开关按钮开表示打开宿舍电源，关表示关闭宿舍电压
        </div> -->
    </div>
</template>

<script>
// import LockButton from '@/components/buttons/SwitchLockButton'
import SwitchButton from '@/components/buttons/SwitchStatusButton'
export default {
    components: {SwitchButton},
    props: {
        dorm: Object,
    },
    data(){
        return{
            
        }
    },
    computed: {
        canControl: function() {
            return this.$store.state.userDetail.canControl
        },
    },
    created: function() {
        
    }
}
</script>
