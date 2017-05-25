import categories from '../../data/categories'
import * as types from '../types'

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
  initCategories: ({ commit }) => {
    commit(types.CATEGORIES_SET, categories)
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
