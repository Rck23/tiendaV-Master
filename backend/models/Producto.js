// Importamos mongoose para definir el esquema
const mongoose = require("mongoose");

// Definimos el esquema utilizando mongoose
var esquema = mongoose.Schema;

/**
 * Esquema de Mongoose para el modelo de Producto.
 * Define la estructura de los datos de un producto en la base de datos.
 */
var ProductoEsquema = esquema({
  // Título del producto
  titulo: { type: String, required: true },
  // Slug del producto, utilizado para URL amigables
  slug: { type: String, required: true },
  // Categoría del producto
  categoria: { type: String, required: true },
  // Precio del producto
  precio: { type: Number, required: true },
  // Extracto o descripción corta del producto
  extracto: { type: String, required: true },
  // Ruta de la imagen de portada del producto
  portada: { type: String, required: true },
  // Estado del producto (activo o inactivo)
  estado: { type: Boolean, required: true },
  // Indica si el producto tiene descuento
  descuento: { type: Boolean, required: true },
  // Fecha de creación del producto
  createAt: { type: Date, default: Date.now },
  // Fecha de actualización del producto (opcional)
  updateAt: { type: Date, required: false },
});

// Exportamos el modelo de Producto basado en el esquema definido
module.exports = mongoose.model("producto", ProductoEsquema);
