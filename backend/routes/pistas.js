const express = require('express');
const router = express.Router();
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

let pistas = []; // Simulación de base de datos

router.get('/', authenticateToken, (req, res) => {
  res.json(pistas);
});

router.post('/', [authenticateToken, isAdmin], (req, res) => {
  const { nombre, ubicacion } = req.body;
  pistas.push({ id: pistas.length + 1, nombre, ubicacion });
  res.send('Pista creada');
});

router.delete('/:id', [authenticateToken, isAdmin], (req, res) => {
  const { id } = req.params;
  pistas = pistas.filter(p => p.id !== parseInt(id));
  res.send('Pista eliminada');
});

module.exports = router;