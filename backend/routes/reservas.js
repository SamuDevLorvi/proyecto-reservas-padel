const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');

let reservas = []; // Simulación de base de datos

router.get('/', authenticateToken, (req, res) => {
  res.json(reservas);
});

router.post('/', authenticateToken, (req, res) => {
  const { pistaId, fecha, hora } = req.body;
  reservas.push({ id: reservas.length + 1, pistaId, fecha, hora, usuario: req.user.email });
  res.send('Reserva creada');
});

router.delete('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  reservas = reservas.filter(r => r.id !== parseInt(id));
  res.send('Reserva eliminada');
});

app.post('/api/reservar', async (req, res) => {
  const { pista, hora, duracion, fecha, usuario_email } = req.body;

  try {
    // Obtener ID del usuario por su correo
    const [usuario] = await db.execute(
      'SELECT id FROM usuarios WHERE correo = ?',
      [usuario_email]
    );
    if (usuario.length === 0) return res.status(404).json({ error: 'Usuario no encontrado' });
    const usuario_id = usuario[0].id;

    // Obtener ID de la pista por nombre
    const [pistaResult] = await db.execute(
      'SELECT id FROM pistas WHERE nombre = ?',
      [pista]
    );
    if (pistaResult.length === 0) return res.status(404).json({ error: 'Pista no encontrada' });
    const pista_id = pistaResult[0].id;

    // Calcular hora fin
    const [hora_h, hora_m] = hora.split(':').map(Number);
    const horaInicio = `${hora_h.toString().padStart(2, '0')}:${hora_m.toString().padStart(2, '0')}:00`;
    const date = new Date(`1970-01-01T${horaInicio}Z`);
    date.setMinutes(date.getMinutes() + duracion);
    const horaFin = date.toISOString().substring(11, 19); // HH:MM:SS

    // Insertar reserva
    await db.execute(
      `INSERT INTO reservas (usuario_id, pista_id, fecha, hora_inicio, hora_fin)
       VALUES (?, ?, ?, ?, ?)`,
      [usuario_id, pista_id, fecha, horaInicio, horaFin]
    );

    res.json({ success: true, message: 'Reserva realizada' });

  } catch (error) {
    console.error(error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'Horario ya reservado' });
    } else {
      res.status(500).json({ error: 'Error del servidor' });
    }
  }
});
module.exports = router;