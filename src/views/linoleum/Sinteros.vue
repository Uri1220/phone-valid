<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-layout row>
          <!-- {{button_items}} -->
          <div>
            <v-breadcrumbs large :items="bread_items">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </div>
          <!-- Справа от крошек прилепляю -->
          <div pt-5>
            <v-icon>mdi-chevron-right</v-icon>
            {{collection}}
            <v-icon>mdi-chevron-right</v-icon>
            {{ bottomNav }}
          </div>
          
        </v-layout>
      </v-flex>
      <!-- button navigation -->
      <!-- :to="'/product/'+product.id" -->
      <v-flex>
        Selected value: {{ bottomNav }}
        <!-- если нет  :value="link.title"  тоздесь выводятся цифры-номера -->

        <v-bottom-navigation v-model="bottomNav">
          <v-btn
            v-for="(link,i) in button_items"
            :key="i"
            router
            :to="link.url"
            :value="link.title"
            @click="onSubmit"
          >
            <span>{{link.title}}</span>
            <!-- <v-icon>mdi-home</v-icon> -->
          </v-btn>
        </v-bottom-navigation>
      </v-flex>

      <!-- <v-flex>
        <form @submit.prevent="onSubmit">
          Input-value:{{title}}
          <input type="text" v-model="title" />
          <button class="success" type="submit">Create</button>
        </form>
      </v-flex> -->

    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ["button_items", "collection"],
  data: () => ({
    bottomNav: "",
    title:'',
    bread_items: [
      {
        text: "Главная",
        disabled: false,
        href: "/"
      },
      {
        text: "Каталог",
        disabled: false,
        href: "/catalog/"
      },
      {
        text: "Линолеум",
        disabled: false,
        href: "/catalog/linoleum/"
      }
    ]
   
  }),
  methods: {
    onSubmit(){
      // console.log('OnSubmit:',this.bottomNav)
      if(this.bottomNav.trim()){
      this.$emit('onSub',this.bottomNav)}
    }
   
  }
};
</script>

<style scoped>
  input {
    border: 1px solid #ccc;
    display: flex;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  input {
    width: 400px;
  }
</style>
Dashboard