import categories from '../../data/categories'
import * as types from '../types'
import Vue from 'vue'

const state = {
  categories: []
}

const mutations = {
  [types.CATEGORIES_SET]: (state, categories) => {
    state.categories = categories
  },
  [types.CATEGORY_NEW]: (state, category) => {
    state.categories.push(category)
  },
  [types.CATEGORY_UPDATE]: (state, category) => {
    const catExists = state.categories.find(cat => cat.id == category.id)
    if (catExists) {
      this.catExists = category
    }
  },
  [types.CATEGORY_DELETE]: (state, id) => {
    const catExists = state.categories.find(cat => cat.id == id)
    if (catExists) {
      // remove category
    }
  }
}

const actions = {
  createCategory: ({ commit }, category) => {
    commit(types.CATEGORY_NEW, category)
  },
  updateCategory: ({ commit }, category) => {
    commit(types.CATEGORY_UPDATE, category)
  },
  deleteCategory: ({ commit }, id) => {
    commit(types.CATEGORY_DELETE, id)
  },
  loadCategories: ({ commit }) => {
    Vue.http
      .get('categories.json')
      .then(response => response.json())
      .then(data => {
        if (data) {
          commit(types.CATEGORIES_SET, data)
        }
      })
  }
}

const getters = {
  categories: state => state.categories,
  category: (state, getters) => id => {
    return getters.categories.find(cat => cat.id == id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
