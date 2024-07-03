import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import("../componentes/Inicio")}, 
  { path: '/historia', component: () => import("../componentes/Historia.vue") },
  { path: '/tienda', component: () => import("../componentes/Tienda.vue") },
  { path: '/tienda/:id', component: () => import("../componentes/Producto.vue") } // Ruta dinámica para productos específicos
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
