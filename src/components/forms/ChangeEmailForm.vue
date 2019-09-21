<template>
    <v-form ref="form">
        <v-layout row wrap class="my-0 pa-0" justify-center>
            <v-flex xs8 md8>
                <v-text-field v-model="emailText" label="邮箱" readonly></v-text-field>
            </v-flex>
            <v-flex xs4 md4 pl-5>
                <v-btn v-if="email==null || email==''" :loading="loading" color="success" 
                @click.stop="bindDialog=true" large depressed>绑定邮箱</v-btn>
                <v-btn v-else :loading="loading" color="error" 
                @click.stop="delDialog=true" large depressed>解绑邮箱</v-btn>
                <!-- 加入v-if, 每次打开dialog都重新创建，不保存上一次的值 -->
                <bind-email-dialog v-if="bindDialog" :show.sync="bindDialog"></bind-email-dialog>
                <del-email-dialog  v-if="delDialog" :show.sync="delDialog"></del-email-dialog>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
import BindEmailDialog from '@/components/dialogs/BindEmailDialog'
import DelEmailDialog from '@/components/dialogs/DelEmailDialog'

export default {
    components: {BindEmailDialog, DelEmailDialog},
    props: {

    },
    data() {
        return {
            loading: false,
            bindDialog: false,
            delDialog: false,
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