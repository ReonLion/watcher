<template>
    <nav>
        <!--顶部信息-->
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Watch</span>
                <span>er</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!--下拉菜单-->
            <v-menu offset-y>
                <v-btn slot="activator" flat color="grey">
                    <v-icon left>expand_more</v-icon>
                    <span>菜单</span>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{link.text}}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <!--退出按钮-->
            <v-btn flat color="grey">
                <span>退出</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <!--头像-->
            <v-layout column align-center>
                <v-flex xs12 class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-3.png">
                    </v-avatar>
                </v-flex>
                <v-flex xs12 class="">
                    <p class="subheading white--text mt-2">李丽颖</p>
                </v-flex>
                <v-flex xs12>
                    <!--选项列表-->
                    <v-list>
                        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-tile-action>
                                <v-icon class="white--text">{{link.icon}}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-flex>
            </v-layout>
            
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: true,
            links: [
               {icon: "home", text: "首\xa0\xa0\xa0\xa0页", route: "/HomePage"},
               {icon: "settings", text: "设\xa0\xa0\xa0\xa0置", route: "/Settings"},
            ]
        }
    }
}
</script>
