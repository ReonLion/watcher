<template>
    <v-container class="fill-height pa-0 ma-0 fluid">
        <template v-if="!$vuetify.breakpoint.xsAndDown">
            <v-layout row wrap>
                <v-flex lg8 md8 sm8 class="white">
                    <!-- 搜索导航栏 -->
                    <v-layout row wrap>
                        <v-flex lg8 md8 sm8 xs8 align-self-center>
                            <dorm-breadcrumbs></dorm-breadcrumbs>
                        </v-flex>
                        <v-flex lg4 md4 sm4 xs4>
                            <!--搜索-->
                            <search-field></search-field>
                        </v-flex>
                    </v-layout>
                    <!-- list -->
                    <router-view name="list"></router-view>
                </v-flex>
                <v-flex lg4 md4 sm4>
                    <!-- profile -->
                    <router-view name="profile"></router-view>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import DormBreadcrumbs from '@/components/breadcrumbs/DormBreadcrumbs'
import SearchField from '@/components/textfields/SearchField'
export default {
    components: {DormBreadcrumbs, SearchField},
    data(){
        return{
            breadcrumbs: [
                {
                    text: '宿舍楼',
                    disabled: false,
                    to: 'buildings'
                },
                {
                    text: '宿舍楼',
                    disabled: false,
                    to: 'buildings',
                }
            ]
        }
    },
}
</script>

