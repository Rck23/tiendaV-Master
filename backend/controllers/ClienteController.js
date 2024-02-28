var Cliente = require('../models/Cliente');
var bcrypt = require("bcrypt-nodejs");
var Jwt = require("../helpers/cJwt");
const registro_cliente_ecommerce = async function(req, res){

       
        let data = req.body; 

        let reg = await Cliente.find({email: data.email});

        if (reg.length >= 1) {
            
            res.status(200).send({message: 'El correo eletrónico ya existe'});
        } else {
            
            bcrypt.hash(data.password, null, null, async function(error, hash){
                if (error) {
                    
                    res.status(200).send({message: 'Ocurrio un error en la encriptación'});
                } else {
                    data.password = hash; 
                                let cliente = await Cliente.create(data); 
                        
                                res.status(200).send(cliente);
                    
                }
            });
            
        }  
};

const login_cliente = async function (req, res) {
    let data = req.body;
  
    // Buscar clientes con el correo electrónico proporcionado
    let clientes = await Cliente.find({ email: data.email });
  
    if (clientes.length >= 1) {
      // Si el correo electrónico existe y la cuenta está activa
      if (clientes[0].estado) {
        // Comparar la contraseña proporcionada con la almacenada
        bcrypt.compare(
          data.password,
          clientes[0].password,
          async function (err, check) {
            if (check) {
              // Si la contraseña es correcta, enviar el token de autenticación
              res
                .status(200)
                .send({
                  token: Jwt.createToken(clientes[0]),
                  cliente: clientes[0],
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

module.exports ={
    registro_cliente_ecommerce,
    login_cliente

}