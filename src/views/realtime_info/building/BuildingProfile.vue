<template>
    <v-container fluid class="ma-0 pa-0">
        <v-layout row wrap>
            <v-flex xs6 md6 pl-1 pr-1>
                <safe-status-card :is_warning="is_warning" :warning_msg="warning_msg"></safe-status-card>
            </v-flex>
            <v-flex xs6 md6 pr-1 pb-1>
                <online-mini-statistics area="所有楼栋" :online="online_dorms_num" 
                :total="total_dorms_num"></online-mini-statistics>
            </v-flex>
            <!-- <v-divider style="border-width: 0.5px; border-color: #3F51B5;"></v-divider> -->
            <v-flex v-if="getHistoryFlag" xs12 md12>
                <history-card :history="history"></history-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import {getAll24hHistory, } from '@/api/api'
import HistoryCard from '@/components/cards/HistoryVerticalCard'
import SafeStatusCard from '@/components/cards/SafeStatusCard'
import OnlineMiniStatistics from '@/components/cards/OnlineMiniStatistics'
export default {
    components: {HistoryCard, OnlineMiniStatistics, SafeStatusCard},
    data(){
        return{
            history: [],
            getHistoryFlag: false,
        }
    },
    computed: {
        online_dorms_num: function(){
            return this.$store.state.buildingsInfo.online_dorms_num
        },
        total_dorms_num: function(){
            return this.$store.state.buildingsInfo.total_dorms_num
        },
        is_warning: function() {
            return this.$store.state.buildingsInfo.warning_dorms_num > 0
        },
        warning_msg: function() {
            if (this.is_warning)
                return '有用电异常，请及时处理'
            else
                return '暂无用电安全信息'
        }
    },
    created: function(){
        getAll24hHistory()
        .then(
            (response) => {
                this.getHistoryFlag = true
                this.history = response.data
            }
        )
    }
}
</script>

