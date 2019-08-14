<template>
    <v-hover v-slot:default="{hover}">
        <v-card flat :class="{'on-hover': hover}">
            <v-layout row py-1 ml-2 pl-3 :class="onlineClass">
                <v-flex xs2 md2>
                    <div class="caption grey--text">宿舍</div>
                    <div>{{dorm.name}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">在线人数</div>
                    <div>{{dorm.online_num}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">总人数</div>
                    <div>{{dorm.total_num}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">更新时间</div>
                    <div>2019.07.31 11:00</div>
                </v-flex>
                <v-flex xs2 md2 align-self-center>
                    <online-status-chip :tag='tag'></online-status-chip>
                </v-flex>
                <v-flex xs2 md2 align-self-center>
                    <v-icon right>keyboard_arrow_right</v-icon>
                </v-flex>
            </v-layout>
        </v-card>
    </v-hover>
    
</template>

<script>
import {getOnlineStatus, getOnlineStyleClass} from '@/assets/js/utils'
import OnlineStatusChip from '@/components/chips/OnlineStatusChip'
export default {
    props: [
        'dorm'
    ],
    components: {OnlineStatusChip,},
    data(){
        return{

        }
    },
    computed: {
        onlineClass: function(){
            return getOnlineStyleClass(this.dorm.online_num, this.dorm.total_num)
        },
        tag: function(){
            return getOnlineStatus(this.dorm.online_num, this.dorm.total_num)
        }
    }
}
</script>

