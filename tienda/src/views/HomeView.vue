<template>
  <div class="home">
      <!-- Split-screen Homepage-->
      <section>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 dark-overlay split-screen-column align-items-center align-items-lg-end" style="background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347942-unsplash.jpg); background-color: #d2cecb;"> 
              <div class="overlay-content py-6 mt-6 px-lg-5 mt-lg-0 mb-lg-5">
                <h1 class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">Gentlemen              </h1>
                <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <a class="btn btn-light mx-1 mb-1" href="category.html">View collection      </a><a class="btn btn-outline-light mx-1 mb-1" href="category.html">See more      </a></p>
              </div>
            </div>
            <div class="col-lg-6 split-screen-column align-items-center align-items-lg-end" style="background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347962-unsplash.jpg); background-color: #e5b6b4;"> 
              <div class="py-6 px-lg-5 mb-lg-5">
                <h1 class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">Ladies              </h1>
                <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <a class="btn btn-light mx-1 mb-1" href="category.html">View collection      </a><a class="btn btn-outline-light mx-1 mb-1" href="category.html">See more                              </a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-6 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 mx-auto text-center mb-5">
              <h2 class="text-uppercase">Nuevos productos</h2>
              <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="row">
            <!-- product-->
            <div class="col-lg-3 col-md-4 col-6" v-for="item in nuevos_productos">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>
                  <img class="img-fluid" :src="$urlAPI+'/obtener_portada_producto/'+item.portada" alt="producto"/>

                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                  
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{item.categoria}}</p>
                  <h3 class="h6 text-uppercase mb-1">
                    <a class="text-dark" href="detail.html">{{item.titulo}}</a>
                  </h3>
                  <span class="text-muted">{{convertCurrency(item.precio)}}</span>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>

      <section class="py-6 bg-gray-100">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 mx-auto text-center mb-5">
              <h2>Colecciones</h2>
              <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex align-items-md-stretch mb-4 mb-md-0">
              <div class="d-flex align-items-center text-white dark-overlay w-100 text-center py-6 py-md-0" style="background: center center url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/nordwood-themes-481980-unsplash-square.jpg) no-repeat; background-size: cover;"><a class="tile-link" href="category.html"> </a>
                <div class="card-img-overlay w-100 overlay-content">
                  <h2 class="display-2 fw-bold text-uppercase mb-0">Hombres </h2>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-0 text-white text-center mb-4 dark-overlay"> <img class="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/malvestida-magazine-458585-unsplash.jpg" alt="Ladies"><a class="tile-link" href="category.html"> </a>
                <div class="card-img-overlay d-flex align-items-center">
                  <div class="text-center w-100 overlay-content">
                    <h2 class="display-4 fw-bold text-uppercase text-center mb-0">Mujeres</h2>
                  </div>
                </div>
              </div>
              <div class="card border-0 text-white text-center  dark-overlay"> <img class="card-img" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/heather-schwartz-528936-unsplash.jpg" alt="Accessories"><a class="tile-link" href="category.html"> </a>
                <div class="card-img-overlay d-flex align-items-center">
                  <div class="text-center w-100 overlay-content">
                    <h2 class="display-4 fw-bold text-uppercase text-center mb-0">Accesorios </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-6 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-8 mx-auto text-center mb-5">
              <h2 class="text-uppercase">Productos recomendados</h2>
              <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
           
      <div class="container-fluid  bg-gray-100">
        <div class="row">
          <div class="col-lg-6 about-text-column">
            <div class="about-text">
              <h6 class="text-uppercase text-muted letter-spacing-5 mb-1">Humble beginnings</h6>
              <h2 class="mb-4">We started as little</h2>
              <p class="text-lg text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
            </div>
          </div>
          <div class="col-lg-6 p-lg-0 about-image-column"><img class="bg-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347942-unsplash.jpg" alt=""></div>
        </div>
        <div class="row">
          <div class="col-lg-6 about-text-column order-lg-2">
            <div class="about-text">
              <h6 class="text-uppercase text-muted letter-spacing-5 mb-1">Sell today</h6>
              <h2 class="mb-4">And then we grew a bit</h2>
              <p class="text-lg text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.              </p>
            </div>
          </div>
          <div class="col-lg-6 p-lg-0 about-image-column order-lg-1"><img class="bg-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347962-unsplash.jpg" alt=""></div>
        </div>
        <div class="row">
          <div class="col-lg-6 about-text-column bg-gray-100">
            <div class="p-5">
              <blockquote class="mb-5">
                <p class="text-xl text-serif mb-4">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.   </p>
                <h6 class="text-lg text-uppercase text-primary">— Franz Kafka, Founder</h6>
              </blockquote>
              <p class="text-lg text-muted">He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.  </p>
            </div>
          </div>
          <div class="col-lg-6 p-lg-0 about-image-column"><img class="bg-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/marco-xu-496929-unsplash.jpg" alt=""></div>
        </div>
      </div>
    
          </div>
        </div>
      </section>
  </div>
</template>

<style>
.product-image{
  overflow: hidden  !important;
  display: block  !important;
  height: 320px  !important;

}
.img-fluid{
  height: auto  !important;
  display: block  !important; 
  
}
</style>


<script>
import axios  from "axios";
import currency_formatter from "currency-formatter";
import { init_carrusel } from "../../public/assets/js/theme.d7b4a888";

export default {
  name: 'HomeView',
  components:{

  },

  data() {
    return {
      nuevos_productos: [],
      load_nuevos_productos: true,

      productos_recomendados: [],
      load_productos_recomendados: true,
    }
  },

  methods: {
    init_nuevo_producto(){
      this.load_nuevos_productos = true;
      axios.get(this.$urlAPI+'/obtener_nuevos_productos',{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resultado) => {

        this.nuevos_productos = resultado.data;
        this.load_nuevos_productos = false;
        console.log(this.nuevos_productos);
      }).catch((err) => {
        
        console.log(err);
      });;
    },

    init_productos_recomendados(){
      this.load_productos_recomendados = true;
      axios.get(this.$urlAPI+'/obtener_productos_recomendados',{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resultado) => {

        this.productos_recomendados = resultado.data;
        this.load_productos_recomendados = true;
        console.log(this.productos_recomendados);
      }).catch((err) => {
        
        console.log(err);
      });;
    },

      // Método para convertir un número a formato de moneda USD
      convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
  },

  beforeMount(){
    this.init_nuevo_producto();
    this.init_productos_recomendados();
    init_carrusel.init();
  }
}
</script>
