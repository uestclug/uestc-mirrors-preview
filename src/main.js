import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VModal from "vue-js-modal";

import VueShowdown from "vue-showdown";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

Vue.prototype.$ajax = axios;

Vue.use(VModal);
Vue.use(VueShowdown, {
  flavor: "github"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
