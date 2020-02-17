<template>
<v-container>
        <v-layout class="mt-4" row v-for="gallery in wholeResponse " :key="gallery._id">
            <v-layout row>
                <v-flex xs12 class="text-xs-center">
                    {{ gallery.title }}
                </v-flex>
            </v-layout>
            <v-layout row>
            <v-img height="219" :src="gallery.img0"></v-img>
           <!--  <v-img height="219" :src="journey.img1"></v-img>
            --> <v-btn color="#e36889" @click="publish(gallery._id)">Publish</v-btn>
            </v-layout>
        </v-layout>
    
</v-container>

</template>


<script>
import axios from 'axios';
export default {
    name: 'PanelImgs',
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
    .get('https://api-treflor.herokuapp.com/images/',config)/* 
    .get('https://api-treflor.herokuapp.com/images/unpublished',config) */
    
      .then(response => {

      this.wholeResponse = response.data
      })
    },

    methods : {
        publish (id) {
            axios.post('https://api-treflor.herokuapp.com/images/unpublished' + id, {
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
