<template>
    <div>
        <box-chart :data="history" :dimensions="dimensions[0]" card-color="amber darken-4" 
        title="24小时电流趋势图"  sub-title="单位(A)" icon="trending_up"
        :chart-color="[color.shades.white]" type="line"
        class="mb-1">
        </box-chart>
        <box-chart :data="history" :dimensions="dimensions[1]" card-color="indigo" 
        title="24小时功率趋势图"  sub-title="单位(W)" icon="trending_up"
        :chart-color="[color.shades.white]" type="line">
        </box-chart>
    </div>
</template>

<script>
import BoxChart from '@/components/charts/BoxChart'
import Material from "vuetify/es5/util/colors"

export default {
    components: {BoxChart, },
    props: {
        history: Array,
    },
    data(){
        return{
            color: Material,
            dimensions: [
                [
                    { name: 'sample_update_time', displayName: '时间'}, 
                    { name: 'avg_current', displayName: '电流'}, 
                ],
                [
                    { name: 'sample_update_time', displayName: '时间'}, 
                    { name: 'avg_power', displayName: '功率'}, 
                ]
            ],
        }
    },
    computed: {

    }
}
</script>
