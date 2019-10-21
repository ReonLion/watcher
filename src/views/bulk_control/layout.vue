<template>
    <v-container class="fill-height pa-0 ma-0 fluid">
        <template>
            <v-layout row wrap>          
                <!-- 搜索结果 -->
                <v-flex md12 xs12>
                    <dorms-control-table 
                    ref="table"
                    ></dorms-control-table>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import DormsControlTable from '@/components/tables/DormsControlTable'
import {getDormsList, } from '@/api/api'
export default {
    components: {DormsControlTable, },
    data(){
        return{

        }
    },

    created: function() {

    },

    methods: {
        getData: function() {
            this.loading = true
            getDormsList()
            .then(response => {
                this.dorms = response.data
                // 遍历结果，更改宿舍电源状态的显示
                this.dorms.forEach(dorm => {
                    if (dorm.net_control_switch_status == null) {
                        // dorm.switch_status = dorm.switch_status
                    }
                    else {
                        dorm.switch_status = dorm.net_control_switch_status
                    }
                });
                this.loading = false
            })
        },
    },
}
</script>

