import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSocketIO from 'vue-socket.io'
import socketIO from 'socket.io-client'

const socketConnection = socketIO('http://localhost:4201');

Vue.config.productionTip = false

Vue.prototype.$urlAPI = "http://localhost:4201/api";
Vue.prototype.$token = localStorage.getItem("token");
Vue.prototype.$envio = 109;
Vue.prototype.$paises = ['México'];

Vue.use(BootstrapVue)

Vue.use(new VueSocketIO({
  debug: true,
  connection: socketConnection,
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  options: { path: "/my-app/" } //Optional options
}))

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
