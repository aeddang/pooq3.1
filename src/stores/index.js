import Vue from 'vue'
import Vuex from 'vuex'
import User from '../viewmodels/VMUser'
import Environment from '../viewmodels/Environment'
import PooqZone from '../viewmodels/VMPooqZone'
import Api from '../viewmodels/ApiConfig'
import Gnb from '../viewmodels/Gnb'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: User,
    pooqZone: PooqZone,
    environment: Environment,
    api: Api,
    gnb: Gnb,
    clientSize: { width: 0, height: 0 }
  },
  mutations: {
    resize (state) {
      state.clientSize = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight }
    }
  }
})
