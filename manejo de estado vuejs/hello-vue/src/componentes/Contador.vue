<!--<template>
  <h1>Contador: {{ cantidad }}</h1>
  <button @click="aumentar">Aumentar</button>
  <button @click="reducir">Reducir</button>

</template>

<script>
    export default {
        props: ['cantidad'],
        methods: {
            aumentar(){
                //this.$emit('aumentar');
                this.$store.state.cantidad++;
            },
            reducir(){
                //this.$emit('reducir');
                this.$store.state.cantidad--;

            }
        },
        computed:{
            cantidad(){
                return this.$store.state.cantidad;
            }
        }
    }
</script>

<style scoped>

</style>-->
<!--<template>
  <section>
    <h1>Cantidad: {{ cantidad }}</h1>
    <button @click="aumentar">Aumentar</button>
    <button @click="reducir">Reducir</button>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default{
      computed: mapState(['cantidad']),
      methods: mapMutations(['aumentar', 'reducir']),
          //aumentar(){
            //  this.$store.commit('aumentar');
          //},
          //reducir(){
            //  this.$store.commit('reducir');
          //}

      }
  }
</script>-->

<template>
  <section>
    <h1>Cantidad: {{ cantidad }}</h1>
    <button @click="aumentarAsync(12)">Aumentar</button>
    <button @click="reducirAsync({cantidad:15})">Reducir</button>
  </section>
</template>
<script>
    import {mapState, mapActions} from 'vuex';
    export default{
        computed: mapState(['cantidad']),
        methods: mapActions(['aumentarAsync', 'reducirAsync']),


    }
    }
</script>
