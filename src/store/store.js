import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import categories from './modules/categories'

import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    users,
    categories
  }
})
