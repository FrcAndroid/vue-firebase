//Vue.js
Vue.filter('alReves', function(valor){
    return valor.split('').reverse().join('');
});

const vm1 = new Vue({
    el: 'main',
    data: {
        busqueda: "",
        mensaje: "aaa",
        nuevaTarea: null,
        tareas: [{
                titulo: "Aprender Vue.js",
                prioridad: true,
                antiguedad: 23
            },
            {
                titulo: "Aprender ES6",
                prioridad: false,
                antiguedad: 135
            },
            {
                titulo: "Publicar algo todos los días",
                prioridad: true,
                antiguedad: 23
            }]
    },
    methods: {
        agregarTarea(){
            // this, hace referencia a la instancia Vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad:0,
            });
            this.nuevaTarea = null;
        },
        beforeUpdate(){
            console.log("BeforeUpdate: " + this.mensaje)
        },
        updated(){
            console.log("Updated: " + this.mensaje)
        },
        alReves(){
            this.mensaje = this.mensaje.split('').reverse().join('');
        }
    },
    computed: {
        mensajeAlReves(){
            return this.mensaje.split('').reverse.join('')
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea)=> tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad)
        },
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo)
        },
        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda))
        }
    }
});

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: "instancia vue 2",
        tareas: [
            {titulo: 'aaa', completado: false},
            {titulo: 'bbb', completado: false},
            {titulo: 'ccc', completado: false},
            {titulo: 'ddd', completado: false},

        ]
    },
    methods: {
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        }
    },
    computed: {
        tareasCompletadas(){
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }
});

Vue.prototype.$http = axios;
const vm3 = new Vue({
    el:'main',
    mounted(){
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas(){
            /*this.http.get("https://randomuser.me/api/?results=500")
                .then((respuesta) => {
                    this.personas = respuesta.body.results;
                })*/
            axios.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    this.personas = respuesta.data.results;
                });
        }
    }
})