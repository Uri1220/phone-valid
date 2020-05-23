<template>
    <div>
        <v-card color="accent" class="white--text">
            <v-card-title primary-title class="headline">
                {{part.title}}
                <v-divider></v-divider>
                {{part.id}}
                <v-divider></v-divider>
                {{bookId}}
                
            </v-card-title>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="primary"
                :to="{name:'bookPart',params:{bookId:bookId,partId:part.id}}"
                >Открыть</v-btn>
            </v-card-actions>
   <!-- первое bookId и partId из router/index, второе bookId и part из props ниже -->
        </v-card>
    </div>
</template>

<script>
export default {
    props:{
        "part":{
            type:Object,
            required:true
        },
        "bookId":{
            required:true
        }
    }
}
</script>