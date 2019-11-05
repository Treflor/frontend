<template>
<div class="ikls">
    <div id="app">
      <div class="ikls2">
      <vue-particles color="#66f542"
        :particleOpacity="0.7"
        linesColor="#66f542"
        :particlesNumber="80"
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
   height: 1200px;
 }

  
  .ikls {
    background-image: url("https://i.imgur.com/ZvsH8or.jpg");
  
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  
  


 

</style>