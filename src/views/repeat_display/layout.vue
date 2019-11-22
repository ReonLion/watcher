<template>
    <v-container class="fill-height pa-0 ma-0 fluid">
        <template>
            <v-layout row wrap>          
                <!-- 搜索结果 -->
                <v-flex md12 xs12>
                    <repeat-display-table 
                    ref="table"
                    ></repeat-display-table>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import RepeatDisplayTable from '@/components/tables/RepeatDisplayTable'
export default {
    components: {RepeatDisplayTable, },
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

