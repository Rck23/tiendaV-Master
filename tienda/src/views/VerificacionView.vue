<template>
    <div>
    <section class="hero" v-if="estado == 'pending' || estado == 'failure'" style="margin-top: 5rem;">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
          
        </ol>
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="mb-5">Pago incorrecto</h1>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2">
                <p class="lead mb-0">Algo salio mal, verifica que los datos y el proceso sea el correcto. </p>
            </div>
          </div>
        </div>
      </div>
</section>

<section class="hero" v-if="estado == 'success'" style="margin-top: 5rem;">
      <div class="container" v-if="!msm_error">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
          
        </ol>
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="mb-5">Validando pago...</h1>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2">
                <img src="/assets/media/reloj.gif" style="width: 100px;">
            </div>
          </div>
        </div>
      </div>

      <div class="container" v-if="msm_error">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb justify-content-center">
          <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
          
        </ol>
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="mb-5">{{ msm_error }}</h1>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2">
                <img src="/assets/media/triste.gif" style="width: 100px;">
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
    name: 'VerificacionView',

    data() {
        return {
            estado:'',
            payment_id:'',
            direccion:'',
            pago:{},
            venta:{}, 
            detalles:[],
            carrito:[],
            total:0,

            msm_error:'',
        }
    },

    beforeMount() {

        this.estado = this.$route.params.estado;
        this.payment_id = this.$route.query.payment_id;

        this.init_carrito();

        let usuario_data = JSON.parse(this.$store.state.usuario);
   
        this.venta.transaccion = this.payment_id;
        this.venta.envio = this.$envio;
        this.venta.cliente = usuario_data._id;

        if(this.$route.params.direccion){
            this.direccion = this.$route.params.direccion;
            this.venta.direccion = this.direccion;
        }else{
            this.msm_error = 'No se obtuvo el código de la dirección';
        }

        this.init_payment(this.payment_id);

        console.log(this.venta);
        console.log(this.detalles);


        
    },

    methods: {
        init_carrito() {
            axios.get(this.$urlAPI + "/obtener_carrito_cliente", {
            headers: {
              "Content-Type": "application/json",
              "Authorization": this.$store.state.token,
            },
          }).then((result) => {
            this.total = 0; 
            this.carrito_length = result.data.carrito_general.length; 

            for (var item of result.data.carrito_general) {
              let subtotal = item.producto.precio * item.cantidad;
                    this.total = this.total+ subtotal;
                    this.detalles.push({
                        subtotal: subtotal,
                        precio_unidad: item.producto.precio,
                        cantidad: item.cantidad,
                        cliente: this.venta.cliente,
                        producto: item.producto._id,
                        variedad: item.variedad._id
                    });
            }
            this.venta.total = this.total;
            this.carrito = result.data.carrito_general;
            
          })
          
    },

        init_payment(payment_id){
            axios.get('https://api.mercadopago.com/v1/payments/'+payment_id,{
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer TEST-7901365576620586-021417-b1b5a07a3c64b2182186fe17b8fbb734-1673996244'
                },
          }).then((result) => {
            this.pago = result.data; 

            if (this.pago.status == 'approved') {
                this.validar_venta(this.payment_id);
            }else{
                this.msm_error = 'El pago no fue acréditado'; 
            }

          }).catch((err) => {
            console.log(err);
          });
        },

        validar_venta(payment_id){
            axios.get(this.$urlAPI + "/validar_payment_id_venta/"+payment_id, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': this.$store.state.token,
                },
                }).then((resultado) => {  

                    if (resultado.data.length >= 1) {
                        // NO SE HACE LA VENTA
                        this.msm_error = 'El pago ya fué asignado a otra venta'; 

                    } else if(resultado.data.length == 0){
                        // SI SE HACE LA VENTA
                        this.crear_venta();
                    }
          
                }).catch((err) => {
                  console.log(err);
                });
        },

        crear_venta(){
            this.venta.detalles = this.detalles; 

            axios.post(this.$urlAPI + "/crear_venta_cliente",this.venta, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': this.$store.state.token,
                },
                }).then((resultado) => {  
                    console.log(resultado);
                    //REDIRECCION
                    this.$router.push({name:'venta', params: {id: resultado.data._id}}); 
                    this.$socket.emit('send_cart',true);

                }).catch((err) => {
                  console.log(err);
                });
        }
    },
}
</script>