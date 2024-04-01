// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de variedad.
 * Define la estructura de los datos de un variedad en la base de datos.
 */
var Venta_detalleEsquema = esquema({  
  
  año: { type: Number, required: true },
  mes: { type: Number, required: true },
  dia: { type: Number, required: true },

  subtotal: { type: Number, required: true },
  precio_unidad: { type: Number, required: true },
  cantidad: { type: Number, required: true },

  // estado: { type: String, required: true },

    // Referencias
  cliente: { type: esquema.ObjectId, ref: 'cliente', required: true },
  venta: { type: esquema.ObjectId, ref: 'venta', required: true },
  producto: { type: esquema.ObjectId, ref: 'producto', required: true },
  variedad: { type: esquema.ObjectId, ref: 'variedad', required: true },

    
  // Fecha de creación
  createdAt: { type: Date, default: Date.now },

});

// Exportamos el modelo de variedad basado en el esquema definido
module.exports = mongoose.model("venta_detalle", Venta_detalleEsquema);
