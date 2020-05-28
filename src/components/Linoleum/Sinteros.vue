<template>
<div>
   <v-container fluid>
      <v-layout row>
       <div class="row">
           <ul id="example-1">
             <li v-for="item in getColSin" :key="item.id">            
                  {{ item }}
             </li>
           </ul>
           
        </div>
      </v-layout>
    </v-container> 
  
  <!-- //////////////////////////////////////////////////// -->
  <v-container grid-list-lg>
    sinteros
    <!-- отступ карточек -->
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="ad of getSinteros" :key="ad.id">
        <v-card>
          <p class="headline mb-0">Линолеум Синтерос(РФ) {{ad.id}}</p>
          <v-img :src="ad.im" height="200px"></v-img>
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
    sinter:[]
  }),
  async mounted() {
    this.sinter = await this.$store.dispatch("fetchSinteros");
  },
  computed: {
    ...mapGetters(["getSinteros",
    "getColSin"]),

    
    }
  }

</script>