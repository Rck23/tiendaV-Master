// Importamos express y el controlador de clientes
var express = require("express");
var clienteController = require("../controllers/ClienteController");

// Creamos un nuevo enrutador de Express
var api = express.Router();


api.post("/registro_cliente_ecommerce", clienteController.registro_cliente_ecommerce);

// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
