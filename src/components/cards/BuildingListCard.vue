<template>
    <v-hover v-slot:default="{hover}">
        <v-card flat :to="to" :class="{'on-hover': hover, 'warning-box': warning}">
            <v-layout row py-1 ml-2 pl-3 :class="onlineClass">
                <v-flex xs2 md2>
                    <div class="caption grey--text">宿舍楼</div>
                    <div>{{building.name}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">在线/总宿舍数</div>
                    <div>{{building.online_dorms_num}}/{{building.total_dorms_num}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">平均电流(A)</div>
                    <div>{{building.current}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">平均功率(W)</div>
                    <div>{{building.power}}</div>
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
        building: Object,
    },
    components: {OnlineStatusChip,},
    data(){
        return{
            to: {
                name: "floors",
                query: {
                    building_id: this.building.id, 
                },
            }
        }
    },
    computed: {
        onlineClass: function(){
            return getOnlineStyleClass(this.building.online_dorms_num, this.building.total_dorms_num)
        },
        tag: function(){
            return getOnlineStatus(this.building.online_dorms_num, this.building.total_dorms_num)
        },
        warning: function() {
            return this.building.warning_dorms_num > 0
        }
    }
}
</script>

