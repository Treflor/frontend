
<template>
<v-parallax height="969" src="https://i.imgur.com/M0BwxSq.png">
<v-container>
<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3>
      

         <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 19 : 1" :color="hover ? 'white' : '#eceff1'" >
            <v-card-text>
                <v-container>  
                    
                    <v-layout row>
                        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Sign-In</v-flex>
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
                                    :rules="emailRules"
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

                    <!--       <v-layout row >
                            <v-flex xs12 class="text-xs-center">
                                {{this.errors}}
                            </v-flex>
                        </v-layout> -->

                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="#00574b" type="submit" dark>
                                    SignIn</v-btn>

                            </v-flex>
                        </v-layout>

                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                               <button color="white" v-google-signin-button="clientId" class="google-signin-button"> <v-img height="60" width="60" src="https://launchpad.phmschools.org/sites/lp.phmschools.org/files/Google-G-icon256.png"></v-img></button>

                            </v-flex>
                        </v-layout>
<!-- 
                          <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <v-btn color="#d4402c" to="/PasswordForg">
                                    Forgot password?</v-btn>

                            </v-flex>
                        </v-layout> -->

                        <v-layout row>
                            <v-flex xs12 class="text-xs-center passwordbtn">
                                <a href="http://localhost:8080/PasswordForg">Forgot password?</a>
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
import axios from 'axios'

export default {
    name: 'SignIn',

    data: () => ({

        valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

        sign: {},
        email: '',
        password: '',
        token: '',
    clientId: '375151907681-p5mv02plrs46p63jjjqk1ji7btd5ussd.apps.googleusercontent.com',
    errors: '',
    level: ''
  }),

  computed: {
        user () {
            return this.$store.getters.token
        }

    },

    watch: {
        user (value) {
            if (value !== null && value !== undefined) {
                if(this.email == "ceejay989@yahoo.com"){
                    this.$router.push('/panelfinl')
                }
                else if(this.level == 20){
                    this.$router.push('/panelfinl')
                }
                else{
                this.$router.push('/')
                }
            }

        },

        usercurrent (){
            this.level = this.$store.getters.usercurrent.privilege
        }
    },

        
    methods : {

        signin() {



            this.$store.dispatch('signin', {email: this.email, password: this.password})
            this.errors = this.$store.getters.errorcurrent

          //   this.$store.dispatch('signin', {email: this.email, password: this.password})

         //    signin ({commit}, pay) {
        //    console.log(this.email)
     /*       let uri = 'https://api-treflor.herokuapp.com/oauth/signin';
            axios.post(uri, /*this.sign*/   
       /*      {email: this.email ,
             password: this.password
             } )
             .then((response) => {
              const token = response.data.token;              
              const newUser = {
                    id: token,
                }
           //     commit('setUser', newUser)
                const parsed = JSON.stringify(token);
                localStorage.setItem('token', parsed);



                if(localStorage.getItem('token')) {
                    this.$router.push('/') 
                    vm.$forceUpdate();
                }else{
                     this.$router.push('/wrong')
                }

        })


            
            .catch((error) => {
                console.log(error)
            })
//        }



*/
  
  
  
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
              this.$store.dispatch('googleuser', {token: response}) 

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
  background-color: #eeeeee;
  height: 0px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.passwordbtn a {
    color: black;
}
</style>
