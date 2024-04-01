<template>
    <div class="pb-5">
        <section class="hero" style="margin-top: 8rem">
      <div class="container">
  
        <!-- Hero Content-->
        <div class="hero-content pb-5 text-center">
          <h1 class="hero-heading">Mis pedidos</h1>
          <div class="row">   
            <div class="col-xl-8 offset-xl-2"><p class="lead">pedidos realizados.</p></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <table class="table table-hover table-responsive ">
              <thead class="text-white " style="background: #f19000;">
                <tr>
                  <th class="py-4 text-uppercase text-sm"># Orden</th>
                  <th class="py-4 text-uppercase text-sm">Fecha</th>
                  <th class="py-4 text-uppercase text-sm">Total</th>
                  <th class="py-4 text-uppercase text-sm">Estatus</th>
                  <th class="py-4 text-uppercase text-sm">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in ventas">
                  <th class="py-4 align-middle"># {{ item.serie.toString().padStart(6, "000000") }}</th>
                  <td class="py-4 align-middle">{{ convertFecha(item.createdAt) }}</td>
                  <td class="py-4 align-middle">{{ convertCurrency(item.total+item.envio) }}</td>
                  <td class="py-4 align-middle"><span class="badge p-2 text-uppercase badge-success-light">{{ item.estado }}</span></td>
                  <td class="py-4 align-middle">
                    <router-link class="btn text-white btn-sm" style="background: #1f49b6; border-radius: 10px" :to="{name: 'venta', params:{id:item._id}}">Detalles</router-link>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>

         
          <!-- Customer Sidebar-->
          <div class="col-xl-3 col-lg-4 mb-5">
            <SidebarCliente />

          </div>
          <!-- /Customer Sidebar-->
        </div>
      </div>
    </section>
    </div>
</template>


<script>
import SidebarCliente from "@/components/SidebarCliente.vue";
import axios from "axios";
import moment from "moment";
import currency_formatter from "currency-formatter";

export default {
    name: 'VentaIndexApp',

    data() {
        return {
            ventas: [], 
        }
    },
    components: {
        SidebarCliente,
    },

    beforeMount() {
        this.init_ventas();
    },

    methods: {
        init_ventas(){
            axios.get(this.$urlAPI + "/obtener_ventas_cliente",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.$store.state.token,
            },
          }
        )
        .then((result) => {
        
          this.ventas = result.data;
        })

        },

        convertFecha(item) {
      return moment(item).format("DD/MM/YYYY");
    },

    convertCurrency(number) {
      return currency_formatter.format(number, { code: "USD" });
    },
    },
}
</script>