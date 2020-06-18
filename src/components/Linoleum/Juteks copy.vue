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
        <v-btn class="btnavitem" v-for="(link,i) in getColJut" :key="i" :value="link">
          <span>{{link}}</span>
        </v-btn>
      </v-bottom-navigation>
      <!-- DESCRIPTION Img -->
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm5 md4 lg5>
            <p class="colname ml-3 mt-2">ЛИНОЛЕУМ JUTEKS (ЮТЕКС) {{bottomNav}}</p>
            <div class="ml-3" v-for="des of descriptionImg" :key="des.id">
              <v-img :src="des.im" height="250px" width="500px"></v-img>
            </div>
          </v-flex>
          <v-flex xs12 sm7 md8 lg7>
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
        <ListProducts :products_data="filteredProd"/>
  </div>
</template>

<script>
import ListProducts from './ListProducts';
import { mapGetters } from "vuex";

export default {
  name: "Juteks",
  data: () => ({
     transparent: "rgba(255, 255, 255, 0)",
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
        text: "Juteks",
        disabled: false,
        href: "/linoleum/juteks"
      }
    ]
  }),
  components:{
    ListProducts
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
      // console.log(arrFromString[0]);
      // return products;
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

  methods: {}
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

/* ____________________info________________________ */
.des {
  display: grid;
  grid-template-columns: 145px 1fr;
  font-size: 12px;
  font-family: "MuseoSansCyrl-300", "Helvetica Neue", Verdana, Arial, sans-serif;
  /* background: rgb(247, 213, 213); */
  margin-left: 15px;
}
.des > div {
  /* background: rgb(250, 245, 245); */
  padding-top: 5px;
}
.des > div.str {
  grid-column: 1/-1;
  grid-auto-rows: auto;
  margin: 5px 10px;
  padding-right: 15px;
  /* background: rgb(232, 245, 220); */
  font-family: "MuseoSansCyrl-300", "Helvetica Neue", Verdana, Arial, sans-serif;
  font-size: 15px;
}

.colname {
  /* font-family: 'MuseoSansCyrl-900'; */
  font-family: "MuseoSansCyrl-300", "Helvetica Neue", Verdana, Arial, sans-serif;
  font-size: 18px;
  padding-top: 8px;
  text-transform: uppercase;
  color: #000;
}

</style>
 
