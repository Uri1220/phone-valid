export default {
    state: {
       deliveryVisible:false,
      
    },
    mutations: {
      setDeliveryFalse (state) {
        state.deliveryVisible = false
      },
      setDeliveryTrue (state) {
        state.deliveryVisible = true
      },
     
    },
    actions: {
      getDeliveryFalse({commit},) {
        commit('setDeliveryFalse')
      },
      getDeliveryTrue({commit},) {
        commit('setDeliveryTrue')
      },
     
    },
    getters: {
      
      delivery(state){
        return state.deliveryVisible
      }
      
    }
  }
  