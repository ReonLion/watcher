<template>
    <v-hover v-slot:default="{hover}">
        <v-card flat :to="to" :class="{'on-hover': hover, 'warning-box': warning, 'selected': selected}"
        replace>
            <v-layout row py-1 ml-2 pl-3 :class="onlineClass">
                <v-flex xs2 md2>
                    <div class="caption grey--text">宿舍</div>
                    <div>{{dorm.name}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">是否有人在线</div>
                    <div>{{dorm.has_student}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">电流(A)</div>
                    <div>{{dorm.current}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">功率(W)</div>
                    <div>{{dorm.power}}</div>
                </v-flex>
                <v-flex xs2 md2>
                    <div class="caption grey--text">更新时间</div>
                    <div>09月03日 14:11</div>
                </v-flex>
                <v-flex xs1 md1 align-self-center>
                    <online-status-chip :tag='tag' :show_text="chip_show_text"></online-status-chip>
                </v-flex>
                <v-flex xs1 md1 align-self-center>
                    <v-icon right>keyboard_arrow_right</v-icon>
                </v-flex>
            </v-layout>
        </v-card>
    </v-hover>
</template>

<script>
import {getOnlineStatus,} from '@/assets/js/utils'
import OnlineStatusChip from '@/components/chips/OnlineStatusChip'
export default {
    props: {
        dorm: Object,
        selectedDormId: {
            type: Number,
            default: null,
        }
    },
    components: {OnlineStatusChip,},
    data(){
        return{
            to: {
                name: "dormDetail",
                query: {
                    dorm_id: this.dorm.id,
                    building_id: this.dorm.building_id,
                    floor: this.dorm.floor,
                    search: this.$route.query.search
                },
            },
            chip_show_text: false,
        }
    },
    computed: {
        onlineClass: function(){
            if (this.dorm.has_student)
                return 'border-all'
            else
                return 'border-none'
        },
        tag: function(){
            if (this.dorm.has_student)
                return getOnlineStatus(1, 1)
            else
                return getOnlineStatus(0, 1)
        },
        warning: function() {
            return this.dorm.is_warning
        },
        selected: function() {
            return this.dorm.id == this.selectedDormId
        }
    },
    methods: {

    }
}
</script>

