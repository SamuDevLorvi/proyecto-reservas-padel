var express = require("express");
var router = express.Router();
const conectar = require("../connection/connection");

//Get de todos los usuarios
router.get("/", (req, res) => {
	async function leerUsuarios() {
		try {
			const a = await conectar;
			const [results] = await a.query("SELECT * FROM usuarios");
			console.log(results);
			res.send(results);
		} catch (err) {
			console.log("Error al hacer query-->", err);
		}
	}
	leerUsuarios();
});
//obtener datos por id cliente
router.post("/id", async (req, res) => {
	try {
		const bd = await conectar;
		const { id } = req.body;
		const [respuesta] = await bd.execute(
			"SELECT * FROM usuarios WHERE id = ?",
			[id]
		);
		if (!respuesta) {
			return res.status(404).json({ error: "Correo no encontrado" });
		}
		return res.json({
			respuesta,
		});
	} catch (error) {
		console.error("Error al iniciar sesión -->", error);
		return res.status(500).json({ error: "Error interno del servidor" });
	}
});
//registro de cliente
router.post("/register", async (req, res) => {
	try {
		const bd = await conectar;
		const { nombre, email, password } = req.body;

		const [correo] = await bd.execute(
			"SELECT * FROM usuarios WHERE correo = ?",
			[email]
		);

		if (!correo) {
			return res
				.status(404)
				.json({ error: "Este correo ya está registrado" });
		}

		await bd.execute(
			"INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)",
			[nombre, email, password]
		);

		return res.json({ mensaje: "Registro de usuario realizado" });
	} catch (error) {
		console.error("Error al registrar usuario -->", error);
		return res.status(500).json({ error: "Error interno del servidor" });
	}
});
//login de cliente
router.post("/login", async (req, res) => {
	try {
		const bd = await conectar;
		const { email, password } = req.body;
		const [correo] = await bd.execute(
			"SELECT * FROM usuarios WHERE correo = ? AND password = ?",
			[email, password]
		);
		if (!correo) {
			return res.status(404).json({ error: "Correo no encontrado" });
		}
		const [id] = await bd.execute(
			"SELECT id FROM usuarios WHERE correo = ?",
			[email]
		);
		const id_usuario = id;
		id_usuario.toString();
		return res.json({
			mensaje: "Inicio de sesión exitoso",
			id: id_usuario,
		});
	} catch (error) {
		console.error("Error al iniciar sesión -->", error);
		return res.status(500).json({ error: "Error interno del servidor" });
	}
});
module.exports = router;
