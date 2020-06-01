import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
/*
export const store = new Vuex.Store({
  state: {
    cantidad: 0,
  }
});*/

/*const store = new Vuex.Store({
  state: {
    nombre: 'Yo',
    apellidos: 'Mismo',
    profesion: 'Estudiante en cuarentena',
    ciudad: 'Carabanchel'
  }
});*/
/*
export const store = new Vuex.Store({
  state: {
    tareas: [
      {nombre: 'aaa', completado: false},
      {nombre: 'bbb', completado: false},
      {nombre: 'ccc', completado: false},
      {nombre: 'ddd', completado: true},
      {nombre: 'eee', completado: true},
    ],
    getters: {
      tareasCompletadas: (state) => {
        return state.tareas.filter((tarea) => tarea.completado).length;
      }
    }
  }
})*/

/*export const store = new Vuex.Store({
  state: {
    cantidad: 0,
  },
  mutations: {
    aumentar: (state) => state.cantidad++,
    reducir: (state) => state.cantidad--,
  }
});*/

/*export const store = new Vuex.Store({
  state: {
    cantidad: 0,
  },
  mutations: {
    aumentar: (state) => state.cantidad++,
    reducir: (state) => state.cantidad--,
  },
  actions: {
    aumentarAsync: (context, cantidad) => {
      setTimeout(()=> context.commit('aumentar', cantidad), 2000);
    },
    reducirAsync: ({commit}, {cantidad}) => {
      setTimeout(() => commit('reducir', cantidad), 2000);
    }
  }
});*/
import productos from "./modules/productos";
import {getters} from "./getters";
import {mutations} from "./mutations";

export const store = new Vuex.Store({
  state: {
    carro: [],
  },
  getters: getters,
  mutations: mutations,
  modules: {
    productos
  }
});
