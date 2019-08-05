<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12 md12>
                <online-mini-statistics area="所有楼栋" online="1000" total="1200"></online-mini-statistics>
            </v-flex>
            <!-- <v-divider style="border-width: 0.5px; border-color: #3F51B5;"></v-divider> -->
            <v-flex xs12 md12 align-self-center>
                <ve-ring ref="chart" :data="chartData" :colors="chartColors" :legend-visible="false"></ve-ring>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import VeRing from 'v-charts/lib/ring.common'
import OnlineMiniStatistics from '@/components/student_online/OnlineMiniStatistics'
export default {
    components: {VeRing, OnlineMiniStatistics},
    data(){
        return{
            chartColors: ["#3CD1C2", "#ff6347"],
            chartData:{
                columns: ["status", "num"],
                rows: [
                    {"status": "在线", "num": "1000"},
                    {"status": "不在线", "num": "200"},
                ],
            }
        }
    },
    mounted: function(){
        // 视图渲染完毕后，容器宽度已知，调用echarts的resize方法
        // 否则，表图位置或者大小可能渲染出错
        this.$nextTick(function () {
            this.$refs['chart'].echarts.resize()
        });
    },
}
</script>

