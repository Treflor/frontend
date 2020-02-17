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
                        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Sign In</v-flex>
                    </v-layout>


                    <v-form @submit.prevent="onSignin">
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
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="yellow" type="submit">
                                    SignIn</v-btn>

                            </v-flex>
                        </v-layout>

                        
                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="yellow" to="/PasswordForg">
                                    I lost password</v-btn>

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
    name: 'SignIn',

    data () {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        user () {
            return this.$store.getters.user
        }

    },

    watch: {
        user (value) {
            if (value !== null && value !== undefined) {
                if(this.email == "admin@uyuyuy.com"){
                    this.$router.push('/adminpage')
                }
                else{
                this.$router.push('/')
                }
            }

        }
    },


    methods: {
        onSignin () {
            this.$store.dispatch('signUserin', {email: this.email, password: this.password})

        },

/*
        SignIn () {
            let uri = 'http://localhost:4000/tiks1/new';
            this.axios.post(uri, this.email , this.password).then((response) => {
              console.log(response);
            });
        }    */
    }
}
</script>

<style scoped>
.form {
    position: relative;
    top: 169px
}
body {
    margin: 0
}

</style>
