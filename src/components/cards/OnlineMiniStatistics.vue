<template>
    <v-layout row wrap>
        <v-flex xs12 md12 mb-1>
            <mini-statistic icon="people" color="info" title="区域" :content="area"></mini-statistic>
        </v-flex>
        <v-flex xs12 md12 mb-1>
            <mini-statistic icon="person" color="success" title="有人宿舍" :content="onlineStr"></mini-statistic>
        </v-flex>
        <v-flex xs12 md12>
            <mini-statistic icon="person_outline" color="error" title="无人宿舍" :content="offlineStr"></mini-statistic>
        </v-flex>
    </v-layout>
</template>

<script>
import MiniStatistic from '@/components/cards/MiniStatistic'
export default {
    components: {MiniStatistic,},
    props: {
        area: String,
        online: Number,
        total: Number,
    },
    computed: {
        onlineStr: function(){
            try{
                return this.online.toString()
            }
            catch(err){
                return null
            }
        },
        offlineStr: function(){
            try{
                return (this.total-this.online).toString()
            }
            catch(err){
                return null
            }
        }
    }
}
</script>

