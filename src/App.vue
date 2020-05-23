<template>
  <v-app>
    <Navbar 
    v-bind:goods="goods"
    />
    

    <v-content class="mx-2">
      
      <!-- <NavbarMinin
        v-bind:button_items="juteks.juteks_items"
        v-bind:collection="juteks.collection_name"
        @onSub="onSube"
      /> -->
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../src/views/Navbar";
import Footer from "../src/views/Footer";
// import NavbarMinin from "../src/views/NavbarMinin";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    // NavbarMinin
  },
  data: () => ({
    sinteros: {
      collection_name: "Juteks",

      sinteros_items: [
        {
          title: "Парма",
          url: "/catalog/linoleum/sinteros/parma"
        },
        {
          title: "Версаль",
          url: "/catalog/linoleum/sinteros/versal"
        },
        {
          title: "Печора",
          url: "/catalog/linoleum/sinteros/pechora "
        },
        {
          title: "Атланта",
          url: "/catalog/linoleum/sinteros/atlanta"
        },
        {
          title: "Бавария",
          url: "/catalog/linoleum/sinteros/bavaria "
        },
        {
          title: "Санлайт",
          url: "/catalog/linoleum/sinteros/sanlite "
        }
      ]
    },
    juteks: {
      collection_name: "Juteks",
      juteks_items: [
        {
          title: "Trend",
          url: "/catalog/linoleum/juteks/trend"
        },
        {
          title: "Megapolis",
          url: "/catalog/linoleum/juteks/megapolis"
        },
        {
          title: "Spirit",
          url: "/catalog/linoleum/juteks/spirit"
        },
        {
          title: "Respect",
          url: "/catalog/linoleum/juteks/respect"
        },
        {
          title: "Flash",
          url: "/catalog/linoleum/juteks/flash"
        },
        {
          title: "Etnic",
          url: "/catalog/linoleum/juteks/etnic"
        },
        {
          title: "Glamour",
          url: "/catalog/linoleum/juteks/glamour"
        },
        {
          title: "Emotion",
          url: "/catalog/linoleum/juteks/emotion"
        },
        {
          title: "Gost 1812",
          url: "/catalog/linoleum/juteks/gost1812"
        }
      ]
    },
    goods: [
        {
          title: "Линолеум",
          url_title: "/catalog/linoleum/",
          active:true,
          items: [
            { title: "Синтерос(РФ)", url: "/catalog/linoleum/sinteros/" },
            { title: "Juteks (РФ)", url: "/catalog/linoleum/juteks/" },
            { title: 'IVC "ИВК-Восток"(РФ)', url: "/catalog/linoleum/ivc/" },
            { title: "Комитекст Лин(РФ)", url: "/catalog/linoleum/komitex/" },
            { title: "Polystyl(РФ)", url: "/catalog/linoleum/polystyl/" }
          ]
        },
        {
          title: "Ламинат",
           url_title: "/catalog/laminat/",
          // active: true,
          items: [
            { title: "Kronostar(РФ)", url: "/catalog/laminat/kronostar/" },
            { title: "Tarkett(РФ)", url: "/catalog/laminat/tarkett/" },
            { title: "Classen(Германия)", url: "/catalog/laminat/classen/" },
            { title: "Kronopol()", url: "/catalog/laminat/kronopol/" },
            { title: "VIVAFLOOR(РБ)", url: "/catalog/laminat/vivaflor/" }
          ]
        }
    ],
  }),
  methods:{
    onSube(bo){
      console.log('App:'+bo)

    }
  }
};
</script>
