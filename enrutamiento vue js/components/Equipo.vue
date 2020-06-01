<template>
    <main>
        <h1>Mi equipo</h1>
        <router-view></router-view>
        <router-view name="bio"></router-view>
        <router-view name="fotos"></router-view>


    </main>
</template>

<script>
    export default {
        name: "Equipo.vue"
    }
</script>

<style scoped>

</style>