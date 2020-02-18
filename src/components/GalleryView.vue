<template>
    <v-container>
        
<v-layout row>
  <v-flex xs12 class="text-xs-center">
    <v-progress-circular
                         v-if="progress"
                         position = "center"
      :hidden="progress == false"                   
      :size="168"
      :width="19"
      color="#74d4ae"
      indeterminate
      
    ></v-progress-circular>
  </v-flex>
</v-layout>
        <v-layout row v-for="img in wholeResponse " :key="img.id">
            <v-flex xs12>
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center font-weight-thin display-3">
                    {{ img.title }}
                </v-flex>
            </v-layout>
            <v-layout row>
            <v-flex xs12 class="text-xs-center mt-3">
                
                 <expandable-image close-on-background-click class="mt-1" :src="img.img0"></expandable-image>
                 <expandable-image close-on-background-click class="mt-1" :src="img.img1"></expandable-image>
                 <expandable-image close-on-background-click class="mt-1" :src="img.img2"></expandable-image>

            </v-flex>
            </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            wholeResponse: [],
            progress: true
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
      this.progress = false

    })
    }
}


</script>
