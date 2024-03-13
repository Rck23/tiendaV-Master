// Importamos el modelo de Producto y las librerías necesarias
const Producto = require("../models/Producto");
const Variedad = require("../models/Variedad");
var Ingreso = require("../models/ingreso");
var Galeria = require("../models/Galeria");
var Ingreso_detalle = require("../models/ingreso_detalle");
var Categoria = require("../models/Categoria");
var Subcategoria = require("../models/Subcategoria");
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
    }).sort({ createAt: -1 });
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
      let producto = await Producto.findById({ _id: id }).sort({
        createAt: -1,
      });

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

    let id = req.params["id"];

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
            let producto = await Producto.findByIdAndUpdate(
              { _id: id },
              {
                titulo: data.titulo,
                categoria: data.categoria,
                subcategoria: data.subcategoria,
                str_variedad: data.str_variedad,
                extracto: data.extracto,
                estado: data.estado,
                descuento: data.descuento,
                portada: data.portada,
              }
            );
            // Si se crea con éxito, enviar el producto creado
            res.status(200).send({ data: producto });
          } catch (error) {
            // Si hay un error, enviar un mensaje de error
            res
              .status(200)
              .send({
                data: undefined,
                message: "No se pudo crear el producto",
              });
          }
        } else {
          // ACTUALIZACION PRODUCTO
          data.slug = slugify(data.titulo);

          try {
            // Intentar crear el producto
            let producto = await Producto.findByIdAndUpdate(
              { _id: id },
              {
                titulo: data.titulo,
                categoria: data.categoria,
                subcategoria: data.subcategoria,
                str_variedad: data.str_variedad,
                extracto: data.extracto,
                estado: data.estado,
                descuento: data.descuento,
              }
            );
            // Si se crea con éxito, enviar el producto creado
            res.status(200).send({ data: producto });
          } catch (error) {
            // Si hay un error, enviar un mensaje de error
            res
              .status(200)
              .send({
                data: undefined,
                message: "No se pudo crear el producto",
              });
          }
        }
      } else {
        // Si el título ya existe, enviar un mensaje de error
        res
          .status(200)
          .send({
            data: undefined,
            message: "El titulo del producto ya existe",
          });
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
          let producto = await Producto.findByIdAndUpdate(
            { _id: id },
            {
              titulo: data.titulo,
              categoria: data.categoria,
              subcategoria: data.subcategoria,
              str_variedad: data.str_variedad,
              extracto: data.extracto,
              estado: data.estado,
              descuento: data.descuento,
              portada: data.portada,
            }
          );
          // Si se crea con éxito, enviar el producto creado
          res.status(200).send({ data: producto });
        } catch (error) {
          // Si hay un error, enviar un mensaje de error
          res
            .status(200)
            .send({ data: undefined, message: "No se pudo crear el producto" });
        }
      } else {
        // ACTUALIZACION PRODUCTO
        data.slug = slugify(data.titulo);

        try {
          // Intentar crear el producto
          let producto = await Producto.findByIdAndUpdate(
            { _id: id },
            {
              titulo: data.titulo,
              categoria: data.categoria,
              subcategoria: data.subcategoria,
              extracto: data.extracto,
              estado: data.estado,
              descuento: data.descuento,
              str_variedad: data.str_variedad,
            }
          );
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

const registro_variedad_producto = async (req, res) => {
  if (req.user) {
    let data = req.body;

    let variedad = await Variedad.create(data);

    res.status(200).send({ data: variedad });
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error Token" });
  }
};

const obtener_variedades_producto = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];
    let variedades = await Variedad.find({ producto: id }).sort({ stock: -1 });

    res.status(200).send(variedades);
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error Token" });
  }
};

const eliminar_variedad_producto = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];

    let reg = await Variedad.findById({ _id: id });

    if (reg.stock == 0) {
      let variedad = await Variedad.findOneAndDelete({ _id: id });
      res.status(200).send(variedad);
    } else {
      res
        .status(200)
        .send({
          data: undefined,
          message: "No se puede eliminar esta variedad",
        });
    }
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const listar_activos_productos_admin = async function (req, res) {
  if (req.user) {
    let productos = await Producto.find({ estado: true }).sort({
      createdAt: -1,
    });
    res.status(200).send(productos);
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const registro_ingreso_admin = async function (req, res) {
  // Verifica si el usuario está autenticado.
  if (req.user) {
    // Obtiene los datos del cuerpo de la solicitud.
    let data = req.body; //ingreso
    try {
      // Busca los registros de ingresos existentes y los ordena por fecha de creación en orden descendente.
      let reg_ingresos = await Ingreso.find().sort({ createdAt: -1 });

      // Asigna una serie al nuevo ingreso basada en el último ingreso existente.
      if (reg_ingresos.length == 0) {
        data.serie = 1;
      } else {
        data.serie = reg_ingresos[0].serie + 1;
      }

      // Parsea los detalles del ingreso desde el cuerpo de la solicitud.
      let detalles = JSON.parse(data.detalles); //detalles ingreso
      console.log(detalles);

      // Obtiene la ruta del archivo adjunto y extrae el nombre del documento.
      var img_path = req.files.documento.path;
      var str_img = img_path.split("\\");
      var str_documento = str_img[2];

      // Asigna el nombre del documento al objeto de datos.
      data.documento = str_documento;
      // Asigna el ID del usuario autenticado al objeto de datos.
      data.usuario = req.user.sub;
      // Crea un nuevo registro de ingreso con los datos proporcionados.
      let ingreso = await Ingreso.create(data);

      // Itera sobre los detalles del ingreso para crear registros de detalles de ingreso y actualizar las cantidades y precios de los productos y variedades.

      for (var item of detalles) {
        // Asigna el ID del ingreso recién creado al campo 'ingreso' del detalle actual
        item.ingreso = ingreso._id;

        // Crea un nuevo registro de detalle de ingreso en la base de datos con los datos del detalle actual
        await Ingreso_detalle.create(item);

        // Busca una variedad en la base de datos por su ID
        let variedad = await Variedad.findById({ _id: item.variedad });
        // Actualiza la cantidad de stock de la variedad sumando la cantidad del detalle actual
        await Variedad.findByIdAndUpdate(
          { _id: item.variedad },
          {
            stock: parseInt(variedad.stock) + parseInt(item.cantidad),
          }
        );

        // Busca un producto en la base de datos por su ID
        let producto = await Producto.findById({ _id: item.producto });
        // Actualiza la cantidad de stock del producto sumando la cantidad del detalle actual
        await Producto.findByIdAndUpdate(
          { _id: item.producto },
          {
            stock: parseInt(producto.stock) + parseInt(item.cantidad),
          }
        );

        // Verifica si el stock del producto es mayor o igual a 1
        if (producto.stock >= 1) {
          // Calcula el subtotal residual del producto multiplicando su precio por su stock
          let subtotal_residual = producto.precio * producto.stock;
          // Calcula la ganancia por unidad del producto y redondea hacia arriba
          let ganancia = Math.ceil((item.precio_unidad * data.ganancia) / 100);
          // Calcula el subtotal del ingreso sumando el precio por unidad del producto y la ganancia por unidad multiplicada por la cantidad del detalle actual
          let subtotal_ingreso =
            parseFloat(item.precio_unidad) +
            parseFloat(ganancia) * item.cantidad;

          // Calcula el total de cantidades sumando el stock del producto y la cantidad del detalle actual
          let cantidades = parseInt(producto.stock) + parseInt(item.cantidad);
          // Calcula el total de subtotales sumando el subtotal residual y el subtotal del ingreso
          let subtotales =
            parseFloat(subtotal_residual) + parseFloat(subtotal_ingreso);

          // Calcula el precio de equilibrio dividiendo el total de subtotales por el total de cantidades y redondea hacia arriba
          let precio_equilibrio = Math.ceil(subtotales / cantidades);

          // Actualiza el precio del producto en la base de datos con el precio de equilibrio calculado
          await Producto.findByIdAndUpdate(
            { _id: item.producto },
            {
              precio: precio_equilibrio,
            }
          );
        } else {
          // Si el stock del producto es menor a 1, calcula la ganancia por unidad del producto y redondea hacia arriba
          let ganancia = Math.ceil((item.precio_unidad * data.ganancia) / 100);
          // Actualiza el precio del producto en la base de datos sumando el precio por unidad del producto y la ganancia por unidad
          await Producto.findByIdAndUpdate(
            { _id: item.producto },
            {
              precio: parseFloat(item.precio_unidad) + parseFloat(ganancia),
            }
          );
        }
      }

      // Envía una respuesta con el nuevo ingreso creado.
      res.status(200).send(ingreso);
    } catch (error) {
      // En caso de error, registra el error y envía una respuesta con un mensaje de error.
      console.log(error);
      res.status(200).send({ message: "No se puedo registrar el ingreso" });
    }
  } else {
    // Si el usuario no está autenticado, envía una respuesta con un código de error y un mensaje.
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

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
    let id = req.params["id"];

    let galeria = await Galeria.find({ producto: id });

    res.status(200).send(galeria);
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

const eliminar_galeria_producto_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
    let id = req.params["id"];

    try {
      let reg = await Galeria.findById({ _id: id });
      let path_img = "./uploads/galeria/" + reg.imagen;
      fs.unlinkSync(path_img);

      let galeria = await Galeria.findByIdAndDelete({ _id: id });

      res.status(200).send(galeria);
    } catch (error) {
      res
        .status(200)
        .send({ data: undefined, message: "No se pudo eliminar la imagen" });
    }
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

const crear_categoria_admin = async function (req, res) {
  if (req.user) {
    let data = req.body;

    try {
      var reg = await Categoria.find({ titulo: data.titulo });

      if (reg.length == 0) {
        data.slug = slugify(data.titulo).toLowerCase();
        var categoria = await Categoria.create(data);
        res.status(200).send(categoria);
      } else {
        res
          .status(200)
          .send({ data: undefined, message: "La categoria ya existe." });
      }
    } catch (error) {
      res
        .status(200)
        .send({
          data: undefined,
          message: "Ocurrio un error durante la creación de la categoria.",
        });
    }
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const listar_categorias_admin = async function (req, res) {
  if (req.user) {
    var regs = await Categoria.find().sort({ titulo: 1 });
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
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const crear_subcategoria_admin = async function (req, res) {
  if (req.user) {
    let data = req.body;

    try {
      var reg = await Subcategoria.find({ titulo: data.titulo });

      if (reg.length == 0) {
        var subcategoria = await Subcategoria.create(data);
        res.status(200).send(subcategoria);
      } else {
        res
          .status(200)
          .send({ data: undefined, message: "La subcategoria ya existe." });
      }
    } catch (error) {
      res
        .status(200)
        .send({
          data: undefined,
          message: "Ocurrio un error durante la creación de la subcategoria.",
        });
    }
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const eliminar_subcategoria_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];

    var reg = await Subcategoria.findByIdAndDelete({ _id: id });
    res.status(200).send(reg);
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

const cambiar_estado_producto_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];
    let data = req.body;

    let nuevo_estado = false;

    if (data.estado) {
      nuevo_estado = false;
    } else {
      nuevo_estado = true;
    }

    let categoria = await Categoria.findByIdAndUpdate(
      { _id: id },
      {
        estado: nuevo_estado,
      }
    );

    res.status(200).send(categoria);
  } else {
    res.status(500).send({ data: undefined, message: "ErrorToken" });
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
  crear_categoria_admin,
  listar_categorias_admin,
  crear_subcategoria_admin,
  eliminar_subcategoria_admin,
  cambiar_estado_producto_admin,
};
