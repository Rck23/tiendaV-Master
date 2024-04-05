<template>
  <div style="background: #fbfbfb" class="pb-5">
    <section class="hero" style="margin-top: 8rem !important">
      <div class="container">
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading">Tienda</h1>
          <div class="row">
            <div class="col-xl-8 offset-xl-2">
              <p class="lead text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <!-- Grid -->
        <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
          <header class="product-grid-header">
            <div class="me-3 mb-3">
              Mostrando
              <strong
                >{{ currentPage }}-<span
                  v-if="currentPage * perPage > productos.length"
                  >{{ productos.length }}</span
                ><span v-if="currentPage * perPage <= productos.length">{{
                  currentPage * perPage
                }}</span>
              </strong>
              de <strong>{{ productos.length }} </strong>productos
            </div>

            <div class="me-3 mb-3">
              <span class="me-2">Por página</span>
              <a
                class="product-grid-header-show"
                v-bind:class="{ active: perPage == 12 }"
                style="cursor: pointer"
                v-on:click="setPerPage(12)"
                >12
              </a>
              <a
                class="product-grid-header-show"
                v-bind:class="{ active: perPage == 18 }"
                style="cursor: pointer"
                v-on:click="setPerPage(18)"
                >18
              </a>
            </div>

            <div class="mb-3 d-flex align-items-center">
              <span class="d-inline-block me-2">Ordenar</span>
              <select
                class="form-select w-auto border-0"
                v-model="sort_by"
                v-on:change="setSortBy()"
              >
                <option value="Defecto" selected>Defecto</option>
                <option value="Precio +-">Precio mayor a menor</option>
                <option value="Precio -+">Precio menor a mayor</option>
              </select>
            </div>
          </header>
          <div class="row" id="my-table" >
            <!-- product-->
            <div class="col-lg-3 col-md-4 col-6"  v-for="item in ListaProductos">
                <router-link :to="{name: 'show-producto', params:{slug: item.slug}}">

                  <div class="product" >
                <div class="product-image">
                  <div class="ribbon ribbon-danger" v-if="item.descuento">
                    Oferta
                  </div>
                  <img
                    class="img-fluid"
                   
                    :src="$urlAPI + '/obtener_portada_producto/' + item.portada"
                    alt="producto"
                  />

                  <div class="product-hover-overlay">
                    <a
                      class="product-hover-overlay-link"
                      href="detail.html"
                    ></a>
                  </div>
                </div>
                <div class="py-2" >
                  <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                  <h3 class="h6 text-uppercase mb-1">
                    <a class="text-dark" href="detail.html">{{
                      item.titulo
                    }}</a>
                  </h3>
                  <span class="text-muted">{{
                    convertCurrency(item.precio)
                  }}</span>
                </div>
              </div>
                </router-link>
            </div>
            <!-- /product-->
          </div>
          <!-- Pagination-->
          <div class="d-flex justify-content-center">
            <b-pagination
              v-model="currentPage"
              pills
              :total-rows="productos.length"
              :per-page="perPage"
              aria-controls="productoPag"
            ></b-pagination>
          </div>
        </div>
        <!-- / Grid End-->
        <!-- Sidebar-->
        <div class="sidebar col-xl-3 col-lg-4 order-lg-1">
          <div class="sidebar-block px-3 px-lg-0 me-lg-4">
            <a
              class="d-lg-none block-toggler"
              data-bs-toggle="collapse"
              href="#categoriesMenu"
              aria-expanded="false"
              aria-controls="categoriesMenu"
              >Categorias de productos</a
            >
            <div class="expand-lg collapse" id="categoriesMenu">
              <div class="nav nav-pills flex-column mt-4 mt-lg-0" role="menu">
                <template v-for="(item, index) in categorias">
                  <div>
                    <template v-if="item.categoria._id == categoria_activa">
                      <div>
                        <div
                          class="sidebar-menu-item mb-2 active"
                          data-bs-toggle="collapse"
                          :data-bs-target="'#subcategories_' + index"
                          aria-expanded="true"
                          :aria-controls="'subcategories_' + index"
                          role="menuitem"
                        >
                          <a class="nav-link active" >
                            <div class="row">
                              <div class="col">
                                <span>{{ item.categoria.titulo }}</span>
                              </div>
                              <div
                                class="col"
                                style="text-align: right !important"
                              >
                                <img
                                  src="/assets/media/hacia-abajo.png"
                                  style="width: 10px"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div
                          class="collapse show"
                          :id="'subcategories_' + index"
                        >
                          <div class="nav nav-pills flex-column ms-3">
                            <a
                              style="cursor: pointer"
                              class="nav-link mb-2"
                              v-on:click="
                                redirectCategoria(item.categoria.titulo)
                              "
                              >Ver todos</a
                            >

                            <a
                              style="cursor: pointer"
                              class="nav-link mb-2"
                              v-bind:class="{
                                bg_subcat_activa:
                                  subitem.titulo == subcategoria_activa,
                              }"
                              v-for="subitem in item.subcategorias"
                              v-on:click="
                                redirectSubcategoria(
                                  subitem.titulo,
                                  item.categoria._id
                                )
                              "
                              >{{ subitem.titulo }}</a
                            >
                          </div>
                        </div>
                      </div>
                    </template>

                    <template v-if="item.categoria._id != categoria_activa">
                      <div>
                        <div
                          class="sidebar-menu-item mb-2"
                          data-bs-toggle="collapse"
                          :data-bs-target="'#subcategories_' + index"
                          aria-expanded="false"
                          :aria-controls="'subcategories_' + index"
                          role="menuitem"
                        > 
                          <a class="nav-link" href="#!">
                            <div class="row">
                              <div class="col">
                                <span>{{ item.categoria.titulo }}</span>
                              </div>
                              <div
                                class="col"
                                style="text-align: right !important"
                              >
                                <img
                                  src="/assets/media/hacia-abajo-dark.png"
                                  style="width: 10px"
                                  alt=""
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="collapse" :id="'subcategories_' + index">
                          <div class="nav nav-pills flex-column ms-3">
                            <a
                              style="cursor: pointer"
                              class="nav-link mb-2"
                              v-on:click="
                                redirectCategoria(item.categoria.titulo)
                              "
                              >Ver todos</a
                            >

                            <a
                              style="cursor: pointer"
                              class="nav-link mb-2"
                              v-for="subitem in item.subcategorias"
                              v-on:click="
                                redirectSubcategoria(
                                  subitem.titulo,
                                  item.categoria._id
                                )
                              "
                              >{{ subitem.titulo }}</a
                            >
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="sidebar-block px-3 px-lg-0 me-lg-4">
            <a
              class="d-lg-none block-toggler"
              data-bs-toggle="collapse"
              href="#priceFilterMenu"
              aria-expanded="false"
              aria-controls="priceFilterMenu"
              >Precio</a
            >
            <div class="expand-lg collapse" id="priceFilterMenu">
              <h6 class="sidebar-heading d-none d-lg-block">Precio</h6>
              <div class="mt-4 mt-lg-0" id="slider-snap" ref="slider"></div>
              <div class="nouislider-values">
                <div class="min">
                  From
                  <span id="slider-snap-value-lower">{{
                    convertCurrency(minRange)
                  }}</span>
                </div>
                <div class="max">
                  To
                  <span id="slider-snap-value-upper">{{
                    convertCurrency(maxRange)
                  }}</span>
                </div>
                <input
                  class="slider-snap-input"
                  type="hidden"
                  name="pricefrom"
                  id="slider-snap-input-lower"
                  value="40"
                />
                <input
                  class="slider-snap-input"
                  type="hidden"
                  name="priceto"
                  id="slider-snap-input-upper"
                  value="110"
                />
              </div>
            </div>
          </div>
          
            
        </div>
      
      </div>
    </div>
  </div>
</template>




<script>
import noUiSlider from "../../../public/assets/js/nouislider.min.js";
import currency_formatter from "currency-formatter";
import axios from "axios";

export default {
  data() {
    return {
      slider: {
        starMin: 0,
        starMax: 2000,
        min: 0,
        max: 2000,
        start: 40,
        step: 1,
      },
      minRange: null,
      maxRange: null,
      productos: [],
      productos_const: [],
      categorias: [],
      categoria_activa: "",
      subcategoria_activa: "",
      currentPage: 1,
      perPage: 12,
      get ListaProductos() {
        return this.productos.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage
          
        );
      },
      sort_by: "Defecto",
    };
  },
  mounted() {
    noUiSlider.create(this.$refs.slider, {
      start: [this.slider.starMin, this.slider.starMax],
      step: this.slider.step,
      range: {
        min: this.slider.min,
        max: this.slider.max,
      },
    });

    this.$refs.slider.noUiSlider.on("update", (values, handle) => {
      this[handle ? "maxRange" : "minRange"] = parseInt(values[handle]);
    });
  },
  beforeMount() {
    axios
      .get(this.$urlAPI + "/obtener_productos_shop", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        this.productos = result.data;
        this.productos_const = this.productos;

        if (this.$route.query.subcategoria) {
          this.initProductosSubcategoria();
        }

        if (this.$route.query.categoria) {
          this.initProductosCategoria();
        }
      });
    this.init_categorias();
  },
  methods: {
    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },

    setPerPage(item) {
      this.perPage = item;
    },

    setSortBy() {
      if (this.sort_by == "Defecto") {
        this.productos.sort((a, b) =>
          new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()
            ? 1
            : -1
        );
      }

      if (this.sort_by == "Precio +-") {
        this.productos.sort((a, b) => (a.precio < b.precio ? 1 : -1));
      }

      if (this.sort_by == "Precio -+") {
        this.productos.sort((a, b) => (a.precio > b.precio ? 1 : -1));
      }
    },

    init_categorias() {
      axios
        .get(this.$urlAPI + "/listar_categorias_publico", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          this.categorias = result.data;
          if (this.$route.query.subcategoria) {
            this.categoria_activa = this.categorias.filter((item) =>
              item.subcategorias.some(
                (subcat) => subcat.titulo == this.$route.query.subcategoria
              )
            )[0].categoria._id;

            this.subcategoria_activa = this.$route.query.subcategoria;
          }
        });
    },

    redirectSubcategoria(item, categoria) {
      // Obtén la ruta actual
      const currentRoute = this.$router.currentRoute;
    // Construye la ruta a la que intentas navegar
    const targetRoute = {
      name: 'shop',
      query: { subcategoria: item }
    };

    // Comprueba si la ruta actual es diferente de la ruta objetivo
    if (currentRoute.name !== targetRoute.name || currentRoute.query.subcategoria !== targetRoute.query.subcategoria) {
      // Si son diferentes, navega a la ruta objetivo
      this.$router.push(targetRoute);
    }

    this.initProductosSubcategoria();
    },

    initProductosSubcategoria() {
      this.productos = this.productos_const.filter(
        (item) => item.subcategoria == this.$route.query.subcategoria
      );
    },

    redirectCategoria(item) {
          // Obtén la ruta actual
    const currentRoute = this.$router.currentRoute;
    // Construye la ruta a la que intentas navegar
    const targetRoute = {
      name: 'shop',
      query: { categoria: item }
    };

    // Comprueba si la ruta actual es diferente de la ruta objetivo
    if (currentRoute.name !== targetRoute.name || currentRoute.query.categoria !== targetRoute.query.categoria) {
      // Si son diferentes, navega a la ruta objetivo
      this.$router.push(targetRoute);
    }
      this.initProductosCategoria();
    },

    initProductosCategoria() {
      this.productos = this.productos_const.filter(
        (item) => item.categoria == this.$route.query.categoria
      );
    },

    selectedColor(value) {
      this.productos = this.productos_const.filter((item) =>
        item.variedades.some((subitem) => subitem.variedad == value)
      );
    },

    selectedTamaño(event) {
      this.productos = this.productos_const.filter((item) =>
        item.variedades.some(
          (subitem) => subitem.variedad == event.target.value
        )
      );
    },
  },

  watch: {
    $route(to, from) {
      if (!this.$route.query.subcategoria && !this.$route.query.categoria) {
        this.productos = this.productos_const;
      }
    },

    minRange: function (value) {
      this.productos = this.productos_const.filter(
        (item) => item.precio >= value
      );
    },

    maxRange: function (value) {
      this.productos = this.productos_const.filter(
        (item) => item.precio <= value
      );
    },
  },
};
</script>

<style>
.bg_subcat_activa {
  background: #005f96;
}

.noUi-horizontal .noUi-handle {
  background: #005f96 !important;
  border-radius: 5px !important;
}
.noUi-horizontal .noUi-handle {
  width: 0.5rem !important;
  height: 1rem !important;
}
.noUi-horizontal {
  height: 7px !important;
  background: #787878 !important;
  border: none !important;
}
.sidebar-menu-item[data-bs-toggle="collapse"]::before {
  display: none !important;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #ffffff !important;
  background-color: #005f96 !important;
}
</style>
