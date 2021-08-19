import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
//import { createStore } from 'vuex';

// Load Vuex
Vue.use(Vuex);
// Create store

/*export const store = createStore({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
})*/
export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});