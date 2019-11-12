<template>
<div class="foot">
  <!-- Footer -->
  <mdb-footer  class="font-small pt-4 mt-4">
      <v-container>
  <!--  <mdb-container class="text-left"> -->
    <!--  <mdb-row>  -->
          <v-row>
          <v-col>
    <!--    <mdb-col sm="6"> -->
          <h5 class="title">Footer Content</h5>
          <p>Here you can use rows and columns here to organize your footer content.</p>
    <!--    </mdb-col>  -->
          </v-col>
          <v-col>
    <!--    <mdb-col sm="6">  -->
             
          <h5 class="title">Links</h5>
          <ul>
            <li class="list-unstyled"><v-btn to='/join' flat>Link 1</v-btn></li>
            <li class="list-unstyled"><v-btn to='/join' flat>Link 1</v-btn></li>
            <li class="list-unstyled"><v-btn to='/join' flat>Link 1</v-btn></li>
            <li class="list-unstyled"><v-btn to='/join' flat>Link 1</v-btn></li>
          </ul>
    <!--    </mdb-col>   -->
          </v-col>
          </v-row>
   <!--   </mdb-row>   -->
  <!--  </mdb-container>  -->
    </v-container>
    <div class="footer-copyright text-center py-3">
        <v-row align="center">
      <mdb-container fluid>
        &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
        </v-row>
    </div>
    
  </mdb-footer>
  <!-- Footer -->
</div>
</template>


<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'HomeFooter',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>


<style scoped>

.foot {
  background: linear-gradient(to bottom , #21211f,#32332f)
}

</style>
