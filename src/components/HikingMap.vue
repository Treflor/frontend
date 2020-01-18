<template>
<v-container>
    <v-layout row>
        <v-flex xs12 class="text-xs-center font-weight-black headline">
            Ella
        </v-flex>
    </v-layout>
    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-card elevation="19">
<gmap-map v-bind:center="center" v-bind:zoom="12" style="width: 1200px; height: 576px" >
        <gmap-polyline v-bind:path.sync="path" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
      </gmap-map>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>    
</template>

<script>
export default {
    data () {
      return { 
        center: {lat: 55.915655, lng: -4.744502},
          path: [
            {lat: 55.9352001, lng: -4.7766924 },
            {lat: 55.9358131, lng: -4.7770143 },
            {lat: 55.9361256, lng: -4.7767353 },
            {lat: 55.9366784, lng: -4.7739458 },
            {lat: 55.9370784, lng: -4.7766924 },
            {lat: 55.9377784, lng: -4.7770143 },
            {lat: 55.9384784, lng: -4.7767353 },
            {lat: 55.9390784, lng: -4.7739458 },
            {lat: 55.9396784, lng: -4.7766924 },
            {lat: 55.9400000, lng: -4.7770143 },
            {lat: 55.9410784, lng: -4.7767353 },
            {lat: 55.9416784, lng: -4.7739458 },
]
            }
        } 
}
</script>
