// Importamos express y el controlador de clientes
var express = require("express");
var publicController = require("../controllers/PublicController");

// Creamos un nuevo enrutador de Express
var api = express.Router();


api.get("/obtener_nuevos_productos", publicController.obtener_nuevos_productos);
api.get("/obtener_productos_recomendados", publicController.obtener_productos_recomendados);
api.get("/obtener_productos_shop", publicController.obtener_productos_shop);
api.get("/listar_categorias_publico", publicController.listar_categorias_publico);


// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
