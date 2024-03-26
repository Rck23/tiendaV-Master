<template>
  <div class="pb-5">
    <!-- Hero Section-->
    <section class="hero" style="margin-top: 7rem;">
      <div class="container">
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading"> Tu Carrito</h1>
          <div class="row">
            <div class="col-xl-8 offset-xl-2">
              <p class="lead text-muted">Tienes  {{carrito_length}} elementos en tu carrito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section-->
    <section>
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8">
            <div class="cart">
              <div class="cart-wrapper">
                <div
                  class="cart-header text-center"
                  style="background: #f19000; border-radius: 10px"
                >
                  <div class="row">
                    <div class="col-5 fw-bold text-white">Producto</div>
                    <div class="col-2 fw-bold text-white">Precio</div>
                    <div class="col-2 fw-bold text-white">Cantidad</div>
                    <div class="col-2 fw-bold text-white">subTotal</div>
                    <div class="col-1 fw-bold text-white"></div>
                  </div>
                </div>
                <div class="cart-body" v-if="!load_data">
                  <!-- Product-->
                  <div class="cart-item" v-for="item in carrito">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-5">
                        <div class="d-flex align-items-center">
                          <router-link
                            :to="{
                              name: 'show-producto',
                              params: { slug: item.producto.slug },
                            }"
                          >
                            <img
                              class="cart-item-img"
                              :src="
                                $urlAPI +
                                '/obtener_portada_producto/' +
                                item.producto.portada
                              "
                              alt="..."
                            />
                          </router-link>
                          <div class="cart-title text-start">
                            <router-link
                              class="text-uppercase text-dark"
                              :to="{
                                name: 'show-producto',
                                params: { slug: item.producto.slug },
                              }"
                            >
                              <strong
                                >{{
                                  item.producto.titulo.substr(0, 25)
                                }}...</strong
                              >
                            </router-link>
                            <br />
                            <span class="text-muted text-sm"
                              >{{ item.producto.str_variedad }}:
                              {{ item.variedad.variedad }}</span
                            >
                            <br />
                           
                          </div>
                        </div>
                      </div>
                      <div class="col-2">
                        {{ convertCurrency(item.producto.precio) }}
                      </div>
                      <div class="col-2">
                        {{ item.cantidad }}
                      </div>
                      <div class="col-2 text-center">
                        {{
                          convertCurrency(item.producto.precio * item.cantidad)
                        }}
                      </div>
                      <div class="col-1 text-center">
                        <a class="cart-remove" style="cursor: pointer;" v-on:click="eliminar(item._id)">
                          <img
                            src="/assets/media/removerProductoCarrito.png"
                            alt="Remover producto"
                            style="width: 20px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body" v-if="load_data">
                  <div class="row">
                    <div class="col-12 text-center">
                      <img
                        src="/assets/media/reloj.gif"
                        alt=""
                        style="width: 100px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="my-5 d-flex justify-content-between flex-column flex-lg-row"
            >
              <router-link class="btn btn-link text-muted" to="/shop"
                >Continuar comprando</router-link
              >
              <router-link
                class="btn text-white"
                to="/checkout"
                style="background: #1f49b6; border-radius: 10px"
                >Pagar<img
                  class="mb-1"
                  src="/assets/media/checkout.png"
                  alt="Checkout"
                  style="width: 20px"
              /></router-link>
            </div>
          </div>
          <div class="col-lg-4 " >
            <div class="block mb-5 " >
              <div class="block-header">
                <h6 class="text-uppercase mb-0">Detalles de orden</h6>
              </div>
              <div class="block-body bg-light pt-1">
                <p class="text-sm">
                    Los costos de envío se calculan en función de los valores que haya ingresado.
                </p>
                <ul class="order-summary mb-0 list-unstyled">
                  <li class="order-summary-item">
                    <span>Subtotal </span
                    ><span>{{ convertCurrency(total) }}</span>
                  </li>

                  <li class="order-summary-item">
                    <span>Envio</span><span>{{ convertCurrency($envio) }}</span>
                  </li>
                  <li class="order-summary-item border-0">
                    <span>Total</span
                    ><strong class="order-summary-total">{{
                      convertCurrency(total + $envio)
                    }}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import currency_formatter from "currency-formatter";

export default {
  name: "CarritoView",

  data() {
    return {
      total: 0,
      carrito: [],
      load_data: true,
      carrito_length:0
    };
  },

  methods: {
    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
    init_carrito() {
      if (this.$store.state.token != null) {
        this.load_data = true;
        axios
          .get(this.$urlAPI + "/obtener_carrito_cliente", {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.$store.state.token,
            },
          })
          .then((result) => {
            this.total = 0; 
            this.carrito_length = result.data.carrito_general.length; 

            for (var item of result.data.carrito_general) {
              let subtotal = item.producto.precio * item.cantidad;
              this.total = this.total + subtotal;
            }
            this.carrito = result.data.carrito_general;
            this.load_data = false;
          })
          .catch((error) => {
            console.error("Error al agregar al carrito:", error);
            this.msm_error =
              "Error al agregar al carrito. Por favor, inténtalo de nuevo más tarde.";
          });
      }
    },

    eliminar(id) {
      axios.delete(this.$urlAPI + "/eliminar_producto_carrito/"+id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          this.init_carrito();
          this.$socket.emit('send_cart', true);

        })
        .catch((error) => {
          console.error("Error al eliminar producto del carrito:", error);
          this.msm_error =
            "Error. Por favor, inténtalo de nuevo más tarde.";
        });
    },
  },

  beforeMount() {
    this.init_carrito();
  },
};
</script>