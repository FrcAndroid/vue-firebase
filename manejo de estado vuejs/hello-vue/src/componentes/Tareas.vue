<template>
  <main>
    <ul>
      <tareasrestantes></tareasrestantes>
      <li v-for="tarea in tareas">{{ tarea.nombre }}</li>
    </ul>
  </main>

<script>
    import TareasRestantes from "./TareasRestantes";
    import {mapState} from 'vuex';
    export default {
        /*computed: {
          tareas(){
              return this.$store.state.tareas;
          }
        }*/
        components: {TareasRestantes},
        computed: mapState(['tareas'])
    }
</script>

  <script>
      import TareasRestantes from "./TareasRestantes";
      export default {
          components: {TareasRestantes}
      }
  </script>
