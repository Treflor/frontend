<template>
    <v-app>
  <app-navigation></app-navigation>  
    <!--    <app-nav></app-nav>    -->
        

        <v-content transition="slide-x-transition">
            <router-view></router-view>
            
        </v-content>
        <home-foot></home-foot>
    </v-app>
</template>

<script>
import HomeFoot from '@/components/HomeFoot';
import AppNavigation from '@/components/AppNavigation';
//import AppNav from '@/components/AppNav.vue';
export default {
    name: 'App',
    components: {
        AppNavigation,
        HomeFoot,
  //      AppNav
    }
};
</script>

<style>
</style>