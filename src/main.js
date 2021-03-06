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
import firebase from 'firebase';
import vueImages from 'vue-images/dist/vue-images';
import VueParticles from 'vue-particles'
import * as VueGoogleMaps from 'vue2-google-maps'
import axios from 'axios'
import VueAxios from 'vue-axios'
import FlagIcon from 'vue-flag-icon'
import GSignInButton from 'vue-google-signin-button'
import { Script } from "vm";
import VueExpandableImage from 'vue-expandable-image'
import ImageUploader from 'vue-image-upload-resize'




var polyline = require( 'google-polyline' )
Vue.use(polyline);
Vue.use(ImageUploader);




Vue.use(VueExpandableImage)

Vue.use(GSignInButton);

Vue.use(FlagIcon);
 
Vue.use(VueAxios, axios)

Vue.use(VueTypedJs)
Vue.use(VueParticles)

Vue.use(vueImages)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCVluAGL43uqSqE0Z5BDcUEMPKnlQbgO28",
    libraries: "places", 
  },
 
})
Vue.component('video-bg', VideoBg);
Vue.config.productionTip = false;



new Vue({
  router,
  store,



  
  render: h => h(App),
  created () {



    firebase.initializeApp ({
      apiKey: "AIzaSyBgC6WB-VroJvvnJp2llGaKrUo32Jn0Zus",
    authDomain: "treflor-26f34.firebaseapp.com",
    databaseURL: "https://treflor-26f34.firebaseio.com",
    projectId: "treflor-26f34",
    //storageBucket: "treflor-26f34.appspot.com",
    storageBucket:"gs://treflor-26f34.appspot.com",
    messagingSenderId: "663827794693",
    appId: "1:663827794693:web:35446beeae401b294f856c"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('SignInauto', user)
      }
    })
    


    this.$store.dispatch('guidesfetch')
    this.$store.dispatch('guidesfetchfinl')

 //   this.$store.dispatch('guidezfetch')
    
   // this.$store.dispatch('userfetch')
  //  this.$store.dispatch('guidezfetchfinl')

  //  axios.defaults.withCredentials = true
  }
}).$mount("#app");




