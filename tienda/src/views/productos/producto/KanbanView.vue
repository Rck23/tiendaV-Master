<template>
    <div style="margin: 8rem 0px 0 0px" class="container-fluid">
      <section class="mb-5 mx-5">
        <div class="row">
          <div
            class="col-5 text-white"
            style="background-color: #f18a00; height: 33rem"
          >
            <div style="margin: 50px 100px 100px 100px">
              <p class="fs-2 mb-0">Método</p>
              <h2 class="mb-2">Kanban</h2>
              <p class="fs-4 mt-4" style="text-align: justify; width: 30rem">
                Método visual de gestión de proyectos que permite a los equipos
                visualizar sus flujos de trabajo y la carga de trabajo.
              </p>
            </div>
          </div>
          <div class="col-4" style="background-color: #f18a00">
            <img
              src="/assets/imgs/kanban.png"
              alt="kanban"
              style="margin: 0px 0px 0px 0px; width: 100%"
            />
          </div>
          <div class="col-3" style="background-color: #f18a00">
            <div class="row" style="height: 15rem; margin: 20px 10px 10px 10px">
              <div
                class="col col-12 container"
                style="
                  background-color: #fff;
                  border-radius: 10px;
                  color: #0047ba;
                "
              >
                <div class="mb-3">
                  <img
                    src="/assets/media/logoaqui.png"
                    alt="tu logo"
                    class="rounded mx-auto d-block"
                    style="margin-top: 20px; width: 90%"
                  />
                  <div class="container fs-5">
                    <div class="row m-2 justify-content-center">
                      <div class="col-6 fw-bold text-start">Material</div>
                      <div class="col-6 fw-bold text-muted text-end">
                        Acrílico
                      </div>
                    </div>
  
                    <div class="row m-2 justify-content-center">
                      <div class="col-6 fw-bold text-start">Tamaño</div>
                      <div class="col-6 fw-bold text-muted text-end">
                        Tabloide
                      </div>
                    </div>
  
                    <div class="row m-2 justify-content-center">
                      <div class="col-6 fw-bold text-start">Estilo</div>
                      <div class="col-6 fw-bold text-muted text-end">Neutral</div>
                    </div>
  
                    <div class="row m-2 justify-content-center">
                      <div class="col-6 fw-bold text-start">Acabados</div>
                      <div class="col-6 fw-bold text-muted text-end">
                        Cinta doble cara
                      </div>
                    </div>
                  </div>
  
                  <div class="container text-center">
                    <button
                      type="button"
                      class="btn text-white mt-6"
                      style="border-radius: 10px; background-color: #0047ba"
                    >
                      <strong class="fs-4">Agregar al carrito</strong>
                    </button>
  
                    <button
                      type="button"
                      class="btn text-white mt-3"
                      style="border-radius: 10px; background-color: #f18a00"
                    >
                      <strong class="fs-4">Descargar cotización</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="row" style="height: 15rem; margin: -120px 10px 10px 50px">
          <div
            class="col col-4"
            style="
              background-color: #fff;
              border-radius: 10px 0px 0px 10px;
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
                <p style="margin-top: 20px; width: 88%" class="fs-5">
                  Este es el estilo más pedido. Ve a
                  <strong>OPCIONES AVANZADAS</strong> si quieres otra
                  configuración.
                </p>
              </div>
            </div>
          </div>
          <div class="colo col-5">
            <div>
              <h3>Tamaño</h3>
              <div class="carda-container">
                <div class="card border-white" style="width: 100px; margin: 0px 0px 0px 0px; ">
                  <img
                    src="/assets/imgs/poster.png"
                    class="card-img"
                    alt="poster"
                    style="width: 90px; margin: 25px 0px 25px 15px "
                  />
                  <div class="">
                    <p class="fw-bold fs-5">
                      Tabloide <br />
                      28 x 43 cm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/assets/media/anadir.png" alt="mas" class="signo" />
            <div>
              <h3>Material</h3>
              <div class="carda-container">
                <div class="card border-white" style="width: 133px; margin: 0px 0px 0px 0px;">
                  <img
                    src="/assets/imgs/vinil_imantado.png"
                    class="card-img-top"
                    alt="vinil_imantado"
                    style="width: 110px"
                  />
                  <div class="">
                    <p class="fw-bold fs-5">Vinil imantado</p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/assets/media/anadir.png" alt="mas" class="signo" />
            <div>
              <h3>Acabados</h3>
              <div class="carda-container">
                <div class="card border-white" style="width: 100px; margin: 0px 0px 0px 0px;">
                  <img
                    src="/assets/imgs/cinta_doble_cara.png"
                    class="card-img-top"
                    alt="cinta_doble_cara"
                    style="width: 120px"
                  />
                  <div class="">
                    <p class="fw-bold fs-5">Cinta doble cara.</p>
                  </div>
                </div>
                <!-- Repite el div.card para más cards -->
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <hr style="margin-top: 150px; background-color: #000; height: 2px" />
  
      <section class="mx-7">
        <h1
          style="color: #0047ba; cursor: pointer"
          data-bs-toggle="collapse"
          data-bs-target="#opciones-avanzada"
          aria-expanded="false"
          aria-controls="opciones-avanzada"
        >
          Opciones Avanzadas
          <img
            src="/assets/media/angulo-hacia-abajo.png"
            alt=""
            style="width: 44px"
          />
        </h1>
  
        <div class="collapse" id="opciones-avanzada">
          <div class="mb-2 color-texto">
            <h3>Tamaño</h3>
            <div class="row">
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/poster.png"
                    class="card-img-top"
                    alt="poster"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Poster <br />
                      <span style="font-size: 18px">120 x 80 cm</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/poster.png"
                    class="card-img-top"
                    alt="Tabloide"
                    style="width: 70%; margin: 25px"
                  />
                  <div class="card-body" style="width: 130%">
                    <h5 class="card-title">
                      Tabloide <br />
                      <span style="font-size: 18px">28 x 43 cm</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/poster.png"
                    class=""
                    alt="Carta"
                    style="width: 40%; margin: 50px"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Carta <br />
                      <span style="font-size: 18px">21 x 28 cm</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mb-2 color-texto">
            <h3>Material</h3>
            <div class="row">
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/pvc.png"
                    class="card-img-top"
                    alt="pvc"
                  />
                  <div class="card-body">
                    <h5 class="card-title">PVC</h5>
                    <p class="card-text">
                      Sustrato rígido Color Blanco 3mm de grosor.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/acrilico.png"
                    class="card-img-top"
                    alt="acrílico"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Acrílico</h5>
                    <p class="card-text">
                      Sustrato rígido Transparente 3mm de grosor.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/vinil_pintarron.png"
                    class="card-img-top"
                    alt="pintarron vinil"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Vinil Pintarrón</h5>
                    <p class="card-text">
                      Sustrato Flexible Color Blanco Adherible.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/vinil_imantado.png"
                    class="card-img-top"
                    alt="vinil imantado"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Vinil Imantado</h5>
                    <p class="card-text">Sustrato Flexible Color Blanco Imán.</p>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/lona.png"
                    class="card-img-top"
                    alt="lona"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Lona 13 Oz</h5>
                    <p class="card-text">Sustrato Flexible Color Blanco.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mb-2 color-texto">
            <h3>
              Acabados
              <span style="font-size: 16px">(*Para sustratos rígidos)</span>
            </h3>
            <div class="row">
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/chupones.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Chupones</h5>
                    <p class="card-text">
                      Para adherir a una ventana o superficie de vidrio.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/soportes.png"
                    class="card-img-top"
                    alt="soportes"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Soportes</h5>
                    <p class="card-text">
                      Para sustrato rígidos (PVC o acrílico).
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/cinta_de_iman.png"
                    class="card-img-top"
                    alt="cinta_de_iman"
                    style="width: 80%"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Cinta de imán</h5>
                    <p class="card-text">Para adherir en metal.</p>
                  </div>
                </div>
              </div>
  
              <div class="col col-2">
                <div class="" style="width: 15rem">
                  <img
                    src="/assets/imgs/cinta_doble_cara.png"
                    class="card-img-top"
                    alt="cinta_doble_cara"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Cinta de doble cara</h5>
                    <p class="card-text">Para adherir en cualquier superficie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <hr style="margin-top: 150px; background-color: #000; height: 2px" />
  
      <Estilo/>
  
      
    </div>
  </template>
  
  <style>
  
  
  .contenedor {
    display: flex;
    align-items: center; /* Alinea los elementos verticalmente en el centro */
    padding: 0px;
  }
  .contenedor img {
    width: 50%; /* Ajusta el ancho de la imagen */
    margin: 0px; /* Añade un margen a la derecha de la imagen */
  }
  .contenedor h2,
  .contenedor p {
    margin: 10px 0px 10px 0px; /* Elimina el margen predeterminado */
  }
  
  .color-texto {
    color: #0047ba;
  }
  
  .colo {
    display: flex;
    justify-content: space-between; /* Distribuye el espacio entre las columnas */
    background-color: #fff;
    border-radius: 0px 10px 10px 0px;
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
    padding: 10px; /* Añade un poco de padding para mejorar la apariencia */
    width: 100%; /* Asegura que las cards ocupen todo el ancho disponible */
  }
  .carda img {
    width: 100%;
    height: auto;
  }
  .signo {
    width: 30px; /* Ajusta el tamaño del signo de "+" */
    height: 30px;
  
    text-align: center; /* Centra el signo de "+" */
    margin: 88px 20px 20px 0px; /* Añade un margen debajo del signo de "+" para separarlo de las cards siguientes */
  }
  </style>
  
  <script>
  import Estilo from '@/components/Estilo.vue'
  
  export default {
    name: "KanbanView",
  
    
    components: {
      Estilo
      }
  };
  </script>
  