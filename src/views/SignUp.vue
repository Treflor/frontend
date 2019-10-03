<template>
  <span>
  <sign-up></sign-up>
    <home-footer></home-footer>
    


   </span>
</template>

<script>

import SignUp from '@/components/SignUp'
import HomeFooter from '@/components/HomeFooter';


export default {
  name: 'SigUp',

  components: {
 
   SignUp,
    HomeFooter
  },
};
</script>
