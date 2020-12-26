import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currCard: {
      idea: "",
      note: "",
      tag: "",
      author: "",
      intro: "",
      link: "",
      curator: "",
      curator_link: "",
      collection: "",
      id: 0,
      html: ""
    },
    userInfo: {
      name: "Steve Sun",
      homepage: "https://sund.site",
      email: ""
    },
    param: {
      cardSide: "front"
    }
  },
  mutations: {
    update(state, card) {
      state.currCard = card;
      state.param.cardSide = "front";
    },
    flip(state, side) {
      state.param.cardSide = side;
    }
  },
  actions: {
  },
  modules: {
  }
})
