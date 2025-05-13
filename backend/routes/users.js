var express = require('express');
var router = express.Router();

/*Objeto usuarios */
const usuarios = {
  user1: {
    email: 'samuel.lorvi@gmail.com',
    password: 'caracola'
  },
  user2: {
    email: 'perico@gmail.com',
    password: 'bacalao'
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', (req, res)=>{
  res.send('Usuario correcto')
})

module.exports = router;
