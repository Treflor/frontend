import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VideoBg from 'vue-videobg'
import VueTypedJs from 'vue-typed-js'
//import 'bootstrap-css-only/css/bootstrap.min.css'
//import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import VueParticles from 'vue-particles'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueTypedJs)
Vue.use(VueParticles)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA_UeV4hwzgEG2h2iT0rwoYvgHv6snP9jM',
    libraries: 'places', 
  },
 
})
Vue.component('video-bg', VideoBg);
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount("#app");
