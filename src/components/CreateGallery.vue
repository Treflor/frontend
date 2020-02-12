<template>
    <v-container>
        <v-layout row>
            <v-layout row>
                        <v-flex xs12 class="text-xs-center title font-weight-thin">
                            Create Gallery
                        </v-flex>
                    </v-layout>
        </v-layout>
        <v-layout row>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 class="text-xs-center">
                <v-form>
                    
                    
                        <div class="pik">
                        <v-layout row class="mb-12">
                             <div class="img font-weight-light text-xs-center">
                            Img-1
                        </div>
                            <v-flex xs12 sm6 offset-sm3 class="mb-12">

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage1"
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
            hasImage1 ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
                            </v-flex>
                            
                    <!--    </v-layout>





                        <v-layout row>     -->
                             <div class="img font-weight-light">
                            Img-2
                        </div>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage2"
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
            hasImage2 ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
                            </v-flex>
                        </v-layout>





                        <v-layout row>
                             <div class="img font-weight-light">
                            Img-3
                        </div>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage3"
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
            hasImage3 ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
                            </v-flex>
                        </v-layout>





                        <v-layout row>
                             <div class="img font-weight-light">
                            Img-4
                        </div>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage4"
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
            hasImage4 ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
                            </v-flex>
                        </v-layout>
    </div>
    
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>






<script>
export default {
    
data() {
    return {
          hasImage1: false,
          hasImage2: false,
          hasImage3: false,
          hasImage4: false,
          hasImage5: false,
      
      img1: null,
      imgstringfinl1: null,
      
      img2: null,
      imgstringfinl2: null,

      img3: null,
      imgstringfinl3: null,

      img4: null,
      imgstringfinl4: null,

      img5: null,
      imgstringfinl5: null,

    }
},

    methods: {

        
      setImage1: function(output) {
      this.hasImage1 = true;
      this.img1 = output;
    
      this.imgstringfinl1 = this.img1.replace('data:image/jpeg;base64,', '')
    
    },
    
         /*   signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },
*/
    
         onfilepicked (event) {
            const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.img1 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile1 = files[0]

            const image2base64 = require('image-to-base64');
           
           image2base64(this.imgfile1) // you can also to use url
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




          setImage2: function(output) {
      this.hasImage2 = true;
      this.img2 = output;
    
      this.imgstringfinl2 = this.img2.replace('data:image/jpeg;base64,', '')
    
    },
    
  /*          signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },

    */
         onfilepicked (event) {
            const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.img2 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile2 = files[0]

            const image2base64 = require('image-to-base64');
           
           image2base64(this.imgfile2) // you can also to use url
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



          setImage3: function(output) {
      this.hasImage3 = true;
      this.img3 = output;
    
      this.imgstringfinl3 = this.img3.replace('data:image/jpeg;base64,', '')
    
    },
    
      /*      signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },
*/
    
         onfilepicked (event) {
            const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.img3 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile3 = files[0]

            const image2base64 = require('image-to-base64');
           
           image2base64(this.imgfile3) // you can also to use url
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


          setImage4: function(output) {
      this.hasImage4 = true;
      this.img4 = output;
    
      this.imgstringfinl4 = this.img4.replace('data:image/jpeg;base64,', '')
    
    },
    
  /*          signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },
*/
    
         onfilepicked (event) {
            const files = event.target.files
            let imgname = files[0].name
            if (imgname.lastIndexOf('.') <= 0) {
                return alert('No file')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.img4 = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imgfile4 = files[0]

            const image2base64 = require('image-to-base64');
           
           image2base64(this.imgfile4) // you can also to use url
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


    
    
    
    
    
        

}
}
</script>

<!--
<style scoped>
.img-section {
    bottom: 100px
}
</style>
-->