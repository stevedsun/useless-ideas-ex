<template>
  <div>
    <div class="head"></div>
    <div class="container">
      <div class="card-container" v-show="!isEditing">
        <card-display v-bind:card="card" />
      </div>
      <Dashboard v-show="isEditing"></Dashboard>
    </div>
    <footer>
      <button @click="edit" class="edit-button">
      </button>
      <p>制作：<a href="https://twitter.com/way2steve" target="_blank">Steve</a> & <a
          href="https://twitter.com/fm100" target="_blank">Bob</a></p>
      <p>支持：<a href="https://club.q24.io/">灵感买家俱乐部</a></p>
    </footer>
  </div>
</template>

<script>

import axios from 'axios';
import Dashboard from '@/components/Dashboard.vue'
// import Login from '@/components/Login.vue'
// import Register from '@/components/Register.vue'
import CardDisplay from '@/components/CardDisplay.vue'


export default {
  name: 'App',
  components: {
    Dashboard,
    CardDisplay,
    // Login,
    // Register
  },
  data () {
    return {
      isEditing: false,
      card: {
        tag: "",
        idea: "",
        author: "",
        intro: "",
        curator: "",
        note: ""
      }
    }
  },
  mounted() {
    this.$store.commit("loadCachedCard");
    let cards = this.$store.state.cachedCards;

    if (cards.length === 0) {
      axios.get(
          "https://q24.io/api/v1/idea",
          { 'headers': { 'Accept': 'application/json' } }
      ).then(res => cards.push(res.data));
    }

    let index = Math.floor((Math.random() * cards.length));
    this.displayCard(cards[index]);
  },
  methods: {
    edit() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.$store.commit("toInit");
      } else {
        this.$store.commit("toDisplay");
      }
    },
    displayCard(v) {
      if (v.tag) {
        this.card.tag = v.tag;
      }
      this.card.idea = v.idea;
      if (v.author) {
        this.card.idea += "<br><br> —— " + v.author;
      }

      if (v.intro) {
        this.card.idea += "（" + v.intro + "）";
      }
      this.card.note = v.note;
      this.card.url = v.url;
      this.card.curator = "本内容由 " + v.curator + " 提供";
    }

  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


body {
  background-color: #f4f4f4;
  font-family: -apple-system,BlinkMacSystemFont,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,Arial,sans-serif;
}

.head {
  height: 5vh;
}

footer {
  height: 25vh;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  color: #d4d4d4;
}

footer a {
  color: #d4d4d4;
}

.container {
  display: flex;
  height: 70vh;
}

.card-container {
  cursor: pointer;
  margin: auto;
}

footer .edit-button {
  opacity: 0.2;
  transition: visibility 0.3s linear 0.3s, opacity 0.3s;
  background: transparent center/40%;
}

footer:hover .edit-button {
  opacity: 0.7;
  transition: visibility 0.3s linear 0.3s, opacity 0.3s;
  background: transparent center/40% no-repeat url("../assets/edit.png");
}

.edit-button {
  cursor: pointer;
  position: relative;
  margin: 30px 0 30px 0;
  border: none;
  outline: none;
  padding: 26px;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  /*display: block;*/
  transition: all 0.3s;
  box-shadow:
      /*9px 9px 9px rgba(0,0,0,0.06),*/
      -9px -9px 9px rgba(255,255,255,0.6),
      inset 5px 5px 5px rgba(0,0,0,0.07),
      inset -5px -5px 5px rgba(255,255,255,0.7);
}

.edit-button::before {
  content: '';
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  margin: -35px 0 0 -35px;
  box-shadow:
      inset 3px 3px 3px rgba(255,255,255,0.5),
      inset -3px -3px 3px rgba(0,0,0,0.05);
}

.edit-button:hover::before {
  box-shadow:
      inset 3px 3px 3px rgba(255,255,255,0.35),
      inset -3px -3px 3px rgba(0,0,0,0.035);
}

.edit-button:active::before {
  box-shadow:
      inset 3px 3px 3px rgba(0,0,0,0.05),
      inset -3px -3px 3px rgba(255,255,255,0.5);
}

</style>
