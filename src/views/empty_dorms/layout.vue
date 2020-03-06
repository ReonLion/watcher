<template>
    <v-container class="fill-height pa-0 ma-0 fluid">
        <template>
            <v-layout row wrap>          
                <!-- 搜索结果 -->
                <v-flex md12 xs12>
                    <empty-dorm-table 
                    ref="table"
                    ></empty-dorm-table>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import EmptyDormTable from '@/components/tables/EmptyDormTable'
export default {
    components: {EmptyDormTable, },
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

