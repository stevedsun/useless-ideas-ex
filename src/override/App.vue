<template>
  <div>
    <div id="container" class="container">
      <div id="tabs" class="tabs-container">
        <div class="content">
          <div id="tabcontent" data-tab="1" class="tabcontent">
            <p class="tag">{{ tag }}</p>
            <p class="idea">{{ idea }}</p>
            <p class="author">{{ author }}</p>
            <p class="intro">{{ intro }}</p>
            <p class="curator">{{ curator }}</p>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <p>制作：<a href="https://twitter.com/way2steve" target="_blank">Steve</a> & <a
          href="https://twitter.com/fm100" target="_blank">Bob</a></p>
      <p>支持：<a href="https://club.q24.io/">灵感买家俱乐部</a></p>
    </footer>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      tag: "",
      idea: "",
      author: "",
      intro: "",
      curator: ""
    }
  },
  mounted() {
    let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (darkMode) {
      document.querySelector('html').classList.add('darkmode')
      // document.querySelector('#dark-mode-switch').checked = 'checked'
    }

    axios.get(
        "https://q24.io/api/v1/idea",
        { 'headers': { 'Accept': 'application/json' } }
    ).then(res => {
      if (res.data.tag) {
        this.tag = "🏷️ " + res.data.tag;
      }
      this.idea = res.data.idea;
      this.author = res.data.author;
      this.intro = res.data.intro;
      this.curator = "本内容由 " + res.data.curator + " 提供";
    });
  },
  methods: {
  }
}
</script>

<style>
/* STYLING */
* {
  /*box-sizing: border-box;*/
  margin: 0;
  padding: 0;
}

body {
  background-color: #f4f4f4;
}

.darkmode body {
  background-color: #1A1B1F;
}

footer {
  margin: 2em 1em 0.5em;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  text-align: center;
  color: #8a8a8a;
}

.darkmode footer {
  background-color: #1A1B1F;
}

footer a {
  color: #8a8a8a;
}

.container {
  display: flex;
  height: 80vh;
  background-color: #f4f4f4;
  color: #a2a2a2;
  font-family: sans-serif;
}

.darkmode .container {
  background-color: #1A1B1F;
  color: #8a8a8a;
}

.tabs-container {
  cursor: pointer;
  margin: auto;
}

/* Style the tabs */

.tabs {
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
}

.tabs a {
  cursor: pointer;
  padding: 12px 24px;
  width: 120px;
  text-align: center;
  font-weight: bold;
  border-radius: 18px;
  transition: background 0.1s, color 0.1s;
  background: linear-gradient(145deg, #ffffff, #dcdcdc);
  box-shadow: 3px 3px 5px #bebebe, -3px -3px 5px #ffffff;
}

.darkmode .tabs a {
  background: linear-gradient(145deg, #1c1d21, #17181c);
  box-shadow: 3px 3px 6px #101114, -3px -3px 6px #24252a;
}

/* Change background color of tabs on hover */

.tabs a:hover {
  background: linear-gradient(145deg, #f4f4f4, #cecece);
  color: #888;
}

.darkmode .tabs a:hover {
  background: #141414;
  color: #bbb;
}

/* Styling for active tab */

.tabs a.active {
  color: #bdbdbd;
  cursor: default;
  padding: 14px 22px 10px 26px;
  background: #f4f4f4;
  box-shadow: inset 3px 3px 5px #cbcbcb, inset -3px -3px 5px #ffffff;
}

.darkmode .tabs a.active {
  background: #1A1B1F;
  box-shadow: inset 3px 3px 6px #101114, inset -3px -3px 6px #24252a;
  color: #6a6a6a;
}

/* Style the tab content */

.tabcontent {
  padding: 46px;
  width: 620px;
  height: 420px;
  /* min-height: 288px; */
  /* display: none; */
  border-radius: 18px;
  background: #f4f4f4;
  box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
}

.darkmode .tabcontent {
  background: linear-gradient(145deg, #1c1d21, #17181c);
  box-shadow: 3px 3px 6px #101114, -3px -3px 6px #24252a;
}

.content .active {
  display: block;
}



.tabcontent p {
  margin-bottom: 12px;
}

.tabcontent p:last-child {
  margin-bottom: 0;
}

.tabcontent .tag {
  font-size: 12px;
  height: 30px;
}

.tabcontent .idea {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  height: 270px;
  text-align: left;
  font-family: serif;
}

.tabcontent .author {
  font-size: 14px;
  font-weight: 400;
  text-align: right;
  margin-bottom: 2px;
}

.tabcontent .intro {
  font-size: 14px;
  font-weight: 400;
  text-align: right;
  margin-bottom: 20px;
}

.tabcontent .curator {
  font-size: 12px;
  font-weight: 400;
  color: #d4d4d4;
  text-align: right;
}

.darkmode .tabcontent .curator {
  font-size: 12px;
  font-weight: 400;
  color: #626262;
  text-align: right;
}

.tabcontent .read-more-link a {
  color: #626262;
  text-decoration: none;
  font-size: 0.85em;
  font-weight: bold;
}

.darkmode .tabcontent .read-more-link a {
  color: #d4d4d4;
}

.icon {
  padding-left: 8px;
  font-size: 16px;
}

/* THE DARKMODE SWITCH */

.dark-mode-switch {
  position: absolute;
  top: 16px;
  right: 16px;
}

.dark-mode-switch .switch {
  /*     margin-left: 4px; */
}

.switch-label {
  cursor: pointer;
  font-size: 0.85em;
}

/* the box around the slider */

.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;
  margin-left: 4px;
}

/* Hide default HTML checkbox */

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1A1B1F;
  transition: .2s;
  box-shadow: 2px 2px 3px #ffffff, -2px -2px 3px #bebebe;
}

.darkmode .slider {
  box-shadow: 2px 2px 3px #34353a, -2px -2px 3px #000104;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 2px;
  background: #9294b8;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #f4f4f4;
}

input:checked+.slider:before {
  transform: translateX(21px);
}

/* Rounded sliders */

.slider.round {
  border-radius: 11px;
}

.slider.round:before {
  border-radius: 50%;
}

/*==============================*/

.small-screen {
  /* display: none; */
  background-color: #f4f4f4;
  height: 100vh;
  color: #a2a2a2;
  font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
}

.darkmode .small-screen {
  background-color: #1A1B1F;
  color: #8a8a8a;
}

.small-screen-content {
  width: 70%;
  margin: auto;
}

@media only screen and (max-width: 600px) {
  .small-screen {
    display: flex;
  }
  .tabcontent {
    display: block;
  }
}
</style>
