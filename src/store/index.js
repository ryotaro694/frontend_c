import { createStore } from 'vuex'

export default createStore({
  state: {
    leftItems : [
      'Apple',
      'Grape',
      'Strawberry',
      'Cherry',
      'Plum',
    ],

    rightItems : [
      'Watermelon',
      'Banana',
      'Peach'
    ],
  },
  getters: {
  },
  mutations: {
    moveItemRight(state) {
      if (state.leftItems.length) {
        state.rightItems.push(state.leftItems.pop());
      }
    },
    moveItemLeft(state) {
      if (state.rightItems.length) {
        state.leftItems.push(state.rightItems.pop());
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
