<template>
    <v-container>
        <v-layout row>
            <v-flex xs 12 sm6>
                <v-card>
                    <v-form @submit.prevent="newcreatehike">
                      <v-layout row>
                          <v-flex xs12 sm6 offset-sm3 class="text-center"> 
                        <v-text-field
                        name = "hike"
                        label= "Hike"
                        required
                        id = "hike"
                        >

                        </v-text-field>

                        <v-text-field
                        name = "location"
                        label= "Location"
                        required
                        id = "location"
                        >

                        </v-text-field>

                        <v-text-field
                        name = "img"
                        label= "Picture"
                        required
                        id = "img"
                        >

                        </v-text-field>

                        <v-layout row>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-img :hidden="img == ''" height="409" :src="img">
                                </v-img>
                            </v-flex>
                        </v-layout>

                        <v-text-area
                        name = "guide"
                        label= "Guide"
                        required
                        id = "guide"
                        >
                        </v-text-area>


                          </v-flex>
                      </v-layout>

                      <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-layout row>
                            <v-flex xs12 class="text-center">
                        <h4>Choose the date you went on this hike</h4>
                            </v-flex>
                        </v-layout>


                       <v-layout row>
                           <v-flex xs12 class="text-center mb-2" >
                                  <v-date-picker v-model="date"></v-date-picker>
 
 
                          
                           </v-flex>
                       </v-layout>

                       <v-layout row>
                           <v-flex xs12 class="text-center">
                               <v-btn 
                               type="submit"
                               color="yellow"
                               :disabled="!formIsValid">
                               Create
                               </v-btn>
                           </v-flex>
                       </v-layout>




                    </v-form>

                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>
