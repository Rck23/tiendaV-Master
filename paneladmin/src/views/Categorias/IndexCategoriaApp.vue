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
                    <h6 class="header-pretitle">Categorias</h6>

                    <!-- Title -->
                    <h1 class="header-title">Categorias</h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12">
                <button v-if="!seccion_form" class="btn btn-dark btn-sm" v-on:click="seccion_form = true;">Nueva categoria</button>
                <button v-if="seccion_form" class="btn btn-dark btn-sm" v-on:click="seccion_form = false;">Ocultar</button>
              </div>

              <div class="col-12 mt-3" v-if="seccion_form">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    v-model="nueva_categoria"
                  />
                  <button
                    class="btn btn-dark"
                    type="button"
                   v-on:click="crear_categoria()"
                  >
                    Crear
                  </button>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <ul class="list-group list-group-flush list my-n3">
                  <li class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <a href="profile-posts.html" class="avatar">
                          <img
                            src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                            alt="..."
                            class="avatar-img rounded-circle"
                          />
                        </a>
                      </div>
                      <div class="col ms-n2">
                        <!-- Title -->
                        <h4 class="mb-1 name">
                          <a href="profile-posts.html">Miyah Myles</a>
                        </h4>

                        <!-- Time -->
                        <p class="small mb-0">
                          <span class="text-success">●</span> Online
                        </p>
                      </div>
                      <div class="col-auto">
                        <!-- Button -->
                        <a
                          href="#!"
                          class="btn btn-sm btn-danger text-white"
                          style="margin-right: 0.5rem"
                        >
                          Quitar
                        </a>
                        <a href="#!" style="margin-right: 0.5rem" class="btn btn-sm btn-dark text-white">
                          Subcategoria
                        </a>
                        <a href="#!" class="btn btn-sm btn-secondary text-white">
                          Desactivar/Activar
                        </a>

                      </div>
                    </div>
                    <!-- / .row -->
                    <div class="row mb-3">
                      <div class="col-12">
                        <ul class="list-group mt-4">
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <a href="profile-posts.html" class="avatar">
                          <img
                            src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                            alt="..."
                            class="avatar-img rounded-circle"
                          />
                        </a>
                      </div>
                      <div class="col ms-n2">
                        <!-- Title -->
                        <h4 class="mb-1 name">
                          <a href="profile-posts.html">Ryu Duke</a>
                        </h4>

                        <!-- Time -->
                        <p class="small mb-0">
                          <span class="text-success">●</span> Online
                        </p>
                      </div>
                      <div class="col-auto">
                        <a
                          href="#!"
                          class="btn btn-sm btn-danger text-white"
                          style="margin-right: 1rem"
                        >
                          Quitar
                        </a>
                        <a href="#!" class="btn btn-sm btn-dark text-white">
                          Subcategoria
                        </a>
                      </div>
                    </div>
                    <!-- / .row -->
                    <div class="row mb-3">
                      <div class="col-12">
                        <ul class="list-group mt-4">
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <a href="profile-posts.html" class="avatar">
                          <img
                            src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                            alt="..."
                            class="avatar-img rounded-circle"
                          />
                        </a>
                      </div>
                      <div class="col ms-n2">
                        <!-- Title -->
                        <h4 class="mb-1 name">
                          <a href="profile-posts.html">Glen Rouse</a>
                        </h4>

                        <!-- Time -->
                        <p class="small mb-0">
                          <span class="text-warning">●</span> Busy
                        </p>
                      </div>
                      <div class="col-auto">
                        <a
                          href="#!"
                          class="btn btn-sm btn-danger text-white"
                          style="margin-right: 1rem"
                        >
                          Quitar
                        </a>
                        <a href="#!" class="btn btn-sm btn-dark text-white">
                          Subcategoria
                        </a>
                      </div>
                    </div>
                    <!-- / .row -->
                    <div class="row mb-3">
                      <div class="col-12">
                        <ul class="list-group mt-4">
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            Morbi leo risus
                            <a
                              href="#!"
                              class="btn btn-sm btn-danger text-white"
                            >
                              Quitar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
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
import axios from 'axios';

export default {
  name: "IndexCategoriaApp",
  data() {
    return {
        seccion_form: false, 
        nueva_categoria: '', 
    }
  },

  methods: {
    crear_categoria(){
      console.log(this.nueva_categoria);
      axios.post(this.$urlAPI + "/crear_categoria_admin",{titulo: this.nueva_categoria}, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": this.$store.state.token,
          },
        }).then((resultado) => {

          if (resultado.data.message) {
            this.$notify({
              group: "foo",
              title: "ERROR",
              text: resultado.data.message,
              type: "error",
            });
          }else{
            this.nueva_categoria = ''; 
            this.$notify({
              group: "foo",
              title: "EXITO",
              text: "Categoria creada correctamente",
              type: "success",
            });
          }
          
        }).catch((err) => {
          
        });;   
        
    }
  },
  components: {
    Sidebar,
    TopNav,
  },
};
</script>
