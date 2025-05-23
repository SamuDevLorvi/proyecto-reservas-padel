const express = require("express");
const router = express.Router();
const connection = require("../connection/connection");

let pistas = []; // Simulación de base de datos

router.get("/", (req, res) => {
	res.json(pistas);
});

router.post("/", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
