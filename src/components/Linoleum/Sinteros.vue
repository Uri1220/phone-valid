<template>
    <div>Sinteros</div>    
</template>

<script>
export default {
    data:()=>({
        sinter:[]
    }),
    async mounted(){
       this.sinter=  await this.$store.dispatch('fetchCategories')
    }
}
</script>