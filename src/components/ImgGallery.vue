<template>
    <v-container>
    <v-layout row wrap>
    <v-flex xs12 mb-8 v-for="gallery in galleries" :key="gallery.title">
        <v-card color="#f5c242">
            <v-card-title class="font-weight-black">{{ gallery.title }}</v-card-title>
            <v-layout row wrap>
                <v-flex xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img1"></expandable-image>
                </v-flex>
                <v-flex xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img2"></expandable-image>
                </v-flex>
                <v-flex xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img3"></expandable-image>
                </v-flex >
                 <v-flex v-if="gallery.img4 != null" xs4 sm4 mb-2 ml-1 mr-1>
                     <expandable-image :src="gallery.img4"></expandable-image>
                </v-flex>
                <v-flex v-if="gallery.img5 != null" xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img5"></expandable-image>
                </v-flex>
                <v-flex v-if="gallery.img6 != null" xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img6"></expandable-image>
                </v-flex>
                
                <v-flex v-if="gallery.img7 != null" xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img7"></expandable-image>
                </v-flex>
                
                <v-flex v-if="gallery.img8 != null" xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img8"></expandable-image>
                </v-flex>
                
                <v-flex v-if="gallery.img9 != null" xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img9"></expandable-image>
                </v-flex>
                
                <v-flex v-if="gallery.img10 != null" xs4 sm4 mb-2 ml-1 mr-1>
                    <expandable-image :src="gallery.img10"></expandable-image>
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
