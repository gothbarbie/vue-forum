import users from '../../data/users'

import * as types from '../types'

const state = {
  users: []
}

const mutations = {
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
  initUsers: ({ commit }) => {
    commit(types.USERS_SET, users)
  }
}

const getters = {
  users: state => state.users,
  user: state => state.currentUser
}

export default {
  state,
  mutations,
  actions,
  getters
}
