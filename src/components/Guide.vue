<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h1 class="blue--text"> {{hike.title}} </h1>
                    </v-card-title>
                    <v-img height="400" :src="hike.img">
                    </v-img>
                    <v-card-text>
                        <div class="text display-1 blue-grey--text">{{hike.date}}</div>
                        <div>{{hike.guide}}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="yellow" >
                            View photo gallery
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>




    </v-container>
</template>

<script>
export default {
    name: 'Guide.vue',
    props: ['id'],
    computed: {
        hike() {
            return this.$store.getters.DoneHike(this.id)
        }
    }
}
</script>

