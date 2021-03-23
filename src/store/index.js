import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    prix1: 29,
    prix2: 23,
    prix3:30
  },
  mutations: {
    AddCard(state, prix) {
      state.total+=prix
    },
  },
  actions: {
  },
  modules: {
  }
})
