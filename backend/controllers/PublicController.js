var Producto = require('../models/Producto');
var Categoria = require('../models/Categoria');
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

    var productos = await Producto.find({estado:true}).sort({createAt:-1}); 
    res.status(200).send(productos);
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