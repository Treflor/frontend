<template>
<div class="main">

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
    
                        <v-btn color="warning" @click="onpub">
                            PUBLISH
                        </v-btn>
    
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>




    </v-container>
</div>
</template>

<script>
export default {
    name: 'Guide2.vue',
    props: ['title'],
    computed: {
        hike() {
            return this.$store.getters.DoneHike(this.title)
        }
    },


    methods: {
        onpub () {
         
            
            const hikedetails = {
                title: this.hike.title,
                img: this.hike.img,
                guide: this.hike.guide,
            //    temp: this.temp,
            //    date: hike.whensub
            }
            this.$store.dispatch('createnewhikefinl', hikedetails)
            this.$router.push('/waiting')
        },

        }

    }



</script>

<style scoped>
.main {
    background-image: url("https://img.pngio.com/forest-background-the-linux-foundation-forest-background-1800_1013.jpg")
}
</style>






