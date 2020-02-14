<template>
    <v-container>
            <v-layout row>
        <v-flex xs12 class="text-xs-center font-weight-black headline">
            Ella
        </v-flex>
    </v-layout>
    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-card elevation="19">
<gmap-map v-bind:center="center" v-bind:zoom="12" style="width: 1200px; height: 576px" >
        <gmap-polyline v-bind:path.sync="path" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
      </gmap-map>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>

import axios from 'axios'
const decodePolyline = require('decode-google-map-polyline');
export default {
    
    data() {
        return {
            wholeResponse: [],
            
            center: {lat: 55.915655, lng: -4.744502},
            path: []
        }
    },
      mounted () {
   let config = {
                headers: {
                  Authorization: this.$store.getters.token
                }
              }   
   axios
    .get('https://api-treflor.herokuapp.com/journey/',config)
      .then(response => {
      this.wholeResponse = response.data
      this.loading = false
      this.$store.state.hikezfinl1 = this.wholeResponse
      console.log(this.wholeResponse[4].direction.points)
    })
    .catch(error => {
      console.log(error)
    })

  var polyline = '{oll@{n|iN}AfCgApA}BdBuHhFeDnB{AdAg@d@{CzEu@vAi@lA_@n@_@b@eC|B_EhDgCbCY`@}AhCeCbDm@dAmAhCqApCk@lAg@xAU`AMz@QbBc@jB]t@i@f@eAt@_Aj@gCvAiCdBm@j@cAjAU\\{@dAgAz@qAvAk@`As@`Ai@h@[Ve@\\m@XcA^qBb@cATk@Vi@\\oAdAo@l@]Tu@NeCDaCJe@F[J[TQNUd@ETGdAHh@d@`An@`At@jAP^VhANfBf@jGHjB?fAQnCAfBTzCHx@AlAAzAEj@Q|@Qd@y@dAm@f@s@^eBr@oAb@kBn@kIlBoE~AeBp@cAp@g@f@c@d@g@p@uAnCiCnFmCpGyBzFq@tAi@x@yA|B_AvBg@xAw@|AmAtBu@rA_BnDi@nAcArB}BtEu@`Bc@bAyAjCgBzD{BtGq@tBCTJ^bB~@`@Zt@|@j@`Aj@nA~@dCVpAP`B@`@C`AUhAu@vBOt@m@|By@xA_AlBm@pAkCjGAPOd@KZBB?D?DNVDJ@Jl@j@b@j@hAlB`@r@v@|BV|@PjAPvB@`@OvAk@zCc@nB_CjHcA`CcAtBaArB}@|AiB`Ey@dBk@~@cB`B}AfBsA|B_AhB';
 // console.log(decodePolyline(polyline));
  this.path = decodePolyline(polyline);
  console.log(this.path)
  }
}
</script>
