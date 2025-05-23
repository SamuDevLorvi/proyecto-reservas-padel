const express = require("express");
const router = express.Router();
const conectar = require("../connection/connection");

//Obtener reservas
router.post("/reserva", async (req, res) => {
	async function obtenerReserva() {
		try {
			const bd = await conectar;
			const { id } = req.body;
			const [respuesta] = await bd.execute(
				"SELECT * FROM reservas WHERE usuario_id = ?",
				[id]
			);
			if (!respuesta) {
				return res
					.status(404)
					.json({ error: "Correo no encontrado" });
			}
			return res.json({ respuesta });
		} catch (error) {
			console.error("Error al reservar-->", error);
		}
	}
	obtenerReserva();
});
//Reservar pista
router.post("/reservar", async (req, res) => {
	async function reservarPista() {
		const { pista, hora, duracion, usuario_email } = req.body;
		const db = await conectar;
		try {
			// Obtener ID del usuario por su correo
			const [usuario] = await db.execute(
				"SELECT id FROM usuarios WHERE correo = ?",
				[usuario_email]
			);
			if (usuario.length === 0)
				return res
					.status(404)
					.json({ error: "Usuario no encontrado" });
			const usuario_id = usuario[0].id;
			// Obtener ID de la pista por nombre
			const [pistaResult] = await db.execute(
				"SELECT id FROM pistas WHERE nombre = ?",
				[pista]
			);
			if (pistaResult.length === 0)
				return res
					.status(404)
					.json({ error: "Pista no encontrada" });
			const pista_id = pistaResult[0].id;

			// Insertar reserva
			await db.execute(
				`INSERT INTO reservas (usuario_id, pista_id, hora_inicio, Minutos)
	 VALUES (?, ?, ?, ?)`,
				[usuario_id, pista_id, hora, duracion]
			);
			res.json({ success: true, message: "Reserva realizada" });
		} catch (error) {
			console.error("Error al reservar-->", error);
			if (error.code === "ER_DUP_ENTRY") {
				res.status(400).json({ error: "Horario ya reservado" });
			} else {
				res.status(500).json({ error: "Error del servidor" });
			}
		}
	}
	reservarPista();
	// console.log("holaaaa", req.body.pista);
});
module.exports = router;
