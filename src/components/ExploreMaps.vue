<template>
   <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Ella</v-flex>
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md12>
                <v-card>
                    <v-responsive>
                        <v-img src="https://www.saltinourhair.com/wp-content/uploads/2016/11/Things-to-do-Ella-Sri-Lanka-Nine-arch-bridge-view.jpg" height="400px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">Ella</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                </v-card>
            </v-flex>
        </v-layout>
   </v-container>

</template>


<script>
export default {
    name: 'ExploreMaps'
}
</script>
