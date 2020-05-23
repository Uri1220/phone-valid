<template>
    <v-card class="pa-2">
        <div>
            <div class="display-1">{{part.bookTitle}}</div>
            <div class="headline">{{part.partTitle}}</div>
            <div class="headline">{{part.content.lenght}}</div>
            <v-divider class="black"></v-divider>            
        </div>
        <div class="text-xs-center mt-2 mb-2 primary">
            <!-- <youtube :video-id="part.youtube_id" :player-width="imageHeight"></youtube> -->
        </div>
                    <!-- SLIDER -->
          <v-slider v-model="fontSize" :label="`Размер шрифта (${fontSize})`"
          step="1" max="30" min="10" tick-size="5"></v-slider>          
                    <!-- TABS -->
        <div class="mt-2">
            <v-tabs v-model="tabMode"   fixed-tabs slider-color="success">
                <v-tab :key="'german'" ripple>
                    Текст с подсказками
                </v-tab>
                <v-tab :key="'sidebyside'" ripple>
                    Параллельно
                </v-tab>
                    <!-- Text с подсказками -->
                <v-tab-item :key="'german'">
                    <div v-for="(paragraph,i) in part.content" :key="`par1${i}`">
                       <span>&nbsp;&nbsp;</span> 
                       <span v-for="(sentence,y)  in paragraph.sentences" 
                         :key="`par1${i}sen1${y}`" :style="textStyle">
                          <span>
                             {{sentence.origText}} 
                          </span>
                          <v-icon size="18" @click.prevent="toggleVisibility(i,y)">
                             mdi-circle-half-full</v-icon>
                          <!-- <span v-if="getvisibilityFlag(i,y).value" class="success--text" > -->
                          <span class="success--text">
                               {{sentence.transText}}
                          </span>
                       </span>
                    </div>
                    <!-- PARALLEL -->
                </v-tab-item>
                <v-tab-item :key="'sidebyside'">
                    <v-container>
                        <v-layout  v-for="(paragraph,i) in part.content" :key="`par2${i}`">
                            <v-flex xs-6>
                              <span>&nbsp;&nbsp;</span> 
                              <span v-for="(sentence,y)  in paragraph.sentences" 
                                 :key="`par2${i}sen2${y}_orig`" :style="textStyle">
                                 <span>
                                      {{sentence.origText}} 
                                 </span>
                              </span> 
                            </v-flex>

                            <v-flex xs-6>
                              <span>&nbsp;&nbsp;</span> 
                              <span v-for="(sentence,y)  in paragraph.sentences" 
                                 :key="`par2${i}sen2${y}_trans`">
                                 <span>
                                      {{sentence.transText}} 
                                 </span>
                              </span> 
                            </v-flex>
                            
                        </v-layout>
                    </v-container>
                 </v-tab-item>

            </v-tabs>
        </div>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            tabMode:'german',
            visibilityKeys:[],
            fontSize:18

        }
    },
    props:{
        "part":{
            type:Object,
            required:true
        }
    },
    computed: {
         /* eslint-disable */
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '220px'
          case 'sm': return '400px'
          case 'md': return '500px'
          case 'lg': return '600px'
          case 'xl': return '800px'
        }
      },
      textStyle(){
          return{fontSize:`${this.fontSize}px`}
      }     
 
    },
    methods:{
        getvisibilityFlag(i,y){
            return this.visibilityKeys.find(k => k.key == `&{i}&{y}`)
        },
        toggleVisibility(i,y){
            let flag= this.getvisibilityFlag(i,y)
            console.log(flag)
            flag.value = !flag.value
        }
         /* eslint-enable */
    },
    created(){
        for(var i=0;i<this.part.content.lenght;i++){
            for(var y=0;y<this.part.content[i].sentences.lenght;y++){
                this.visibilityKeys.push({
                    key:`&{i}&{y}`,
                    value:false
                })

            }
        }
    }
}
</script>