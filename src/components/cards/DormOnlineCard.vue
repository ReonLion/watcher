<template>
    <v-card flat @mouseover="focous(dorm.name)" @click="dormDisplayChange(dorm.name)" class="pl-2 py-2"
    :class="{focous: dorm.name==focousName && dorm.name != selectedName,
    selected: dorm.name == selectedName}">
    <v-layout row wrap :class="`pl-3 dorm ${dorm.status}`">
        <v-flex xs3 md3>
        <div class="caption grey--text">宿舍</div>
        <div>{{dorm.name}}</div>
        </v-flex>
        <v-flex xs3 md3>
        <div class="caption grey--text">更新时间</div>
        <div>{{dorm.updateTime}}</div>
        </v-flex>
        <v-flex xs3 md3>
        <div class="caption grey--text">在线人数</div>
        <div>{{dorm.online}} / {{dorm.online + dorm.offline}}</div>
        </v-flex>
        <v-flex xs3 md3>
        <div>
            <v-chip small :class="`${dorm.status} white--text caption my-2`">{{trans[dorm.status]}}</v-chip>
        </div>
        </v-flex>
    </v-layout>
    </v-card>
</template>
