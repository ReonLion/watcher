<template>
    <v-form ref="form">
        <v-layout row wrap class="my-0 pa-0" justify-center>
            <v-flex xs12 md12>
                <v-text-field v-model="minCurrentOffline" label="无人时警报电流（A）" 
                :rules="emptyRules" outline flat></v-text-field>
            </v-flex>
            <v-flex xs12 md12>
                <v-text-field v-model="minCurrentOnline" label="有人时警报电流（A）" 
                :rules="emptyRules" outline flat></v-text-field>
            </v-flex>
            <v-flex xs8 md8>
                <v-btn :loading="loading" color="error" @click="validate" block>设定</v-btn>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
import {getGlobalSettings, postGlobalSettings} from '@/api/api'

export default {
    components: {},
    data: () => ({
        loading: false,
        minCurrentOffline: null,
        minCurrentOnline: null,
        emptyRules: [
            v => !!v || '不能为空',
        ],
    }),

    methods: {
        validate: function() {
            // 如果表单验证通过
            if(this.$refs.form.validate()) {
                this.loading = true
                postGlobalSettings(this.minCurrentOffline, this.minCurrentOnline)
                .then(
                    (response) => {
                        if(response.status == 201) {
                            this.loading = false
                            this.$refs.form.reset()
                        }
                    }
                )
                .catch(
                    () => {
                        this.loading = false
                    }
                )
            }
        },

        getGlobalSettings: function() {
            getGlobalSettings()
            .then(
                (response) => {
                    if(response.data.length >= 1) {
                        this.minCurrentOffline = response.data[0].min_current_offline
                        this.minCurrentOnline = response.data[0].min_current_online
                    }
                }
            )
            .catch(
                () => {}
            )
        }
    },

    created: function() {
        this.getGlobalSettings()
    }
}
</script>

