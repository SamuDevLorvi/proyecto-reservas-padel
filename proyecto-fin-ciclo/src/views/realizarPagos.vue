<script setup lang="ts">
import BarraSelectora from '@/components/barraSelectora.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const pista = ref('')
const hora = ref('')
const duracion = ref('')
const gripChecked = ref(false)
const bolasChecked = ref(false)

const precio = () => {
  let base = 0
  switch (duracion.value) {
    case '60 minutos':
      base = 4
      break
    case '90 minutos':
      base = 5
      break
    case '120 minutos':
      base = 6
      break
    default:
      base = 0
  }
  if (gripChecked.value) {
    base += 2
  }
  if (bolasChecked.value) {
    base += 6
  }
  return base
}

const nombre = ref('')
const tarjeta = ref('')
const caducidad = ref('')
const cvv = ref('')

onMounted(() => {
  pista.value = route.query.pista as string
  hora.value = route.query.hora as string
  duracion.value = route.query.tiempo as string
})

function pagar() {
  if (!nombre.value || !tarjeta.value || !caducidad.value || !cvv.value) {
    alert('Por favor, completa todos los campos.')
    return
  }
  alert(`¡Pago realizado con éxito para ${pista.value} a las ${hora.value}!`)
  router.push('/home')
}
</script>
<template>
  <div class="login-container">
    <BarraSelectora />
    <h1>Realizar pago</h1>
    <div class="container">
      <h2>Resumen de la Reserva</h2>
      <p><strong>Pista:</strong> {{ pista }}</p>
      <p><strong>Hora:</strong> {{ hora }}</p>
      <p><strong>Duración:</strong> {{ duracion }}</p>
      <p><strong>Precio:</strong> {{ precio() }} €</p>
      <div>
        <div>
          <!-- <table>
            <tr>
              <th> -->
          <input type="checkbox" v-model="gripChecked" />
          Grip (+2 €)
          <!-- </th>
              <th> -->
          <input type="checkbox" v-model="bolasChecked" />
          Bolas (+6 €)
          <!-- </th>
            </tr>
          </table> -->
        </div>
      </div>
      <h2>Datos de la Tarjeta</h2>
      <div class="inputs-contenedor">
        <input v-model="nombre" type="text" placeholder="Titular" />
        <input v-model="tarjeta" type="text" placeholder="Número de tarjeta" maxlength="19" />
        <input v-model="caducidad" type="text" placeholder="MM/AA" maxlength="5" />
        <input v-model="cvv" type="text" placeholder="CVV" maxlength="3" />
      </div>
      <button @click="pagar">Pagar</button>
    </div>
  </div>
</template>
<style scoped>
.login-container {
  background-image: url('@/assets/pista.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.pago-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #f9f9f9;
  font-family: sans-serif;
}

.resumen,
.formulario {
  margin-bottom: 1.5rem;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

button {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
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
</style>
