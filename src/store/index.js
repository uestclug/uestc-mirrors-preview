import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
