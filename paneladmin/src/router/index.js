// Importamos Vue, VueRouter, los componentes de la vista y el store de Vuex
import Vue from "vue";
import VueRouter from "vue-router";
import LoginApp from "../views/LoginApp.vue";
import CrearEmpleadoApp from "../views/Empleados/CrearEmpleadoApp.vue";
import IndexEmpleadoApp from "../views/Empleados/IndexEmpleadoApp.vue";
import store from "@/store/index";
import  {jwtDecode} from "jwt-decode";

// Usamos VueRouter en nuestra aplicación Vue
Vue.use(VueRouter);

// Definimos las rutas de la aplicación
const routes = [
  // Ruta de inicio de sesión
  { path: "/", name: "login", component: LoginApp, meta: { requiresAuth: false }},
  // Ruta del índice de colaboradores
  {
    path: "/colaborador",
    name: "colaborador-index",
    component: IndexEmpleadoApp,
    meta: { requiresAuth: true },
  },
  // Ruta para crear un nuevo colaborador
  {
    path: "/colaborador/create",
    name: "colaborador-create",
    component: CrearEmpleadoApp,
    meta: { requiresAuth: true },
  },
  // Ruta para editar un colaborador existente
  {
    path: "/colaborador/edit/:id",
    name: "colaborador-edit",
    component: () => import("@/views/Empleados/EditarEmpleadoApp.vue"),
    meta: { requiresAuth: true },
  },
  // Ruta del dashboard
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashboardApp.vue"),
    meta: { requiresAuth: true },
  },


  // Ruta del índice de productos
  {
    path: "/producto",
    name: "producto-index",
    component: () => import("@/views/Productos/IndexProductoApp.vue"),
    meta: { requiresAuth: true },
  },
  // Ruta para crear un nuevo producto
  {
    path: "/producto/create",
    name: "producto-create",
    component: () => import("@/views/Productos/CrearProductoApp.vue"),
    meta: { requiresAuth: true },
  },
    // Ruta para editar un colaborador existente
    {
      path: "/producto/edit/:id",
      name: "producto-edit",
      component: () => import("@/views/Productos/EditarProductoApp.vue"),
      meta: { requiresAuth: true },
    },


    // RUTAS DE INGRESOS

    {
      path: "/ingreso",
      name: "ingreso-index",
      component: () => import("@/views/Ingresos/IndexIngresoApp.vue"),
      meta: { requiresAuth: true },
    },

    {
      path: "/ingreso/create",
      name: "ingreso-create",
      component: () => import("@/views/Ingresos/CrearIngresoApp.vue"),
      meta: { requiresAuth: true },
    },
];

// Creamos una nueva instancia de VueRouter con las rutas definidas
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Middleware para proteger las rutas que requieren autenticación
router.beforeEach((to, from, next) => {
  // Si la ruta requiere autenticación y no hay token o el token es inválido
  if(to.matched.some(item => item.meta.requiresAuth)){
    if(!store.state.token || jwtDecode(store.state.token).exp*1000 <= new Date().getTime()){
      next({
        name: 'login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// Exportamos el router para su uso en la aplicación Vue
export default router;
