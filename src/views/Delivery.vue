<template>
  <div>  

          <popup v-if="deliveryVisible" >            
   
           <!-- <img
           :width="popWidth"    
            src="data:image/jpeg;base64,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"
            > -->
             <v-card
    class="mx-auto"
   
    :width="popWidth" 
  >
    <v-img
      class="white--text align-end"
      height="300px"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjhOoE7SeCk-obH0-5XSFQsUFWaTfqJgwsOA&usqp=CAU"
    >
      <v-card-title>Доставка Полоцк Повополоцк</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

   
  </v-card>
 
               
           
          </popup>

         
      
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

 import Popup from '../components/Linoleum/LinoleumParts/Popup'

 
export default {
  name: "Delivery",

  components:{
     Popup
  },

  data: () => ({
      }),

 computed:{ 
         deliveryVisible(){
             return this.delivery
         },
    ... mapGetters([
      'delivery',
    ]),        
     
   /*eslint-disable*/ 
      popWidth () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '220px'
          case 'sm': return '350px'
          case 'md': return '600px'
          case 'lg': return '600px'
          case 'xl': return '700px'
        }
      },

   },
  methods: {
    ...mapActions([
      'getDeliveryFalse',
      'getDeliveryTrue'

    ]),  
   
  },
   async mounted() {
     this.getDeliveryTrue
        console.log('from Delivery' + this.delivery)
     
      // await this.$store.dispatch("getDelivery");
         

    //  async mounted() {
    // if (!this.sint.length) this.sint = await this.$store.dispatch("fetchSinteros");
  //},
    
  },
   
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}
.pointer{
  cursor:pointer
}


</style>
 
