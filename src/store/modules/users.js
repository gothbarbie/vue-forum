import users from '../../data/users'
import Vue from 'vue'
import * as types from '../types'

const state = {
  users: [],
  user: {}
}

const mutations = {
  [types.USER_SET]: (state, id) => {
    const user = state.users.find(usr => usr.id == id)
    if (user) {
      state.user = user
    }
  },
  [types.USERS_SET]: (state, users) => {
    state.users = users
  },
  [types.USER_NEW]: (state, user) => {
    state.users.push(user)
  },
  [types.USER_UPDATE]: (state, user) => {
    const userExists = state.users.find(usr => usr.id == user.id)
    if (userExists) {
      this.catExists = user
    }
  },
  [types.USER_DELETE]: (state, id) => {
    const userExists = state.users.find(usr => usr.id == id)
    if (userExists) {
      // remove user
    }
  }
}

const actions = {
  createUser: ({ commit }, user) => {
    commit(types.USER_NEW, user)
  },
  updateUser: ({ commit }, user) => {
    commit(types.USER_UPDATE, user)
  },
  deleteUser: ({ commit }, id) => {
    commit(types.USER_DELETE, id)
  },
  loadUsers: ({ commit }) => {
    Vue.http.get('users.json').then(response => response.json()).then(data => {
      if (data) {
        commit(types.USERS_SET, data)
      }
    })
  },
  setUser: ({ commit }, id) => {
    commit(types.USER_SET, id)
  }
}

const getters = {
  users: state => state.users,
  user: state => state.user,
  userById: (state, getters) => id => {
    return getters.users.find(usr => usr.id == id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
