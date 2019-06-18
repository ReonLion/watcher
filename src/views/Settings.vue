<template>
  <div class="Settings">
    <v-container class="py-0 my-0">
      <div class="subheading mb-1">更改密码</div>
      <v-divider style="border-width: 0.5px; border-color: #3F51B5;"></v-divider>
      <v-form>
        <v-container class="ma-0 pa-0">
          <v-layout row class="ma-0 pa-0">
            <v-flex xs12 md4 class="ma-0 pa-0">
              <v-text-field v-model="password" :append-icon="show1 ? 'visibility' : 'visibility_off'"
              :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
              label="旧密码" hint="At least 8 characters" counter
              @click:append="show1 = !show1"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md4>
              <v-text-field solo></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md4>
              <v-text-field solo></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        },
    }
  }
}
</script>

<style>
</style>
