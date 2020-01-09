<template>
  <v-container>
     <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Guide lists</v-flex>
        </v-layout>
    <v-layout row class="mb-9">
      <v-flex xs12 >
        <v-card color="warning">
          <v-layout row>
            <v-flex xs12 class="text-xs-center font-weight-black">
          <v-card-text>
            Guides waiting for permission to be published
          </v-card-text>
            </v-flex>
          </v-layout>
        <v-btn to="/adminpage/waiting" block width="256" color="warning" dark>WAITING GUIDES</v-btn>
        </v-card>

      </v-flex>
    </v-layout>

     <v-layout row>
      <v-flex xs12>
        <v-card color="info">
          <v-layout row>
            <v-flex xs12 class="text-xs-center font-weight-black">
          <v-card-text>
            Published Guides list
          </v-card-text>
            </v-flex>
          </v-layout>
        <v-btn to="viewguidesfinl" block width="256" color="info" dark>PUBLISHED GUIDES</v-btn>
        </v-card>

      </v-flex>
    </v-layout>

  </v-container>
</template>
