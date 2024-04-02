<template>
  <div style="margin: 8rem 100px 0 100px">
    <div class="row">
      <div
        class="col-5 text-white"
        style="background-color: #f18a00; height: 33rem"
      >
        <div style="margin: 50px 100px 100px 100px">
          <p class="fs-2 mb-0">Planner</p>
          <h2 class="mb-2">Mensual</h2>
          <p class="fs-4 mt-4" style="text-align: justify; width: 30rem">
            Divide tu tiempo en un formato mensual, permitiéndote visualizar y
            administrar tus tareas, eventos y metas de una forma más amplia.
          </p>
        </div>
      </div>
      <div class="col-4" style="background-color: #fec388">
        <img
          src="/assets/media/mes.png"
          alt="mensual"
          style="margin: -30px 0px 0px -172px; width: 120%"
        />
      </div>
      <div class="col-3" style="background-color: #f18a00"></div>
    </div>

    <div class="row" style="height: 15rem; margin: -120px 10px 10px 50px">
      <div
        class="col col-5"
        style="
          background-color: #fff;
          border-radius: 10px 0px 10px 10px;
          color: #0047ba;
        "
      >
        <div class="contenedor">
          <img
            src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/kxj1qqqzaw99pvlyju0b.png"
            alt="planify_masc"
          />

          <div>
            <h2>
              Lo más <br />
              popular
            </h2>
            <p style="margin-top: 20px; width: 62%" class="fs-5">
              Este es el estilo más pedido. Ve a
              <strong>OPCIONES AVANZADAS</strong> si quieres otra configuración.
            </p>
          </div>
        </div>
      </div>
      <div class="colo col-4">
        <div>
          <h3>Tamaño</h3>
          <div class="carda-container">
            <!-- Aquí van las cards para Tamaño -->
            <!-- <div class="carda">
              <img
                src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/kxj1qqqzaw99pvlyju0b.png"
                alt="Imagen de ejemplo"
              />
              <p>
                Poster <br />
                120 x 80 cm
              </p>
            </div> -->
            <div class="card border-white" style="width: 6rem;">
                <img  src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/kxj1qqqzaw99pvlyju0b.png"
                class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text fw-bold"> Poster <br> 120 x 80cm</p>
                </div>
            </div>
            <!-- Repite el div.card para más cards -->
          </div>
        </div>
        <img src="/assets/media/anadir.png" alt="mas" class="signo" />
        <div>
          <h3>Material</h3>
          <div class="carda-container">
            <!-- Aquí van las cards para Material -->
            <!-- <div class="carda">
              <img
                src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/kxj1qqqzaw99pvlyju0b.png"
                alt="Imagen de ejemplo"
              />
              <p>Sustrato PVC (Rígido)</p>
            </div> -->

            <div class="card border-white" style="width: 6rem;">
                <img  src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/kxj1qqqzaw99pvlyju0b.png"
                class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text fw-bold">Sustrato PVC (Rígido)</p>
                </div>
            </div>
            <!-- Repite el div.card para más cards -->
          </div>
        </div>
        <img src="/assets/media/anadir.png" alt="mas" class="signo" />
        <div>
          <h3>Acabados</h3>
          <div class="carda-container">
            <!-- Aquí van las cards para Acabados -->
            <!-- <div class="carda" >
              <img
                src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/kxj1qqqzaw99pvlyju0b.png"
                alt="Imagen de ejemplo"
              />
              <p>Cinta doble cara</p>
            </div> -->
            <div class="card border-white" style="width: 6rem;">
                <img  src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710875319/Imgs%20Planify/kxj1qqqzaw99pvlyju0b.png"
                class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text fw-bold">Cinta doble cara.</p>
                </div>
            </div>
            <!-- Repite el div.card para más cards -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contenedor {
  display: flex;
  align-items: center; /* Alinea los elementos verticalmente en el centro */
  padding: 5px;
  
}
.contenedor img {
  width: 35%; /* Ajusta el ancho de la imagen */
  margin-right: 10px; /* Añade un margen a la derecha de la imagen */
}
.contenedor h2,
.contenedor p {
  margin: 0; /* Elimina el margen predeterminado */
}

.colo {
  display: flex;
  justify-content: space-between; /* Distribuye el espacio entre las columnas */
  background-color: #fff;

  color: #0047ba;
  padding: 10px;
}
.colo h3 {
  width: 100%; /* Ajusta el ancho para que los títulos ocupen todo el ancho disponible */
  margin-bottom: 10px;
}
.carda-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 10px; /* Añade un margen debajo del contenedor de las cards para separarlos de los signos de "+" */
}
.carda {
  background-color: #fff;
  padding: 20px; /* Añade un poco de padding para mejorar la apariencia */
  width: 100%; /* Asegura que las cards ocupen todo el ancho disponible */
}
.carda img {
  width: 100%;
  height: auto;
}
.signo {
  width: 44px; /* Ajusta el tamaño del signo de "+" */
  height: 44px;
  
  text-align: center; /* Centra el signo de "+" */
  margin: 60px 20px 20px 0px; /* Añade un margen debajo del signo de "+" para separarlo de las cards siguientes */
}
</style>


<script>
export default {
  name: "MensualView",
};
</script>