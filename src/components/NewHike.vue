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
<!--
                        <v-text-field
                        name = "location"
                        label= "Location"
                        required
                        id = "location"
                        >

                        </v-text-field>
                        
                        -->
              <!--          <div class="img font-weight-light">
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
                  --> 




                     
                                  <v-text-field
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
    name: 'NewHike',

    data () {
        return {
            title: '',
            
            img: '',
            guide: '',
            date: new Date(),
          temp: '',
        //  imgfile: null,

            items: ['Sunny','Rainy','Cloudy','Cold']
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

        whensub () {
            const date = new Date(this.date)
            return date
        }
    },


    methods: {
        createnewhike () {
            if (!this.formIsValid) {
                return
            }
            // if(!this.imgfile){
            //     return
            // }
             const hikedetails = {
                title: this.title,
                img: this.img,
            
                guide: this.guide,
            //    temp: this.temp,
                date: this.whensub,
            //    imgfile: this.imgfile
            }
            this.$store.dispatch('createnewhike', hikedetails)
            this.$router.push('/viewguidesfinl')
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
