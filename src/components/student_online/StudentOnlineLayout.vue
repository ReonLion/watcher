<template>
    <v-container class="fill-height pa-0 ma-0 fluid">
        <template v-if="!$vuetify.breakpoint.xsAndDown">
            <v-layout row>
                <v-flex lg8 md8 class="white">
                    <router-view name="list"></router-view>
                </v-flex>
                <v-flex lg4 md4>
                    <router-view name="profile"></router-view>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>
