<template>
  <div>
    <div>
      <div class="bc">
        <div class="bb">
          <v-breadcrumbs :items="bread_items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <div class="cc">
          <v-icon small>mdi-chevron-right</v-icon>
          {{ bottomNav }}
        </div>
      </div>
            <!-- Bottom Navigations -->
      <div class="btn">
        <!-- <p style="text-align: center">Коллекции Juteks:</p> -->
        <v-bottom-navigation
          v-model="bottomNav"
          :value="activeBtn"
          color="blue"
          background-color="rgba(0, 0, 0, 0.1)"
        >
          <v-btn v-for="(link,i) in getColJut" :key="i" :value="link">
            <span>{{link}}</span>
          </v-btn>
        </v-bottom-navigation>
      </div>
                <!-- Description -->
      <div>
          <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 sm8 md8 v-for="des of filteredDescription" :key="des.id">
          <v-card>
            <v-img :src="des.im" height="250px" width="350px"></v-img>

             <v-card-text>
              <p class="text-right">Дизайн {{des.descr}}</p>
            </v-card-text>
           
          </v-card>
        </v-flex>
        
      </v-layout>
    </v-container>
      </div>
    </div>
    <!-- //////////////////////////////////////////////////// -->
    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of filteredProd" :key="ad.id">
          <v-card>
            <v-img :src="ad.im" height="200px" width="200px"></v-img>
            <v-card-text>
              <p class="text-right">Дизайн {{ad.id}}</p>
              <p>Цена: {{ad.pr}} руб/м2</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <app-buy-dialog :product="ad"></app-buy-dialog>
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
    jut: [],
    bottomNav: "",
    activeBtn: 1,
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
    filteredDescription() {
      let products = this.getJuteks;
      if (this.bottomNav)
        products = products.filter(p => p.id === this.bottomNav);
      return products;
    }
  },
  methods: {}
};
</script>
<style>
.bc {
  display: grid;
  grid-template-columns: 278px 1fr;
}
.cc {
  align-self: center;
  font-size: 14px;
}
.btn {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
 
