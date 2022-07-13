import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

export default createStore({
  namespaced: true,
  actions,
  getters,
  mutations,
  state
})
