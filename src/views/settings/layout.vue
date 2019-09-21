<template>
    <v-container fluid>
        <template>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4>
                    <!-- 绑定/解绑表单 -->
                    <v-layout row wrap>
                        <v-flex xs12 md12 mb-4>
                            <change-email-form></change-email-form>
                        </v-flex>
                        <v-flex xs12 md12 mt-4>
                            <change-password-form></change-password-form>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm6 md8>
                    <!-- 背景图 -->
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import ChangeEmailForm from '@/components/forms/ChangeEmailForm'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm'
export default {
    components: {ChangeEmailForm, ChangePasswordForm},
    data(){
        return{

        }
    },

    computed: {

    },

    methods: {

    },

    watch: {

    }
}
</script>

