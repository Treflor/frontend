<template>
    <v-parallax height="969" src="https://i.imgur.com/M0BwxSq.png">
<v-container>
<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3>
      

         <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 19 : 1" :color="hover ? 'green' : 'white'" >
            <v-card-text>
                <v-container>  
                    
                    <v-layout row>
                        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Recover Password</v-flex>
                    </v-layout>


                    <v-form @submit.prevent="signin">
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="person"
                                    name="email"
                                    label="Mail"
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>
                        

                       

                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="yellow" type="submit">
                                    Send</v-btn>

                            </v-flex>
                        </v-layout>

                 


                    </v-form>



                </v-container>

            </v-card-text>

        </v-card>
         </v-hover>

    </v-flex>

</v-layout>
</v-container>
</v-parallax>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: ''
        }
    },

    watch: {
        user (value) {
            if (value !== null && value !== undefined) {
                if(this.email = "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"){
                    this.$router.push('/')
                }/* 
                else{
                this.$router.push('/')
                } */
            }

        }
    },

    method: {
        sendforpass() {
            
                this.$store.dispatch('sendforpass', {email: this.email })
            
        }
    }


}
</script>
