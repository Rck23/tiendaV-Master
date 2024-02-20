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
                    <h1 class="header-title">Nuevo Empleado</h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <router-link to="/colaborador" class="nav-link">
                          Todos los empleados</router-link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active"> Nuevo empleado </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <!-- First name -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="form-label"> Nombre </label>

                  <!-- Input -->
                  <input type="text" class="form-control" v-model="colaborador.nombres" placeholder="Nombre completo" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- Last name -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="form-label"> Apellidos </label>

                  <!-- Input -->
                  <input type="text" class="form-control" v-model="colaborador.apellidos"
                    placeholder="Apellidos completos" />
                </div>
              </div>
              <div class="col-12">
                <!-- Email address -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="mb-1"> Correo electrónico </label>

                  <!-- Input -->
                  <input type="email" class="form-control" v-model="colaborador.email" placeholder="Correo electrónico" />
                </div>
              </div>

              <div class="col-12 col-md-6">
                <!-- Birthday -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="form-label"> Rol </label>

                  <!-- Input -->
                  <select name="" class="form-select" v-model="colaborador.rol">
                    <option value="" selected disabled>Selecciona Rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Inventariado">Inventariado</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- / .row -->

            <!-- Divider -->

            <hr class="my-5" />

            <!-- Button -->
            <button class="btn btn-primary" type="button" v-on:click="validar()">
              Crear empleado
            </button>

            <br /><br />
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
import axios from "axios";

export default {
  name: "CrearEmpleadoApp",

  data() {
    return {
      colaborador: {
        rol: "", // <--- Rol del colaborador a crear
      },
    };
  },

  methods: {
    // Método para validar los campos del formulario antes de enviar la solicitud de registro
    validar() {
      if (!this.colaborador.nombres) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese el nombre",
          type: "error",
        });
      } else if (!this.colaborador.apellidos) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese los apellidos",
          type: "error",
        });
      } else if (!this.colaborador.email) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese el correo electrónico",
          type: "error",
        });
      } else if (!this.colaborador.rol) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Seleccione un rol",
          type: "error",
        });
      } else {
        this.crear_empleado();
      }
    },
    // Método para realizar el registro del colaborador
    crear_empleado() {
      axios
        .post(this.$urlAPI + "/registro_usuario_admin", this.colaborador, {
          headers: {
            "Content-Type": "application/json",
            'Authorization': this.$store.state.token,
          },
        })
        .then((resultado) => {
          console.log(resultado);
          if (resultado.data.data === undefined) {
            this.$notify({
              group: "foo",
              title: "ERROR",
              text: resultado.data.message,
              type: "error",
            });
          } else {
            this.$notify({
              group: "foo",
              title: "EXITO",
              text: "Empleado creado correctamente",
              type: "success",
            });

            this.$router.push({ name: 'colaborador-index' });
          }
        }).catch((err) => {
          console.log(error);
        });
    },
  },

  mounted() {
    // Aquí se pueden realizar acciones al montar el componente, como inicializar datos
  },
  components: {
    Sidebar,
    TopNav,
  },
};
</script>
