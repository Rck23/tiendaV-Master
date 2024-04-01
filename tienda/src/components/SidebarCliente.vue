<template>
    <div>
        <div class="customer-sidebar card border-0"> 
            <div class="customer-profile"><a class="d-inline-block" href="#"><img class="img-fluid rounded-circle customer-image shadow" src="https://static.vecteezy.com/system/resources/previews/012/532/064/non_2x/native-african-black-man-using-smart-phone-free-photo.jpg" alt=""></a>
                <h5>Ulises Martínez</h5>
                <p class="text-muted text-sm mb-0">Aguascalientes, México</p>
            </div>
            <nav class="list-group customer-nav">
                <!-- <a class="list-group-item d-flex justify-content-between align-items-center text-decoration-none " active-class="active" href="customer-orders.html"><span>
                    <svg class="svg-icon svg-icon-heavy me-2">
                        <use xlink:href="#paper-bag-1"> </use>
                    </svg>Ordenes</span>
                    
                </a> -->
                <router-link class="list-group-item d-flex justify-content-between align-items-center text-decoration-none " active-class="active" to="/cuenta/venta">
                    <span>
                        <svg class="svg-icon svg-icon-heavy me-2">
                            <use xlink:href="#male-user-1"> </use>
                        </svg>Pedidos
                    </span>
                </router-link>
                <router-link to="/cuenta/direcciones"  class=" list-group-item d-flex justify-content-between align-items-center text-decoration-none " active-class="active"><span>
                    <svg class="svg-icon svg-icon-heavy me-2">
                        <use xlink:href="#navigation-map-1"> </use>
                    </svg>Direcciones</span>
                </router-link>
                <!-- <a class="list-group-item d-flex justify-content-between align-items-center text-decoration-none " href="customer-login.html"><span>
                    <svg class="svg-icon svg-icon-heavy me-2">
                        <use xlink:href="#exit-1"> </use>
                    </svg>Log out</span>
                </a> -->
            </nav>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SidebarCliente',
}
</script>