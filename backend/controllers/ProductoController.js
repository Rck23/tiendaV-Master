// Importamos el modelo de Producto y las librerías necesarias
const Producto = require("../models/Producto");
const  Variedad = require("../models/Variedad");
var Ingreso = require('../models/ingreso');
var Galeria = require('../models/Galeria');
var Ingreso_detalle = require('../models/ingreso_detalle');
var Categoria = require('../models/Categoria');
var SubCatagoria = require('../models/Subcatagoria');
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
              subcategoria: data.subcategoria,
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
                subcategoria: data.subcategoria,
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
            subcategoria: data.subcategoria,
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
              subcategoria: data.subcategoria,
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

const listar_activos_productos_admin = async function(req,res){
  if(req.user){

      let productos = await Producto.find({estado:true}).sort({createdAt:-1});
      res.status(200).send(productos);

  }else{
      res.status(500).send({data:undefined,message: 'ErrorToken'});
  }
}

const registro_ingreso_admin = async function(req,res){
  if(req.user){

      let data = req.body; //ingreso
      try {
            
        let reg_ingresos = await Ingreso.find().sort({createdAt:-1});

        if(reg_ingresos.length == 0){
            data.serie = 1;
        }else{
            data.serie = reg_ingresos[0].serie + 1;
        }

        let detalles = JSON.parse(data.detalles); //detalles ingreso
        console.log(detalles);

        var img_path = req.files.documento.path;
        var str_img = img_path.split('\\');
        var str_documento = str_img[2];

        data.documento = str_documento;
        data.usuario = req.user.sub;
        let ingreso = await Ingreso.create(data);

        for(var item of detalles){
            item.ingreso = ingreso._id;
            await Ingreso_detalle.create(item);

            //ACTUALIZAR CANTIDADES
            let variedad = await Variedad.findById({_id: item.variedad});
            await Variedad.findByIdAndUpdate({_id: item.variedad},{
                stock: parseInt(variedad.stock) + parseInt(item.cantidad)
            });

            let producto = await Producto.findById({_id: item.producto});
            await Producto.findByIdAndUpdate({_id: item.producto},{
                stock: parseInt(producto.stock) + parseInt(item.cantidad)
            });

            //MARGEN DE GANANCIA
            if(producto.stock >= 1){
                //
                let subtotal_residual = producto.precio * producto.stock; 
                let ganancia = Math.ceil((item.precio_unidad * data.ganancia)/100);
                let subtotal_ingreso = (parseFloat(item.precio_unidad) + parseFloat(ganancia)*item.cantidad);

                let cantidades = parseInt(producto.stock) + parseInt(item.cantidad); 
                let subtotales = parseFloat(subtotal_residual) + parseFloat(subtotal_ingreso);
                
                console.log(subtotales+ ' '+ cantidades);

                let precio_equilibrio = Math.ceil(subtotales/cantidades);

                await Producto.findByIdAndUpdate({_id: item.producto},{
                    precio: precio_equilibrio
                });

            }else{

              let ganancia = Math.ceil((item.precio_unidad * data.ganancia)/100);
                await Producto.findByIdAndUpdate({_id: item.producto},{
                    precio: parseFloat(item.precio_unidad) + parseFloat(ganancia)
                });
            }
        }
        res.status(200).send(ingreso);
    } catch (error) {
        console.log(error);
        res.status(200).send({message: 'No se puedo registrar el ingreso'});
    }



  }else{
      res.status(500).send({data:undefined,message: 'ErrorToken'});
  }
}


const subir_imagen_producto_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
    let data = req.body;

      // REGISTRO PRODUCTO
      var img_path = req.files.imagen.path;
      var str_img = img_path.split("\\");
      var str_imagen = str_img[2];

      // Asignar la ruta de la imagen y el slug al objeto de datos
      data.imagen = str_imagen;
    

      try {
        // Intentar crear el producto
        let imagen = await Galeria.create(data);
        // Si se crea con éxito, enviar el producto creado
        res.status(200).send(imagen);
      } catch (error) {
        // Si hay un error, enviar un mensaje de error
        res
          .status(200)
          .send({ data: undefined, message: "No se pudo crear el producto" });
      }

  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

const obtener_galeria_producto = async function (req, res) {
  let img = req.params["img"];

  // Verificar si la imagen existe
  fs.stat("./uploads/galeria/" + img, function (err) {
    if (err) {
      // Si no existe, enviar una imagen predeterminada
      let path_img = "./uploads/default.jpg";
      res.status(200).sendFile(path.resolve(path_img));
    } else {
      // Si existe, enviar la imagen del producto
      let path_img = "./uploads/galeria/" + img;
      res.status(200).sendFile(path.resolve(path_img));
    }
  });
};

const obtener_toda_galeria_producto_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
    let id = req.params['id']; 

    let galeria = await Galeria.find({producto:id}); 

    res.status(200).send(galeria);
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};


const eliminar_galeria_producto_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
    let id = req.params['id']; 

    try {
      let reg = await Galeria.findById({_id:id});
      let path_img = "./uploads/galeria/" + reg.imagen;
      fs.unlinkSync(path_img);

      let galeria = await Galeria.findByIdAndDelete({_id:id}); 
  
      res.status(200).send(galeria);
    } catch (error) {
      
      res.status(200).send({ data: undefined, message: "No se pudo eliminar la imagen" });
    }

  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

const crear_categoria_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
 
      let data = req.body;
      var reg = await Categoria.find({titulo:data.titulo});
      
      if (reg.length == 0) {
        var categoria = await Categoria.create(data);
        data.slug = slugify(data.titulo).toLowerCase();
        res.status(200).send(categoria);
        
      } else {
        res.status(200).send({ data: undefined, message: "La categoria ya existe." });
      }
      
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};


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
  eliminar_variedad_producto,
  listar_activos_productos_admin,
  registro_ingreso_admin,

  //////////////////////////////////

  subir_imagen_producto_admin,
  obtener_galeria_producto,
  obtener_toda_galeria_producto_admin,
  eliminar_galeria_producto_admin,

  //////////////////////////////////
  crear_categoria_admin
};
