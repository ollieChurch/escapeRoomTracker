import Vue from 'vue'
import Vuex from 'vuex'

import images from './modules/images'
import escapeList from './modules/escapeList'
import products from './modules/products'

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
      images, escapeList, products
  }
})
