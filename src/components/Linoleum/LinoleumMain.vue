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
          </v-layout>
        </v-flex>
        <!-- button navigation -->
        <v-flex>
          <p style="text-align:center;margin-top: 10px; ">
            ЛИНОЛЕУМ В НОВОПОЛОЦКЕ
          </p>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- //////////////////////////////////////////////////// -->
    <v-container grid-list-lg>
      <v-layout row wrap>
        <!-- <v-flex xs12 sm6 md4 v-for="ad of filteredProd" :key="ad.id"> -->
        <v-flex  >
          <!-- <v-card> -->
            <v-card max-width="800" class="mx-auto">            

              <v-container>
                <v-row dense="">
                  <!-- <v-col cols="12">
                    <v-card color="#385F73" dark>
                      <v-card-title class="headline"
                        >Unlimited music now</v-card-title
                      >

                      <v-card-subtitle
                        >Listen to your favorite artists and albums whenever and
                        wherever, online and offline.</v-card-subtitle
                      >

                      <v-card-actions>
                        <v-btn text>Listen Now</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col> -->

                  <v-col v-for="(item, i) in items" :key="i" cols="12">
                    <v-card :color="item.color" dark >
                      <div class="d-flex flex-no-wrap justify-space-between">
                        <div >
                               
                          <v-card-title
                            class="headline"
                            v-text="item.title"
                          ></v-card-title>
                              
                           <router-link :to="item.href" tag="span" class="pointer">
                          <v-card-subtitle
                            v-text="item.artist"
                          ></v-card-subtitle>
                              </router-link>

                          <!-- <v-card-subtitle
                            v-text="item.artist"
                          ></v-card-subtitle> -->
                        </div>

                        <v-avatar class="ma-3" size="170" tile min-width="400">
                          <v-img :src="item.src"></v-img>
                        </v-avatar>
                        
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          <!-- </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  data: () => ({
    bread_items: [
      {
        text: "Главная",
        disabled: false,
        href: "/",
      },
      {
        text: "Линолеум",
        disabled: true,
        href: "/linoleum/",
      },
    ],

    items: [
      {
        color: "#1F7087",
        src: "https://www.tarkett.ru/media/img/M/IN_TEE_Taifun.jpg",
        title: "Синтерос",
        artist: "Перейти в коллекцию ...",
        href: "/linoleum/sinteros",

      },
      {
        color: "#952175",
        src: "https://juteks-rus.ru/attachments/3/7/37d71166cf7b9c8ba85abe18ab2f4b3f_m.jpg",
        title: "Juteks",
        artist: "Перейти в коллекцию ...",
          href: "/linoleum/juteks",
      },
    ],
  }),
  async mounted() {
    // this.sinter = await this.$store.dispatch("fetchSinteros");
  },
  computed: {
    // ...mapGetters(["getSinteros", "getColSin"]),
    // getGescription() {
    //   return this.getColSin.filter;
    // },

    // filteredProd() {
    //   let products = this.getSinteros;
    //   if (this.bottomNav)
    //     products = products.filter((p) => p.cn === this.bottomNav);
    //   return products;
    // },
  },
  methods: {},
};
</script>

<style  scoped>
  .pointer{
    cursor:pointer
  }
</style>
