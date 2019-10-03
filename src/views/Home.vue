<template>
  <span>
    <hello-world></hello-world>
    <home-carosl></home-carosl>
 <!--   <home-card></home-card>   -->
    <home-glry></home-glry>
   </span>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import HomeCarosl from '@/components/HomeCarosl';
import HomeCard from '@/components/HomeCard';
import HomeGlry from '@/components/HomeGlry';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    HomeCarosl,
    HomeCard,
    HomeGlry
  },
};
</script>
