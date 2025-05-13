<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
import router from '@/router'
function reservar() {
  router.push({ path: '/home/reservas' })
}
function tienda() {
  router.push({ path: '/home/tienda' })
}
</script>
<template>
  <BarraSelectora />
  <h1>Home Page</h1>
  <v-btn @click="reservar">Reservas</v-btn>
  <v-btn @click="tienda">Tienda</v-btn>
</template>
