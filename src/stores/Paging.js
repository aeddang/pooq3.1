import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    total: 0,
    currentIdx: 0
  },
  getters: {
    idx: state => {
      return state.currentIdx
    }
  },
  mutations: {
    increment (state) {
      console.log('increment : ' + state.currentIdx)
      state.currentIdx++
    }
  }
})
