<template>
    <v-container class="fill-height pa-0 ma-0 fluid">
        <template>
            <v-layout row wrap>
                <!-- 搜索框 -->
                <v-flex md12 xs12>
                    <v-layout row>
                        <v-flex md6 xs12 ml-2 mb-1>
                            <search-form ref="form" @searchButtonClick="confirmSearchValue"></search-form>
                        </v-flex>
                        <v-flex md6 mb-1 v-if="!$vuetify.breakpoint.xsAndDown">
                            <search-background></search-background>
                        </v-flex>
                    </v-layout>
                </v-flex>
                
                <!-- 搜索结果 -->
                <v-flex md12 xs12>
                    <dorm-history-table 
                    ref="table"
                    :page="searchApiParams.page" 
                    :totalPages="totalPages" 
                    :data="response.results" 
                    :loading="loading" 
                    @pageChange="pageChange"
                    ></dorm-history-table>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import SearchBackground from '@/components/icon/SearchBackground'
import SearchForm from '@/components/forms/SearchForm'
import DormHistoryTable from '@/components/tables/DormHistoryTable'
import {getHistoryData, } from '@/api/api'
export default {
    components: {SearchForm, DormHistoryTable, SearchBackground, },
    data(){
        return{
            searchApiParams: {
                page: 1,
                startTime: null,
                endTime: null,
                searchValue: null,
                pageSize: 20,
            },
            response: {
                count: 0,
                results: [],
            },
            loading: false,
        }
    },

    computed: {
        totalPages: function() {
            return Math.ceil(this.response.count / this.searchApiParams.pageSize)
        }
    },

    methods: {
        confirmSearchValue: function() {
            // 将查询参数page设置为1
            this.searchApiParams.page = 1
            this.searchApiParams.startTime = this.$refs.form.startTime
            this.searchApiParams.endTime = this.$refs.form.endTime
            this.searchApiParams.searchValue =  this.$refs.form.searchValue
            // 将table的当前页面设置为1
            this.$refs.table.currPage = 1
            this.getData()
        },

        pageChange: function(currPage) {
            // 将查询参数page设置为子组件的currPage
            this.searchApiParams.page = currPage
            this.getData()
        },

        getData: function() {
            this.loading = true
            // 暂时先清楚数据结果
            this.response.results=[]
            getHistoryData(this.searchApiParams.page, this.searchApiParams.startTime, 
            this.searchApiParams.endTime, this.searchApiParams.searchValue, this.searchApiParams.pageSize)
            .then(response => {
                this.response.count = response.data.count
                this.response.results = response.data.results
                this.loading = false
            })
        },
    },

    watch: {

    }
}
</script>

