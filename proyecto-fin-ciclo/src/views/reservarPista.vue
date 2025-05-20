<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
import router from '@/router'
import { ref } from 'vue'
const tiempo = ['60 minutos', '90 minutos', '120 minutos']
const pistas = ['Pista 1', 'Pista 2', 'Pista 3', 'Pista 4', 'Pista 5']
const horas = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
]
//Ventana emergente variables
const showModal = ref(false)
const pistaSeleccionada = ref('')
const horaSeleccionada = ref('')

const select = ref()
const duracion = ref(0)
function abrirModal(pista: string, hora: string) {
  pistaSeleccionada.value = pista
  horaSeleccionada.value = hora
  showModal.value = true
}
async function confirmarReserva() {
  const response = await fetch('http://localhost:3000/api/reservar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      pista: pistaSeleccionada.value,
      hora: horaSeleccionada.value,
      duracion: select.value,
      fecha: new Date().toISOString().split('T')[0],
      usuario_email: 'cliente@email.com'
    })
  });

  const data = await response.json();
  console.log('Reserva confirmada:', data);

  router.push({
    name: 'pagos',
    query: {
      pista: pistaSeleccionada.value,
      hora: horaSeleccionada.value,
      tiempo: select.value,
    }
  })
}

</script>
<template>
  <BarraSelectora />
  <div class="login-container">
    <div class="container">
      <h1>Reservar Pista</h1>
      <p>Selecciona la pista, el tiempo que quieres jugar y la hora que deseas reservar:</p>
      <div class="tiempo-container">
        <v-select label="Elige tiempo de juego: " :items="tiempo" v-model="select"> </v-select>
        <div class="pistas-container">
          <div v-for="pista in pistas" :key="pista" class="pista-column">
            <h2>{{ pista }}</h2>
            <div class="horas-container">
              <v-btn
                v-for="hora in horas"
                :key="hora"
                class="hora-btn"
                variant="outlined"
                @click="abrirModal(pista, hora)"
              >
                {{ hora }}
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div v-if="showModal">
  <div class="modal-backdrop">
    <div class="modal">
      <h2>Confirmar Reserva</h2>
      <p><strong>Pista:</strong> {{ pistaSeleccionada }}</p>
      <p><strong>Hora:</strong> {{ horaSeleccionada }}</p>
      <p><strong>Duración:</strong> {{ select }}</p>
      <v-btn color="success" @click="confirmarReserva">Confirmar</v-btn>
      <v-btn color="error" @click="showModal = false">Cancelar</v-btn>
    </div>
  </div>
</div>
    </template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
}

.login-container {
  padding-top: 60px; /* Adjust this value to match the height of BarraSelectora */
}
.login-container {
  background-image: url('@/assets/pista.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Opcional: efecto parallax */
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* Cambiado de fixed a relative */
}

.login-form {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
