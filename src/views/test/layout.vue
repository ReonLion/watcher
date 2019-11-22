<template>
    <v-container class="fill-height pa-0 ma-0 fluid">
        <template>
            <v-layout row wrap>          
                <!-- 搜索结果 -->
                <v-flex md12 xs12>
                    <test-table 
                    ref="table"
                    ></test-table>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import TestTable from '@/components/tables/TestTable'
export default {
    components: {TestTable, },
    data(){
        return{

        }
    },

    created: function() {

    },

    methods: {

    },
}
</script>