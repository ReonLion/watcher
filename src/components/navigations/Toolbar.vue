<template>
<v-toolbar app flat dense>
    <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Watch</span>
        <span>er</span>
        <span class="font-weight-light">--{{name}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-flex align-center layout>
            <!--下拉菜单-->
            <v-menu offset-y>
                <v-btn slot="activator" flat>
                    <span>菜单</span>
                    <v-icon left>expand_more</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{link.text}}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <!-- 退出按钮 -->
            <v-btn flat color="black" @click="logout">
                <span>退出</span>
                <v-icon left>exit_to_app</v-icon>
            </v-btn>
        </v-flex>
    </v-toolbar-items>
    <!--退出按钮-->
</v-toolbar>
</template>

<script>
import cookie from '../../assets/js/cookie';
export default {
    data(){
        return{
        }
    },

    methods: {
        logout: function(){
            cookie.delCookie('token')
            cookie.delCookie('name')
            // 触发vuex
            this.$store.dispatch('setUserInfo')
            // 跳转到登录页面
            this.$router.replace({name: 'Login',})
        }
    },
    computed: {
        links: function() {
            return this.$store.state.homepageLinks
        },
        name: function() {
            return this.$store.state.userDetail.name
        },
    }
}
</script>


<style>
  .v-toolbar--dense .v-input__control {
    min-height: 38px !important;
  }
</style>

