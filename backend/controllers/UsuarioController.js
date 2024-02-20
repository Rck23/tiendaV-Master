// Importamos el modelo de Usuario y las librerías necesarias
var Usuario = require("../models/Usuario");
var bcrypt = require("bcrypt-nodejs");
var Jwt = require("../helpers/Jwt");

/**
 * Función para registrar un usuario desde el panel de administración.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto con la información del usuario creado o un mensaje de error.
 */
const registro_usuario_admin = async function (req, res) {
  // VALIDAR EL TOKEN
  if (req.user) {
    let data = req.body;

    // Buscar usuarios existentes con el mismo correo electrónico
    let usuarios = await Usuario.find({ email: data.email });

    if (usuarios.length >= 1) {
      // Si el correo electrónico ya existe, enviar un mensaje de error
      res
        .status(200)
        .send({ data: undefined, message: "El correo electrónico ya existe" });
    } else {
      // Encriptar la contraseña y crear el usuario
      bcrypt.hash("123456", null, null, async function (err, hash) {
        if (err) {
          // Si hay un error en la encriptación, enviar un mensaje de error
          res
            .status(200)
            .send({
              data: undefined,
              message: "No se pudo encriptar la contraseña",
            });
        } else {
          // Asignar la contraseña encriptada al objeto de datos
          data.password = hash;

          // Crear el usuario con los datos proporcionados
          let usuario = await Usuario.create(data);

          // Enviar el usuario creado
          res.status(200).send({ data: usuario });
        }
      });
    }
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

/**
 * Función para iniciar sesión de un usuario.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto con el token de autenticación y la información del usuario o un mensaje de error.
 */
const login_usuario = async function (req, res) {
  let data = req.body;

  // Buscar usuarios con el correo electrónico proporcionado
  let usuarios = await Usuario.find({ email: data.email });

  if (usuarios.length >= 1) {
    // Si el correo electrónico existe y la cuenta está activa
    if (usuarios[0].estado) {
      // Comparar la contraseña proporcionada con la almacenada
      bcrypt.compare(
        data.password,
        usuarios[0].password,
        async function (err, check) {
          if (check) {
            // Si la contraseña es correcta, enviar el token de autenticación
            res
              .status(200)
              .send({
                token: Jwt.createToken(usuarios[0]),
                usuario: usuarios[0],
              });
          } else {
            // Si la contraseña es incorrecta, enviar un mensaje de error
            res
              .status(200)
              .send({ data: undefined, message: "Contraseña incorrecta" });
          }
        }
      );
    } else {
      // Si la cuenta está desactivada, enviar un mensaje de error
      res
        .status(200)
        .send({ data: undefined, message: "Su cuenta está desactivada" });
    }
  } else {
    // Si no se encuentra el correo electrónico, enviar un mensaje de error
    res
      .status(200)
      .send({
        data: undefined,
        message: "No se encontró el correo electrónico",
      });
  }
};

/**
 * Función para listar usuarios desde el panel de administración.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Array} - Un array con los usuarios que coinciden con el filtro.
 */
const listar_usuario_admin = async function (req, res) {
  if (req.user) {
    let filtro = req.params["filtro"];

    // Buscar usuarios que coincidan con el nombre, apellido, rol o correo electrónico
    let usuarios = await Usuario.find({
      $or: [
        { nombres: new RegExp(filtro, "i") },
        { apellidos: new RegExp(filtro, "i") },
        { rol: new RegExp(filtro, "i") },
        { email: new RegExp(filtro, "i") },
      ],
    });
    // Enviar la lista de usuarios
    res.status(200).send(usuarios);
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "Error token" });
  }
};

/**
 * Función para obtener la información de un usuario específico desde el panel de administración.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto con la información del usuario o un mensaje de error.
 */
const obtener_usuario_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];

    try {
      // Buscar el usuario por su ID
      let usuario = await Usuario.findById({ _id: id });

      // Enviar la información del usuario
      res.status(200).send(usuario);
    } catch (error) {
      // Si hay un error, enviar un mensaje de error
      res.status(200).send(undefined);
    }
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

/**
 * Función para actualizar la información de un usuario desde el panel de administración.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto con la información actualizada del usuario o un mensaje de error.
 */
const actualizar_usuario_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];
    let data = req.body;

    // Actualizar la información del usuario
    let usuario = await Usuario.findByIdAndUpdate(
      { _id: id },
      {
        nombres: data.nombres,
        apellidos: data.apellidos,
        email: data.email,
        rol: data.rol,
      }
    );
    // Enviar la información actualizada del usuario
    res.status(200).send(usuario);
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

/**
 * Función para cambiar el estado de un usuario desde el panel de administración.
 *
 * @param {Object} req - El objeto de solicitud HTTP.
 * @param {Object} res - El objeto de respuesta HTTP.
 * @returns {Object} - Un objeto con la información actualizada del usuario o un mensaje de error.
 */
const cambiar_estado_usuario_admin = async function (req, res) {
  if (req.user) {
    let id = req.params["id"];
    let data = req.body;

    // Determinar el nuevo estado del usuario
    let nuevo_estado = false;
    if (data.estado) {
      nuevo_estado = false;
    } else {
      nuevo_estado = true;
    }

    // Actualizar el estado del usuario
    let usuario = await Usuario.findByIdAndUpdate(
      { _id: id },
      {
        estado: nuevo_estado,
      }
    );
    // Enviar la información actualizada del usuario
    res.status(200).send(usuario);
  } else {
    // Si no hay un usuario autenticado, enviar un mensaje de error
    res.status(500).send({ data: undefined, message: "ErrorToken" });
  }
};

// Exportar las funciones para su uso en otros módulos
module.exports = {
  registro_usuario_admin,
  login_usuario,
  listar_usuario_admin,
  obtener_usuario_admin,
  actualizar_usuario_admin,
  cambiar_estado_usuario_admin,
};
