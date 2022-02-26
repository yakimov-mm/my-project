import Vue from 'Vue'
import Vuex from 'Vuex'
import App from './App.vue'
import store from './vuex/store'
import './assets/styles/config.scss'


new Vue({
  el: '#app',
  render: h => h(App),
  Vuex,
  store
})
