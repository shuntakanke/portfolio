import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {MediaQueries} from 'vue-media-queries';

const mediaQueries = new MediaQueries();

Vue.config.productionTip = false;

Vue.use(mediaQueries);

new Vue({
  mediaQueries: mediaQueries,
  router,
  store,
  render: h => h(App)
}).$mount("#app");