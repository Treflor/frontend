<template>
<v-container>
 

    <v-layout row>
        <v-flex xs12 sm6>
            <v-card>
                <v-layout row>
                    <v-flex xs12>
                        <v-btn @click="use1"></v-btn>
                        <div>
                            {{this.given_name}}
                            {{this.family_name}}
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

       family_name: ''
       }

   },
   /*computed: {
        user () {
            return this.$store.getters.usercurrent
        }
    },
*/
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
                     }).catch((error) => {
                         console.log(error)
                     })
        }
    }
}
</script>
