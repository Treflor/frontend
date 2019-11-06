<template>


<div class="ikls">
    <div id="app">
      <div class="ikls2">
      <vue-particles color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="89"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"></vue-particles>
      </div>
       
       
  <!--      background-size: cover;
    position: absolute;  -->
    </div>
</div>
   
 </template>


 <script>
export default {
    name: 'HomeTikl'
}
 </script>


<style>


 .ikls2 {
   height: 600px;
 }

  
  .ikls {
    background-image: url("https://i.imgur.com/RWnjgTi.jpg");
    
 


  
    top: 0;
    left: 0;
    width: 1400;
    height: 600;
  
  }
  

  
  


 

</style>