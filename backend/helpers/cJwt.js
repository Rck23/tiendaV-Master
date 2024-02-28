// Importamos las librerías necesarias
var jwt = require("jwt-simple");
var moment = require("moment");

// Clave secreta para la codificación del token
var key = "u23lsaldkwoekasuqwuieaWEQ2132381879371aldkaWEQ2132381923lsalduqwuieas";

/**
 * Función para crear un token JWT para un cliente.
 *
 * @param {Object} cliente - El objeto de cliente para el cual se creará el token.
 * @returns {String} - Un token JWT codificado que contiene la información del cliente y la fecha de expiración.
 */
exports.createToken = function (cliente) {
  // Crear el payload del token con la información del cliente y la fecha de creación y expiración
  var payload = {
    sub: cliente._id,
    nombres: cliente.nombres,
    apellidos: cliente.apellidos,
    email: cliente.email,
    genero: cliente.genero,

    iat: moment().unix(), // Fecha de creación del token (timestamp UNIX)
    exp: moment().add(1, "day").unix(), // Fecha de expiración del token (timestamp UNIX)
  };

  // Codificar el payload con la clave secreta y devolver el token
  return jwt.encode(payload, key);
};
