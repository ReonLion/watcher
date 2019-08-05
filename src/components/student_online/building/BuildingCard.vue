<template>
    <v-card flat :to="to">
        <v-layout row ml-2 pl-3 class="border-part">
            <v-flex xs2 md2>
                <div class="caption grey--text">宿舍楼</div>
                <div>{{building.name}}</div>
            </v-flex>
            <v-flex xs2 md2>
                <div class="caption grey--text">在线人数</div>
                <div>{{building.online}}</div>
            </v-flex>
            <v-flex xs2 md2>
                <div class="caption grey--text">总人数</div>
                <div>{{building.total}}</div>
            </v-flex>
            <v-flex xs4 md4>
                <div class="caption grey--text">更新时间</div>
                <div>2019.07.31 11:00</div>
            </v-flex>
            <v-flex xs2 md2 align-self-center>
                <v-icon right>keyboard_arrow_right</v-icon>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    props: [
        'building'
    ],
    data(){
        return{
            to: {
                name: "floors",
                params: {"building_id": 2},
            }
        }
    }
}
</script>

