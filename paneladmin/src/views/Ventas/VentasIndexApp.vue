<template>
  <div>
    <Sidebar />
    <div class="main-content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <!-- Header -->
            <div class="header mt-md-5">
              <div class="header-body">
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Pretitle -->
                    <h6 class="header-pretitle">Ventas</h6>

                    <!-- Title -->
                    <h1 class="header-title">
                      <b>Ventas</b>
                    </h1>
                  </div>
                </div>
                <!-- / .row -->
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
                  <b>Todas las ventas</b>
                </h4>
              </div>
              <div class="table-responsive">
                <table class="table table-sm table-nowrap card-table">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Serie</th>
                      <th>Total</th>
                      <th>Estado</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody class="fs-base" v-if="ventas.length >= 1">
                    <tr v-for="item in ventas">
                      <td>
                        <a>{{ item.cliente.nombres }}</a>
                      </td>
                      <td>
                        <a
                          >#{{ item.serie.toString().padStart(6, "000000") }}</a
                        >
                      </td>
                      <td>
                        {{ convertCurrency(item.total + item.envio) }}
                      </td>
                      <td>
                        {{ item.estado }}
                      </td>
                      <td>
                        <button class="btn btn-primary btn-sm">
                          <router-link
                            style="color: #ffffff !important"
                            :to="{
                              name: 'ventas-detalle',
                              params: { id: item._id },
                            }"
                            >Ver detalles</router-link
                          >
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-if="ventas.length == 0">
                    <tr>
                      <td colspan="5">
                        <div class="row justify-content-center">
                          <div class="col-12 col-md-6 col-xl-6 my-3">
                            <div class="text-center">
                              <!-- Heading -->
                              <h1 class="display-4 mb-3">
                                No se encontraron ventas
                              </h1>

                              <!-- Subheading -->
                              <p class="text-muted mb-4">
                                No hay datos que mostrar!
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
import axios from "axios";
import currency_formatter from "currency-formatter";

export default {
  name: "VentasIndexApp",
  data() {
    return {
      inicio: "",
      hasta: "",
      ventas: [],
    };
  },

  methods: {
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
        axios
          .get(
            this.$urlAPI +
              "/obtener_ventas_admin/" +
              this.inicio +
              "/" +
              this.hasta,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: this.$store.state.token,
              },
            }
          )
          .then((result) => {
            this.ventas = result.data;
          });
      }
    },

    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
  },

  components: {
    Sidebar,
  },
};
</script>
