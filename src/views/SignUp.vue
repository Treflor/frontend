<template>
<v-parallax height="969" src="https://hdqwalls.com/wallpapers/material-design-stock-4k-y7.jpg">
<v-container>

<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
     

        <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 19 : 1" :color="hover ? 'green' : 'white'" >
            <v-card-text>
                <v-container>  

                      <v-layout row>
                    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Sign Up</v-flex>
                    </v-layout> 

                    <v-form @submit.prevent="onSignup">
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
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    id="password"
                                    v-model="password"
                                    type="password"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>

                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="lock"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    v-model="confirmPassword"
                                    type="password"
                                    :rules="[comparePasswords]"
                                   
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>

                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                             <v-btn color="yellow" type="submit">
                                    SignUp</v-btn>

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
export default {
    name: 'SignUp',

    data () {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            loader: null,
            loading: false
        }
    },

     


    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
        },
        user () {
            return this.$store.getters.user
        },
  /*      loading () {
            return this.$store.getters.progressing
        }
*/
    },

    watch: {
        user (value) {
            if (value !== null && value !== undefined) {
                this.$router.push('/')
            }

        }
  
      },


    methods: {
        onSignup () {
            this.$store.dispatch('signUserup', {email: this.email, password: this.password})

        },

      
    }
}
</script>








<style scoped>
.form{
    position: relative;
    top: 169px
}
</style>
