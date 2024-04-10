// Importamos express y el controlador de clientes
var express = require("express");
var ventasController = require("../controllers/VentasController");
var authenticate = require("../middlewares/authenticate");

// Creamos un nuevo enrutador de Express
var api = express.Router();


api.get('/obtener_ventas_admin/:inicio/:hasta', authenticate.decodeToken, ventasController.obtener_ventas_admin);
api.get('/obtener_detalles_venta_admin/:id', authenticate.decodeToken, ventasController.obtener_detalles_venta_admin);

// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
