// import Vue from 'vue'
// import * as fb from 'firebase'
import firebase from 'firebase/app';
import 'firebase/database';


class Order {
  constructor (name, phone,quantity,collection,productId,done = false, id = null) {
    this.name = name
    this.phone = phone
    this.quantity = quantity
    this.collection = collection
    this.productId = productId
    this.done = done
    this.id = id
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrders (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    // async createOrder ({commit}, {name, phone,quantity,collection,productId,ownerId}) {
    async createOrder ({commit}, {name, phone,quantity,collection,productId}) {
      const order = new Order(name, phone,quantity,collection,productId,)
      // commit('clearError')
      try {
        // await firebase.database().ref(`/users/${ownerId}/orders`).push(order)
        await firebase.database().ref(`/orders`).push(order)
      }
       catch (error) {
        commit('setError', error.message)
        throw error
      }
    },
    async fetchOrders ({commit}) {
      // commit('setLoading', true)
      // commit('clearError')
      const resultOrders = []
      try {
        const fbVal = await firebase.database().ref(`/orders`).once('value')
        const orders = fbVal.val()
        console.log(orders)
        Object.keys(orders).forEach(key => {
          const order = orders[key]
          resultOrders.push(new Order(order.name, order.phone,
             order.productId, order.done, key))
        })
       
        commit('loadOrders', resultOrders)
       // commit('setLoading', false)
      } catch (error) {
        // commit('setError', error.message)
        // commit('setLoading', false)
      }
     },
     /*eslint-disable*/
    async markOrderDone ({commit}, payload) {
   //  commit('clearError')
      try {
        await firebase.database().ref(`/orders`).child(payload).update({
          done: true
        })
      }
       catch (error) {
        commit('setError', error.message)
        throw error
      }
      
    }
  },
  getters: {
    doneOrders (state) {
      return state.orders.filter(order => order.done)
    },
    undoneOrders (state) {
      return state.orders.filter(order => !order.done)
    },
    orders (state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders)
    }
  }
}
