<template>
  <!-- Footer-->
  <footer class="main-footer">
    <!-- Services block-->
    <div class="text-dark-700 py-6">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 service-column" data-aos="fade-right">
            <img
              class="svg-icon service-icon"
              src="/assets/media/camion.gif"
              alt=""
            />
            <div class="service-text">
              <h6 class="text-uppercase">Envios gratis</h6>
              <p class="text-muted fw-light text-sm mb-0">
                Envios gratis desde $900
              </p>
            </div>
          </div>
          <div class="col-lg-4 service-column" data-aos="fade-up">
            <img
              class="svg-icon service-icon"
              src="/assets/media/euro.gif"
              alt=""
            />
            <div class="service-text">
              <h6 class="text-uppercase">Dinero seguro</h6>
              <p class="mb-0 text-muted text-sm">Tu dinero esta 100% seguro</p>
            </div>
          </div>
          <div class="col-lg-4 service-column" data-aos="fade-left">
            <img
              class="svg-icon service-icon"
              src="/assets/media/tailandes.gif"
              alt=""
            />
            <div class="service-text">
              <h6 class="text-uppercase">449-123-45-47</h6>
              <p class="mb-0 text-muted text-sm">9:30am - 5:00pm disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main block - menus, subscribe form-->
<div
 class="py-6 text-muted d-flex flex-column justify-content-center align-items-center"
 style="background-color: #fbdcb3 !important; height: 300px"
>
 <div class="container">
    <div class="row">
      <!-- Contacto a la izquierda -->
      <div class="col-lg-4 mt-7 mb-lg-0">
        <div
          class="fw-bold text-uppercase text-lg mb-3"
          style="color: #0047ba"
        >
          Contacto
        </div>
        <ul class="list-unstyled">
          <li>
            <a class="fw-bold" style="color: #0047ba" href="#">Ventas</a>
          </li>
          <li>
            <a class="fw-bold" style="color: #0047ba" href="#">Soporte</a>
          </li>
          <li>
            <a class="fw-bold" style="color: #0047ba" href="#">Facturación</a>
          </li>
          <li>
            <a class="fw-bold" style="color: #0047ba" href="#">Términos y condiciones</a>
          </li>
          <li>
            <a class="fw-bold" style="color: #0047ba" href="#">FAQ's</a>
          </li>
        </ul>
      </div>
      <!-- Imagen centrada en el medio -->
      <div
        class="col-lg-4 d-flex justify-content-center align-items-center"
      >
        <img
          style="max-width: 500px; height: auto"
          class="img-fluid"
          src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/jouairfx9uu8ywpe1tug.png"
          alt="Logo"
        />
      </div>
    
    </div>
 </div>
</div>


    <!-- Copyright section of the footer-->
    <div
      class="py-4 "
      
      style="background-color: #fbdcb3 !important;"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-md-0 fw-bold"  style="color: #0047ba">
              &copy; {{ year }} Mi tienda. Todos los derechos reservados.
            </p>
          </div>
          <div class="col-md-6" >
            <ul class="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end" >
              <li class="list-inline-item" >
                <img
                  class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/visa.svg"
                  alt="..."
                  
                />
              </li>
              <li class="list-inline-item" >
                <img
                  class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/mastercard.svg"
                  alt="..."
                />
              </li>
              <li class="list-inline-item">
                <img
                  class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/paypal.svg"
                  alt="..."
                />
              </li>
              <li class="list-inline-item">
                <img
                  class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/western-union.svg"
                  alt="..."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
  <script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
  