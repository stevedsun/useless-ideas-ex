import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import router from '../router'
import store from '../store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
