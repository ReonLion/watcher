<template>
    <v-container fluid>
        <template>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <global-settings-form></global-settings-form>
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import GlobalSettingsForm from '@/components/forms/GlobalSettingsForm'
export default {
    components: {GlobalSettingsForm,},
    data(){
        return{

        }
    },

    computed: {

    },

    methods: {

    },

    watch: {

    },
}
</script>

