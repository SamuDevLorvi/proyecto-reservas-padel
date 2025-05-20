<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
</script>
<template>
  <div class="login-container">

    <BarraSelectora />
    <h1>Tienda</h1>
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

.login-form {
  background: rgba(255, 255, 255, 0.9);        /* Fondo semitransparente para el formulario */
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  margin: 2rem auto;                           /* Centra el formulario */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
