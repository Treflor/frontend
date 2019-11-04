<template>
    <span>
     
        <home-palex></home-palex>
        <home-details></home-details>
        <home-palex2></home-palex2>
        <home-treks></home-treks>
        <home-progress></home-progress>
        <home-hikesz></home-hikesz>
        

        
    </span>
</template>

<script>

import HomePalex from '@/components/HomePalex';
import HomeDetails from '@/components/HomeDetails';
import HomePalex2 from '@/components/HomePalex2';
import HomeProgress from '@/components/HomeProgress';
import HomeTreks from '@/components/HomeTreks';
import HomeHikesz from '@/components/HomeHikesz';
//import HomeAnime from '@/components/HomeAnime'

export default {
    name: 'Home',
    components: {
        HomePalex,
        HomeDetails,
        HomePalex2,
        HomeProgress,
        HomeTreks,
        HomeHikesz,
  //      HomeAnime
    }
};
</script>