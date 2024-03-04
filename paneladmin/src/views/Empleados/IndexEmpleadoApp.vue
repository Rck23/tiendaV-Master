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
                    <h6 class="header-pretitle">Empleados</h6>

                    <!-- Title -->
                    <h1 class="header-title">Panel de empleados</h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active"> Todos los empleados </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/colaborador/create" class="nav-link">
                          Nuevo empleado</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content">


              <div class="tab-pane fade show active" id="contactsListPane" role="tabpanel"
                aria-labelledby="contactsListTab">
                <!-- Card -->
                <div class="card"
                  data-list='{"valueNames": ["item-name", "item-title", "item-email", "item-phone", "item-score", "item-company"], "page": 10, "pagination": {"paginationClass": "list-pagination"}}'
                  id="contactsList">
                  <div class="card-header">
                    <div class="row align-items-center">
                      <div class="col">
                        <!-- Form -->
                        <form>
                          <div class="input-group input-group-flush input-group-merge input-group-reverse">
                            <input class="form-control list-search" type="search" placeholder="Buscar empleado"
                              v-model="filtro" />
                            <span class="input-group-text">
                              <i class="fe fe-search"></i>
                            </span>
                          </div>
                        </form>
                      </div>

                      <div class="col-auto">
                        <!-- Dropdown -->
                        <button class="btn btn-sm btn-white" type="button" v-on:click="filtrar()">
                          <i class="fe fe-sliders me-1"></i> Filtrar
                          <span class="badge bg-primary ms-1 d-none">0</span>
                        </button>
                      </div>
                    </div>
                    <!-- / .row -->
                  </div>
                  <div class="table-responsive">
                    <table class="table table-sm table-hover table-nowrap card-table">
                      <thead>
                        <tr>
                          <th>
                            <a class="list-sort text-muted">Nombre</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Rol</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Correo electrónico</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted">Estado</a>
                          </th>
                          <th>
                            <a class="list-sort text-muted" data-sort="item-score" href="#">Acciones</a>
                          </th>
                          <!-- <th colspan="2">
                            <a class="list-sort text-muted" data-sort="item-company" href="#">Company</a>
                          </th> -->
                        </tr>
                      </thead>

                      <paginate tag="tbody" name="empleados" :list="empleados" ref="empleados" :per="perPage"
                        class="list fs-base">
                        <tr v-if="!cargar_data" v-for="item in paginated('empleados')">
                          <td>
                            <!-- Avatar -->
                            <div class="avatar avatar-xs align-middle me-2">
                              <img class="avatar-img rounded-circle" src="/assets/img/avatar-1.jpg" alt="..." />
                            </div>
                            <a class="item-name text-reset">{{ item.nombres }} {{ item.apellidos }}</a>
                          </td>
                          <td>
                            <!-- Text -->
                            <span class="item-title">{{ item.rol }}</span>
                          </td>
                          <td>
                            <!-- Email -->
                            <a class="item-email text-reset">{{
                              item.email
                            }}</a>
                          </td>
                          <!-- <td>
                          
                                                      Phone
                                                      <a class="item-phone text-reset" href="tel:1-123-456-4890">(988) 568-3568</a>
                          
                                                    </td> -->

                          <td>
                            <!-- Badge -->
                            <span v-if="!item.estado" class="item-score badge bg-danger-soft">Inactivo</span>
                            <span v-if="item.estado" class="item-score badge bg-success-soft">Activo</span>
                          </td>

                          <td class="text-end">
                            <!-- Dropdown -->
                            <div class="dropdown">
                              <a class="dropdown-ellipses dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fe fe-more-vertical"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <router-link class="dropdown-item" :to="{
                                  name: 'colaborador-edit',
                                  params: { id: item._id },
                                }">Editar</router-link>

                                <a style="cursor:pointer" class="dropdown-item" v-b-modal="'delete-' + item._id">
                                  <span v-if="item.estado">Desactivar</span>
                                  <span v-if="!item.estado">Activar</span>
                                </a>


                                <!-- <a href="#!" class="dropdown-item">
                                  Eliminar
                                </a> -->

                              </div>
                            </div>
                            <b-modal centered :id="'delete-' + item._id"
                              title-html="<h4 class='card-header-title'><b>Desactivar/Activar Usuario</b></h4>"
                              @ok="eliminar(item._id, item.estado)">
                              <p class="my-4">Los usuarios con estado "Inactivo" ya no podran interactuar ni ingresar al sistema. Los usuarios activos seguiran interactuando con el sistema.</p>
                              <template #modal-footer="{ ok, cancel }">
                      
                                <!-- Emulate built in modal footer ok and cancel button actions -->
                                <b-button  variant="outline-danger" @click="cancel()">
                                  Cancelar
                                </b-button>
                                <b-button  variant="outline-success" @click="ok()">
                                  Cambiar estado
                                </b-button>
                        
                              </template>
                            </b-modal>
                          </td>
                        </tr>
                      </paginate>
                      <tr v-if="cargar_data">
                        <td colspan="5" class="text-center">
                          <div class="spinner-border mt-5 mb-5" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="card-footer d-flex justify-content-between">
                    <!-- Pagination (prev) -->
                    <ul class="list-pagination-prev pagination pagination-tabs card-pagination">
                      <li class="page-item">
                        <a class="page-link ps-0 pe-4 border-end cursor-pointer" v-on:click="goAnt()">
                          <i class="fe fe-arrow-left me-1"></i> Anterior
                        </a>
                      </li>
                    </ul>

                    <!-- Pagination -->

                    <paginate-links @change="onLangsPageChange" for="empleados" :classes="{
                      ul: [
                        'list-pagination',
                        'pagination',
                        'pagination-tabs',
                        'card-pagination',
                        'cursor-pointer',
                      ],
                      a: ['page'],
                    }"></paginate-links>

                    <!-- Pagination (next) -->
                    <ul class="list-pagination-next pagination pagination-tabs card-pagination">
                      <li class="page-item">
                        <a class="page-link ps-4 pe-0 border-start cursor-pointer" v-on:click="goSig()">
                          Siguiente <i class="fe fe-arrow-right ms-1"></i>
                        </a>
                      </li>
                    </ul>
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
// Importamos los componentes Sidebar y TopNav, axios para realizar solicitudes HTTP y el store de Vuex
import Sidebar from "@/components/Sidebar.vue";
import TopNav from "@/components/TopNav.vue";
import axios from "axios";
import store from "@/store/index";

export default {
  name: "IndexEmpleadoApp",

  data() {
    return {
      empleados: [], // <--- Lista de empleados obtenida del backend
      empleados_const: [], // <--- Lista de empleados para mantener los datos originales
      paginate: ["empleados"], // <--- Lista de elementos a paginar
      currentPage: 1, // <--- Página actual de la paginación
      perPage: 10, // <--- Cantidad de elementos por página en la paginación
      filtro: "", // <--- Filtro para listar empleados
      cargar_data: false, // <--- Indica si se están cargando los datos
    };
  },

  // Hook que se ejecuta antes de que el componente se monte en el DOM
  beforeMount() {
    this.init_data();
  },

  methods: {
    // Método para manejar el cambio de página en la paginación
    onLangsPageChange(toPage, fromPage) {
      // handle here…
      this.currentPage = toPage;
    },
    // Método para ir a la página anterior en la paginación
    goAnt() {
      if (this.currentPage >= 2) {
        this.$refs.empleados.goToPage(this.currentPage--);
      } else {
        this.$refs.empleados.goToPage(1);
      }
    },
    // Método para ir a la página siguiente en la paginación
    goSig() {
      if (this.currentPage <= Math.ceil(this.empleados.length / this.perPage)) {
        this.$refs.empleados.goToPage(this.currentPage++);
      } else {
        this.$refs.empleados.goToPage(
          Math.ceil(this.empleados.length / this.perPage)
        );
      }
    },
    // Método para filtrar los empleados por nombre, apellidos, email o rol
    filtrar() {
      console.log(this.filtro);
      let term = new RegExp(this.filtro, "i");

      // this.empleados = this.empleados_const.filter(item => term.test(item.nombres)|| term.test(item.apellidos)|| term.test(item.email)|| term.test(item.rol));

      this.init_data();
    },
    // Método para inicializar los datos del componente
    init_data() {
      this.cargar_data = true;
      axios
        .get(this.$urlAPI + "/listar_usuario_admin/" + this.filtro, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((resultado) => {
          this.empleados = resultado.data;
          this.empleados_const = this.empleados;
          this.cargar_data = false;
          console.log(this.empleados);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Método para cambiar el estado de un empleado
    eliminar(id, estado) {
      axios.put(this.$urlAPI + '/cambiar_estado_usuario_admin/' + id, { estado: estado }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: store.state.token
        },
      }).then((resultado) => {
        this.init_data();
        this.$notify({
          group: "foo",
          title: "SUCCESS",
          text: "Se cambio el estado del empleado",
          type: "success",
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  components: {
    Sidebar,
    TopNav,
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
