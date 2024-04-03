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
                    <h6 class="header-pretitle">Ingresos</h6>

                    <!-- Title -->
                    <h1 class="header-title">Panel de ingresos</h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active"> Todos los ingresos </a>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="/ingreso/create">
                          Nuevo ingreso</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-5">
              <div class="col-9 d-flex">
                <input
                  type="date"
                  class="form-control"
                  v-model="inicio"
                  style="margin-right: 1rem"
                />
                <input type="date" class="form-control" v-model="hasta" />
              </div>
              <div class="col">
                <button
                  class="btn btn-primary"
                  style="width: 100%"
                  v-on:click="init_data()"
                >
                  Buscar
                </button>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <!-- Title -->
                <h4 class="card-header-title mb-0">
                  <b>Ingreso a inventario</b>
                </h4>
              </div>
              <div class="table-responsive">
                <table class="table table-sm table-nowrap card-table">
                  <thead>
                    <tr>
                      <th>Proveedor</th>
                      <th>Serie</th>
                      <th>Monto</th>
                      <th>Documento</th>
                      <th>Detalles</th>
                    </tr>
                  </thead>
                  <tbody class="fs-base" v-if="ingresos.length >= 1">
                    <tr v-for="item in ingresos">
                      <td>
                        <a>#{{ item.proveedor }}</a>
                      </td>
                      <td>
                        <a
                          >#{{ item.serie.toString().padStart(6, "000000") }}</a
                        >
                      </td>
                      <td>
                        {{ convertCurrency(item.monto_resultante) }}
                      </td>
                      <td>
                        <a
                          :href="
                            $urlAPI +
                            '/obtener_comprobante_ingreso/' +
                            item.documento
                          "
                          target="_blank"
                        >
                          <button class="btn btn-primary ">
                            Abrir documento
                          </button>
                        </a>
                      </td>

                      <td>
                        <button class="btn btn-primary " >
                          <router-link :to="{name: 'ingreso-detalle', params: {id: item._id}}" class=" text-white">
                            Ver detalles

                          </router-link> 
                        </button>
                      </td>
                    </tr>
                  </tbody>

                  <tbody v-if="ingresos.length == 0">
                    <tr>
                      <td colspan="4">
                        <div class="row justify-content-center">
                          <div class="col-12 col-md-6 col-xl-6 my-5">
                            <div class="text-center">
                              <!-- Heading -->
                              <h1 class="display-4 mb-3">
                                No se encontrarón ingresos 😭
                              </h1>

                              <!-- Subheading -->
                              <p class="text-muted mb-4 display-6">
                                Selecciona un rango de fechas para obtener
                                resultados o verifica <br />
                                la base de datos para ver si hay un problema
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import Sidebar from "@/components/Sidebar.vue";
import TopNav from "@/components/TopNav.vue";
import currency_formatter from "currency-formatter";
import axios from "axios";

export default {
  name: "IndexIngresoApp",

  components: {
    Sidebar,
    TopNav,
  },

  data() {
    return {
      inicio: "",
      hasta: "",
      ingresos: [],
    };
  },

  methods: {
    // Método para manejar la subida del documento como comprobante
    init_data() {
      if (!this.inicio) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese la primera fecha",
          type: "error",
        });
      } else if (!this.hasta) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese la segunda fecha",
          type: "error",
        });
      } else {
        axios.get(this.$urlAPI + "/obtener_ingresos_admin/" + this.inicio + "/" + this.hasta,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: this.$store.state.token,
              },
            }
          )
          .then((result) => {
            this.ingresos = result.data;
          });
      }
    },

    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
  },
};
</script>
  