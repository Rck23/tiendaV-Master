<template>
  <!-- Footer-->
  <footer class="main-footer">
    
<div
 class="py-6 text-muted d-flex flex-column justify-content-center align-items-center mt-7"
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
              
            
              <li class="list-inline-item">
                <img
                  class="w-3rem"
                  src="/assets/media/1.webp"
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
  