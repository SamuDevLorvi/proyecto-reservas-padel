<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
import { onMounted, ref } from 'vue'

interface Pista {
  hora_inicio: String
  Minutos: String
  pista_id: String
}
const pistas = ref<Pista[] | null>(null)
const id_usuario = document.cookie
async function obtenerReservas() {
  try {
    const response = await fetch('http://localhost:3001/reserva', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ id: id_usuario }),
    })
    const datos = await response.json()
    pistas.value = datos.respuesta
    // console.log('Daatos pista-->', pistas.value)
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    alert('Error: ' + error)
  }
}
onMounted(() => {
  obtenerReservas()
})
</script>
<template>
  <div class="login-container">
    <BarraSelectora />

    <h1>Pistas Reservadas</h1>
    <div v-if="pistas">
      <ul>
        <li v-for="pista in pistas">
          <strong>Pista {{ pista.pista_id }}</strong> - {{ pista.Minutos }} minutos a las
          {{ pista.hora_inicio }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No tienes pistas reservadas.</p>
    </div>
  </div>
</template>
<style scoped>
.login-container {
  background-image: url('@/assets/pista.jpg'); /* Ruta a tu imagen */
  background-size: cover; /* Cubre todo el espacio disponible */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que se repita */
  background-attachment: fixed; /* Fondo fijo al hacer scroll (opcional) */
  min-height: 100vh; /* Altura mínima = 100% del viewport */
  width: 100%; /* Ancho completo */
  position: fixed; /* Fija el fondo en la pantalla */
  top: 0;
  left: 0;
  z-index: -1; /* Para que el contenido quede encima */
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
