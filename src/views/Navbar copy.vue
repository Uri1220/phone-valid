<template>

  <v-container>
    <!-- <v-toolbar====v-app-bar -->
    <!-- <v-app-bar app flat dark src="../assets/images/carusel1.jpg"> -->
    <v-app-bar app flat dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <!-- SEMESH -->
      <router-link to="/" tag="span" class="pointer">
        <v-toolbar-title>Semesh-S</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" color="grey">
            <v-icon left>mdi-expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in dropmenulinks" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Tolbar ITEMS -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="(link,i) in links" :key="i" :to="link.url">
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
      <!-- BUTTON -->
      <v-app-bar-nav-icon color="white" @click="drawer=!drawer" 
      class="hidden-md-and-up"></v-app-bar-nav-icon>
    </v-app-bar>
          <!-- 2 tollbar -->
          

    <!-- //////////////////////////////////////////////// -->

    <v-navigation-drawer v-model="drawer" app >
       
        <v-list flat >
          <!-- ВЕРХУШКА -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
   
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <!-- //////////////////// -->
          
          <v-list-group
            v-for="item in goods"
            :key="item.title"
            v-model="item.active" 
            no-action 
           >
           <!-- когда раскыта   v-model="item.active" == true -->
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item router :to="item.url_title">
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
              </v-list-item-content>

            </template>

            <v-list-item 
              v-for="subItem in item.items"
              :key="subItem.title"
              router :to="subItem.url"
                              

            >
              <v-list-item-content>
                <v-list-item-title v-model="linItem" v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
                  <!-- 
               <v-list-item-action>
                
              </v-list-item-action> -->

            </v-list-item>
          </v-list-group>

         
        </v-list>
      
    </v-navigation-drawer>
    
  </v-container>
</template>

<script>
export default {
  // props:['goods'],
   props:{
     goods:{
       type:Array,
       required:true
     }
   },
  data() {
    return { 
      drawer:true,
      linItem:"",    
      //внутри   тоолбара
      links: [
        // { title: "Login", icon: "mdi-star", url: "/login" },
        // {
        //   title: "Register",
        //   icon: "mdi-face",
        //   url: "/register"
        // },
        {
          title: "Orders",
          icon: "mdi-moped",
          url: "/checkout"
        },
        // {
        //   title: "New Product",
        //   icon: "mdi-language-swift",
        //   url: "/linoleum/sinteros/new"
        // },
        // {
        //   title: "My Products",
        //   icon: "mdi-checkbox-multiple-marked-circle",
        //   url: "/linoleum/sinteros/list"
        // }
      ],
      
      //Меню дропдаун
      dropmenulinks: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "Login", route: "/login" },
        {
          icon: "person",
          text: "Register",
          route: "/register"
        }
      ]
    }
  }
 
};
</script>

<style  scoped>
  .pointer{
    cursor:pointer
  }
</style>