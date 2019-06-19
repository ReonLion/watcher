<template>
    <v-card flat>
        <v-card-title><h3>绑定手机</h3></v-card-title>
        <v-divider style="border-width: 0.5px; border-color: #3F51B5;"></v-divider>
        <v-form>
            <v-text-field v-model="bindPhone" class="mx-3" 
            label="已绑定手机" value="bindPhone" :disabled="true"></v-text-field>
            <v-btn depressed color="success">
                <v-icon left>done</v-icon>
                <span>更换绑定</span>
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            bindPhone: "13850339999",
        }
    }
}
</script>

