<template>

  <div>
    <!-- <v-toolbar====v-app-bar -->
    <!-- <v-app-bar app flat dark src="../assets/images/carusel1.jpg"> -->
    <v-app-bar app flat dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    
<!-- 
      <v-btn icon @click="exit">
        <v-icon>mdi-arrow-left</v-icon>        
      </v-btn> -->



<!-- 
     <v-list two-line>
        <v-list-item @click="aa">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>
         </v-list-item>
      </v-list> -->

<!-- 
      <router-link to="/" tag="span" class="pointer">
        <v-toolbar-title>Semesh-S</v-toolbar-title>
      </router-link> -->


      <!-- Tolbar ITEMS -->
      <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      <v-toolbar-items >
        <v-btn text v-for="(link,i) in links" :key="i" :to="link.url">
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>


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

      <!-- BUTTON -->
      <v-app-bar-nav-icon style="margin-right:8px" color="white"
        @click="drawer=!drawer" 
        class="hidden-md-and-up">
      </v-app-bar-nav-icon>
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
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
         { title: "+375(29)000-0000", icon: "mdi-phone", url: "/login" },
        // {
        //   title: "Register",
        //   icon: "mdi-face",
        //   url: "/register"
        // },
        // {
        //   title: "Orders",
        //   icon: "mdi-moped",
        //   url: "/checkout"
        // },
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
        // { icon: "dashboard", text: "Dashboard", route: "/" },
        // { icon: "folder", text: "Login", route: "/login" },
        {
          icon: "mdi-moped",
          text: "orders",
          route: "/checkout"
        }
      ]
    }
  },
  methods:{
    exit(){
      this.$router.push('/')
    }
  }
 
};
</script>

<style  scoped>
  .pointer{
    cursor:pointer
  }
</style>