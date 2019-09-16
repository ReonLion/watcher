<template>
    <v-card dark :color="cardColor" class="rounded-card">
        <v-responsive class="white--text">
            <box-chart :data="data" :dimensions="dimensions" :card-color="cardColor" 
            :title="title"  :sub-title="subTitle" icon="trending_up"
            :chart-color="[color.shades.white]" type="line" flat
            class="mb-1"></box-chart>
        </v-responsive>
        <v-card-text class="white">
            <div class="layout row align-center ma-0">
                <div class="grey--text">
                    <div class="caption">{{bottomTitle}}</div>
                    <div class="subheading mt-2">{{bottomSubTitle}}</div>
                </div>
                <v-spacer></v-spacer>
                <div class="">
                    <v-progress-circular :size="80" :width="8" :rotate="360" :value="360" color="blue">
                    {{bottomContent}}
                    </v-progress-circular>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import BoxChart from '@/components/charts/BoxChart'
import Material from "vuetify/es5/util/colors"

export default {
    components: {BoxChart, },

    props: {
        title: String,
        subTitle: String,
        data: {
            type: [Array, Object],
            default: function() {
                return []
            }
        },
        dimensions: {
            type: [Array, Object],
            default: function() {
                return []
            }
        },
        cardColor: {
            type: String,
            default: "white"
        },
        bottomTitle: String,
        bottomSubTitle: String,
        bottomContent: [Number, String],
    },

    data(){
        return{
            color: Material,
        }
    },
}
</script>
