<template>
  <div>
    <!-- BREADCRUMBS -->
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
      <!-- DESCRIPTION INFO -->
      <!-- <div class="des">
        <span class="d1">
          <div class="pp" v-for="(value, i) in filteredDescriptionInfo" :key="i">
          <p class="ppp" v-if="(i+1)%2">           
            <b>{{ value }}</b>
          </p>
        </div>
        </span>
        
        <div class="d2">
           <div class="pp" v-for="(value, i) in filteredDescriptionInfo" :key="i">
          <p class="ppp" v-if="i%2">          
            {{ value }}
          </p>
        </div>
        </div>
       
      </div>-->

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
      <!-- DESCRIPTION Img -->
      <v-card class="d-inline-block mx-auto" v-for="des of filteredDescriptionImg" :key="des.id">
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-img :src="des.im" height="250px" width="350px"></v-img>
            </v-col>
            <v-col>
              <v-card-text >
                <!-- {{des.descr}} -->

                <div class="des">
                  <span class="d1">
                    <div class="pp" v-for="(value, i) in filteredDescriptionInfo" :key="i">
                      <p class="ppp" v-if="(i+1)%2">
                        <b>{{ value }}</b>
                      </p>
                    </div>
                  </span>

                  <div class="d2">
                    <div class="pp" v-for="(value, i) in filteredDescriptionInfo" :key="i">
                      <p class="ppp" v-if="i%2">{{ value }}</p>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
    <!-- //////////////////////////////////////////////////// -->

    <p style="text-align:center;margin-top: 10px; ">ДИЗАЙНЫ</p>

    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad of filteredProd" :key="ad.id">
          <v-card class="mx-auto" max-width="344">
            <!-- <v-responsive :aspect-ratio="16/9">
            <v-img :src="ad.im" ></v-img>
            </v-responsive>-->
            <v-img :src="ad.im" height="250px" width="250px"></v-img>

            <v-card-title>{{ad.id}}</v-card-title>

            <v-card-subtitle>Цена: {{ad.pr}} руб/м2</v-card-subtitle>

            <app-buy-dialog :product="ad"></app-buy-dialog>

            <v-card-actions>
              <!-- <v-btn text>Share</v-btn> -->

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
    filteredDescriptionInfo() {
      let prod = [];
      let products = this.getJuteks;
      if (this.bottomNav) prod = products.filter(p => p.id === this.bottomNav);
      const arrFromString = prod.map(p => {
        return p.descr.split("`");
      });
      // console.log(arrFromString[0]);
      // return products;
      return arrFromString[0];
    },
    filteredDescriptionImg() {
      let prod = [];
      let products = this.getJuteks;
      if (this.bottomNav) prod = products.filter(p => p.id === this.bottomNav);
      // console.log(prod);
      return prod;
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
.des {
  display: grid;
  grid-template-columns: 145px 1fr;
  font-size: 14px;
}
.d1 {
  background: rgb(247, 237, 197);
  position: relative;
  /* margin-left: 10px; */
}
.d2 {
  background: rgb(185, 241, 245);
}
.pp {
  /* position: relative;
  top: -15px; */
  /* margin: 0;
  padding: 0; */
}
.ppp {
  position: relative;
  top: 5px;
  margin-bottom: 0 0 0 0;
}
</style>
 
