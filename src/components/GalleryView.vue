<template>
    <v-container>
        <v-layout row v-for="img in wholeResponse " :key="img.id">
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center font-weight-thin display-3">
                    {{ img.title }}
                </v-flex>
            </v-layout>
            <v-flex xs12 class="text-xs-center mt-5">
                
                <v-img class="mt-1" :src="img.img0"></v-img>
                <v-img class="mt-1" :src="img.img1"></v-img>
                <v-img class="mt-1" :src="img.img2"></v-img>

            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            wholeResponse: []
        }
    },

    mounted() {

        let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }   
   axios
    .get('https://api-treflor.herokuapp.com/images/',config)
      .then(response => {
      this.wholeResponse = response.data/* 
      this.loading = false */
      console.log(this.wholeResponse[3].img0)

    })
    }
}


</script>
