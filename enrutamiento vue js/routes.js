/*import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import Usuario from "./components/Usuario.vue";

export const routes=  [
    {path: '/', component: Home},
    {path: '/contacto', component: Contacto},
    {path: '/usuario/:id', component: Usuario }
    ];
    */

/*import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import MiEquipo from './components/MiEquipo.vue';

export const routes=  [
    {path: '/', component: Home},
    {path: '/equipo', component: Equipo, children: [
            {path: 'mi', component: MiEquipo},
        ]},
];*/

import Home from './components/Home.vue';
import Equipo from './components/Equipo.vue';
import Usuario from './components/Usuario.vue';
import UsuarioFotos from './components/UsuarioFotos.vue';
import UsuarioBio from './components/UsuarioBio.vue';


/*export const routes=  [
    {path: '/', component: Home},
    {path: '/equipo:id', component: Equipo, children: [
            {path: '', component: Usuario, name: "equipo", children: [
                    {path: 'fotos', name:'fotos', component: UsuarioFotos},
                    {path: 'bio', name:'bio', component: UsuarioBio},
                ]},
        ]},
];*/

/*export const routes=  [
    {path: '/', component: Home},
    {path: '/equipo:id', component: Equipo, children: [
            {path: '', components:{
                default: Usuario,
                    bio: UsuarioBio,
                    fotos: UsuarioFotos,
                }, name: 'equipo'},
        ]},
];*/
import Contacto from "./components/Contacto.vue";

export const routes=  [
    {path: '/', component: Home, name:'home'},
    {path: '/prueba', alias:'/otraprueba', redirect: {name: 'home'}, component: Home},
    {path: '/equipo:id', component: Equipo, children: [
            {path: '', components:{
                    default: Usuario,
                    bio: UsuarioBio,
                    fotos: UsuarioFotos,
                }, name: 'equipo'},
        ]},
    { beforeEnter: ((to, from, next) => {
        next(store.state.auth)
        })},
    {path: '/contacto', meta: {privado: true}, component: Contacto, name: 'contacto', props: {newsletter: false}},
    {path: '*', component: NoEncontrado}
];