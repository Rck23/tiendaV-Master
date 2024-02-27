// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de variedad.
 * Define la estructura de los datos de un variedad en la base de datos.
 */
var GaleriaEsquema = esquema({
    // Las imagenes de producto
  imagen: { type: String, required: true },


    // Referencia hacia la tabla producto
  producto: { type: esquema.ObjectId, ref: 'producto', required: true },


    
  // Fecha de creación de variedad
  createAt: { type: Date, default: Date.now },

});

// Exportamos el modelo de variedad basado en el esquema definido
module.exports = mongoose.model("galeria", GaleriaEsquema);
