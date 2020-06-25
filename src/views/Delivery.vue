<template>
  <div>  
          <popup v-if="isInfoPopupVisible"         
            @closePopup="closeInfoPopup"            
            >                     
                <h2>Delivery</h2>
            <!-- <img :src="product_data.im"
            :width="popWidth"                   
             >                       -->
          </popup>

         
      
  </div>
</template>

<script>
import Popup from '../components/Linoleum/LinoleumParts/Popup'

 
export default {
  name: "Delivery",
  props:{ 
   product_data: {
        type: Object,
        default() {
          return {}
        }
      } 
  },
  components:{
    Popup
  },

  data: () => ({ 
    isInfoPopupVisible:true
  }),

 computed: {
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
    imgclick(i){
      console.log(i)
    },
     showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
       closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
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
.border{
  
}

</style>
 
