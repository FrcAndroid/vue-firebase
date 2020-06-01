<!--<template>
<section>
    <h2>Contacto</h2>
    <button @click="volverHome()">Volver</button>
</section>
</template>

<script>
    export default {
        name: "Contacto.vue",
        created(){
            setTimeout(() => this.$router.push('/'), 2000);
        },
        methods: {
            volverHome(){
                this.$router.push('/', () => console.log('Ruta cambiada'));
            }
        }
    }
</script>

<style scoped>

</style>-->

<template>
    <section>
        <h2>Donde estoy</h2>
        <p>Mi casa</p>
        <h5>{{ newsletter }}</h5>
        <pre>{{ numero }}</pre>
        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Correo electronico</label>
                <input type="email" placeholder="tu email" id="correoe">
            </form>
        </template>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                numero: null,
            }
        },
        beforeRouteEnter: ((to, from, next) => {
            setTimeout(() => {
                next((vm) => {
                    vm.numero = Math.floor(Math.random() * 1000);
                }, 2000);
            })
        }),
    }
</script>

<style scoped>

</style>