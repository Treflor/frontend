<template>
    <v-container>
        <v-layout v-for="hike in guides" :key="hike.title" class="mb-2">
            <v-flex xs12>
                <v-card>
                    <v-layout row>
                        <v-flex xs11 sm6>
                            <v-img height="298" :src="hike.img">
                            </v-img>

                        </v-flex>
                        <v-flex xs11 sm8 md7>
                            <v-card-title primary-title>
                                <h3 class="white--text">{{hike.title}}</h3>
                                <div>Hiked on {{hike.date}} </div>
                            </v-card-title>
                            <v-card-text>
                                {{hike.guide}}
                            </v-card-text>

                            <v-card-actions class="btn">
                                <v-btn :to="'/'"  >
                                View {{hike.title}} guide
                                </v-btn>

                            </v-card-actions>

                        </v-flex>
                    </v-layout>
                    

                </v-card>
            </v-flex>

        </v-layout>

    </v-container>
</template>


<script>
export default {
    name: 'ViewGuides',

    computed: {
        guides () {
            return this.$store.getters.hikez
        }
    }

}
</script>


<style scoped>
.btn{
    position: absolute;
    bottom: 8px;
}
</style>
