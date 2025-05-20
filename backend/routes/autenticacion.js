var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const users = [{
  email: 'Samuel.lorvi@gmail.com',
  password: '123456'
}]; // Simulación de base de datos

router.post('/register', (req, res) => {
  const { email, password, role } = req.body;
  users.push({ email, password, role: role || 'user' });
  res.send('Usuario registrado');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).send('Credenciales incorrectas');

  const token = jwt.sign({ email: user.email, role: user.role }, 'secret_key', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;