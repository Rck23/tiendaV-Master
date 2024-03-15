// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de variedad.
 * Define la estructura de los datos de un variedad en la base de datos.
 */
var CarritoEsquema = esquema({
   
  producto: { type: esquema.ObjectId, ref:'producto',required: true },
  variedad: { type: esquema.ObjectId, ref: 'variedad',required: true },
  cliente: { type: esquema.ObjectId, ref: 'cliente',required: true },
  cantidad: { type: Number, required: true },
  
    
  // Fecha de creación de variedad
  createAt: { type: Date, default: Date.now },

});

// Exportamos el modelo de variedad basado en el esquema definido
module.exports = mongoose.model("carrito", CarritoEsquema);
