const mysql = require("mysql2/promise");
const conexion = async () => {
	const connection = await mysql.createConnection({
		host: "crossover.proxy.rlwy.net",
		user: "root",
		password: "HeIeQPxCaHfIylXcsfxYdZVCanmAUUBs",
		database: "railway",
		port: 50250,
	});
	console.log("Conexion a base de datos exitosa!");
	return connection;
};
// async function conexionBd() {
// 	try {
// 		const connection = await mysql.createConnection({
// 			host: "crossover.proxy.rlwy.net",
// 			user: "root",
// 			password: "HeIeQPxCaHfIylXcsfxYdZVCanmAUUBs",
// 			database: "railway",
// 			port: 50250,
// 		});
// 		console.log("Conectado a la base de datos!!!");
// 		// return connection.connect();
// 	} catch (error) {
// 		console.error("Error conectando a la base de datos: ", error);
// 		throw error;
// 	}
// }

module.exports = conexion();
