// Importamos Vue y Vuex
import Vue from "vue";
import Vuex from "vuex";

// Usamos Vuex en nuestra aplicación Vue
Vue.use(Vuex);

// Creamos una nueva instancia de Vuex Store para manejar el estado global de la aplicación
export default new Vuex.Store({
  // Estado global de la aplicación, que incluye el token de autenticación almacenado en localStorage
  state: {
    token: localStorage.getItem("token"), // <--- Obtiene el token del almacenamiento local
  },
  // Getters son funciones que se utilizan para acceder al estado de manera reactiva
  getters: {
    // Aquí se pueden definir getters para acceder al token u otras propiedades del estado
  },
  // Mutaciones son funciones que se utilizan para cambiar el estado de manera reactiva
  mutations: {
    // Mutación para establecer el token en el estado
    setToken(state, token) {
      state.token = token; // <--- Actualiza el token en el estado
    },
  },
  // Acciones son funciones que pueden ser asíncronas y que llaman a mutaciones para cambiar el estado
  actions: {
    // Acción para guardar el token en el estado y en el almacenamiento local
    saveToken({ commit }, token) {
      commit("setToken", token); // <--- Llama a la mutación para actualizar el token
      localStorage.setItem("token", token); // <--- Guarda el token en el almacenamiento local
    },
  },
  // Los módulos permiten dividir el store en partes más pequeñas y manejables
  modules: {
    // Aquí se pueden definir módulos para organizar mejor el estado y las acciones
  },
});
