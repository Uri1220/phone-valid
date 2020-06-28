<template>
  <div>  

          <popup v-if="deliveryVisible"
          @closePopup="closeInfoPopup" >                     
                <h2>Delivery</h2>
                 {{deliveryVisible}}
               
           
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
          case 'xl': return '800px'
        }
      },

   },
  methods: {
    ...mapActions([
      'getDeliveryFalse',
      'getDeliveryTrue'

    ]),  
   
       closeInfoPopup() {
        this.getDeliveryFalse
        deliveryVisible()
      //  console.log(this.deliveryVisible)

      },
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
 
