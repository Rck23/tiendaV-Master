// Importamos el modelo de Producto y las librerías necesarias
const Producto = require("../models/Producto");
const  Variedad = require("../models/Variedad");
var slugify = require("slugify");
var fs = require("fs");
var path = require("path");

/**
 * Función para registrar un producto desde el panel de administración.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto con la información del producto creado o un mensaje de error.
 */
const registro_producto_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
    let data = req.body;

    // Buscar productos existentes con el mismo título
    let productos = await Producto.find({ titulo: data.titulo });

    if (productos.length >= 1) {
      // Si el título ya existe, enviar un mensaje de error
      res
        .status(200)
        .send({ data: undefined, message: "El titulo del producto ya existe" });
    } else {
      // REGISTRO PRODUCTO
      var img_path = req.files.portada.path;
      var str_img = img_path.split("\\");
      var str_portada = str_img[2];

      // Asignar la ruta de la imagen y el slug al objeto de datos
      data.portada = str_portada;
      data.slug = slugify(data.titulo);

      try {
        // Intentar crear el producto
        let producto = await Producto.create(data);
        // Si se crea con éxito, enviar el producto creado
        res.status(200).send({ data: producto });
      } catch (error) {
        // Si hay un error, enviar un mensaje de error
        res
          .status(200)
          .send({ data: undefined, message: "No se pudo crear el producto" });
      }
    }
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

/**
 * Función para listar productos desde el panel de administración.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Array} - Un array con los productos que coinciden con el filtro.
 */
const listar_producto_admin = async function (req, res) {
  if (req.user) {
    let filtro = req.params["filtro"];

    // Buscar productos que coincidan con el título o categorías
    let productos = await Producto.find({
      $or: [
        { titulo: new RegExp(filtro, "i") },
        { categorias: new RegExp(filtro, "i") },
      ],
    }).sort({createAt:-1});
    // Enviar la lista de productos
    res.status(200).send(productos);
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

/**
 * Función para obtener la imagen de portada de un producto.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {File} - La imagen de portada del producto o una imagen predeterminada si no existe.
 */
const obtener_portada_producto = async function (req, res) {
  let img = req.params["img"];

  // Verificar si la imagen existe
  fs.stat("./uploads/productos/" + img, function (err) {
    if (err) {
      // Si no existe, enviar una imagen predeterminada
      let path_img = "./uploads/default.jpg";
      res.status(200).sendFile(path.resolve(path_img));
    } else {
      // Si existe, enviar la imagen del producto
      let path_img = "./uploads/productos/" + img;
      res.status(200).sendFile(path.resolve(path_img));
    }
  });
};

const obtener_producto_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];

    try {
      // Buscar el producto por su ID
      let producto = await Producto.findById({ _id: id });

      // Enviar la información del producto
      res.status(200).send(producto);
    } catch (error) {
      // Si hay un error, enviar un mensaje de error
      res.status(200).send(undefined);
    }
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error Token" });
  }
};


const actualizar_producto_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
    let data = req.body;

    let id = req.params['id']; 
    

    // Buscar productos existentes con el mismo título
    let productos = await Producto.find({ titulo: data.titulo });

    if (productos.length >= 1) {
      if (productos[0]._id == id) {
        if (req.files && req.files.portada) {
          // ACTUALIZACION PRODUCTO
          var img_path = req.files.portada.path;
          var str_img = img_path.split("\\");
          var str_portada = str_img[2];
  
          // Asignar la ruta de la imagen y el slug al objeto de datos
          data.portada = str_portada;
          data.slug = slugify(data.titulo);
  
          try {
            // Intentar crear el producto
            let producto = await Producto.findByIdAndUpdate({_id: id},{
              titulo: data.titulo,
              categoria: data.categoria,
              str_variedad: data.str_variedad,
              extracto: data.extracto,
              estado: data.estado,
              descuento: data.descuento,
              portada: data.portada,
            });
            // Si se crea con éxito, enviar el producto creado
            res.status(200).send({ data: producto });
          } catch (error) {
            // Si hay un error, enviar un mensaje de error
            res
              .status(200)
              .send({ data: undefined, message: "No se pudo crear el producto" });
          }
        }else{
  
            // ACTUALIZACION PRODUCTO
            data.slug = slugify(data.titulo);
    
            try {
              // Intentar crear el producto
              let producto = await Producto.findByIdAndUpdate({_id: id},{
                titulo: data.titulo,
                categoria: data.categoria,
                str_variedad: data.str_variedad,
                extracto: data.extracto,
                estado: data.estado,
                descuento: data.descuento,
      
              });
              // Si se crea con éxito, enviar el producto creado
              res.status(200).send({ data: producto });
            } catch (error) {
              // Si hay un error, enviar un mensaje de error
              res
                .status(200)
                .send({ data: undefined, message: "No se pudo crear el producto" });
            }
  
        }
      } else {
        // Si el título ya existe, enviar un mensaje de error
        res
          .status(200)
          .send({ data: undefined, message: "El titulo del producto ya existe" });
        
      }
    } else {
      if (req.files && req.files.portada) {
        // ACTUALIZACION PRODUCTO
        var img_path = req.files.portada.path;
        var str_img = img_path.split("\\");
        var str_portada = str_img[2];

        // Asignar la ruta de la imagen y el slug al objeto de datos
        data.portada = str_portada;
        data.slug = slugify(data.titulo);

        try {
          // Intentar crear el producto
          let producto = await Producto.findByIdAndUpdate({_id: id},{
            titulo: data.titulo,
            categoria: data.categoria,
            str_variedad: data.str_variedad,
            extracto: data.extracto,
            estado: data.estado,
            descuento: data.descuento,
            portada: data.portada,
          });
          // Si se crea con éxito, enviar el producto creado
          res.status(200).send({ data: producto });
        } catch (error) {
          // Si hay un error, enviar un mensaje de error
          res
            .status(200)
            .send({ data: undefined, message: "No se pudo crear el producto" });
        }
      }else{

          // ACTUALIZACION PRODUCTO
          data.slug = slugify(data.titulo);
  
          try {
            // Intentar crear el producto
            let producto = await Producto.findByIdAndUpdate({_id: id},{
              titulo: data.titulo,
              categoria: data.categoria,
              //precio: data.precio,
              extracto: data.extracto,
              estado: data.estado,
              descuento: data.descuento,
              str_variedad: data.str_variedad,

    
            });
            // Si se crea con éxito, enviar el producto creado
            res.status(200).send({ data: producto });
          } catch (error) {
            // Si hay un error, enviar un mensaje de error
            res
              .status(200)
              .send({ data: undefined, message: "No se pudo crear el producto" });
          }

      }
    }
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};


const registro_variedad_producto = async  (req, res) =>{
  if (req.user) {
    let data = req.body; 

    let variedad = await Variedad.create(data); 


    res.status(200).send({ data: variedad});
 
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error Token" });
  }
};

const obtener_variedades_producto = async function  (req, res){
  if (req.user) {
    
    let id = req.params['id']; 
    let variedades = await Variedad.find({producto:id}).sort({stock:-1})


    res.status(200).send(variedades);
 
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error Token" });
  }
};

const eliminar_variedad_producto = async function(req,res){
  if(req.user){

     let id = req.params['id'];

     let reg = await Variedad.findById({_id:id});

     if(reg.stock == 0){
          let variedad = await Variedad.findOneAndDelete({_id:id});
          res.status(200).send(variedad);
     }else{
          res.status(200).send({data:undefined,message: 'No se puede eliminar esta variedad'});
     }

     

  }else{
      res.status(500).send({data:undefined,message: 'ErrorToken'});
  }
}

// Exportar las funciones para su uso en otros módulos
module.exports = {
  registro_producto_admin,
  listar_producto_admin,
  obtener_portada_producto,
  obtener_producto_admin,
  actualizar_producto_admin,

//////////////////////////////////

  registro_variedad_producto,
  obtener_variedades_producto,
  eliminar_variedad_producto
};
