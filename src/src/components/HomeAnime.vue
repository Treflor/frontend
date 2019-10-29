<template>
    <div id="example-1">
  <v-btn color="white" flat="true" @click="show = !show">
    Toggle render
  </v-btn>
  <transition name="slide-fade">
    <p v-if="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat quia pariatur tempora ea possimus optio magnam cupiditate odit, accusamus mollitia eveniet neque ratione, rerum fugiat enim beatae, aperiam consequatur?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia, aspernatur animi deleniti odit at repellendus, incidunt, voluptates consequuntur modi inventore obcaecati debitis saepe. Quia sit iste iure dignissimos beatae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolores porro alias, assumenda fugiat saepe ducimus error ipsam repudiandae vitae. Asperiores harum, minima ut ex doloremque placeat iure quae ipsum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, esse veniam illo id a dicta. Facilis natus debitis nihil rerum hic asperiores odit iste blanditiis. Saepe vitae voluptatibus qui tempora?
    </p>
  </transition>
</div>
</template>

<script>
  export default {
      name : 'HomeAnime'
  }
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
