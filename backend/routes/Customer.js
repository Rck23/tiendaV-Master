// Importamos express y el controlador de clientes
var express = require("express");
var customerController = require("../controllers/CustomerController");
var cauthenticate = require("../middlewares/cauthenticate");

// Creamos un nuevo enrutador de Express
var api = express.Router();


api.post("/crear_producto_carrito", cauthenticate.decodeToken  ,customerController.crear_producto_carrito);
api.get("/obtener_carrito_cliente", cauthenticate.decodeToken  ,customerController.obtener_carrito_cliente);
api.delete("/eliminar_producto_carrito/:id", cauthenticate.decodeToken  ,customerController.eliminar_producto_carrito);

api.post("/crear_direccion_cliente", cauthenticate.decodeToken  ,customerController.crear_direccion_cliente);
api.get("/obtener_direcciones_cliente", cauthenticate.decodeToken  ,customerController.obtener_direcciones_cliente);
api.delete("/eliminar_direccion_cliente/:id", cauthenticate.decodeToken  ,customerController.eliminar_direccion_cliente);
api.get("/validar_payment_id_venta/:payment_id",  cauthenticate.decodeToken, customerController.validar_payment_id_venta);
api.post("/crear_venta_cliente",  cauthenticate.decodeToken, customerController.crear_venta_cliente);


// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
