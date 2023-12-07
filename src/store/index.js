import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    capturedData: [],
  },
  mutations: {
    addCapturedData(state, data) {
      state.capturedData.push(data);
    },
  },
  actions: {
    // You can add actions for asynchronous operations here.
  },
  getters: {
    getCapturedData: (state) => state.capturedData,
  },
});

