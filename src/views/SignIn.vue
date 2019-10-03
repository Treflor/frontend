<template>
  <span>
  <sign-in></sign-in>
    <home-footer></home-footer>
    


   </span>
</template>

<script>

import SignIn from '@/components/SignIn'
import HomeFooter from '@/components/HomeFooter';


export default {
  name: 'Home',

  components: {
 
   SignIn,
    HomeFooter
  },
};
</script>
