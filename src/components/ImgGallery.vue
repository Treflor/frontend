<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3 class="text-xs-center">
                <v-card>
                    <v-layout row wrap>
                        <v-flex xs12 sm4 v-for="gallery in galleries" :key="gallery.title">
                        <v-img :src="gallery.img1"></v-img>
                        <v-img :src="gallery.img2"></v-img>
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
