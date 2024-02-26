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
                                                <router-link class="nav-link" to="/ingreso/create"> Nuevo
                                                    ingreso</router-link>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="col-12 col-md-6">

                               
                                <div class="form-group">

                               
                                    <label class="form-label">
                                        Proveedor
                                    </label>
                                    <small class="form-text text-muted">
                                        Proveedor encargado del ingreso.
                                    </small>
                               
                                    <select class="form-select mb-3" v-model="ingreso.proveedor">
                                        <option value="" selected disabled>Seleccionar</option>
                                        <option>My first option</option>
                                        <option>Another option</option>
                                        <option>Third option is here</option>
                                    </select>

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                            
                                <div class="form-group">

                       
                                    <label class="form-label">
                                        N° comprobante
                                    </label>
                                    <small class="form-text text-muted">
                                        Número de la factura.
                                    </small>
                               
                                    <input type="text" class="form-control" placeholder="5DSF-000154"
                                        v-model="ingreso.ncomprobante">

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                        
                                <div class="form-group">

                        
                                    <label class="form-label">
                                        Monto total
                                    </label>
                                    <small class="form-text text-muted">
                                        Monto total pagado al proveedor.
                                    </small>
                             
                                    <input type="text" class="form-control" placeholder="546" v-model="ingreso.monto_total">

                                </div>

                            </div>

                            <div class="col-12 col-md-6">

                         
                                <div class="form-group">

                                    <label class="form-label">
                                        Comprobante
                                    </label>
                                    <small class="form-text text-muted">
                                        Subir comprobante del ingreso.
                                    </small>
                                
                                    <input type="file" class="form-control" v-on:change="uploadComprobante($event)">

                                </div>

                            </div>
                        </div>

                        <hr class="my-5">

                        <div class="row">

                            <div class="col-md-12 mb-4">
                                <h3><b>Productos del ingreso</b></h3>
                            </div>

                            <div class="col-12 col-md-4">

                          
                                <div class="form-group">

                              
                                    <label class="form-label">
                                        Producto
                                    </label>
                                
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Buscar producto">
                                        <button class="btn btn-primary">
                                            <i class="fe fe-search"></i>
                                        </button>
                                    </div>

                                </div>

                            </div>


                            <div class="col-12 col-md-3">

                              
                                <div class="form-group">

                             
                                    <label class="form-label">
                                        Precio unidad
                                    </label>
                            
                                    <input type="text" class="form-control mb-3" placeholder="0.00">

                                </div>

                            </div>
                            <div class="col-12 col-md-3">

                            
                                <div class="form-group">

                                 
                                    <label class="form-label">
                                        Cantidad total
                                    </label>
                                  
                                    <input type="number" class="form-control mb-3" placeholder="0">

                                </div>

                            </div>

                            <div class="col-md-2">

                                <button class="btn btn-primary" style="margin-top: 1.8rem!important;">
                                    Agregar
                                </button>
                            </div>
                        </div>

                     
                        <div class="card ">
                            <div class="table-responsive mb-0">
                                <table class="table table-sm table-nowrap card-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Fecha</th>
                                            <th>Monto</th>
                                            <th>Estatus</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-base">
                                        <tr>
                                            <td>
                                                <a href="invoice.html"> #10395</a>
                                            </td>
                                            <td>
                                                <time datetime="2020-04-24">Apr. 24, 2020</time>
                                            </td>
                                            <td>
                                                $29.00
                                            </td>
                                            <td>
                                                <button class="btn btn-danger btn-sm">Eliminar</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <button class="btn btn-primary mb-7">
                            Crear Ingreso
                        </button> -->

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

export default {
    name: 'CrearIngresoApp',
    components: {
        Sidebar,
        TopNav
    },

    data() {
        return {
            ingreso: {
                proveedor: ''
            },
            comprobante: undefined,
        }
    },

    methods: {
        // Método para manejar la subida del documento como comprobante
        uploadComprobante($event) {
            var documento;

            if ($event.target.files.length >= 1) {
                documento = $event.target.files[0];
            }

            if (documento.size <= 10000000) {
                if (
                    documento.type == "image/jpg" ||
                    documento.type == "image/jpeg" ||
                    documento.type == "image/png" ||
                    documento.type == "application/pdf" ||
                    documento.type == "image/webp"
                ) {

                    this.comprobante = documento;
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
    },

}
</script>
  