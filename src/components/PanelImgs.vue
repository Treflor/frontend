<template>
<v-container>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-thin">
            Galleries for permission
        </v-flex>
    </v-layout>
        <v-layout class="mt-4" row v-for="gallery in wholeResponse " :key="gallery._id">
            <v-flex xs12>
            <v-layout row>
                <v-flex xs12 class="text-xs-center font-weight-black">
                    {{ gallery.title }} - 
                    created by {{gallery.user.given_name}}
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-layout row>
                    <v-flex xs12>
            <v-img height="219" :src="gallery.img0"></v-img>
                    </v-flex>
                </v-layout>
           <!--  <v-img height="219" :src="journey.img1"></v-img>
            --> <v-btn color="#7df08e" @click="publish(gallery._id)">Publish</v-btn>
            <v-btn color="#f23343" @click="deleteimgs(gallery._id)">DELETE</v-btn>
            </v-layout>
            </v-flex>
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

            
        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              } 

            axios.post('https://api-treflor.herokuapp.com/images/publish' + id, /* {
                 published: true,
                 //user.local : false,
                 _method: 'patch'
            }, */config)
            .then((response) => {
                   console.log(response);
            });
        },

          deleteimgs (id) {
            
        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              } 

            axios.delete('https://api-treflor.herokuapp.com/jimages/unpublished' + id, config)
            .then((response) => {
                   console.log(response);
            });
        
        }
    }
}

</script>
