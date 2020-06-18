<template>
  <div>
    <p style="text-align:center;margin-top: 10px; ">ДИЗАЙНЫ</p>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="prod of products_data" :key="prod.id">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="344"
             :elevation="hover ? 12 : 2" 
             :class="{ 'on-hover': hover }"
             >
              <v-img :src="prod.im" 
              height="250px"
               class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
               >
                 <v-card-title>{{prod.id}}</v-card-title>
               </v-img>            

              <v-card-subtitle 
              class="headline"
              >
              Цена: {{prod.pr}} руб/м2
              </v-card-subtitle>

              <div class="ml-1 mb-1">
                <app-buy-dial 
                :product="prod"              
                >
                </app-buy-dial>
              </div>

             
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
 
export default {
  name: "ListProducts",
  // props: ["products_data"],
  props:{products_data:{
    type:Array,
    default(){
      return[]
    }


  } }, 
  data: () => ({}),

  computed: {},

  methods: {}
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}
</style>
 
