<template>
  <div>
    <!-- BREADCRUMBS -->    
      <div class="bc">
        <div>
          <v-breadcrumbs :items="bread_items"></v-breadcrumbs>
        </div>
        <div class="cc">
          <!-- <v-icon small>mdi-chevron-right</v-icon> -->
          /{{ bottomNav }}
        </div>
      </div>

      <!-- Bottom Navigations -->
       <bottom-navigation 
        :list_collection="getColSin"
        @getBotNav="getBotNavigation"        
        />
     
      <!-- DESCRIPTION  -->
      <description
        :brand="brand"
        :bottomNav="bottomNav"
        :descriptionImg="descriptionImg"
        :descriptionInfo="descriptionInfo"

      />   
   
    <!-- //////////////////////////////////////////////////// -->
       
        <list-products :products_data="filteredProd"/>
  </div>
</template>

<script>
import ListProducts from '../Linoleum/LinoleumParts/ListLinolProducts'
import BottomNavigation from '../Linoleum/LinoleumParts/BottomNavigation'
import Description from '../Linoleum/LinoleumParts/Description'
import { mapGetters } from "vuex";
export default {
  name: "Juteks",
  data: () => ({
     brand:'ЛИНОЛЕУМ СИНТЕРОС',
     jut: [],
    bottomNav: "Horizon",
    bread_items: [
      {
        text: "Главная",
        disabled: false,
        href: "/"
      },
      {
        text: "Линолеум",
        disabled: false,
        href: "/linoleum/"
      },
      {
        text: "Синтерос",
        disabled: false,
        href: "/linoleum/sinteros/"
      }
    ]
  }),
  components:{
    ListProducts,
    BottomNavigation,
    Description
  },
  async mounted() {
    if (!this.jut.length) this.jut = await this.$store.dispatch("fetchSinteros");
  },
  computed: {
    ...mapGetters(["getSinteros", "getColSin"]),
    filteredProd() {
      let products = this.getSinteros;
      if (this.bottomNav)
        products = products.filter(p => p.cn === this.bottomNav);
      return products;
    },
    descriptionInfo() {
      let prod = [];
      let products = this.getSinteros;
      if (this.bottomNav) prod = products.filter(p => p.id === this.bottomNav);
      const arrFromString = prod.map(p => {
        return p.descr.split("`");
      });
      return arrFromString[0];
    },
    descriptionImg() {
      let prod = [];
      let products = this.getSinteros;
      if (this.bottomNav) prod = products.filter(p => p.id === this.bottomNav);
      //  console.log(prod[0]);
      return prod;
    }
  },
  methods: {
    getBotNavigation(l){
      this.bottomNav=l
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bc {
  display: grid;
  grid-template-columns: 278px 1fr;
  margin-top: 5px;
}
.cc {
  align-self: center;
  font-size: 14px;
}
</style>