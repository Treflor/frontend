<template>
  <span>
    <hello-world></hello-world>
    <home-carosl></home-carosl>
  </span>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
import HomeCarosl from '@/components/HomeCarosl';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    HomeCarosl
  },
};
</script>
