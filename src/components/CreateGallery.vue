<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6>
                <v-form>
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
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>






<script>
export default {
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
        

}
}
</script>
