<template>
    <v-hover v-slot:default="{hover}">
        <v-card flat :to="to" :class="{'on-hover': hover, 'warning-box': warning}">
            <v-layout row py-1 ml-2 pl-3 :class="onlineClass">
                <v-flex xs2 md2>
                    <div class="caption grey--text">宿舍楼层</div>
                    <div>{{floorName}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">在线/总宿舍数</div>
                    <div>{{floor.online_dorms_num}}/{{floor.total_dorms_num}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">平均电流(A)</div>
                    <div>{{floor.current}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">平均功率(W)</div>
                    <div>{{floor.power}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">更新时间</div>
                    <div>09月03日 14:11</div>
                </v-flex>
                <v-flex xs1 md1 align-self-center>
                    <online-status-chip :tag='tag'></online-status-chip>
                </v-flex>
                <v-flex xs1 md1 align-self-center>
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
    props: {
        floor: Object,
    },
    components: {OnlineStatusChip,},
    data(){
        return{
            to: {
                name: "dorms",
                query: {
                    building_id: this.floor.building_id,
                    floor: this.floor.floor,
                },
            }
        }
    },
    computed: {
        onlineClass: function(){
            return getOnlineStyleClass(this.floor.online_dorms_num, this.floor.total_dorms_num)
        },
        tag: function(){
            return getOnlineStatus(this.floor.online_dorms_num, this.floor.total_dorms_num)
        },
        floorName: function(){
            return this.floor.building_name + '-' + this.floor.floor + '层'
        },
        warning: function() {
            return this.floor.warning_dorms_num > 0
        }
    }
}
</script>

