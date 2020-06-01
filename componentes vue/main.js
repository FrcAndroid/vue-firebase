/*Vue.component('mis-tareas',{
    props: ['tareas'],
    template: '<ul><li v-for="tarea in tareas">tarea.title</li></ul>',
});
new Vue({
    el:'main',
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
            this.tareasAjax = respuesta.data;
            });
    },
    data: {
        tareasAjax: [],
        tareasLocales: [
            {title: "aaa"},
            {title: "bbb"},
            {title: "ccc"},

        ]
    }

});*/
/*Vue.component('elegir-ganador', {
    props: ['listado'],
    template: '#elegir-ganador-template',
    template: '<div>' +
                '<h1>El ganador es: {{ ganador }}</h1>' +
                '<template v-else>'+
                    '<h1>Participantes</h1>' +
                    '<ul>' +
                        '<li v-for="persona in listado">{{ persona }}</li>'+
                    '</ul>'+
                '</template>'+
                '<button @click="elegitGanador">Elegit ganador</button>'+
              '</div>',
    methods: {
        elegirGanador(){
            let cantidad = this.participantes.length;
            let indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.participantes[indice - 1];
        }
    },
    data(){
        return{
            ganador: false,
            participantes: this.listado
        }
    },
});*/

/*new Vue({
    el:'main',
    data:{
        personas: [
            'Juan','Alicia','Pedro','Javier','Marcos'
        ]
    }
})*/

/*Vue.component('autor',{
    props: ['nombre', 'edad'],
    mounted(){

    },
    template: "<div><h1>{{ nombre }}</h1> <button @click='cambiarProp'>Cambiar Prop</button></div>",
    methods: {
        cambiarProp(){
            this.nombre = this.nombre.toUpperCase();
        }
    }
});

new Vue({
    el:'main',
    data:{
        autor: 'Juan Andrés',
    }
})*/
/*Vue.component('candidato', {
    //props: ['nombre', 'correoe', 'imagen'],
    props: {
        nombre: {
            type:[String, Array],
            required: true,
        },
        correoe: {
            type: String,
            default: 'juan@media.es'
        },
        imagen: String,
        location: {
            type: Object,
            default(){
                return{
                    ciudad: 'Elche'
                }
            }
        },
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted(){
        this.obtenerCandidatos();
    },
    data:{
        candidatos: [],
    },
    methods: {
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }
})*/
/*Vue.component('alerta', {
   props: ['tipo', 'posicion'],
   template: '<section class="alerta" :class=[tipo, posicion]">' +
             '<header class="alerta__header">' +
       '        <slot name="header">Hola</slot>' +
       '      </header>' +
       '<div class="alerta__contenido">' +
       '<slot>' +
       'aaaaaaaaaaaaaaaa' +
       '</slot>' +
       '</div>'+
       '<footer class="alerta__footer">' +
       '<slot name="footer">Cosas del footer</slot>' +
       '</footer>'+
    '<section>',
});
new Vue({
    el: 'main',
});*/
/*Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: '<section class="alerta" :class="[tipo, posicion]">'+
              '<header class="alerta__header">' +
        '<a href="#" @click="ocultarWidget">Cerrar</a>' +
        '<slot name="header">Hola</slot>' +
        '</header>'+
        '<div class="alerta__contenido">' +
        '<slot>sdadffads</slot>' +
        '</div>'+
        '<footer class="alerta__footer">' +
        '<slot name="footer">footer</slot>' +
        '</footer>'+
        '</section>',
    methods: {
        ocultarWidget(){
            this.$emit('ocultar');
        }
    }
})*/
/*const eventBus = new Vue();

Vue.component('listado-productos', {
    props: ['productos'],
    template: '<section>' +
        '<ul>' +
        '<li v-for="producto in productos">' +
        '{{producto-nombre}}-' +
        '<small>producto.precio.toFixed(2)}} €</small>' +
        '<button @click="eliminarProducto(producto.precio)">-</button>' +
        '<button @click="anadirProducto(producto.precio)">+</button>' +
        '</li></ul></section>',
    methods: {
        anadirProducto(precio){
            eventBus.$emit('anadir', precio);
        },
        eliminarProducto(precio){
            eventBus.$emit('eliminar', precio);
        },
    },
});

Vue.component('carrito-compra', {
    template: "<section>" +
        "<h1>{{total.toFixed(2}} €</h1>" +
        "<h3>{{cantidadProductos}} productos</h3>" +
        "</section>",
    data(){
        return{
            cantidadProductos: 0,
            total: 0,
        }
    },
    created(){
        eventBus.$on('anadir', (precio) => {
           if(this.total >= 0){
               this.total += precio;
               this.cantidadProductos++;
           }

        });
        eventBus.$on('eliminar', (precio)=> {
            if(this.total > 0){
                this.total -= precio;
                this.cantidadProductos--;
            }
        })
    }
});

new Vue({
    el:'main',
    data:{
        productos: [
            {nombre: 'Libro ES6', precio: 4},
            {nombre: 'Portatil', precio: 43},
            {nombre: 'Bolsa de patatas', precio: 999},

        ]
    }
})*/
/*Vue.component('lista-tareas', {
    props: ['tareas'],
    template: "<div>" +
        "<h1>" +
        "<slot>" +
        "<ul>" +
        "<tarea v-for='tarea in tareas' :tarea='tarea'>" +
        "</tarea>" +
        "</ul>" +
        "</slot>" +
        "</h1>"
});

Vue.component('tarea', {
    props: ['tarea'],
    template: "<li>{{tarea}}</li>"
})
new Vue({
    el:'main',
    data: {
        tareas: [
            'Finalizar sección componentes',
            'cosas',
            'cosas2'
        ]
    }
});*/

/*Vue.component('lista-tareas', {
    template: '<div>' +
        '<h1><slot></slot></h1>' +
        '<ul><tarea v-for="tarea in tareas" :tarea="tarea"></tarea>' +
        '</ul><hr></div>',
    data(){
        return{
            tareas:[
                'tarea 1',
                'tarea 2',
                'tarea 3'
            ],
        }
    }
});

Vue.component('tarea', {
    props: ['tarea'],
    template: '<li>{{tarea}}</li>'
    }
);

Vue.component('contacto', {
    template: '<div>' +
        '<a href="mailto:email@ejemplo.es">email@ejemplo.es</a>' +
        '<hr></div>',
});

Vue.component('bio',{
    template: '<div><p>cosas de ejemplo</p></div>'
});

new Vue({
    el:'main',
    data:{
        seleccionado: 'lista-tareas'
    }
});*/

/*Vue.component('contrasena', {
    props: ['contrasena'],
    template: '<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass">',
    methods: {
        comprobarContrasena(contrasena){
            if(this.noValidas.includes(contrasena)){
                this.$refs.pass.value = contrasena= '';
            }
            this.$emit('input', contrasena);
        }
    },
    data(){
        return{
            noValidas: ['abc', 'admin', '1234'],
        }
    }
});*/

Vue.component('usuarios', {
    template: "#usuarios-template",
    mounted(){
        axios.get('https://randomuser.me/api/?results=500')
            .then((datos) => {
                const listado = datos.data.results.map((usuario) => {
                    return{
                        nombre: "${usuario.name.title} ${usuario.name.first} ${usuario.name.last}",
                        correoe: usuario.email,
                        foto: usuario.picture.medium,
                    }
                    this.usuarios =listado;
                })
            })
    },
    data(){
        return{
            usuarios:[],
            busqueda:'',
        }
    },
    computed: {
        filtrarUsuarios(){
            return this.usuarios.filter((usuario) => {
                return usuario.nombre.includes(this.busqueda);
            });
        }
    }
})