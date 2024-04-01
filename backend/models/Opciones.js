// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de variedad.
 * Define la estructura de los datos de un variedad en la base de datos.
 */
var FormatoCartaEsquema = esquema({
   
  titulo: { type: String, required: true },
  precio: { type: String, required: true }, 
  producto: { type: esquema.ObjectId, ref:'producto',required: true },

  // Fecha de creación de variedad
  createdAt: { type: Date, default: Date.now },

});

// Exportamos el modelo de variedad basado en el esquema definido
module.exports = mongoose.model("opciones", FormatoCartaEsquema);
