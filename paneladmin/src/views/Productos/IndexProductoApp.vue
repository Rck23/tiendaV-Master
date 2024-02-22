<template>
  <div>
    <Sidebar />
    <div class="main-content">
      <TopNav />

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <!-- Header -->
            <div class="header mt-md-5">
              <div class="header-body">
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Pretitle -->
                    <h6 class="header-pretitle">Productos</h6>

                    <!-- Title -->
                    <h1 class="header-title">Panel de productos</h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active"> Todos los productos </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/producto/create" class="nav-link">Nuevo producto</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <!-- Files -->
                <div class="card" data-list='{"valueNames": ["name"]}'>
                  <div class="card-header">
                    <!-- Title -->
                    <h4 class="card-header-title">Productos</h4>

                  </div>
                  <div class="card-header">
                    <div class="input-group input-group-flush input-group-merge input-group-reverse">
                      <!-- Input -->
                      <input class="form-control list-search" type="search" placeholder="Busca tu producto"
                        v-model="filtro" />

                      <!-- Prepend -->
                      <div class="input-group-text" v-on:click="init_data()" style="cursor: pointer;">
                        <span class="fe fe-search"></span>
                      </div>
                    </div>
                  </div>


                  <div class="card-body">

                
                    <template v-if="load_data">
                      <div>
                        <div class="row">
                          <div class="col-12 text-center">
                            <div class="spinner-border mt-5 mb-5" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>

                    <template v-if="!load_data">
                      <div>

                        <!-- List -->
                        <ul id="productoPag" class="list-group list-group-lg list-group-flush list my-n4" v-if="productos.length >= 1">
                          <li class="list-group-item" v-for="item in itemPorLista">
                            <div class="row align-items-center">
                              <div class="col-auto">
                                <!-- Avatar -->
                                <a href="" class="avatar avatar-lg">
                                  <img :src="$urlAPI +
                                    '/obtener_portada_producto/' +
                                    item.portada
                                    " alt="..." class="avatar-img rounded" />
                                </a>
                              </div>
                              <div class="col ms-n2">
                                <!-- Title -->
                                <h4 class="mb-1 name">
                                  <a href="#!">{{ item.titulo }}</a>
                                </h4>

                                <!-- Text -->
                                <p class="card-text small text-muted mb-1">
                                  {{ item.categoria }} &nbsp;
                                  <span v-if="!item.estado" class="item-score badge bg-danger-soft">No disponible</span>
                                  <span v-if="item.estado" class="item-score badge bg-success-soft">Disponible</span>
                                </p>

                                <!-- Time -->
                                <p class="card-text small text-muted">
                                  Creación
                                  <time datetime="2018-01-03">{{
                                    convertDate(item.createdAt)
                                  }}</time>
                                </p>
                              </div>
                              <div class="col-auto">
                                <span><b>{{ convertCurrency(item.precio) }}</b></span>
                              </div>
                              <div class="col-auto">
                                <!-- Dropdown -->
                                <div class="dropdown">
                                  <a href="#" class="dropdown-ellipses dropdown-toggle" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fe fe-more-vertical"></i>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                              
                                    <router-link  class="dropdown-item" :to="{name: 'producto-edit', params:{id:item._id}}">Editar</router-link>
                              
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- / .row -->
                          </li>
                      
                        </ul>


                        <div class="row justify-content-center" v-if="productos.length == 0">
                          <div class="col-12 col-md-6 col-xl-6 my-5">
                            <div class="text-center">
                              <!-- Preheading -->
                              <h6 class="text-uppercase text-muted mb-4 display-2">
                                404 error
                              </h6>

                              <!-- Heading -->
                              <h1 class="display-4 mb-3">
                                No hay productos con tu busqueda 😭
                              </h1>

                              <!-- Subheading -->
                              <p class="text-muted mb-4 display-6">
                                vuelve a buscar
                              </p>

                            </div>
                          </div>
                        </div>
                      </div>
                    </template>


                  </div>
                  <div class="card-footer d-flex justify-content-center">
                    <b-pagination v-model="currentPage" pills  :total-rows="productos.length" :per-page="perPage"
                      aria-controls="productoPag"></b-pagination>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
    </div>
  </div>
</template>

<script>
// Importamos los componentes Sidebar y TopNav, moment para formatear fechas y currency-formatter para formatear monedas
import Sidebar from "@/components/Sidebar.vue";
import TopNav from "@/components/TopNav.vue";
import moment from "moment";
import currency_formatter from "currency-formatter";
import axios from "axios";

export default {
  name: "IndexProductoApp",
  data() {
    return {
      productos: [], // <--- Lista de productos obtenida del backend
      filtro: "", // <--- Filtro para listar productos
      load_data: false,
      perPage: 10,
      currentPage: 1,

      get itemPorLista(){
        return this.productos.slice(
          (this.currentPage - 1) * this.perPage, this.currentPage * this.perPage
        )
      }
    };
  },
  methods: {
    // Método para inicializar los datos del componente al montarse
    init_data() {
      this.load_data = true;

      // Realizamos una solicitud GET al endpoint de listado de productos
      axios
        .get(this.$urlAPI + "/listar_producto_admin/" + this.filtro, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          this.productos = result.data; // <--- Actualizamos la lista de productos con los datos obtenidos
          this.load_data = false;
          console.log(this.productos);
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            // El servidor respondió con un estado fuera del rango de  2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            // La solicitud se hizo pero no se recibió ninguna respuesta
            console.log(err.request);
          } else {
            // Algo sucedió en la configuración de la solicitud que desencadenó un Error
            console.log("Error", err.message);
          }
          console.log(this.filtro);
        });
    },
    // Método para convertir una fecha a formato DD-MM-YYYY
    convertDate(date) {
      return moment(date).format("DD-MM-YYYY");
    },
    // Método para convertir un número a formato de moneda USD
    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
  },
  beforeMount() {
    // Llamamos al método para inicializar los datos antes de que el componente se monte
    this.init_data();
  },
  components: {
    Sidebar,
    TopNav,
  },
};
</script>
