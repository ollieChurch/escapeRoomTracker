import Vue from 'vue'
import Vuex from 'vuex'
import images from './modules/images'
import textDecrypt from './modules/textDecrypt'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
      images,
      textDecrypt
  }
})
