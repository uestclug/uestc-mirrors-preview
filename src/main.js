import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VModal from "vue-js-modal";

import VueShowdown from "vue-showdown";
import VueClipboard from "vue-clipboard2";

import axios from "axios";

axios.defaults.baseURL = "/";

Vue.prototype.$ajax = axios;

Vue.use(VModal);
Vue.use(VueShowdown, {
  flavor: "github"
});
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
