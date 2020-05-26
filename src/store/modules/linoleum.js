import Vue from 'vue'
// import firebase from 'firebase/app'
// import 'firebase/database'
export default {
  state:{
    lin:[],    
  },
  mutations:{
    SET_LINOL(state,payload){
      state.lin=payload
    }
  },
  // computed:{
  //   ju(){
  //     return 'juteks'    
  //   }
  // } ,
  actions: {    
    /*eslint-disable*/
    async fetchCategories({ commit, dispatch }) {
      try {  
        
       // READ
        let jut = 'juteks'
        Vue.$db.collection("linoleum").doc(jut).
        collection("trend").get().then((querySnapshot) => {
          let linitems=[]
        
          querySnapshot.forEach((doc) => {
           
            console.log(`${doc.id} => ${doc.data()}`);
            const data= doc.data()
            let linitem={
             id:doc.id,
              born:data.born,
              first:data.first,
              last:data.last,
              ar:data.ar.slice()

            }
            linitems.push(linitem)
            
          });
          console.log(jut)
            commit('SET_LINOL',linitems)         
          
        });
        // const aaa = (await firebase.database().ref(`product`).once('value')).val() || {}

      } catch (e) {
        console.log (e)
        
      }
    },
    
  }
}