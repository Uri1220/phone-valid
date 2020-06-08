  <template>
  <v-card class="text-xs-center ma-3">
    <v-container>
      <v-layout row>
        <v-flex xs-4 md-3>
          <v-responsive class="pa-3">
            <v-img :src="book.imageSrc" height="100px"></v-img>
          </v-responsive>
        </v-flex>
        <v-flex xs-8 md-9>
          <v-card-text>
            <div class="subheading">{{ book.title }}</div>
            <div class="grey--text">{{ book.price }}</div>
            <v-divider></v-divider>
            <!-- Function Width -->
            <div>Ширина: {{getWidth(book.width)}} м.</div>
            <div class="subheading">{{book.parts.lenght}} частей</div>
          </v-card-text>

          <v-card-actions>
            <v-btn text color="grey" :to="{name:'book', params:{id:book.id}}">
              <v-icon small left>mdi-message</v-icon>
              <span class>Открыть</span>
            </v-btn>

            <!-- popur -->
            <v-dialog max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn small mr-1 v-on="on" class="success">Подробнее</v-btn>
              </template>
              <v-card class="text-xs-center ma-3">
                <div class="ma-3 pt-3">
                  <v-img :src="book.imageSrc" height="350px"></v-img>
                </div>

                <v-card-title>
                  <h2>{{book.title}}</h2>
                </v-card-title>
                <v-card-text>
                  <div class="subheading">{{ book.description }}</div>
                  <div class="grey--text">Цена: {{ book.price }} руб</div>
                  <!-- FUNCTION -->
                  <div>Ширина: {{getWidth(book.width)}} м.</div>
                  <div>{{book.parts.lenght}} частей</div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
  import * as  helperFunc  from '../helpers/book'

export default {
  props:{
    "book":{
      type:Object,
      required:true
    }
  },
   methods: {
    getWidth:helperFunc.getWidth
    }
  }
  
  

</script>

<style>
</style>
