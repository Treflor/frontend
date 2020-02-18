<template>
<v-container>
    
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-black">
            Admin Panel
        </v-flex>
    </v-layout>
    <v-container v-if="clicked">
     <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-black">
            <v-btn @click="find1">view permission waiting journeys</v-btn>
        </v-flex>
    </v-layout>
    </v-container>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-thin">
            Journeys for permission
        </v-flex>
    </v-layout>
    <v-container v-if="this.progress">
        <v-layout class="mt-4" row v-for="journey in wholeResponse " :key="journey._id">
            <v-flex xs12>
            <v-layout row>
                <v-flex xs12 class="text-xs-center font-weight-black">                    
                    created by {{journey.user.given_name}}
                </v-flex>
            </v-layout>
             <v-layout row>
                <v-flex xs12 class="text-xs-center font-weight-black">                    
                    from {{journey.direction.start_address}}  to  {{journey.direction.end_address}}
                </v-flex>
            </v-layout>  
         <!--    <v-layout row>
                <v-flex xs12 class="text-xs-center">
                    <v-img :src="this.img"></v-img>
                </v-flex>
            </v-layout>
          -->   <v-layout row>
                <v-flex xs12 ><!-- 
            <v-img height="119" :src="journey.landmarks[0].images[0]"></v-img> -->
            {{journey.id}}
                </v-flex>
            </v-layout>
            <v-btn color="#7df08e" @click="publish(journey._id)">Publish</v-btn>
            <v-btn color="#f23343" @click="deletejourney(journey._id)">DELETE</v-btn>
            </v-flex>
        
        </v-layout>
    </v-container>
        
    
</v-container>

</template>


<script>
import axios from 'axios';
export default {
    name: 'JourneyPanel',
    data () {
        return {
            wholeResponse: [],
            progress: false,
            token: '',
            clicked: true,
            img: ''
        }
    },
    mounted ()  {
        
        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }
              let uri = 'https://api-treflor.herokuapp.com/journey/all';
                    axios.get(uri, /*this.sign*/   
                     config )
                     .then((response) => {
      this.wholeResponse = response.data
      }).catch((error) => {
                         console.log(error)
                     })
        },
    

        methods : {
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

        publish (id) {
            
        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }
              let uri = 'https://api-treflor.herokuapp.com/journey/publish/';
                    axios.post(uri+id, 
                     config )
                .then((response) => {
                   console.log(response);
            });
        },

        deletejourney (id) {
            
        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }
              let uri = 'https://api-treflor.herokuapp.com/journey/';
                    axios.post(uri+id, /*this.sign*/   
                     config )    .then((response) => {
                   console.log(response);
            });
        
        }
    }
}

</script>
