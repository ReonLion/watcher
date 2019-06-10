<template>
  <div class="home">
    <h1>Homepage</h1>
    <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident soluta nesciunt? Nisi, repellendus cum quibusdam voluptas autem iste rerum recusandae in a veritatis optio quam sunt officiis quis harum!</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus reiciendis minima hic voluptate, necessitatibus earum dolorum. Cupiditate, dignissimos? Ipsa voluptates id fuga reiciendis unde iusto ut ad esse labore.</p>
    <h1 class="display-4">Massive Font</h1>
    <v-btn class="pink white--text">点击</v-btn>
    <v-btn depressed dark color="pink">点击</v-btn>
    <v-btn flat color="pink">点击</v-btn>
    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>邮件</span>
    </v-btn>
    <v-btn depressed large class="pink white--text">
      <v-icon left large>email</v-icon>
      <span>邮件</span>
    </v-btn>
    <v-btn fab class="purple white--text">
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn class="hidden-md-and-down">Click Me</v-btn>
    <v-btn class="hidden-md-and-up">Click Me</v-btn>
    <v-btn class="hidden-sm-only">hidden-sm-only</v-btn>
  </div>
</template>

<script>
export default {
}
</script>
