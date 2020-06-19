<template>
  <div>     

      <p style="text-align:center ">КОЛЛЕКЦИИ</p>

      <v-bottom-navigation
        v-model="bottomNav"
        :value="activeBtn"
        color="blue"
        background-color="rgba(0, 0, 0, 0.1)"
      >
        <v-btn  v-for="(link,i) in list_collection" 
        :key="i" 
        :value="link"
        @click="bot(link)"
        >
          <span>{{link}}</span>
        </v-btn>
      </v-bottom-navigation>
     
  </div>
</template>

<script>

export default {
  name: "BottomNavigation",
   props:{list_collection:{
     type:Array,
     default(){
       return[]
    }
   }
   },

  data: () => ({
        bottomNav: "",
        activeBtn: 1,
    
  }),
  methods:{
    bot(link){
      this.$emit('getBotNav',link)
    }
  } 

};
</script>

 
