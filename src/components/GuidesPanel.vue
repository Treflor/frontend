<template>
<v-container>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-3 font-weight-thin">
            Written guides for permission
        </v-flex>
    </v-layout>
        <v-layout class="mt-4" row v-for="guide in wholeResponse " :key="guide._id">
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center font-weight-black">
                    {{ guide.title }} - 
                    {{guide.guide}}
                </v-flex>
            </v-layout>
            <v-layout row>
            <v-img height="219" :src="guide.img"></v-img>
           <!--  <v-img height="219" :src="journey.img1"></v-img>
            --> <v-btn color="#7df08e" @click="publish(guide._id)">Publish</v-btn>
            <v-btn color="#f23343" @click="deleteimgs(guide._id)">DELETE</v-btn>
            </v-layout>
        </v-layout>
    
</v-container>

</template>


<script>
import axios from 'axios';
export default {
    name: 'GuidesPanel',
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
    .get('https://api-treflor.herokuapp.com/guides/',config)/* 
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

            axios.post('https://api-treflor.herokuapp.com/guides' + id, {
                 published: true,
                 //user.local : false,
                 _method: 'patch'
            },config)
            .then((response) => {
                   console.log(response);
            });
        },

          deleteguide (id) {
            
        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              } 

            axios.delete('https://api-treflor.herokuapp.com/guides/' + id, config)
            .then((response) => {
                   console.log(response);
            });
        
        }
    }
}

</script>
