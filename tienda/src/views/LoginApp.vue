<template>
    <div>
        <section class="hero" style="margin-top: 12rem;">
            <div class="container">
       
              <!-- Hero Content-->
              <div class="hero-content pb-5 text-center">
                <h1 class="hero-heading mb-0">Zona cliente</h1>
              </div>
            </div>
          </section>
          <!-- customer login-->
          <section>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <div class="block">
                    <div class="block-header">
                      <h6 class="text-uppercase mb-0">Iniciar sesión</h6>
                    </div>
                    <div class="block-body">
                    
                      <p class="text-muted">Inicia sesión para realizar tus compras.</p>
                      <hr>
                      <form action="customer-orders.html" method="get">
                        <div class="mb-4">
                          <label class="form-label" for="email1">Correo electrónico</label>
                          <input class="form-control" id="email1" type="text" placeholder="Correo electrónico">
                        </div>
                        <div class="mb-4">
                          <label class="form-label" for="password1">Contraseña</label>
                          <input class="form-control" id="password1" type="password" placeholder="Contraseña">
                        </div>
                        <div class="mb-4 text-center">
                          <button class="btn btn-outline-dark" type="button"><i class="fa fa-sign-in-alt me-2"></i>Ingresar</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="block">
                    <div class="block-header">
                      <h6 class="text-uppercase mb-0">Nueva cuenta</h6>
                    </div>
                    <div class="block-body"> 
                    
                      <p class="text-muted">Inicia por crear una cuenta y compra ya nuestros productos</p>
                  
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
                          <button class="btn btn-outline-dark" type="button" v-on:click="validar_registro()"><i class="far fa-user me-2"></i>Registrar</button>
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
        msm_error: ''
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
            console.log(resultado);
            
          }).catch((error) => {
            console.log(error);
          });;
        }


      }
    },
}
</script>