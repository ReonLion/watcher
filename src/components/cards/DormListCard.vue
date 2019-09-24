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
                    <div>{{has_student_text}}</div>
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
                    <div>{{dorm.update_time}}</div>
                </v-flex>
                <v-flex xs1 md1 align-self-center>
                    <!-- <online-status-chip :tag='tag' :show_text="chip_show_text"></online-status-chip> -->
                    <v-chip small disabled :color="chipColor">
                        <span class="white--text">{{chipText}}</span>
                    </v-chip>
                </v-flex>
                <v-flex xs1 md1 align-self-center>
                    <v-icon right>keyboard_arrow_right</v-icon>
                </v-flex>
            </v-layout>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: {
        dorm: Object,
        selectedDormId: {
            type: Number,
            default: null,
        }
    },
    components: {},
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
        }
    },
    computed: {
        onlineClass: function(){
            if (this.dorm.has_student)
                return 'border-all'
            else
                return 'border-none'
        },
        has_student_text: function() {
            if (this.dorm.has_student)
                return '有'
            else
                return '无'
        },
        chipColor: function() {
            if(this.dorm.net_control_switch_status == null)
            {
                if(this.dorm.switch_status == true)
                    return 'success'
                else
                    return 'error'
            }
            else
            {
                if(this.dorm.net_control_switch_status == true)
                    return 'success'
                else
                    return 'error'
            }
        },
        chipText: function() {
            if(this.dorm.net_control_switch_status == null)
            {
                if(this.dorm.switch_status == true)
                    return '通电'
                else
                    return '断电'
            }
            else
            {
                if(this.dorm.net_control_switch_status == true)
                    return '通电'
                else
                    return '断电'
            }
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

