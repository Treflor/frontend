<template>
   <v-container>
  <div class="text-xs-center font-weight-bold">
      <v-flex xs12 sm12 md12>
    <v-card elevation="21" color="white" width="1229" height="606px">    
          <v-card-title>
      Ella Route
    </v-card-title>
    <div class="map">
  
                <GmapMap
  v-bind:center="{lat:7, lng:80}"
  v-bind:zoom="10"
  map-type-id="terrain"
  style="width: 1200px; height: 576px"
>
  <GmapMarker
    v-bind:key="index"
    v-for="(m, index) in markers"
    v-bind:position="m.position"
    v-bind:clickable="true"
    v-bind:draggable="true"
    @click="center=m.position"
  />
</GmapMap>

        

    
    </div>

    </v-card>
      </v-flex>
  </div>
   </v-container>
</template>



<script>
export default {
    name: 'ExploreGuide',
 data() {
        return {
            center: { lat: 80.0, lng: 80.0 },
            markers: [
                {
                    position: { lat: 7.2563578, lng: 80.6276345 }
                },
                {
                    position: { lat: 7.294544, lng: 80.5907618 }
                }
             
            ],
        }
 }
}
</script>
