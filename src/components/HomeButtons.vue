
<template>
  <v-container class="grey lighten-5">
      <v-row
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="align in alignments"
          :key="align"
          :align-self="align"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-btn color="yellow">MAPS</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>





<script>
  export default {
      name: 'HomeButtons',
    data () {
      return {
        alignmentsAvailable: [
          'start',
          'center',
          'end',
          'baseline',
          'stretch',
        ],
        alignment: 'center',
        dense: false,
        justifyAvailable: [
          'start',
          'center',
          'end',
          'space-around',
          'space-between',
        ],
        justify: 'center',
      }
    },
  }
</script>