<template>
  <div
    class="d-flex align-items-center bg-auth border-top border-top-2 border-primary"
    style="height: 100%"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          <!-- Heading -->
          <h1 class="display-4 text-center mb-3">Inicio de sesión</h1>

          <!-- Subheading -->
          <p class="text-muted text-center mb-5">
            Panel administrador.
          </p>

          <!-- Form -->
          <form>
            <div v-if="msm_error" class="alert alert-danger" role="alert">
                {{ msm_error }}
            </div>
            <!-- Email address -->
            <div class="form-group">
              <!-- Label -->
              <label class="form-label"> Correo electrónico </label>

              <!-- Input -->
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="correo@correo.com"
              />
            </div>

            <!-- Password -->
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <!-- Label -->
                  <label class="form-label"> Contraseña </label>
                </div>
               </div>
             
              <!-- / .row -->

              <!-- Input group -->
              <div class="input-group input-group-merge">
                <!-- Input -->
                <input
                  class="form-control"
                  type="password"
                  v-model="password"
                  placeholder="Ingresa tu contraseña"
                />

              </div>
            </div>

            <!-- Submit -->
            <button
              class="btn btn-lg w-100 btn-primary mb-3"
              v-on:click="validar()"
              type="button"
            >
              Ingresar
            </button>

         
          </form>
        </div>
      </div>
      <!-- / .row -->
    </div>
  </div>
</template>

<script>
// Importamos el store de Vuex y axios para realizar solicitudes HTTP
import store from '@/store/index';
import axios from 'axios';  

export default {
  name: "LoginApp",
  data() {
    return {
      email: "", // <--- Correo electrónico del usuario
      password: "", // <--- Contraseña del usuario
      msm_error: "", // <--- Mensaje de error para mostrar al usuario
    };
  },
  created(){
    // Aquí se pueden realizar acciones al crear el componente, como inicializar datos
  },
  methods: {
    // Método para validar los campos de correo electrónico y contraseña
    validar() {
      if (!this.email) {
        this.msm_error = "Ingrese un correo electrónico";
      } else if (!this.password) {
        this.msm_error = "Ingrese una contraseña valida";
      } else {
        this.msm_error = "";
        this.login();
      }
    },

    // Método para realizar el inicio de sesión del usuario
    login(){
      let data = {
        email: this.email,
        password: this.password
      }
      // Realizamos una solicitud POST al endpoint de inicio de sesión
      axios.post(this.$urlAPI+'/login_usuario',data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resultado)=>{
        // Verificamos si hay un mensaje de error o un token en la respuesta
        if(resultado.data.data === undefined){
          this.msm_error = resultado.data.message;  
        }
        if(resultado.data.token){
          // Si hay un token, lo guardamos en el store de Vuex y redirigimos al dashboard
          this.$store.dispatch('saveToken', resultado.data.token);
          this.$router.push({name: 'dashboard'})
        }
      }).catch((error)=>{
        // Manejamos cualquier error que ocurra durante la solicitud
        console.log(error);
      });
    }
  },
  components: {},
};
</script>
