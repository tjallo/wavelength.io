import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate';
import { cardCombis } from '../js/Cards';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: cardCombis
  },
  mutations: {
    remove(state, {
      arrayEntry
    }) {
      let index = state.cards.indexOf(arrayEntry);
      state.cards.splice(index, 1);
    },
    reset(state) {
      let thosecards = cardCombis;
      state.cards = thosecards;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allCards() {
      return this.state.cards;
    },
  },
  // plugins: [createPersistedState()],
})
