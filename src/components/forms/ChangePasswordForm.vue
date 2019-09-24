<template>
    <v-form ref="form">
        <v-layout row wrap class="my-0 pa-0" justify-center>
            <v-flex xs8 md8>
                <v-text-field v-model="text" label="密码" readonly></v-text-field>
            </v-flex>
            <v-flex xs4 md4 pl-5>
                <v-btn v-if="email==null || email==''" disabled color="success" 
                large depressed>请先绑定邮箱</v-btn>
                <v-btn v-else :loading="loading" color="success" 
                @click.stop="changePassword=true" large depressed>更改密码</v-btn>
                <!-- 加入v-if, 每次打开dialog都重新创建，不保存上一次的值 -->
                <change-password-dialog v-if="changePassword" :show.sync="changePassword"></change-password-dialog>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
import ChangePasswordDialog from '@/components/dialogs/ChangePasswordDialog'

export default {
    components: {ChangePasswordDialog,},
    props: {

    },
    data() {
        return {
            text: '*********',
            loading: false,
            changePassword: false,
        }
    },
    computed: {
        username: function() {
          return this.$store.state.userDetail.username
        },

        email: function() {
          return this.$store.state.userDetail.email
        },

        emailText: function() {
            if (this.email == null || this.email=='') {
                return '暂未绑定邮箱'
            }
            else {
                return this.email
            }
        },
    },
    methods: {

    }
}
</script>