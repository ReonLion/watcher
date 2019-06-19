<template>
    <v-card flat>
        <v-card-title><h3>更改密码</h3></v-card-title>
        <v-divider style="border-width: 0.5px; border-color: #3F51B5;"></v-divider>
        <v-form>
            <v-text-field v-model="oldPassword" class="mx-3" 
            :append-icon="show1 ? 'visibility' : 'visibility_off'" :type="show1 ? 'text' : 'password'" 
            label="旧密码" @click:append="show1 = !show1"></v-text-field>
            <v-text-field v-model="newPassword" class="mx-3" 
            :append-icon="show2 ? 'visibility' : 'visibility_off'" :type="show2 ? 'text' : 'password'" 
            label="新密码" @click:append="show2 = !show2"></v-text-field>
            <v-text-field v-model="confirmPassword" class="mx-3" 
            :append-icon="show3 ? 'visibility' : 'visibility_off'" :type="show3 ? 'text' : 'password'" 
            label="确认密码" @click:append="show3 = !show3"></v-text-field>
            <v-btn depressed color="success">
                <v-icon left>done</v-icon>
                <span>确认</span>
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      oldPassword: null,
      newPassword: null,
      confirmPassword: null,
    }
  }
}
</script>

