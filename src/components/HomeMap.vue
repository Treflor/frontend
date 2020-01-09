<template>

<v-container>
  <div class="text-xs-center font-weight-bold">
    <v-card elevation="21" color="white" width="1229" height="606px">    
          <v-card-title>
      Hike#1
    </v-card-title>
    <div class="map">
  
                <GmapMap
  v-bind:center="{lat:7, lng:80}"
  v-bind:zoom="10"
  map-type-id="terrain"
  style="width: 1200px; height: 576px"
>
  <gmap-polyline v-bind:path.sync="path" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
</GmapMap>

        

    
    </div>

    </v-card>

    <v-divider></v-divider>


    <v-card elevation="21" color="white" width="1229" height="606px">      
      <v-card-title>
      Hike#2
    </v-card-title>
    <div class="map">
  
                <GmapMap
  v-bind:center="{lat:7.1, lng:80.4}"
  v-bind:zoom="10"
  map-type-id="terrain"
  style="width: 1200px; height: 576px"
>
  <GmapMarker
    v-bind:key="index"
    v-for="(m, index) in markers2"
    v-bind:position="m.position"
    v-bind:clickable="true"
    v-bind:draggable="true"
    @click="center=m.position"
  />
</GmapMap>

        

    
    </div>
    </v-card>


 
 <v-card elevation="21" color="white" width="1229" height="606px">      
      <v-card-title>
      Hike#3
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
    v-for="(m, index) in markers3"
    v-bind:position="m.position"
    v-bind:clickable="true"
    v-bind:draggable="true"
    @click="center=m.position"
  />
</GmapMap>

        

    
    </div>
    </v-card>


 </div> 

  <div class="btn">
  <v-row align="center" >
    <v-btn color="green" to='/'>Home</v-btn>
  </v-row>
  </div>

</v-container>

</template>

<script>
export default {
    name: 'HomeMap',
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
            markers2: [
              {
                    position: { lat: 7.1886757, lng: 80.4300928 }
                },
                {
                    position: { lat: 7.2150087, lng: 80.4262302 }
                }
            ],
            markers3: [
              {
                    position: { lat: 7.2513992, lng: 80.4157805 }
                },
                {
                    position: { lat: 7.256631, lng: 80.4151643 }
                }
              
            ],
            
            }
        
        },
    methods: {
      login: function() {
        this.$router.replace('about')
      }
    }
    
};
</script>