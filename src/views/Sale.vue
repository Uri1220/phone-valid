<template>
  <div>  
    SALE

      <!-- Bottom Navigations -->
       <bottom-navigation 
        :list_collection="getColSale"
        @getBotNav="getBotNavigation"              
        />

       

        <!-- ///////////////////////////////////////// -->
         <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of filteredProd" :key="ad.id">

              <!-- POPUP -->
         <popup v-if="isInfoPopupVisible"         
            :popupTitle="ad.id"
            @closePopup="closeInfoPopup"            
            >                     

            <img :src="ad.im"
            :width="popWidth"                   
             >                      
          </popup>

          <v-card class="mx-auto" max-width="344">      
          
            <v-img :src="ad.im" 
             @click="showPopupInfo"
              height="250px"
               class="white--text align-end pointer"
               gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
               >
                 <v-card-title>{{ad.id}}</v-card-title>
                 <v-card-subtitle class="white--text" >{{ad.st}}</v-card-subtitle>
               </v-img>

              <v-card-subtitle class=" mt-n3 mb-n5">
                 <v-sheet tag="span" class="pr">Цена: {{ad.pr}} руб/{{ad.ed}}</v-sheet> 
                 <v-sheet tag="span" class="op ml-3" > {{ad.op}}руб/{{ad.ed}}</v-sheet>    
              </v-card-subtitle>
               <v-divider class="mt-1"></v-divider>

               <v-card-text class="text--primary mt-n4">
                  <div>{{ad.tx}}</div>
                  <v-divider class=""></v-divider>

                  <div>{{ad.des}}</div>
                  <v-divider class=""></v-divider>
               </v-card-text>          


                <v-card-actions>
                  <div class="ml-1 mb-n1 mt-n5">
                    <app-buy-dial 
                    :product="ad"              
                    >
                    </app-buy-dial>               
                  </div>                        
               </v-card-actions>

          
            
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
      
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BottomNavigation from '../components/Linoleum/LinoleumParts/BottomNavigation'
import Popup from '../components/Linoleum/LinoleumParts/Popup'

 
export default {
  name: "Sale",

  components:{
    BottomNavigation,
    Popup
  },

  data: () => ({
      isInfoPopupVisible:false,
    sale:[]
      }),

 async mounted() {
    if (!this.sale.length) this.sale = await this.$store.dispatch("fetchSale");
  },
  computed: {
    ...mapGetters(["getSale", "getColSale"]),
    filteredProd() {
      let products = this.getSale;
      if (this.bottomNav)
        products = products.filter(p => p.cn === this.bottomNav);
      return products;
    }, 
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
    getBotNavigation(l){
      this.bottomNav=l
    },
     showPopupInfo() {
         this.isInfoPopupVisible = true;
      },
         closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
  }
   
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
.op{
  text-decoration:line-through;
   color:#42A5F5;
}
.pr{
  font-size: 18px;
  color:#42A5F5;
}


</style>
 
