import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLocation: "diamond-bar",
  },
  getters: {},
  mutations: {
    setCurrentLocation(state, locationName) {
      state.currentLocation = locationName;
    },
  },
  actions: {},
  modules: {},
});
