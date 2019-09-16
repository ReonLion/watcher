<template>
    <v-container fluid>
        <template>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <!-- 绑定/解绑表单 -->
                    <v-layout row wrap>
                        <v-flex xs12 md12 mb-4>
                            <bind-device-form></bind-device-form>
                        </v-flex>
                        <v-flex xs12 md12 mt-4>
                            <unbind-device-form></unbind-device-form>
                        </v-flex>
                    </v-layout>
                    
                </v-flex>
                <v-flex xs12 md6>
                    <!-- 背景图 -->
                </v-flex>
            </v-layout>
        </template>
    </v-container>
</template>

<script>
import BindDeviceForm from '@/components/forms/BindDeviceForm'
import UnbindDeviceForm from '@/components/forms/UnbindDeviceForm'
export default {
    components: {BindDeviceForm, UnbindDeviceForm},
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

