import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // init, create, edit, display
    status: "display",
    cachedCards: [],
    currCard: {
      info: {},
      isFront: true,
    },
    userInfo: {
      name: "Steve Sun",
      homepage: "https://sund.site",
      email: ""
    },
    cardList: null,
  },
  mutations: {
    update(state, card) {
      state.currCard = card;
    },

    flip(state) {
      state.currCard.isFront = !state.currCard.isFront;
    },

    loadCachedCard(state) {
      let cards = window.localStorage.getItem('cards');
      if (cards) {
        state.cachedCards = JSON.parse(cards);
      }
    },

    // 点击编辑按钮
    toInit(state) {
      let cards = window.localStorage.getItem('cards');
      state.cardList = JSON.parse(cards);
      if (!state.cardList) {
        state.cardList = [];
        window.localStorage.setItem("cards",JSON.stringify(state.cardList));
      }
      state.status = "init";
    },

    // 点击切换编辑模式按钮
    toDisplay(state) {
      window.localStorage.setItem("cards",JSON.stringify(state.cardList));
      state.cardList = [];
      state.currCard = {
        info: {},
        isFront: true,
      }
      state.status = "display";
    },

    // 点击创建按钮后
    toCreate(state, newCard) {
      if (state.status === "create") {
        state.currCard = {
          info: {},
          isFront: true,
        }
      }
      state.currCard.info = newCard;
      state.cardList.push(state.currCard.info);
      window.localStorage.setItem("cards",JSON.stringify(state.cardList));
      state.status = "create";
    },

    // 点击列表里的其他卡片
    toEdit(state, card) {
      if (state.status === "create") {
        state.currCard = {
          info: {},
          isFront: true,
        }
      }
      state.currCard.info = card;
      state.status = "edit";
    },
  },
  actions: {
  },
  modules: {
  }
})
