<template>
<v-parallax height="1329" src="https://hdqwalls.com/wallpapers/material-design-stock-4k-y7.jpg">
<v-container>

<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
     

        <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 19 : 1" :color="hover ? 'white' : '#eceff1'" >
            <v-card-text>
                <v-container>  

                      <v-layout row>
                    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Sign Up</v-flex>
                    </v-layout> 

                    <v-form @submit.prevent="signup">
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

                        </v-layout><!-- 
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
                        </v-layout> -->

                         <v-text-field
            
                                prepend-icon="lock"             
            autocomplete="current-password"
            :value="userPassword"
            label="Enter password"
         
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="[rules.password]"
            @input="_=>userPassword=_"
            v-model="password"
          ></v-text-field>
<!-- 
   hint="Your password passed! Password rules are not meant to be broken!" -->


                         <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="lock"
                                    name="password2"
                                    label="Confirm Password"
                                    id="password2"
                                    v-model="password2"
                                    type="password"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>
                        </v-layout>

                          <div class="img font-weight-light">
                            Img
                        </div>
                        <div class="pik">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage"
      >
        <label for="fileInput" slot="upload-label">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                class="path1"
                d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
              ></path>
            </svg>
          </figure>
          <span class="upload-caption">{{
            hasImage ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
                            </v-flex>
                        </v-layout>
    </div>
<!--
                        <v-btn @click="onpickfile" color="blue">Pick File
                        </v-btn>
                        <input type="file" style="display: none" ref="fileinput" @change="onfilepicked">
                            </v-flex>
                        </v-layout>
                        </div>
-->

                        <v-layout row>
                        <v-flex xs12 offset sm-3>
                            <v-text-field
                            name= "family_name"
                            label="family name"
                            v-model="family_name"
                            id="family_name"
                            required
                            type= text
                            >
                            </v-text-field>
                        </v-flex>
                        </v-layout>

                        
                        <v-layout row>
                        <v-flex xs12 offset sm-3>
                            <v-text-field
                            name= "given_name"
                            label="given name"
                            v-model="given_name"
                            id="given_name"
                            required
                            type= text
                            >
                            </v-text-field>
                        </v-flex>
                        </v-layout>

                        
                        

                   <!--     
                        <v-layout row>
                        <v-flex xs12 offset sm-3>
                            <v-text-field
                            name= "img"
                            label="Img"
                            v-model="photo"
                            id="img"
                            type= text
                            >
                            </v-text-field>
                        </v-flex>
                        </v-layout>
-->


                        
<!--
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
-->
                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                             <v-btn color="#00574b" type="submit" dark>
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
import axios from 'axios';

export default {
    name: 'SignUp',

    data () {
        return {

              valid: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],



            signupinfo: {},

            email : '',
            password: '',
            password2: '',
            family_name: '',
            given_name: '',
            msg: "Vue Image Upload and Resize Demo",
      hasImage: false,
      img: null,
      imgstringfinl: null,

      value: true,
      rules: {
        required: value => !!value || "Required.",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter, a number and a special character."
          );
        }
    
    }
    }
    },

     


    computed: {
        comparePasswords () {
            return this.password !== this.Password2 ? 'Passwords do not match' : ''
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

        
        setImage: function(output) {
      this.hasImage = true;
      this.img = output;
     // console.log('Info', output.info)
      //console.log('Exif', output.exif)

      this.imgstringfinl = this.img.replace('data:image/jpeg;base64,', '')
     // console.log(this.img)
    },
       // signup () {
         //   this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, photo: this.photo, family_name: this.family_name, given_name: this.given_name})

            signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },

            //    console.log(this.email)
     /*           let uri = 'https://api-treflor.herokuapp.com/oauth/signup';
                axios.post(uri, /*this.sign*/   
       /*          {email: this.email ,
                 password: this.password,
                 password2: this.password2,
                 photo: this.photo,
                 family_name: this.family_name,
                 given_name: this.given_name
                 } )
                 .then((response) => {
                  const token = response.data.token;              
           //       const newUser = {
             //           id: token,
               //     }
               //     commit('setUser', newUser)
                    const parsed = JSON.stringify(token);
                    localStorage.setItem('state.user', parsed);
            })
    
    
                
                .catch((error) => {
                    console.log(error)
                })
            
     
            

        },    */
/* 
         onfilepicked (event) {
            const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.img = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile = files[0]

            const image2base64 = require('image-to-base64');
           
           image2base64(this.imgfile) // you can also to use url
           .then(
              (response) => {
                  this.photo = response; //cGF0aC90by9maWxlLmpwZw==
              }
            )
           .catch(
               (error) => {
                  console.log(error); //Exepection error....
              }
            )

              },

        onpickfile () {
            this.$refs.fileinput.click()
        },
         */


      
    }
}
</script>








<style scoped>
.form{
    position: relative;
    top: 169px
}
</style>
