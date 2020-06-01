<!--<template>
    <section><h1>Rutas</h1>
        <router-link to="/" active-class="activo" tag="li" exact>Home</router-link>
        <router-link to="/contacto" active-class="activo" tag="li">Contacto</router-link>
        <router-link to="/usuario" active-class="activo" tag="li">Usuario</router-link>
        <br>
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
        name: "App.vue"
    }
</script>

<style scoped>
    .activo a{
        color: red;
    }

</style>-->

<template>
    <section><h1>Rutas</h1>
        <button @click="cambiar">Cambiar Auth</button>
        <transition name="aparecer" appear>
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        name: "App.vue",
        methods: mapMutations(['cambiar']),
    }
</script>

<style scoped>
    .activo a{
        color: red;
    }



</style>