// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de variedad.
 * Define la estructura de los datos de un variedad en la base de datos.
 */
var VariedadEsquema = esquema({
    // El proveedor de producto
  proveedor: { type: String, required: true },
    // La variedad se escoge que tipo es (talla, colores, opciones, etc..)
  variedad: { type: String, required: true },
    // El SKU se obtiene desde el front end
  sku: { type: String, required: true },

    // Referencia hacia la tabla producto
  producto: { type: esquema.ObjectId, ref: 'producto', required: true },

  stock: { type: Number, default: 0, required: true },
    
  // Fecha de creación de variedad
  createdAt: { type: Date, default: Date.now },

});

// Exportamos el modelo de variedad basado en el esquema definido
module.exports = mongoose.model("variedad", VariedadEsquema);
