const productos = [
  {nombre: 'Juego 1', precio: 20},
  {nombre: 'Lavadora', precio: 430},
  {nombre: 'Juego 2', precio: 210},

];

const mutations ={
  anadirProducto: (state, producto) => state.productos.unshift(producto),

}

export default {
  state: productos, mutations
}

