<template>
  <v-card
    flat
    tile
  >
    <v-toolbar
      color="green"
      
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title color="blue"></v-toolbar-title>
      <v-btn color="#9C7A44" class="hidden-sm-and-down" to="/">Treflor</v-btn>

      <v-spacer></v-spacer>
       <v-spacer class="hidden-sm-and-down"></v-spacer>
       <v-btn color="#9C7A44" class="hidden-sm-and-down" to="/explore">Explore</v-btn>
       <v-btn color="#9C7A44" class="hidden-sm-and-down" to="/sign-in">SIGN IN</v-btn>
       <v-btn color="#9C7A44" class="hidden-sm-and-down" to="/join">JOIN</v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn flat icon color="pink">
              <v-icon>favorite</v-icon>
            </v-btn>
    </v-toolbar>

  </v-card>
</template>

<script>
export default {
    name: 'AppBar',
    data() {
        return {
            appTitle:'TREFLOR',
            drawer: false,
            color:"#A7CD1E",
            items: [
                { title: 'Explore'},
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    }
};
</script>








<style>
.transparent {
   background-color: white!important;
   opacity: 0.65;
   border-color: transparent!important;
 }
 </style>