<template>
  <div>
    <v-container>
      <v-layout column>
        <v-flex>
          <v-layout row>
            <div>
              <v-breadcrumbs large :items="bread_items">
                <template v-slot:divider>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
              </v-breadcrumbs>
            </div>
            <!-- Справа от крошек прилепляю -->
            <div pt-5>
             <v-icon>mdi-chevron-right</v-icon>
              {{ bottomNav }}
            </div>
          </v-layout>
        </v-flex>
        <!-- button navigation -->
        <v-flex>
          Коллекции Синтерос:
         <v-bottom-navigation v-model="bottomNav">
            <v-btn v-for="(link,i) in getColSin" :key="i" :value="link" >
              <span>{{link}}</span>
              <!-- <v-icon>mdi-home</v-icon> -->
            </v-btn>
          </v-bottom-navigation>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- //////////////////////////////////////////////////// -->
    <v-container grid-list-lg>     
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of filteredProd" :key="ad.id">
          <v-card>
            <p class="headline mb-0">Линолеум Синтерос(РФ) {{ad.id}}</p>
            <v-img :src="ad.im" height="200px" width="200px"></v-img>
            <v-card-text>
              <v-row>
                <p class="text-right">Название коллекции {{ad.cn}}</p>
                <p>Класс применения{{ad.class}}</p>
                <p>Основа{{ad.base}}</p>
                <p>Толщина покрытия общая, мм.{{ad.to}}</p>
                <p>Толщина защитного слоя, мм.{{ad.tzs}}</p>
                <p>Ширина рулона, м {{ad.wi}}</p>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    sinter: [],
    bottomNav: "",
    bread_items: [
      {
        text: "Главная",
        disabled: false,
        href: "/"
      },
      {
        text: "Каталог",
        disabled: false,
        href: "/catalog/"
      },
      {
        text: "Линолеум",
        disabled: false,
        href: "/catalog/linoleum/"
      },
      {
        text: "Синтерос",
        disabled: true,
        href: "/catalog/linoleum/sinteros"
      }
    ]
  }),
  async mounted() {
    this.sinter = await this.$store.dispatch("fetchSinteros");
  },
  computed: {
    ...mapGetters(["getSinteros", "getColSin"]),
    filteredProd() {
      let products = this.getSinteros;
      if (this.bottomNav)
        products = products.filter(p => p.cn === this.bottomNav);
      return products;
    }
  },  
};
</script>
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