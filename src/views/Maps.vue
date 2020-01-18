<template>
  <span>
    <hiking-map></hiking-map>
  <!--  <home-map></home-map>   -->
    
  </span>
</template>

<script>
import HomeMap from '@/components/HomeMap.vue'
import HikingMap from '@/components/HikingMap.vue'


export default {
  components: {
    HomeMap,
    HikingMap
  
  },
};
</script>
