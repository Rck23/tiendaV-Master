// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de variedad.
 * Define la estructura de los datos de un variedad en la base de datos.
 */
var VentaEsquema = esquema({
  
  transaccion: { type: String, required: true },
  
  año: { type: Number, required: true },
  mes: { type: Number, required: true },
  dia: { type: Number, required: true },

  serie: { type: Number, required: true },
  envio: { type: Number, required: true },
  total: { type: Number, required: true },

  estado: { type: String, required: true },

    // Referencias
  cliente: { type: esquema.ObjectId, ref: 'cliente', required: true },
  direccion: { type: esquema.ObjectId, ref: 'direccion', required: true },

    
  // Fecha de creación
  createAt: { type: Date, default: Date.now },

});

// Exportamos el modelo de variedad basado en el esquema definido
module.exports = mongoose.model("venta", VentaEsquema);
