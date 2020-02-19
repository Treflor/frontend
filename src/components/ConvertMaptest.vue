<template>
<v-container>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-thin">
           Journeys
        </v-flex>
    </v-layout><!-- 
        <v-layout class="mt-4" row v-for="guide in wholeResponse " :key="guide._id"> -->
            <v-layout row>
            <v-flex xs12>
                <v-layout row>
                    <v-btn block color="#91e6be" @click="find1" ></v-btn>
                </v-layout>
            </v-flex>
        </v-layout>

           <v-container v-if="this.wholeResponse[0]"> 
            <v-layout row>
            <v-flex xs12>
                <v-layout row>
                    <v-btn block color="#91e6be" @click="mapclick(0)" >{{this.wholeResponse[0].journey.title}}</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
           </v-container>

                   <v-container v-if="this.wholeResponse[1]">
                        <v-layout row >
            <v-flex xs12>
                <v-layout row>
                    <v-btn block color="#91e6be" @click="mapclick(1)" >{{this.wholeResponse[1].journey.title}}</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
                   </v-container>

        <v-container v-if="this.wholeResponse[2]">
            <v-layout row>
            <v-flex xs12>
                <v-layout row>
                    <v-btn block color="#91e6be" @click="mapclick(2)" >{{this.wholeResponse[2].journey.title}}</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
        </v-container>

        <v-container v-if="this.wholeResponse[3]">
            <v-layout row>
            <v-flex xs12>
                <v-layout row>
                    <v-btn block color="#91e6be" @click="mapclick(3)" >{{this.wholeResponse[3].journey.title}}</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
        </v-container>

        
        <v-container v-if="this.wholeResponse[4]">
            <v-layout row>
            <v-flex xs12>
                <v-layout row>
                    <v-btn block color="#91e6be" @click="mapclick(4)" >{{this.wholeResponse[4].journey.title}}</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
        </v-container>

         <v-container v-if="this.wholeResponse[5]">
            <v-layout row>
            <v-flex xs12>
                <v-layout row>
                    <v-btn block color="#91e6be" @click="mapclick(5)" >{{this.wholeResponse[5].journey.title}}</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
        </v-container>
            <!-- <v-layout row>
                <v-flex xs12 class="text-xs-center font-weight-black">
                   From {{ journey.journey.origin.address }} to {{ journey.journey.destination.address }}   
                    created by {{journey.user.given_name}}
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
            </v-flex>
         -->
         <v-container v-if="clicked">
             <v-layout row>
              <v-flex xs12 class="text-xs-center">
                  <v-layout row>
                      <v-flex xs12 class="text-xs-center font-weight-black">
                          From {{this.point0}} to {{this.point1}} | created by - {{this.creator}} |
                      </v-flex>
                  </v-layout>
                <v-card elevation="19">
                <gmap-map v-bind:center="center" v-bind:zoom="10" style="width: 1200px; height: 576px" >
                 

                 <gmap-polyline v-bind:path.sync="path" v-bind:options="{ strokeColor:'#008000'}">
                </gmap-polyline> 

                
                 <gmap-polyline v-bind:path.sync="pathtracked" v-bind:options="{ strokeColor:'purple'}">
                </gmap-polyline>

               </gmap-map>
                </v-card>
                <v-btn @click="clear()">clear</v-btn>
              </v-flex>
            </v-layout>
         </v-container>
        
</v-container>

</template>


<script>
import axios from 'axios';
const decodePolyline = require('decode-google-map-polyline');
export default {
    data () {
        return {
            wholeResponse: [],
            path: [],
            pathtracked: [],
            mapcurrent: '',
            clicked: null,
            
            center: {lat: 7.4407518, lng: 80.4848742},
            point0: '',
            point1: '',
            creator: ''
        }
    },
    mounted () {
   let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }   
   axios
    .get('https://api-treflor.herokuapp.com/journey/',config)/* 
    .get('https://api-treflor.herokuapp.com/images/unpublished',config) */
    
      .then(response => {
         

      this.wholeResponse = response.data
      console.log(this.wholeResponse)
    
      })
    },

    methods : {
        mapclick (journeyid) {
            /* console.log(this.wholeResponse)
             */this.clicked = true
             this.mapcurrent = journeyid
            /* var i;
            for(i = 0 ; i <= this.wholeResponse.length; i++ ){
                if (this.wholeResponse[i]._id == journeyid ){
                    this.mapcurrent = i
                }
            }  */
            this.path =  decodePolyline(this.wholeResponse[journeyid].direction.points )            
            this.pathtracked = decodePolyline(this.wholeResponse[journeyid].tracked_locations);
            this.point0 = this.wholeResponse[journeyid].journey.origin.address
            this.point1 = this.wholeResponse[journeyid].journey.destination.address
            this.creator = this.wholeResponse[journeyid].user.given_name
            console.log(this.path)
        },

        clear () {
            this.clicked = false
            this.path = null
            this.mapcurrent = null
        },

        find1() {
            
            let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }/* 
              let uri = 'https://api-treflor.herokuapp.com/journey/all'; */
              let uri = 'https://api-treflor.herokuapp.com/journey/unpublished';
                    axios.get(uri, /*this.sign*/   
                     config )
                     .then((response) => {
      this.wholeResponse = response.data
      console.log(this.wholeResponse)
      this.token = config
      this.progress = true
      
      this.clicked = false
      this.img = this.wholeResponse
      }).catch((error) => {
                         console.log(error)
                     })
        },
    }

    /* methods : {
             
       polydecode (points) {
           decodePolyline(points);
       }
    } */
}

</script>
