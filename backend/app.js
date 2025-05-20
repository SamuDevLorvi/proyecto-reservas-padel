var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mysql = require('mysql2/promise');

const db = await mysql.createConnection({
  host: 'nozomi.proxy.rlwy.net',
  user: 'root',
  password: 'EdjlWQUrMQPUiBlNZFIMPEFeEcKEkYdH',
  database: 'railway',
  port: 43293
});

var app = express();
app.use(cors())
const port = 3001;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/autenticacion');
var pistasRouter = require('./routes/pistas');
var reservasRouter = require('./routes/reservas');
var adminRouter = require('./routes/admin');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pistas', pistasRouter);
app.use('/reservas', reservasRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`--Servidor escuchando en ${port}--`);
}
);
module.exports = app;
