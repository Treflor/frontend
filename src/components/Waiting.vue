<template>
    <v-container>
        <v-layout v-for="hike in guides" :key="hike.title" class="mb-2">
            <v-flex xs12>

                <v-hover v-slot:default="{hover}">
                <v-card :elevation="hover ? 10 : 1" :color="hover ? '#f0e859' : white">
                    <v-container fluid>
                    <v-layout row>
                        <v-flex xs5 sm5>
                            <v-img height="298" :src="hike.img">
                            </v-img>

                        </v-flex>
                        <v-flex xs11 sm8 md7>
                            <v-card-title primary-title>
                                <h3>{{hike.title}}</h3>
                            <!--    <div>Hiked on {{hike.date}} </div>   -->
                            </v-card-title>
                            <v-card-text class="text">
                                {{hike.guide}}
                            </v-card-text>

                            <v-card-actions class="btn">
                                <v-btn :to="'/waiting/' + hike.title">  
                                View {{hike.title}} guide
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
export default {
    name: 'Waiting',

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

.text{
    position: relative;
    left: 5px;
}
</style>
