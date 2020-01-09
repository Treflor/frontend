<template>
    <v-container>
    <v-layout row wrap>
    <v-flex xs12 mb-8 v-for="gallery in galleries" :key="gallery.title">
        <v-card>
            <v-card-title class="font-weight-black">{{ gallery.title }}</v-card-title>
            <v-layout row wrap>
                <v-flex xs4 sm4 mb-2 ml-1 mr-1>
                    <v-img :src="gallery.img1"></v-img>
                </v-flex>
                <v-flex xs4 sm4 mb-2 mr-1>
                    <v-img :src="gallery.img2"></v-img>
                </v-flex>
                <v-flex xs4 sm4 mb-2 mr-1>
                    <v-img :src="gallery.img3"></v-img>
                </v-flex>

            </v-layout>

        </v-card>
    </v-flex>


   
    </v-layout>

  




    </v-container>
</template>

<script>
export default {
    name: 'ImgGallery',
    



    computed : {
        galleries () {
            return this.$store.getters.galleries

        }
    }
   
   

/*

   data () {
       return {
           items : [
               {title: "1", img: ""},
               
               {title: "1", img: ""},
               {title: "1", img: ""},
               {title: "1", img: ""},
               {title: "1", img: ""},
               {title: "1", img: ""}
           ]

       }  */
   






}
</script>
