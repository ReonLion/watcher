<template>
    <v-card flat class="rounded-card">
      <v-card-text class="pa-0">
        <v-container class="pa-0">
          <div class="layout row ma-0">
            <div class="sm5 xs5 flex">
              <div class="layout column ma-0 justify-center align-center">
                <v-icon size="50px" :color="color">{{ icon }}</v-icon>
              </div>
            </div>
            <div class="sm7 xs7 flex text-sm-center py-1 white--text" :class="color">
              <div class="caption pb-1">{{ title }}</div>
              <v-divider></v-divider>
              <div class="body-1 pt-1">{{ content }}</div>
            </div>
          </div>
        </v-container>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    content: String,
    color: String
  }
}
</script>
