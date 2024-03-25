<template>
    <div>
        <section class="hero" style="margin-top: 7rem;">
      <div class="container">
        
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading">Direcciones</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 col-xl-9">
         
              <div class="block">
                <!-- Invoice Address-->
                <div class="block-header" style="background: #f19000; border-radius: 10px">
                  <h6 class="text-uppercase text-white mb-0">Nueva dirección</h6>
                </div>
                <div class="block-body">
                  <div class="row">
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="fullname_invoice"><b>Nombre</b></label>
                      <input class="form-control" type="text" style="border-radius: 10px"  placeholder="Nombre(s)..." v-model="direccion.nombres">
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="fullname_invoice"><b>Apellidos</b></label>
                      <input class="form-control" type="text" style="border-radius: 10px"  placeholder="Apellidos..." v-model="direccion.apellidos">
                    </div>
                    <!-- <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="emailaddress_invoice">Correo electrónico</label>
                      <input class="form-control" type="text" name="emailaddress_invoice" placeholder="correo@gmail.com" id="emailaddress_invoice">
                    </div> -->
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="street_invoice"><b>Documento</b></label>
                      <input class="form-control" type="text" style="border-radius: 10px"  placeholder="123456789" v-model="direccion.documento">
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="city_invoice"><b>Telefono</b></label>
                      <input class="form-control" type="text" style="border-radius: 10px" placeholder="551234567" v-model="direccion.telefono">
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="zip_invoice"><b>País</b></label>
                      <select class="form-control" style="border-radius: 10px" v-model="direccion.pais" >
                        <option value="" disabled selected>Seleccionar</option>
                        <option :value="item" v-for="item in $paises">{{ item }}</option>
                      </select>
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="state_invoice"><b>Estado/Ciudad</b></label>
                      <input class="form-control" type="text" style="border-radius: 10px" placeholder="Aguascalientes/Aguascalientes" v-model="direccion.ciudad" >
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="phonenumber_invoice"><b>Codigo Postal</b></label>
                      <input class="form-control" type="text" style="border-radius: 10px" placeholder="10000" v-model="direccion.cp">
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label class="form-label" for="phonenumber_invoice"><b>Dirección</b></label>
                      <input class="form-control" style="border-radius: 10px" type="text"  placeholder="Av. simba #213" v-model="direccion.direccion" >
                    </div>
                   
                  </div>
                  <!-- /Invoice Address-->
                </div>
                
              </div>
              <div class=" text-center" v-if="msm_error">
                <span class="text-danger">{{ msm_error }}</span>
              </div>
              <div class="mb-4 mt-3 text-center mb-5">
                <button class="btn text-white" style="background: #1f49b6; border-radius: 10px" type="button" v-on:click="crear_direccion()">
                    <img src="/assets/media/dir.png" alt="dirección" style="width: 20px;">
                    Crear dirección
                </button>
              </div>
              

        <table  class=" table " v-if="direcciones.length >= 1">
  <thead class="table text-white"   style="background: #f19000; ">
    <tr >
      <th scope="col">Cliente</th>
      <th scope="col">Pais</th>
      <th scope="col">Dirección</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="item in direcciones">
      <th scope="row">
        <small>{{ item.nombres }} {{ item.apellidos }}</small> <br>
        <small>Tel: {{ item.telefono }}</small>
      </th>
      <th>
        <small>{{ item.pais }} {{ item.ciudad }}</small> <br>
        <small>C.P. {{ item.cp }}</small>
      </th>
      <th>{{ item.direccion }}</th>
      <th>
        <button class="btn btn-danger btn-sm " style="border-radius: 10px" v-on:click="eliminar_direccion(item._id)">
            <img src="/assets/media/basura.png" alt="dirección" style="width: 16px; margin-bottom: 1px;"> Eliminar</button>
      </th>
    </tr>
 
  </tbody >

        </table>


    <div class="card" v-if="direcciones.length == 0">
        <div class="card-body">
            <div class="row">
                <div class="col-12 text-center">
              <img src="/assets/media/reloj.gif"  style="width: 80px;">
              <h3>Aún no tienes direcciones</h3>
              <span class="text-muted">Ingresa tu primer dirección</span>
          </div>
            </div>
        </div>
    </div>


          </div>


          <!-- Customer Sidebar-->
          <div class="col-xl-3 col-lg-4 mb-5">
            <SidebarCliente/>
          </div>
          <!-- /Customer Sidebar-->


        </div>
      </div>
    </section>
    </div>
</template>


<script>
import axios from 'axios'; 
import SidebarCliente from '@/components/SidebarCliente.vue'

export default {
    data() {
        return {
            direccion: {
                pais:''
            }, 
            msm_error: '',
            direcciones:[], 


        }
    },

    components:{
        SidebarCliente
    },

    beforeMount() {
        this.init_direcciones(); 
    },

    methods: {
        
        init_direcciones(){
            axios.get(this.$urlAPI + "/obtener_direcciones_cliente", {
                    headers: {
                    "Content-Type": "application/json",
                    'Authorization': this.$store.state.token,
                    },
                })
                .then((result) => {
                    this.direcciones = result.data;
                })
                .catch((error) => {
                    console.error("Error al obtener las direcciones:", error);
                    
                    "Error al obtener las direcciones. Por favor, inténtalo de nuevo más tarde.";
                });
        },

        crear_direccion(){
            if (!this.direccion.nombres) {
                this.msm_error = 'Ingrese los nombres por favor';
            } else if (!this.direccion.apellidos){
                this.msm_error = 'Ingrese los apellidos por favor';

            }else if (!this.direccion.documento){
                this.msm_error = 'Ingrese el documento por favor';

            }else if (!this.direccion.telefono){
                this.msm_error = 'Ingrese el telefono por favor';

            }else if (!this.direccion.pais){
                this.msm_error = 'Ingrese el pais por favor';

            }else if (!this.direccion.ciudad){
                this.msm_error = 'Ingrese la cuidad por favor';

            }else if (!this.direccion.cp){
                this.msm_error = 'Ingrese el codigo postal por favor';

            }else if (!this.direccion.direccion){
                this.msm_error = 'Ingrese la direccion por favor';

            }else{
                axios.post(this.$urlAPI + "/crear_direccion_cliente",this.direccion, {
                    headers: {
                    "Content-Type": "application/json",
                    'Authorization': this.$store.state.token,
                    },
                })
                .then((result) => {
                    this.msm_error = '';
                    this.direccion =   {
                pais:''
            },
                    this.init_direcciones(); 
                })
                .catch((error) => {
                    console.error("Error al crear nueva dirección:", error);
                    this.msm_error =
                    "Error al crear dirección. Por favor, inténtalo de nuevo más tarde.";
                });
            }
        },

        eliminar_direccion(id){
            axios.delete(this.$urlAPI + "/eliminar_direccion_cliente/"+id, {
                    headers: {
                    "Content-Type": "application/json",
                    'Authorization': this.$store.state.token,
                    },
                })
                .then((result) => {
                    this.init_direcciones();
                })
                .catch((error) => {
                    console.error("Error al obtener las direcciones:", error);
                    
                    "Error al obtener las direcciones. Por favor, inténtalo de nuevo más tarde.";
                });
        }
    },
}
</script>