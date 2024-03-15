<template>
    <div>
          <!-- customer login-->

            <section style="margin-top: 12rem;">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-5">
                    <div class="block">
                      <div class="block-header">
                        <h6 class="text-uppercase mb-0">INICIAR SESIÓN</h6>
                      </div>
                      <div class="block-body">
                      
                        <p class="text-muted">Inicia sesión para realizar tus compras.</p>
                        <hr>
                        <form action="customer-orders.html" method="get">
                          <div class="mb-4">
                            <label class="form-label" for="email1">Correo electrónico</label>
                            <input class="form-control" id="email1" type="text" placeholder="Correo electrónico" v-model="email">
                          </div>
                          <div class="mb-4">
                            <label class="form-label" for="password1">Contraseña</label>
                            <input  class="form-control " id="password1" type="password" placeholder="Contraseña" v-model="password">
                          </div>

                          <div class="mb-4" v-if="msm_error_login">
                            <small class="text-danger">{{msm_error_login}}</small>
                          </div>

                          <div class="mb-4 text-center">
                            <button class="btn btn-outline-primary rounded-pill" type="button" v-on:click="login()">INICIAR SESIÓN</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5">
                    <div class="block">
                      <div class="block-header">
                        <h6 class="text-uppercase mb-0">CREAR UNA NUEVA CUENTA</h6>
                      </div>
                      <div class="block-body"> 
                      
                        <p class="text-muted">Crea una cuenta y compra ya nuestros productos</p>
                    
                        <form action="customer-orders.html" method="get">
                          <div class="mb-4">
                            <label class="form-label" for="name">Nombre completo</label>
                            <input class="form-control" id="name" type="text" placeholder="Nombre(s)"  v-model="cliente.nombres">
                          </div>
                          <div class="mb-4">
                            <label class="form-label" for="email">Correo electrónico</label>
                            <input class="form-control" id="email" type="text" placeholder="Correo electrónico" v-model="cliente.email">
                          </div>
                          <div class="mb-4">
                            <label class="form-label" for="password">Contraseña</label>
                            <input class="form-control" id="password" type="password" placeholder="Contraseña" v-model="cliente.password">
                          </div>

                          <div class="mb-4" v-if="msm_error">
                            <small class="text-danger">{{msm_error}}</small>
                          </div>
                      

                          <div class="mb-4 text-center">
                            <button class="btn btn-outline-primary rounded" type="button" v-on:click="validar_registro()">REGISTRARME</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



         

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginApp',

    data() {
      return {
        cliente: {},
        msm_error: '',
        
        email:'',
        password: '',
        msm_error_login: '',
      }
    },

    beforeMount() {
      if (this.$store.state.token) {
        this.$route.push({name: 'home'});
      }
    },

     computed: {
      // Computed property para verificar si el usuario ha iniciado sesión
      Logeado() {
        // Reemplaza esta lógica con la forma en que verificas el estado de la sesión del usuario
        return this.$store.state.token !== null;
      }
 },
 
    methods: {
      validar_registro(){

        if (!this.cliente.nombres) {
          this.msm_error = 'Ingrese un nombre'
        }else  if (!this.cliente.email) {
          this.msm_error = 'Ingrese un correo electrónico valido'
        }else  if (!this.cliente.password) {
          this.msm_error = 'Ingrese una contraseña'
        }else{
          // SI TODO ESTA CORRECTO
          this.msm_error = ''; 

          axios.post(this.$urlAPI+'/registro_cliente_ecommerce', this.cliente,{
            headers:{
              'Content-Type': 'application/json'
            }
          }).then((resultado) => {

            if (resultado.data.message) {
              this.msm_error = resultado.data.message; 
            } else {
              this.msm_error = ''; 
              console.log(resultado);
            }
            
          }).catch((error) => {
            console.log(error);
          });;
        }

      },

      login(){
        if (!this.email) {
        this.msm_error_login = "Ingrese un correo electrónico";
      } else if (!this.password) {
        this.msm_error_login = "Ingrese una contraseña valida";
      } else {
        this.msm_error_login = "";

        let data = {
        email: this.email,
        password: this.password
      }
      // Realizamos una solicitud POST al endpoint de inicio de sesión
      axios.post(this.$urlAPI+'/login_cliente',data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resultado)=>{
        // Verificamos si hay un mensaje de error o un token en la respuesta
        console.log(resultado);
        if(resultado.data.message){
          this.msm_error_login = resultado.data.message;  
        }else{
            // Si hay un token, lo guardamos en el store de Vuex y redirigimos ala pagina inicial
        this.$store.dispatch('saveToken', resultado.data.token);
        this.$store.dispatch('saveUsuario', JSON.stringify(resultado.data.cliente));
        this.$router.push({name: 'home'}) 

        // Refrescar el proyecto
        location.reload();

        }

       
      }).catch((error)=>{
        // Manejamos cualquier error que ocurra durante la solicitud
        console.log(error);
      });
        
      }
      },



    },
}
</script>