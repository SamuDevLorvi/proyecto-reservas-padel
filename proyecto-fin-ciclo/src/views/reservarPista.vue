<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
import { VDateInput } from 'vuetify/labs/VDateInput'
</script>
<template>
  <BarraSelectora />
  <h1>Reservas</h1>

  <v-date-picker label="Selecciona una fecha" max-width="368"></v-date-picker>
</template>
