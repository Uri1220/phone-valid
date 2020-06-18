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
        :list_collection="getColJut"
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
     brand:'ЛИНОЛЕУМ JUTEKS (ЮТЕКС)',
     jut: [],
    bottomNav: "Trend",
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
        text: "Juteks",
        disabled: false,
        href: "/linoleum/juteks"
      }
    ]
  }),
  components:{
    ListProducts,
    BottomNavigation,
    Description
  },
  async mounted() {
    if (!this.jut.length) this.jut = await this.$store.dispatch("fetchJuteks");
  },

  computed: {
    ...mapGetters(["getJuteks", "getColJut"]),

    filteredProd() {
      let products = this.getJuteks;
      if (this.bottomNav)
        products = products.filter(p => p.cn === this.bottomNav);
      return products;
    },
    descriptionInfo() {
      let prod = [];
      let products = this.getJuteks;
      if (this.bottomNav) prod = products.filter(p => p.id === this.bottomNav);
      const arrFromString = prod.map(p => {
        return p.descr.split("`");
      });
      return arrFromString[0];
    },
    descriptionImg() {
      let prod = [];
      let products = this.getJuteks;
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
 
