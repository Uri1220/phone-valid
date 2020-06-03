import Vue from 'vue'
import Vuex from 'vuex'
 import user from './modules/users'
import linoleum from './modules/linoleum'
import sinteros from './modules/linoleum/sinteros'
import juteks from './modules/linoleum/juteks'
import common from './modules/common'
import order from './order'
 

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    linoleum,
    sinteros,
    juteks,
    order,
    common
  }
})
