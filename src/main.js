import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VideoBg from 'vue-videobg'

import VueParticles from 'vue-particles'

Vue.use(VueParticles)
Vue.component('video-bg', VideoBg);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount("#app");
