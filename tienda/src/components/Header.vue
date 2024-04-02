<template>
  <header class="header header-absolute">

    <!-- Navbar-->
    <nav
      class="navbar navbar-expand-lg navbar-sticky navbar-airy navbar-dark bg-fixed-white navbar-fixed-dark"
      style="background: #fff !important; height: 80px"
    >
      <div class="container-fluid">
        <!-- Navbar Header  -->
        <router-link
          to="/"
          class="navbar-brand text-lg text-white fw-bold text-uppercase"
        >
          <img
            style="width: 180px; height: auto"
            class="img-fluid"
            src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/ryncjarleq0wptfpmpsg.png"
            alt="Logo"
          />
        </router-link>

        <a
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/assets/icons/menu-hamburguesa.png" style="width: 20px" />
        </a>
        <!-- Navbar Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link
                style="color: #1f49b6"
                class="nav-link fw-bold text-uppercase"
                to="/shop"
                >¿Por que planify?</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link
                style="color: #1f49b6"
                class="nav-link fw-bold text-uppercase"
                to="/shop"
                >Planners</router-link
              >
            </li> -->

             <!-- <li class="nav-item">
              <router-link
                style="color: #1f49b6"
                class="nav-link fw-bold text-uppercase"
                to="/especial"
                >to do list</router-link
              >
            </li> -->

            
        
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                style="color: #1f49b6"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Planners
              </a>
              <ul
                class="dropdown-menu dropdown"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <router-link
                    class="dropdown-item fw-bold"
                    style="color: #ed8808"
                    :to="{name:'Psemanal'}"
                    >Semanal</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item fw-bold"
                    style="color: #ed8808"
                    :to="{name:'Pmensual'}"
                    >Mensual</router-link
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item fw-bold"
                    style="color: #ed8808"
                    href="#"
                    >Work Out</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item fw-bold"
                    style="color: #ed8808"
                    href="#"
                    >Horarios</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item fw-bold"
                    style="color: #ed8808"
                    href="#"
                    >Kanban</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item fw-bold"
                    style="color: #ed8808"
                    href="#"
                    >Gastos</a
                  >
                </li>
              </ul>
            </li>
      
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style="color: #1f49b6"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  to do list
                </a>
                <ul
                  class="dropdown-menu dropdown"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a
                      class="dropdown-item fw-bold"
                      style="color: #ed8808"
                      href="#"
                      >Metas</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item fw-bold"
                      style="color: #ed8808"
                      href="#"
                      >Viveres</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item fw-bold"
                      style="color: #ed8808"
                      href="#"
                      >Viajes</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item fw-bold"
                      style="color: #ed8808"
                      href="#"
                      >Hábitos</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item fw-bold"
                      style="color: #ed8808"
                      href="#"
                      >Kids</a
                    >
                  </li>
                </ul>
              </li>



            <li class="nav-item">
              <router-link
                style="color: #1f49b6"
                class="nav-link fw-bold text-uppercase"
                to="/especial"
                >personalizalo</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                style="color: #1f49b6"
                class="nav-link fw-bold text-uppercase"
                to="/especial"
                >contactanos</router-link
              >
            </li>
          </ul>
          <div
            class="d-flex align-items-center justify-content-between justify-content-lg-end mt-2 mb-2 my-lg-0"
          >
            <!-- Search Button-->
            <div class="nav-item navbar-icon-link" data-bs-toggle="search">
              <img src="/assets/icons/search.png" style="width: 25px" />
            </div>

         
            <!-- User Not Logged - link to login page-->

            <div class="nav-item">
              <router-link
                class="navbar-icon-link"
                to="/login"
                v-if="!$store.state.token"
              >
                <img src="/assets/icons/user.png" style="width: 25px" />
                <span
                  class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none"
                  >Inicio de sesión
                </span>
              </router-link>

              <a v-if="$store.state.token" class="navbar-icon-link dropdown" >
                        <img src="/assets/icons/user.png" style="width: 25px;" />
                        <span class="text-sm ms-2 ms-lg-0 text-uppercase fw-bold d-none d-sm-inline dropdown-toggle "  style="color: #1f49b6;" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> &nbsp; {{ usuario.nombres.split(" ")[0] }}</span>
                        
                        <div class="dropdown-menu dropdown-menu-animated" aria-labelledby="categoryDropdownMenuLink" style="left: -50px !important;">  

                          <router-link class="dropdown-item fw-bold" style="color: #ed8808" to="/cuenta/venta"><img src="/assets/icons/pedidos.png" style="width: 25px"/>  Mis pedidos</router-link>
                          <router-link class="dropdown-item fw-bold" style="color: #ed8808" to="/cuenta/direcciones"><img src="/assets/icons/direccion.png"  style="width: 25px"/> Direcciones</router-link>
                          <a class="dropdown-item fw-bold" style="color: #ed8808" v-on:click="logout()">  <img src="/assets/icons/salida.png" style="width: 25px" /> Cerrar sesión   </a>
                          
                        </div>
              </a>
              
            </div>
            <!-- Cart Dropdown-->
            <div class="nav-item dropdown">
              <a class="navbar-icon-link d-lg-none" href="cart.html">
                <img src="/assets/icons/cart.png" style="width: 25px" />
                <span
                  class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none"
                  >Carrito</span
                >
              </a>
              <div class="d-none d-lg-block">
                <a
                  class="navbar-icon-link"
                  id="cartdetails"
                  href="cart.html"
                  data-bs-target="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/assets/icons/cart.png" style="width: 25px" />
                  <div
                    class="navbar-icon-link-badge fw-bold"
                    style="color: #fff; background-color: #f19000"
                  >
                    {{carrito_length}}
                  </div>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-animated dropdown-menu-end p-4"
                  aria-labelledby="cartdetails"
                >
                  <div class="navbar-cart-product-wrapper">
                    <!-- cart item-->
                    <div class="navbar-cart-product" v-for="item in carrito">
                      <div class="d-flex align-items-center">
                        <router-link :to="{name: 'show-producto', params:{slug: item.producto.slug}}">
                          <img
                            class="img-fluid navbar-cart-product-image"
                            :src="
                              $urlAPI +
                              '/obtener_portada_producto/' +
                              item.producto.portada
                            "
                            alt="..."
                        /></router-link>
                        <div class="w-100">
                          
                          <div class="ps-3">
                            <router-link
                              :to="{
                                name: 'show-producto',
                                params: { slug: item.producto.slug },
                              }"
                              class="navbar-cart-product-link"
                              style="
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                              "
                              >{{ item.producto.titulo }}</router-link
                            >
                            <small class="d-block text-muted"
                              >{{ item.producto.str_variedad }}:
                              {{ item.variedad.variedad }}
                            </small>
                            <small class="d-block text-muted"
                              >Cantidad: {{ item.cantidad }}
                            </small>
                            <strong class="d-block text-sm"
                              >{{ convertCurrency(item.producto.precio*item.cantidad ) }}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- total price-->
                  <div class="navbar-cart-total">
                    <span class="text-uppercase text-muted">Total</span
                    ><strong class="text-uppercase">{{convertCurrency(total)}}</strong>
                  </div>
                  <!-- buttons-->
                  <div class="d-flex justify-content-between">
                    <router-link class="btn btn-link text-dark me-1" to="/cart"
                      >Tu carrito
                      <img
                        src="/assets/icons/shopping-bag.png"
                        style="width: 15px "
                        class="mb-2"
                      />
                    </router-link>
                    <router-link class="btn text-center text-white mb-3" to="/checkout" style="background: #1f49b6; border-radius: 10px">Pagar</router-link>

                  </div>
                </div>
              </div>
            </div>
            <!-- like Button-->
            <div class="nav-item navbar-icon-link" data-bs-toggle="search">
              <img src="/assets/icons/corazon.png" style="width: 25px" />
            </div>

            <!-- notification Button-->
            <div class="nav-item navbar-icon-link" data-bs-toggle="search">
              <img src="/assets/icons/notificacion.png" style="width: 25px" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- /Navbar -->
    <!-- Fullscreen search area-->
    <div class="search-area-wrapper">
      <div class="search-area d-flex align-items-center justify-content-center">
        <div class="close-btn">
          <svg class="svg-icon svg-icon-light w-3rem h-3rem">
            <use xlink:href="#close-1"></use>
          </svg>
        </div>
        <form class="search-area-form" action="#">
          <div class="mb-4 position-relative">
            <input
              class="search-area-input"
              type="search"
              name="search"
              id="search"
              placeholder="Ques estas buscando hoy?"
            />
            <button class="search-area-button" type="submit">
              <svg class="svg-icon">
                <use xlink:href="#search-1"></use>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- /Fullscreen search area-->
  </header>
</template>

<script>
import axios from "axios";
import currency_formatter from "currency-formatter";

export default {
  name: "Header",

  data() {
    return {
      usuario: JSON.parse(this.$store.state.usuario),
      carrito: [],
      carrito_length: 0,
      total: 0, 
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      if(this.$route.path !== '/') this.$router.push({name: 'home'});
      // window.location.reload(); 
      this.carrito = []; 
      this.carrito_length = 0;
    },

    init_carrito() {
        if(this.$store.state.token != null){
          axios.get(this.$urlAPI + "/obtener_carrito_cliente", {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          this.carrito_length = result.data.carrito_general.length; 
          this.total = 0; 
          for(var item of result.data.carrito_general){
            let subtotal = item.producto.precio * item.cantidad; 
            this.total = this.total + subtotal; 
          }
          this.carrito = result.data.carrito;
          console.log(result);
        })
        .catch((error) => {
          console.error("Error al agregar al carrito:", error);
          this.msm_error =
            "Error al agregar al carrito. Por favor, inténtalo de nuevo más tarde.";
        });
        }
    },

    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },

  
  },

  created() {
    this.sockets.subscribe('listen_cart', (data) => {
       this.init_carrito(); 
       this.usuario = JSON.parse(this.$store.state.usuario);
    });
  },  

  beforeMount() {
    this.init_carrito();
  },
};
</script>

<style >
.navbar-light .navbar-nav .navbar-link,
.navbar-hover-light:hover .navbar-nav .navbar-link,
.navbar-fixed-light.fixed-top .navbar-nav .navbar-link {
  color: rgb(255, 255, 255);
}


</style>