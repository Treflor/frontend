<template>
<v-parallax height="646" src="https://images.wallpaperscraft.com/image/mountain_peak_zermatt_126325_3840x2400.jpg">
 <!-- <v-parallax height="489" src="https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
  <v-parallax height="489" src="https://images.wallpaperscraft.com/image/mountain_peak_zermatt_126325_3840x2400.jpg"> 
      <v-parallax height="700" src="https://fcwallpaper.com/wp-content/uploads/2018/07/iPhone-Wallpaper-HD-Cristiano-Ronaldo-Juventus.jpg">-->
  <v-layout
      align-center
      column
      justify-center
    >
      <div class="cris">
      <h2 class="display-4 font-weight-thin mb-3 "><vue-typed-js :typeSpeed='16' :loop='true' :strings="['your', 'world']">
  <h2>Explore <span class="typing"></span></h2>
</vue-typed-js></h2>
      </div>
      <div class="btn">
      <v-row align="center">
      <v-btn large depressed color="yellow">MAPS</v-btn>
      <v-btn large depressed color="green">PHOTOS</v-btn>
      </v-row>
      </div>
  <!--    <div class="join">
      <h4 class="subheading font-weight-bold" >Join the CR7 community now!</h4>
      </div>  -->
    </v-layout>
  </v-parallax>
</template>

<script>

export default{
    name:'HomePalex'
};
</script>

<style scoped>
.join{
    color:sienna;
}

.cris{
    color:#000;
};

</style>