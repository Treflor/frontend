<template>
<v-container>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-thin">
            Journeys for permission
        </v-flex>
    </v-layout>
        <v-layout class="mt-4" row v-for="journey in wholeResponse " :key="journey._id">
            <v-layout row>
                <v-flex xs12 class="text-xs-center font-weight-black">
                    
                    created by {{journey.user.given_name}}
                </v-flex>
            </v-layout>
            <v-img height="119" :src="journey.landmarks[0].images[0]"></v-img>
            <v-btn color="#7df08e" @click="publish(journey._id)">Publish</v-btn>
            <v-btn color="#f23343" @click="deletejourney(journey._id)">DELETE</v-btn>
        </v-layout>
    
</v-container>

</template>


<script>
import axios from 'axios';
export default {
    name: 'JourneyPanel',
    data () {
        return {
            wholeResponse: []
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
    .get('https://api-treflor.herokuapp.com/journey/unpublished',config) */
    
      .then(response => {

      this.wholeResponse = response.data
      })
    },

        methods : {
        publish (id) {
            
        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              } 

            axios.post('https://api-treflor.herokuapp.com/journey/unpublished' + id, {
                 published: true,
                 //user.local : false,
                 _method: 'patch'
            },config)
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

            axios.delete('https://api-treflor.herokuapp.com/journey/unpublished' + id, config)
            .then((response) => {
                   console.log(response);
            });
        
        }
    }
}

</script>
