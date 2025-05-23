import homePage from '@/views/homePage.vue'
import inicioSesion from '@/views/inicioSesion.vue'
import tiendaPadel from '@/views/tiendaPadel.vue'
import reservarPista from '@/views/reservarPista.vue'
import { createRouter, createWebHistory } from 'vue-router'
import usuarioPerfil from '@/views/usuarioPerfil.vue'
import realizarPagos from '@/views/realizarPagos.vue'
import realizarReservas from '@/views/reservasUsuario.vue'

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
      path: '/home/reservar',
      name: 'reservas',
      component: reservarPista,
    },
    {
      path: '/home/tienda',
      name: 'tienda',
      component: tiendaPadel,
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: usuarioPerfil,
    },
    {
      path: '/pagos',
      name: 'pagos',
      component: realizarPagos,
    },
    {
      path: '/reservas',
      name: 'reservas',
      component: realizarReservas,
    },
  ],
})

export default router
