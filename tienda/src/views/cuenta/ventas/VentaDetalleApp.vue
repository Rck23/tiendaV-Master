<template>
  <div class="pb-5">
    <div v-if="!load_data" style="margin-top: 8rem">
      <div v-if="!acceso">
        <div class="hero-content pb-5 text-center">
          <h1 class="mb-5">No puedes ver el detalle de esta venta</h1>
          <div class="row">
            <div class="col-xl-8 offset-xl-2">
              <img src="/assets/media/neutral.gif" style="width: 100px" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="acceso">
        <section class="hero" style="margin-top: 5rem">
          <div class="container">
            <!-- Hero Content-->
            <div class="hero-content pb-5 text-center">
              <h1 class="hero-heading">
                Pedido #{{ venta.serie.toString().padStart(6, "000000") }}
              </h1>
              <div class="row">
                <div class="col-xl-8 offset-xl-2">
                  <p class="lead text-muted">
                    Pedido #{{
                      venta.serie.toString().padStart(6, "000000")
                    }}
                    colocado el
                    <strong>{{ convertFecha(venta.createdAt) }}</strong>.
                  </p>
                  <p class="text-muted">
                    Si tiene alguna pregunta, no dude en
                    <a href="contact.html">contactarnos</a>, disponibles 24 horas al día, 7 días a la semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-xl-9">
                <div class="cart">
                  <div class="cart-wrapper">
                    <div
                      class="cart-header text-center"
                      style="background: #f19000; border-radius: 10px"
                    >
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
                      <div class="cart-item" v-for="item in detalles">
                        <div class="row d-flex align-items-center text-center">
                          <div class="col-6">
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
                              convertCurrency(
                                item.producto.precio * item.cantidad
                              )
                            }}
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row my-5">
                  <div class="col-md-6">
                    <div class="block mb-5">
                      <div class="block-header">
                        <h6 class="text-uppercase mb-0">Detalles del pedido</h6>
                      </div>
                      <div class="block-body bg-light pt-1">
                        <p class="text-sm">
                          Los costos de envío y adicionales se calculan en base a
                          valores que ha introducido.
                        </p>
                        <ul class="order-summary mb-0 list-unstyled">
                          <li class="order-summary-item">
                            <span>Subtotal </span><span>{{ convertCurrency(venta.total) }}</span>
                          </li>
                          <li class="order-summary-item">
                            <span>Envio</span
                            ><span>{{ convertCurrency(venta.envio) }}</span>
                          </li>
                          
                          <li class="order-summary-item border-0">
                            <span>Total</span
                            ><strong class="order-summary-total"
                              >{{ convertCurrency(venta.total + venta.envio)}}</strong
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="block-header">
                      <h6 class="text-uppercase mb-0">Cliente</h6>
                    </div>
                    <div class="block-body bg-light pt-1">
                      <p>
                        Nombre: {{ venta.cliente.nombres }} {{ venta.cliente.apellidos }}<br />Correo electrónico: {{ venta.cliente.email }}
                      </p>
                    </div>
                    <div class="block-header">
                      <h6 class="text-uppercase mb-0">Dirección de entrega</h6>
                    </div>
                    <div class="block-body bg-light pt-1">
                      <p>
                        Nombre: {{ venta.direccion.nombres }} {{ venta.direccion.apellidos }}<br />Tel: {{ venta.direccion.telefono }}<br />C.P. {{ venta.direccion.cp }} {{ venta.direccion.pais }}<br />Ciudad: {{ venta.direccion.ciudad }}
                        <br />Dirección: {{ venta.direccion.direccion }}

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Customer Sidebar-->
              <div class="col-xl-3 col-lg-4 mb-5">
                <SidebarCliente />
              </div>
              <!-- /Customer Sidebar-->
            </div>
          </div>
        </section>
      </div>
    </div>

    <div v-if="load_data">
      <div class="container" style="margin-top: 10rem">
        <div class="row">
          <div class="col-12 text-center">
            <img src="/assets/media/reloj.gif" style="width: 100px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarCliente from "@/components/SidebarCliente.vue";
import axios from "axios";
import moment from "moment";
import currency_formatter from "currency-formatter";

export default {
  name: "VentaDetalleApp",

  data() {
    return {
      venta: {},
      detalles: [],
    
      acceso: false,
      load_data: true,
    };
  },

  components: {
    SidebarCliente,
  },

  beforeMount() {
    this.init_venta();
  },
  methods: {
    init_venta() {
      this.load_data = true;
      axios.get(this.$urlAPI + "/obtener_informacion_venta/" + this.$route.params.id,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.$store.state.token,
            },
          }
        )
        .then((result) => {
          if (result.data.message) {
            this.acceso = false;
          } else {
            this.venta = result.data.venta;
            this.detalles = result.data.detalles;
            this.acceso = true;
          }

          this.load_data = false;
        })
        .catch((error) => {
          console.error("Error al obtener información de venta:", error);

          ("Error al obtener información de venta. Por favor, inténtalo de nuevo más tarde.");
        });
    },

    convertFecha(item) {
      return moment(item).format("DD/MM/YYYY");
    },

    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
  },
};
</script>
