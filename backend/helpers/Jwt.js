// Importamos las librerías necesarias
var jwt = require("jwt-simple");
var moment = require("moment");

// Clave secreta para la codificación del token
var key = "uasuqwuie1879371aldkaWEQ2132381923lsaldkwoekqws";

/**
 * Función para crear un token JWT para un usuario.
 *
 * @param {Object} usuario - El objeto de usuario para el cual se creará el token.
 * @returns {String} - Un token JWT codificado que contiene la información del usuario y la fecha de expiración.
 */
exports.createToken = function (usuario) {
  // Crear el payload del token con la información del usuario y la fecha de creación y expiración
  var payload = {
    sub: usuario._id,
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    email: usuario.email,
    rol: usuario.rol,

    iat: moment().unix(), // Fecha de creación del token (timestamp UNIX)
    exp: moment().add(1, "day").unix(), // Fecha de expiración del token (timestamp UNIX)
  };

  // Codificar el payload con la clave secreta y devolver el token
  return jwt.encode(payload, key);
};
