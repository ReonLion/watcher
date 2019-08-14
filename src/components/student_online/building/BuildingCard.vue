<template>
    <v-hover v-slot:default="{hover}">
        <v-card flat :to="to" :class="{'on-hover': hover}">
            <v-layout row py-1 ml-2 pl-3 :class="onlineClass">
                <v-flex xs2 md2>
                    <div class="caption grey--text">宿舍楼</div>
                    <div>{{building.name}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">在线人数</div>
                    <div>{{building.online_num}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">总人数</div>
                    <div>{{building.total_num}}</div>
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
        'building'
    ],
    components: {OnlineStatusChip,},
    data(){
        return{
            to: {
                name: "floors",
                params: {"building_id": this.building.id},
            }
        }
    },
    computed: {
        onlineClass: function(){
            return getOnlineStyleClass(this.building.online_num, this.building.total_num)
        },
        tag: function(){
            return getOnlineStatus(this.building.online_num, this.building.total_num)
        }
    }
}
</script>

