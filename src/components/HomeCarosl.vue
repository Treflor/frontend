<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
   
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    name: 'HomeCarosl',

    data () {
      return {
        items: [
          {
            src: 'https://www.wallpaperflare.com/static/656/666/467/landscape-mountains-clouds-forest-wallpaper.jpg'
            
          },
          {
            src: 'https://asiamountains.net/upload/slide/slide-1960x857-07.jpg',
          },
          {
            src: 'https://cdn1.epicgames.com/ue/product/Screenshot/3-1920x1080-0cb61a5986219789195d9343ece82e64.jpg',
          },
          {
            src: 'https://www.tripsavvy.com/thmb/Km9RV_67NTpS2o7zEcRITqVqxJs=/4032x2268/smart/filters:no_upscale()/scenic-view-of-snowcapped-mountains-against-blue-sky-740670351-598783ea03f402001065a152.jpg',
          },
        ],
      }
    },
  }
</script>