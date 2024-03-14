import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // Estado global de la aplicación, que incluye el token de autenticación almacenado en localStorage
  state: {
    token: localStorage.getItem("token"), // <--- Obtiene el token del almacenamiento local
    usuario: localStorage.getItem("usuario_data"), // <--- Obtiene el usuario del almacenamiento local
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
    setUsuario(state, usuario) {
      state.usuario = usuario; // <--- Actualiza el usuario en el estado
    },
  },
  // Acciones son funciones que pueden ser asíncronas y que llaman a mutaciones para cambiar el estado
  actions: {
    // Acción para guardar el token en el estado y en el almacenamiento local
    saveToken({ commit }, token) {
      commit("setToken", token); // <--- Llama a la mutación para actualizar el token
      localStorage.setItem("token", token); // <--- Guarda el token en el almacenamiento local
    },
    saveUsuario({ commit }, usuario) {
      commit("setUsuario", usuario); // <--- Llama a la mutación para actualizar el token
      localStorage.setItem("usuario_data", usuario); // <--- Guarda el token en el almacenamiento local
    },
    logout({commit}){
      commit("setToken", null);
      localStorage.clear();
    }
  },
  // Los módulos permiten dividir el store en partes más pequeñas y manejables
  modules: {
    // Aquí se pueden definir módulos para organizar mejor el estado y las acciones
  },
})
