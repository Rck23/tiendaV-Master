// Importamos express, el controlador de usuarios y el middleware de autenticación
var express = require("express");
var usuarioController = require("../controllers/UsuarioController");
var authenticate = require("../middlewares/authenticate");

// Creamos un nuevo enrutador de Express
var api = express.Router();

/**
 * Ruta para registrar un usuario desde el panel de administración.
 * Requiere autenticación.
 *
 * @route POST /registro_usuario_admin
 * @group Admin - Usuarios
 * @returns {Object} - Respuesta del controlador de usuarios con la información del usuario creado o un mensaje de error.
 */
api.post(
  "/registro_usuario_admin",
  //authenticate.decodeToken,
  usuarioController.registro_usuario_admin
);

/**
 * Ruta para iniciar sesión de un usuario.
 * No requiere autenticación.
 *
 * @route POST /login_usuario
 * @group Usuarios
 * @returns {Object} - Respuesta del controlador de usuarios con el token de autenticación y la información del usuario o un mensaje de error.
 */
api.post("/login_usuario", usuarioController.login_usuario);

/**
 * Ruta para listar usuarios desde el panel de administración.
 * Requiere autenticación y permite filtrar los resultados.
 *
 * @route GET /listar_usuario_admin/:filtro?
 * @group Admin - Usuarios
 * @returns {Array} - Respuesta del controlador de usuarios con la lista de usuarios que coinciden con el filtro.
 */
api.get(
  "/listar_usuario_admin/:filtro?",
  authenticate.decodeToken,
  usuarioController.listar_usuario_admin
);

/**
 * Ruta para obtener la información de un usuario específico desde el panel de administración.
 * Requiere autenticación.
 *
 * @route GET /obtener_usuario_admin/:id
 * @group Admin - Usuarios
 * @returns {Object} - Respuesta del controlador de usuarios con la información del usuario o un mensaje de error.
 */
api.get(
  "/obtener_usuario_admin/:id",
  authenticate.decodeToken,
  usuarioController.obtener_usuario_admin
);

/**
 * Ruta para actualizar la información de un usuario desde el panel de administración.
 * Requiere autenticación.
 *
 * @route PUT /actualizar_usuario_admin/:id
 * @group Admin - Usuarios
 * @returns {Object} - Respuesta del controlador de usuarios con la información actualizada del usuario o un mensaje de error.
 */
api.put(
  "/actualizar_usuario_admin/:id",
  authenticate.decodeToken,
  usuarioController.actualizar_usuario_admin
);

/**
 * Ruta para cambiar el estado de un usuario desde el panel de administración.
 * Requiere autenticación.
 *
 * @route PUT /cambiar_estado_usuario_admin/:id
 * @group Admin - Usuarios
 * @returns {Object} - Respuesta del controlador de usuarios con la información actualizada del usuario o un mensaje de error.
 */
api.put(
  "/cambiar_estado_usuario_admin/:id",
  authenticate.decodeToken,
  usuarioController.cambiar_estado_usuario_admin
);

// Exportamos el enrutador para su uso en la aplicación
module.exports = api;
