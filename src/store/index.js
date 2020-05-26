import Vue from 'vue'
import Vuex from 'vuex'
// import products from './modules/products'
import auth from './modules/auth'
import linoleum from './modules/linoleum'
 

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // products,
    auth,
    linoleum
  }
})
