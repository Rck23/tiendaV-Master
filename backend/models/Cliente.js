// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de cleinte.
 * Define la estructura de los datos de un cleinte en la base de datos.
 */
var ClienteEsquema = esquema({
  // Nombres del cleinte
  nombres: { type: String, required: true },
  // Apellidos del cleinte
  apellidos: { type: String, required: false },
  // Correo electrónico del cleinte, debe ser único
  email: { type: String, required: true, unique: true },

  // Contraseña del cleinte (debe ser encriptada antes de guardarla)
  password: { type: String, required: true },
  // Estado del cleinte (activo o inactivo)
  estado: { type: Boolean, default: true },
  // Fecha de creación del cleinte
  createAt: { type: Date, default: Date.now },

  pais: { type: String, required: false },
  recovery: { type: String, required: false },  
  genero: { type: String, required: false },

});

// Exportamos el modelo de cleinte basado en el esquema definido
module.exports = mongoose.model("cliente", ClienteEsquema);
