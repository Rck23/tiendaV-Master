// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de variedad.
 * Define la estructura de los datos de un variedad en la base de datos.
 */
var DireccionEsquema = esquema({
   
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  documento: { type: String, required: true },
  telefono: { type: String, required: true },
  pais: { type: String, required: true },
  ciudad: { type: String, required: true },
  cp: { type: String, required: true },
  direccion: { type: String, required: true },
  cliente: { type: esquema.ObjectId, ref: 'cliente', required: true },

  // Fecha de creación de variedad
  createdAt: { type: Date, default: Date.now },

});

// Exportamos el modelo de variedad basado en el esquema definido
module.exports = mongoose.model("direccion", DireccionEsquema);
