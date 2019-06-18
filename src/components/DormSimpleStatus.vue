<template>
    <v-layout column>
        <v-flex xs12 md12 class="text-xs-center">
            <div class="caption grey--text">宿舍</div>
            <div class="subheading">{{dormName}}</div>
            <div class="caption grey--text">用电量</div>
            <div class="subheading">{{dormStatus.power}}度</div>
            <div class="caption grey--text">更新时间</div>
            <div class="subheading">{{dormStatus.updateTime}}</div>
        </v-flex>
        <v-divider style="border-width: 0.5px; border-color: #3F51B5;"></v-divider>
        <v-flex xs12 md12>
            <v-layout row wrap>
                <v-flex xs12 md6 v-for="(student,index) in students" :key="index">
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="80">
                                <img :src="student.avatar">
                            </v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="body-2">
                                <div v-if="student.status=='online'">
                                    <v-avatar size=10 class="teal success"></v-avatar>
                                    <span class="ml-1">{{student.name}}</span>
                                </div>
                                <div v-if="student.status=='offline'">
                                    <v-avatar size=10 class="teal error"></v-avatar>
                                    <span class="ml-1">{{student.name}}</span>
                                </div>
                            </div>
                            <div class="grey--text caption">电话 {{student.tel}}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>

    </v-layout>
</template>

<script>
export default {
    props: ["dormName"],
    data(){
        return {
            dormStatus: {name: "狮城公寓639", updateTime: "2019.06.14 00:29", power: "200.00"},
            students: [
                {name: "丁聪华", sex: "男", tel: "13850339999", status:"online", avatar: "/avatar-1.png"},
                {name: "张雨泽", sex: "男", tel: "17122282277", status:"online", avatar: "/avatar-2.png"},
                {name: "何昊宇", sex: "男", tel: "17122283311", status:"offline", avatar: "/avatar-4.png"},
                {name: "何瑞轩", sex: "男", tel: "17122285643", status:"offline", avatar: "/avatar-5.png"},
                {name: "胡益宁", sex: "男", tel: "17122282893", status:"online", avatar: "/avatar-6.jpg"}
            ]
        }
    }
}
</script>
