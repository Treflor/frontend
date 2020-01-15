<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 class="text-xs-center">
                <v-card>
                    <v-layout row>
                        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Create new guide</v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12 class="text-xs-center">
                    <v-form @submit.prevent="createnewhike">
                      <v-layout row>
                          <v-flex xs12 sm6 offset-sm3> 
                        <v-text-field
                        v-model="title"
                        name = "title"
                        label= "Hike"
                        required
                        id = "title"
                        >

                        </v-text-field>

                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                         <div>
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
    </div>
                            </v-flex>
                        </v-layout>
<!--
                        <v-text-field
                        name = "location"
                        label= "Location"
                        required
                        id = "location"
                        >
                        </v-text-field>
                        
                        -->
             <!--        <div class="img font-weight-light">
                            Img
                        </div>
                        <div class="pik">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>

                        <v-btn @click="onpickfile" color="blue">Pick File
                        </v-btn>
                        <input type="file" style="display: none" ref="fileinput" @change="onfilepicked">
                            </v-flex>
                        </v-layout>
                        </div>
                        <div>
                            {{img}}
                        </div>        -->
                  




                     
                          <!--        <v-text-field
                                  name = "Img"
                                  v-model="img"
                                  label="Img"
                                  required
                                  id="Img"
                                  >
                                  </v-text-field>
                        
                        <v-layout row>
                        <v-flex xs12 sm12 >
                        <v-img :hidden="img == ''" height="409" :src="img">
                        </v-img>
                        </v-flex>
                        </v-layout>
                        -->




                       
                        <v-textarea
                        v-model="guide"
                        name="guide"
                        label="Guide"
                        required
                        id="Guide"
                        > </v-textarea> 
                      
                    


                      <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-layout row>
                            <v-flex xs12 class="text-center">
                        <h4>Choose the date you went on this hike</h4>
                            </v-flex>
                        </v-layout>


                       <v-layout row>
                           <v-flex xs12 class="text-center mb-2" >
                                  <v-date-picker v-model="date"></v-date-picker>                          
                           </v-flex>
                       </v-layout>


                       <v-layout row>
                           <v-flex xs12 class="text-xs-center">

                                <v-select
                                v-model="temp"
                                :items="items"
                                 label="How was the weather"
                                ></v-select>
                           </v-flex>
                       </v-layout>

                               

                        



                       <v-layout row>
                           <v-flex xs12 class="text-center">
                               <v-btn 
                               type="submit"
                               color="yellow"
                               :disabled="!formIsValid">
                               Create
                               </v-btn>
                           </v-flex>
                       </v-layout>

                    </v-flex>
                      </v-layout>

                          </v-flex>
                      </v-layout>




                    </v-form>
                        </v-flex>
                    </v-layout>

                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>


<script>
import moment from 'moment';
export default {
    name: 'NewHiketest',
    data () {
        return {
            title: '',
            
            img: '',
            guide: '',
            date: new Date(),
          temp: '',
        //  imgfile: null,
            items: ['Sunny','Rainy','Cloudy','Cold'],
             msg: "Vue Image Upload and Resize Demo",
      hasImage: false,
      img: null,
      imgstringfinl: null
        }
    },
    created: function () {
        const dateTime = moment()
        this.date = dateTime.format('YYYY-MM-DD')
    },
    computed: {
        formIsValid () {
            return this.title !== '' &&
                   this.img !== '' &&
                   this.guide !== '' // &&
          //         this.temp !== ''
        },
      //  whensub () {
        //    const date = new Date(this.date)
          //  return date
       // }
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
  
        createnewhike () {
            if (!this.formIsValid) {
                return
            }
            // if(!this.imgfile){
            //     return
            // }
             const datefinl = moment(this.date).format('YYYYMMDD')
             const hikedetails = {
                title: this.title,
                img: this.imgstringfinl,
            
                guide: this.guide,
            //    temp: this.temp,
                date: datefinl,
            //    imgfile: this.imgfile
            }
            this.$store.dispatch('createnewhikebak', hikedetails)
       //     this.$router.push('/viewguidesfinl')
            // need to create the landing page
        },
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
           
           image2base64(this.img) // you can also to use url
           .then(
              (response) => {
                  this.img = response; //cGF0aC90by9maWxlLmpwZw==
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
        
  /*      tempcomputed (temp) {
            if (temp == "Sunny"){
                return '../assets/temp/Sunny.png'
            }
        }   */
    }
}
</script>

<style scoped>
.img {
    position: relative;
    left: -269px
}
.pik {
    position: relative;
    left: -248px
}
</style>