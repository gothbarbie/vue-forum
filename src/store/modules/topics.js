import topics from '../../data/topics'
import * as types from '../types'

const state = {
  topics: []
}

const mutations = {
  [types.TOPICS_SET]: (state, topics) => {
    state.topics = topics
  },
  [types.TOPIC_NEW]: (state, topic) => {
    state.topics.push(topic)
  },
  [types.TOPIC_UPDATE]: (state, topic) => {
    const topExists = state.topics.find(top => top.id == topic.id)
    if (topExists) {
      this.topExists = topic
    }
  },
  [types.TOPIC_DELETE]: (state, id) => {
    const topExists = state.topics.find(top => top.id == topic.id)
    if (topExists) {
      // delete topic
    }
  }
}

const actions = {
  createTopic: ({ commit }, topic) => {
    commit(types.TOPIC_NEW, topic)
  },
  updateTopic: ({ commit }, topic) => {
    commit(types.TOPIC_UPDATE, topic)
  },
  deleteTopic: ({ commit }, id) => {
    commit(types.TOPIC_DELETE, id)
  },
  initTopics: ({ commit }) => {
    commit(types.TOPICS_SET, topics)
  }
}

const getters = {
  topics: state => state.topics,
  topicsInCategory: (state, getters) => catId => {
    let results = state.topics.map(topic => {
      if (topic.catId === catId) {
        return topic
      }
    })

    let notEmpty = []
    for (let i of results)
      i && notEmpty.push(i)

    return notEmpty
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
