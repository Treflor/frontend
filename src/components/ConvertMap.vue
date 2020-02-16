<template>
    <v-container>
            <v-layout row >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
    <!--        Ella      -->
        </v-flex>
    </v-layout>

     <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
           From {{ this.path_info[0] }} to {{ this.path_info[1] }}  
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



            <v-layout row >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
   <!--         Ella     -->
        </v-flex>
    </v-layout>
     <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
           From {{ this.path1_info[0] }} to {{ this.path1_info[1] }}  
        </v-flex>
     </v-layout>
    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-card elevation="19">
<gmap-map v-bind:center="center" v-bind:zoom="12" style="width: 1200px; height: 576px" >
        <gmap-polyline v-bind:path.sync="path1" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
      </gmap-map>
            </v-card>
        </v-flex>
    </v-layout>

    <v-container v-if="this.path3[0]">
       <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
        <!--    Ella   -->
       </v-flex>
        
    </v-layout>
          <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
            {{ this.path1_info[0] }} to {{ this.path1_info[1] }}  
        </v-flex>
    </v-layout>
 
    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-card elevation="19">
<gmap-map v-bind:center="center" v-bind:zoom="12" style="width: 1200px; height: 576px" >
        <gmap-polyline v-bind:path.sync="path1" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
      </gmap-map>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>

    <v-container v-if="this.path4[0]">
       <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
        <!--    Ella   -->
       </v-flex>
        
    </v-layout>
          <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
            {{ this.path4_info[0] }} to {{ this.path4_info[1] }}  
        </v-flex>
    </v-layout>
 
    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-card elevation="19">
<gmap-map v-bind:center="center" v-bind:zoom="12" style="width: 1200px; height: 576px" >
        <gmap-polyline v-bind:path.sync="path4" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
      </gmap-map>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>

     <v-container v-if="this.path5[0]">
       <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
        <!--    Ella   -->
       </v-flex>
        
    </v-layout>
          <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
            {{ this.path5_info[0] }} to {{ this.path5_info[1] }}  
        </v-flex>
    </v-layout>
 
    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-card elevation="19">
<gmap-map v-bind:center="center" v-bind:zoom="12" style="width: 1200px; height: 576px" >
        <gmap-polyline v-bind:path.sync="path5" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
      </gmap-map>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>

     <v-container v-if="this.path6[0]">
       <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
        <!--    Ella   -->
       </v-flex>
        
    </v-layout>
          <v-layout row  >
        <v-flex xs12 class="text-xs-center font-weight-black headline">
            {{ this.path6_info[0] }} to {{ this.path6_info[1] }}  
        </v-flex>
    </v-layout>
 
    <v-layout row>
        <v-flex xs12 class="text-xs-center">
            <v-card elevation="19">
<gmap-map v-bind:center="center" v-bind:zoom="12" style="width: 1200px; height: 576px" >
        <gmap-polyline v-bind:path.sync="path6" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
      </gmap-map>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>



    </v-container>
</template>

<script>

import axios from 'axios'
const decodePolyline = require('decode-google-map-polyline');
export default {
    
    data() {
        return {
          // polyline: '{oll@{n|iN}AfCgApA}BdBuHhFeDnB{AdAg@d@{CzEu@vAi@lA_@n@_@b@eC|B_EhDgCbCY`@}AhCeCbDm@dAmAhCqApCk@lAg@xAU`AMz@QbBc@jB]t@i@f@eAt@_Aj@gCvAiCdBm@j@cAjAU\\{@dAgAz@qAvAk@`As@`Ai@h@[Ve@\\m@XcA^qBb@cATk@Vi@\\oAdAo@l@]Tu@NeCDaCJe@F[J[TQNUd@ETGdAHh@d@`An@`At@jAP^VhANfBf@jGHjB?fAQnCAfBTzCHx@AlAAzAEj@Q|@Qd@y@dAm@f@s@^eBr@oAb@kBn@kIlBoE~AeBp@cAp@g@f@c@d@g@p@uAnCiCnFmCpGyBzFq@tAi@x@yA|B_AvBg@xAw@|AmAtBu@rA_BnDi@nAcArB}BtEu@`Bc@bAyAjCgBzD{BtGq@tBCTJ^bB~@`@Zt@|@j@`Aj@nA~@dCVpAP`B@`@C`AUhAu@vBOt@m@|By@xA_AlBm@pAkCjGAPOd@KZBB?D?DNVDJ@Jl@j@b@j@hAlB`@r@v@|BV|@PjAPvB@`@OvAk@zCc@nB_CjHcA`CcAtBaArB}@|AiB`Ey@dBk@~@cB`B}AfBsA|B_AhB',
            wholeResponse: [],
     //       polyline: wholeResponse[4].direction.points, 
            center: {lat: 7.4807041, lng: 80.3227606},
     //   center: path[0],
            path: [],
            path1: [],
            path3: [],
            path4: [],
            path5: [],
            path6: [],

            path_info: [],
            path1_info: [],
            path3_info: [],
            path4_info: [],
            path5_info: [],
            path6_info: [],

            pathtracked: []
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
      //this.$store.state.hikezfinl1 = this.wholeResponse

      console.log(this.wholeResponse[4].direction.points)
      console.log(this.wholeResponse[3].direction.points)

        this.path1 = decodePolyline(this.wholeResponse[4].direction.points);
        this.path = decodePolyline(this.wholeResponse[3].direction.points);
        this.pathtracked = decodePolyline(this.wholeResponse[3].tracked_locations);
        console.log(this.pathtracked)
//        if(this.wholeResponse[5].direction.points){
//        this.path3 = decodePolyline(this.wholeResponse[5].direction.points);
//        }
//        this.path4 = decodePolyline(this.wholeResponse[6].direction.points);
//        this.path5 = decodePolyline(this.wholeResponse[7].direction.points);
//        this.path6 = decodePolyline(this.wholeResponse[8].direction.points);

        this.path_info[0] = this.wholeResponse[3].direction.start_address;
        this.path_info[1] = this.wholeResponse[3].direction.end_address;
//        this.path1_info[0] = this.wholeResponse[4].direction.start_address;
//        this.path1_info[1] = this.wholeResponse[4].direction.end_address;
//        this.path3_info[0] = this.wholeResponse[5].direction.start_address;
//        this.path3_info[1] = this.wholeResponse[5].direction.end_address;
//        this.path4_info[0] = this.wholeResponse[6].direction.start_address;
//        this.path4_info[1] = this.wholeResponse[6].direction.end_address;
//        this.path5_info[0] = this.wholeResponse[7].direction.start_address;
//        this.path5_info[1] = this.wholeResponse[7].direction.end_address;
//        this.path6_info[0] = this.wholeResponse[8].direction.start_address;
//        this.path6_info[1] = this.wholeResponse[8].direction.end_address;
        
        
        this.path1_info[0] = this.wholeResponse[4].direction.start_address;
        this.path1_info[1] = this.wholeResponse[4].direction.end_address;


   //   this.polyline = this.wholeResponse[4].direction.points  
    })
    .catch(error => {
      console.log(error)
    })

 // var polyline = '{oll@{n|iN}AfCgApA}BdBuHhFeDnB{AdAg@d@{CzEu@vAi@lA_@n@_@b@eC|B_EhDgCbCY`@}AhCeCbDm@dAmAhCqApCk@lAg@xAU`AMz@QbBc@jB]t@i@f@eAt@_Aj@gCvAiCdBm@j@cAjAU\\{@dAgAz@qAvAk@`As@`Ai@h@[Ve@\\m@XcA^qBb@cATk@Vi@\\oAdAo@l@]Tu@NeCDaCJe@F[J[TQNUd@ETGdAHh@d@`An@`At@jAP^VhANfBf@jGHjB?fAQnCAfBTzCHx@AlAAzAEj@Q|@Qd@y@dAm@f@s@^eBr@oAb@kBn@kIlBoE~AeBp@cAp@g@f@c@d@g@p@uAnCiCnFmCpGyBzFq@tAi@x@yA|B_AvBg@xAw@|AmAtBu@rA_BnDi@nAcArB}BtEu@`Bc@bAyAjCgBzD{BtGq@tBCTJ^bB~@`@Zt@|@j@`Aj@nA~@dCVpAP`B@`@C`AUhAu@vBOt@m@|By@xA_AlBm@pAkCjGAPOd@KZBB?D?DNVDJ@Jl@j@b@j@hAlB`@r@v@|BV|@PjAPvB@`@OvAk@zCc@nB_CjHcA`CcAtBaArB}@|AiB`Ey@dBk@~@cB`B}AfBsA|B_AhB';
 // console.log(decodePolyline(polyline));
  //var polyline = this.wholeResponse[4].direction.points;
  var polyline1 = '{oll@{n|iN}AfCgApA}BdBuHhFeDnB{AdAg@d@{CzEu@vAi@lA_@n@_@b@eC|B_EhDgCbCY`@}AhCeCbDm@dAmAhCqApCk@lAg@xAU`AMz@QbBc@jB]t@i@f@eAt@_Aj@gCvAiCdBm@j@cAjAU\\{@dAgAz@qAvAk@`As@`Ai@h@[Ve@\\m@XcA^qBb@cATk@Vi@\\oAdAo@l@]Tu@NeCDaCJe@F[J[TQNUd@ETGdAHh@d@`An@`At@jAP^VhANfBf@jGHjB?fAQnCAfBTzCHx@AlAAzAEj@Q|@Qd@y@dAm@f@s@^eBr@oAb@kBn@kIlBoE~AeBp@cAp@g@f@c@d@g@p@uAnCiCnFmCpGyBzFq@tAi@x@yA|B_AvBg@xAw@|AmAtBu@rA_BnDi@nAcArB}BtEu@`Bc@bAyAjCgBzD{BtGq@tBCTJ^bB~@`@Zt@|@j@`Aj@nA~@dCVpAP`B@`@C`AUhAu@vBOt@m@|By@xA_AlBm@pAkCjGAPOd@KZBB?D?DNVDJ@Jl@j@b@j@hAlB`@r@v@|BV|@PjAPvB@`@OvAk@zCc@nB_CjHcA`CcAtBaArB}@|AiB`Ey@dBk@~@cB`B}AfBsA|B_AhB';
 // var polylinee = '{~sl@kmliN{NaPoHaHQSJM`JeIdBoCNsA[wECsFlByFlCqEtBwBlAuAxDiIpHgPtBoH|@gFk@uGiAgD{DwFe@_@EAKE?ULGhGiNpCwHpAkGeAoGuD{GkCmBRsAnByFjFgLbE{IrFmLtFqL~CeFdDeIhGmN`DsFnDgCpOmEpFeBfCgAtBkBx@sD]}LJoIo@oI{AuEaBqCGyA^uAr@g@vHc@zAc@l@g@jB}AhBs@rD}@|CmBlDyEfEqEhDyCxEqCpD_DxAgIxGiO~FuIvK{JxBcCpAsCfEsG`CcBtOiKdCkCnJ{NpGiCvA{ClFaI|D_EbAeDx@aF`ByEdPg]zP_\\rGaLlDcCrCyEbDwEf@yCT}Eb@qBzBkETuBjBkDrK_UdM}WbT}c@pY{m@tBeH`GmLfFkL~FiOfFgK|Qw^xIqR|HuNdDuJhIyWrBcDdFeFbD{Bf@wA`E}I|ByHb@cAD{Bt@uCbCyC^gB|@{AnAe@xEObFiA|DfAbCCjFaB|AMpA`@fAJfA[xAaBxBw@fBiAvDaAfBk@lBDpDJ|@[dBcCfCX~A]fAmAxAU~C]dB}@pCi@bCcA~AmBUsBcA}@ZiB`B_BhBaCpF~@tBRd@Md@e@|@yCzDkCfDaCd@aAxA{@nEw@dEcD~EwE~AyBfDcD|FuCzBeDl@qCfDsDtCeCnGoDrBKn@mBnAcAjC@~B]zBmB`AsBzCeArCoCxD}BfE}ArAcDtDuBvCsAzD{ClAwAjBsAdE_AzBkC`BsCxGyItDoEjAcAj@uAxBeCrDeFhCiBh@wCnGuIt@gD`AiBrDyKtAeH`CsFjFmH~A}EhDmIpGwOnDwBp@c@^yAhDiHdC{EhAcAz@oANcCzAsBvByEhAiCe@qBF_AtBoCVqBaD_F}AsDO_H_AqOb@wEjBcEzBuDb@iBg@_EyA}B\\eEhBmCnBeAj@eGe@kFiCkIDuBfCiE`Tm^rFeKnA}DXoBw@u@s@aAs@sCPyEaAoCgC_BgGsFYcA]qBgAqB}@}@_@oAt@sHh@oDpBuF`@kFMoBx@}CLaDbEwD~C_IpBmCdCgDOeCkAcAHq@bBaHdAmBxBuBtCeKbBKfEb@vCYnAq@|FsBtDsBhFcF~HkHvFuIjIiGr@cBROjDSt@UVEdApB^tAL^^rFx@lBxAlBh@NrEJlGQrEgCfCo@nCyAjBi@vAXlEXpExAvBzAdBPnAQdBO~C`@lA|@fADlF~A\\BNa@G[Es@N_BXqBDONERRCjB`@p@xDnB~@k@xAwA|BDt@f@Lx@';

 // console.log(wholeResponse[3].direction.points)
//;


//  this.path = decodePolyline(polyline1);
//  this.path1 = decodePolyline(polylinee);
//  console.log(this.path)
  }
}
</script>
