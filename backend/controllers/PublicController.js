var Producto = require("../models/Producto");
var Categoria = require("../models/Categoria");
var Variedad = require("../models/Variedad");
var Subcategoria = require("../models/Subcategoria");
var Galeria = require("../models/Galeria");

const obtener_nuevos_productos = async function (req, res) {
  var productos = await Producto.find({ estado: true })
    .sort({ createdAt: -1 })
    .limit(4);
  res.status(200).send(productos);
};

const obtener_productos_recomendados = async function (req, res) {
  var productos = await Producto.find({ estado: true }).limit(8);
  res.status(200).send(productos);
};

const obtener_productos_shop = async function (req, res) {
  var data_productos = [];
  var productos = await Producto.find({ estado: true }).sort({ createdAt: -1 });
  for(var item of productos){
    var variedades = await Variedad.find({producto: item._id}); 
    data_productos.push({
      titulo: item.titulo,
      slug: item.slug,
      categoria:  item.categoria, 
      subcategoria: item.subcategoria,
      precio: item.precio,
      extracto: item.extracto,
      portada: item.portada,
      str_variedad: item.str_variedad, 
      estado: item.estado,
      descuento: item.descuento,
      createdAt: item.createdAt,
      variedades

    });
    item.subcategorias = []; 

  }
  res.status(200).send(data_productos);


};

const listar_categorias_publico = async function (req, res) {
  var regs = await Categoria.find({ estado: true }).sort({ titulo: 1 });
  var categorias = [];

  for (var item of regs) {
    var subcategorias = await Subcategoria.find({ categoria: item._id });
    var productos = await Producto.find({ categoria: item.titulo });

    categorias.push({
      categoria: item,
      subcategorias,
      nproductos: productos.length,
    });
  }

  res.status(200).send(categorias);
};

const obtener_producto_slug = async function(req,res){
  var slug = req.params['slug'];
  var producto = await Producto.findOne({slug:slug});
  var variedades = await Variedad.find({producto:producto._id}); 
  var galeria = await Galeria.find({producto:producto._id}); 

  res.status(200).send({producto,variedades,galeria});
}

const obtener_producto_categoria = async function(req,res){
  var categoria = req.params['categoria'];
  var productos = await Producto.find({categoria:categoria}).limit(6);
  res.status(200).send({productos});
}

module.exports = {
  obtener_nuevos_productos,
  obtener_productos_recomendados,
  obtener_productos_shop,
  
  listar_categorias_publico,

  obtener_producto_slug,
  obtener_producto_categoria
};
