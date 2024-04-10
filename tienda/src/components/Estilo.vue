<template>
  <div>
    <section class="mx-7">
      <h1
        style="color: #0047ba; cursor: pointer"
        data-bs-toggle="collapse"
        data-bs-target="#diseno-estilo"
        aria-expanded="false"
        aria-controls="diseno-estilo"
      >
        Diseño/Estilo
        <img
          src="/assets/media/angulo-hacia-abajo.png"
          alt=""
          style="width: 44px"
        />
      </h1>

      <div
        class="collapse"
        id="diseno-estilo"
        style="margin: 30px 0px 0px 10px"
      >
        <div class="row">
          <div class="col-4" style="height: 33rem">
            <h3 style="color: #0047ba; margin-bottom: 14px">Temas</h3>

            <div class="expand-lg collapse" id="colourFilterMenu">
              

              <div class="row">
                <div class="col color-texto p-3">
                  <div>
                    <h4>Neutral</h4>
                    <span>Colores</span>
                  </div>
                </div>
                <div class="col-9">
                  <div class="mx-5">
                    <label
                      class="btn-colour"
                      for="Azul"
                      style="
                        background-color: #0047ba;
                        width: 44px;
                        height: 44px;
                      "
                      v-on:click="selectedColor('Azul')"
                    >
                    </label>
                    <input
                      class="input-invisible"
                      type="checkbox"
                      name="colour"
                      value="Azul"
                      id="Azul"
                    />

                    <label
                      class="btn-colour"
                      for="Blanco"
                      style="
                        background-color: #fff;
                        width: 44px;
                        height: 44px;
                        margin-left: 12px;
                      "
                      v-on:click="selectedColor('Blanco')"
                    >
                    </label>
                    <input
                      class="input-invisible"
                      type="checkbox"
                      name="colour"
                      value="Blanco"
                      id="Blanco"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col color-texto p-3">
                  <div>
                    <h4>Kawaii</h4>
                    <span>Colores</span>
                  </div>
                </div>
                <div class="col-9">
                  <div class="mx-5 ">
                    <label
                      class="btn-colour"
                      for="Rosa"
                      style="
                        background-color: #ec7aac;
                        width: 44px;
                        height: 44px;
                      "
                      v-on:click="selectedColor('Rosa')"
                    >
                    </label>
                    <input
                      class="input-invisible"
                      type="checkbox"
                      name="colour"
                      value="Rosa"
                      id="Rosa"
                    />

                    <label
                      class="btn-colour"
                      for="AzulCielo"
                      style="
                        background-color: #92d3f5;
                        width: 44px;
                        height: 44px;
                        margin-left: 12px;
                      "
                      v-on:click="selectedColor('AzulCielo')"
                    >
                    </label>
                    <input
                      class="input-invisible"
                      type="checkbox"
                      name="colour"
                      value="AzulCielo"
                      id="AzulCielo"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col color-texto p-3">
                  <div>
                    <h4>Dark</h4>
                    <span>Colores</span>
                  </div>
                </div>
                <div class="col-9">
                  <div class="mx-5 ">
                    <label
                      class="btn-colour"
                      for="Negro"
                      style="
                        background-color: #000;
                        width: 44px;
                        height: 44px;
                        color: #000;
                      "
                      v-on:click="selectedColor('Negro')"
                    >
                    </label>
                    <input
                      class="input-invisible"
                      type="checkbox"
                      name="colour"
                      value="Negro"
                      id="Negro"
                    />

                    <label
                      class="btn-colour"
                      for="Gris"
                      style="
                        background-color: #aaaaaa;
                        width: 44px;
                        height: 44px;
                        margin-left: 12px;
                      "
                      v-on:click="selectedColor('Gris')"
                    >
                    </label>
                    <input
                      class="input-invisible"
                      type="checkbox"
                      name="colour"
                      value="Gris"
                      id="Gris"
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div class="col-4">
            <h3 style="color: #0047ba; margin-bottom: 22px">Personalizalo</h3>
            <div class="col-11">
              <input
                type="text"
                style="height: 50px"
                class="m-2 rounded-pill form-control"
                placeholder="Nombre"
              />
            </div>
          </div>

          <div class="col-4">
            <h3 style="color: #0047ba; margin-bottom: 14px">Imagen</h3>
            <div
              style="
                width: 33rem;
                border-radius: 15px;
                height: 28rem;
                border-style: dashed;
                color: #dedede;
                border-width: 4px;
              "
            >
              <div
                class="card-body text-center"
                style="margin: 55px 55px 55px 55px"
              >
                <img
                  src="/assets/media/cargar.png"
                  alt="subir_imagen"
                  class="mb-2"
                />
                <h4 class="color-texto text-uppercase">Tu imagen aqui</h4>
                <p class="color-texto" style="font-size: 20px">
                  Arrastra y suelta imagen (JPG o PNG) o búscalo en tu ordenador
                  haciendo click en el botón de abajo.
                </p>
                <a
                  class="btn text-uppercase text-white rounded-pill"
                  style="font-size: 22px; background-color: #f18a00"
                  >Subir imagen</a
                >
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Estilo",
  data() {
    return {};
  },
};
</script>
