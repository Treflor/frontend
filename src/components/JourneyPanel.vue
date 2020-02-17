<template>
<v-container>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-thin">
            Journeys for permission
        </v-flex>
    </v-layout>
        <v-layout class="mt-4" row v-for="journey in wholeResponse " :key="journey._id">
            <v-img height="119" :src="journey.landmarks[0].images[0]"></v-img>
            <v-btn color="#e36889" @click="publish(journey._id)">Publish</v-btn>
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
            axios.post('https://api-treflor.herokuapp.com/journey/unpublished' + id, {
                 published: true,
                 //user.local : false,
                 _method: 'patch'
            })
            .then((response) => {
                   console.log(response);
            });
        }
    }
}

</script>
