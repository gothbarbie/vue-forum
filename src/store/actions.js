import Vue from 'vue'
import * as types from './types'

export const loadData = ({ commit }) => {
  Vue.http.get('data.json').then(response => response.json()).then(data => {
    if (data) {
      commit(types.USERS_SET, data.users)
      commit(types.CATEGORIES_SET, data.categories)
    }
  })
}
