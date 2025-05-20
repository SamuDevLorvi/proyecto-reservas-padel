<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
const correo = ref()
const password = ref()
const visible = ref(false)

async function iniciarSesion() {
  const response = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify({ email: correo.value, password: password.value })
  })
  const data = await response.json()
  if (response.status == 401) {
    const alert = 'Error al iniciar sesión'
    return
  }

  router.push({ path: '/home' })
}
async function crearCuenta() {
  const response = await fetch('http://localhost:3000/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify({ email: correo.value, password: password.value })
  })
  const data = await response.json()
  if (response.status == 401) {
    const alert = 'Error al crear cuenta'
    return
  }
  router.push({ path: '/home' })
}
</script>
<template>
  <div class="login-container">
    <h1>PadelBooking</h1>
    <div class="container">
      <p>Iniciar Sesion</p>
      <p>Introduce tu correo y contraseña para iniciar sesion:</p>
      <v-text-field label="E-mail" v-model="correo" class="registro"></v-text-field>
      <v-text-field
        :counter="10"
        label="Password"
        v-model="password"
        class="registro"
        :type="visible ? 'text' : 'password'"
      ></v-text-field>

      <v-btn @click="iniciarSesion" class="botonRegitro" > Iniciar Sesion </v-btn>
      <v-btn @click="crearCuenta" class="botonRegitro" > No tengo cuenta </v-btn>
      <!-- <p v-if="alert">{{ alert }}</p> -->
    </div>
  </div>
</template>
<style scoped>
/* Estilos generales para la página de login */
h1 {
  text-align: center;
  color: #2c3e50; /* Oscuro profesional */
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: 700;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.container p:first-of-type {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.container p:last-of-type {
  color: #7f8c8d; /* Gris suave */
  margin-bottom: 2rem;
}

/* Estilos para los campos de texto (Vuetify) */
.registro {
  margin-bottom: 1.5rem !important;
}

/* Estilo para el botón de inicio de sesión */
.botonRegitro {
  background-color: #3498db !important; /* Azul vibrante */
  color: white !important;
  font-weight: 600;
  padding: 0.8rem 2rem !important;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.botonRegitro:hover {
  background-color: #2980b9 !important; /* Azul más oscuro al pasar el mouse */
}
/* En tu archivo CSS */
.v-text-field .v-label {
  text-align: center !important; /* Alinea el texto del label */
  left: 0 !important; /* Posición inicial */
  transform-origin: left top; /* Ajuste para animación */
}

/* Si usas 'outlined', el label flota arriba */
.v-text-field--outlined .v-label {
  background-color: white; /* Fondo para que no corte con el borde */
  padding: 0 4px; /* Espacio interno */
}
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

.login-form {
  background: rgba(255, 255, 255, 0.9); /* Fondo semitransparente para el formulario */
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  margin: 2rem auto; /* Centra el formulario */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
