<template>
  <div style="background: #f3f3f3;" class="pb-5">
      <section class="product-details" style="margin-top: 8rem !important;">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 pt-4 order-2 order-lg-1">
          <div class="row">   
            <div class="d-none d-md-block col-md-2 pe-0">
              <div class="owl-thumbs" data-slider-id="1">
                <button class="owl-thumb-item detail-thumb-item mb-3" v-if="galeria[0]">
                  <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[0].imagen" alt="Modern Jacket 0">
                </button>
                 <button class="owl-thumb-item detail-thumb-item mb-3" v-if="galeria[1]">
                  <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[1].imagen" alt="Modern Jacket 0">
                </button>
                 <button class="owl-thumb-item detail-thumb-item mb-3" v-if="galeria[2]">
                  <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[2].imagen" alt="Modern Jacket 0">
                </button>
                 <button class="owl-thumb-item detail-thumb-item mb-3" v-if="galeria[3]">
                  <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[3].imagen" alt="Modern Jacket 0">
                </button>
                 <button class="owl-thumb-item detail-thumb-item mb-3" v-if="galeria[4]">
                  <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[4].imagen" alt="Modern Jacket 0">
                </button>

              </div>
            </div>
            <div class="col-12 col-md-10 detail-carousel">
            
              <div class="owl-carousel detail-slider owl-theme owl-dots-modern" data-slider-id="1">
                <div class="item" v-if="galeria[0]">
                  <a class="glightbox" :href="$urlAPI+'/obtener_galeria_producto/'+galeria[0].imagen" data-title="Modern Jacket 1 - Caption text" data-gallery="product-gallery">
                    <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[0].imagen" alt="Modern Jacket 1">
                  </a>
                </div>
                 <div class="item" v-if="galeria[1]">
                  <a class="glightbox" :href="$urlAPI+'/obtener_galeria_producto/'+galeria[1].imagen" data-title="Modern Jacket 1 - Caption text" data-gallery="product-gallery">
                    <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[1].imagen" alt="Modern Jacket 1">
                  </a>
                </div>
                 <div class="item" v-if="galeria[2]">
                  <a class="glightbox" :href="$urlAPI+'/obtener_galeria_producto/'+galeria[2].imagen" data-title="Modern Jacket 1 - Caption text" data-gallery="product-gallery">
                    <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[2].imagen" alt="Modern Jacket 1">
                  </a>
                </div>
                 <div class="item" v-if="galeria[3]">
                  <a class="glightbox" :href="$urlAPI+'/obtener_galeria_producto/'+galeria[3].imagen" data-title="Modern Jacket 1 - Caption text" data-gallery="product-gallery">
                    <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[3].imagen" alt="Modern Jacket 1">
                  </a>
                </div>
                 <div class="item" v-if="galeria[4]">
                  <a class="glightbox" :href="$urlAPI+'/obtener_galeria_producto/'+galeria[4].imagen" data-title="Modern Jacket 1 - Caption text" data-gallery="product-gallery">
                    <img class="img-fluid" :src="$urlAPI+'/obtener_galeria_producto/'+galeria[4].imagen" alt="Modern Jacket 1">
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 ps-lg-4 order-1 order-lg-2">
          <ul class="breadcrumb undefined">
            <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
            <li class="breadcrumb-item"><router-link to="/shop">Tienda</router-link></li>
            <li class="breadcrumb-item"><router-link :to="{name: 'shop',query: {categoria:producto.categoria}}">{{producto.categoria}}</router-link></li>
          </ul>
          <h4 class="mb-4">{{producto.titulo}}</h4>
          <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
            <ul class="list-inline mb-2 mb-sm-0">
              <li class="list-inline-item h4 fw-light mb-0">{{convertCurrency(producto.precio)}}</li>
              <li class="list-inline-item text-muted fw-light" v-if="producto.descuento"> 
                <!-- <del>$90.00</del> -->
              </li>
            </ul>
            <!-- <div class="d-flex align-items-center">
              <ul class="list-inline me-2 mb-0">
                <li class="list-inline-item me-0">
                  <img src="/assets/icons/estrella.png" style="width:15px" alt="">
                </li>
                <li class="list-inline-item me-0"><img src="/assets/icons/estrella.png" style="width:15px" alt=""></li>
                <li class="list-inline-item me-0"><img src="/assets/icons/estrella.png" style="width:15px" alt=""></li>
                <li class="list-inline-item me-0"><img src="/assets/icons/estrella.png" style="width:15px" alt=""></li>
                <li class="list-inline-item me-0"><img src="/assets/icons/estrella.png" style="width:15px" alt=""></li>
              </ul><span class="text-muted text-uppercase text-sm">25 reviews</span>
            </div> -->
          </div>
          <p class="mb-4 text-muted">{{producto.extracto}}</p>
            <div class="row">
              <div class="col-sm-6 col-lg-12 detail-option mb-3">
                <h6 class="detail-option-heading">{{producto.str_variedad}}</h6>
                <label class="btn btn-sm btn-outline-secondary detail-option-btn-label" :id="'variedad_'+item._id" :for="'variedad_'+item._id" v-for="item in variedades" v-on:click="getVariedades(item._id)"> {{item.variedad}}
                  <input class="input-invisible" type="radio" name="size" :value="item._id" :id="'variedad_'+item._id" required>
                </label>
                
              </div>
             
              <!-- <div class="col-12 detail-option mb-3">
                <h6 class="detail-option-heading">Colour <span>(required)</span></h6>
                <ul class="list-inline mb-0 colours-wrapper">
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_Blue" style="background-color: #668cb9"> </label>
                    <input class="input-invisible" type="radio" name="colour" value="value_Blue" id="colour_Blue" required>
                  </li>
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_White" style="background-color: #fff"> </label>
                    <input class="input-invisible" type="radio" name="colour" value="value_White" id="colour_White" required>
                  </li>
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_Violet" style="background-color: #8b6ea4"> </label>
                    <input class="input-invisible" type="radio" name="colour" value="value_Violet" id="colour_Violet" required>
                  </li>
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_Red" style="background-color: #dd6265"> </label>
                    <input class="input-invisible" type="radio" name="colour" value="value_Red" id="colour_Red" required>
                  </li>
                </ul>
              </div> -->
              <div class="col-12 col-lg-6 detail-option mb-5">
                <label class="detail-option-heading fw-bold">Cantidad</label>
                <input class="form-control detail-quantity" name="items" type="number" v-model="obj_carrito.cantidad">
              </div>
            </div>
            <ul class="list-inline">
              <li class="list-inline-item">
                <button class="btn btn-dark btn-lg mb-1 " type="button" v-on:click="add_carrito()">Agregar al carrito</button>
              </li>
              <!-- <li class="list-inline-item"><a class="btn btn-outline-secondary mb-1" href="#"> <i class="far fa-heart me-2"></i>Add to wishlist</a></li> -->
            </ul>

            <span class="text-danger" v-if="msm_error">{{msm_error}}</span>
        </div>
      </div>
    </div>
  </section>
  
  <section class="mt-5">
    <div class="container">
      <ul class="nav nav-tabs flex-column flex-sm-row" role="tablist">

        <li class="nav-item"><a class="nav-link detail-nav-link active" data-bs-toggle="tab" href="#additional-information" role="tab">Información adicional</a></li>
      </ul>
      <div class="tab-content py-4">
      
        <div class="tab-pane active" id="additional-information" role="tabpanel">
          <div class="row">
            <div class="col-lg-6">
              <table class="table text-sm">
                <tbody>
                  <tr>
                    <th class="text-uppercase fw-normal border-0"><b>Producto</b></th>
                    <td class="text-muted border-0" v-if="producto.titulo" :title="producto.titulo">{{producto.titulo.substr(0,30)}}...</td>
                  </tr>
                  <tr>
                    <th class="text-uppercase fw-normal "><b>Categoria</b></th>
                    <td class="text-muted ">{{producto.categoria}}</td>
                  </tr>
                  <tr>
                    <th class="text-uppercase fw-normal "><b>Subcategoria</b></th>
                    <td class="text-muted ">{{producto.subcategoria}}</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="col-lg-6">
              <table class="table text-sm">
                <tbody>
                  <tr>
                    <th class="text-uppercase fw-normal "><b>Variedad</b></th>
                    <td class="text-muted ">{{producto.str_variedad}}</td>
                  </tr>
                  <tr>
                    <th class="text-uppercase fw-normal border-0"><b>Código</b></th>
                    <td class="text-muted border-0">{{producto._id}}</td>
                  </tr>
                  <tr>
                    <th class="text-uppercase fw-normal "><b>Fecha</b></th>
                    <td class="text-muted ">{{convertDate(producto.createdAt)}}</td>
                  </tr>
                 
               
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- <div class="tab-pane" id="reviews" role="tabpanel">
          <div class="row mb-5">
            <div class="col-lg-10 col-xl-9">
              <div class="review d-flex">
                <div class="flex-shrink-0 text-center me-4 me-xl-5"><img class="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-1.jpg" alt="Han Solo"><span class="text-uppercase text-muted">Dec 2018</span></div>
                <div>
                  <h5 class="mt-2 mb-1">Han Solo</h5>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i>
                  </div>
                  <p class="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections     </p>
                </div>
              </div>
              <div class="review d-flex">
                <div class="flex-shrink-0 text-center me-4 me-xl-5"><img class="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-2.jpg" alt="Luke Skywalker"><span class="text-uppercase text-muted">Dec 2018</span></div>
                <div>
                  <h5 class="mt-2 mb-1">Luke Skywalker</h5>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p class="text-muted">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.     </p>
                </div>
              </div>
              <div class="review d-flex">
                <div class="flex-shrink-0 text-center me-4 me-xl-5"><img class="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-3.jpg" alt="Princess Leia"><span class="text-uppercase text-muted">Dec 2018</span></div>
                <div>
                  <h5 class="mt-2 mb-1">Princess Leia</h5>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-gray-200"></i><i class="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p class="text-muted">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.     </p>
                </div>
              </div>
              <div class="review d-flex">
                <div class="flex-shrink-0 text-center me-4 me-xl-5"><img class="review-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/person-4.jpg" alt="Jabba Hut"><span class="text-uppercase text-muted">Dec 2018</span></div>
                <div>
                  <h5 class="mt-2 mb-1">Jabba Hut</h5>
                  <div class="mb-2"><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i><i class="fa fa-xs fa-star text-warning"></i>
                  </div>
                  <p class="text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.     </p>
                </div>
              </div>
              <div class="py-5 px-3">
                <h5 class="text-uppercase mb-4">Leave a review</h5>
                <form class="form" id="contact-form" method="post" action="contact.php">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-4">
                        <label class="form-label" for="name">Your name *</label>
                        <input class="form-control" type="text" name="name" id="name" placeholder="Enter your name" required="required">
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-4">
                        <label class="form-label" for="rating">Your rating *</label>
                        <select class="custom-select focus-shadow-0" name="rating" id="rating">
                          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                          <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                          <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                          <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                          <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="email">Your email *</label>
                    <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required">
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="review">Review text *</label>
                    <textarea class="form-control" rows="4" name="review" id="review" placeholder="Enter your review" required="required"></textarea>
                  </div>
                  <button class="btn btn-outline-dark" type="submit">Post review</button>
                </form>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <section class="my-5">
    <div class="container">
      <header class="text-center">
        <h6 class="text-uppercase mb-5">Productos que te podrian interesar</h6>
      </header>
      <div class="row">
        <!-- product-->
        <div class="col-lg-2 col-md-4 col-6" v-for="item in productos_relaciones">
          <router-link :to="{name: 'show-producto', params:{slug: item.slug}}">
            <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-danger" v-if="item.descuento">Oferta</div>
                <img class="img-fluid" :src="$urlAPI+'/obtener_portada_producto/'+item.portada" alt="product"/>
                <div class="product-hover-overlay">
                  <a class="product-hover-overlay-link" href="detail.html"></a>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">{{item.categoria}}</p>
                <h3 class="h6 text-uppercase mb-1" style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;" :title="item.titulo">
                  <a class="text-dark" href="detail.html">{{item.titulo}}</a>
                </h3>
                <span class="text-muted">{{convertCurrency(item.precio)}}</span>
              </div>
            </div>
          </router-link>
        </div>
      
      </div>
    </div>
  </section>  
  </div>
</template>

<style>
.detail-nav-link.nav-link.active, .detail-nav-link.nav-link:hover, .detail-nav-link.nav-link:focus {
  color: #ffffff !important;
  border-color: #fff #fff #343a40 !important;
  background: #005f96 !important;
}

.bg_variedad{
  background: #005f96 !important;
  color: white;  
  border: none ;
}

</style>

<script>
import { init_carrusel } from '../../../public/assets/js/theme.d7b4a888.js'; 
import currency_formatter from 'currency-formatter';
import axios from 'axios';
import moment from 'moment';
import $ from 'jquery';


export default {
  name: 'ShowProductoApp',
  data() {
    return {
      galeria : [],
      variedades: [],
      producto: {},
      productos_relaciones: [],
      obj_carrito: {
        cantidad:1 
      },
      usuario_data: JSON.parse(this.$store.state.usuario),
      msm_error: '',
    }
  },
  methods: {
    convertCurrency(number){
        return currency_formatter.format(number, { code: 'USD' });
    },
    init_data(){
      axios.get(this.$urlAPI+'/obtener_producto_slug/'+this.$route.params.slug,{
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((result)=>{
        this.producto = result.data.producto;
        this.variedades = result.data.variedades;

        this.obj_carrito.producto = this.producto._id;
        this.obj_carrito.cliente = this.usuario_data._id;
        
        this.galeria = result.data.galeria;
        this.init_productos_relacionados(this.producto.categoria);
        console.log(this.galeria);
      });
    },
    init_productos_relacionados(categoria){
      axios.get(this.$urlAPI+'/obtener_producto_categoria/'+categoria,{
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((result)=>{
        this.productos_relaciones = result.data.productos;
      });
    },
    convertDate(date){
      return moment(date).format('DD-MM-YYYY');
    },

    getVariedades(value){
      this.obj_carrito.variedad = value;

      setTimeout(() => {
        $('.detail-option-btn-label').removeClass('bg_variedad');
        $('#variedad_'+value).addClass('bg_variedad');
      }, 50);
    },

    add_carrito(){
    if (!this.obj_carrito.variedad) {
      this.msm_error = 'ingrese variedad'
    } else if(!this.obj_carrito.cantidad){
      this.msm_error = 'Ingrese una cantidad'
    }else if(this.obj_carrito.cantidad <= 0){
      this.msm_error = 'Ingrese una cantidad mayor a cero'
    }else{
          this.msm_error = '';
        axios.post(this.$urlAPI + '/crear_producto_carrito', this.obj_carrito, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': this.$store.state.token,
          }
        }).then((result) => {
          this.$socket.emit('send_cart', true);
          
        }).catch((error) => {
        
          this.msm_error = 'Debes iniciar sesión para agregar al carrito. Por favor, vuelve a inténtarlo.';
        });
        }
    }
  },
  beforeMount() {
    init_carrusel.init_galeria();
    init_carrusel.init_zoom();
    this.init_data();
  },
}
</script>