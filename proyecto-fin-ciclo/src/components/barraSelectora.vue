<script setup lang="ts">
import router from '@/router'
const menu = ['Home','Perfil', 'About','Blog', 'Contact', 'Cerrar Sesión']
function cerrarSesion() {
  router.push({ path: '/' })
}
</script>

<template>
  <v-card>
    <v-toolbar
      style="background-color: #2c3e50; color: white; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;"
    >
      <v-toolbar-title style="font-family: 'Roboto', sans-serif; font-size: 24px; font-weight: bold;">
      PadelBooking
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      v-for="item in menu"
      :key="item"
      @click="item === 'Cerrar Sesión' ? cerrarSesion() : router.push({ path: `${item.toLowerCase()}` })"
      style="margin: 0 8px; font-family: 'Roboto', sans-serif; font-size: 16px; color: white; text-transform: capitalize;"
      text
      >
      {{ item }}
      </v-btn>
    </v-toolbar>
    <div style="height: 64px;"></div> <!-- Spacer to prevent content overlap -->
  </v-card>
</template>
<style scoped>

</style>
