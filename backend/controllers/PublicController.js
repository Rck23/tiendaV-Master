var Producto = require('../models/Producto');
var Categoria = require('../models/Categoria');
var Variedad = require('../models/Variedad');
var Subcategoria = require('../models/Subcategoria');


const obtener_nuevos_productos = async function(req, res){

    var productos = await Producto.find({estado:true}).sort({createAt:-1}).limit(4); 
    res.status(200).send(productos);
}

const obtener_productos_recomendados = async function(req, res){

    var productos = await Producto.find({estado:true}).limit(8); 
    res.status(200).send(productos);
}

const obtener_productos_shop = async function(req, res){
    var data_productos = [];

    var productos = await Producto.find({estado:true}).sort({createAt:-1});
    
    for(var item in productos){
        //
        var variedades = await Variedad.find({producto: item._id}); 
        data_productos.push({
            titulo: item.titulo,
            // Slug del producto, utilizado para URL amigables
            slug: item.slug,
            // Categoría del producto
            categoria: item.categoria,
            subcategoria: item.subcategoria,
            // Precio del producto
            precio: item.precio,
            // Extracto o descripción corta del producto
            extracto: item.extracto,
            // Ruta de la imagen de portada del producto
            portada: item.portada,
            // Estado del producto (activo o inactivo)
            estado: item.estado,
            // Indica si el producto tiene descuento
            descuento: item.descuento,
            // Indica si el producto tiene variedades (color, talla, etc.)
            str_variedad: item.str_variedad,
       
            // Fecha de creación del producto
            createAt: item.createAt,

            variedades
           
        });
    }

    res.status(200).send(data_productos);
}

const listar_categorias_publico = async function(req,res){
    
  
        var regs = await Categoria.find({estado:true}).sort({titulo:1});
        var categorias = [];
  
        for(var item of regs){
          
            var subcategorias = await Subcategoria.find({categoria:item._id});
            var productos = await Producto.find({categoria:item.titulo});
  
            categorias.push({
                categoria: item,
                subcategorias,
                nproductos: productos.length
            });
        }
  
        res.status(200).send(categorias);
    
   
  }

module.exports ={
    obtener_nuevos_productos,
    obtener_productos_recomendados,
    obtener_productos_shop,
    listar_categorias_publico

}