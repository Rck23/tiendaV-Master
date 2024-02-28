// Importamos express y el controlador de clientes
var express = require("express");
var publicController = require("../controllers/PublicController");

// Creamos un nuevo enrutador de Express
var api = express.Router();


api.get("/obtener_nuevos_productos", publicController.obtener_nuevos_productos);


// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
