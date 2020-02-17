<template>
    <v-container>
        <v-layout row v-for="img in wholeResponse " :key="img.id">
            <v-flex xs12 class="text-xs-center">
                <v-img :src="img.img0"></v-img>
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
