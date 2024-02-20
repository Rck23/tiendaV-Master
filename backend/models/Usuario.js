// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de Usuario.
 * Define la estructura de los datos de un usuario en la base de datos.
 */
var UsuarioEsquema = esquema({
  // Nombres del usuario
  nombres: { type: String, required: true },
  // Apellidos del usuario
  apellidos: { type: String, required: true },
  // Correo electrónico del usuario, debe ser único
  email: { type: String, required: true, unique: true },
  // Rol del usuario (puede ser administrador, editor, etc.)
  rol: { type: String, required: true },
  // Contraseña del usuario (debe ser encriptada antes de guardarla)
  password: { type: String, required: true },
  // Estado del usuario (activo o inactivo)
  estado: { type: Boolean, default: true, required: true },
  // Fecha de creación del usuario
  createAt: { type: Date, default: Date.now },
});

// Exportamos el modelo de Usuario basado en el esquema definido
module.exports = mongoose.model("usuario", UsuarioEsquema);
