<template>
  <div class="text-xs-center font-weight-bold">
      <div class="prog">
    <v-progress-circular
      :rotate="360"
      :size="200"
      :width="40"
      :value="value"
      color="teal"
    >
      {{ "Photos" }}
      {{value}}
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="200"
      :width="40"
      :value="value"
      color="primary"
    >
      {{"Users"}}
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="90"
      :size="200"
      :width="40"
      :value="value"
      color="red"
    >
      {{"Routes"}}
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="180"
      :size="200"
      :width="40"
      :value="value"
      color="pink"
    >
      {{"Hikes"}}
      {{ value }}
    </v-progress-circular>
      </div>
  </div>
</template>


<style lang="stylus" scoped>
  .v-progress-circular{
    margin: 4rem
  };

  
  .prog{
      font-size:"20px",
    

  }
</style>
<style scoped>
.prog{
    background-color:honeydew;
}
</style>




<script>
  export default {
    data () {
      return {
        interval: {},
        value: 0
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    }
  }
</script>

