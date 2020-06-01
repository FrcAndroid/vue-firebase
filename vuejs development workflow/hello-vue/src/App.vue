<!--<template>
  <persona></persona>
</template>

<script>
    import persona from './componentes/Persona.vue';

    export default {
        components: { persona },

        data () {
          return {
          }
        }
}
</script>

<style>

</style>-->

<!--<template>
  <elemento tipo="section">Hola</elemento>
  <aside>Hola mundo</aside>
  <section>Hola</section>
</template>

<script>
  import elemento from "./componentes/Elemento.vue";
  export default{
    components: { elemento }
  }
</script>


<style>

</style>-->


<!--<template>
  <tareas></tareas>
</template>

<script>
    import tareas from './componentes/Tareas.vue'
    export default {
      components: ['tareas']
    }
</script>

<style scoped>

</style>-->

<template>
  <h1 :class="[$style.rojo]">Menú principal
  </h1>
  <input type="range">
  <ul>
    <li><a href="">Link 1</a></li>
    <li><a href="">Link 2</a></li>
    <li><a href="">Link 4</a></li>
    <li><a href="">Link 3</a></li>
    <li><a href="">Link 5</a></li>


  </ul>
</template>
<style module>
  .subrayado{
    text-decoration: underline;
  }
  .rojo{
    color: red;
  }
</style>
