// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de ingreso.
 * Define la estructura de los datos de un ingreso en la base de datos.
 */
var IngresoEsquema = esquema({
     // El proveedor de producto
     proveedor: { type: String, required: true },// Formulario
     ncomprobante: { type: String, required: true },// Formulario
     documento: { type: String, required: true }, // Formulario
     monto_total: { type: String, required: true }, // <-- monto de la factura // Formulario


     monto_resultante: { type: String, required: true }, // <-- monto de la suma de los detalles // No Formulario
     serie: { type: Number, required: true },// No Formulario
     usuario: { type: esquema.ObjectId, ref: 'usuario', required: true },// No Formulario
  // Fecha de creación del ingreso
  createdAt: { type: Date, default: Date.now },
});

// Exportamos el modelo de ingreso basado en el esquema definido
module.exports = mongoose.model("ingreso", IngresoEsquema);
