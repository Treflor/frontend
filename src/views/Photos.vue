<template>
  <span>
   <home-photos></home-photos>
    <home-footer></home-footer>
    


   </span>
</template>

<script>
import HomePhotos from '@/components/HomePhotos';
import HomeFooter from '@/components/HomeFooter';


export default {
  name: 'Home',

  components: {
    HomePhotos,
    HomeFooter
  },
};
</script>