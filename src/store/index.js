import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/data/";

Vue.prototype.$ajax = axios;

export default new Vuex.Store({
  actions: {},
  modules: {},
  state: {
    drawerShow: false
  },
  mutations: {
    toggleDrawer(state) {
      state.drawerShow = !state.drawerShow;
    },
    updateDrawer(state, val) {
      state.drawerShow = val;
    }
  }
});
