<template>
    <v-navigation-drawer app v-model="showDrawer"
    dark floating persistent mobile-break-point="991" width="200px">
        <v-img :src="image" :gradient="sidebarOverlayGradiant" height="100%">
            <v-layout column>
                <!-- 头像 -->
                <v-flex align-self-center class="mt-5">
                    <v-avatar :size="iconSize">
                        <v-img :src="employeeInfo.icon"></v-img>
                    </v-avatar>
                    <!-- 姓名学院等 -->
                    <div class="my-3 white--text text-xs-center title">{{employeeInfo.name}}</div>
                    <div class="my-3 white--text text-xs-center body-1">{{employeeInfo.department}}</div>
                </v-flex>
                <!-- 分割线 -->
                <v-divider style="border-width: 0.5px;"/>
                <!-- 导航连接 -->
                <v-flex class="mt-5">
                    <v-list-tile v-for="(link, i) in links" :key="i"
                    :to="link.route" :active-class="color">
                        <v-list-tile-action>
                            <v-icon>{{link.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title class="white--text text-xs-center">{{link.text}}</v-list-tile-title>
                    </v-list-tile>
                </v-flex>
            </v-layout>
        </v-img>
    </v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return{
            showDrawer: true,
            image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
            sidebarOverlayGradiant: 'rgba(27, 27, 27, 0.74),rgba(27, 27, 27, 0.74)',
            employeeInfo: {
                icon: "/avatar-6.jpg",
                name: "李慧颖",
                department: "自动化学院",
            },       
            iconSize: "100px",
            color: "success",
            links: [
               {icon: "home", text: "考\xa0\xa0\xa0\xa0勤", route: "/HomePage/StudentOnline"},
               {icon: "settings", text: "设\xa0\xa0\xa0\xa0置", route: "/HomePage/Settings"},
            ]
        }
    }
}
</script>
