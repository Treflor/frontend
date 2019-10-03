<template>
  <v-card height="200"
  color="white">
 
    <v-footer
    height="160"
    color="yellow accent-4"
      absolute
      class="font-weight-medium"
    >
    
      <v-col
        class="text-center"
        cols="16"
      >
        {{ new Date().getFullYear() }} — <strong>Treflor</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>


<script>
export default {
    name: 'HomeFooter'
}
</script>