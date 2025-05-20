<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
// Simulación de carga de datos
const usuario = {
  nombre: 'Juan Pérez',
  email: 'juan.perez@email.com',
  telefono: '123456789',
}
const pistas = [
  { id: 1, nombre: 'Pista 1', fecha: '2024-06-10', hora: '10:00' },
  { id: 2, nombre: 'Pista 2', fecha: '2024-06-12', hora: '18:00' },
]
</script>
<template>
  <div class="login-container">
    <BarraSelectora />
  <div class="usuario-perfil">
    <h1>Perfil de Usuario</h1>
    <div class="info-usuario" v-if="usuario">
      <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
      <p><strong>Email:</strong> {{ usuario.email }}</p>
      <p><strong>Teléfono:</strong> {{ usuario.telefono }}</p>
    </div>
    <div v-else>
      <p>Cargando información del usuario...</p>
    </div>

    <h2>Pistas Reservadas</h2>
    <div v-if="pistas.length">
      <ul>
        <li v-for="pista in pistas" :key="pista.id">
          <strong>{{ pista.nombre }}</strong> - {{ pista.fecha }} a las {{ pista.hora }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No tienes pistas reservadas.</p>
    </div>
  </div>
  </div>
</template>

<style scoped>
.login-container {
  background-image: url('@/assets/pista.jpg'); /* Ruta a tu imagen */
background-size: cover;                       /* Cubre todo el espacio disponible */
  background-position: center;                  /* Centra la imagen */
  background-repeat: no-repeat;                 /* Evita que se repita */
  background-attachment: fixed;                 /* Fondo fijo al hacer scroll (opcional) */
  min-height: 100vh;                           /* Altura mínima = 100% del viewport */
  width: 100%;                                 /* Ancho completo */
  position: fixed;                             /* Fija el fondo en la pantalla */
  top: 0;
  left: 0;
  z-index: -1;                                 /* Para que el contenido quede encima */
}
.usuario-perfil {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
.info-usuario {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #e0e7ff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 6px;
}
</style>
