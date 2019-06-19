<template>
  <div class="Settings">
    <v-container class="py-0 my-0">
      <v-layout row class="mx-0 pa-0">
        <v-flex xs12 sm6 md4 class="mx-2 pa-0">
          <ChangePasswd />
        </v-flex>
        <v-flex xs12 sm6 md4 class="mx-2 pa-0">
          <BindPhone />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import ChangePasswd from '@/components/ChangePasswd'
import BindPhone from '@/components/BindPhone'

export default {
  components: {ChangePasswd, BindPhone},
}
</script>

<style>
</style>
