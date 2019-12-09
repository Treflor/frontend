
<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://cdn0.iconfinder.com/data/icons/social-media-circle-long-shadow/1024/facebook-512.png" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Fb</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Keto</h3>
                           
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('keto')" data-cy="plansKetoBtn">
                            Go</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card color="white">
                    <v-responsive>
                        <v-img color="white" src="https://blog.oxfordcollegeofmarketing.com/wp-content/uploads/2014/12/twitter.png" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Twitr</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Paleo</h3>
                            </div>
                     
                    </v-card-text>

                    <v-card-actions v-if="['Menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('paleo')" data-cy="plansPaleoBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://blog.hjmt.com/wp-content/uploads/2016/05/insta.png" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Instgrm</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Vegan</h3>
                            </div>
                    
                    </v-card-text>

                 <!--   <v-card-actions v-if="['menu'].includes($route.name)">   -->
                        <v-btn outline block color="green" @click="showRecipes('vegan')" data-cy="plansVeganBtn">
                            Select This Plan</v-btn>
                <!--    </v-card-actions>  -->
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
