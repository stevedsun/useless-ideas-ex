<template>
  <div>
    <div class="head"></div>
    <div class="container">
      <div class="card-container" v-show="!editing">
        <card-display v-bind:card="card" />
      </div>
      <Dashboard v-show="editing"></Dashboard>
    </div>
    <footer>
      <button @click="enter">
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
      editing: false,
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
  created() {
    axios.get(
        "https://q24.io/api/v1/idea",
        { 'headers': { 'Accept': 'application/json' } }
    ).then(res => {
      if (res.data.tag) {
        this.card.tag = res.data.tag;
      } else {
        this.card.tag = "";
      }
      // this.card.idea = "> " + res.data.idea;
      this.card.idea = res.data.idea;
      if (res.data.author) {
        this.card.idea += "<br><br> —— " + res.data.author;
      }

      if (res.data.intro) {
        this.card.idea += "（" + res.data.intro + "）";
      }
      this.card.note = res.data.note;
      this.card.url = res.data.url;
      this.card.curator = "本内容由 " + res.data.curator + " 提供";
    });
  },
  methods: {
    enter() {
      this.editing = !this.editing;
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
  color: #8a8a8a;
}

footer a {
  color: #8a8a8a;
}

.container {
  display: flex;
  height: 70vh;
}

.card-container {
  cursor: pointer;
  margin: auto;
}

button {
  border: 0;
  width: 80px;
  height: 80px;
  margin: 1.5em;
  border-radius: 50%;
  transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: #f4f4f4f4;
  box-shadow: 0 -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15);
}

</style>
