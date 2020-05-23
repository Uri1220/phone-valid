
<template>
  <div>
    <v-container fluid grid-list-md>
       <v-data-iterator
          :items="words"
          :hide-default-footer="true"          
           >
            <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>

                <v-card>
                <v-card-title class="subheading font-weight-bold">
                    {{ props.item.origWord }}
                 </v-card-title>
                <v-divider></v-divider>

                <v-card-text>
                     {{ props.item.transWord }}
                </v-card-text>

                
                </v-card>
            </v-flex>


     
        </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
      itemsPerPage: 4, 
             }
    },
    props:{
        words:{
            type:Array,
            required:true
        }
    }
    
}
</script>