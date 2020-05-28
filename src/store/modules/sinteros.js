import Vue from 'vue'
import { Set } from 'core-js';

export default {
  state:{
    sin:[], 
    colsin:[]   
  },
  mutations:{
    SET_SINT(state,payload){
      state.sin=payload
    },
    SET_COL_SIN(state,payload){
    state.colsin=payload}

  },
 
  actions: {    
    /*eslint-disable*/
    async fetchSinteros({ commit, dispatch }) {
      try {  
        
       // READ
        Vue.$db.collection('Sinteros').get().then((querySnapshot) => {
          let linitems=[]
           let uniq=[]
        
          querySnapshot.forEach((doc) => {
           
            //  console.log(`${doc.id} => ${doc.data()}`);
            const data= doc.data()
            let linitem={
             id:doc.id,
              base:data.base,
              class:data.class,
              cn:data.cn,
              im:data.im,
              to:data.to,
              tzs:data.tzs,
              wi:data.wi        

            } 
            let uniqitem={
              cn:data.cn,
            }           
            linitems.push(linitem)
             uniq.push(uniqitem)              
          });
          commit('SET_SINT',linitems)

          // console.log(uniq)
         // uniq.forEach(i=>console.log(i))
         const arr= uniq.map(i=>{
           return i.cn
         }) 
        //  console.log(arr)

         let uni = [...new Set(arr)]
          // console.log(uni)
         commit('SET_COL_SIN',uni)                 
          
        });

      } catch (e) {
        console.log (e)
        
      }
    },
    
  },
  getters:{
    getSinteros:(state)=>state.sin,
    getColSin:(state)=>state.colsin
  }
}