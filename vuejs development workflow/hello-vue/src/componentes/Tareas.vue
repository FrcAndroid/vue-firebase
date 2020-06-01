<template>
  <div>
    <h2>Tareas por hacer</h2>
    <ul>
      <li v-for="tarea in tareasPendientes">
        <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
      </li>
    </ul>
    <h2>Las tareas finalizadas</h2>
    <li v-for="tarea in tareasFinalizadas">
      <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
    </li>
  </div>
</template>

<script>

    export default {
      data(){
          return{
              tareas: [
                  {nombre: 'aaa', completado: false},
                  {nombre: 'bbb', completado: false},
                  {nombre: 'ccc', completado: false},
                  {nombre: 'ddd', completado: true},
                  {nombre: 'eee', completado: true},
              ],
              finalizadas: []
          }
      },
        methods: {
          actualizarTarea(tarea){
              tarea.completado = !tarea.completado;
          }
        },
        computed: {
          tareasPendientes(){
              return this.tareas.filter((tarea) => !tarea.completado);
          },
          tareasFinalizadas(){
              return this.tareas.filter((tarea) => tarea.completado);
          }
        }
    }
</script>

<style scoped>
  li a{
    color: red
  }
</style>
