<template>
    <v-form ref="form">
        <v-layout row wrap class="my-0 pa-0 outlined-form">
            <v-flex xs12 md12 mr-2>
                <date-time-picker ref="startTimePicker" dateTextFieldLabel="起始日期" timeTextFieldLabel="起始时间"></date-time-picker>
            </v-flex>
            <v-flex xs12 md12 mr-2>
                <date-time-picker ref="endTimePicker" dateTextFieldLabel="结束日期" timeTextFieldLabel="结束时间"></date-time-picker>
            </v-flex>
            <v-flex xs6 md6>
                <v-text-field v-model="searchValue" label="搜索..." prepend-icon="search"></v-text-field>
            </v-flex>
            <v-flex xs6 md6 align-self-center text-xs-center>
                <v-btn color="success" @click="validate">搜索</v-btn>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
import DateTimePicker from '@/components/pickers/DateTimePicker'
import moment from 'moment-timezone'
export default {
    components: {DateTimePicker,},
    data: () => ({
        startTime: null,
        endTime: null,
        searchValue: null,
    }),

    methods: {
        validate: function() {
            // 如果表单验证通过
            if(this.$refs.form.validate()) {
                this.startTime = this.$refs.startTimePicker.datetime
                this.endTime = this.$refs.endTimePicker.datetime
                // endTime的秒设置为59
                console.log(this.endTime)
                this.endTime = this.endTime.substr(0, this.endTime.length-2) + '59'
                console.log(this.endTime)
                // 调用父组件种的方法，访问搜索api
                this.$emit('searchButtonClick')
            }
        }
    },

    mounted: function() {
        let now = moment().tz('Asia/Shanghai').format()
        this.$refs.endTimePicker.date = now.substr(0, 10)
        this.$refs.endTimePicker.time = now.substr(11, 5)
    }
}
</script>

