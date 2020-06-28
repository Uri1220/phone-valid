<template>
<!-- <v-app> -->
  <div class="v-main-wrapper">
    <Navbar  v-bind:goods="goods"/>


   


    <keep-alive>
     
    <v-content class="">    
      <router-view></router-view>
    </v-content> 
    </keep-alive>

    
  </div>
  <!-- </v-app> -->
</template>

<script>
   import Navbar from "./Navbar";


  export default {
    name: 'MainWraper',
    components: {
      Navbar
    },
    props: {},
     data: () => ({ 
   
    goods: [
        {
          title: "Линолеум",
          url_title: "/linoleum/",
          active:true,
          items: [
            { title: "Синтерос(РФ)", url: "/linoleum/sinteros/" },
            { title: "Juteks (РФ)", url: "/linoleum/juteks/" },
            { title: 'IVC "ИВК-Восток"(РФ)', url: "/linoleum/ivc/" },
            { title: "Комитекст Лин(РФ)", url: "/linoleum/komitex/" },
            { title: "Polystyl(РФ)", url: "/linoleum/polystyl/" }
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
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<style>
  .v-main-wrapper {
    margin-left: 10px;
  }
</style>
