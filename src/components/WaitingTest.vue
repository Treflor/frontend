<template>
<v-container >
<!--v-if="loading">  -->
  <!--
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>     
    </div>
  </v-container>
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="item in wholeResponse"
        :key="item.index"
        mb-2>
        <v-card>
          <v-img
            :src="item.img"
            aspect-ratio="1"
          ></v-img>
<v-card-title primary-title>
            <div>
              <h2>{{item.title}}</h2>
              <div>Year: {{item.guide}}</div>
            </div>
          </v-card-title>
<v-card-actions class="justify-center">
           
          </v-card-actions>
</v-card>
      </v-flex>
  </v-layout>    -->    




 <v-layout v-for="item in wholeResponse" :key="item.index" class="mb-2">
            <v-flex xs12>

                <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? 10 : 1" :color="hover ? '#f0e859' : white">
                    <v-container fluid>
                    <v-layout row>
                        <v-flex xs5 sm5>
                            <v-img height="298" :src="item.img">
                            </v-img>

                        </v-flex>
                        <v-flex xs11 sm8 md7>
                            <v-card-title primary-title>
                                <h3>{{item.title}}</h3>
                            <!--    <div>Hiked on {{hike.date}} </div>   -->
                            </v-card-title>
                            <v-card-text class="text">
                                {{item.guide}}
                            </v-card-text>

                            <v-card-actions class="btn">
                                <v-btn :to="'/waiting/' + item.title">  
                                View {{item.title}} guide
                                </v-btn>

                            </v-card-actions>

                        </v-flex>
                    </v-layout>
                    </v-container>

                </v-card>
                </v-hover>
            </v-flex>

        </v-layout>





  </v-container>
</template>



<script>
import axios from 'axios'
export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
   let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }   
   axios
    .get('https://api-treflor.herokuapp.com/guides/',config)
      .then(response => {
      this.wholeResponse = response.data
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
<!--


<script>




import axios from 'axios';
export default {
    name: 'Waiting',



    data () {
        return {
            wholeResponse: [],
            guide: '',
            img: '',
            title: '',
            date: ''
        }

    },


/*
    computed: {
        guides () {
            return this.$store.getters.guidez
        }
    },
*/  

     

     mounted () {
         
            let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }
   axios
    .get('https://api-treflor.herokuapp.com/guides/',config)
      .then(response => {
      this.wholeResponse = response.data.Search
     // this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  },

    methods: {
        guides1 () {
         //   let config = {
           //     headers: {
             //     Authorization: this.$store.getters.token
               // }
             // }
              let uri = 'https://api-treflor.herokuapp.com/guides/';
                    axios.get(uri, /*this.sign*/   
                     config )
                     .then((response) => {
                        // commit('setCurrentUser',response.data)
                        console.log(response.data)
                        this.img = response.data.img
                        this.title = response.data.title
                        this.guide = response.data.guide
                        this.date = response.data.date
                     }).catch((error) => {
                         console.log(error)
                     })
        
        }
    }

}
</script>


<style scoped>
.btn{
    position: absolute;
    bottom: 8px;
}

.text{
    position: relative;
    left: 5px;
}
</style>
-->