<template>
    <v-container>
     <!--   <v-layout row>
            <v-layout row>
                        <v-flex xs12 class="text-xs-center title font-weight-black my-10">
                            <h1>Create Gallery</h1>
                            <v-spacer></v-spacer>
                            <h2>Please select upto 5</h2>
                
                        </v-flex>
                    </v-layout>
        </v-layout>
        <v-layout row class="my-10">
            
            <v-flex xs12 class="text-xs-center my-10">
              
                <v-form>
                    
                    
                        <div class="pik">
                        <v-layout row class="mb-12">
                             <div class="img font-weight-light text-xs-center">
                            <v-flex xs12 class="text-xs-center">   
                            Img-1
                            </v-flex>
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
                            
                      </v-layout>





                        <v-layout row>     
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
        </v-layout>      -->


       
<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
     

        <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 19 : 1" :color="hover ? 'green' : 'white'" >
            <v-card-text>
                <v-container>  

                      <v-layout row>
                    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Create Gallery</v-flex>
                    </v-layout> 

                    <v-form @submit.prevent="create">
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="person"
                                    name="title"
                                    label="Title"
                                    id="title"
                                    v-model="hike"
                                    type="text"
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
        :className="['fileinput', { 'fileinput--loaded': hasImage1 }]"
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
                        </v-layout>
    </div>




    <div class="img font-weight-light">
                            Img
                        </div>
                        <div class="pik">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage2 }]"
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
    </div>



    <div class="img font-weight-light">
                            Img
                        </div>
                        <div class="pik">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage3 }]"
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
    </div>





                          <div class="img font-weight-light">
                            Img
                        </div>
                        <div class="pik">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage4 }]"
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



         <div class="img font-weight-light">
                            Img
                        </div>
                        <div class="pik">
                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>

                                <image-uploader
        :preview="true"
        :className="['fileinput', { 'fileinput--loaded': hasImage5 }]"
        capture="environment"
        :debug="1"
        doNotResize="gif"
        :autoRotate="true"
        outputFormat="string"
        @input="setImage5"
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
            hasImage5 ? "Replace" : "Click to upload"
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
                             <v-btn color="yellow" type="submit">
                                    Create</v-btn>

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
      
      title: '',
      hike: '',

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
    
         


          setImage2: function(output) {
      this.hasImage2 = true;
      this.img2 = output;
    
      this.imgstringfinl2 = this.img2.replace('data:image/jpeg;base64,', '')
      console.log(
      this.imgstringfinl1)
    
    },
    
  /*          signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },

    */
        


          setImage3: function(output) {
      this.hasImage3 = true;
      this.img3 = output;
    
      this.imgstringfinl3 = this.img3.replace('data:image/jpeg;base64,', '')
    
    },
    
      /*      signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },
*/
    

          setImage4: function(output) {
      this.hasImage4 = true;
      this.img4 = output;
    
      this.imgstringfinl4 = this.img4.replace('data:image/jpeg;base64,', '')
    
    },
    
  /*          signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },
*/
    

        
          setImage5: function(output) {
      this.hasImage5 = true;
      this.img5 = output;
    
      this.imgstringfinl5 = this.img5.replace('data:image/jpeg;base64,', '')
    
    },
    
  /*          signup () {

                this.$store.dispatch('signup', {email: this.email, password: this.password, password2: this.password2, family_name: this.family_name, photo: this.imgstringfinl, given_name:this.given_name})

            },
*/
    
     


        create() {
          console.log(this.imgstringfinl1);
          console.log(this.imgstringfinl2);
          console.log(this.imgstringfinl3);
          console.log(this.imgstringfinl4);
          console.log(this.imgstringfinl5);
          console.log(this.hike);

          this.$store.dispatch('creategallery', {title:this.hike, img0:this.imgstringfinl1 , img1:this.imgstringfinl2 , img2:this.imgstringfinl3 , img3:this.imgstringfinl4 , img4:this.imgstringfinl5 })


        }




    
    
    
    
    
        

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