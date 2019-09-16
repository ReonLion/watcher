<template>
  <v-layout row wrap class="ma-0 pa-0">
    <v-flex xs6 sm6 md6>
      <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :nudge-right="40" :return-value.sync="date"
        lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field v-model="date" :rules="emptyRules" :label="dateTextFieldLabel" prepend-icon="event" readonly v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="date">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu1.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs6 sm6 md6>
      <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time"
        lazy transition="scale-transition" offset-y full-width min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field v-model="time" :rules="emptyRules" :label="timeTextFieldLabel" prepend-icon="access_time" readonly v-on="on"></v-text-field>
        </template>
        <v-time-picker v-model="time" format="24hr">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu2.save(time)">OK</v-btn>
        </v-time-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
      props: {
          dateTextFieldLabel: {
              type: String,
              default: '起始日期'
          },
          timeTextFieldLabel: {
              type: String,
              default: '起始时间'
          },
      },
      data: () => ({
          date: null,
          time: null,
          menu1: false,
          menu2: false,
          emptyRules: [
              v => !!v || '不能为空',
          ]
    }),
    
    computed: {
      datetime: function() {
        return this.date+'T'+this.time+':00'
      }
    },

    watch: {
      date: function() {
        // 当选择date时，若time为null则设为00:00
        if(this.time===null) {
          this.time = '00:00'
        }
      },
    }
  }
</script>