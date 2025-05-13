<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
const correo = ref()
const password = ref()

async function iniciarSesion() {
  const response = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: correo.value,
      password: password.value
    })
  })
  const data = await response.json();
  router.push({ path: '/home' })
    };
</script>
<template>
  <v-text-field label="E-mail" :value="correo"></v-text-field>
  <v-text-field :counter="10" label="passwd" :value="password"></v-text-field>

  <v-btn @click="iniciarSesion"> Iniciar Sesion </v-btn>
</template>
<style></style>
