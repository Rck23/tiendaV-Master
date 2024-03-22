<template>
  <div>
    <div class="container contact-form">
      <div class="row"></div>
      <div class="contact-image">
        <!-- <img src="https://res.cloudinary.com/dh80ed02z/image/upload/v1705689766/kovymt3mcg5hqqlaf2jp.png" alt="rocket_contact"/> -->
        <img
          src="https://res.cloudinary.com/dh80ed02z/image/upload/v1710869858/ov7tvkfahxhrm4pe7uty.png"
          alt="rocket_contact"
        />
      </div>
      <form method="post">
        <h3>Mandanos un mensaje con tu idea</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-3">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Nombre completo *"
                value=""
              />
            </div>
            <div class="form-group mb-3">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Correo electrónico *"
                value=""
              />
            </div>
            <div class="form-group mb-3">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Numero de telefono *"
                value=""
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-3">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Plasma tu idea en este espacio... *"
                style="width: 100%; height: 150px"
              ></textarea>
            </div>
          </div>
          <div class="form-group mb-3 text-center">
            <input
              type="submit"
              name="btnSubmit"
              class="btnContact w-50 btn-lg"
              value="Enviar Mensaje"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style >
.contact-form {
  background: #fff;
  margin-top: 10%;
  margin-bottom: 5%;
  width: 70%;
}
.contact-form .form-control {
  border-radius: 1rem;
}
.contact-image {
  text-align: center;
}
.contact-image img {
  border-radius: 3rem;
  width: 13%;
}
.contact-form form {
  padding: 8%;
}
.contact-form form .row {
  margin-bottom: -7%;
}
.contact-form h3 {
  margin-bottom: 8%;
  margin-top: -10%;
  text-align: center;
  color: #174193;
}
.contact-form .btnContact {
  width: 50%;
  border: none;
  border-radius: 1rem;
  padding: 1.5%;
  background: #ed880b;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}
.btnContactSubmit {
  width: 50%;
  border-radius: 1rem;
  padding: 1.5%;
  color: #fff;
  background-color: #174193;
  border: none;
  cursor: pointer;
}
</style>


<script>
export default {
  name: "ProductosEspecialesApp",
};
</script>