<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 class="text-xs-center">
                <h1> Img Gallery </h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
        <v-flex xs12  v-for="gallery in galleries" :key="gallery.title">
        
            <v-flex xs12 class="text-xs-center">
                <h2> {{ gallery.title }} </h2>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card elevation="19">
                         <expandable-image close-on-background-click :src="gallery.img2"></expandable-image>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
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