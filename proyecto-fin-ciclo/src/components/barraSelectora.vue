<script setup lang="ts">
import router from '@/router'

function cerrarSesion() {
  router.push({ path: '/inicioSesion' })
}
</script>

<template>
  <v-card>
    <v-toolbar style="background-color: greenyellow">
      <v-btn class="fluent--sport-baseball-20-regular"></v-btn>
      <v-toolbar-title text="PadelBooking"></v-toolbar-title>
      <v-btn class="mi--log-in" :click="cerrarSesion" :active="true"></v-btn>
    </v-toolbar>
  </v-card>
</template>
<style scoped>
.fluent--sport-baseball-20-regular {
  display: inline-block;
  width: 20px;
  height: 20px;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23000' d='M4.613 5.53A6.99 6.99 0 0 1 10 3c2.166 0 4.102.984 5.387 2.53c-.641.383-1.326.7-2.046.942a.5.5 0 0 0 .318.948c.815-.274 1.59-.636 2.312-1.075A6.97 6.97 0 0 1 17 10c0 1.344-.379 2.6-1.035 3.666a11.5 11.5 0 0 0-2.306-1.072a.5.5 0 0 0-.318.948c.717.24 1.4.556 2.038.938A6.99 6.99 0 0 1 10 17a6.99 6.99 0 0 1-5.379-2.52a10.5 10.5 0 0 1 2.038-.938a.5.5 0 1 0-.318-.948c-.813.273-1.585.634-2.306 1.072A6.97 6.97 0 0 1 3 10c0-1.34.376-2.591 1.029-3.655c.722.44 1.497.801 2.312 1.075a.5.5 0 0 0 .318-.948a10.5 10.5 0 0 1-2.046-.943M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M8.567 6.917a10.6 10.6 0 0 0 2.865 0a.5.5 0 0 1 .135.991a11.6 11.6 0 0 1-3.135 0a.5.5 0 0 1 .135-.99m0 6.18a10.6 10.6 0 0 1 2.865 0a.5.5 0 0 0 .135-.991a11.6 11.6 0 0 0-3.135 0a.5.5 0 1 0 .135.99'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
.mi--log-in {
  display: inline-block;
  width: 24px;
  height: 24px;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='%23000'%3E%3Cpath d='M14 19a1 1 0 1 0 0 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-5a1 1 0 1 0 0 2h5v14z'/%3E%3Cpath d='M15.714 12.7a1 1 0 0 0 .286-.697v-.006a1 1 0 0 0-.293-.704l-4-4a1 1 0 1 0-1.414 1.414L12.586 11H3a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4z'/%3E%3C/g%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
