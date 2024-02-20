// Importamos express y el controlador de clientes
var express = require("express");
var clienteController = require("../controllers/ClienteController");

// Creamos un nuevo enrutador de Express
var api = express.Router();

/**
 * Ruta de prueba para el controlador de clientes.
 *
 * @route GET /testing
 * @group Testing
 * @returns {Object} - Respuesta del controlador de clientes.
 */
api.get("/testing", clienteController.testing);

// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
