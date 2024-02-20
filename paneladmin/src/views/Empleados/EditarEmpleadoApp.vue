<template>
  <div>
    <Sidebar />
    <div class="main-content">
      <TopNav />

      <template v-if="data">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">
              <!-- Header -->
              <div class="header mt-md-5">
                <div class="header-body">
                  <div class="row align-items-center">
                    <div class="col">
                      <!-- Pretitle -->
                      <h6 class="header-pretitle">empleadoes</h6>

                      <!-- Title -->
                      <h1 class="header-title">Editar empleado</h1>
                    </div>
                  </div>
                  <!-- / .row -->
                  <div class="row align-items-center">
                    <div class="col">
                      <!-- Nav -->
                      <ul class="nav nav-tabs nav-overflow header-tabs">
                        <li class="nav-item">
                          <router-link to="/colaborador" class="nav-link">Todos los empleadoes</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/colaborador/create" class="nav-link">
                            Nuevo empleado</router-link>
                        </li>

                        <li class="nav-item">
                          <router-link to="/colaborador/edit/:id" class="nav-link active">
                            Editar empleado</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form -->

              <div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <!-- First name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label class="form-label"> Nombre </label>

                      <!-- Input -->
                      <input type="text" class="form-control" v-model="empleado.nombres" placeholder="Nombre completo" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Last name -->
                    <div class="form-group">
                      <!-- Label -->
                      <label class="form-label"> Apellidos </label>

                      <!-- Input -->
                      <input type="text" class="form-control" v-model="empleado.apellidos"
                        placeholder="Apellidos completos" />
                    </div>
                  </div>
                  <div class="col-12">
                    <!-- Email address -->
                    <div class="form-group">
                      <!-- Label -->
                      <label class="mb-1"> Correo electrónico </label>

                      <!-- Input -->
                      <input type="email" class="form-control" v-model="empleado.email"
                        placeholder="Correo electrónico" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6">
                    <!-- Birthday -->
                    <div class="form-group">
                      <!-- Label -->
                      <label class="form-label"> Rol </label>

                      <!-- Input -->
                      <select name="" class="form-select" v-model="empleado.rol">
                        <option value="" disabled selected>Seleccionar</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Vendedor">Vendedor</option>
                        <option value="Inventariado">Inventariado</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- / .row -->
                <hr class="my-5" />
                <button type="button" class="btn btn-primary" v-on:click="validar()">
                  Guardar cambios
                </button>
              </div>

              <br /><br />
            </div>
          </div>
          <!-- / .row -->
        </div>
      </template>
      <template v-if="!data">
        <div>
          <ErrorNotFound />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// Importamos los componentes Sidebar, TopNav y ErrorNotFound, así como axios para realizar solicitudes HTTP
import Sidebar from "@/components/Sidebar.vue";
import TopNav from "@/components/TopNav.vue";
import ErrorNotFound from "@/components/ErrorNotFound.vue";
import axios from "axios";

export default {
  name: "EditarempleadoApp",

  data() {
    return {
      empleado: {
        rol: "",// <--- Rol del empleado a editar
      },
      id: this.$route.params.id, // <--- ID del empleado a editar, obtenido de los parámetros de la ruta
      data: false, // <--- Indica si se han cargado los datos del empleado
    };
  },

  methods: {
    // Método para inicializar los datos del componente al montarse
    init_data() {
      // Realizamos una solicitud GET al endpoint de obtención de datos del empleado
      axios
        .get(this.$urlAPI + "/obtener_usuario_admin/" + this.id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          // Actualizamos los datos del empleado con los obtenidos
          if (result.data == "") {
            this.data = false;
          } else {
            this.data = true;
            this.empleado = result.data;
          }
          console.log(this.data);
        })
        .catch((error) => {
          // Manejamos cualquier error que ocurra durante la solicitud
          console.log(error);
        });
    },
    // Método para validar los campos del formulario antes de enviar la solicitud de actualización
    validar() {
      if (!this.empleado.nombres) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese los nombres",
          type: "error",
        });
      } else if (!this.empleado.apellidos) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese los apellidos",
          type: "error",
        });
      } else if (!this.empleado.email) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese los email",
          type: "error",
        });
      } else if (!this.empleado.rol) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese los cargo",
          type: "error",
        });
      } else {
        this.actualizar_empleado();
      }
    },
    // Método para realizar la actualización del empleado
    actualizar_empleado() {
      axios
        .put(
          this.$urlAPI + "/actualizar_usuario_admin/" + this.id,
          this.empleado,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.$store.state.token,
            },
          }
        )
        .then((result) => {
          this.$notify({
            group: "foo",
            title: "SUCCESS",
            text: "Se actualizo correctamente el empleado",
            type: "success",
          });

          this.$router.push({ name: "colaborador-index" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    // Aquí se pueden realizar acciones al montar el componente, como inicializar datos
    console.log(this.id);
  },

  beforeMount() {
    // Llamamos al método para inicializar los datos antes de que el componente se monte
    this.init_data();
  },

  components: {
    Sidebar,
    TopNav,
    ErrorNotFound,
  },
};
</script>
