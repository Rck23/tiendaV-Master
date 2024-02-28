// Importamos Vue, el componente principal de la aplicación, el router y el store de Vuex
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importamos el plugin de notificaciones y el plugin de paginación
import Notifications from "vue-notification";
import VuePaginate from "vue-paginate";

// Importamos BootstrapVue y sus plugins de iconos y modal
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { ModalPlugin } from "bootstrap-vue";

import "vue-search-select/dist/VueSearchSelect.css"

// Desactivamos el mensaje de producción en entorno de desarrollo
Vue.config.productionTip = false;

// Definimos variables globales para la URL de la API y el token de autenticación
Vue.prototype.$urlAPI = "http://localhost:4201/api";
Vue.prototype.$token = localStorage.getItem("token");
Vue.prototype.$ganancia = 30;
Vue.prototype.$categorias = ['Ropa', 'Tecnologia', 'Hogar'];

// Usamos los plugins de notificaciones, paginación, BootstrapVue, IconsPlugin y ModalPlugin
Vue.use(Notifications);
Vue.use(VuePaginate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ModalPlugin);

// Creamos una nueva instancia de Vue con el router, el store y el componente principal
new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
