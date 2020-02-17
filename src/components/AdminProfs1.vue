
<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Social accounts</v-flex>
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md4>
                <v-card dark>
                    <v-responsive>
                        <v-img src="https://cdn0.iconfinder.com/data/icons/social-media-circle-long-shadow/1024/facebook-512.png" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Facebook</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Treflor</h3>
                           
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        
                        <v-btn block color="green">Visit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card dark>
                    <v-responsive>
                        <v-img color="white" src="https://library.kissclipart.com/20180831/geq/kissclipart-twitter-icon-clipart-computer-icons-social-media-c-132a23a69f409f79.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Twitter</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>



                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">@Treflor</h3>
                            </div>
                     
                    </v-card-text>

                    <v-card-actions>
                        <v-btn block color="green">Visit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card dark>
                    <v-responsive>
                        <v-img src="https://blog.hjmt.com/wp-content/uploads/2016/05/insta.png" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Instagram</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">@treflor</h3>
                            </div>
                    
                    </v-card-text>

                <v-card-actions >   
                        
                        <v-btn block color="green">Visit</v-btn>
                    </v-card-actions> 
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AdminProfs1'
}
</script>
