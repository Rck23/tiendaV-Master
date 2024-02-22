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
                    <h1 class="header-title">Nuevo producto</h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                    
                        <router-link to="/producto" class="nav-link ">
                          Todos los productos</router-link>
                      </li>
                      <li class="nav-item ">
                        <a  class="nav-link active">
                          Nuevo producto</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="row justify-content-between align-items-center">
                <div class="col">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <!-- Avatar -->
                      <div class="avatar">
                        <img class="avatar-img rounded" :src="str_imagen" alt="Imagen portada" />
                      </div>
                    </div>
                    <div class="col ms-n2">
                      <!-- Heading -->
                      <h4 class="mb-1">
                        <b>Portada</b>
                      </h4>

                      <!-- Text -->
                      <small class="text-muted">
                        PNG. WEBP, JPEG o JPG que no pese más de 1MB.
                      </small>
                    </div>
                  </div>
                  <!-- / .row -->
                </div>
                <div class="col-auto">
                  <!-- Button -->

                  <label for="file-upload" class="btn btn-sm btn-primary">
                    Subir imagen
                  </label>
                  <input style="display: none" id="file-upload" type="file" v-on:change="uploadImage($event)" />
                </div>
              </div>
              <!-- / .row -->

              <!-- Divider -->
              <hr class="my-5" />

              <div class="row">
                <div class="col-12 col-md-6">
                  <!-- Email address -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class="mb-1"> Título del producto </label>

                
                    <!-- Input -->
                    <input type="text" v-model="producto.titulo" class="form-control" placeholder="Título del producto" />
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <!-- First name -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class=""> Categoria </label>

                    <!-- Input -->
                    <select name="" class="form-select" v-model="producto.categoria">
                      <option value="" disabled selected>Seleccionar</option>
                      <option value="Categoria 1">Categoria 1</option>
                      <option value="Categoria 2">Categoria 2</option>
                      <option value="Categoria 3">Categoria 3</option>
                    </select>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <!-- Last name -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class="form-label"> Variedad </label>

                    <!-- Input -->
                    <input type="text" class="form-control" placeholder="Variedades..." 
                    v-model="producto.str_variedad" />
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <!-- Last name -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class="form-label"> Precio </label>

                    <!-- Input -->
                    <input type="number" class="form-control" placeholder="Precio" v-model="producto.precio" />
                  </div>
                </div>

                <div class="col-12 col-md-12">
                  <!-- Phone -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class="form-label"> Descripción </label>

                    <!-- Input -->
                    <textarea class="form-control" id="" rows="3" placeholder="Descripción del producto..."
                      v-model="producto.extracto"></textarea>
                  </div>
                </div>
              </div>
              <!-- / .row -->

              <div class="row">
                <div class="col-12 col-md-6">
                  <!-- Public profile -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class="mb-1"> Producto publicado </label>

                    <!-- Form text -->
                    <small class="form-text text-muted">
                        Si esta activado el producto aparece en la página principal el ecommerce, caso contrario no aparece entre los productos.
                      </small>

                    <div class="row">
                      <div class="col-auto">
                        <!-- Switch -->
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="switchOne" v-model="producto.estado" />
                          <label class="form-check-label" for="switchOne"></label>
                        </div>
                      </div>
                      <div class="col ms-n2">
                        <!-- Help text -->
                        <small class="text-muted">  No disponible o Disponible </small>
                      </div>
                    </div>
                    <!-- / .row -->
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <!-- Allow for additional Bookings -->
                  <div class="form-group">
                    <!-- Label -->
                    <label class="mb-1"> En descuento </label>

                    <!-- Form text -->
                    <small class="form-text text-muted">
                      Si esta activado el producto aparece en la sección de descuentos.
                    </small>

                    <div class="row">
                      <div class="col-auto">
                        <!-- Switch -->
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="switchTwo" v-model="producto.descuento" />
                          <label class="form-check-label" for="switchTwo"></label>
                        </div>
                      </div>
                      <div class="col ms-n2">
                        <!-- Help text -->
                        <small class="text-muted">
                          Activar/Desactivar Descuento
                        </small>
                      </div>
                    </div>
                    <!-- / .row -->
                  </div>
                </div>
              </div>
              <!-- / .row -->

              <!-- Divider -->
              <hr class="mt-4 mb-5" />

              <!-- Button -->
              <button class="btn btn-primary mb-10" v-on:click="validar()">
                Crear producto
              </button>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
    </div>
  </div>
</template>

<script>
// Importamos los componentes Sidebar y TopNav, así como axios para realizar solicitudes HTTP
import Sidebar from "@/components/Sidebar.vue";
import TopNav from "@/components/TopNav.vue";
import axios from "axios";

export default {
  name: "CrearProductoApp",
  components: {
    Sidebar,
    TopNav,
  },
  data() {
    return {
      str_imagen:
        "https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg",
      producto: {
        categoria: "", // <--- Categoría del producto
        estado: false, // <--- Estado del producto (activo o inactivo)
        descuento: false, // <--- Indica si el producto tiene descuento
        portada: undefined, // <--- Imagen de portada del producto
      },
      portada: undefined, // <--- Variable para almacenar la imagen de portada seleccionada
    };
  },
  methods: {
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
          this.portada = imagen;

          this.producto.portada = this.portada;
        } else {
          this.$notify({
            group: "foo",
            title: "ERROR",
            text: "La imagen debe ser tipo: 'jpeg' 'png' 'jpg' o 'webp'",
            type: "error",
          });
          this.portada = undefined; 
        }
      } else {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "La imagen debe ser inferior a 1Mb",
          type: "error",
        });
        this.portada = undefined; 
      }
    },
    // Método para validar los campos del formulario antes de enviar la solicitud de registro
    validar() {

      if (!this.producto.titulo) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "El titulo es obligatorio",
          type: "error",
        });
      } else if (!this.producto.categoria) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "La categoria es obligatoria",
          type: "error",
        });
      } else if (!this.producto.precio) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "El precio es obligatorio",
          type: "error",
        });
      } else if (!this.producto.extracto) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "El extracto es obligatorio",
          type: "error",
        });
      } else if (!this.producto.str_variedad) {
          this.$notify({
            group: "foo",
            title: "ERROR",
            text: "El campo variedad es obligatorio",
            type: "error",
          });
        } else if (this.producto.portada == undefined) {
        this.$notify({
          group: "foo",
          title: "ERROR",
          text: "Selecciona una imagen de portada",
          type: "error",
        });
      } else {
        this.registro();
      }
    },
    // Método para realizar el registro del producto
    registro() {
      var fm = new FormData();

      fm.append('titulo', this.producto.titulo);
      fm.append('categoria', this.producto.categoria);
      fm.append('precio', this.producto.precio);
      fm.append('extracto', this.producto.extracto);
      fm.append('estado', this.producto.estado);
      fm.append('descuento', this.producto.descuento);
      fm.append('str_variedad', this.producto.str_variedad);
      fm.append('portada', this.producto.portada); // IMAGEN

      axios.post(this.$urlAPI + '/registro_producto_admin', fm, {
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
            
           }else{
            this.$notify({
            group: "foo",
            title: "Exito!",
            text: 'Producto creado exitosamente',
            type: "success",
          });
           }

           this.$router.push({name: 'producto-index'})

      }).catch((error) => {
        console.log(error);

      });;
    }
  },
};
</script>
