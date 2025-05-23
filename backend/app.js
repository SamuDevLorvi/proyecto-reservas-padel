var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
const port = 3001;

var usersRouter = require("./routes/autenticacion");
var pistasRouter = require("./routes/pistas");
var reservasRouter = require("./routes/reservas");

app.use(express.json());
app.use("/", reservasRouter);
app.use("/users", usersRouter);
app.use("/pistas", pistasRouter);

app.listen(port, () => {
	console.log(`--Servidor escuchando en ${port}--`);
});
module.exports = app;
