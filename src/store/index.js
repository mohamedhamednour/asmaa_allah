import { createStore } from "vuex";
import essmAllah from '../store/asmaa_allah'
import {budcastwaay , budcastknoze} from '../store/budcast'
export default createStore({
  state() {
    return {
      namesAllah:essmAllah,
      budcastwaay:budcastwaay,
      budcastknoze:budcastknoze,
      filtred: null,
    };
  },
  mutations: {
    filtred(state, payload) {
      state.filtred = payload;
    },
  },

  actions: {
    filtred(context, payload) {
      context.commit("filtred", payload);
    },
  },
  getters: {
    namesAllah(state) {
      return state.namesAllah;
    },
    budcastwaay(state){
      return state.budcastwaay;

    },
    budcastknoze(state){
      return state.budcastknoze;

    },
    filtred(state) {
      return state.filtred;
    },
  },
  modules: {},
});
