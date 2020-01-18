<template>
<v-container>
 

    <v-layout row>
        <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
            <v-card height="619">
                <v-layout row>
                    <v-flex xs12 class="text-xs-center font-weight-black">
                        
                        <v-flex xs12 sm6 offset-sm3 v-if="this.progressing">
                             <v-progress-circular
                             :size="70"
                             :width="7"
                             color="purple"
                             indeterminate
                             ></v-progress-circular>

                        </v-flex>
                        <v-btn @click="use1"></v-btn>
                        <v-img class="mb-8" position="top"  height="319" src="https://cnet4.cbsistatic.com/img/yg8EAhsi9ZAsVQw4_h3RKxgLVrc=/1092x0/2019/05/17/5ed9cc7e-9c1f-4768-bebf-a4a3fbf41c6f/gettyimages-michael-s-schwartz-633606580.jpg"></v-img>
                        <div class="headline text-xs-center mb-3 mt-2">                 
                            {{this.given_name}}
                        </div>
                        <div class="headline text-xs-center mb-3">                
                            {{this.family_name}}
                        </div>
                        <div class="headline text-xs-center mb-3">                 
                            {{this.email}}
                        </div>
                        <div class="headline text-xs-center mb-3">                 
                            {{this.gender}}
                        </div>
                        <div class="headline text-xs-center mb-3">                 
                            {{this.country}}
                        </div>
                        
                    </v-flex>
                </v-layout>
               
            </v-card>
        </v-flex>
    </v-layout>


</v-container>
    
</template>

<script>
import axios from 'axios';

export default {
    name: 'Profile',


   data () {
       return {       
       given_name: '',
       email: '',
       country: '',
       gender: '',
       family_name: '',
       progressing: 'true'
       }

   },
   /*computed: {
        user () {
            return this.$store.getters.usercurrent
        }
    },*/

    mounted: {
          use1 () {
            let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }
              let uri = 'https://api-treflor.herokuapp.com/user/';
                    axios.get(uri, /*this.sign*/   
                     config )
                     .then((response) => {
                        // commit('setCurrentUser',response.data)
                        console.log(response.data)
                        this.given_name = response.data.given_name
                        this.family_name = response.data.family_name
                        this.gender = response.data.gender
                        this.country = response.data.country
                        this.email = response.data.email
                        this.progressing = false
                     }).catch((error) => {
                         console.log(error)
                     })
        }
    },

    


    methods: {
         use1 () {
            let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }
              let uri = 'https://api-treflor.herokuapp.com/user/';
                    axios.get(uri, /*this.sign*/   
                     config )
                     .then((response) => {
                        // commit('setCurrentUser',response.data)
                        console.log(response.data)
                        this.given_name = response.data.given_name
                        this.family_name = response.data.family_name
                        this.gender = response.data.gender
                        this.country = response.data.country
                        this.email = response.data.email
                     }).catch((error) => {
                         console.log(error)
                     })
        }
    }       
}
</script>
