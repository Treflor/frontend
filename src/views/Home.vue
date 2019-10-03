<template>
  <span>
    <hello-world></hello-world>
    <home-carosl></home-carosl>
 <!--   <home-card></home-card>   -->
    <home-glry></home-glry>
    <home-img></home-img>
    <home-footer></home-footer>
    


   </span>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import HomeCarosl from '@/components/HomeCarosl';
import HomeCard from '@/components/HomeCard';
import HomeGlry from '@/components/HomeGlry';
import HomeFooter from '@/components/HomeFooter';
import HomeImg from '@/components/HomeImg';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    HomeCarosl,
    HomeCard,
    HomeGlry,
    HomeImg,
    HomeFooter
  },
};
</script>
