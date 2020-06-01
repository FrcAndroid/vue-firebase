<!--<template>
    <h2>{{id}}</h2>
</template>

<script>
    export default {
        name: "Usuario.vue",
        data(){
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to){
                this.id = to.params.id;
            }
        }
    }
</script>

<style scoped>

</style>-->

<!--<template>
    <section>
        <h1>El identificador es: {{$route.params.id}}</h1>
        <h2>Yo mismo</h2>
        <h5>Que no tengo correo</h5>
        <router-link :to="'/equipo/' + $route.params.id + '/fotos'">Fotos</router-link>
        <router-link :to="'/equipo/' + $route.params.id + '/bio'">Bio</router-link>
        <router-link :to="{ name: 'fotos', params: {id: $route.params.id}}">Fotos</router-link>
        <router-link :to="{ name: 'bio', params: {id: $route.params.id}}">Bio</router-link>

    </section>
</template>

<script>
    export default{
        beforeRouteEnter: ((to, from, next) => {
            next((vm) => console.log(vm));
        }),
        beforeRouteUpdate: ((to, from, next) => {
            next();
        }),
        beforeRouteLeave: ((to, from, next) => {
            next();
        }),
    }

</script>-->

<template>
    <section>
        <h1>El identificador es : {{ $route.params.id }}</h1>
        <h2>Yo</h2>
        <h5>micorreonuevo@gmail.com</h5>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                username: null
            }
        },
        created(){
            this.obtenerUsername();
        },
        watch: {
            "$route" : 'obtenerUsername'
        },
        methods: {
            obtenerUsername(){
                setTimeout(() => {
                    this.username = this.$route.params.id + Math.floor(Math.random() * 1000);
                }, 2000);
            }
        },
        beforeRouteEnter: ((to, from, next) => {
            next((vm) => console.log(vm));
        }),
        beforeRouteUpdate: ((to, from, next) => {
            next();
        }),
        beforeRouteLeave: ((to, from, next) => {
            next();
        }),

    }
</script>

<style scoped>

</style>