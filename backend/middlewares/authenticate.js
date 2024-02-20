// Importamos las librerías necesarias
var jwt = require("jwt-simple");
var moment = require("moment");

// Clave secreta para la decodificación del token
var key = "uasuqwuie1879371aldkaWEQ2132381923lsaldkwoekqws";

/**
 * Middleware para decodificar un token JWT y adjuntarlo al objeto de solicitud.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @param {Function} next - La función de callback para continuar con el siguiente middleware.
 * @returns {void} - No devuelve nada, pero adjunta el payload del token al objeto de solicitud.
 */
exports.decodeToken = function (req, res, next) {
  // Verificar si el encabezado de autorización está presente
  if (!req.headers.authorization) {
    // Si no está presente, enviar un mensaje de error y detener la ejecución
    return res.status(403).send({ message: "No headers Error" });
  }

  // Extraer el token del encabezado de autorización
  var token = req.headers.authorization;

  // Dividir el token en segmentos
  var segmento = token.split(".");

  // Verificar si el token tiene la estructura correcta
  if (segmento.length != 3) {
    // Si no es válido, enviar un mensaje de error y detener la ejecución
    return res.status(403).send({ message: "Token invalido" });
  } else {
    try {
      // Decodificar el token con la clave secreta
      var payload = jwt.decode(token, key);
      // Imprimir el payload en la consola (esto es solo para depuración)
      console.log(payload);
    } catch (error) {
      // Si hay un error en la decodificación, enviar un mensaje de error y detener la ejecución
      return res.status(403).send({ message: "Error Token" });
    }
  }

  // Adjuntar el payload del token al objeto de solicitud
  req.user = payload;
  // Llamar a la función de callback para continuar con el siguiente middleware
  next();
};
