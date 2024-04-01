// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de ingreso.
 * Define la estructura de los datos de un ingreso en la base de datos.
 */
var Ingreso_detalleEsquema = esquema({

  
     cantidad: { type: Number, required: true }, 
     precio_unidad: { type: Number, required: true }, 

     ingreso: { type: esquema.ObjectId, ref: 'ingreso', required: true },
     producto: { type: esquema.ObjectId, ref: 'producto', required: true },
  // Fecha de creación del ingreso
  createdAt: { type: Date, default: Date.now },
});

// Exportamos el modelo de ingreso basado en el esquema definido
module.exports = mongoose.model("ingreso_detalle", Ingreso_detalleEsquema);
