export default {
    state: {
       deliveryVisible:false,
       paymentVisible:false,
      
    },
    mutations: {
      setDeliveryFalse (state) {
        state.deliveryVisible = false
      },
      setDeliveryTrue (state) {
        state.deliveryVisible = true
      },
      setPaymentFalse (state) {
        state.paymentVisible = false
      },
      setPaymentTrue (state) {
        state.paymentVisible = true
      },
     
    },
    actions: {
      getDeliveryFalse({commit},) {
        commit('setDeliveryFalse')
      },
      getDeliveryTrue({commit},) {
        commit('setDeliveryTrue')
      },
      getPaymentFalse({commit},) {
        commit('setPaymentFalse')
      },
      getPaymentTrue({commit},) {
        commit('setPaymentTrue')
      },
     
    },
    getters: {
      
      delivery(state){
        return state.deliveryVisible
      },
      payment(state){
        return state.paymentVisible
      }
      
    }
  }
  