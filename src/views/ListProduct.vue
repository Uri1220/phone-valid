<template>
  <div>
    <h1 class="subheading grey--text">Register</h1>

                           <!-- SEARCH -->    
      <v-container grid-list-sm>
        <v-layout row>
          <v-flex xs7 md8 >
            <v-text-field label="Поиск " v-model="searchTerm"></v-text-field>
          </v-flex>
          <v-flex xs5 md4>
            <v-select label="Ширина"  :items="wids" v-model="wid" multiple></v-select>
          </v-flex>
        </v-layout>
      </v-container>

    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="product in filteredProd" :key="product.id">
          <v-layout row justify-center class="mb-3">
           <Prod :book="product"></Prod>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script> 
import Prod from "./ProductItem"
export default {
  data() {
    return {
      searchTerm: null,
      wid:[],
      wids:[1.5,2,2.5,3,3.5,4],
      // products: [
      //   {
      //     _id: {
      //       $oid: "5e77ac88cc4a547575ed35ab"
      //     },
      //     width: [2, 2.5, 3, 3.5, 4],
      //     title: "Ручка Horizont",
      //     imageSrc:
      //       "https://elporta.by/storage/products/thumbnail/horizont-csa.jpg",
      //     color_id: {
      //       $numberInt: "67"
      //     },
      //     price: {
      //       $numberDouble: "74.7"
      //     },
      //     position: {
      //       $numberInt: "52"
      //     },
      //     pictures: [
      //       {
      //         thumbnail:
      //           "https://elporta.by/storage/products/thumbnail/horizont-csa.jpg",
      //         medium:
      //           "https://elporta.by/storage/products/medium/horizont-csa.jpg",
      //         original:
      //           "https://elporta.by/storage/products/original/horizont-csa.jpg"
      //       }
      //     ]
      //   },
      //   {
      //     _id: {
      //       $oid: "5e77ac88cc4a547575ed35aa"
      //     },
      //     width: [3, 3.5, 4],
      //     title: "Ручка Horizont",
      //     imageSrc:
      //       "https://elporta.by/storage/products/thumbnail/horizont-cro.jpg",
      //     color_id: {
      //       $numberInt: "117"
      //     },
      //     price: {
      //       $numberDouble: "82.38"
      //     },
      //     position: {
      //       $numberInt: "53"
      //     },
      //     pictures: [
      //       {
      //         thumbnail:
      //           "https://elporta.by/storage/products/thumbnail/horizont-cro.jpg",
      //         medium:
      //           "https://elporta.by/storage/products/medium/horizont-cro.jpg",
      //         original:
      //           "https://elporta.by/storage/products/original/horizont-cro.jpg"
      //       }
      //     ]
      //   },
      //   {
      //     _id: {
      //       $oid: "5e77ac88cc4a547575ed35a9"
      //     },
      //     width: [2, 2.5, 3],
      //     title: "Ручка Fiord",
      //     imageSrc: "https://elporta.by/storage/products/medium/fiord-bgo.jpg",
      //     color_id: {
      //       $numberInt: "71"
      //     },
      //     price: {
      //       $numberDouble: "74.7"
      //     },
      //     position: {
      //       $numberInt: "49"
      //     },
      //     pictures: [
      //       {
      //         thumbnail:
      //           "https://elporta.by/storage/products/thumbnail/fiord-bgo.jpg",
      //         medium:
      //           "https://elporta.by/storage/products/medium/fiord-bgo.jpg",
      //         original:
      //           "https://elporta.by/storage/products/original/fiord-bgo.jpg"
      //       }
      //     ]
      //   },
      //   {
      //     _id: {
      //       $oid: "5e77ac88cc4a547575ed35a8"
      //     },
      //     width: [1.5, 2, 2.5, 3, 3.5, 4],
      //     title: "Ручка Fiord",
      //     imageSrc: "https://elporta.by/storage/products/medium/fiord-bno.jpg",
      //     color_id: {
      //       $numberInt: "66"
      //     },
      //     price: {
      //       $numberDouble: "78.54"
      //     },
      //     position: {
      //       $numberInt: "50"
      //     },
      //     pictures: [
      //       {
      //         thumbnail:
      //           "https://elporta.by/storage/products/thumbnail/fiord-bno.jpg",
      //         medium:
      //           "https://elporta.by/storage/products/medium/fiord-bno.jpg",
      //         original:
      //           "https://elporta.by/storage/products/original/fiord-bno.jpg"
      //       }
      //     ]
      //   },
      //   {
      //     _id: {
      //       $oid: "5e77ac88cc4a547575ed3585"
      //     },
      //     width: [2, 2.5, 3, 3.5, 4],
      //     title: "Ручка Space",
      //     imageSrc:
      //       "https://elporta.by/storage/products/original/space-csa.jpg",
      //     color_id: {
      //       $numberInt: "67"
      //     },
      //     price: {
      //       $numberDouble: "80.04"
      //     },
      //     position: {
      //       $numberInt: "57"
      //     },
      //     pictures: [
      //       {
      //         thumbnail:
      //           "https://elporta.by/storage/products/thumbnail/space-csa.jpg",
      //         medium:
      //           "https://elporta.by/storage/products/medium/space-csa.jpg",
      //         original:
      //           "https://elporta.by/storage/products/original/space-csa.jpg"
      //       }
      //     ]
      //   }
      // ]
    };
  },
  components:{
    Prod
  },
   computed:{
     filteredProd(){
       let products = this.books
       if(this.searchTerm)
       products=products.filter(p=>p.title.toLowerCase().indexOf(this.searchTerm.toLowerCase())>0
      //  || p.description.toLowerCase().indexOf(this.searchTerm.toLowerCase())>0
       )
       if(this.wid.length)
       products=products.filter(p=>this.wid.filter(val=>p.width.indexOf(val)
        !== -1).length >0)

       return products
     },
      books(){
      return this.$store.getters.getProducts
    }
   
  },
 
 
};
</script>
<style>
</style>