<!--<template>
  <contador>
  </contador>
</template>
<script>
  import Contador from './componentes/Contador.vue';
  export default {
      components: {Contador},
  }
</script>-->
<!--<template>

</template>
<script>
  import {mapState} from 'vuex';
  export default{
    /*computed: {
        nombre(){
            return this.$store.state.nombre;
        }
    }*/
    computed: mapState(['nombre', 'apellidos', 'profesion']),
  }
</script>-->
<template>
  <section>
    <productos></productos>
    <carro></carro>
  </section>
</template>
<script>
    import Productos from './componentes/Productos.vue';
    import Carro from './componentes/Carro.vue';
    export default {
        components: {Productos, Carro}
    }
</script>
