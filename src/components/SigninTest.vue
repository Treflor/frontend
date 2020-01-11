
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
                               <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>

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
import GoogleSignInButton from 'vue-google-signin-button-directive';

export default {
    name: 'SignIn',

    data: () => ({

        sign: {},
        email: '',
        password: '',
        token: '',
    clientId: '375151907681-p5mv02plrs46p63jjjqk1ji7btd5ussd.apps.googleusercontent.com'
  }),

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


        
    methods : {

        signin() {
             this.$store.dispatch('signin', {email: this.email, password: this.password})
        },

        //This Work

 /*       signin () {
            console.log(this.email)
            let uri = 'https://api-treflor.herokuapp.com/oauth/signin';
            this.axios.post(uri, /*this.sign*/   
          /*   {email: this.email ,
             password: this.password
             } )
             .then((response) => {
              this.token = response.data.token;
              console.log(this.token)
            })
            .catch((error) => {
                console.log(error)
            })
        },                             
        */
 
/*
async signin() {
  try {
    const response = await axios.post('https://api-treflor.herokuapp.com/oauth/signin', {
      email: this.email,
      password: this.password,
    });

    console.log(response);

  } catch (e) {
    console.log(e);
  }
},
*/

        onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      const id_token = googleUser.getAuthResponse().id_token

      let uri = 'https://api-treflor.herokuapp.com/oauth/google';
            this.axios.post(uri, this.id_token).then((response) => {
              console.log(response);
            });
    },

     onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
      console.log(idToken)
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }



    }

}
</script>

<style scoped>
.form {
    position: relative;
    top: 169px
}

.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
