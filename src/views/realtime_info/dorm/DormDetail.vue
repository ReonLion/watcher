<template>
    <v-container fluid class="ma-0 pa-0">
        <v-layout v-if="(!loading) && (!empty)" row wrap>
            <v-flex xs6 md6 pl-1 pr-1>
                <dorm-control-card v-if="getDetailFlag" :dorm="dorm"></dorm-control-card>
            </v-flex>
            <v-flex xs6 md6 pr-1 pb-1>
                <safe-status-card v-if="getDetailFlag"  :is_warning="is_warning" :warning_msg="warning_msg"></safe-status-card>
            </v-flex>
            <div v-for="(student, i) in students" :key="i">
                <student-online-chip :name="student.name" :online="student.is_online"></student-online-chip>
            </div>
            <!-- <v-divider style="border-width: 0.5px; border-color: #3F51B5;"></v-divider> -->
            <v-flex v-if="getHistoryFlag" xs12 md12>
                <history-card :history="history"></history-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {getDorm24hHistory, getDormInfo, getDormStudents} from '@/api/api'
import HistoryCard from '@/components/cards/HistoryVerticalCard'
import SafeStatusCard from '@/components/cards/SafeStatusCard'
import DormControlCard from '@/components/cards/DormControlCard'
import StudentOnlineChip from '@/components/chips/StudentOnlineChip'
export default {
    components: {HistoryCard, SafeStatusCard, DormControlCard, StudentOnlineChip},
    data(){
        return{
            history: [],
            dorm: null,
            getHistoryFlag: false,
            getDetailFlag: false,
            students: [],
        }
    },
    computed: {
        dorm_id: function() {
            return this.$route.query.dorm_id
        },
        area: function(){
            return this.dorm.name
        },
        is_warning: function() {
            return this.dorm.is_warning
        },
        warning_msg: function() {
            return this.dorm.warning_msg
        },
        loading: function() {
            return this.$store.state.dormsInfo.loading
        },
        empty: function() {
            return this.$store.state.dormsInfo.dorms.length == 0
        },
    },
    methods: {
        getData: function() {
            this.getHistoryFlag = false
            this.getDetailFlag = false
            getDormInfo(this.$route.query.dorm_id)
            .then(
                (response) => {
                    this.getDetailFlag = true
                    this.dorm = response.data[0]
                }
            )

            getDormStudents(this.$route.query.dorm_id)
            .then(
                (response) => {
                    this.students = response.data
                }
            )

            getDorm24hHistory(this.$route.query.dorm_id)
            .then(
                (response) => {
                    this.getHistoryFlag = true
                    this.history = response.data
                }
            )
        }
    },
    watch: {
        $route() {
            this.getData()
        }
    },
    created: function(){
        this.getData()
    }
}
</script>
