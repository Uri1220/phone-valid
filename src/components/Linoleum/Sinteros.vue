<template>
  <div>
    <!-- BREADCRUMBS -->
    <div>
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
      <p style="text-align:center ">КОЛЛЕКЦИИ</p>

        <v-bottom-navigation
          v-model="bottomNav"
          :value="activeBtn"
          color="blue"
          background-color="rgba(0, 0, 0, 0.1)"
        >
          <v-btn v-for="(link,i) in getColSin" :key="i" :value="link">
            <span>{{link}}</span>
          </v-btn>
        </v-bottom-navigation>
      <!-- DESCRIPTION Img -->
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm5 md4 lg4>
            <p class="colname">ЛИНОЛЕУМ СИНТЕРОС {{bottomNav}}</p>
            <div v-for="des of descriptionImg" :key="des.id">
              <v-img :src="des.im" height="250px" width="500px"></v-img>
            </div>
          </v-flex>
          <v-flex xs12 sm7 md8 lg8>
            <div class="des">
              <div class="str" v-for="des of descriptionImg" :key="des.id">
                <p>{{des.str}}</p>
                <hr />
              </div>

              <div class="d1">
                <div v-for="(value, i) in descriptionInfo" :key="i">
                  <p v-if="(i+1)%2">
                    <b>{{ value }}</b>
                  </p>
                </div>
              </div>

              <div class="d2">
                <div v-for="(value, i) in descriptionInfo" :key="i">
                  <p v-if="i%2">{{ value }}</p>
                </div>
              </div>
            </div>
          </v-flex>
          <v-flex></v-flex>
        </v-layout>
        <hr />
      </v-container>
    </div>
    <!-- //////////////////////////////////////////////////// -->

    <p style="text-align:center;margin-top: 10px; ">ДИЗАЙНЫ</p>

    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="ad of filteredProd" :key="ad.id">
          <v-card class="mx-auto" max-width="344">
            <!-- <v-responsive :aspect-ratio="16/9">
            <v-img :src="ad.im" ></v-img>
            </v-responsive>-->
            <v-img :src="ad.im" height="250px" width="300px"></v-img>

            <v-card-title>{{ad.id}}</v-card-title>

            <v-card-subtitle>Цена: {{ad.pr}} руб/м2</v-card-subtitle>

            <app-buy-dialog :product="ad"></app-buy-dialog>

            <v-card-actions>
              <v-btn color="purple" text>Explore</v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text></v-card-text>
              </div>
            </v-expand-transition>
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
    show: false,
    jut: [],
    descript: [],
    bottomNav: "",
    activeBtn: 1,
    // selectedCollection:[],
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
  async mounted() {
    if (!this.jut.length)
      this.jut = await this.$store.dispatch("fetchSinteros");
  },

  computed: {
    ...mapGetters(["getSinteros", "getColSin"]),
    // in bottomNavigation

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
      // console.log(arrFromString[0]);
      // return products;
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

  methods: {}
};
</script>

 
