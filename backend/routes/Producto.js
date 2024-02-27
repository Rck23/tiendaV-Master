// Importamos express, el controlador de productos, el middleware de autenticación y connect-multiparty
var express = require("express");
var productoController = require("../controllers/ProductoController");
var authenticate = require("../middlewares/authenticate");
var multipart = require('connect-multiparty');

// Creamos un nuevo enrutador de Express
var api = express.Router();

// Configuramos el middleware para manejar la subida de archivos
var path = multipart({ uploadDir: "./uploads/productos" });
var path_ingresos = multipart({ uploadDir: "./uploads/facturas" });
var path_galeria = multipart({ uploadDir: "./uploads/galeria" });

// PETICIONES DE PRODUCTOS

/**
 * Ruta para registrar un producto desde el panel de administración.
 * Requiere autenticación y manejo de archivos subidos.
 *
 * @route POST /registro_producto_admin
 * @group Admin - Productos
 * @returns {Object} - Respuesta del controlador de productos con la información del producto creado o un mensaje de error.
 */
api.post(
  "/registro_producto_admin",
  [authenticate.decodeToken, path],
  productoController.registro_producto_admin
);

/**
 * Ruta para listar productos desde el panel de administración.
 * Requiere autenticación y permite filtrar los resultados.
 *
 * @route GET /listar_producto_admin/:filtro?
 * @group Admin - Productos
 * @returns {Array} - Respuesta del controlador de productos con la lista de productos que coinciden con el filtro.
 */
api.get(
  "/listar_producto_admin/:filtro?",
  authenticate.decodeToken,
  productoController.listar_producto_admin
);


/**
 * Ruta para obtener la imagen de portada de un producto.
 * No requiere autenticación.
 *
 * @route GET /obtener_portada_producto/:img
 * @group Productos
 * @returns {File} - Respuesta del controlador de productos con la imagen de portada del producto o una imagen predeterminada si no existe.
 */
api.get(
  "/obtener_portada_producto/:img",
  productoController.obtener_portada_producto
);

api.get(
  "/obtener_producto_admin/:id",
  authenticate.decodeToken,
  productoController.obtener_producto_admin
);

api.put(
  "/actualizar_producto_admin/:id",
  [authenticate.decodeToken, path],
  productoController.actualizar_producto_admin
);


// PETICIONES DE VARIEDAD 

api.post(
  "/registro_variedad_producto",
  authenticate.decodeToken,
  productoController.registro_variedad_producto
);

api.get(
  "/obtener_variedades_producto/:id",
  authenticate.decodeToken,
  productoController.obtener_variedades_producto
);

api.delete(
  "/eliminar_variedad_producto/:id",
  authenticate.decodeToken,
  productoController.eliminar_variedad_producto
);


api.get(
  "/listar_activos_productos_admin",
  authenticate.decodeToken,
  productoController.listar_activos_productos_admin
);

// PETICIONES DE INGRESO

api.post(
  "/registro_ingreso_admin",
  [authenticate.decodeToken, path_ingresos],
  productoController.registro_ingreso_admin
);

// PETICIONES DE GALERIA

api.post(
  "/subir_imagen_producto_admin",
  [authenticate.decodeToken, path_galeria],
  productoController.subir_imagen_producto_admin
);


api.get(
  "/obtener_galeria_producto/:img",
  productoController.obtener_galeria_producto
);

api.get(
  "/obtener_toda_galeria_producto_admin/:id",
  authenticate.decodeToken,
  productoController.obtener_toda_galeria_producto_admin
);

api.delete(
  "/eliminar_galeria_producto_admin/:id",
  authenticate.decodeToken,
  productoController.eliminar_galeria_producto_admin
);



// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
