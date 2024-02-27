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
                                        <h1 class="header-title">Galeria de productos</h1>
                                    </div>
                                </div>
                                <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">
                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/producto" class="nav-link">
                                                    Todos los productos</router-link>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active"> Galeria de producto </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <template v-if="load_data">
                            <div class="row">
                                <div class="text-center col-12">
                                    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template v-if="!load_data">
                            <div>
                                <div class="mb-7" v-if="data">
                                    <div class="row">
                                        <div class="col-12 col-md-12">

                                            <!-- Email address -->
                                            <div class="form-group">

                                                <!-- Label -->
                                                <label class="mb-1">
                                                    Imagen
                                                </label>



                                                <!-- Input -->
                                                <div class="input-group mb-3">
                                                    <input type="file" id="input_file" class="form-control"
                                                        placeholder="Selecciona la imagen"
                                                        v-on:change="uploadImage($event)">
                                                    <button class="btn btn-primary" v-on:click="subir_imagen()">
                                                        <i class="fe fe-upload"></i>
                                                    </button>
                                                </div>
                                                <!-- Form text -->
                                                <small class="form-text text-muted">
                                                    Sube un maximo de 5 imagenes para la galeria del producto.
                                                </small>
                                            </div>

                                        </div>

                                    </div> <!-- / .row -->

                                    <div class="row listAlias" v-if="!load_galeria">
                                        <div class="col-12 col-md-6 col-xl-4" v-for="item in galeria">
                                            <div class="card">
                                                <a href="">
                                                    <img :src="$urlAPI + '/obtener_galeria_producto/' + item.imagen" alt="..."
                                                        class="card-img-top">
                                                </a>
                                                <div class="card-footer card-footer-boxed">
                                                    <div class="row">
                                                        <div class="col text-center">
                                                            <a v-b-modal="'delete-' + item._id" class="text-danger"
                                                                style="cursor: pointer;">Eliminar imagen</a>

                                                            <b-modal centered :id="'delete-' + item._id"
                                                                title-html="<h4 class='card-header-title'><b>Eliminar Imagen</b></h4>"
                                                                @ok="eliminar(item._id)">
                                                                <p class="my-4">La imagen se eliminara definitivamente</p>
                                                                <template #modal-footer="{ ok, cancel }">

                                                                    <!-- Emulate built in modal footer ok and cancel button actions -->
                                                                    <b-button variant="outline-danger" @click="cancel()">
                                                                        Cancelar
                                                                    </b-button>
                                                                    <b-button variant="outline-success" @click="ok()">
                                                                        Aceptar
                                                                    </b-button>

                                                                </template>
                                                            </b-modal>
                                                        </div>

                                                    </div> <!-- / .row -->
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row mt-5" v-if="load_galeria">
                                        <div class="clo-12 text-center">
                                            <img src="/assets/img/reloj.gif" style="width: 80px;" />
                                        </div>
                                    </div>

                                </div>

                                <template v-if="!data">
                                    <div>
                                        <ErrorNotFound />
                                    </div>
                                </template>

                            </div>
                        </template>

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
import ErrorNotFound from "@/components/ErrorNotFound.vue";
import axios from "axios";
import $ from "jquery";

export default {
    name: 'GaleriaProductoApp',
    components: {
        Sidebar,
        TopNav,
        ErrorNotFound
    },

    data() {
        return {
            imagen: undefined,
            str_imagen: '',
            data: false,
            load_data: true,
            load_galeria: true,
            galeria: [],
        }
    },

    methods: {
        // Método para inicializar los datos del componente al montarse
        init_data() {

            this.load_data = true;
            // Realizamos una solicitud GET al endpoint de obtención de datos del producto
            axios
                .get(this.$urlAPI + "/obtener_producto_admin/" + this.$route.params.id, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: this.$store.state.token,
                    },
                })
                .then((result) => {
                    // Actualizamos los datos del producto con los obtenidos
                    if (result.data == "") {
                        this.data = false;
                    } else {
                        this.data = true;
                        this.producto = result.data;
                        this.str_imagen = this.$urlAPI + '/obtener_portada_producto/' + this.producto.portada;
                    }
                    this.load_data = false;

                })
                .catch((error) => {
                    // Manejamos cualquier error que ocurra durante la solicitud
                    console.log(error);
                });
        },

        // Método para manejar la subida de la imagen de portada
        uploadImage($event) {
            var imagen;

            if ($event.target.files.length >= 1) {
                imagen = $event.target.files[0];
            }

            if (imagen.size <= 1000000) {
                if (
                    imagen.type == "image/jpg" ||
                    imagen.type == "image/jpeg" ||
                    imagen.type == "image/png" ||
                    imagen.type == "image/webp"
                ) {
                    this.str_imagen = URL.createObjectURL(imagen);
                    this.imagen = imagen;

                } else {
                    this.$notify({
                        group: "foo",
                        title: "ERROR",
                        text: "La imagen debe ser tipo: 'jpeg' 'png' 'jpg' o 'webp'",
                        type: "error",
                    });
                    this.imagen = undefined;
                    $('#input_file').val('');
                }
            } else {
                this.$notify({
                    group: "foo",
                    title: "ERROR",
                    text: "La imagen debe ser inferior a 1Mb",
                    type: "error",
                });
                this.imagen = undefined;
                $('#input_file').val('');
            }
        },


        subir_imagen() {
            if (this.imagen == undefined) {
                this.$notify({
                    group: "foo",
                    title: "ERROR",
                    text: "Debes subir una imagen",
                    type: "error",
                });
            } else {
                var fm = new FormData();

                fm.append('producto', this.$route.params.id);
                fm.append('imagen', this.imagen); // IMAGEN

                axios.post(this.$urlAPI + '/subir_imagen_producto_admin', fm, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': this.$store.state.token
                    },
                }).then((resultado) => {
                    console.log(resultado);
                    if (resultado.data.message) {
                        this.$notify({
                            group: "foo",
                            title: "ERROR",
                            text: resultado.data.message,
                            type: "error",
                        });

                    } else {
                        this.$notify({
                            group: "foo",
                            title: "Exito!",
                            text: 'Se subio correctamente la imagen',
                            type: "success",
                        });
                        this.init_galeria();
                    }


                }).catch((error) => {
                    console.log(error);

                });
            }
        },

        init_galeria() {

            this.load_galeria = true;
            // Realizamos una solicitud GET al endpoint de obtención de datos del producto
            axios
                .get(this.$urlAPI + "/obtener_toda_galeria_producto_admin/" + this.$route.params.id, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: this.$store.state.token,
                    },
                })
                .then((result) => {
                    console.log(result);
                    this.galeria = result.data;
                    this.load_galeria = false;

                })
                .catch((error) => {
                    // Manejamos cualquier error que ocurra durante la solicitud
                    console.log(error);
                });
        },

        eliminar(id) {

            axios
                .delete(this.$urlAPI + "/eliminar_galeria_producto_admin/" + id, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: this.$store.state.token,
                    },
                })
                .then((result) => {

                    if (result.data.message) {
                        this.$notify({
                            group: "foo",
                            title: "ERROR!",
                            text: result.data.message,
                            type: "error",
                        });
 
                    } else {

                        this.$notify({
                            group: "foo",
                            title: "Exito!",
                            text: 'Se elimino la imagen',
                            type: "success",
                        });
                        this.init_galeria();
                    }

                })
                .catch((error) => {
                    // Manejamos cualquier error que ocurra durante la solicitud
                    console.log(error);
                });
        }
    },

    beforeMount() {
        this.init_data();
        this.init_galeria();

    },
}
</script>