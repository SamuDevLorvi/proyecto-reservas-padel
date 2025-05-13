import homePage from '@/views/homePage.vue'
import inicioSesion from '@/views/inicioSesion.vue'
import tiendaPadel from '@/views/tiendaPadel.vue'
import reservarPista from '@/views/reservarPista.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicioSesion,
    },
    {
      path: '/home',
      name: 'home',
      component: homePage,
    },
    {
      path: '/home/reservas',
      name: 'reservas',
      component: reservarPista,
    },
    {
      path: '/home/tienda',
      name: 'tienda',
      component: tiendaPadel,
    },
  ],
})

export default router
