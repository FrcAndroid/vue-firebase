/*const home = Vue.component('Home',{
    template: '<h1>Portada</h1>',
});

const contacto = Vue.component('Contacto',{
    template: '<h1>Contacto</h1>',
});

const routes = [
    {path: '/', component: home},
    {path: '/contacto', component: contacto},

];

const router = new VueRouter({
    routes: routes
})

new Vue({
    router: router,
    el: 'main',
});*/

/*import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from 'routes';
import App from 'App.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if(to.meta.privado)
        next(store.state.auth);
    else
        next();
})

new Vue({
    el:"#app",
    router: routes,
    store,
    render: h => h(App)
})*/
import Vue from 'vue'
import Info from '.components/Info.vue';
//import Bio from '.components/Bio.vue'
import VueRouter from 'vue-router';

const Bio = resolve => {
    require.ensure(['./components/Bio.vue'], () => {
        resolve(require('./components/Bio.vue'));
    })
};

const routes = [
    {path: '/', component: Info},
    {path: '/bio', component: Bio},

];
const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        const position = {};
        if(to.hash){
            position.selector = to.hash;
        } else {
            position.x = 200;
            position.y = 100;
        }
        return position;
    }
});

new Vue({
    el:"#app",
    router,
    store,
    render: h => h(App)
});
