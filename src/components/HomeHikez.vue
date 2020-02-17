<template>


    <v-container grid-list-lg>
        <v-layout row wrap>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black">
            Hike Guides
        </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex ml2 xs12 sm4 v-for="hike in hikez" :key="hike.id" class="text-xs-center">
                <v-card @click="hikeclick()">
                    <v-img height="468" :src="hike.img"></v-img>
                    <v-card-title class="font-weight-black">{{hike.title}}</v-card-title>
                    <v-card-text class="font-weight-light">{{hike.height}}</v-card-text>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHikez',

    computed: {
        hikez () {
            return this.$store.getters.f_hikez
        }
    },

    methods: {
        hikeclick() {
            this.$router.push('/viewguides')
        }
    }




}
</script>
