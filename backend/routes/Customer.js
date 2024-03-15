// Importamos express y el controlador de clientes
var express = require("express");
var customerController = require("../controllers/CustomerController");
var cauthenticate = require("../middlewares/cauthenticate");

// Creamos un nuevo enrutador de Express
var api = express.Router();


api.post("/crear_producto_carrito", cauthenticate.decodeToken  ,customerController.crear_producto_carrito);
api.get("/obtener_carrito_cliente", cauthenticate.decodeToken  ,customerController.obtener_carrito_cliente);


// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
