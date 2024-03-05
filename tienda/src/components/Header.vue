<template>
  <header class="header header-absolute">
      <!-- Top Bar-->
      <div class="top-bar">
        <div class="container-fluid">
          <div class="row d-flex align-items-center">
            <div class="col-sm-7 d-none d-sm-block">
              <ul class="list-inline topbar-text mb-0">
                <li class="list-inline-item pe-3 me-0">
                  <img src="/assets/icons/telephone-bl.png" style="width: 16px;">
                  449-123-45-47
                </li>
                <li class="list-inline-item px-3 border-start d-none d-lg-inline-block">Envios gratis desde $900</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Top Bar End-->
      <!-- Navbar-->
      <nav class="navbar navbar-expand-lg navbar-sticky navbar-airy navbar-dark bg-fixed-white navbar-fixed-light" style="background: #005f96 !important;">
        <div class="container-fluid">  
          <!-- Navbar Header  -->
          <router-link to="/" class="navbar-brand text-lg text-white fw-bold text-uppercase" >Planify</router-link>
         
          <a class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                              <img src="/assets/icons/menu-hamburguesa.png" style="width: 20px;" />
                                            </a>
          <!-- Navbar Collapse -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link class="nav-link text-white" to="/">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" to='/shop'>Tienda</router-link>
              </li>
           
              <!-- Megamenu-->
              <li class="nav-item dropdown position-static text-white"><a class="nav-link dropdown-toggle text-white " href="#" data-bs-toggle="dropdown">Categorias</a>
                <div class="dropdown-menu dropdown-menu-animated megamenu py-lg-0 ">
                  <div class="row">
                    <div class="col-lg-9">
                      <div class="row p-3 pe-lg-0 ps-lg-5 pt-lg-5">
                        <div class="col-lg-3">
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Semanal</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Planeadores semanaless</a></li>
                           </ul>
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Mensual</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Planeadores mensuales  </a></li>
                           </ul>
                        </div>
                        <div class="col-lg-3">
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Kids</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="blog.html">Lista To do   </a></li>
                          </ul>
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Habitos</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="blog.html">Lista To do   </a></li>
                    
                          </ul>
                            <!-- Megamenu list-->
                            <h6 class="text-uppercase">Work Out</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Planeadores de trabajo   </a></li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Horarios</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Planeadores de horario   </a></li>
                          </ul>
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Viajes</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Listas To do   </a></li>  

                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Viveres</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Listas To do   </a></li>  
                          </ul>
                          <!-- Megamenu list-->
                          <h6 class="text-uppercase">Kanban</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Planeadores  Kanban </a></li>
                           </ul>
                              <!-- Megamenu list-->
                              <h6 class="text-uppercase">Metas</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Listas To do   </a></li>  
                          </ul>
                              <!-- Megamenu list-->
                              <h6 class="text-uppercase">Gastos</h6>
                          <ul class="megamenu-list list-unstyled">
                            <li class="megamenu-list-item"><a class="megamenu-list-link" href="index.html">Planeadores de gastos   </a></li>
                           </ul>
                        </div>
                      </div>
                      <div class="row megamenu-services d-none d-lg-flex">
                        <div class="col-xl-3 col-lg-6 d-flex">
                          <div class="megamenu-services-item">
                            <svg class="svg-icon megamenu-services-icon">
                              <use xlink:href="#delivery-time-1"> </use>
                            </svg>
                            <div>
                              <h6 class="text-uppercase">Envios gratis</h6>
                              <p class="mb-0 text-muted text-sm">Envios gratis desde $900</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 d-flex">
                          <div class="megamenu-services-item">
                            <svg class="svg-icon megamenu-services-icon">
                              <use xlink:href="#money-1"> </use>
                            </svg>
                            <div>
                              <h6 class="text-uppercase">Dinero seguro</h6>
                              <p class="mb-0 text-muted text-sm">Tu dinero esta 100% seguro gracias a mercado pago</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 d-flex">
                          <div class="megamenu-services-item">
                            <svg class="svg-icon megamenu-services-icon">
                              <use xlink:href="#customer-support-1"> </use>
                            </svg>
                            <div>
                              <h6 class="text-uppercase">449-123-45-47</h6>
                              <p class="mb-0 text-muted text-sm">24/7 disponibles</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 d-flex">
                          <div class="megamenu-services-item">
                            <svg class="svg-icon megamenu-services-icon">
                              <use xlink:href="#secure-payment-1"> </use>
                            </svg>
                            <div>
                              <h6 class="text-uppercase">Pago seguro</h6>
                              <p class="mb-0 text-muted text-sm">Pago seguro</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 d-none d-lg-block position-relative"><img class="bg-image" src="https://cdn.getmidnight.com/4721dc6a803c213861d569b31f3c121f/2021/05/La-importancia-de-la-Orden-de-Compra.jpg" alt=""></div>
                  </div>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link text-white" href="">Especiales</a>
              </li>
            </ul>
            <div class="d-flex align-items-center justify-content-between justify-content-lg-end mt-2 mb-2 my-lg-0">
                <!-- Search Button-->
                <div class="nav-item navbar-icon-link" data-bs-toggle="search">
                    <img src="/assets/icons/search.png" style="width: 25px;" />
                </div>
                <!-- User Not Logged - link to login page-->
                <div class="nav-item">
                 
                    
                    <router-link class="navbar-icon-link" to="/login">
                      <img src="/assets/icons/user.png" style="width: 25px;" />
                      <span class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">Inicio de sesión </span>

                    </router-link>
                </div>
                <!-- Cart Dropdown-->
                <div class="nav-item dropdown">
                    <a class="navbar-icon-link d-lg-none" href="cart.html">
                        <img src="/assets/icons/cart.png" style="width: 25px;" />
                        <span class="text-sm ms-2 ms-lg-0 text-uppercase text-sm fw-bold d-none d-sm-inline d-lg-none">Carrito</span>
                    </a>
                    <div class="d-none d-lg-block">
                        <a class="navbar-icon-link" id="cartdetails" href="cart.html" data-bs-target="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/assets/icons/cart.png" style="width: 25px;" />
                            <div class="navbar-icon-link-badge">3</div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-animated dropdown-menu-end p-4" aria-labelledby="cartdetails">
                            <div class="navbar-cart-product-wrapper">
                                <!-- cart item-->
                                <div class="navbar-cart-product">
                                    <div class="d-flex align-items-center">
                                        <a href="detail.html"><img class="img-fluid navbar-cart-product-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-ian-dooley-347968-unsplash.jpg" alt="..." /></a>
                                        <div class="w-100">
                                            <a class="navbar-cart-product-close" href="#">
                                              <img src="/assets/icons/close.png" style="width: 15px;" />
                                            </a>
                                            <div class="ps-3"><a class="navbar-cart-product-link" href="detail.html">Skull Tee</a><small class="d-block text-muted">Quantity: 1 </small><strong class="d-block text-sm">$75.00 </strong></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- cart item-->
                                <div class="navbar-cart-product">
                                    <div class="d-flex align-items-center">
                                        <a href="detail.html"><img class="img-fluid navbar-cart-product-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-kyle-loftus-596319-unsplash.jpg" alt="..." /></a>
                                        <div class="w-100">
                                            <a class="navbar-cart-product-close" href="#">
                                              <img src="/assets/icons/close.png" style="width: 15px;" />
                                            </a>
                                            <div class="ps-3"><a class="navbar-cart-product-link" href="detail.html">Transparent Blouse</a><small class="d-block text-muted">Quantity: 1 </small><strong class="d-block text-sm">$75.00 </strong></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- cart item-->
                                <div class="navbar-cart-product">
                                    <div class="d-flex align-items-center">
                                        <a href="detail.html"><img class="img-fluid navbar-cart-product-image" src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-serrah-galos-494312-unsplash.jpg" alt="..." /></a>
                                        <div class="w-100">
                                            <a class="navbar-cart-product-close" href="#">
                                              <img src="/assets/icons/close.png" style="width: 15px;" />
                                            </a>
                                            <div class="ps-3"><a class="navbar-cart-product-link" href="detail.html">White Tee</a><small class="d-block text-muted">Quantity: 1 </small><strong class="d-block text-sm">$75.00 </strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- total price-->
                            <div class="navbar-cart-total"><span class="text-uppercase text-muted">Total</span><strong class="text-uppercase">$75.00</strong></div>
                            <!-- buttons-->
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-link text-dark me-3" href="cart.html">Carrito
                                  <img src="/assets/icons/shopping-bag.png" style="width: 15px;">
                                </a>
                                <a class="btn btn-outline-dark" href="checkout1.html">Ir a pago</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </nav>
      <!-- /Navbar -->
      <!-- Fullscreen search area-->
      <div class="search-area-wrapper">
        <div class="search-area d-flex align-items-center justify-content-center">
          <div class="close-btn">
            <svg class="svg-icon svg-icon-light w-3rem h-3rem">
              <use xlink:href="#close-1"> </use>
            </svg>
          </div>
          <form class="search-area-form" action="#">
            <div class="mb-4 position-relative">
              <input class="search-area-input" type="search" name="search" id="search" placeholder="Ques estas buscando hoy?">
              <button class="search-area-button" type="submit">
                <svg class="svg-icon">
                  <use xlink:href="#search-1"> </use>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- /Fullscreen search area-->
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
