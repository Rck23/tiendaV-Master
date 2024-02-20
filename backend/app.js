// Importamos express, mongoose y body-parser
var express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

// ...

// Definimos el puerto en el que se ejecutará la aplicación
var port = process.env.port || 4201;

// Creamos una nueva aplicación de Express
var app = express();

// Importamos los enrutadores de clientes, usuarios y productos
var cliente_router = require("./routes/Cliente");
var usuario_router = require("./routes/Usuario");
var producto_router = require("./routes/Producto");

// Configuramos body-parser para parsear el cuerpo de las solicitudes HTTP
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyparser.json({ limit: "50mb", extended: true }));

// Conectamos la aplicación a la base de datos MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/tienda")
  .then(() =>
    app.listen(port, function () {
      console.log("Servidor corriendo en el puerto " + port);
    })
  )
  .catch((err) => console.error("Error al conectar a MongoDB", err));

// Configuramos los encabezados de CORS para permitir solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

// Utilizamos los enrutadores importados para manejar las rutas de la API
app.use("/api", cliente_router);
app.use("/api", usuario_router);
app.use("/api", producto_router);

// Exportamos la aplicación para su uso en otros módulos
module.exports = app;
