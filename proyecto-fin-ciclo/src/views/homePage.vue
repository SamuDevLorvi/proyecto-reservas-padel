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
  <div class="login-container">
    <BarraSelectora />
    <h1>Home Page</h1>
    <div class="container">
      <p>Bienvenido a la página de inicio</p>
      <p>Selecciona una opción:</p>
      <v-btn @click="reservar" class="hora-btn" style="justify-content: center">Reservas</v-btn>
      <v-btn @click="tienda" class="hora-btn">Tienda</v-btn>
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
.container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  width: 90%;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.container p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.container p:first-of-type {
  font-size: 1.5rem;
  color: #fff;
  font-weight: 500;
}
.hora-btn {
  justify-content: center !important; /* Centra horizontalmente */
  align-items: center !important; /* Centra verticalmente */
  /* display: flex !important;         Necesario para flexbox */
  margin: 0.5rem !important;
  padding: 1.2rem 2rem !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.5px;
  transition: all 0.3s ease !important;
  min-width: 200px;
}

.hora-btn:first-of-type {
  background: linear-gradient(45deg, #00c853, #64dd17) !important;
}

.hora-btn:last-of-type {
  background: linear-gradient(45deg, #0091ea, #00b0ff) !important;
}

.hora-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
}

/* Efecto para dispositivos móviles */
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }

  .container {
    padding: 1.5rem;
    width: 95%;
  }

  .hora-btn {
    width: 100%;
    margin: 0.5rem 0 !important;
  }
}
</style>
