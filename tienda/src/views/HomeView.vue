<template>
  <div class="home pb-5">
    <!-- Split-screen Homepage-->
    <section>
      <SwiperIndex/>
      <div class="container-fluid">
        <!-- <div class="row">
          <div
            class="col-lg-6 dark-overlay split-screen-column align-items-center align-items-lg-end"
            style="
              background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347942-unsplash.jpg);
              background-color: #d2cecb;
            "
          >
            <div class="overlay-content py-6 mt-6 px-lg-5 mt-lg-0 mb-lg-5">
              <h1
                class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1"
              >
                Caballeros
              </h1>
              <p class="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <a class="btn btn-light mx-1 mb-1" href="category.html"
                  >Ver colección </a
                ><a class="btn btn-outline-light mx-1 mb-1" href="category.html"
                  >Ver más 
                </a>
              </p>
            </div>
          </div>
          <div
            class="col-lg-6 split-screen-column align-items-center align-items-lg-end"
            style="
              background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347962-unsplash.jpg);
              background-color: #e5b6b4;
            "
          >
            <div class="py-6 px-lg-5 mb-lg-5">
              <h1
                class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1"
              >
                Damas
              </h1>
              <p class="lead mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <a class="btn btn-light mx-1 mb-1" href="category.html"
                  >Ver colección </a
                ><a class="btn btn-outline-light mx-1 mb-1" href="category.html"
                  >Ver más 
                </a>
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5" data-aos="fade-down">
            <h2 class="text-uppercase">Nuevos productos</h2>
            <p class="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="row">
          <!-- product-->
          <div class="col-lg-3 col-md-4 col-6" v-for="item in nuevos_productos">
            <router-link :to="{name: 'show-producto', params:{slug: item.slug}}">
              <div class="product">
                <div class="product-image" >
                  <div class="ribbon ribbon-danger" v-if="item.descuento">
                    Oferta
                  </div>
                  <img
                    class="img-fluid"
                    data-aos="zoom-in"
                    :src="$urlAPI + '/obtener_portada_producto/' + item.portada"
                    alt="producto"
                  />
  
                  <div class="product-hover-overlay">
                    <a class="product-hover-overlay-link" href="detail.html"></a>
                  </div>
                </div>
                <div class="py-2" data-aos="fade-right">
                  <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                  <h3 class="h6 text-uppercase mb-1">
                    <a class="text-dark" href="detail.html">{{ item.titulo }}</a>
                  </h3>
                  <span class="text-muted">{{
                    convertCurrency(item.precio)
                  }}</span>
                </div>
              </div>
            
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6 bg-gray-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5" data-aos="fade-down">
            <h2>Colecciones</h2>
            <p class="lead text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card border-0 text-white text-center mb-4 dark-overlay" data-aos="zoom-in">
              <img
                class="card-img"
                src="https://parade.com/.image/t_share/MTkwNTgxMjkxNjkzNzc4ODEy/125-things-to-do-with-kids-during-coronavirus-pandemic-jpg.jpg"
                alt="Ladies"
              /><router-link class="tile-link" to="/shop?subcategoria=Kids"> </router-link>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">
                    Niños
                  </h2>
                </div>
              </div>
            </div>
            <div class="card border-0 text-white text-center dark-overlay" data-aos="zoom-in">
              <img
                class="card-img"
                src="https://www.esan.edu.pe/images/blog/2019/11/11/1500x844-kanban.jpg" 
                alt="Accessories"
              /><router-link class="tile-link" to="/shop?subcategoria=Kanban"> </router-link>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">
                    Kanban
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 text-white text-center mb-4 dark-overlay" data-aos="zoom-in">
              <img
                class="card-img"
                src="https://gourmetdemexico.com.mx/wp-content/uploads/2023/12/tendencias-viajes-2024-2-1024x683.jpg"
                alt="Ladies"
              /><router-link class="tile-link" to="/shop?subcategoria=Viajes"> </router-link>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">
                    Viajes
                  </h2>
                </div>
              </div>
            </div>
            <div class="card border-0 text-white text-center dark-overlay" data-aos="zoom-in">
              <img
                class="card-img"
                src="https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/libreta.jpg.webp?itok=yW1RE9-1" 
                alt="Accessories"
              /><router-link class="tile-link" to="/shop?subcategoria=Metas"> </router-link>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">
                    Metas
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-3 pb-5">
      <div class="container">
        <div class="row">
   

          <div class="container-fluid bg-gray-100">
            <div class="row" data-aos="fade-left">
              <div class="col-lg-6 about-text-column" >
                <div class="about-text" >
                  <h6 class="text-uppercase text-muted letter-spacing-5 mb-1">
                    Dia con dia 
                  </h6>
                  <h2 class="mb-4">Planifica</h2>
                  <p class="text-lg text-muted">
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 p-lg-0 about-image-column">
                <img
                  class="bg-image"
                 
                  src="https://suprabrokers.com/wp-content/uploads/2021/02/Fotos-planifica.png"
                  alt=""
                />
              </div>
            </div>
            <div class="row" data-aos="fade-right">
              <div class="col-lg-6 about-text-column order-lg-2">
                <div class="about-text">
                  <h6 class="text-uppercase text-muted letter-spacing-5 mb-1">
                    Hoy
                  </h6>
                  <h2 class="mb-4">Toma el control</h2>
                  <p class="text-lg text-muted">
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 p-lg-0 about-image-column order-lg-1">
                <img
                  class="bg-image"
                  src="https://s1.ppllstatics.com/elcomercio/www/multimedia/2023/10/24/material-oficina-de-calidad-k31E-U2105188288171d-1200x840@El%20Comercio.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="row" data-aos="fade-left">
              <div class="col-lg-6 about-text-column bg-gray-100">
                <div class="p-5">
                  <blockquote class="mb-5">
                    <p class="text-xl text-serif mb-4">
                      Cumple tus metas y todo lo que te propongas.
                    </p>
                    <!-- <h6 class="text-lg text-uppercase text-primary">
                      — Franz Kafka, Founder
                    </h6> -->
                  </blockquote>
                  <p class="text-lg text-muted">
                    bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
                  </p>
                </div>
              </div>
              <div class="col-lg-6 p-lg-0 about-image-column">
                <img
                  class="bg-image"
                  src="https://tempusquality.es/wp-content/uploads/2023/07/planificacion-cumplimiento-objetivos.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.product-image {
  overflow: hidden !important;
  display: block !important;
  height: 320px !important;
}
.img-fluid {
  height: auto !important;
  display: block !important;
}
</style>


<script>
import axios from "axios";
import currency_formatter from "currency-formatter";
import SwiperIndex from '../components/SwiperIndex.vue';
import { init_carrusel } from "../../public/assets/js/theme.d7b4a888";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: "HomeView",
  components: {
    SwiperIndex
  },

  data() {
    return {
      nuevos_productos: [],
      load_nuevos_productos: true,

      productos_recomendados: [],
      load_productos_recomendados: true,
    };
  },

  methods: {
    init_nuevo_producto() {
      this.load_nuevos_productos = true;
      axios
        .get(this.$urlAPI + "/obtener_nuevos_productos", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((resultado) => {
          this.nuevos_productos = resultado.data;
          this.load_nuevos_productos = false;
          console.log(this.nuevos_productos);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    init_productos_recomendados() {
      this.load_productos_recomendados = true;
      axios
        .get(this.$urlAPI + "/obtener_productos_recomendados", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((resultado) => {
          this.productos_recomendados = resultado.data;
          this.load_productos_recomendados = true;
          console.log(this.productos_recomendados);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Método para convertir un número a formato de moneda USD
    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
  },

  beforeMount() {
    this.init_nuevo_producto();
    this.init_productos_recomendados();
    init_carrusel.init();
  },
  
  mounted() {
    AOS.init({
     duration: 1000, // Duración de la animación en milisegundos
     once:true
    });
    
  },
};
</script>
