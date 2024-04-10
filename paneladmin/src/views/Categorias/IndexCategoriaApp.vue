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
                    <h1 class="header-title">
                      <b>Categorias</b>
                    </h1>
                  </div>
                </div>
                <!-- / .row -->
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-12">
                <button
                  v-if="!section_form"
                  class="btn text-white"
                  style="background: #1f49b6; border-radius: 10px"
                  v-on:click="section_form = true"
                >
                  Nueva categoria
                </button>
                <button
                  v-if="section_form"
                  class="btn text-white"
                  style="background: #f19000; border-radius: 10px"
                  v-on:click="section_form = false"
                >
                  Ocultar
                </button>
              </div>
              <div class="col-12 mt-3" v-if="section_form">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    
                    style=" border-radius: 10px"
                    placeholder="Nueva categoria"
                    v-model="nueva_categoria"
                  />
                  <button class="btn text-white" style="background: #1f49b6; border-radius: 10px" v-on:click="crear_categoria()">
                    Crear categoría
                  </button>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <ul class="list-group list-group-flush list my-n3">
                  <li class="list-group-item" v-for="item in categorias">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <!-- Avatar -->
                        <a class="avatar">
                          <img
                            src="/assets/img/categoria.png"
                            alt="categorias"
                            class="avatar-img rounded-circle"
                          />
                        </a>
                      </div>
                      <div class="col ms-n2">
                        <!-- Title -->
                        <h4 class="mb-1 name">
                          <a>
                            {{ item.categoria.titulo }} ({{ item.nproductos }}
                            Productos)
                          </a>
                        </h4>

                        <!-- Time -->
                        <p class="small mb-0" v-if="item.categoria.estado">
                          <span class="text-success">●</span> Publicado
                        </p>

                        <p class="small mb-0" v-if="!item.categoria.estado">
                          <span class="text-danger">●</span> Oculto
                        </p>
                      </div>
                      <div class="col-auto">
                        <!-- Button -->
                        <a
                          v-b-modal="'estado-' + item.categoria._id"
                          v-if="item.categoria.estado"
                          class="btn btn-sm text-white"
                          style="margin-right: 1rem; border-radius: 10px; background: #f19000"
                        >
                          Ocultar
                        </a>
                        <a
                          v-b-modal="'estado-' + item.categoria._id"
                          v-if="!item.categoria.estado"
                          class="btn btn-sm text-white"
                          style="background: #1f49b6; margin-right: 1rem; border-radius: 10px"
              
                        >
                          Mostrar
                        </a>

                        <button
                          v-on:click="openInputGroup(item.categoria._id)"
                          class="btn btn-sm text-white"
                          style="background: #1f49b6; margin-right: 1rem; border-radius: 10px"
                        >
                          Subcategoria
                        </button>

                        <b-modal
                          centered
                          :id="'estado-' + item.categoria._id"
                          title-html="<h4 class='card-header-title'><b>Desactivar/Activar Usuario</b></h4>"
                          @ok="
                            cambiar_estado(
                              item.categoria._id,
                              item.categoria.estado
                            )
                          "
                        >
                          <p class="my-4">
                            Las categorias con estado "Oculto" no se mostraran en los productos.
                          </p>
                          <template #modal-footer="{ ok, cancel }">
                            <!-- Emulate built in modal footer ok and cancel button actions -->
                            <b-button
                              variant="outline-danger"
                              @click="cancel()"
                            >
                              Cancelar
                            </b-button>
                            <b-button variant="outline-success" @click="ok()">
                              Cambiar estado
                            </b-button>
                          </template>
                        </b-modal>
                      </div>
                    </div>

                    <div
                      class="input-group mt-4 hide_input content_group"
                      :id="'content_' + item.categoria._id"
                    >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nueva categoria"
                        v-model="nueva_subcategoria"
                        style="border-radius: 10px;"
                      />
                      <button
                      class="btn text-white"
                          style="background: #f19000; margin-right: 1rem; border-radius: 10px"
                        v-on:click="crear_subcategoria()"
                      >
                        Crear subcategoría
                      </button>
                    </div>

                    <!-- / .row -->
                    <div class="row mb-3">
                      <div class="col-12">
                        <ul class="list-group mt-3">
                          <li
                            v-for="subitem in item.subcategorias"
                            class="list-group-item d-flex justify-content-between align-items-center"
                            style="font-size: 0.8rem; padding: 0.5rem 1.5rem"
                          >
                            {{ subitem.titulo }}
                            <a
                          
                              v-b-modal="'delete-' + subitem._id"
                              class="btn btn-sm btn-danger text-white"
                            
                              style="cursor: pointer;  margin-right: 1rem; border-radius: 10px"
                            >
                              Eliminar
                            </a>

                            <b-modal
                              centered
                              :id="'delete-' + subitem._id"
                              title-html="<h4 class='card-header-title'><b>Eliminar definitivamente</b></h4>"
                              @ok="eliminar_subcategoria(subitem._id)"
                            >
                              <p class="my-4">
                                ¿Quieres eliminar la subcategoria
                                <b>{{ subitem.titulo }}</b
                                >?
                              </p>
                              <template #modal-footer="{ ok, cancel }">
                                <!-- Emulate built in modal footer ok and cancel button actions -->
                                <b-button
                                  variant="outline-danger"
                                  @click="cancel()"
                                >
                                  Cancelar
                                </b-button>
                                <b-button
                                  variant="outline-success"
                                  @click="ok()"
                                >
                                  Eliminar
                                </b-button>
                              </template>
                            </b-modal>
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

<style>
.hide_input {
  display: none;
}
.show_input {
  display: block;
}
</style>

<script>
// @ is an alias to /src

import Sidebar from "@/components/Sidebar.vue";
import TopNav from "@/components/TopNav.vue";
import axios from "axios";
import $ from "jquery";

export default {
  name: "IndexCategoriaApp",
  data() {
    return {
      section_form: false,
      nueva_categoria: "",
      nueva_subcategoria: "",
      idcategoria: "",
      categorias: [],
    };
  },
  methods: {
    crear_categoria() {
      if (this.nueva_categoria) {
        axios
          .post(
            this.$urlAPI + "/crear_categoria_admin",
            { titulo: this.nueva_categoria },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: this.$store.state.token,
              },
            }
          )
          .then((result) => {
            if (result.data.message) {
              this.$notify({
                group: "foo",
                title: "ERROR",
                text: result.data.message,
                type: "error",
              });
            } else {
              this.nueva_categoria = "";
              this.$notify({
                group: "foo",
                title: "SUCCESS",
                text: "Se registró la categoria.",
                type: "success",
              });
            }
          });
      } else {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese el nombre de la categoria ",
          type: "error",
        });
      }
    },
    init_data() {
      axios
        .get(this.$urlAPI + "/listar_categorias_admin", {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          console.log(result);
          this.categorias = result.data;
        });
    },
    openInputGroup(id) {
      setTimeout(() => {
        this.idcategoria = id;
        this.nueva_subcategoria = "";
        $(".content_group").addClass("hide_input");
        $("#content_" + id).removeClass("hide_input");
      }, 50);
    },
    crear_subcategoria() {
      if (this.nueva_subcategoria) {
        axios
          .post(
            this.$urlAPI + "/crear_subcategoria_admin",
            {
              titulo: this.nueva_subcategoria,
              categoria: this.idcategoria,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: this.$store.state.token,
              },
            }
          )
          .then((result) => {
            if (result.data.message) {
              this.$notify({
                group: "foo",
                title: "ERROR",
                text: result.data.message,
                type: "error",
              });
            } else {
              this.nueva_subcategoria = "";
              this.$notify({
                group: "foo",
                title: "SUCCESS",
                text: "Se registró la subcategoria.",
                type: "success",
              });
              this.init_data();
            }
          });
      } else {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Ingrese el nombre de la subcategoria ",
          type: "error",
        });
      }
    },
    eliminar_subcategoria(id) {
      axios
        .delete(this.$urlAPI + "/eliminar_subcategoria_admin/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$token,
          },
        })
        .then((result) => {
          this.init_data();
          this.$notify({
            group: "foo",
            title: "SUCCESS",
            text: "Se eliminó la subcategoria",
            type: "success",
          });
        });
    },

    cambiar_estado(id,estado){
        axios.put(this.$urlAPI+'/cambiar_estado_producto_admin/'+id,{estado: estado},{
            headers:{
            'Content-Type': 'application/json',
            'Authorization': this.$token
            }
        }).then((result )=>{
            this.init_data();
            this.$notify({
                group: 'foo',
                title: 'SUCCESS',
                text: 'Se cambio el estado de la categoria',
                type: 'success'
            });

        });
    }
  },
  beforeMount() {
    this.init_data();
  },
  components: {
    Sidebar,
    TopNav,
  },
};
</script>
