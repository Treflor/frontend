<template>
    <v-app>
        <app-navigation></app-navigation>
        

        <v-content transition="slide-x-transition">
            <router-view></router-view>
            
        </v-content>
        <home-foot></home-foot>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import HomeFoot from '@/components/HomeFoot';
export default {
    name: 'App',
    components: {
        AppNavigation,
        HomeFoot
    }
};
</script>

<style>
</style>