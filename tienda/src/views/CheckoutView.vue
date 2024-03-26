<template >
    <div class="pb-5">
        <section class="hero" style="margin-top: 7rem;">
      <div class="container">
    
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading">Checkout</h1>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">Por favor revisa tu orden.</p></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Checkout-->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">

            <div class="block mb-5">
              <div class="block-header" style="background: #f19000; border-radius: 10px">
                <h6 class="text-uppercase mb-0 text-white">Dirección de entrega</h6>
            </div>
              <div class="block-body ">
                <div class="row">
                  <div class="mb-4 col-md-6 d-flex align-items-center" v-for="item in direcciones">
                    <input type="radio" name="shippping" id="option0" :value="item._id" v-on:change="seleccionar_direccion($event)">
                    <label class="ms-3" for="option0">
                      <strong class="d-block  mb-2">{{ item.pais }}, {{ item.ciudad }}</strong>
                      <span class="text-muted text-sm">{{ item.nombres }} {{ item.apellidos }} </span> <br/>
                      <span class="text-muted text-sm">{{ item.direccion }}</span> <br/>
                      <span class="text-muted text-sm">Tel: {{ item.telefono }} </span>
                    </label>
                  </div>
                
                </div>
              </div>

            </div>
           
            <div class="mb-5">
              <div class="cart">
                <div class="cart-wrapper">
                  <div class="cart-header text-center" style="background: #f19000; border-radius: 10px">
                    <div class="row">
                      <div class="col-6">
                        <span class="text-left text-white">Producto</span>
                      </div>
                      <div class="col-2 text-white">Precio</div>
                      <div class="col-2 text-white">Cantidad</div>
                      <div class="col-2 text-white">Total</div>
                    </div>
                  </div>
                  <div class="cart-body">
                    <!-- Product-->
                    <div class="cart-item" v-for="item in productos">
                      <div class="row d-flex align-items-center text-center">
                        <div class="col-6">
                          <div class="d-flex align-items-center">
                            <a href="detail.html">
                              <img class="cart-item-img" :src="$urlAPI+'/obtener_portada_producto/'+item.producto.portada" alt="Portada producto">
                            </a>
                            <div class="cart-title text-start">
                              <a class="text-uppercase text-dark" href="detail.html">
                                <strong>{{ item.producto.titulo.substr(0,25) }}...</strong>
                              </a>
                              <br>
                              <span class="text-muted text-sm">{{ item.producto.str_variedad }}: {{ item.variedad.variedad }}</span>
                              <br>
                            </div>
                          </div>
                        </div>
                        <div class="col-2">{{ convertCurrency(item.producto.precio) }}</div>
                        <div class="col-2">  {{ item.cantidad }}
                        </div>
                        <div class="col-2 text-center">
                          {{convertCurrency(item.producto.precio * item.cantidad)}}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5 d-flex justify-content-between flex-column flex-lg-row">
              <router-link class="btn btn-link text-muted" to="/cart"> 
                Regresar al carrito
              </router-link>
              <!-- <a class="btn text-white"  style="background: #1f49b6; border-radius: 10px" href="checkout5.html">
                Hacer pedido <img src="/assets/media/pedido.png" alt="pedido" style="width: 18px; margin-bottom: 6px;">
              </a> -->
            </div>
          </div>
          <div class="col-lg-4 ">
            <div class="block mb-5 ">
              <div class="block-header">
                <h6 class="text-uppercase mb-0">Resumen del pedido</h6>
              </div>
              <div class="block-body bg-light pt-1">
                <p class="text-sm text-muted">Los costos de envío y adicionales se calculan en función de los valores que haya ingresado.</p>
                <ul class="order-summary mb-0 list-unstyled">
                  <li class="order-summary-item">
                    <span>Subtotal </span>
                    <span><span>{{ convertCurrency(total) }}</span></span></li>
                  <li class="order-summary-item">
                    <span>Envio</span>
                    <span>{{ convertCurrency($envio) }}</span>
                  </li>
               
                  <li class="order-summary-item border-0">
                    <span>Total</span>
                    <strong class="order-summary-total">{{convertCurrency(total + $envio)}}</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div class="block mb-5 " >
              <div class="block-header">
                  <h6 class="text-uppercase mb-0">Método de pago</h6>
              </div>
              <div class="block-body bg-light pt-1 mb-3">
                  <div class="col-md-12 mb-2">
                   
                    <span class="d-block  mb-2" style="letter-spacing: 0px;font-weight: 600;">Tarjeta de crédito o débito</span>
                      <div class="row">
                          <div class="col-12 mb-2">
                              <img src="/assets/media/1.webp" style="width: 180px">
                          </div>
                          <div class="col-12">
                              <p class="text-muted" style="font-size: 13px">
                                  (Luego de hacer clic en "PAGAR" será redirigido a Mercado Pago  de forma segura para completar su compra).</p>
                          </div>
                      </div>
                  </div>
                  
               
  
                  <div class="col-md-12">
                      <p class="text-sm" style="margin-bottom: 0.4rem;">Deberes e impuestos no están incluidos en paquetes con envio internacional. /Tus datos personales serán utilizados para procesar tu pedido y respaldar tu experiencia en este sitio web.</p>
                      <a > <b> Términos & Privacidad.</b></a>
                  </div>
  
              </div>
              <div class="block-footer">
                <a v-on:click="crearPreferencia()" class="btn text-white"   id="btnBuy" style="cursor: pointer; width: 100%; background: #1f49b6; border-radius: 10px;">
                  PAGAR <img src="/assets/media/pagar.png" alt="pedido" style="width: 18px; margin-bottom: 3px;">
                </a>
               <!--  <button class="btn btn-dark btnBuy" style="cursor: pointer" disabled>Procesando...</button> -->
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>


<style>
.tarjeta{
  background-color: #fbdcb3;
}
</style>

<script>
import axios from "axios";
import currency_formatter from "currency-formatter";

export default {
    name: 'CheckoutView',

    data() {
      return {
        direcciones: [],
        venta: {},
        productos: [],
        total:0, 
        load_data: true, 
        items: [],
      }
    },

    beforeMount(){
      this.init_direcciones();
      this.init_carrito();
    },

    methods: {
      convertCurrency(number) {
        return currency_formatter.format(number, { code: "USD" });
      },

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

        seleccionar_direccion(event){
          this.venta.direccion = event.target.value; 
        }, 

        init_carrito() {
          if (this.$store.state.token != null) {
            this.load_data = true;
            axios
              .get(this.$urlAPI + "/obtener_carrito_cliente", {
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": this.$store.state.token,
                },
              })
              .then((result) => {
                this.total = 0; 
                this.carrito_length = result.data.carrito_general.length; 

                for (var item of result.data.carrito_general) {
                  let subtotal = item.producto.precio * item.cantidad;
                  this.total = this.total + subtotal;

                  this.items.push({
                    title: item.producto.titulo,
                    quantity: item.cantidad, 
                    unit_price: item.producto.precio,
                    currency_id: 'MXN'
                  });

                }

                this.items.push({
                    title: 'Envio',
                    quantity: 1, 
                    unit_price: this.$envio,
                    currency_id: 'MXN'
                  });


                this.productos = result.data.carrito_general;
                this.load_data = false;
              })
              .catch((error) => {
                console.error("Error al agregar al carrito:", error);
                this.msm_error =
                  "Error al agregar al carrito. Por favor, inténtalo de nuevo más tarde.";
              });
          }
        },

        crearPreferencia(){
          let data ={
            back_urls:{
              success: 'http://localhost:8080/verificacion/success/'+this.venta.direccion,
              pending: 'http://localhost:8080/verificacion/pending',
              failure: 'http://localhost:8080/verificacion/failure'
            },

            items: this.items,
            auto_return: 'approved',
          }

          axios.post('https://api.mercadopago.com/checkout/preferences',data,{
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer TEST-7901365576620586-021417-b1b5a07a3c64b2182186fe17b8fbb734-1673996244'
                },
          }).then((result) => {
            console.log(result);
            window.location.href = result.data.sandbox_init_point; 
          }).catch((err) => {
            
          });
        },

    },

}

</script>