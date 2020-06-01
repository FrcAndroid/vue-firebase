<template>
    <section>
        <h2>Home</h2>
        <router-link :to="{ name:'equipo', params: {id: id}}">Equipo</router-link>
    </section>
</template>

<script>
    export default {
        name: "Home.vue"
        data(){
            return{
                id: 'yo'
            }
        }
    }
</script>

<style scoped>

</style>