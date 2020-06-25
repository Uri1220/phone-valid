<template>
  <div>
    <!-- <v-app-bar app flat dark src="../assets/images/carusel1.jpg"> -->
    <v-app-bar app flat dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <!-- 
      <v-btn icon @click="exit">
        <v-icon>mdi-arrow-left</v-icon>        
      </v-btn>-->

      <!-- 
      <router-link to="/" tag="span" class="pointer">
        <v-toolbar-title>Semesh-S</v-toolbar-title>
      </router-link>-->

      <!-- Tolbar ITEMS -->
      <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
      <v-toolbar-items>
        <v-btn text>
          <v-icon left>mdi-phone</v-icon>+375(29)000-0000
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text :to="{name:'Delivery'}">Доставка</v-btn>
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
      <v-app-bar-nav-icon
        style="margin-right:8px"
        color="white"
        @click="drawer=!drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- 2 tollbar -->

    <!-- //////////////////////////////////////////////////////////////////////// -->

    <v-navigation-drawer v-model="drawer" app>
      <v-system-bar></v-system-bar>

      <v-list flat>
        <!-- ВЕРХУШКА -->
        <v-subheader class="ml-5 mt-n2" >ТЦ "Стрелецкий Капитал"</v-subheader>
        <v-divider></v-divider>

        <!-- <v-list-item @click="gg"> -->
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="name"></v-list-item-title>
            <v-list-item-subtitle>павильон №12</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

                        <!-- CONTACTS -->

      <v-btn block outlined class="mt-n2">
        <div class=" text-center" >
            
          <v-menu  
          
           v-model="menu"
           :close-on-content-click="false"
           :nudge-width="200" 
            offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="blue darken-1"
               class text v-bind="attrs" 
               v-on="on"
               
               >
               Контакты
               </v-btn>
            </template>
             
            <v-card max-width="360"
             class="mx-auto"
             style="border:2px solid #2196F3"          
             >

                       <!-- /////////////CLOSE/////// -->
                    <div class="v-popup__header">
                      <span></span>
                    
                      <v-icon size="32"
                        class="material-icons"
                        @click="closeContact"
                        >close
                        </v-icon>     
                    </div>
                  <!-- //////////////////////////// -->

              <v-img
                src="https://arendastrelets.by/wp-content/uploads/2016/10/IMG_5268.jpg"
                height="180px"
                class="white--text align-end pointer"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
              >
                <v-card-title class="pb-1">
                  <div class="text-img">ТЦ “Стрелецкий Капитал”, павильон №12</div>
                </v-card-title>
              </v-img>

              <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>

              <v-divider></v-divider>

              <v-list two-line>
                <v-list-item class="ml-4 mb-n3">
                  <v-list-item-icon>
                    <v-icon color="red" size="28">mdi-phone</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <div class="pl-4">
                      <v-list-item-title>+375(0214) 000-00</v-list-item-title>
                      <v-list-item-subtitle>Рабочий</v-list-item-subtitle>
                    </div>
                  </v-list-item-content>

                  <!-- <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>-->
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <!-- <v-icon color="indigo">mdi-email</v-icon> -->
                    <v-img sm5 height="28" src="https://www.a1.by/css/images/velcom-logo.gif"></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>+375(29)000-0000</v-list-item-title>
                    <v-list-item-subtitle>Personal</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="ml-4 mt-n4">
                  <v-list-item-icon>
                    <v-img
                      sm5
                      height="30"
                      width="20"
                      src="data:image/png;base64,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"
                    ></v-img>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <div class="pl-5">
                      <v-list-item-title>+375(0214) 000-00</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </div>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-map-marker</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>ТЦ “Стрелецкий Капитал”</v-list-item-title>
                    <v-list-item-subtitle>Новополоцк, ул.Молодежная, д.166а</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </v-btn>
      <v-divider></v-divider>
      <!-- //////////////GOODS////////////////////////// -->
      <v-list flat>
        <v-list-group v-for="item in goods" :key="item.title" v-model="item.active" no-action>
          <!-- когда раскыта   v-model="item.active" == true -->
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item router :to="item.url_title">
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.items" :key="subItem.title" router :to="subItem.url">
            <v-list-item-content>
              <v-list-item-title v-model="linItem" v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
            <!-- 
               <v-list-item-action>
                
            </v-list-item-action>-->
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    goods: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      name: "ИП Семеш М.Э.",
       menu: true,

      drawer: true,
      linItem: "",
      //внутри   тоолбара
      links: [
        { title: "+375(29)000-0000", icon: "mdi-phone", url: "/login" }
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
         { icon: "folder", text: "Доставка", route: "/delivery" },
        {
          icon: "mdi-moped",
          text: "orders",
          route: "/checkout"
        }
      ]
    };
  },
  methods: {
    exit() {
      this.$router.push("/");
    },
    closeContact(){
      this.menu =false     
    }
  }
};
</script>

<style  scoped>
.pointer {
  cursor: pointer;
}
.text-img{
  font-size: 16px;
}
</style>