<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
import { onMounted, ref } from 'vue'

interface Usuario {
  nombre: String
  correo: String
}

const usuario = ref<Usuario | null>(null)
const id_usuario = document.cookie
async function obtenerUsuario() {
  try {
    const response = await fetch('http://localhost:3001/users/id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({ id: id_usuario }),
    })
    const datos = await response.json()
    usuario.value = datos.respuesta[0]
    // console.log('Daatos usuario-->', usuario.value)
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    alert('Error: ' + error)
  }
}

onMounted(() => {
  obtenerUsuario()
})
</script>
<template>
  <div class="login-container">
    <BarraSelectora />
    <div class="usuario-perfil">
      <h1>Perfil de Usuario</h1>
      <div class="info-usuario" v-if="usuario">
        <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
        <p><strong>Email:</strong> {{ usuario.correo }}</p>
        <p><strong>Teléfono:</strong> 612 312 756</p>
      </div>
      <div v-else>
        <p>Cargando información del usuario...</p>
      </div>
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
</style>
