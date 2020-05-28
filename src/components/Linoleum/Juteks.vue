<template>
    <v-container grid-list-lg> 
       <!-- отступ карточек -->
      <v-layout row wrap>
        Juteks
        <v-flex xs12 sm6 md4 v-for="ad of getLinol" :key="ad.id">
          <v-card>
            <v-img :src="ad.image" height="200px"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.first}}</h3>
                <div>{{ad.last}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>   
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data:()=>({
        sinter:[]
    }),
    // async mounted(){
    //    this.sinter=  await this.$store.dispatch('fetchCategories')
    // },
     computed:{     
       ...mapGetters([
      'getLinol',
      ])    
    },
}
</script>