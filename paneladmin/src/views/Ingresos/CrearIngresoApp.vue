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
                                        <h1 class="header-title">Nuevo ingreso</h1>
                                    </div>
                                </div>
                                <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">
                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link class="nav-link " to="/ingreso"> Todos los
                                                    ingresos</router-link>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active">
                                                    Nuevo ingreso</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Proveedor
                                    </label>
                                    <small class="form-text text-muted">
                                        Proveedor encargado del ingreso.
                                    </small>
                                    <!-- Input -->
                                    <select class="form-select mb-3" v-model="ingreso.proveedor">
                                        <option value="" selected disabled>Seleccionar</option>
                                        <option>My first option</option>
                                        <option>Another option</option>
                                        <option>Third option is here</option>
                                    </select>

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        N° comprobante
                                    </label>
                                    <small class="form-text text-muted">
                                        Número de la factura.
                                    </small>
                                    <!-- Input -->
                                    <input type="text" class="form-control" placeholder="5DSF-000154"
                                        v-model="ingreso.ncomprobante">

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Monto total
                                    </label>
                                    <small class="form-text text-muted">
                                        Monto total pagado al proveedor.
                                    </small>
                                    <!-- Input -->
                                    <input type="text" class="form-control" placeholder="546" v-model="ingreso.monto_total">

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                                <!-- Last name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Comprobante
                                    </label>
                                    <small class="form-text text-muted">
                                        Subir comprobante del ingreso.
                                    </small>
                                    <!-- Input -->
                                    <input type="file" class="form-control" v-on:change="uploadComprobante($event)">

                                </div>

                            </div>
                        </div>

                        <hr class="my-5">

                        <div class="row">

                            <div class="col-md-12 mb-2">
                                <h3><b>Productos del ingreso</b></h3>
                            </div>

                            <div class="col-12 col-md-6">

                                <!-- First name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Producto
                                    </label>
                                    <small class="form-text text-muted">
                                        Seleccion del producto.
                                    </small>
                                    <!-- Input -->
                                    <basic-select :options="productos" v-model="producto" :selected-option="producto"
                                        placeholder="Selecciona un producto" @select="producto_seleccionado">
                                    </basic-select>


                                </div>

                            </div>


                            <div class="col-12 col-md-6">

                                <!-- First name -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Variedad
                                    </label>
                                    <small class="form-text text-muted">
                                        Seleccion de variedad.
                                    </small>
                                    <select class="form-select mb-3" v-model="detalle.variedad">
                                        <option value="" selected disabled>Seleccionar</option>
                                        <option :value="item._id" v-for="item in variedades">{{ item.variedad.toUpperCase()
                                        }}
                                            - Cantidad: {{ item.stock }}</option>
                                    </select>


                                </div>

                            </div>


                            <div class="col-12 col-md-6">

                                <!-- Phone -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Precio unidad
                                    </label>
                                    <small class="form-text text-muted">
                                        Precio por unidad pagado.
                                    </small>
                                    <!-- Input -->
                                    <input type="text" class="form-control mb-3" placeholder="0.00"
                                        v-model="detalle.precio_unidad">

                                </div>

                            </div>
                            <div class="col-12 col-md-6">

                                <!-- Birthday -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="form-label">
                                        Cantidad total
                                    </label>
                                    <small class="form-text text-muted">
                                        Cantidad total comprada
                                    </small>
                                    <!-- Input -->
                                    <input type="number" class="form-control mb-3" placeholder="0"
                                        v-model="detalle.cantidad">

                                </div>

                            </div>

                            <div class="col-md-2 mb-5">

                                <button class="btn btn-primary" style="margin-top: 1.8rem!important;"
                                    v-on:click="agregar_detalle()">
                                    Agregar
                                </button>
                            </div>
                        </div> <!-- / .row -->

                        <!-- Button -->
                        <div class="card ">
                            <div class="table-responsive mb-0">
                                <table class="table table-sm table-nowrap card-table">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio unidad</th>
                                            <th>Cantidad</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-base" v-if="detalles.length >= 1">
                                        <tr v-for=" (item, index) in detalles">
                                            <td>
                                                <a href="invoice.html"> {{ item.titulo_producto }}</a>
                                            </td>
                                            <td>
                                                <time datetime="2020-04-24">{{ convertCurrency(item.precio_unidad) }}</time>
                                            </td>
                                            <td>
                                                {{ item.cantidad }}
                                            </td>
                                            <td>

                                                {{ convertCurrency(item.precio_unidad * item.cantidad) }}
                                            </td>
                                            <td>
                                                <button class="btn btn-danger btn-sm"
                                                    v-on:click="quitarDetalle(index, item.precio_unidad * item.cantidad)">Quitar</button>

                                            </td>
                                        </tr>

                                    </tbody>

                                    <tbody class="fs-base" v-if="detalles.length == 0">
                                        <td class="text-center  mb-7" colspan="5">
                                            <h3 class=" text-muted">
                                                No hay detalles en el ingreso 😭
                                            </h3>

                                        </td>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="4">Total</td>
                                            <td>{{ convertCurrency(total) }}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <button class="btn btn-primary mb-7">
                            Crear Ingreso
                        </button>

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
import { BasicSelect } from 'vue-search-select';
import axios from "axios";
import currency_formatter from 'currency-formatter';


export default {
    name: 'CrearIngresoApp',
    components: {
        Sidebar,
        TopNav,
        BasicSelect
    },

    data() {
        return {
            ingreso: {
                proveedor: ''
            },
            detalle: {
                variedad: ''
            },
            detalles: [],


            comprobante: undefined,
            producto: {},
            productos: [],
            variedades: [],
            total: 0
        }
    },

    methods: {
        // Método para manejar la subida del documento como comprobante
        uploadComprobante($event) {
            var documentoImagen;

            if ($event.target.files.length >= 1) {
                documentoImagen = $event.target.files[0];
            }

            if (documentoImagen.size <= 10000000) {
                if (
                    documentoImagen.type == "image/jpg" ||
                    documentoImagen.type == "image/jpeg" ||
                    documentoImagen.type == "image/png" ||
                    documentoImagen.type == "application/pdf" ||
                    documentoImagen.type == "image/webp"
                ) {

                    this.comprobante = documentoImagen;
                    this.ingreso.documento = this.comprobante;

                } else {
                    this.$notify({
                        group: "foo",
                        title: "ERROR",
                        text: "El tipo de documento debe ser: 'pdf' 'jpeg' 'png' 'jpg' o 'webp'",
                        type: "error",
                    });
                    this.comprobante = undefined;
                }
            } else {
                this.$notify({
                    group: "foo",
                    title: "ERROR",
                    text: "El documento no se pudo cargar",
                    type: "error",
                });
                this.comprobante = undefined;
            }
        },

        init_productos() {
            this.productos = [];
            axios.get(this.$urlAPI + '/listar_activos_productos_admin', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: this.$store.state.token,
                },
            }).then((resultado) => {
                console.log(resultado);

                for (var item of resultado.data) {
                    this.productos.push({
                        value: item._id,
                        text: item.titulo
                    });
                }
            }).catch((error) => {
                console.log(error);

            });
        },

        producto_seleccionado(item) {
            this.producto = item;
            this.init_variedades(item.value);
            this.detalle.producto = item.value;
            this.detalle.titulo_producto = item.text;
        },

        init_variedades(id) {
            axios.get(this.$urlAPI + '/obtener_variedades_producto/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                this.variedades = result.data;
                console.log(this.variedades);
            });
        },

        agregar_detalle() {
            if (!this.detalle.producto) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Seleccione el producto',
                    type: 'error'
                });
            } else if (!this.detalle.variedad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Seleccione la variedad',
                    type: 'error'
                });
            } else if (!this.detalle.precio_unidad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el precio por unidad',
                    type: 'error'
                });
            } else if (!this.detalle.cantidad) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingresar la cantidad a ingresar',
                    type: 'error'
                });
            } else {
                this.detalles.push(this.detalle);

                let subtotal = this.detalle.precio_unidad * this.detalle.cantidad;
                this.total = this.total + subtotal;

                this.detalle = {
                    variedad: ''
                }
                this.producto = {};
            }
            console.log(this.detalles);
        },

        convertCurrency(number) {
            return currency_formatter.format(number, { code: 'USD' });
        },

        
        quitarDetalle(idx, subtotal) {
            this.detalles.splice(idx, 1);
            this.total = this.total - subtotal;
        },
    },

    beforeMount() {
        this.init_productos();
    },

}
</script>
  