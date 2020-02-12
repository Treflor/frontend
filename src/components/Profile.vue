<template>

    <v-parallax src="https://img5.goodfon.com/wallpaper/nbig/1/a4/plants-botanical-garden-greenhouse-green-interior-nature.jpg" height="719">
<v-container >
 

    <v-layout row>
        <v-flex xs12 sm6 offset-sm4 class="text-xs-center">
            <v-layout row>
            <v-flex xs12 sm6 class="text-xs-center" >
          <!--      <v-card-actions>
            <v-btn block @click="use1" :hidden="given_name != ''">View my profile</v-btn>
                </v-card-actions>   -->
            </v-flex>
            </v-layout>
            <v-card height="619" width="419" :hidden="render = false" color="#319fa3">
                <v-layout row>
                    <v-flex xs12 class="text-xs-center font-weight-black">
                        
                        <v-img class="mb-8" position="top" height="319" :src="this.photo"></v-img>
                         <v-progress-circular
                         position = "center"
      :hidden="given_name != ''"                   
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
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
                        <div class="headline text-xs-center mb-3">                 
                            {{this.privilege}}
                        </div>
                   
                        
                    </v-flex>
                </v-layout>
                  <v-card-actions>
            <v-btn block @click="use1" :hidden="given_name != ''">View my profile</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
   

</v-container>
    

 </v-parallax>
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
       privilege: '',
       photo: '',
       render: false

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
                        this.render = true
                        console.log(response.data)
                        this.given_name = response.data.given_name
                        this.family_name = response.data.family_name
                        this.gender = response.data.gender
                        this.country = response.data.country
                        this.email = response.data.email
                        this.photo = response.data.photo
                        this.privilege = response.data.privilege
                     
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
                        this.photo = response.data.photo
                     }).catch((error) => {
                         console.log(error)
                     })
        }
    }       
}
</script>

<style>
.main {
    
    position: fixed;
    bottom: 0px;

}





body {
    margin: 0
}
</style>
